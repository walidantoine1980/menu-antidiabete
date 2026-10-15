# 🥑 Menu Antidiabète v2.0 — Planificateur IG/CG, Semainier 7 Jours & Bar Détox Kenwood AT641

Application web progressive (**PWA**) dédiée à la maîtrise de la glycémie par l'alimentation à **Indice Glycémique (IG)** et **Charge Glycémique (CG)** contrôlés.

---

## ✨ Fonctionnalités Principales

1. **📚 Théorie Scientifique & Calculateur Express de Charge Glycémique (CG)** :
   - **6 fiches cliniques** : différence IG vs CG, ordre d'ingestion des aliments (*fibres → protéines/lipides → glucides : -40% sur le pic de glucose*), rétrogradation de l'amidon, modulateurs naturels (vinaigre de cidre, cannelle de Ceylan, citron) et marche digestive post-prandiale.
   - **Calculateur interactif de CG** : saisissez l'IG, les glucides pour 100g et votre portion en grammes pour obtenir instantanément la Charge Glycémique réelle (`CG = (IG × Glucides portion) / 100`) et son verdict métabolique.

2. **🍽️ Simulateur & Planificateur d'Assiette Intelligent (59 Aliments)** :
   - Base enrichie de **59 aliments** (Légumes, Fruits, Protéines, Glucides lents, Graisses saines, Laitages) avec **IG, CG, kcal, glucides, fibres, protéines, marques recommandées** (*Picard, Biocoop, Bjorg, Loué...*) et conseils pratiques.
   - Ajustement des **portions (`-` / `+`)** dans l'assiette.
   - **Bilan en direct** : Charge Glycémique totale, IG moyen pondéré, calories, glucides, fibres, protéines et **Diagnostic d'Harmonie de l'Assiette** (vérification de la présence de fibres et de protéines/lipides pour tamponner les glucides).

3. **📅 Semainier Antidiabète Automatique sur 7 Jours** :
   - Génère en un clic un **menu équilibré du Lundi au Dimanche** (Petit-déjeuner, Déjeuner, Jus Détox Kenwood AT641, Dîner métabolique) avec la Charge Glycémique quotidienne.
   - Bouton `🔄` pour remplacer individuellement n'importe quel repas, et export en un clic de tous les ingrédients de la semaine vers la **Liste de courses (`🛒`)**.

4. **🍲 154 Recettes Express (< 25 min)** :
   - **30 Petits-déjeuners** salés et sucrés 100% cohérents à IG bas.
   - **42 Déjeuners** complets équilibrés.
   - **42 Dîners** métaboliques (légers ou sans féculents pour le soir).
   - **30 Desserts** gourmands sans sucre raffiné ni farine blanche.
   - **10 Boissons fonctionnelles** antidiabète.

5. **🍹 166 Jus & Shots Détox — Centrifugeuse Kenwood AT641** :
   - Recettes exclusives calibrées pour la **Kenwood AT641** (*Signatures, Shots Express, Spécial Glycémie IG ≤ 15, Green Détox, Vitalité*) avec vitamines, IG et réglages **Vitesse 1 / Vitesse 2**.

6. **🛒 Liste de Courses Interactive, ❤️ Favoris, 🌙 Mode Sombre & 🖨️ Export PDF**.

---

## 🚀 Démarrage & Déploiement

### En local avec Node.js
```bash
npm start
```
Puis ouvrez `http://localhost:3000`.

### Régénérer la base de données (`data.js`) via Python
```bash
npm run generate
```

### Déploiement Docker / Dokploy / Nginx
Le [`Dockerfile`](file:///G:/Mon%20Drive/Antoine-Drive/Antigravity/menu-antidiabete/menu-antidiabete-main/Dockerfile) embarque `nginx:alpine` avec uniquement les ressources web nécessaires sur le port `80`.
