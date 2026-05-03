import { theoryData, foodDatabase, mealExamples } from './data.js';

// --- Navigation ---
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // Update active link
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    
    // Update active section
    const targetId = link.getAttribute('data-target');
    sections.forEach(section => {
      section.classList.remove('active');
      if (section.id === targetId) {
        section.classList.add('active');
      }
    });
  });
});

// --- Populate Theory Section ---
const theoryContainer = document.getElementById('theory-container');
theoryData.forEach(item => {
  const card = document.createElement('div');
  card.className = 'theory-card';
  card.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.content}</p>
  `;
  theoryContainer.appendChild(card);
});

// --- Populate Meal Planner ---
const foodContainer = document.getElementById('food-container');
const plateList = document.getElementById('selected-foods-list');
const cgScoreEl = document.getElementById('cg-score');
const cgFeedbackEl = document.getElementById('cg-feedback');
const resetButton = document.getElementById('reset-plate');

let selectedFoods = new Set(); // Store food IDs

function getIgClass(ig) {
  if (ig <= 35) return 'ig-low';
  if (ig <= 50) return 'ig-medium';
  return 'ig-high';
}

function renderFoods(filter = 'all', searchQuery = '') {
  foodContainer.innerHTML = '';
  const lowerQuery = searchQuery.toLowerCase();
  
  foodDatabase.forEach(food => {
    // Check category filter
    if (filter !== 'all' && !food.category.includes(filter)) return;
    
    // Check search query
    if (searchQuery && !food.name.toLowerCase().includes(lowerQuery)) return;
    
    const brandsHtml = food.brands && food.brands.length > 0 
      ? `<div class="food-brands"><strong>Top Marques:</strong> ${food.brands.join(', ')}</div>`
      : '';

    const foodEl = document.createElement('div');
    foodEl.className = `food-item ${selectedFoods.has(food.id) ? 'selected' : ''}`;
    foodEl.dataset.id = food.id;
    foodEl.innerHTML = `
      <div class="food-icon">${food.icon}</div>
      <div class="food-info">
        <h4>${food.name}</h4>
        <span>${food.category}</span>
        <div class="ig-badge ${getIgClass(food.ig)}">IG: ${food.ig}</div>
        ${brandsHtml}
      </div>
    `;
    
    foodEl.addEventListener('click', () => toggleFoodSelection(food.id, foodEl));
    foodContainer.appendChild(foodEl);
  });
}

function toggleFoodSelection(id, element) {
  if (selectedFoods.has(id)) {
    selectedFoods.delete(id);
    element.classList.remove('selected');
  } else {
    selectedFoods.add(id);
    element.classList.add('selected');
  }
  updatePlate();
}

function updatePlate() {
  plateList.innerHTML = '';
  let totalCG = 0;
  
  if (selectedFoods.size === 0) {
    plateList.innerHTML = '<li style="color: var(--text-muted); justify-content: center; border: none;">Aucun aliment sélectionné</li>';
    cgScoreEl.textContent = '0';
    cgScoreEl.style.color = 'var(--text-main)';
    cgFeedbackEl.textContent = 'Commencez à ajouter des aliments.';
    cgFeedbackEl.style.color = 'var(--text-muted)';
    return;
  }
  
  selectedFoods.forEach(id => {
    const food = foodDatabase.find(f => f.id === id);
    totalCG += food.cg;
    
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${food.icon} ${food.name}</span>
      <span style="font-weight: 500;">+${food.cg} CG</span>
    `;
    plateList.appendChild(li);
  });
  
  cgScoreEl.textContent = totalCG.toFixed(1);
  
  // Feedback based on total CG
  if (totalCG <= 10) {
    cgScoreEl.style.color = 'var(--primary)';
    cgFeedbackEl.textContent = 'Parfait ! Charge très basse. 💚';
    cgFeedbackEl.style.color = 'var(--primary)';
  } else if (totalCG <= 20) {
    cgScoreEl.style.color = '#ca8a04'; // Yellow-600
    cgFeedbackEl.textContent = 'Bien. Charge modérée. ⚖️';
    cgFeedbackEl.style.color = '#ca8a04';
  } else {
    cgScoreEl.style.color = '#dc2626'; // Red-600
    cgFeedbackEl.textContent = 'Attention ! Charge élevée. ⚠️';
    cgFeedbackEl.style.color = '#dc2626';
  }
}

resetButton.addEventListener('click', () => {
  selectedFoods.clear();
  renderFoods(); // re-render to remove 'selected' classes
  updatePlate();
});

// Filters for Planner
let currentFilter = 'all';
const filterBtns = document.querySelectorAll('.filters .tag');
const searchInput = document.getElementById('food-search');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Reset styling
    filterBtns.forEach(b => {
      b.style.background = 'var(--bg-color)';
      b.style.color = 'var(--primary-dark)';
    });
    // Active styling
    btn.style.background = 'var(--primary)';
    btn.style.color = 'white';
    
    currentFilter = btn.getAttribute('data-filter');
    renderFoods(currentFilter, searchInput.value);
  });
});

searchInput.addEventListener('input', (e) => {
  renderFoods(currentFilter, e.target.value);
});

// Initialize planner
renderFoods();

// --- Populate Examples Section ---
const mealsContainer = document.getElementById('meals-container');
const recipeSearchInput = document.getElementById('recipe-search');

const mealCategories = [
  { key: 'breakfast', label: 'Petit-Déjeuner' },
  { key: 'lunch', label: 'Déjeuner' },
  { key: 'dinner', label: 'Dîner' },
  { key: 'dessert', label: 'Desserts' },
  { key: 'drinks', label: 'Boissons Détox' },
  { key: 'kenwood', label: 'Jus Détox Kenwood AT641' }
];

function renderRecipes(searchQuery = '') {
  mealsContainer.innerHTML = '';
  const lowerQuery = searchQuery.toLowerCase();

  mealCategories.forEach(cat => {
    const section = document.createElement('div');
    section.className = 'meal-time';
    section.innerHTML = `<h2>${cat.label}</h2>`;
    
    const grid = document.createElement('div');
    grid.className = 'recipe-grid';
    
    let recipeCount = 0;
    
    mealExamples[cat.key].forEach(recipe => {
      // Filter by search query
      if (searchQuery) {
        const textToSearch = (recipe.title + " " + (recipe.ingredients ? recipe.ingredients.join(' ') : '')).toLowerCase();
        if (!textToSearch.includes(lowerQuery)) return;
      }
      
      recipeCount++;
      const card = document.createElement('div');
      card.className = 'recipe-card';
      
      // Build ingredients list safely
      const ingredientsHtml = recipe.ingredients 
        ? `<ul class="recipe-ingredients">` + recipe.ingredients.map(ing => `<li>• ${ing}</li>`).join('') + `</ul>`
        : '';
        
      // Build instructions safely
      const instructionsHtml = recipe.instructions
        ? `<p class="recipe-instructions"><strong>Préparation :</strong> ${recipe.instructions}</p>`
        : '';

      card.innerHTML = `
        <div class="recipe-header">
          <h3>${recipe.title}</h3>
          <span class="recipe-time">⏱️ ${recipe.time}</span>
        </div>
        <p style="color: var(--text-muted); margin-bottom: 1rem;">${recipe.description}</p>
        
        <details class="recipe-details">
          <summary>Voir la recette complète</summary>
          <div class="details-content">
            ${ingredientsHtml}
            ${instructionsHtml}
          </div>
        </details>

        <div style="font-weight: 500; font-size: 0.9rem; margin-top: 1rem;">
          Impact Glycémique : <span style="color: var(--primary);">${recipe.ig}</span>
        </div>
        <div class="recipe-tags">
          ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      `;
      grid.appendChild(card);
    });
    
    if (recipeCount > 0) {
      section.appendChild(grid);
      mealsContainer.appendChild(section);
    }
  });
  
  if (mealsContainer.innerHTML === '') {
    mealsContainer.innerHTML = '<p style="padding: 2rem; text-align: center; color: var(--text-muted);">Aucune recette trouvée pour cette recherche.</p>';
  }
}

// Init recipes
renderRecipes();

recipeSearchInput.addEventListener('input', (e) => {
  renderRecipes(e.target.value);
});
