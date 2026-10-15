import { theoryData, foodDatabase, mealExamples } from './data.js';

// ============================================================================
// ÉTAT GLOBAL & PERSISTANCE LOCALSTORAGE
// ============================================================================
const STORAGE_KEYS = {
  FAVORITES: 'menu_antidiabete_favs_v2',
  SHOPPING: 'menu_antidiabete_shop_v2',
  THEME: 'menu_antidiabete_theme_v2',
  WEEKLY: 'menu_antidiabete_weekly_v2',
};

const state = {
  plate: new Map(), // foodId -> quantity (ex: 1, 1.5, 2)
  foodFilter: 'all',
  foodSearch: '',
  foodSort: 'default',
  recipeCat: 'all',
  recipeSearch: '',
  detoxCat: 'all',
  detoxSearch: '',
  favorites: new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES) || '[]')),
  shoppingList: JSON.parse(localStorage.getItem(STORAGE_KEYS.SHOPPING) || '[]'),
  weeklyPlan: JSON.parse(localStorage.getItem(STORAGE_KEYS.WEEKLY) || 'null'),
};

// Utilitaires de normalisation et formatage sécurisé
function normalizeStr(str = '') {
  return String(str)
    .replace(/œ/gi, 'oe')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatMarkdownText(raw = '') {
  return escapeHtml(raw)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .split('\n')
    .map((line) => `<p>${line}</p>`)
    .join('');
}

let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('app-toast');
  if (!el) return;
  el.textContent = msg;
  el.style.display = 'block';
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.style.display = 'none';
  }, 3500);
}

// ============================================================================
// 0. NAVIGATION, THÈME SOMBRE/CLAIR & IMPRESSION
// ============================================================================
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');

    const targetId = link.getAttribute('data-target');
    sections.forEach((section) => {
      section.classList.toggle('active', section.id === targetId);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

const themeBtn = document.getElementById('btn-theme-toggle');
if (localStorage.getItem(STORAGE_KEYS.THEME) === 'dark') {
  document.body.classList.add('dark-mode');
  if (themeBtn) themeBtn.textContent = '☀️';
}
themeBtn?.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem(STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
  themeBtn.textContent = isDark ? '☀️' : '🌙';
});

document.getElementById('btn-print-page')?.addEventListener('click', () => {
  window.print();
});

// ============================================================================
// 1. SECTION THÉORIE & CALCULATEUR DE CHARGE GLYCÉMIQUE (CG)
// ============================================================================
const theoryContainer = document.getElementById('theory-container');
theoryData.forEach((item) => {
  const card = document.createElement('div');
  card.className = 'theory-card';
  card.innerHTML = `
    <div class="theory-card-top">
      <span class="theory-icon">${escapeHtml(item.icon || '📘')}</span>
      <span class="theory-badge">${escapeHtml(item.badge || 'Pilier IG Bas')}</span>
    </div>
    <h3>${escapeHtml(item.title)}</h3>
    <div class="theory-content">${formatMarkdownText(item.content)}</div>
  `;
  theoryContainer.appendChild(card);
});

const calcIgInput = document.getElementById('calc-ig');
const calcCarbsInput = document.getElementById('calc-carbs100');
const calcPortionInput = document.getElementById('calc-portion');
const calcOutputEl = document.getElementById('calc-cg-output');
const calcVerdictEl = document.getElementById('calc-cg-verdict');

function updateCgCalculator() {
  const ig = Math.max(0, Number(calcIgInput?.value) || 0);
  const carbs100 = Math.max(0, Number(calcCarbsInput?.value) || 0);
  const portion = Math.max(0, Number(calcPortionInput?.value) || 0);

  const carbsPortion = (carbs100 * portion) / 100;
  const cg = (ig * carbsPortion) / 100;

  if (calcOutputEl) calcOutputEl.textContent = cg.toFixed(1);
  if (!calcVerdictEl) return;

  if (cg <= 10) {
    calcOutputEl.style.color = '#059669';
    calcVerdictEl.style.color = '#059669';
    calcVerdictEl.textContent = `💚 Charge Basse (${carbsPortion.toFixed(1)}g glucides) — Idéal`;
  } else if (cg <= 19) {
    calcOutputEl.style.color = '#ca8a04';
    calcVerdictEl.style.color = '#ca8a04';
    calcVerdictEl.textContent = `⚖️ Charge Modérée (${carbsPortion.toFixed(1)}g glucides) — Associez des fibres`;
  } else {
    calcOutputEl.style.color = '#dc2626';
    calcVerdictEl.style.color = '#dc2626';
    calcVerdictEl.textContent = `⚠️ Charge Élevée (${carbsPortion.toFixed(1)}g glucides) — Risque de pic`;
  }
}

[calcIgInput, calcCarbsInput, calcPortionInput].forEach((inp) => {
  inp?.addEventListener('input', updateCgCalculator);
});
updateCgCalculator();

// ============================================================================
// 2. PLANIFICATEUR D'ASSIETTE INTELLIGENT
// ============================================================================
const foodContainer = document.getElementById('food-container');
const plateList = document.getElementById('selected-foods-list');
const cgScoreEl = document.getElementById('cg-score');
const cgFeedbackEl = document.getElementById('cg-feedback');
const plateIgAvgEl = document.getElementById('plate-ig-avg');
const plateKcalEl = document.getElementById('plate-kcal');
const plateCarbsEl = document.getElementById('plate-carbs');
const plateFiberEl = document.getElementById('plate-fiber');
const plateProteinEl = document.getElementById('plate-protein');
const plateHarmonyEl = document.getElementById('plate-harmony-box');
const resetButton = document.getElementById('reset-plate');
const plateToShoppingBtn = document.getElementById('plate-to-shopping');
const foodSearchInput = document.getElementById('food-search');
const foodSortSelect = document.getElementById('food-sort');
const foodFilterBtns = document.querySelectorAll('#food-filters .tag');

function getIgClass(ig) {
  if (ig <= 35) return 'ig-low';
  if (ig <= 50) return 'ig-medium';
  return 'ig-high';
}

function renderFoods() {
  if (!foodContainer) return;
  foodContainer.innerHTML = '';
  const normQuery = normalizeStr(state.foodSearch.trim());

  let items = foodDatabase.filter((food) => {
    if (state.foodFilter !== 'all' && !food.category.includes(state.foodFilter)) return false;
    if (normQuery) {
      const searchable = normalizeStr(
        `${food.name} ${food.category} ${(food.brands || []).join(' ')} ${food.tip || ''}`
      );
      if (!searchable.includes(normQuery)) return false;
    }
    return true;
  });

  if (state.foodSort === 'ig-asc') {
    items.sort((a, b) => a.ig - b.ig);
  } else if (state.foodSort === 'cg-asc') {
    items.sort((a, b) => a.cg - b.cg);
  } else if (state.foodSort === 'protein-desc') {
    items.sort((a, b) => (b.protein || 0) - (a.protein || 0));
  }

  items.forEach((food) => {
    const qty = state.plate.get(food.id) || 0;
    const brandsHtml =
      food.brands && food.brands.length > 0
        ? `<div class="food-brands"><strong>Marques :</strong> ${escapeHtml(food.brands.join(', '))}</div>`
        : '';
    const tipHtml = food.tip ? `<div class="food-tip">💡 ${escapeHtml(food.tip)}</div>` : '';

    const foodEl = document.createElement('div');
    foodEl.className = `food-item ${qty > 0 ? 'selected' : ''}`;
    foodEl.dataset.id = food.id;
    foodEl.innerHTML = `
      <div class="food-top-row">
        <div class="food-icon">${escapeHtml(food.icon)}</div>
        <div class="food-info">
          <h4>${escapeHtml(food.name)}</h4>
          <span class="food-cat-portion">${escapeHtml(food.category)} · ${escapeHtml(food.portion || '1 portion')}</span>
        </div>
      </div>
      <div class="food-badges-row">
        <span class="ig-badge ${getIgClass(food.ig)}">IG ${food.ig}</span>
        <span class="cg-mini-badge">CG +${food.cg}</span>
        <span class="cg-mini-badge">${food.kcal || 0} kcal</span>
        ${qty > 0 ? `<span class="ig-badge ig-low">✓ x${qty}</span>` : ''}
      </div>
      ${brandsHtml}
      ${tipHtml}
    `;

    foodEl.addEventListener('click', () => {
      if (state.plate.has(food.id)) {
        state.plate.delete(food.id);
      } else {
        state.plate.set(food.id, 1);
      }
      renderFoods();
      updatePlate();
    });

    foodContainer.appendChild(foodEl);
  });
}

function updatePlate() {
  if (!plateList) return;
  plateList.innerHTML = '';

  if (state.plate.size === 0) {
    plateList.innerHTML = '<li class="empty-plate-msg">Cliquez sur des aliments à gauche pour composer votre repas.</li>';
    cgScoreEl.textContent = '0.0';
    cgScoreEl.style.color = 'var(--text-main)';
    cgFeedbackEl.textContent = 'Commencez à ajouter des aliments.';
    cgFeedbackEl.style.color = 'var(--text-muted)';
    plateIgAvgEl.textContent = '0';
    plateKcalEl.textContent = '0';
    plateCarbsEl.textContent = '0g';
    plateFiberEl.textContent = '0g';
    plateProteinEl.textContent = '0g';
    plateHarmonyEl.innerHTML =
      '💡 <strong>Règle de l\'Assiette :</strong> Associez au moins 1 légume riche en fibres et 1 source de protéines/bonnes graisses.';
    return;
  }

  let totalCG = 0;
  let totalKcal = 0;
  let totalCarbs = 0;
  let totalFiber = 0;
  let totalProtein = 0;
  let weightedIgSum = 0;
  let weightCount = 0;

  let hasVeggies = false;
  let hasProteinOrFat = false;
  let hasHighGi = false;

  state.plate.forEach((qty, id) => {
    const food = foodDatabase.find((f) => f.id === id);
    if (!food) return;

    const itemCG = food.cg * qty;
    totalCG += itemCG;
    totalKcal += (food.kcal || 0) * qty;
    totalCarbs += (food.carbs || 0) * qty;
    totalFiber += (food.fiber || 0) * qty;
    totalProtein += (food.protein || 0) * qty;
    weightedIgSum += food.ig * qty;
    weightCount += qty;

    if (food.category === 'Légumes') hasVeggies = true;
    if (food.category === 'Protéines' || food.category === 'Graisses Saines' || food.category === 'Laitages') {
      hasProteinOrFat = true;
    }
    if (food.ig >= 60) hasHighGi = true;

    const li = document.createElement('li');
    li.className = 'plate-item-row';
    li.innerHTML = `
      <div>
        <strong>${escapeHtml(food.icon)} ${escapeHtml(food.name)}</strong>
        <div style="font-size: 0.74rem; color: var(--text-muted);">${escapeHtml(food.portion || '')} × ${qty} · +${itemCG.toFixed(1)} CG</div>
      </div>
      <div class="plate-item-controls">
        <button type="button" class="qty-btn" data-qty-action="dec" data-id="${food.id}">-</button>
        <button type="button" class="qty-btn" data-qty-action="inc" data-id="${food.id}">+</button>
        <button type="button" class="qty-btn" data-qty-action="rem" data-id="${food.id}" title="Retirer">✕</button>
      </div>
    `;
    plateList.appendChild(li);
  });

  const avgIg = weightCount > 0 ? Math.round(weightedIgSum / weightCount) : 0;
  cgScoreEl.textContent = totalCG.toFixed(1);
  plateIgAvgEl.textContent = String(avgIg);
  plateKcalEl.textContent = String(Math.round(totalKcal));
  plateCarbsEl.textContent = `${totalCarbs.toFixed(0)}g`;
  plateFiberEl.textContent = `${totalFiber.toFixed(1)}g`;
  plateProteinEl.textContent = `${totalProtein.toFixed(0)}g`;

  if (totalCG <= 10) {
    cgScoreEl.style.color = '#059669';
    cgFeedbackEl.textContent = 'Parfait ! Charge Glycémique très basse (≤ 10) 💚';
    cgFeedbackEl.style.color = '#059669';
  } else if (totalCG <= 19) {
    cgScoreEl.style.color = '#ca8a04';
    cgFeedbackEl.textContent = 'Bien. Charge Glycémique modérée (11–19) ⚖️';
    cgFeedbackEl.style.color = '#ca8a04';
  } else {
    cgScoreEl.style.color = '#dc2626';
    cgFeedbackEl.textContent = 'Attention ! Charge Glycémique élevée (≥ 20) ⚠️';
    cgFeedbackEl.style.color = '#dc2626';
  }

  // Diagnostic d'harmonie de l'assiette
  if (hasHighGi) {
    plateHarmonyEl.innerHTML =
      '⚠️ <strong>Alerte IG élevé :</strong> Votre assiette contient un aliment à IG rapide (≥ 60). Ajoutez des légumes verts, de l\'huile d\'olive ou remplacez-le par du quinoa/lentilles.';
  } else if (hasVeggies && hasProteinOrFat && totalFiber >= 5) {
    plateHarmonyEl.innerHTML =
      '✅ <strong>Assiette Antidiabète Optimale :</strong> Excellente synergie Fibres (' +
      totalFiber.toFixed(1) +
      'g) + Protéines/Lipides ! Commencez votre repas par les légumes.';
  } else if (!hasVeggies) {
    plateHarmonyEl.innerHTML =
      '🥦 <strong>Conseil Fibres :</strong> Ajoutez au moins une portion de légumes (brocoli, épinards, courgette...) en début de repas pour réduire le pic de glucose de 40%.';
  } else if (!hasProteinOrFat) {
    plateHarmonyEl.innerHTML =
      '🐟 <strong>Conseil Satiété :</strong> Ajoutez une source de protéines (œufs, saumon, poulet, tofu) ou de bonnes graisses (avocat, huile d\'olive, amandes).';
  } else {
    plateHarmonyEl.innerHTML =
      '👍 <strong>Bon équilibre :</strong> Assaisonnez d\'un filet d\'huile d\'olive et de jus de citron frais pour ralentir encore l\'absorption.';
  }
}

plateList?.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-qty-action]');
  if (!btn) return;
  const id = btn.dataset.id;
  const action = btn.dataset.qtyAction;
  const current = state.plate.get(id) || 1;

  if (action === 'inc') {
    state.plate.set(id, Math.round((current + 0.5) * 10) / 10);
  } else if (action === 'dec') {
    if (current <= 0.5) state.plate.delete(id);
    else state.plate.set(id, Math.round((current - 0.5) * 10) / 10);
  } else if (action === 'rem') {
    state.plate.delete(id);
  }
  renderFoods();
  updatePlate();
});

resetButton?.addEventListener('click', () => {
  state.plate.clear();
  renderFoods(); // conserve le filtre et la recherche actifs !
  updatePlate();
});

plateToShoppingBtn?.addEventListener('click', () => {
  if (state.plate.size === 0) {
    showToast('Sélectionnez d\'abord des aliments dans votre assiette.');
    return;
  }
  state.plate.forEach((qty, id) => {
    const food = foodDatabase.find((f) => f.id === id);
    if (food) {
      addShoppingItem(`${food.name} (${food.portion || '1 portion'} × ${qty})`, 'Assiette personnalisée');
    }
  });
  showToast('🛒 Aliments de votre assiette ajoutés à la liste de courses !');
});

foodFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    foodFilterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    state.foodFilter = btn.getAttribute('data-filter');
    renderFoods();
  });
});

foodSearchInput?.addEventListener('input', (e) => {
  state.foodSearch = e.target.value;
  renderFoods();
});

foodSortSelect?.addEventListener('change', (e) => {
  state.foodSort = e.target.value;
  renderFoods();
});

renderFoods();
updatePlate();

// ============================================================================
// 3. SEMAINIER 7 JOURS AUTOMATIQUE
// ============================================================================
const DAYS_OF_WEEK = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
const weeklyContainer = document.getElementById('weekly-container');

function pickRandom(arr, excludeTitle = '') {
  if (!arr || arr.length === 0) return null;
  const candidates = arr.filter((r) => r.title !== excludeTitle);
  const pool = candidates.length > 0 ? candidates : arr;
  return pool[Math.floor(Math.random() * pool.length)];
}

function generateWeeklyPlan() {
  const plan = DAYS_OF_WEEK.map((day, idx) => ({
    day,
    breakfast: mealExamples.breakfast[idx % mealExamples.breakfast.length],
    lunch: mealExamples.lunch[(idx * 3) % mealExamples.lunch.length],
    detox: mealExamples.kenwood[(idx * 2) % mealExamples.kenwood.length],
    dinner: mealExamples.dinner[(idx * 4) % mealExamples.dinner.length],
  }));
  state.weeklyPlan = plan;
  localStorage.setItem(STORAGE_KEYS.WEEKLY, JSON.stringify(plan));
  renderWeeklyPlan();
}

function randomizeWeeklyPlan() {
  const plan = DAYS_OF_WEEK.map((day) => ({
    day,
    breakfast: pickRandom(mealExamples.breakfast),
    lunch: pickRandom(mealExamples.lunch),
    detox: pickRandom(mealExamples.kenwood),
    dinner: pickRandom(mealExamples.dinner),
  }));
  state.weeklyPlan = plan;
  localStorage.setItem(STORAGE_KEYS.WEEKLY, JSON.stringify(plan));
  renderWeeklyPlan();
  showToast('📅 Nouveau menu Antidiabète sur 7 jours généré !');
}

function renderWeeklyPlan() {
  if (!weeklyContainer) return;
  if (!state.weeklyPlan || !Array.isArray(state.weeklyPlan) || state.weeklyPlan.length !== 7) {
    generateWeeklyPlan();
    return;
  }

  weeklyContainer.innerHTML = '';

  state.weeklyPlan.forEach((dayObj, dayIdx) => {
    const totalDayCg =
      (dayObj.breakfast?.cg || 5) +
      (dayObj.lunch?.cg || 8) +
      (dayObj.detox?.cg || 2) +
      (dayObj.dinner?.cg || 4);

    const card = document.createElement('div');
    card.className = 'day-card';
    card.innerHTML = `
      <div class="day-header">
        <h3>📅 ${escapeHtml(dayObj.day)}</h3>
        <span class="day-cg-pill">CG Jour : ~${totalDayCg.toFixed(0)} (Optimal < 45)</span>
      </div>

      <div class="day-slot">
        <div class="slot-info">
          <span class="slot-label">🌅 Petit-Déjeuner</span>
          <div class="slot-title">${escapeHtml(dayObj.breakfast?.title || '')}</div>
          <div class="slot-meta">IG ${escapeHtml(dayObj.breakfast?.ig || 'Bas')} · ⏱️ ${escapeHtml(dayObj.breakfast?.time || '8 min')}</div>
        </div>
        <button type="button" class="slot-swap-btn" data-swap-day="${dayIdx}" data-swap-slot="breakfast" title="Changer ce repas">🔄</button>
      </div>

      <div class="day-slot">
        <div class="slot-info">
          <span class="slot-label">☀️ Déjeuner</span>
          <div class="slot-title">${escapeHtml(dayObj.lunch?.title || '')}</div>
          <div class="slot-meta">IG ${escapeHtml(dayObj.lunch?.ig || 'Bas')} · ⏱️ ${escapeHtml(dayObj.lunch?.time || '20 min')}</div>
        </div>
        <button type="button" class="slot-swap-btn" data-swap-day="${dayIdx}" data-swap-slot="lunch" title="Changer ce repas">🔄</button>
      </div>

      <div class="day-slot">
        <div class="slot-info">
          <span class="slot-label">🍹 Jus Détox Kenwood AT641</span>
          <div class="slot-title">${escapeHtml(dayObj.detox?.title || '')}</div>
          <div class="slot-meta">${escapeHtml(dayObj.detox?.ig || 'IG Très Bas')} · ${escapeHtml(dayObj.detox?.kenwoodSpeed || 'Vitesse 1 & 2')}</div>
        </div>
        <button type="button" class="slot-swap-btn" data-swap-day="${dayIdx}" data-swap-slot="detox" title="Changer ce jus">🔄</button>
      </div>

      <div class="day-slot">
        <div class="slot-info">
          <span class="slot-label">🌙 Dîner Métabolique</span>
          <div class="slot-title">${escapeHtml(dayObj.dinner?.title || '')}</div>
          <div class="slot-meta">IG ${escapeHtml(dayObj.dinner?.ig || 'Très Bas')} · ⏱️ ${escapeHtml(dayObj.dinner?.time || '15 min')}</div>
        </div>
        <button type="button" class="slot-swap-btn" data-swap-day="${dayIdx}" data-swap-slot="dinner" title="Changer ce repas">🔄</button>
      </div>
    `;
    weeklyContainer.appendChild(card);
  });
}

weeklyContainer?.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-swap-day]');
  if (!btn) return;
  const dayIdx = Number(btn.dataset.swapDay);
  const slot = btn.dataset.swapSlot;
  const poolKey = slot === 'detox' ? 'kenwood' : slot;
  const currentTitle = state.weeklyPlan[dayIdx]?.[slot]?.title || '';
  state.weeklyPlan[dayIdx][slot] = pickRandom(mealExamples[poolKey], currentTitle);
  localStorage.setItem(STORAGE_KEYS.WEEKLY, JSON.stringify(state.weeklyPlan));
  renderWeeklyPlan();
});

document.getElementById('btn-generate-week')?.addEventListener('click', randomizeWeeklyPlan);

document.getElementById('btn-week-shopping')?.addEventListener('click', () => {
  if (!state.weeklyPlan) return;
  let added = 0;
  state.weeklyPlan.forEach((dayObj) => {
    ['breakfast', 'lunch', 'detox', 'dinner'].forEach((slot) => {
      const meal = dayObj[slot];
      if (meal && Array.isArray(meal.ingredients)) {
        meal.ingredients.forEach((ing) => {
          addShoppingItem(ing, `${dayObj.day} - ${meal.title}`);
          added++;
        });
      }
    });
  });
  showToast(`🛒 ${added} ingrédients du semainier ajoutés à votre liste de courses !`);
});

renderWeeklyPlan();

// ============================================================================
// 4. SECTION RECETTES & IDÉES REPAS EXPRESS
// ============================================================================
const mealsContainer = document.getElementById('meals-container');
const recipeSearchInput = document.getElementById('recipe-search');
const recipeCatBtns = document.querySelectorAll('#recipe-cat-filters .tag');

const mealCategories = [
  { key: 'breakfast', label: '🌅 Petit-Déjeuner (Salé & Sucré IG Bas)' },
  { key: 'lunch', label: '☀️ Déjeuner (Assiettes Équilibrées)' },
  { key: 'dinner', label: '🌙 Dîner Métabolique (Soir)' },
  { key: 'dessert', label: '🍫 Desserts Gourmands à IG Bas' },
  { key: 'drinks', label: '🍵 Boissons Fonctionnelles Antidiabète' },
];

function createRecipeCardElement(recipe) {
  const isFav = state.favorites.has(recipe.title);
  const card = document.createElement('div');
  card.className = 'recipe-card';

  const ingredientsHtml = recipe.ingredients
    ? `<ul class="recipe-ingredients">${recipe.ingredients
        .map((ing) => `<li>• ${escapeHtml(ing)}</li>`)
        .join('')}</ul>`
    : '';

  const instructionsHtml = recipe.instructions
    ? `<p class="recipe-instructions"><strong>Préparation :</strong> ${escapeHtml(recipe.instructions)}</p>`
    : '';

  const vitaminsHtml =
    Array.isArray(recipe.vitamins) && recipe.vitamins.length > 0
      ? `<p style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--primary);"><strong>Micronutriments :</strong> ${escapeHtml(
          recipe.vitamins.join(', ')
        )}</p>`
      : '';

  card.innerHTML = `
    <div class="recipe-header">
      <h3>${escapeHtml(recipe.title)}</h3>
      <span class="recipe-time">⏱️ ${escapeHtml(recipe.time)}</span>
    </div>
    <p class="recipe-desc">${escapeHtml(recipe.description)}</p>

    <details class="recipe-details">
      <summary>Voir les ingrédients & la préparation</summary>
      <div class="details-content">
        ${ingredientsHtml}
        ${instructionsHtml}
        ${vitaminsHtml}
      </div>
    </details>

    <div class="recipe-meta-bar">
      <span>Impact : <strong style="color: var(--primary);">${escapeHtml(recipe.ig)}</strong></span>
      ${recipe.cg !== undefined ? `<span>CG : <strong>${escapeHtml(recipe.cg)}</strong></span>` : ''}
      ${recipe.kcal ? `<span>${escapeHtml(recipe.kcal)} kcal</span>` : ''}
    </div>

    <div class="recipe-tags">
      ${(recipe.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
    </div>

    <div class="recipe-card-actions no-print">
      <button type="button" class="card-btn ${isFav ? 'fav-active' : ''}" data-recipe-fav="${escapeHtml(recipe.title)}">
        ${isFav ? '❤️ Favori' : '🤍 Favori'}
      </button>
      <button type="button" class="card-btn" data-recipe-shop="${escapeHtml(recipe.title)}">
        🛒 + Courses
      </button>
    </div>
  `;
  return card;
}

function renderRecipes() {
  if (!mealsContainer) return;
  mealsContainer.innerHTML = '';
  const normQuery = normalizeStr(state.recipeSearch.trim());

  mealCategories.forEach((cat) => {
    if (state.recipeCat !== 'all' && state.recipeCat !== 'favorites' && state.recipeCat !== cat.key) {
      return;
    }

    const section = document.createElement('div');
    section.className = 'meal-time';
    section.innerHTML = `<h2>${escapeHtml(cat.label)}</h2>`;

    const grid = document.createElement('div');
    grid.className = 'recipe-grid';
    let count = 0;

    (mealExamples[cat.key] || []).forEach((recipe) => {
      if (state.recipeCat === 'favorites' && !state.favorites.has(recipe.title)) return;

      if (normQuery) {
        const searchable = normalizeStr(
          `${recipe.title} ${recipe.description} ${(recipe.ingredients || []).join(' ')} ${(
            recipe.tags || []
          ).join(' ')}`
        );
        if (!searchable.includes(normQuery)) return;
      }

      count++;
      grid.appendChild(createRecipeCardElement(recipe));
    });

    if (count > 0) {
      section.appendChild(grid);
      mealsContainer.appendChild(section);
    }
  });

  if (mealsContainer.innerHTML === '') {
    mealsContainer.innerHTML =
      '<p style="padding: 2rem; text-align: center; color: var(--text-muted);">Aucune recette trouvée pour ces critères.</p>';
  }
}

recipeSearchInput?.addEventListener('input', (e) => {
  state.recipeSearch = e.target.value;
  renderRecipes();
});

recipeCatBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    recipeCatBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    state.recipeCat = btn.dataset.rcat;
    renderRecipes();
  });
});

renderRecipes();

// ============================================================================
// 5. SECTION CURE DÉTOX KENWOOD AT641
// ============================================================================
const detoxContainer = document.getElementById('detox-container');
const detoxSearchInput = document.getElementById('detox-search');
const detoxCatBtns = document.querySelectorAll('#detox-cat-filters .tag');

function renderDetox() {
  if (!detoxContainer) return;
  detoxContainer.innerHTML = '';
  const normQuery = normalizeStr(state.detoxSearch.trim());

  const grid = document.createElement('div');
  grid.className = 'recipe-grid';
  let count = 0;

  (mealExamples.kenwood || []).forEach((recipe) => {
    if (state.detoxCat !== 'all' && recipe.category !== state.detoxCat) return;

    if (normQuery) {
      const searchable = normalizeStr(
        `${recipe.title} ${recipe.description} ${(recipe.ingredients || []).join(' ')} ${(
          recipe.vitamins || []
        ).join(' ')} ${(recipe.tags || []).join(' ')}`
      );
      if (!searchable.includes(normQuery)) return;
    }

    count++;
    grid.appendChild(createRecipeCardElement(recipe));
  });

  if (count > 0) {
    detoxContainer.appendChild(grid);
  } else {
    detoxContainer.innerHTML =
      '<p style="padding: 2rem; text-align: center; color: var(--text-muted);">Aucune recette détox trouvée.</p>';
  }
}

detoxSearchInput?.addEventListener('input', (e) => {
  state.detoxSearch = e.target.value;
  renderDetox();
});

detoxCatBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    detoxCatBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    state.detoxCat = btn.dataset.dcat;
    renderDetox();
  });
});

renderDetox();

// ============================================================================
// 6. DÉLÉGATION GLOBALE POUR FAVORIS & LISTE DE COURSES
// ============================================================================
function findRecipeByTitle(title) {
  for (const key of Object.keys(mealExamples)) {
    const found = (mealExamples[key] || []).find((r) => r.title === title);
    if (found) return found;
  }
  return null;
}

function saveFavorites() {
  localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify([...state.favorites]));
}

function updateShoppingBadge() {
  const badge = document.getElementById('shop-badge');
  if (badge) badge.textContent = String(state.shoppingList.length);
  localStorage.setItem(STORAGE_KEYS.SHOPPING, JSON.stringify(state.shoppingList));
}

function addShoppingItem(text, source) {
  state.shoppingList.push({ text, source, checked: false });
  updateShoppingBadge();
}

document.addEventListener('click', (e) => {
  const favBtn = e.target.closest('button[data-recipe-fav]');
  if (favBtn) {
    const title = favBtn.dataset.recipeFav;
    if (state.favorites.has(title)) {
      state.favorites.delete(title);
      showToast('Retiré des favoris');
    } else {
      state.favorites.add(title);
      showToast('❤️ Ajouté aux favoris !');
    }
    saveFavorites();
    renderRecipes();
    renderDetox();
    return;
  }

  const shopBtn = e.target.closest('button[data-recipe-shop]');
  if (shopBtn) {
    const title = shopBtn.dataset.recipeShop;
    const recipe = findRecipeByTitle(title);
    if (recipe && Array.isArray(recipe.ingredients)) {
      recipe.ingredients.forEach((ing) => addShoppingItem(ing, recipe.title));
      showToast(`🛒 ${recipe.ingredients.length} ingrédients ajoutés (${recipe.title})`);
    }
  }
});

// Modal Liste de Courses
const shoppingModal = document.getElementById('shopping-modal');
const shoppingListBox = document.getElementById('shopping-list-box');

function renderShoppingModal() {
  if (!shoppingListBox) return;
  if (state.shoppingList.length === 0) {
    shoppingListBox.innerHTML =
      '<p style="text-align: center; color: var(--text-muted); padding: 1.5rem;">Votre liste de courses est vide.</p>';
    return;
  }
  shoppingListBox.innerHTML = state.shoppingList
    .map(
      (item, idx) => `
      <div class="shop-row">
        <label>
          <input type="checkbox" data-shop-check="${idx}" ${item.checked ? 'checked' : ''} />
          <span>${escapeHtml(item.text)} <small style="color: var(--text-muted);">(${escapeHtml(item.source)})</small></span>
        </label>
        <button type="button" class="qty-btn" data-shop-del="${idx}" title="Supprimer">✕</button>
      </div>
    `
    )
    .join('');
}

document.getElementById('btn-open-shopping')?.addEventListener('click', () => {
  renderShoppingModal();
  shoppingModal?.classList.add('active');
});

document.getElementById('close-shopping-modal')?.addEventListener('click', () => {
  shoppingModal?.classList.remove('active');
});

shoppingListBox?.addEventListener('click', (e) => {
  const checkIdx = e.target.dataset?.shopCheck;
  const delIdx = e.target.dataset?.shopDel;
  if (checkIdx !== undefined) {
    const idx = Number(checkIdx);
    if (state.shoppingList[idx]) {
      state.shoppingList[idx].checked = e.target.checked;
      updateShoppingBadge();
    }
  } else if (delIdx !== undefined) {
    state.shoppingList.splice(Number(delIdx), 1);
    updateShoppingBadge();
    renderShoppingModal();
  }
});

document.getElementById('btn-copy-shop')?.addEventListener('click', async () => {
  if (state.shoppingList.length === 0) return;
  const txt = state.shoppingList.map((i) => `${i.checked ? '[x]' : '[ ]'} ${i.text} (${i.source})`).join('\n');
  try {
    await navigator.clipboard.writeText(txt);
    showToast('📋 Liste de courses copiée dans le presse-papier !');
  } catch {
    showToast('Liste prête.');
  }
});

document.getElementById('btn-clear-shop')?.addEventListener('click', () => {
  state.shoppingList = [];
  updateShoppingBadge();
  renderShoppingModal();
  showToast('🗑️ Liste de courses vidée');
});

window.addEventListener('click', (e) => {
  if (e.target === shoppingModal) shoppingModal.classList.remove('active');
});

updateShoppingBadge();
