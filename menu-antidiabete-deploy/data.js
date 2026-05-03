export const theoryData = [
  {
    title: "Comprendre l'Indice Glycémique (IG)",
    content: "L'indice glycémique mesure la vitesse à laquelle les glucides d'un aliment font monter le taux de sucre dans le sang. L'échelle va de 0 à 100. Un IG bas (≤ 55) permet d'éviter les pics d'insuline, offrant une énergie stable et prévenant le stockage des graisses. Un IG moyen se situe entre 56 et 69. Un IG élevé (≥ 70) est à éviter (sucre blanc, pain blanc, pomme de terre)."
  },
  {
    title: "La Charge Glycémique (CG)",
    content: "Alors que l'IG indique la vitesse d'absorption, la Charge Glycémique prend en compte la quantité de glucides dans une portion normale. Formule : CG = (IG x Quantité de glucides en g) / 100. Visez une charge glycémique basse (< 10 par portion)."
  },
  {
    title: "Les facteurs qui font varier l'IG",
    content: "1. **La Cuisson :** Une cuisson prolongée détruit la structure de l'amidon et augmente l'IG (ex: pâtes al dente = IG 40, pâtes trop cuites = IG 55).\n2. **La Maturité :** Une banane verte a un IG de 35, une banane très mûre monte à 60 !\n3. **La Transformation :** Les aliments réduits en purée ou en jus ont un IG plus élevé que sous leur forme entière."
  },
  {
    title: "Les règles d'or de l'assiette Antidiabète",
    content: "Associez toujours vos glucides à des fibres (légumes), des protéines (viande, tofu) ou de bonnes graisses (huile d'olive, avocat) pour ralentir la digestion et faire baisser l'IG global de votre repas."
  }
];

export const foodDatabase = [
  // --- LÉGUMES ---
  { id: 'v1', name: 'Brocoli', category: 'Légumes', ig: 15, cg: 1, icon: '🥦', brands: ['Picard (Surgelé brut)', 'Biocoop', 'Maraîcher Local'] },
  { id: 'v2', name: 'Épinards', category: 'Légumes', ig: 15, cg: 0.5, icon: '🥬', brands: ['Bonduelle (Frais)', 'Picard (En branches)', 'Naturalia'] },
  { id: 'v3', name: 'Courgette', category: 'Légumes', ig: 15, cg: 1, icon: '🥒', brands: ['Primeur Bio', 'Biocoop', 'Grand Frais'] },
  { id: 'v4', name: 'Poivron', category: 'Légumes', ig: 15, cg: 1, icon: '🫑', brands: ['Maraîcher Local', 'Biocoop', 'Carrefour Bio'] },
  { id: 'v5', name: 'Aubergine', category: 'Légumes', ig: 20, cg: 1.5, icon: '🍆', brands: ['Biocoop', 'Grand Frais', 'Naturalia'] },
  { id: 'v6', name: 'Tomate', category: 'Légumes', ig: 15, cg: 1, icon: '🍅', brands: ['Prince de Bretagne', 'Savéol', 'Bio village (Leclerc)'] },
  { id: 'v7', name: 'Carotte (Crue)', category: 'Légumes', ig: 16, cg: 2, icon: '🥕', brands: ['Priméale', 'Biocoop', 'Maraîcher Local'] },
  { id: 'v8', name: 'Carotte (Cuite)', category: 'Légumes', ig: 47, cg: 4, icon: '🥕', brands: ['Priméale', 'Biocoop', 'Maraîcher Local'] },
  { id: 'v9', name: 'Chou-fleur', category: 'Légumes', ig: 15, cg: 1, icon: '🥦', brands: ['Prince de Bretagne', 'Picard', 'Biocoop'] },
  { id: 'v10', name: 'Asperges', category: 'Légumes', ig: 15, cg: 0.5, icon: '🥢', brands: ['Asperges de France', 'Picard', 'Grand Frais'] },
  { id: 'v11', name: 'Champignons', category: 'Légumes', ig: 15, cg: 0.5, icon: '🍄', brands: ['Lou Légumes', 'Biocoop', 'Grand Frais'] },
  { id: 'v12', name: 'Poireau', category: 'Légumes', ig: 15, cg: 1, icon: '🧅', brands: ['Priméale', 'Biocoop', 'Maraîcher'] },
  { id: 'v13', name: 'Oignon', category: 'Légumes', ig: 15, cg: 1, icon: '🧅', brands: ['Oignon de Roscoff', 'Biocoop', 'Ferme Locale'] },
  { id: 'v14', name: 'Haricots verts', category: 'Légumes', ig: 30, cg: 2, icon: '🫘', brands: ['Cassegrain (Extra-fins)', 'Picard', 'Bonduelle'] },

  // --- FRUITS ---
  { id: 'f1', name: 'Myrtilles / Framboises', category: 'Fruits', ig: 25, cg: 3, icon: '🫐', brands: ['Picard (Surgelées bio)', 'Biocoop', 'Maraîcher'] },
  { id: 'f2', name: 'Pomme', category: 'Fruits', ig: 35, cg: 5, icon: '🍏', brands: ['Pink Lady', 'Juliet (Bio)', 'AOP Pommes du Limousin'] },
  { id: 'f3', name: 'Poire', category: 'Fruits', ig: 38, cg: 5, icon: '🍐', brands: ['Conférence (AOP)', 'Angélys', 'Biocoop'] },
  { id: 'f4', name: 'Banane verte', category: 'Fruits', ig: 35, cg: 8, icon: '🍌', brands: ['Max Havelaar (Équitable)', 'Bio Village', 'Chiquita'] },
  { id: 'f5', name: 'Banane très mûre', category: 'Fruits', ig: 60, cg: 14, icon: '🍌', brands: ['Max Havelaar', 'Bio Village', 'Chiquita'] },
  { id: 'f6', name: 'Cerises', category: 'Fruits', ig: 22, cg: 3, icon: '🍒', brands: ['Cerises de France', 'Biocoop', 'Grand Frais'] },
  { id: 'f7', name: 'Pamplemousse', category: 'Fruits', ig: 25, cg: 2, icon: '🍊', brands: ['Floride (IGP)', 'Corsica', 'Biocoop'] },
  { id: 'f8', name: 'Raisin', category: 'Fruits', ig: 53, cg: 9, icon: '🍇', brands: ['Chasselas de Moissac', 'Muscat du Ventoux', 'Biocoop'] },
  { id: 'f9', name: 'Kiwi', category: 'Fruits', ig: 50, cg: 7, icon: '🥝', brands: ['Zespri', 'Primland (Origine France)', 'Oscar'] },

  // --- PROTÉINES ---
  { id: 'p1', name: 'Poulet / Dinde', category: 'Protéines', ig: 0, cg: 0, icon: '🍗', brands: ['Loué (Label Rouge)', 'Bodlan', 'Maitre Coq (Bio)'] },
  { id: 'p2', name: 'Saumon', category: 'Protéines', ig: 0, cg: 0, icon: '🐟', brands: ['Labeyrie (Sauvage)', 'Mowi (ASC)', 'Petit Navire'] },
  { id: 'p3', name: 'Tofu', category: 'Protéines', ig: 15, cg: 0.5, icon: '🧊', brands: ['Taifun', 'Soy', 'Bjorg'] },
  { id: 'p4', name: 'Œufs', category: 'Protéines', ig: 0, cg: 0, icon: '🥚', brands: ['Loué (Plein air)', 'Cocorette', 'Matines (Bio)'] },
  { id: 'p5', name: 'Bœuf maigre', category: 'Protéines', ig: 0, cg: 0, icon: '🥩', brands: ['Charal (5% MG)', 'Label Rouge (Boucherie)', 'Vrai (Bio)'] },
  { id: 'p6', name: 'Crevettes', category: 'Protéines', ig: 0, cg: 0, icon: '🍤', brands: ['Pescanova', 'Delpierre', 'Escal (ASC)'] },
  { id: 'p7', name: 'Cabillaud', category: 'Protéines', ig: 0, cg: 0, icon: '🐟', brands: ['Findus (MSC)', 'Picard', 'Capitaine Cook'] },
  { id: 'p8', name: 'Seitan', category: 'Protéines', ig: 15, cg: 1, icon: '🥖', brands: ['Soy', 'Lima', 'Veggyness'] },

  // --- GLUCIDES & LÉGUMINEUSES ---
  { id: 'c1', name: 'Quinoa', category: 'Glucides lents', ig: 35, cg: 12, icon: '🌾', brands: ['Quinola', 'Priméal', 'Tipiak'] },
  { id: 'c2', name: 'Flocons d\'avoine', category: 'Glucides lents', ig: 40, cg: 10, icon: '🥣', brands: ['Quaker Oats', 'Bjorg', 'Celnat'] },
  { id: 'c3', name: 'Patate douce', category: 'Glucides lents', ig: 46, cg: 11, icon: '🍠', brands: ['Biocoop', 'Grand Frais', 'Ferme Locale'] },
  { id: 'c4', name: 'Pomme de terre (Cuite au four)', category: 'Glucides lents', ig: 85, cg: 20, icon: '🥔', brands: ['Parmentine', 'Princesse Amandine', 'Biocoop'] },
  { id: 'c5', name: 'Pain de seigle intégral', category: 'Glucides lents', ig: 40, cg: 8, icon: '🍞', brands: ['Bjorg (Pumpernickel)', 'La Boulangère', 'Boulanger Artisan'] },
  { id: 'c6', name: 'Pain blanc de mie', category: 'Glucides lents', ig: 75, cg: 18, icon: '🍞', brands: ['Harrys', 'Jacquet', 'Pasquier'] },
  { id: 'c7', name: 'Lentilles vertes', category: 'Glucides lents', ig: 25, cg: 5, icon: '🧆', brands: ['Lentilles du Puy (AOP)', 'Vivien Paille', 'Sabarot'] },
  { id: 'c8', name: 'Riz Basmati complet', category: 'Glucides lents', ig: 45, cg: 14, icon: '🍚', brands: ['Taureau Ailé', 'Uncle Ben\'s', 'Autour du Riz'] },
  { id: 'c9', name: 'Riz blanc standard', category: 'Glucides lents', ig: 70, cg: 22, icon: '🍚', brands: ['Taureau Ailé', 'Lustucru', 'Uncle Ben\'s'] },
  { id: 'c10', name: 'Pois chiches', category: 'Glucides lents', ig: 28, cg: 8, icon: '🥙', brands: ['Cassegrain', 'Bonduelle', 'D\'Aucy'] },
  { id: 'c11', name: 'Pâtes au blé complet', category: 'Glucides lents', ig: 50, cg: 15, icon: '🍝', brands: ['Barilla (Integrale)', 'De Cecco', 'Rummo'] },

  // --- GRAISSES SAINES & NOIX ---
  { id: 'g1', name: 'Amandes', category: 'Graisses Saines', ig: 15, cg: 1, icon: '🥜', brands: ['Vico (Natur\' & Bon)', 'Daco Bello', 'Juste Bio'] },
  { id: 'g2', name: 'Noix', category: 'Graisses Saines', ig: 15, cg: 1, icon: '🌰', brands: ['Noix de Grenoble (AOP)', 'Daco Bello', 'Maitre Prunille'] },
  { id: 'g3', name: 'Avocat', category: 'Graisses Saines', ig: 10, cg: 0.5, icon: '🥑', brands: ['Hass (Origine Espagne)', 'Biocoop', 'Grand Frais'] },
  { id: 'g4', name: 'Huile d\'Olive', category: 'Graisses Saines', ig: 0, cg: 0, icon: '🫒', brands: ['Puget (Bio)', 'Tramier', 'Château d\'Estoublon'] },
  { id: 'g5', name: 'Graines de Chia', category: 'Graisses Saines', ig: 15, cg: 1, icon: '⚫', brands: ['Linwoods', 'Celnat', 'Markal'] },

  // --- LAITAGES ---
  { id: 'l1', name: 'Yaourt nature (Grec)', category: 'Laitages', ig: 15, cg: 2, icon: '🥛', brands: ['Mavrommatis', 'Vrai (Bio)', 'Nestlé (Yaourt à la Grecque)'] },
  { id: 'l2', name: 'Fromage blanc', category: 'Laitages', ig: 30, cg: 3, icon: '🥣', brands: ['Jockey (Danone)', 'Vrai', 'Campagne'] },
  { id: 'l3', name: 'Lait d\'Amande (sans sucre)', category: 'Laitages', ig: 30, cg: 1, icon: '🥛', brands: ['Bjorg (Sans sucres ajoutés)', 'Alpro', 'Bonneterre'] }
];

export const mealExamples = {
  "breakfast": [
    {
      "title": "Yaourt Grec Nature & Myrtilles",
      "time": "7 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Antioxydant et IG très bas.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "150g de yaourt grec",
        "1 c.à.s de graines de lin",
        "1 poignée de myrtilles",
        "Amandes effilées"
      ],
      "instructions": "Antioxydant et IG très bas. Versez le yaourt dans un bol. Mélangez avec les graines de lin et ajoutez votre garniture."
    },
    {
      "title": "Toast de Seigle à l'Avocat & Saumon Fumé",
      "time": "12 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Gourmand et riche en oméga-3.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "1 tranche de pain de seigle",
        "1/2 avocat écrasé",
        "Jus de citron",
        "1 tranche de saumon fumé",
        "Aneth frais"
      ],
      "instructions": "Gourmand et riche en oméga-3. Faites griller le pain. Tartinez l'avocat citronné. Ajoutez la garniture et dégustez."
    },
    {
      "title": "Pudding de Chia au Lait de Coco & Pomme Cannelle",
      "time": "5 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Doux, avec une charge glycémique contrôlée.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "3 c.à.s de graines de chia",
        "200ml de lait de coco léger",
        "Extrait de vanille",
        "1/2 pomme verte en dés",
        "1 pincée de cannelle supplémentaire"
      ],
      "instructions": "Doux, avec une charge glycémique contrôlée. Mélangez le chia et le lait. Laissez reposer 2h ou toute la nuit. Ajoutez les fruits frais par-dessus."
    },
    {
      "title": "Toast de Seigle à l'Avocat & Épinards et Champignons",
      "time": "10 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Salé et très rassasiant.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "1 tranche de pain de seigle",
        "1/2 avocat écrasé",
        "Jus de citron",
        "1 poignée d'épinards",
        "2 champignons émincés"
      ],
      "instructions": "Salé et très rassasiant. Faites griller le pain. Tartinez l'avocat citronné. Ajoutez la garniture et dégustez."
    },
    {
      "title": "Omelette Protéinée & Pomme Cannelle",
      "time": "10 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Doux, avec une charge glycémique contrôlée.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "2 œufs entiers",
        "Un filet d'huile d'olive",
        "Herbes de Provence",
        "1/2 pomme verte en dés",
        "1 pincée de cannelle supplémentaire"
      ],
      "instructions": "Doux, avec une charge glycémique contrôlée. Battez les œufs. Faites cuire l'omelette dans la poêle chaude avec la garniture pendant 3 minutes."
    },
    {
      "title": "Bowl Express Avoine & Pomme Cannelle",
      "time": "11 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Doux, avec une charge glycémique contrôlée.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "40g de flocons d'avoine",
        "150ml de lait d'amande",
        "Cannelle",
        "1/2 pomme verte en dés",
        "1 pincée de cannelle supplémentaire"
      ],
      "instructions": "Doux, avec une charge glycémique contrôlée. Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."
    },
    {
      "title": "Bowl Express Avoine & Myrtilles",
      "time": "10 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Antioxydant et IG très bas.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "40g de flocons d'avoine",
        "150ml de lait d'amande",
        "Cannelle",
        "1 poignée de myrtilles",
        "Amandes effilées"
      ],
      "instructions": "Antioxydant et IG très bas. Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."
    },
    {
      "title": "Omelette Protéinée & Épinards et Champignons",
      "time": "11 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Salé et très rassasiant.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "2 œufs entiers",
        "Un filet d'huile d'olive",
        "Herbes de Provence",
        "1 poignée d'épinards",
        "2 champignons émincés"
      ],
      "instructions": "Salé et très rassasiant. Battez les œufs. Faites cuire l'omelette dans la poêle chaude avec la garniture pendant 3 minutes."
    },
    {
      "title": "Toast de Seigle à l'Avocat & Framboises",
      "time": "8 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Riche en fibres et acidulé.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "1 tranche de pain de seigle",
        "1/2 avocat écrasé",
        "Jus de citron",
        "1 poignée de framboises",
        "Noix concassées"
      ],
      "instructions": "Riche en fibres et acidulé. Faites griller le pain. Tartinez l'avocat citronné. Ajoutez la garniture et dégustez."
    },
    {
      "title": "Bowl Express Avoine & Épinards et Champignons",
      "time": "10 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Salé et très rassasiant.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "40g de flocons d'avoine",
        "150ml de lait d'amande",
        "Cannelle",
        "1 poignée d'épinards",
        "2 champignons émincés"
      ],
      "instructions": "Salé et très rassasiant. Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."
    },
    {
      "title": "Pudding de Chia au Lait de Coco & Framboises",
      "time": "10 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Riche en fibres et acidulé.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "3 c.à.s de graines de chia",
        "200ml de lait de coco léger",
        "Extrait de vanille",
        "1 poignée de framboises",
        "Noix concassées"
      ],
      "instructions": "Riche en fibres et acidulé. Mélangez le chia et le lait. Laissez reposer 2h ou toute la nuit. Ajoutez les fruits frais par-dessus."
    },
    {
      "title": "Pudding de Chia au Lait de Coco & Myrtilles",
      "time": "10 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Antioxydant et IG très bas.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "3 c.à.s de graines de chia",
        "200ml de lait de coco léger",
        "Extrait de vanille",
        "1 poignée de myrtilles",
        "Amandes effilées"
      ],
      "instructions": "Antioxydant et IG très bas. Mélangez le chia et le lait. Laissez reposer 2h ou toute la nuit. Ajoutez les fruits frais par-dessus."
    },
    {
      "title": "Bowl Express Avoine & Framboises",
      "time": "7 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Riche en fibres et acidulé.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "40g de flocons d'avoine",
        "150ml de lait d'amande",
        "Cannelle",
        "1 poignée de framboises",
        "Noix concassées"
      ],
      "instructions": "Riche en fibres et acidulé. Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."
    },
    {
      "title": "Omelette Protéinée & Framboises",
      "time": "5 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Riche en fibres et acidulé.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "2 œufs entiers",
        "Un filet d'huile d'olive",
        "Herbes de Provence",
        "1 poignée de framboises",
        "Noix concassées"
      ],
      "instructions": "Riche en fibres et acidulé. Battez les œufs. Faites cuire l'omelette dans la poêle chaude avec la garniture pendant 3 minutes."
    },
    {
      "title": "Pudding de Chia au Lait de Coco & Saumon Fumé",
      "time": "9 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Gourmand et riche en oméga-3.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "3 c.à.s de graines de chia",
        "200ml de lait de coco léger",
        "Extrait de vanille",
        "1 tranche de saumon fumé",
        "Aneth frais"
      ],
      "instructions": "Gourmand et riche en oméga-3. Mélangez le chia et le lait. Laissez reposer 2h ou toute la nuit. Ajoutez les fruits frais par-dessus."
    },
    {
      "title": "Yaourt Grec Nature & Framboises",
      "time": "9 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Riche en fibres et acidulé.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "150g de yaourt grec",
        "1 c.à.s de graines de lin",
        "1 poignée de framboises",
        "Noix concassées"
      ],
      "instructions": "Riche en fibres et acidulé. Versez le yaourt dans un bol. Mélangez avec les graines de lin et ajoutez votre garniture."
    },
    {
      "title": "Yaourt Grec Nature & Saumon Fumé",
      "time": "9 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Gourmand et riche en oméga-3.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "150g de yaourt grec",
        "1 c.à.s de graines de lin",
        "1 tranche de saumon fumé",
        "Aneth frais"
      ],
      "instructions": "Gourmand et riche en oméga-3. Versez le yaourt dans un bol. Mélangez avec les graines de lin et ajoutez votre garniture."
    },
    {
      "title": "Bowl Express Avoine & Saumon Fumé",
      "time": "10 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Gourmand et riche en oméga-3.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "40g de flocons d'avoine",
        "150ml de lait d'amande",
        "Cannelle",
        "1 tranche de saumon fumé",
        "Aneth frais"
      ],
      "instructions": "Gourmand et riche en oméga-3. Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."
    },
    {
      "title": "Toast de Seigle à l'Avocat & Pomme Cannelle",
      "time": "5 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Doux, avec une charge glycémique contrôlée.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "1 tranche de pain de seigle",
        "1/2 avocat écrasé",
        "Jus de citron",
        "1/2 pomme verte en dés",
        "1 pincée de cannelle supplémentaire"
      ],
      "instructions": "Doux, avec une charge glycémique contrôlée. Faites griller le pain. Tartinez l'avocat citronné. Ajoutez la garniture et dégustez."
    },
    {
      "title": "Yaourt Grec Nature & Pomme Cannelle",
      "time": "8 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Doux, avec une charge glycémique contrôlée.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "150g de yaourt grec",
        "1 c.à.s de graines de lin",
        "1/2 pomme verte en dés",
        "1 pincée de cannelle supplémentaire"
      ],
      "instructions": "Doux, avec une charge glycémique contrôlée. Versez le yaourt dans un bol. Mélangez avec les graines de lin et ajoutez votre garniture."
    },
    {
      "title": "Omelette Protéinée & Saumon Fumé",
      "time": "5 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Gourmand et riche en oméga-3.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "2 œufs entiers",
        "Un filet d'huile d'olive",
        "Herbes de Provence",
        "1 tranche de saumon fumé",
        "Aneth frais"
      ],
      "instructions": "Gourmand et riche en oméga-3. Battez les œufs. Faites cuire l'omelette dans la poêle chaude avec la garniture pendant 3 minutes."
    },
    {
      "title": "Toast de Seigle à l'Avocat & Myrtilles",
      "time": "8 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Antioxydant et IG très bas.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "1 tranche de pain de seigle",
        "1/2 avocat écrasé",
        "Jus de citron",
        "1 poignée de myrtilles",
        "Amandes effilées"
      ],
      "instructions": "Antioxydant et IG très bas. Faites griller le pain. Tartinez l'avocat citronné. Ajoutez la garniture et dégustez."
    },
    {
      "title": "Omelette Protéinée & Myrtilles",
      "time": "11 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Antioxydant et IG très bas.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "2 œufs entiers",
        "Un filet d'huile d'olive",
        "Herbes de Provence",
        "1 poignée de myrtilles",
        "Amandes effilées"
      ],
      "instructions": "Antioxydant et IG très bas. Battez les œufs. Faites cuire l'omelette dans la poêle chaude avec la garniture pendant 3 minutes."
    },
    {
      "title": "Pudding de Chia au Lait de Coco & Épinards et Champignons",
      "time": "11 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Salé et très rassasiant.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "3 c.à.s de graines de chia",
        "200ml de lait de coco léger",
        "Extrait de vanille",
        "1 poignée d'épinards",
        "2 champignons émincés"
      ],
      "instructions": "Salé et très rassasiant. Mélangez le chia et le lait. Laissez reposer 2h ou toute la nuit. Ajoutez les fruits frais par-dessus."
    },
    {
      "title": "Yaourt Grec Nature & Épinards et Champignons",
      "time": "11 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Salé et très rassasiant.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "150g de yaourt grec",
        "1 c.à.s de graines de lin",
        "1 poignée d'épinards",
        "2 champignons émincés"
      ],
      "instructions": "Salé et très rassasiant. Versez le yaourt dans un bol. Mélangez avec les graines de lin et ajoutez votre garniture."
    },
    {
      "title": "Bowl Express Avoine & Myrtilles (Variante 81)",
      "time": "9 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Antioxydant et IG très bas.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "40g de flocons d'avoine",
        "150ml de lait d'amande",
        "Cannelle",
        "1 poignée de myrtilles",
        "Amandes effilées"
      ],
      "instructions": "Antioxydant et IG très bas. Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."
    },
    {
      "title": "Pudding de Chia au Lait de Coco & Framboises (Variante 34)",
      "time": "12 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Riche en fibres et acidulé.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "3 c.à.s de graines de chia",
        "200ml de lait de coco léger",
        "Extrait de vanille",
        "1 poignée de framboises",
        "Noix concassées"
      ],
      "instructions": "Riche en fibres et acidulé. Mélangez le chia et le lait. Laissez reposer 2h ou toute la nuit. Ajoutez les fruits frais par-dessus."
    },
    {
      "title": "Yaourt Grec Nature & Pomme Cannelle (Variante 53)",
      "time": "8 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Doux, avec une charge glycémique contrôlée.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "150g de yaourt grec",
        "1 c.à.s de graines de lin",
        "1/2 pomme verte en dés",
        "1 pincée de cannelle supplémentaire"
      ],
      "instructions": "Doux, avec une charge glycémique contrôlée. Versez le yaourt dans un bol. Mélangez avec les graines de lin et ajoutez votre garniture."
    },
    {
      "title": "Bowl Express Avoine & Épinards et Champignons (Variante 38)",
      "time": "8 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Salé et très rassasiant.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "40g de flocons d'avoine",
        "150ml de lait d'amande",
        "Cannelle",
        "1 poignée d'épinards",
        "2 champignons émincés"
      ],
      "instructions": "Salé et très rassasiant. Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."
    },
    {
      "title": "Toast de Seigle à l'Avocat & Saumon Fumé (Variante 81)",
      "time": "7 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Gourmand et riche en oméga-3.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "1 tranche de pain de seigle",
        "1/2 avocat écrasé",
        "Jus de citron",
        "1 tranche de saumon fumé",
        "Aneth frais"
      ],
      "instructions": "Gourmand et riche en oméga-3. Faites griller le pain. Tartinez l'avocat citronné. Ajoutez la garniture et dégustez."
    },
    {
      "title": "Bowl Express Avoine & Saumon Fumé (Variante 76)",
      "time": "6 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Gourmand et riche en oméga-3.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "40g de flocons d'avoine",
        "150ml de lait d'amande",
        "Cannelle",
        "1 tranche de saumon fumé",
        "Aneth frais"
      ],
      "instructions": "Gourmand et riche en oméga-3. Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."
    },
    {
      "title": "Toast de Seigle à l'Avocat & Myrtilles (Variante 68)",
      "time": "8 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Antioxydant et IG très bas.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "1 tranche de pain de seigle",
        "1/2 avocat écrasé",
        "Jus de citron",
        "1 poignée de myrtilles",
        "Amandes effilées"
      ],
      "instructions": "Antioxydant et IG très bas. Faites griller le pain. Tartinez l'avocat citronné. Ajoutez la garniture et dégustez."
    },
    {
      "title": "Bowl Express Avoine & Saumon Fumé (Variante 64)",
      "time": "5 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Gourmand et riche en oméga-3.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "40g de flocons d'avoine",
        "150ml de lait d'amande",
        "Cannelle",
        "1 tranche de saumon fumé",
        "Aneth frais"
      ],
      "instructions": "Gourmand et riche en oméga-3. Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."
    },
    {
      "title": "Toast de Seigle à l'Avocat & Framboises (Variante 56)",
      "time": "10 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Riche en fibres et acidulé.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "1 tranche de pain de seigle",
        "1/2 avocat écrasé",
        "Jus de citron",
        "1 poignée de framboises",
        "Noix concassées"
      ],
      "instructions": "Riche en fibres et acidulé. Faites griller le pain. Tartinez l'avocat citronné. Ajoutez la garniture et dégustez."
    },
    {
      "title": "Yaourt Grec Nature & Framboises (Variante 11)",
      "time": "5 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Riche en fibres et acidulé.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "150g de yaourt grec",
        "1 c.à.s de graines de lin",
        "1 poignée de framboises",
        "Noix concassées"
      ],
      "instructions": "Riche en fibres et acidulé. Versez le yaourt dans un bol. Mélangez avec les graines de lin et ajoutez votre garniture."
    },
    {
      "title": "Yaourt Grec Nature & Pomme Cannelle (Variante 97)",
      "time": "7 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Doux, avec une charge glycémique contrôlée.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "150g de yaourt grec",
        "1 c.à.s de graines de lin",
        "1/2 pomme verte en dés",
        "1 pincée de cannelle supplémentaire"
      ],
      "instructions": "Doux, avec une charge glycémique contrôlée. Versez le yaourt dans un bol. Mélangez avec les graines de lin et ajoutez votre garniture."
    },
    {
      "title": "Bowl Express Avoine & Saumon Fumé (Variante 84)",
      "time": "11 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Gourmand et riche en oméga-3.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "40g de flocons d'avoine",
        "150ml de lait d'amande",
        "Cannelle",
        "1 tranche de saumon fumé",
        "Aneth frais"
      ],
      "instructions": "Gourmand et riche en oméga-3. Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."
    },
    {
      "title": "Pudding de Chia au Lait de Coco & Myrtilles (Variante 72)",
      "time": "7 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Antioxydant et IG très bas.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "3 c.à.s de graines de chia",
        "200ml de lait de coco léger",
        "Extrait de vanille",
        "1 poignée de myrtilles",
        "Amandes effilées"
      ],
      "instructions": "Antioxydant et IG très bas. Mélangez le chia et le lait. Laissez reposer 2h ou toute la nuit. Ajoutez les fruits frais par-dessus."
    },
    {
      "title": "Bowl Express Avoine & Saumon Fumé (Variante 45)",
      "time": "10 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Gourmand et riche en oméga-3.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "40g de flocons d'avoine",
        "150ml de lait d'amande",
        "Cannelle",
        "1 tranche de saumon fumé",
        "Aneth frais"
      ],
      "instructions": "Gourmand et riche en oméga-3. Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."
    },
    {
      "title": "Toast de Seigle à l'Avocat & Épinards et Champignons (Variante 61)",
      "time": "10 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Salé et très rassasiant.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "1 tranche de pain de seigle",
        "1/2 avocat écrasé",
        "Jus de citron",
        "1 poignée d'épinards",
        "2 champignons émincés"
      ],
      "instructions": "Salé et très rassasiant. Faites griller le pain. Tartinez l'avocat citronné. Ajoutez la garniture et dégustez."
    },
    {
      "title": "Toast de Seigle à l'Avocat & Saumon Fumé (Variante 69)",
      "time": "7 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Gourmand et riche en oméga-3.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "1 tranche de pain de seigle",
        "1/2 avocat écrasé",
        "Jus de citron",
        "1 tranche de saumon fumé",
        "Aneth frais"
      ],
      "instructions": "Gourmand et riche en oméga-3. Faites griller le pain. Tartinez l'avocat citronné. Ajoutez la garniture et dégustez."
    },
    {
      "title": "Bowl Express Avoine & Pomme Cannelle (Variante 58)",
      "time": "7 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Doux, avec une charge glycémique contrôlée.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "40g de flocons d'avoine",
        "150ml de lait d'amande",
        "Cannelle",
        "1/2 pomme verte en dés",
        "1 pincée de cannelle supplémentaire"
      ],
      "instructions": "Doux, avec une charge glycémique contrôlée. Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."
    },
    {
      "title": "Pudding de Chia au Lait de Coco & Myrtilles (Variante 80)",
      "time": "8 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Antioxydant et IG très bas.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "3 c.à.s de graines de chia",
        "200ml de lait de coco léger",
        "Extrait de vanille",
        "1 poignée de myrtilles",
        "Amandes effilées"
      ],
      "instructions": "Antioxydant et IG très bas. Mélangez le chia et le lait. Laissez reposer 2h ou toute la nuit. Ajoutez les fruits frais par-dessus."
    },
    {
      "title": "Bowl Express Avoine & Pomme Cannelle (Variante 87)",
      "time": "11 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Doux, avec une charge glycémique contrôlée.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "40g de flocons d'avoine",
        "150ml de lait d'amande",
        "Cannelle",
        "1/2 pomme verte en dés",
        "1 pincée de cannelle supplémentaire"
      ],
      "instructions": "Doux, avec une charge glycémique contrôlée. Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."
    },
    {
      "title": "Yaourt Grec Nature & Épinards et Champignons (Variante 11)",
      "time": "10 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Salé et très rassasiant.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "150g de yaourt grec",
        "1 c.à.s de graines de lin",
        "1 poignée d'épinards",
        "2 champignons émincés"
      ],
      "instructions": "Salé et très rassasiant. Versez le yaourt dans un bol. Mélangez avec les graines de lin et ajoutez votre garniture."
    },
    {
      "title": "Bowl Express Avoine & Saumon Fumé (Variante 41)",
      "time": "9 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Gourmand et riche en oméga-3.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "40g de flocons d'avoine",
        "150ml de lait d'amande",
        "Cannelle",
        "1 tranche de saumon fumé",
        "Aneth frais"
      ],
      "instructions": "Gourmand et riche en oméga-3. Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."
    },
    {
      "title": "Omelette Protéinée & Pomme Cannelle (Variante 73)",
      "time": "7 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Doux, avec une charge glycémique contrôlée.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "2 œufs entiers",
        "Un filet d'huile d'olive",
        "Herbes de Provence",
        "1/2 pomme verte en dés",
        "1 pincée de cannelle supplémentaire"
      ],
      "instructions": "Doux, avec une charge glycémique contrôlée. Battez les œufs. Faites cuire l'omelette dans la poêle chaude avec la garniture pendant 3 minutes."
    },
    {
      "title": "Bowl Express Avoine & Épinards et Champignons (Variante 53)",
      "time": "8 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Salé et très rassasiant.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "40g de flocons d'avoine",
        "150ml de lait d'amande",
        "Cannelle",
        "1 poignée d'épinards",
        "2 champignons émincés"
      ],
      "instructions": "Salé et très rassasiant. Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."
    },
    {
      "title": "Bowl Express Avoine & Framboises (Variante 29)",
      "time": "11 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Riche en fibres et acidulé.",
      "ig": "Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "40g de flocons d'avoine",
        "150ml de lait d'amande",
        "Cannelle",
        "1 poignée de framboises",
        "Noix concassées"
      ],
      "instructions": "Riche en fibres et acidulé. Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."
    },
    {
      "title": "Omelette Protéinée & Épinards et Champignons (Variante 20)",
      "time": "11 min",
      "description": "Un petit-déjeuner parfaitement équilibré. Salé et très rassasiant.",
      "ig": "Très Bas",
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Santé"
      ],
      "ingredients": [
        "2 œufs entiers",
        "Un filet d'huile d'olive",
        "Herbes de Provence",
        "1 poignée d'épinards",
        "2 champignons émincés"
      ],
      "instructions": "Salé et très rassasiant. Battez les œufs. Faites cuire l'omelette dans la poêle chaude avec la garniture pendant 3 minutes."
    }
  ],
  "lunch": [
    {
      "title": "Bowl de Poulet Grillé, Riz Sauvage et Poivrons Confits",
      "time": "22 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "50g de riz sauvage",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le riz 20 minutes. 2. Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Crevettes Sautées, Riz Sauvage et Fondue de Poireaux",
      "time": "21 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "150g de crevettes",
        "50g de riz sauvage",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le riz 20 minutes. 2. Émincez et faites suer les poireaux à la poêle 15 min. 3. Faites sauter les crevettes avec de l'ail et du persil. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Crevettes Sautées, Lentilles Vertes et Poivrons Confits",
      "time": "19 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "150g de crevettes",
        "60g de lentilles",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. 3. Faites sauter les crevettes avec de l'ail et du persil. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Bœuf Émincé, Lentilles Vertes et Courgettes Poêlées",
      "time": "25 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "60g de lentilles",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Coupez en rondelles et faites revenir à la poêle avec de l'ail. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Bœuf Émincé, Spaghettis Complets et Épinards à la Crème",
      "time": "17 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "50g de pâtes au blé complet",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Cuisez les pâtes al dente pour maintenir un IG bas. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Pavé de Saumon, Patate Douce et Épinards à la Crème",
      "time": "22 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "1 petite patate douce",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Faites cuire le saumon à l'unilatéral pendant 8 minutes. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Tofu Fumé, Lentilles Vertes et Fondue de Poireaux",
      "time": "17 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "60g de lentilles",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Émincez et faites suer les poireaux à la poêle 15 min. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Bœuf Émincé, Patate Douce et Brocolis Croquants",
      "time": "20 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "1 petite patate douce",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Faites cuire les brocolis à la vapeur pendant 7 min. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Pavé de Saumon, Riz Sauvage et Épinards à la Crème",
      "time": "28 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "50g de riz sauvage",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le riz 20 minutes. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Faites cuire le saumon à l'unilatéral pendant 8 minutes. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Poulet Grillé, Spaghettis Complets et Brocolis Croquants",
      "time": "15 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "50g de pâtes au blé complet",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Cuisez les pâtes al dente pour maintenir un IG bas. 2. Faites cuire les brocolis à la vapeur pendant 7 min. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Tofu Fumé, Riz Sauvage et Fondue de Poireaux",
      "time": "27 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "50g de riz sauvage",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le riz 20 minutes. 2. Émincez et faites suer les poireaux à la poêle 15 min. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Bœuf Émincé, Lentilles Vertes et Fondue de Poireaux",
      "time": "29 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "60g de lentilles",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Émincez et faites suer les poireaux à la poêle 15 min. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Tofu Fumé, Spaghettis Complets et Épinards à la Crème",
      "time": "22 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "50g de pâtes au blé complet",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Cuisez les pâtes al dente pour maintenir un IG bas. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Crevettes Sautées, Quinoa et Courgettes Poêlées",
      "time": "19 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "150g de crevettes",
        "50g de quinoa",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le quinoa 12 min dans l'eau bouillante. 2. Coupez en rondelles et faites revenir à la poêle avec de l'ail. 3. Faites sauter les crevettes avec de l'ail et du persil. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Bœuf Émincé, Quinoa et Poivrons Confits",
      "time": "18 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "50g de quinoa",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le quinoa 12 min dans l'eau bouillante. 2. Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Poulet Grillé, Riz Sauvage et Épinards à la Crème",
      "time": "25 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "50g de riz sauvage",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le riz 20 minutes. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Pavé de Saumon, Quinoa et Poivrons Confits",
      "time": "29 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "50g de quinoa",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le quinoa 12 min dans l'eau bouillante. 2. Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. 3. Faites cuire le saumon à l'unilatéral pendant 8 minutes. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Poulet Grillé, Patate Douce et Brocolis Croquants",
      "time": "26 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "1 petite patate douce",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Faites cuire les brocolis à la vapeur pendant 7 min. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Bœuf Émincé, Quinoa et Épinards à la Crème",
      "time": "26 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "50g de quinoa",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le quinoa 12 min dans l'eau bouillante. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Pavé de Saumon, Lentilles Vertes et Brocolis Croquants",
      "time": "27 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "60g de lentilles",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Faites cuire les brocolis à la vapeur pendant 7 min. 3. Faites cuire le saumon à l'unilatéral pendant 8 minutes. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Bœuf Émincé, Riz Sauvage et Brocolis Croquants",
      "time": "26 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "50g de riz sauvage",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le riz 20 minutes. 2. Faites cuire les brocolis à la vapeur pendant 7 min. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Tofu Fumé, Quinoa et Brocolis Croquants",
      "time": "30 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "50g de quinoa",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le quinoa 12 min dans l'eau bouillante. 2. Faites cuire les brocolis à la vapeur pendant 7 min. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Pavé de Saumon, Quinoa et Brocolis Croquants",
      "time": "30 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "50g de quinoa",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le quinoa 12 min dans l'eau bouillante. 2. Faites cuire les brocolis à la vapeur pendant 7 min. 3. Faites cuire le saumon à l'unilatéral pendant 8 minutes. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Pavé de Saumon, Spaghettis Complets et Fondue de Poireaux",
      "time": "16 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "50g de pâtes au blé complet",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Cuisez les pâtes al dente pour maintenir un IG bas. 2. Émincez et faites suer les poireaux à la poêle 15 min. 3. Faites cuire le saumon à l'unilatéral pendant 8 minutes. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Crevettes Sautées, Patate Douce et Brocolis Croquants",
      "time": "18 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "150g de crevettes",
        "1 petite patate douce",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Faites cuire les brocolis à la vapeur pendant 7 min. 3. Faites sauter les crevettes avec de l'ail et du persil. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Crevettes Sautées, Riz Sauvage et Courgettes Poêlées",
      "time": "20 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "150g de crevettes",
        "50g de riz sauvage",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le riz 20 minutes. 2. Coupez en rondelles et faites revenir à la poêle avec de l'ail. 3. Faites sauter les crevettes avec de l'ail et du persil. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Poulet Grillé, Patate Douce et Courgettes Poêlées",
      "time": "23 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "1 petite patate douce",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Coupez en rondelles et faites revenir à la poêle avec de l'ail. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Pavé de Saumon, Lentilles Vertes et Fondue de Poireaux",
      "time": "28 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "60g de lentilles",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Émincez et faites suer les poireaux à la poêle 15 min. 3. Faites cuire le saumon à l'unilatéral pendant 8 minutes. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Pavé de Saumon, Patate Douce et Poivrons Confits",
      "time": "28 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "1 petite patate douce",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. 3. Faites cuire le saumon à l'unilatéral pendant 8 minutes. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Tofu Fumé, Patate Douce et Brocolis Croquants",
      "time": "20 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "1 petite patate douce",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Faites cuire les brocolis à la vapeur pendant 7 min. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Pavé de Saumon, Spaghettis Complets et Courgettes Poêlées",
      "time": "22 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "50g de pâtes au blé complet",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Cuisez les pâtes al dente pour maintenir un IG bas. 2. Coupez en rondelles et faites revenir à la poêle avec de l'ail. 3. Faites cuire le saumon à l'unilatéral pendant 8 minutes. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Pavé de Saumon, Lentilles Vertes et Épinards à la Crème",
      "time": "20 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "60g de lentilles",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Faites cuire le saumon à l'unilatéral pendant 8 minutes. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Pavé de Saumon, Patate Douce et Courgettes Poêlées",
      "time": "25 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "1 petite patate douce",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Coupez en rondelles et faites revenir à la poêle avec de l'ail. 3. Faites cuire le saumon à l'unilatéral pendant 8 minutes. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Pavé de Saumon, Lentilles Vertes et Courgettes Poêlées",
      "time": "16 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "60g de lentilles",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Coupez en rondelles et faites revenir à la poêle avec de l'ail. 3. Faites cuire le saumon à l'unilatéral pendant 8 minutes. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Poulet Grillé, Spaghettis Complets et Fondue de Poireaux",
      "time": "15 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "50g de pâtes au blé complet",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Cuisez les pâtes al dente pour maintenir un IG bas. 2. Émincez et faites suer les poireaux à la poêle 15 min. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Poulet Grillé, Riz Sauvage et Fondue de Poireaux",
      "time": "29 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "50g de riz sauvage",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le riz 20 minutes. 2. Émincez et faites suer les poireaux à la poêle 15 min. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Tofu Fumé, Spaghettis Complets et Fondue de Poireaux",
      "time": "25 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "50g de pâtes au blé complet",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Cuisez les pâtes al dente pour maintenir un IG bas. 2. Émincez et faites suer les poireaux à la poêle 15 min. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Crevettes Sautées, Spaghettis Complets et Courgettes Poêlées",
      "time": "30 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "150g de crevettes",
        "50g de pâtes au blé complet",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Cuisez les pâtes al dente pour maintenir un IG bas. 2. Coupez en rondelles et faites revenir à la poêle avec de l'ail. 3. Faites sauter les crevettes avec de l'ail et du persil. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Crevettes Sautées, Patate Douce et Épinards à la Crème",
      "time": "26 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "150g de crevettes",
        "1 petite patate douce",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Faites sauter les crevettes avec de l'ail et du persil. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Tofu Fumé, Spaghettis Complets et Courgettes Poêlées",
      "time": "23 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "50g de pâtes au blé complet",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Cuisez les pâtes al dente pour maintenir un IG bas. 2. Coupez en rondelles et faites revenir à la poêle avec de l'ail. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Poulet Grillé, Patate Douce et Fondue de Poireaux",
      "time": "18 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "1 petite patate douce",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Émincez et faites suer les poireaux à la poêle 15 min. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Bœuf Émincé, Patate Douce et Poivrons Confits",
      "time": "29 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "1 petite patate douce",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Bœuf Émincé, Spaghettis Complets et Courgettes Poêlées",
      "time": "22 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "50g de pâtes au blé complet",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Cuisez les pâtes al dente pour maintenir un IG bas. 2. Coupez en rondelles et faites revenir à la poêle avec de l'ail. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Crevettes Sautées, Quinoa et Brocolis Croquants",
      "time": "26 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "150g de crevettes",
        "50g de quinoa",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le quinoa 12 min dans l'eau bouillante. 2. Faites cuire les brocolis à la vapeur pendant 7 min. 3. Faites sauter les crevettes avec de l'ail et du persil. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Poulet Grillé, Patate Douce et Poivrons Confits",
      "time": "24 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "1 petite patate douce",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Tofu Fumé, Patate Douce et Poivrons Confits",
      "time": "20 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "1 petite patate douce",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Crevettes Sautées, Lentilles Vertes et Fondue de Poireaux",
      "time": "30 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "150g de crevettes",
        "60g de lentilles",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Émincez et faites suer les poireaux à la poêle 15 min. 3. Faites sauter les crevettes avec de l'ail et du persil. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Bœuf Émincé, Spaghettis Complets et Fondue de Poireaux",
      "time": "28 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "50g de pâtes au blé complet",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Cuisez les pâtes al dente pour maintenir un IG bas. 2. Émincez et faites suer les poireaux à la poêle 15 min. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Tofu Fumé, Patate Douce et Épinards à la Crème",
      "time": "16 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "1 petite patate douce",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Tofu Fumé, Patate Douce et Fondue de Poireaux",
      "time": "23 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "1 petite patate douce",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Émincez et faites suer les poireaux à la poêle 15 min. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    }
  ],
  "dinner": [
    {
      "title": "Crevettes Sautées aux Courgettes Poêlées",
      "time": "24 min",
      "description": "Un repas très léger, idéal pour le soir. Très pauvre en calories.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "150g de crevettes",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Coupez en rondelles et faites revenir à la poêle avec de l'ail. Préparation de la protéine : Faites sauter les crevettes avec de l'ail et du persil. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Pavé de Saumon aux Brocolis Croquants",
      "time": "22 min",
      "description": "Un repas très léger, idéal pour le soir. Riche en oméga-3.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Faites cuire les brocolis à la vapeur pendant 7 min. Préparation de la protéine : Faites cuire le saumon à l'unilatéral pendant 8 minutes. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Poulet Grillé aux Poivrons Confits",
      "time": "27 min",
      "description": "Un repas très léger, idéal pour le soir. Volaille maigre.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. Préparation de la protéine : Faites dorer le poulet à la poêle avec un peu d'huile d'olive. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Bowl de Bœuf Émincé, Riz Sauvage et Épinards à la Crème",
      "time": "22 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "50g de riz sauvage",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le riz 20 minutes. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Crevettes Sautées aux Épinards à la Crème",
      "time": "18 min",
      "description": "Un repas très léger, idéal pour le soir. Très pauvre en calories.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "150g de crevettes",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. Préparation de la protéine : Faites sauter les crevettes avec de l'ail et du persil. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Bowl de Tofu Fumé, Lentilles Vertes et Brocolis Croquants",
      "time": "23 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "60g de lentilles",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Faites cuire les brocolis à la vapeur pendant 7 min. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Poulet Grillé, Patate Douce et Épinards à la Crème",
      "time": "22 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "1 petite patate douce",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Poulet Grillé, Quinoa et Courgettes Poêlées",
      "time": "29 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "50g de quinoa",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le quinoa 12 min dans l'eau bouillante. 2. Coupez en rondelles et faites revenir à la poêle avec de l'ail. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Tofu Fumé aux Courgettes Poêlées",
      "time": "17 min",
      "description": "Un repas très léger, idéal pour le soir. Végétarien.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Coupez en rondelles et faites revenir à la poêle avec de l'ail. Préparation de la protéine : Faites revenir le tofu dans une cuillère de sauce soja. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Poulet Grillé aux Épinards à la Crème",
      "time": "21 min",
      "description": "Un repas très léger, idéal pour le soir. Volaille maigre.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. Préparation de la protéine : Faites dorer le poulet à la poêle avec un peu d'huile d'olive. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Tofu Fumé aux Fondue de Poireaux",
      "time": "28 min",
      "description": "Un repas très léger, idéal pour le soir. Végétarien.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Émincez et faites suer les poireaux à la poêle 15 min. Préparation de la protéine : Faites revenir le tofu dans une cuillère de sauce soja. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Bowl de Poulet Grillé, Quinoa et Poivrons Confits",
      "time": "16 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "50g de quinoa",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le quinoa 12 min dans l'eau bouillante. 2. Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Crevettes Sautées, Lentilles Vertes et Brocolis Croquants",
      "time": "15 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "150g de crevettes",
        "60g de lentilles",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Faites cuire les brocolis à la vapeur pendant 7 min. 3. Faites sauter les crevettes avec de l'ail et du persil. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Crevettes Sautées aux Brocolis Croquants",
      "time": "27 min",
      "description": "Un repas très léger, idéal pour le soir. Très pauvre en calories.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "150g de crevettes",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Faites cuire les brocolis à la vapeur pendant 7 min. Préparation de la protéine : Faites sauter les crevettes avec de l'ail et du persil. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Poulet Grillé aux Brocolis Croquants",
      "time": "27 min",
      "description": "Un repas très léger, idéal pour le soir. Volaille maigre.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Faites cuire les brocolis à la vapeur pendant 7 min. Préparation de la protéine : Faites dorer le poulet à la poêle avec un peu d'huile d'olive. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Bowl de Bœuf Émincé, Lentilles Vertes et Épinards à la Crème",
      "time": "17 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "60g de lentilles",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Tofu Fumé, Lentilles Vertes et Épinards à la Crème",
      "time": "17 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "60g de lentilles",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Pavé de Saumon, Quinoa et Courgettes Poêlées",
      "time": "22 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "50g de quinoa",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le quinoa 12 min dans l'eau bouillante. 2. Coupez en rondelles et faites revenir à la poêle avec de l'ail. 3. Faites cuire le saumon à l'unilatéral pendant 8 minutes. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bœuf Émincé aux Poivrons Confits",
      "time": "25 min",
      "description": "Un repas très léger, idéal pour le soir. Riche en fer.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. Préparation de la protéine : Saisissez la viande rapidement à feu vif. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Bowl de Tofu Fumé, Riz Sauvage et Épinards à la Crème",
      "time": "27 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "50g de riz sauvage",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le riz 20 minutes. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Pavé de Saumon aux Fondue de Poireaux",
      "time": "26 min",
      "description": "Un repas très léger, idéal pour le soir. Riche en oméga-3.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Émincez et faites suer les poireaux à la poêle 15 min. Préparation de la protéine : Faites cuire le saumon à l'unilatéral pendant 8 minutes. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Bowl de Tofu Fumé, Spaghettis Complets et Brocolis Croquants",
      "time": "20 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "50g de pâtes au blé complet",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Cuisez les pâtes al dente pour maintenir un IG bas. 2. Faites cuire les brocolis à la vapeur pendant 7 min. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Crevettes Sautées, Lentilles Vertes et Épinards à la Crème",
      "time": "29 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "150g de crevettes",
        "60g de lentilles",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Faites sauter les crevettes avec de l'ail et du persil. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Tofu Fumé, Quinoa et Poivrons Confits",
      "time": "26 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "50g de quinoa",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le quinoa 12 min dans l'eau bouillante. 2. Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Poulet Grillé, Lentilles Vertes et Courgettes Poêlées",
      "time": "24 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "60g de lentilles",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Coupez en rondelles et faites revenir à la poêle avec de l'ail. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Bœuf Émincé, Patate Douce et Courgettes Poêlées",
      "time": "25 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "1 petite patate douce",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Coupez en rondelles et faites revenir à la poêle avec de l'ail. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Poulet Grillé, Riz Sauvage et Brocolis Croquants",
      "time": "26 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "50g de riz sauvage",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le riz 20 minutes. 2. Faites cuire les brocolis à la vapeur pendant 7 min. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Pavé de Saumon aux Courgettes Poêlées",
      "time": "25 min",
      "description": "Un repas très léger, idéal pour le soir. Riche en oméga-3.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Coupez en rondelles et faites revenir à la poêle avec de l'ail. Préparation de la protéine : Faites cuire le saumon à l'unilatéral pendant 8 minutes. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Bowl de Tofu Fumé, Lentilles Vertes et Poivrons Confits",
      "time": "22 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "60g de lentilles",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Bœuf Émincé, Spaghettis Complets et Poivrons Confits",
      "time": "23 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "50g de pâtes au blé complet",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Cuisez les pâtes al dente pour maintenir un IG bas. 2. Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bœuf Émincé aux Brocolis Croquants",
      "time": "15 min",
      "description": "Un repas très léger, idéal pour le soir. Riche en fer.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Faites cuire les brocolis à la vapeur pendant 7 min. Préparation de la protéine : Saisissez la viande rapidement à feu vif. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Bowl de Poulet Grillé, Lentilles Vertes et Brocolis Croquants",
      "time": "27 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "60g de lentilles",
        "150g de brocolis",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Faites cuire les brocolis à la vapeur pendant 7 min. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bœuf Émincé aux Fondue de Poireaux",
      "time": "17 min",
      "description": "Un repas très léger, idéal pour le soir. Riche en fer.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Émincez et faites suer les poireaux à la poêle 15 min. Préparation de la protéine : Saisissez la viande rapidement à feu vif. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Crevettes Sautées aux Fondue de Poireaux",
      "time": "25 min",
      "description": "Un repas très léger, idéal pour le soir. Très pauvre en calories.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "150g de crevettes",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Émincez et faites suer les poireaux à la poêle 15 min. Préparation de la protéine : Faites sauter les crevettes avec de l'ail et du persil. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Bowl de Bœuf Émincé, Quinoa et Courgettes Poêlées",
      "time": "20 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "50g de quinoa",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le quinoa 12 min dans l'eau bouillante. 2. Coupez en rondelles et faites revenir à la poêle avec de l'ail. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Tofu Fumé, Lentilles Vertes et Courgettes Poêlées",
      "time": "20 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "60g de lentilles",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Laissez mijoter les lentilles 25 min avec un bouquet garni. 2. Coupez en rondelles et faites revenir à la poêle avec de l'ail. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Tofu Fumé aux Poivrons Confits",
      "time": "29 min",
      "description": "Un repas très léger, idéal pour le soir. Végétarien.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. Préparation de la protéine : Faites revenir le tofu dans une cuillère de sauce soja. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Bowl de Poulet Grillé, Spaghettis Complets et Poivrons Confits",
      "time": "21 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "50g de pâtes au blé complet",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Cuisez les pâtes al dente pour maintenir un IG bas. 2. Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Poulet Grillé aux Courgettes Poêlées",
      "time": "25 min",
      "description": "Un repas très léger, idéal pour le soir. Volaille maigre.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Coupez en rondelles et faites revenir à la poêle avec de l'ail. Préparation de la protéine : Faites dorer le poulet à la poêle avec un peu d'huile d'olive. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Bœuf Émincé aux Épinards à la Crème",
      "time": "30 min",
      "description": "Un repas très léger, idéal pour le soir. Riche en fer.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. Préparation de la protéine : Saisissez la viande rapidement à feu vif. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Pavé de Saumon aux Épinards à la Crème",
      "time": "24 min",
      "description": "Un repas très léger, idéal pour le soir. Riche en oméga-3.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "1 pavé de saumon frais",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. Préparation de la protéine : Faites cuire le saumon à l'unilatéral pendant 8 minutes. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Bowl de Crevettes Sautées, Spaghettis Complets et Poivrons Confits",
      "time": "26 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "150g de crevettes",
        "50g de pâtes au blé complet",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Cuisez les pâtes al dente pour maintenir un IG bas. 2. Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. 3. Faites sauter les crevettes avec de l'ail et du persil. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Bœuf Émincé, Riz Sauvage et Poivrons Confits",
      "time": "23 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "50g de riz sauvage",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le riz 20 minutes. 2. Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Poulet Grillé, Spaghettis Complets et Épinards à la Crème",
      "time": "15 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "120g de blanc de poulet",
        "50g de pâtes au blé complet",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Cuisez les pâtes al dente pour maintenir un IG bas. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Faites dorer le poulet à la poêle avec un peu d'huile d'olive. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bœuf Émincé aux Courgettes Poêlées",
      "time": "26 min",
      "description": "Un repas très léger, idéal pour le soir. Riche en fer.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "1 belle courgette",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Coupez en rondelles et faites revenir à la poêle avec de l'ail. Préparation de la protéine : Saisissez la viande rapidement à feu vif. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Crevettes Sautées aux Poivrons Confits",
      "time": "21 min",
      "description": "Un repas très léger, idéal pour le soir. Très pauvre en calories.",
      "ig": "Bas",
      "tags": [
        "Sans Féculents",
        "Léger",
        "Soir"
      ],
      "ingredients": [
        "150g de crevettes",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Herbes fraîches",
        "Sel et poivre"
      ],
      "instructions": "Préparation du légume : Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. Préparation de la protéine : Faites sauter les crevettes avec de l'ail et du persil. Dressez ensemble et ajoutez un filet d'huile d'olive."
    },
    {
      "title": "Bowl de Crevettes Sautées, Patate Douce et Fondue de Poireaux",
      "time": "27 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "150g de crevettes",
        "1 petite patate douce",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Émincez et faites suer les poireaux à la poêle 15 min. 3. Faites sauter les crevettes avec de l'ail et du persil. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Crevettes Sautées, Riz Sauvage et Poivrons Confits",
      "time": "16 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "150g de crevettes",
        "50g de riz sauvage",
        "1 poivron rouge",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le riz 20 minutes. 2. Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres. 3. Faites sauter les crevettes avec de l'ail et du persil. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Tofu Fumé, Quinoa et Fondue de Poireaux",
      "time": "24 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de tofu fumé en cubes",
        "50g de quinoa",
        "2 blancs de poireaux",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Faites cuire le quinoa 12 min dans l'eau bouillante. 2. Émincez et faites suer les poireaux à la poêle 15 min. 3. Faites revenir le tofu dans une cuillère de sauce soja. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    },
    {
      "title": "Bowl de Bœuf Émincé, Patate Douce et Épinards à la Crème",
      "time": "23 min",
      "description": "Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents.",
      "ig": "Bas",
      "tags": [
        "Complet",
        "Équilibré"
      ],
      "ingredients": [
        "100g de bœuf maigre émincé",
        "1 petite patate douce",
        "200g d'épinards frais",
        "1 c.à.s d'huile d'olive",
        "Épices au choix",
        "Sel et poivre"
      ],
      "instructions": "1. Coupez en dés et rôtissez au four 20 min avec du paprika. 2. Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale. 3. Saisissez la viande rapidement à feu vif. 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
    }
  ],
  "dessert": [
    {
      "title": "Tartelette Express sans cuisson à la Noisette Croquante",
      "time": "20 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "50g de poudre d'amande",
        "1 c.à.s d'huile de coco",
        "1 c.à.c de purée de cacahuète",
        "Éclats de noisettes torréfiées"
      ],
      "instructions": "Mélangez l'amande, l'huile de coco et la purée pour faire un fond de tarte. Tassez. Ajoutez la garniture. Parsemez les noisettes juste avant de servir."
    },
    {
      "title": "Mousse au Chocolat Noir et Vanille Intense",
      "time": "5 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "100g de chocolat noir 85%",
        "3 blancs d'œufs",
        "1 pincée de sel",
        "Graines d'une gousse de vanille"
      ],
      "instructions": "Faites fondre le chocolat. Montez les blancs en neige avec le sel. Incorporez délicatement le chocolat tiédi. Mélangez la vanille dans la préparation de base."
    },
    {
      "title": "Tartelette Express sans cuisson à la Framboise",
      "time": "9 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "50g de poudre d'amande",
        "1 c.à.s d'huile de coco",
        "1 c.à.c de purée de cacahuète",
        "Quelques framboises fraîches"
      ],
      "instructions": "Mélangez l'amande, l'huile de coco et la purée pour faire un fond de tarte. Tassez. Ajoutez la garniture. Ajoutez les framboises en décoration."
    },
    {
      "title": "Mousse au Chocolat Noir et Pistache",
      "time": "14 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "100g de chocolat noir 85%",
        "3 blancs d'œufs",
        "1 pincée de sel",
        "Pistaches concassées non salées"
      ],
      "instructions": "Faites fondre le chocolat. Montez les blancs en neige avec le sel. Incorporez délicatement le chocolat tiédi. Ajoutez pour une touche de couleur et de croquant."
    },
    {
      "title": "Cheesecake cru à la Noisette Croquante",
      "time": "15 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "100g de fromage frais (type Philadelphia)",
        "1 c.à.s de crème de coco",
        "Éclats de noisettes torréfiées"
      ],
      "instructions": "Fouettez le fromage avec la crème. Disposez sur une petite base d'amandes concassées. Surmontez de la garniture. Parsemez les noisettes juste avant de servir."
    },
    {
      "title": "Poire Rôtie et Vanille Intense",
      "time": "15 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "1 poire",
        "1 pincée de cannelle",
        "1 noisette de beurre clarifié",
        "Graines d'une gousse de vanille"
      ],
      "instructions": "Coupez la poire en deux. Faites rôtir 15 min au four à 180°C. Servez avec la garniture. Mélangez la vanille dans la préparation de base."
    },
    {
      "title": "Verrine Fraîcheur à la Noisette Croquante",
      "time": "15 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "150g de yaourt de brebis",
        "1 c.à.s de purée d'amande",
        "Éclats de noisettes torréfiées"
      ],
      "instructions": "Mélangez le yaourt et la purée d'amande. Alternez dans un verre avec la garniture. Parsemez les noisettes juste avant de servir."
    },
    {
      "title": "Cheesecake cru à la Pistache",
      "time": "15 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "100g de fromage frais (type Philadelphia)",
        "1 c.à.s de crème de coco",
        "Pistaches concassées non salées"
      ],
      "instructions": "Fouettez le fromage avec la crème. Disposez sur une petite base d'amandes concassées. Surmontez de la garniture. Ajoutez pour une touche de couleur et de croquant."
    },
    {
      "title": "Verrine Fraîcheur à la Vanille Intense",
      "time": "20 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "150g de yaourt de brebis",
        "1 c.à.s de purée d'amande",
        "Graines d'une gousse de vanille"
      ],
      "instructions": "Mélangez le yaourt et la purée d'amande. Alternez dans un verre avec la garniture. Mélangez la vanille dans la préparation de base."
    },
    {
      "title": "Poire Rôtie et Fève Tonka",
      "time": "8 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "1 poire",
        "1 pincée de cannelle",
        "1 noisette de beurre clarifié",
        "Un peu de fève Tonka râpée"
      ],
      "instructions": "Coupez la poire en deux. Faites rôtir 15 min au four à 180°C. Servez avec la garniture. Râpez la fève au dernier moment pour le parfum."
    },
    {
      "title": "Tartelette Express sans cuisson à la Vanille Intense",
      "time": "17 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "50g de poudre d'amande",
        "1 c.à.s d'huile de coco",
        "1 c.à.c de purée de cacahuète",
        "Graines d'une gousse de vanille"
      ],
      "instructions": "Mélangez l'amande, l'huile de coco et la purée pour faire un fond de tarte. Tassez. Ajoutez la garniture. Mélangez la vanille dans la préparation de base."
    },
    {
      "title": "Tartelette Express sans cuisson à la Pistache",
      "time": "14 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "50g de poudre d'amande",
        "1 c.à.s d'huile de coco",
        "1 c.à.c de purée de cacahuète",
        "Pistaches concassées non salées"
      ],
      "instructions": "Mélangez l'amande, l'huile de coco et la purée pour faire un fond de tarte. Tassez. Ajoutez la garniture. Ajoutez pour une touche de couleur et de croquant."
    },
    {
      "title": "Verrine Fraîcheur à la Pistache",
      "time": "20 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "150g de yaourt de brebis",
        "1 c.à.s de purée d'amande",
        "Pistaches concassées non salées"
      ],
      "instructions": "Mélangez le yaourt et la purée d'amande. Alternez dans un verre avec la garniture. Ajoutez pour une touche de couleur et de croquant."
    },
    {
      "title": "Cheesecake cru à la Vanille Intense",
      "time": "9 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "100g de fromage frais (type Philadelphia)",
        "1 c.à.s de crème de coco",
        "Graines d'une gousse de vanille"
      ],
      "instructions": "Fouettez le fromage avec la crème. Disposez sur une petite base d'amandes concassées. Surmontez de la garniture. Mélangez la vanille dans la préparation de base."
    },
    {
      "title": "Tartelette Express sans cuisson à la Fève Tonka",
      "time": "16 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "50g de poudre d'amande",
        "1 c.à.s d'huile de coco",
        "1 c.à.c de purée de cacahuète",
        "Un peu de fève Tonka râpée"
      ],
      "instructions": "Mélangez l'amande, l'huile de coco et la purée pour faire un fond de tarte. Tassez. Ajoutez la garniture. Râpez la fève au dernier moment pour le parfum."
    },
    {
      "title": "Cheesecake cru à la Framboise",
      "time": "16 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "100g de fromage frais (type Philadelphia)",
        "1 c.à.s de crème de coco",
        "Quelques framboises fraîches"
      ],
      "instructions": "Fouettez le fromage avec la crème. Disposez sur une petite base d'amandes concassées. Surmontez de la garniture. Ajoutez les framboises en décoration."
    },
    {
      "title": "Verrine Fraîcheur à la Fève Tonka",
      "time": "14 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "150g de yaourt de brebis",
        "1 c.à.s de purée d'amande",
        "Un peu de fève Tonka râpée"
      ],
      "instructions": "Mélangez le yaourt et la purée d'amande. Alternez dans un verre avec la garniture. Râpez la fève au dernier moment pour le parfum."
    },
    {
      "title": "Mousse au Chocolat Noir et Fève Tonka",
      "time": "19 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "100g de chocolat noir 85%",
        "3 blancs d'œufs",
        "1 pincée de sel",
        "Un peu de fève Tonka râpée"
      ],
      "instructions": "Faites fondre le chocolat. Montez les blancs en neige avec le sel. Incorporez délicatement le chocolat tiédi. Râpez la fève au dernier moment pour le parfum."
    },
    {
      "title": "Poire Rôtie et Framboise",
      "time": "20 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "1 poire",
        "1 pincée de cannelle",
        "1 noisette de beurre clarifié",
        "Quelques framboises fraîches"
      ],
      "instructions": "Coupez la poire en deux. Faites rôtir 15 min au four à 180°C. Servez avec la garniture. Ajoutez les framboises en décoration."
    },
    {
      "title": "Verrine Fraîcheur à la Framboise",
      "time": "11 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "150g de yaourt de brebis",
        "1 c.à.s de purée d'amande",
        "Quelques framboises fraîches"
      ],
      "instructions": "Mélangez le yaourt et la purée d'amande. Alternez dans un verre avec la garniture. Ajoutez les framboises en décoration."
    },
    {
      "title": "Mousse au Chocolat Noir et Noisette Croquante",
      "time": "16 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "100g de chocolat noir 85%",
        "3 blancs d'œufs",
        "1 pincée de sel",
        "Éclats de noisettes torréfiées"
      ],
      "instructions": "Faites fondre le chocolat. Montez les blancs en neige avec le sel. Incorporez délicatement le chocolat tiédi. Parsemez les noisettes juste avant de servir."
    },
    {
      "title": "Poire Rôtie et Pistache",
      "time": "8 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "1 poire",
        "1 pincée de cannelle",
        "1 noisette de beurre clarifié",
        "Pistaches concassées non salées"
      ],
      "instructions": "Coupez la poire en deux. Faites rôtir 15 min au four à 180°C. Servez avec la garniture. Ajoutez pour une touche de couleur et de croquant."
    },
    {
      "title": "Poire Rôtie et Noisette Croquante",
      "time": "7 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "1 poire",
        "1 pincée de cannelle",
        "1 noisette de beurre clarifié",
        "Éclats de noisettes torréfiées"
      ],
      "instructions": "Coupez la poire en deux. Faites rôtir 15 min au four à 180°C. Servez avec la garniture. Parsemez les noisettes juste avant de servir."
    },
    {
      "title": "Cheesecake cru à la Fève Tonka",
      "time": "11 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "100g de fromage frais (type Philadelphia)",
        "1 c.à.s de crème de coco",
        "Un peu de fève Tonka râpée"
      ],
      "instructions": "Fouettez le fromage avec la crème. Disposez sur une petite base d'amandes concassées. Surmontez de la garniture. Râpez la fève au dernier moment pour le parfum."
    },
    {
      "title": "Mousse au Chocolat Noir et Framboise",
      "time": "8 min",
      "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Gourmand",
        "IG Bas"
      ],
      "ingredients": [
        "100g de chocolat noir 85%",
        "3 blancs d'œufs",
        "1 pincée de sel",
        "Quelques framboises fraîches"
      ],
      "instructions": "Faites fondre le chocolat. Montez les blancs en neige avec le sel. Incorporez délicatement le chocolat tiédi. Ajoutez les framboises en décoration."
    },
    {
      "title": "Fondant au Chocolat (Farine de Pois Chiche)",
      "time": "25 min",
      "description": "Un fondant bluffant, sans farine de blé et sans sucre raffiné.",
      "ig": "Bas",
      "tags": [
        "Dessert",
        "Chocolat",
        "Sans Gluten"
      ],
      "ingredients": [
        "150g de chocolat noir 70% min.",
        "3 œufs",
        "50g de beurre ou huile de coco",
        "1 c.à.s de xylitol (sucre de bouleau)",
        "1 c.à.s de farine de pois chiche"
      ],
      "instructions": "Faites fondre le chocolat et le gras. Fouettez les œufs et le xylitol. Mélangez le tout avec la farine. Enfournez 15 min à 180°C."
    },
    {
      "title": "Panna Cotta Lait d'Amande et Coulis Fruits Rouges",
      "time": "15 min",
      "description": "Léger, frais, et pratiquement sans impact sur la glycémie.",
      "ig": "Très Bas",
      "tags": [
        "Dessert",
        "Frais",
        "Sans Lactose"
      ],
      "ingredients": [
        "250ml de crème d'amande",
        "1g d'agar-agar",
        "100g de fruits rouges surgelés",
        "1 c.à.c d'extrait de vanille"
      ],
      "instructions": "Faites bouillir la crème d'amande avec l'agar-agar 2 min. Versez dans des verrines. Laissez prendre au frais. Mixez les fruits rouges pour le coulis et versez dessus."
    },
    {
      "title": "Cookies IG Bas au Beurre de Cacahuète",
      "time": "20 min",
      "description": "La gourmandise absolue du goûter ou du dessert, version saine.",
      "ig": "Bas",
      "tags": [
        "Dessert",
        "Biscuits"
      ],
      "ingredients": [
        "100g de beurre de cacahuète pur",
        "1 œuf",
        "30g de poudre d'amande",
        "Pépites de chocolat noir"
      ],
      "instructions": "Mélangez tous les ingrédients. Formez des boules et aplatissez-les sur une plaque. Enfournez 10 min à 180°C."
    }
  ],
  "drinks": [
    {
      "title": "Infusion Froide Menthe & Citron",
      "time": "5 min (infusion 2h)",
      "description": "Une eau détox ultra-rafraîchissante, idéale pour nettoyer le foie sans sucre.",
      "ig": "Très Bas",
      "tags": [
        "Détox",
        "Frais",
        "Zéro Sucre"
      ],
      "ingredients": [
        "1 litre d'eau filtrée",
        "1/2 citron bio coupé en rondelles",
        "10 feuilles de menthe fraîche",
        "Quelques glaçons"
      ],
      "instructions": "Placez les rondelles de citron et la menthe au fond d'une carafe. Versez l'eau. Laissez infuser au frais pendant 2 heures minimum."
    },
    {
      "title": "Smoothie Vert Brûle-Graisse",
      "time": "5 min",
      "description": "Un concentré de vitamines et de fibres. L'avocat et le concombre maintiennent l'IG très bas.",
      "ig": "Très Bas",
      "tags": [
        "Smoothie",
        "Fibres",
        "Vert"
      ],
      "ingredients": [
        "1/2 concombre",
        "1 poignée d'épinards frais",
        "1/4 d'avocat",
        "Le jus d'un demi citron",
        "200ml d'eau ou lait d'amande sans sucre"
      ],
      "instructions": "Épluchez le concombre et l'avocat. Mixez tous les ingrédients dans un blender jusqu'à obtenir une texture parfaitement lisse."
    },
    {
      "title": "Thé Vert Glacé au Gingembre",
      "time": "10 min (refroidissement 1h)",
      "description": "Le thé vert et le gingembre sont connus pour accélérer le métabolisme et stabiliser la glycémie.",
      "ig": "Très Bas",
      "tags": [
        "Thé",
        "Gingembre",
        "Stimulant"
      ],
      "ingredients": [
        "1 litre d'eau",
        "2 sachets de thé vert bio",
        "1 gros morceau de gingembre frais râpé",
        "1 c.à.c d'érythritol (optionnel)"
      ],
      "instructions": "Faites infuser le thé et le gingembre râpé dans l'eau chaude pendant 10 minutes. Filtrez, sucrez à l'érythritol si désiré, puis placez au frais."
    },
    {
      "title": "Eau Détox Concombre, Framboise & Romarin",
      "time": "5 min",
      "description": "Une boisson très douce et aromatique, parfaite pour s'hydrater tout au long de la journée.",
      "ig": "Très Bas",
      "tags": [
        "Eau infusée",
        "Hydratation"
      ],
      "ingredients": [
        "1 litre d'eau",
        "1/4 de concombre en fines rondelles",
        "1 branche de romarin frais",
        "Quelques framboises écrasées"
      ],
      "instructions": "Mélangez tous les ingrédients dans une bouteille ou une carafe. Laissez reposer 1 heure au réfrigérateur pour libérer les arômes."
    },
    {
      "title": "Kéfir de Fruits Maison (IG contrôlé)",
      "time": "10 min (fermentation 48h)",
      "description": "La boisson probiotique par excellence. La fermentation consomme le sucre, l'IG final est donc quasi nul !",
      "ig": "Bas",
      "tags": [
        "Probiotique",
        "Pétillant"
      ],
      "ingredients": [
        "1 litre d'eau",
        "3 c.à.s de grains de Kéfir de fruits",
        "2 c.à.s de sucre (qui sera mangé par le kéfir)",
        "1 demi citron",
        "1 figue sèche"
      ],
      "instructions": "Dans un bocal, mettez l'eau, les grains, le sucre, le citron et la figue. Couvrez d'un linge. Laissez fermenter 48h à température ambiante jusqu'à ce que la figue remonte à la surface. Filtrez et buvez."
    },
    {
      "title": "Golden Latte (Lait d'Or au Curcuma)",
      "time": "5 min",
      "description": "Le curcuma est un puissant anti-inflammatoire naturel.",
      "ig": "Très Bas",
      "tags": [
        "Boisson Chaude",
        "Anti-inflammatoire"
      ],
      "ingredients": [
        "250ml de lait d'amande sans sucre",
        "1 c.à.c rase de curcuma en poudre",
        "1 pincée de poivre noir (crucial pour l'absorption)",
        "1 pincée de cannelle",
        "1/2 c.à.c d'huile de coco"
      ],
      "instructions": "Faites chauffer doucement le lait végétal à la casserole. Ajoutez les épices et l'huile de coco. Fouettez vigoureusement jusqu'à obtenir une petite mousse."
    },
    {
      "title": "Infusion Hibiscus (Bissap sans sucre)",
      "time": "15 min",
      "description": "Très florale et acidulée, cette boisson aide à faire baisser la tension artérielle.",
      "ig": "Très Bas",
      "tags": [
        "Tisane",
        "Rouge",
        "Froid ou Chaud"
      ],
      "ingredients": [
        "1 litre d'eau",
        "3 c.à.s de fleurs d'hibiscus séchées",
        "1 gousse de vanille fendue",
        "Érythritol (selon le goût)"
      ],
      "instructions": "Faites bouillir l'eau avec les fleurs et la vanille pendant 10 minutes. Filtrez pour retirer les fleurs. À boire très frais l'été ou chaud l'hiver."
    },
    {
      "title": "Jus Vert Céleri-Pomme (Extracteur)",
      "time": "10 min",
      "description": "Le fameux jus de céleri purifiant, adouci par une demi-pomme verte (qui a un IG bas).",
      "ig": "Bas",
      "tags": [
        "Jus",
        "Vitamines",
        "Céleri"
      ],
      "ingredients": [
        "1/2 botte de céleri branche",
        "1/2 pomme verte (Granny Smith)",
        "1/2 citron pelé à vif"
      ],
      "instructions": "Passez le céleri, la pomme et le citron à l'extracteur de jus (pas de blender). À boire immédiatement, de préférence le matin à jeun."
    },
    {
      "title": "Vinaigre de Cidre Tonique Matinal",
      "time": "2 min",
      "description": "Boire du vinaigre de cidre avant un repas abaisse considérablement le pic de glycémie qui suit.",
      "ig": "Très Bas",
      "tags": [
        "Tonique",
        "Coupe-faim",
        "Astuce IG"
      ],
      "ingredients": [
        "1 grand verre d'eau tiède",
        "1 c.à.s de vinaigre de cidre de pomme (non pasteurisé)"
      ],
      "instructions": "Mélangez le vinaigre de cidre dans l'eau. Buvez-le à la paille (pour protéger l'émail des dents) 15 minutes avant votre repas principal."
    },
    {
      "title": "Chai Tea Latte au Lait de Soja",
      "time": "10 min",
      "description": "L'alternative parfaite aux lattes des grandes chaînes, bourrés de sirops sucrés.",
      "ig": "Très Bas",
      "tags": [
        "Réconfortant",
        "Épices"
      ],
      "ingredients": [
        "1 sachet de thé noir",
        "200ml de lait de soja nature",
        "Cardamome, cannelle, clou de girofle",
        "1 c.à.c d'extrait de vanille"
      ],
      "instructions": "Faites infuser le thé avec les épices dans très peu d'eau chaude. Faites chauffer et mousser le lait de soja, puis versez-le sur l'infusion."
    }
  ]
,
  "kenwood": [
    {
        "title": "Jus Détox Courgette, Chou Kale & Kiwi",
        "time": "7 min",
        "description": "Doux, aqueux et IG nul. Super-aliment bourré d'antioxydants. Riche en vitamine C et fibres douces. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "2 belles feuilles de chou Kale",
            "1 kiwi",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Blettes & Pamplemousse",
        "time": "6 min",
        "description": "Base très douce et riche en eau. Riche en fibres douces. Baisse le taux d'insuline et de sucre dans le sang. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 feuille de blette",
            "1/2 pamplemousse",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Persil & Pomme Verte",
        "time": "6 min",
        "description": "Hydratant et très faible en sucre. Aide à la détoxification des reins. IG bas, apporte la juste dose de douceur acidulée. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 petit bouquet de persil",
            "1 pomme Granny Smith",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Épinards & Fraises",
        "time": "8 min",
        "description": "Hydratant et très faible en sucre. Riche en fer et magnésium. Riches en antioxydants, IG très bas. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 grosse poignée d'épinards frais",
            "Une poignée de fraises",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Chou Kale & Fraises",
        "time": "7 min",
        "description": "Base très douce et riche en eau. Super-aliment bourré d'antioxydants. Riches en antioxydants, IG très bas. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "2 belles feuilles de chou Kale",
            "Une poignée de fraises",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Cresson & Citron",
        "time": "6 min",
        "description": "Base très douce et riche en eau. Saveur poivrée et détoxifiant puissant. Alcalinisant et antioxydant majeur. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 poignée de cresson",
            "Le jus d'un demi-citron",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Cresson & Pamplemousse",
        "time": "8 min",
        "description": "Hydratant et très faible en sucre. Saveur poivrée et détoxifiant puissant. Baisse le taux d'insuline et de sucre dans le sang. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 poignée de cresson",
            "1/2 pamplemousse",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Épinards & Citron",
        "time": "7 min",
        "description": "Base très douce et riche en eau. Riche en fer et magnésium. Alcalinisant et antioxydant majeur. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 grosse poignée d'épinards frais",
            "Le jus d'un demi-citron",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Épinards & Fraises",
        "time": "7 min",
        "description": "Base très douce et riche en eau. Riche en fer et magnésium. Riches en antioxydants, IG très bas. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 grosse poignée d'épinards frais",
            "Une poignée de fraises",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Blettes & Pomme Verte",
        "time": "6 min",
        "description": "Doux, aqueux et IG nul. Riche en fibres douces. IG bas, apporte la juste dose de douceur acidulée. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 feuille de blette",
            "1 pomme Granny Smith",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Cresson & Kiwi",
        "time": "7 min",
        "description": "Base très douce et riche en eau. Saveur poivrée et détoxifiant puissant. Riche en vitamine C et fibres douces. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 poignée de cresson",
            "1 kiwi",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Chou Kale & Pomme Verte",
        "time": "7 min",
        "description": "Hydratant et très faible en sucre. Super-aliment bourré d'antioxydants. IG bas, apporte la juste dose de douceur acidulée. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "2 belles feuilles de chou Kale",
            "1 pomme Granny Smith",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Persil & Fraises",
        "time": "6 min",
        "description": "Doux, aqueux et IG nul. Aide à la détoxification des reins. Riches en antioxydants, IG très bas. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 petit bouquet de persil",
            "Une poignée de fraises",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Cresson & Citron",
        "time": "7 min",
        "description": "Doux, aqueux et IG nul. Saveur poivrée et détoxifiant puissant. Alcalinisant et antioxydant majeur. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 poignée de cresson",
            "Le jus d'un demi-citron",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Épinards & Fraises",
        "time": "6 min",
        "description": "Diurétique naturel et riche en minéraux. Riche en fer et magnésium. Riches en antioxydants, IG très bas. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 grosse poignée d'épinards frais",
            "Une poignée de fraises",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Persil & Fraises",
        "time": "7 min",
        "description": "Hydratant et très faible en sucre. Aide à la détoxification des reins. Riches en antioxydants, IG très bas. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 petit bouquet de persil",
            "Une poignée de fraises",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Épinards & Kiwi",
        "time": "7 min",
        "description": "Doux, aqueux et IG nul. Riche en fer et magnésium. Riche en vitamine C et fibres douces. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 grosse poignée d'épinards frais",
            "1 kiwi",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Cresson & Fraises",
        "time": "5 min",
        "description": "Hydratant et très faible en sucre. Saveur poivrée et détoxifiant puissant. Riches en antioxydants, IG très bas. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 poignée de cresson",
            "Une poignée de fraises",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Épinards & Citron",
        "time": "6 min",
        "description": "Hydratant et très faible en sucre. Riche en fer et magnésium. Alcalinisant et antioxydant majeur. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 grosse poignée d'épinards frais",
            "Le jus d'un demi-citron",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Blettes & Fraises",
        "time": "8 min",
        "description": "Naturellement isotonique. Riche en fibres douces. Riches en antioxydants, IG très bas. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 feuille de blette",
            "Une poignée de fraises",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Épinards & Pamplemousse",
        "time": "6 min",
        "description": "Naturellement isotonique. Riche en fer et magnésium. Baisse le taux d'insuline et de sucre dans le sang. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 grosse poignée d'épinards frais",
            "1/2 pamplemousse",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Cresson & Pomme Verte",
        "time": "6 min",
        "description": "Hydratant et très faible en sucre. Saveur poivrée et détoxifiant puissant. IG bas, apporte la juste dose de douceur acidulée. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 poignée de cresson",
            "1 pomme Granny Smith",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Blettes & Citron",
        "time": "5 min",
        "description": "Doux, aqueux et IG nul. Riche en fibres douces. Alcalinisant et antioxydant majeur. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 feuille de blette",
            "Le jus d'un demi-citron",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Blettes & Citron",
        "time": "8 min",
        "description": "Diurétique naturel et riche en minéraux. Riche en fibres douces. Alcalinisant et antioxydant majeur. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 feuille de blette",
            "Le jus d'un demi-citron",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Cresson & Pomme Verte",
        "time": "6 min",
        "description": "Naturellement isotonique. Saveur poivrée et détoxifiant puissant. IG bas, apporte la juste dose de douceur acidulée. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 poignée de cresson",
            "1 pomme Granny Smith",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Chou Kale & Pamplemousse",
        "time": "6 min",
        "description": "Hydratant et très faible en sucre. Super-aliment bourré d'antioxydants. Baisse le taux d'insuline et de sucre dans le sang. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "2 belles feuilles de chou Kale",
            "1/2 pamplemousse",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Persil & Pamplemousse",
        "time": "5 min",
        "description": "Base très douce et riche en eau. Aide à la détoxification des reins. Baisse le taux d'insuline et de sucre dans le sang. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 petit bouquet de persil",
            "1/2 pamplemousse",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Persil & Kiwi",
        "time": "8 min",
        "description": "Doux, aqueux et IG nul. Aide à la détoxification des reins. Riche en vitamine C et fibres douces. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 petit bouquet de persil",
            "1 kiwi",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Épinards & Pomme Verte",
        "time": "6 min",
        "description": "Doux, aqueux et IG nul. Riche en fer et magnésium. IG bas, apporte la juste dose de douceur acidulée. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 grosse poignée d'épinards frais",
            "1 pomme Granny Smith",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Épinards & Pomme Verte",
        "time": "6 min",
        "description": "Diurétique naturel et riche en minéraux. Riche en fer et magnésium. IG bas, apporte la juste dose de douceur acidulée. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 grosse poignée d'épinards frais",
            "1 pomme Granny Smith",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Blettes & Kiwi",
        "time": "8 min",
        "description": "Hydratant et très faible en sucre. Riche en fibres douces. Riche en vitamine C et fibres douces. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 feuille de blette",
            "1 kiwi",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Blettes & Fraises",
        "time": "7 min",
        "description": "Hydratant et très faible en sucre. Riche en fibres douces. Riches en antioxydants, IG très bas. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 feuille de blette",
            "Une poignée de fraises",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Blettes & Pamplemousse",
        "time": "5 min",
        "description": "Hydratant et très faible en sucre. Riche en fibres douces. Baisse le taux d'insuline et de sucre dans le sang. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 feuille de blette",
            "1/2 pamplemousse",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Cresson & Fraises",
        "time": "5 min",
        "description": "Base très douce et riche en eau. Saveur poivrée et détoxifiant puissant. Riches en antioxydants, IG très bas. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 poignée de cresson",
            "Une poignée de fraises",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Blettes & Kiwi",
        "time": "6 min",
        "description": "Diurétique naturel et riche en minéraux. Riche en fibres douces. Riche en vitamine C et fibres douces. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 feuille de blette",
            "1 kiwi",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Cresson & Pomme Verte",
        "time": "7 min",
        "description": "Diurétique naturel et riche en minéraux. Saveur poivrée et détoxifiant puissant. IG bas, apporte la juste dose de douceur acidulée. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 poignée de cresson",
            "1 pomme Granny Smith",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Chou Kale & Pomme Verte",
        "time": "5 min",
        "description": "Naturellement isotonique. Super-aliment bourré d'antioxydants. IG bas, apporte la juste dose de douceur acidulée. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "2 belles feuilles de chou Kale",
            "1 pomme Granny Smith",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Chou Kale & Pamplemousse",
        "time": "8 min",
        "description": "Naturellement isotonique. Super-aliment bourré d'antioxydants. Baisse le taux d'insuline et de sucre dans le sang. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "2 belles feuilles de chou Kale",
            "1/2 pamplemousse",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Blettes & Fraises",
        "time": "6 min",
        "description": "Diurétique naturel et riche en minéraux. Riche en fibres douces. Riches en antioxydants, IG très bas. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 feuille de blette",
            "Une poignée de fraises",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Persil & Citron",
        "time": "5 min",
        "description": "Hydratant et très faible en sucre. Aide à la détoxification des reins. Alcalinisant et antioxydant majeur. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 petit bouquet de persil",
            "Le jus d'un demi-citron",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Blettes & Fraises",
        "time": "8 min",
        "description": "Base très douce et riche en eau. Riche en fibres douces. Riches en antioxydants, IG très bas. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 feuille de blette",
            "Une poignée de fraises",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Épinards & Citron",
        "time": "5 min",
        "description": "Diurétique naturel et riche en minéraux. Riche en fer et magnésium. Alcalinisant et antioxydant majeur. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 grosse poignée d'épinards frais",
            "Le jus d'un demi-citron",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Cresson & Kiwi",
        "time": "8 min",
        "description": "Naturellement isotonique. Saveur poivrée et détoxifiant puissant. Riche en vitamine C et fibres douces. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 poignée de cresson",
            "1 kiwi",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Blettes & Fraises",
        "time": "8 min",
        "description": "Doux, aqueux et IG nul. Riche en fibres douces. Riches en antioxydants, IG très bas. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 feuille de blette",
            "Une poignée de fraises",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Cresson & Fraises",
        "time": "8 min",
        "description": "Diurétique naturel et riche en minéraux. Saveur poivrée et détoxifiant puissant. Riches en antioxydants, IG très bas. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 poignée de cresson",
            "Une poignée de fraises",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Cresson & Pamplemousse",
        "time": "7 min",
        "description": "Diurétique naturel et riche en minéraux. Saveur poivrée et détoxifiant puissant. Baisse le taux d'insuline et de sucre dans le sang. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 poignée de cresson",
            "1/2 pamplemousse",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Persil & Pamplemousse",
        "time": "7 min",
        "description": "Doux, aqueux et IG nul. Aide à la détoxification des reins. Baisse le taux d'insuline et de sucre dans le sang. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 petit bouquet de persil",
            "1/2 pamplemousse",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Persil & Pamplemousse",
        "time": "7 min",
        "description": "Naturellement isotonique. Aide à la détoxification des reins. Baisse le taux d'insuline et de sucre dans le sang. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 petit bouquet de persil",
            "1/2 pamplemousse",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Blettes & Pamplemousse",
        "time": "5 min",
        "description": "Diurétique naturel et riche en minéraux. Riche en fibres douces. Baisse le taux d'insuline et de sucre dans le sang. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 feuille de blette",
            "1/2 pamplemousse",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Chou Kale & Citron",
        "time": "6 min",
        "description": "Base très douce et riche en eau. Super-aliment bourré d'antioxydants. Alcalinisant et antioxydant majeur. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "2 belles feuilles de chou Kale",
            "Le jus d'un demi-citron",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Cresson & Citron",
        "time": "5 min",
        "description": "Naturellement isotonique. Saveur poivrée et détoxifiant puissant. Alcalinisant et antioxydant majeur. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 poignée de cresson",
            "Le jus d'un demi-citron",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Épinards & Pamplemousse",
        "time": "7 min",
        "description": "Base très douce et riche en eau. Riche en fer et magnésium. Baisse le taux d'insuline et de sucre dans le sang. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 grosse poignée d'épinards frais",
            "1/2 pamplemousse",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Cresson & Fraises",
        "time": "5 min",
        "description": "Naturellement isotonique. Saveur poivrée et détoxifiant puissant. Riches en antioxydants, IG très bas. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 poignée de cresson",
            "Une poignée de fraises",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Blettes & Citron",
        "time": "5 min",
        "description": "Base très douce et riche en eau. Riche en fibres douces. Alcalinisant et antioxydant majeur. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 feuille de blette",
            "Le jus d'un demi-citron",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Épinards & Pomme Verte",
        "time": "7 min",
        "description": "Naturellement isotonique. Riche en fer et magnésium. IG bas, apporte la juste dose de douceur acidulée. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 grosse poignée d'épinards frais",
            "1 pomme Granny Smith",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Cresson & Pamplemousse",
        "time": "7 min",
        "description": "Base très douce et riche en eau. Saveur poivrée et détoxifiant puissant. Baisse le taux d'insuline et de sucre dans le sang. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 poignée de cresson",
            "1/2 pamplemousse",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Chou Kale & Pamplemousse",
        "time": "8 min",
        "description": "Base très douce et riche en eau. Super-aliment bourré d'antioxydants. Baisse le taux d'insuline et de sucre dans le sang. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "2 belles feuilles de chou Kale",
            "1/2 pamplemousse",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Cresson & Kiwi",
        "time": "8 min",
        "description": "Doux, aqueux et IG nul. Saveur poivrée et détoxifiant puissant. Riche en vitamine C et fibres douces. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 poignée de cresson",
            "1 kiwi",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Cresson & Pamplemousse",
        "time": "7 min",
        "description": "Naturellement isotonique. Saveur poivrée et détoxifiant puissant. Baisse le taux d'insuline et de sucre dans le sang. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 poignée de cresson",
            "1/2 pamplemousse",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Blettes & Pomme Verte",
        "time": "6 min",
        "description": "Base très douce et riche en eau. Riche en fibres douces. IG bas, apporte la juste dose de douceur acidulée. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 feuille de blette",
            "1 pomme Granny Smith",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Épinards & Citron",
        "time": "7 min",
        "description": "Naturellement isotonique. Riche en fer et magnésium. Alcalinisant et antioxydant majeur. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 grosse poignée d'épinards frais",
            "Le jus d'un demi-citron",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Persil & Citron",
        "time": "8 min",
        "description": "Diurétique naturel et riche en minéraux. Aide à la détoxification des reins. Alcalinisant et antioxydant majeur. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 petit bouquet de persil",
            "Le jus d'un demi-citron",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Épinards & Kiwi",
        "time": "7 min",
        "description": "Hydratant et très faible en sucre. Riche en fer et magnésium. Riche en vitamine C et fibres douces. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 grosse poignée d'épinards frais",
            "1 kiwi",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Persil & Kiwi",
        "time": "8 min",
        "description": "Naturellement isotonique. Aide à la détoxification des reins. Riche en vitamine C et fibres douces. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 petit bouquet de persil",
            "1 kiwi",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Persil & Citron",
        "time": "7 min",
        "description": "Base très douce et riche en eau. Aide à la détoxification des reins. Alcalinisant et antioxydant majeur. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 petit bouquet de persil",
            "Le jus d'un demi-citron",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Épinards & Fraises",
        "time": "5 min",
        "description": "Doux, aqueux et IG nul. Riche en fer et magnésium. Riches en antioxydants, IG très bas. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 grosse poignée d'épinards frais",
            "Une poignée de fraises",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Chou Kale & Pamplemousse",
        "time": "8 min",
        "description": "Diurétique naturel et riche en minéraux. Super-aliment bourré d'antioxydants. Baisse le taux d'insuline et de sucre dans le sang. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "2 belles feuilles de chou Kale",
            "1/2 pamplemousse",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Épinards & Pamplemousse",
        "time": "6 min",
        "description": "Diurétique naturel et riche en minéraux. Riche en fer et magnésium. Baisse le taux d'insuline et de sucre dans le sang. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 grosse poignée d'épinards frais",
            "1/2 pamplemousse",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Épinards & Pamplemousse",
        "time": "5 min",
        "description": "Hydratant et très faible en sucre. Riche en fer et magnésium. Baisse le taux d'insuline et de sucre dans le sang. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 grosse poignée d'épinards frais",
            "1/2 pamplemousse",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Persil & Pomme Verte",
        "time": "7 min",
        "description": "Diurétique naturel et riche en minéraux. Aide à la détoxification des reins. IG bas, apporte la juste dose de douceur acidulée. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 petit bouquet de persil",
            "1 pomme Granny Smith",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Chou Kale & Citron",
        "time": "8 min",
        "description": "Doux, aqueux et IG nul. Super-aliment bourré d'antioxydants. Alcalinisant et antioxydant majeur. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "2 belles feuilles de chou Kale",
            "Le jus d'un demi-citron",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Persil & Kiwi",
        "time": "5 min",
        "description": "Hydratant et très faible en sucre. Aide à la détoxification des reins. Riche en vitamine C et fibres douces. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 petit bouquet de persil",
            "1 kiwi",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Chou Kale & Kiwi",
        "time": "6 min",
        "description": "Base très douce et riche en eau. Super-aliment bourré d'antioxydants. Riche en vitamine C et fibres douces. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "2 belles feuilles de chou Kale",
            "1 kiwi",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Épinards & Pomme Verte",
        "time": "8 min",
        "description": "Hydratant et très faible en sucre. Riche en fer et magnésium. IG bas, apporte la juste dose de douceur acidulée. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 grosse poignée d'épinards frais",
            "1 pomme Granny Smith",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Chou Kale & Kiwi",
        "time": "6 min",
        "description": "Hydratant et très faible en sucre. Super-aliment bourré d'antioxydants. Riche en vitamine C et fibres douces. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "2 belles feuilles de chou Kale",
            "1 kiwi",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Persil & Pomme Verte",
        "time": "6 min",
        "description": "Naturellement isotonique. Aide à la détoxification des reins. IG bas, apporte la juste dose de douceur acidulée. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 petit bouquet de persil",
            "1 pomme Granny Smith",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Blettes & Pomme Verte",
        "time": "8 min",
        "description": "Hydratant et très faible en sucre. Riche en fibres douces. IG bas, apporte la juste dose de douceur acidulée. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 feuille de blette",
            "1 pomme Granny Smith",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Cresson & Pomme Verte",
        "time": "5 min",
        "description": "Base très douce et riche en eau. Saveur poivrée et détoxifiant puissant. IG bas, apporte la juste dose de douceur acidulée. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 poignée de cresson",
            "1 pomme Granny Smith",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Persil & Fraises",
        "time": "5 min",
        "description": "Diurétique naturel et riche en minéraux. Aide à la détoxification des reins. Riches en antioxydants, IG très bas. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 petit bouquet de persil",
            "Une poignée de fraises",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Blettes & Kiwi",
        "time": "7 min",
        "description": "Naturellement isotonique. Riche en fibres douces. Riche en vitamine C et fibres douces. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 feuille de blette",
            "1 kiwi",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Chou Kale & Citron",
        "time": "5 min",
        "description": "Naturellement isotonique. Super-aliment bourré d'antioxydants. Alcalinisant et antioxydant majeur. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "2 belles feuilles de chou Kale",
            "Le jus d'un demi-citron",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Cresson & Kiwi",
        "time": "6 min",
        "description": "Diurétique naturel et riche en minéraux. Saveur poivrée et détoxifiant puissant. Riche en vitamine C et fibres douces. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 poignée de cresson",
            "1 kiwi",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Persil & Pamplemousse",
        "time": "7 min",
        "description": "Diurétique naturel et riche en minéraux. Aide à la détoxification des reins. Baisse le taux d'insuline et de sucre dans le sang. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 petit bouquet de persil",
            "1/2 pamplemousse",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Épinards & Kiwi",
        "time": "6 min",
        "description": "Base très douce et riche en eau. Riche en fer et magnésium. Riche en vitamine C et fibres douces. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 grosse poignée d'épinards frais",
            "1 kiwi",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Blettes & Citron",
        "time": "6 min",
        "description": "Hydratant et très faible en sucre. Riche en fibres douces. Alcalinisant et antioxydant majeur. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 feuille de blette",
            "Le jus d'un demi-citron",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Persil & Fraises",
        "time": "6 min",
        "description": "Naturellement isotonique. Aide à la détoxification des reins. Riches en antioxydants, IG très bas. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 petit bouquet de persil",
            "Une poignée de fraises",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Chou Kale & Fraises",
        "time": "7 min",
        "description": "Hydratant et très faible en sucre. Super-aliment bourré d'antioxydants. Riches en antioxydants, IG très bas. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "2 belles feuilles de chou Kale",
            "Une poignée de fraises",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Chou Kale & Fraises",
        "time": "5 min",
        "description": "Naturellement isotonique. Super-aliment bourré d'antioxydants. Riches en antioxydants, IG très bas. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "2 belles feuilles de chou Kale",
            "Une poignée de fraises",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Cresson & Citron",
        "time": "7 min",
        "description": "Hydratant et très faible en sucre. Saveur poivrée et détoxifiant puissant. Alcalinisant et antioxydant majeur. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 poignée de cresson",
            "Le jus d'un demi-citron",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Persil & Pomme Verte",
        "time": "5 min",
        "description": "Doux, aqueux et IG nul. Aide à la détoxification des reins. IG bas, apporte la juste dose de douceur acidulée. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 petit bouquet de persil",
            "1 pomme Granny Smith",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Cresson & Fraises",
        "time": "5 min",
        "description": "Doux, aqueux et IG nul. Saveur poivrée et détoxifiant puissant. Riches en antioxydants, IG très bas. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 poignée de cresson",
            "Une poignée de fraises",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Blettes & Citron",
        "time": "7 min",
        "description": "Naturellement isotonique. Riche en fibres douces. Alcalinisant et antioxydant majeur. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 feuille de blette",
            "Le jus d'un demi-citron",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Chou Kale & Fraises",
        "time": "8 min",
        "description": "Diurétique naturel et riche en minéraux. Super-aliment bourré d'antioxydants. Riches en antioxydants, IG très bas. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "2 belles feuilles de chou Kale",
            "Une poignée de fraises",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Persil & Kiwi",
        "time": "6 min",
        "description": "Base très douce et riche en eau. Aide à la détoxification des reins. Riche en vitamine C et fibres douces. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 petit bouquet de persil",
            "1 kiwi",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Chou Kale & Pomme Verte",
        "time": "6 min",
        "description": "Base très douce et riche en eau. Super-aliment bourré d'antioxydants. IG bas, apporte la juste dose de douceur acidulée. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "2 belles feuilles de chou Kale",
            "1 pomme Granny Smith",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Chou Kale & Kiwi",
        "time": "7 min",
        "description": "Naturellement isotonique. Super-aliment bourré d'antioxydants. Riche en vitamine C et fibres douces. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "2 belles feuilles de chou Kale",
            "1 kiwi",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Cresson & Citron",
        "time": "6 min",
        "description": "Diurétique naturel et riche en minéraux. Saveur poivrée et détoxifiant puissant. Alcalinisant et antioxydant majeur. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 poignée de cresson",
            "Le jus d'un demi-citron",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Persil & Fraises",
        "time": "8 min",
        "description": "Base très douce et riche en eau. Aide à la détoxification des reins. Riches en antioxydants, IG très bas. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 petit bouquet de persil",
            "Une poignée de fraises",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Cresson & Pomme Verte",
        "time": "8 min",
        "description": "Doux, aqueux et IG nul. Saveur poivrée et détoxifiant puissant. IG bas, apporte la juste dose de douceur acidulée. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 poignée de cresson",
            "1 pomme Granny Smith",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Épinards & Fraises",
        "time": "5 min",
        "description": "Naturellement isotonique. Riche en fer et magnésium. Riches en antioxydants, IG très bas. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 grosse poignée d'épinards frais",
            "Une poignée de fraises",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Chou Kale & Pamplemousse",
        "time": "8 min",
        "description": "Doux, aqueux et IG nul. Super-aliment bourré d'antioxydants. Baisse le taux d'insuline et de sucre dans le sang. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "2 belles feuilles de chou Kale",
            "1/2 pamplemousse",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Persil & Citron",
        "time": "7 min",
        "description": "Doux, aqueux et IG nul. Aide à la détoxification des reins. Alcalinisant et antioxydant majeur. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 petit bouquet de persil",
            "Le jus d'un demi-citron",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Blettes & Kiwi",
        "time": "5 min",
        "description": "Base très douce et riche en eau. Riche en fibres douces. Riche en vitamine C et fibres douces. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 feuille de blette",
            "1 kiwi",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Blettes & Pomme Verte",
        "time": "7 min",
        "description": "Naturellement isotonique. Riche en fibres douces. IG bas, apporte la juste dose de douceur acidulée. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 feuille de blette",
            "1 pomme Granny Smith",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Chou Kale & Fraises",
        "time": "8 min",
        "description": "Doux, aqueux et IG nul. Super-aliment bourré d'antioxydants. Riches en antioxydants, IG très bas. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "2 belles feuilles de chou Kale",
            "Une poignée de fraises",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Cresson & Kiwi",
        "time": "8 min",
        "description": "Hydratant et très faible en sucre. Saveur poivrée et détoxifiant puissant. Riche en vitamine C et fibres douces. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 poignée de cresson",
            "1 kiwi",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Blettes & Kiwi",
        "time": "8 min",
        "description": "Doux, aqueux et IG nul. Riche en fibres douces. Riche en vitamine C et fibres douces. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 feuille de blette",
            "1 kiwi",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Blettes & Pamplemousse",
        "time": "8 min",
        "description": "Naturellement isotonique. Riche en fibres douces. Baisse le taux d'insuline et de sucre dans le sang. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 feuille de blette",
            "1/2 pamplemousse",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Persil & Pamplemousse",
        "time": "6 min",
        "description": "Hydratant et très faible en sucre. Aide à la détoxification des reins. Baisse le taux d'insuline et de sucre dans le sang. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 petit bouquet de persil",
            "1/2 pamplemousse",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Épinards & Pamplemousse",
        "time": "5 min",
        "description": "Doux, aqueux et IG nul. Riche en fer et magnésium. Baisse le taux d'insuline et de sucre dans le sang. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 grosse poignée d'épinards frais",
            "1/2 pamplemousse",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Persil & Citron",
        "time": "5 min",
        "description": "Naturellement isotonique. Aide à la détoxification des reins. Alcalinisant et antioxydant majeur. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 petit bouquet de persil",
            "Le jus d'un demi-citron",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Cresson & Pamplemousse",
        "time": "5 min",
        "description": "Doux, aqueux et IG nul. Saveur poivrée et détoxifiant puissant. Baisse le taux d'insuline et de sucre dans le sang. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 poignée de cresson",
            "1/2 pamplemousse",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Blettes & Pomme Verte",
        "time": "7 min",
        "description": "Diurétique naturel et riche en minéraux. Riche en fibres douces. IG bas, apporte la juste dose de douceur acidulée. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 feuille de blette",
            "1 pomme Granny Smith",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Blettes & Pamplemousse",
        "time": "6 min",
        "description": "Doux, aqueux et IG nul. Riche en fibres douces. Baisse le taux d'insuline et de sucre dans le sang. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 feuille de blette",
            "1/2 pamplemousse",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Épinards & Pomme Verte",
        "time": "8 min",
        "description": "Base très douce et riche en eau. Riche en fer et magnésium. IG bas, apporte la juste dose de douceur acidulée. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 grosse poignée d'épinards frais",
            "1 pomme Granny Smith",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Chou Kale & Citron",
        "time": "5 min",
        "description": "Hydratant et très faible en sucre. Super-aliment bourré d'antioxydants. Alcalinisant et antioxydant majeur. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "2 belles feuilles de chou Kale",
            "Le jus d'un demi-citron",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Persil & Pomme Verte",
        "time": "6 min",
        "description": "Base très douce et riche en eau. Aide à la détoxification des reins. IG bas, apporte la juste dose de douceur acidulée. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 petit bouquet de persil",
            "1 pomme Granny Smith",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Épinards & Kiwi",
        "time": "5 min",
        "description": "Naturellement isotonique. Riche en fer et magnésium. Riche en vitamine C et fibres douces. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 grosse poignée d'épinards frais",
            "1 kiwi",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Chou Kale & Pomme Verte",
        "time": "6 min",
        "description": "Diurétique naturel et riche en minéraux. Super-aliment bourré d'antioxydants. IG bas, apporte la juste dose de douceur acidulée. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "2 belles feuilles de chou Kale",
            "1 pomme Granny Smith",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Épinards & Kiwi",
        "time": "5 min",
        "description": "Diurétique naturel et riche en minéraux. Riche en fer et magnésium. Riche en vitamine C et fibres douces. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 grosse poignée d'épinards frais",
            "1 kiwi",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Persil & Kiwi",
        "time": "8 min",
        "description": "Diurétique naturel et riche en minéraux. Aide à la détoxification des reins. Riche en vitamine C et fibres douces. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 petit bouquet de persil",
            "1 kiwi",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Chou Kale & Pomme Verte",
        "time": "7 min",
        "description": "Doux, aqueux et IG nul. Super-aliment bourré d'antioxydants. IG bas, apporte la juste dose de douceur acidulée. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "2 belles feuilles de chou Kale",
            "1 pomme Granny Smith",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Épinards & Citron",
        "time": "7 min",
        "description": "Doux, aqueux et IG nul. Riche en fer et magnésium. Alcalinisant et antioxydant majeur. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 grosse poignée d'épinards frais",
            "Le jus d'un demi-citron",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Chou Kale & Kiwi",
        "time": "6 min",
        "description": "Diurétique naturel et riche en minéraux. Super-aliment bourré d'antioxydants. Riche en vitamine C et fibres douces. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "2 belles feuilles de chou Kale",
            "1 kiwi",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Chou Kale & Citron",
        "time": "8 min",
        "description": "Diurétique naturel et riche en minéraux. Super-aliment bourré d'antioxydants. Alcalinisant et antioxydant majeur. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "2 belles feuilles de chou Kale",
            "Le jus d'un demi-citron",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Chou Kale & Fraises (Variante 200)",
        "time": "6 min",
        "description": "Doux, aqueux et IG nul. Super-aliment bourré d'antioxydants. Riches en antioxydants, IG très bas. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "2 belles feuilles de chou Kale",
            "Une poignée de fraises",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Persil & Kiwi (Variante 399)",
        "time": "5 min",
        "description": "Hydratant et très faible en sucre. Aide à la détoxification des reins. Riche en vitamine C et fibres douces. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 petit bouquet de persil",
            "1 kiwi",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Épinards & Pamplemousse (Variante 217)",
        "time": "8 min",
        "description": "Diurétique naturel et riche en minéraux. Riche en fer et magnésium. Baisse le taux d'insuline et de sucre dans le sang. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 grosse poignée d'épinards frais",
            "1/2 pamplemousse",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Blettes & Pomme Verte (Variante 979)",
        "time": "7 min",
        "description": "Hydratant et très faible en sucre. Riche en fibres douces. IG bas, apporte la juste dose de douceur acidulée. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 feuille de blette",
            "1 pomme Granny Smith",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Cresson & Kiwi (Variante 805)",
        "time": "7 min",
        "description": "Diurétique naturel et riche en minéraux. Saveur poivrée et détoxifiant puissant. Riche en vitamine C et fibres douces. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 poignée de cresson",
            "1 kiwi",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Épinards & Pomme Verte (Variante 542)",
        "time": "7 min",
        "description": "Diurétique naturel et riche en minéraux. Riche en fer et magnésium. IG bas, apporte la juste dose de douceur acidulée. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 grosse poignée d'épinards frais",
            "1 pomme Granny Smith",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Épinards & Citron (Variante 683)",
        "time": "8 min",
        "description": "Diurétique naturel et riche en minéraux. Riche en fer et magnésium. Alcalinisant et antioxydant majeur. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 grosse poignée d'épinards frais",
            "Le jus d'un demi-citron",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Épinards & Kiwi (Variante 422)",
        "time": "6 min",
        "description": "Hydratant et très faible en sucre. Riche en fer et magnésium. Riche en vitamine C et fibres douces. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 grosse poignée d'épinards frais",
            "1 kiwi",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Chou Kale & Fraises (Variante 473)",
        "time": "6 min",
        "description": "Base très douce et riche en eau. Super-aliment bourré d'antioxydants. Riches en antioxydants, IG très bas. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "2 belles feuilles de chou Kale",
            "Une poignée de fraises",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Blettes & Kiwi (Variante 683)",
        "time": "6 min",
        "description": "Base très douce et riche en eau. Riche en fibres douces. Riche en vitamine C et fibres douces. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 feuille de blette",
            "1 kiwi",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Épinards & Fraises (Variante 480)",
        "time": "5 min",
        "description": "Base très douce et riche en eau. Riche en fer et magnésium. Riches en antioxydants, IG très bas. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 grosse poignée d'épinards frais",
            "Une poignée de fraises",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Épinards & Pamplemousse (Variante 179)",
        "time": "7 min",
        "description": "Base très douce et riche en eau. Riche en fer et magnésium. Baisse le taux d'insuline et de sucre dans le sang. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 grosse poignée d'épinards frais",
            "1/2 pamplemousse",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pamplemousse) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Épinards & Citron (Variante 287)",
        "time": "5 min",
        "description": "Naturellement isotonique. Riche en fer et magnésium. Alcalinisant et antioxydant majeur. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 grosse poignée d'épinards frais",
            "Le jus d'un demi-citron",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Chou Kale & Citron (Variante 903)",
        "time": "6 min",
        "description": "Base très douce et riche en eau. Super-aliment bourré d'antioxydants. Alcalinisant et antioxydant majeur. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "2 belles feuilles de chou Kale",
            "Le jus d'un demi-citron",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Cresson & Fraises (Variante 795)",
        "time": "5 min",
        "description": "Diurétique naturel et riche en minéraux. Saveur poivrée et détoxifiant puissant. Riches en antioxydants, IG très bas. Anti-inflammatoire naturel extrêmement puissant. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 poignée de cresson",
            "Une poignée de fraises",
            "1 cm de racine de curcuma frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (curcuma). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Concombre, Blettes & Kiwi (Variante 260)",
        "time": "6 min",
        "description": "Hydratant et très faible en sucre. Riche en fibres douces. Riche en vitamine C et fibres douces. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1/2 concombre",
            "1 feuille de blette",
            "1 kiwi",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (concombre) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Laitue Romaine, Persil & Kiwi (Variante 680)",
        "time": "8 min",
        "description": "Base très douce et riche en eau. Aide à la détoxification des reins. Riche en vitamine C et fibres douces. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 cœur de laitue romaine",
            "1 petit bouquet de persil",
            "1 kiwi",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (laitue romaine) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Cresson & Pomme Verte (Variante 347)",
        "time": "5 min",
        "description": "Naturellement isotonique. Saveur poivrée et détoxifiant puissant. IG bas, apporte la juste dose de douceur acidulée. Rafraîchissant et aide à la digestion. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 poignée de cresson",
            "1 pomme Granny Smith",
            "5 feuilles de menthe fraîche"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (menthe). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Cresson & Kiwi (Variante 303)",
        "time": "5 min",
        "description": "Doux, aqueux et IG nul. Saveur poivrée et détoxifiant puissant. Riche en vitamine C et fibres douces. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 poignée de cresson",
            "1 kiwi",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (cresson) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Blettes & Citron (Variante 575)",
        "time": "7 min",
        "description": "Naturellement isotonique. Riche en fibres douces. Alcalinisant et antioxydant majeur. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 feuille de blette",
            "Le jus d'un demi-citron",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (blettes) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (citron) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Chou Kale & Fraises (Variante 455)",
        "time": "6 min",
        "description": "Naturellement isotonique. Super-aliment bourré d'antioxydants. Riches en antioxydants, IG très bas. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "2 belles feuilles de chou Kale",
            "Une poignée de fraises",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (chou kale) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Épinards & Pomme Verte (Variante 214)",
        "time": "6 min",
        "description": "Doux, aqueux et IG nul. Riche en fer et magnésium. IG bas, apporte la juste dose de douceur acidulée. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 grosse poignée d'épinards frais",
            "1 pomme Granny Smith",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Courgette, Épinards & Pomme Verte (Variante 662)",
        "time": "7 min",
        "description": "Doux, aqueux et IG nul. Riche en fer et magnésium. IG bas, apporte la juste dose de douceur acidulée. Adoucit et favorise le confort intestinal. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "1 petite courgette",
            "1 grosse poignée d'épinards frais",
            "1 pomme Granny Smith",
            "1/4 de bulbe de fenouil"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (épinards) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (courgette) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (pomme verte) et terminez par le booster (fenouil). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Céleri, Persil & Kiwi (Variante 481)",
        "time": "6 min",
        "description": "Diurétique naturel et riche en minéraux. Aide à la détoxification des reins. Riche en vitamine C et fibres douces. Apporte des oméga-3 et épaissit le jus. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "2 branches de céleri",
            "1 petit bouquet de persil",
            "1 kiwi",
            "1 c.à.c de graines de chia"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (céleri) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (kiwi) et terminez par le booster (graines de chia). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    },
    {
        "title": "Jus Détox Eau de Coco, Persil & Fraises (Variante 833)",
        "time": "8 min",
        "description": "Naturellement isotonique. Aide à la détoxification des reins. Riches en antioxydants, IG très bas. Stimule la digestion et l'immunité. Idéal pour une extraction lente.",
        "ig": "Très Bas",
        "tags": [
            "Extracteur de Jus",
            "Détox",
            "Kenwood AT641"
        ],
        "ingredients": [
            "150ml d'eau de coco pure",
            "1 petit bouquet de persil",
            "Une poignée de fraises",
            "1 cm de racine de gingembre frais"
        ],
        "instructions": "Lavez soigneusement tous les ingrédients. Passez d'abord le feuillage (persil) dans l'extracteur Kenwood AT641, suivi de la base aqueuse (eau de coco) pour bien extraire le jus des feuilles. Ajoutez ensuite le fruit (fraises) et terminez par le booster (gingembre). Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    }
]
};
