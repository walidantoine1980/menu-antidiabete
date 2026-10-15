// Fichier généré automatiquement par generate_all_data.py — Base vérifiée Menu Antidiabète
export const theoryData = [
  {
    "icon": "📊",
    "title": "Comprendre l'Indice Glycémique (IG)",
    "badge": "Pilier n°1",
    "content": "L'Indice Glycémique mesure la vitesse à laquelle les glucides d'un aliment passent dans le sang sur une échelle de 0 à 100 (référence : glucose pur = 100).\n• **IG Très Bas (≤ 35)** : Légumes verts, baies, légumineuses, oléagineux, avocat, chocolat noir 85%.\n• **IG Bas (36 à 50)** : Quinoa, flocons d'avoine, patate douce, riz basmati complet, pain de seigle au levain.\n• **IG Moyen (51 à 69)** : Banane mûre, raisin, riz blanc standard, couscous.\n• **IG Élevé (≥ 70 — à éviter)** : Pain blanc, pomme de terre au four/purée, galettes de riz soufflé, sodas."
  },
  {
    "icon": "⚖️",
    "title": "La Charge Glycémique (CG) : l'indicateur roi",
    "badge": "Pilier n°2",
    "content": "L'IG indique la vitesse, mais la **Charge Glycémique (CG)** mesure la quantité réelle de sucre qui impacte votre glycémie pour une portion donnée.\n• **Formule officielle** : **CG = (IG × Glucides nets de la portion en g) / 100**.\n• **CG Basse (≤ 10)** : Impact minimal sur l'insuline (idéal à chaque repas).\n• **CG Modérée (11 à 19)** : À accompagner de fibres et de protéines.\n• **CG Élevée (≥ 20)** : Provoque un pic glycémique suivi d'une hypoglycémie réactionnelle.\n• **Objectif journalier** : Viser une CG totale inférieure à **45 par jour**."
  },
  {
    "icon": "🥗",
    "title": "L'Ordre d'Ingestion des Aliments (-40% de pic)",
    "badge": "Astuce Clinique",
    "content": "Les études cliniques montrent que manger les mêmes aliments dans un ordre précis réduit le pic de glucose jusqu'à **-40%** :\n1. **Commencez par les fibres (Crudités / Légumes verts)** : elles tapissent la paroi intestinale d'un maillage visqueux.\n2. **Poursuivez avec les protéines et les bonnes graisses** (poisson, volaille, œufs, tofu, huile d'olive, avocat) : elles ralentissent la vidange gastrique.\n3. **Terminez par les glucides lents et le dessert** : leur passage dans le sang sera freiné et progressif."
  },
  {
    "icon": "🔥",
    "title": "Cuisson, Maturité & Amidon Résistant",
    "badge": "Transformation",
    "content": "La préparation modifie radicalement l'Indice Glycémique d'un même aliment :\n1. **La cuisson Al Dente** : Des pâtes complètes cuites 7 min ont un IG de 45 ; trop cuites, elles montent à 60.\n2. **Le refroidissement (Rétrogradation de l'amidon)** : Faire refroidir le riz basmati, les lentilles ou la patate douce pendant 12h au réfrigérateur transforme une partie de l'amidon en **amidon résistant** prébiotique non assimilable (baisse de l'IG de 25%, même réchauffé doucement).\n3. **La maturité** : Préférez une banane légèrement verte (IG 35) plutôt que tigrée (IG 60)."
  },
  {
    "icon": "🍋",
    "title": "Les Modulateurs Naturels de Glycémie",
    "badge": "Bio-Actifs",
    "content": "Certains ingrédients agissent directement sur les enzymes digestives et la sensibilité à l'insuline :\n• **Vinaigre de cidre non pasteurisé** : 1 c. à soupe dans un grand verre d'eau 15 min avant un repas riche en féculents réduit le pic glycémique de 20 à 30%.\n• **Jus de citron frais** : L'acide citrique abaisse l'IG global du plat.\n• **Cannelle de Ceylan & Gingembre** : Améliorent la captation cellulaire du glucose.\n• **Huile d'olive vierge extra & Oléagineux** : Freinent l'absorption intestinale des sucres."
  },
  {
    "icon": "🚶",
    "title": "La Marche Digestive de 10 Minutes",
    "badge": "Hygiène de vie",
    "content": "Vos muscles sont les plus grands consommateurs de glucose de l'organisme :\n• Une **marche active de 10 à 15 minutes** dans les 30 minutes qui suivent un repas permet aux fibres musculaires de capter directement le glucose sanguin **sans même avoir besoin d'insuline** (voie GLUT-4).\n• Après le dîner, cette habitude simple lisse la courbe nocturne et améliore la qualité du sommeil profond."
  }
];

export const foodDatabase = [
  {
    "id": "v1",
    "name": "Brocoli vapeur",
    "category": "Légumes",
    "ig": 15,
    "cg": 1.0,
    "portion": "150g",
    "kcal": 52,
    "carbs": 6,
    "fiber": 4.5,
    "protein": 4.2,
    "icon": "🥦",
    "brands": [
      "Picard (Surgelé brut)",
      "Biocoop",
      "Maraîcher Local"
    ],
    "tip": "Riche en sulforaphane qui améliore la sensibilité à l'insuline."
  },
  {
    "id": "v2",
    "name": "Épinards frais",
    "category": "Légumes",
    "ig": 15,
    "cg": 0.5,
    "portion": "150g",
    "kcal": 35,
    "carbs": 2,
    "fiber": 3.5,
    "protein": 4.0,
    "icon": "🥬",
    "brands": [
      "Bonduelle (Frais)",
      "Picard (Branches)",
      "Naturalia"
    ],
    "tip": "Contient de l'acide alpha-lipoïque et du magnésium."
  },
  {
    "id": "v3",
    "name": "Courgette",
    "category": "Légumes",
    "ig": 15,
    "cg": 1.0,
    "portion": "150g",
    "kcal": 26,
    "carbs": 4,
    "fiber": 2.0,
    "protein": 1.8,
    "icon": "🥒",
    "brands": [
      "Primeur Bio",
      "Biocoop",
      "Grand Frais"
    ],
    "tip": "Idéale en tagliatelles crues ou juste poêlées al dente."
  },
  {
    "id": "v4",
    "name": "Poivron rouge / vert",
    "category": "Légumes",
    "ig": 15,
    "cg": 1.2,
    "portion": "150g",
    "kcal": 40,
    "carbs": 6,
    "fiber": 3.0,
    "protein": 1.5,
    "icon": "🫑",
    "brands": [
      "Maraîcher Local",
      "Biocoop",
      "Carrefour Bio"
    ],
    "tip": "3 fois plus riche en vitamine C qu'une orange."
  },
  {
    "id": "v5",
    "name": "Aubergine",
    "category": "Légumes",
    "ig": 20,
    "cg": 1.5,
    "portion": "150g",
    "kcal": 38,
    "carbs": 5,
    "fiber": 4.5,
    "protein": 1.5,
    "icon": "🍆",
    "brands": [
      "Biocoop",
      "Grand Frais",
      "Naturalia"
    ],
    "tip": "Ses fibres solubles piègent les sucres et le cholestérol."
  },
  {
    "id": "v6",
    "name": "Tomates fraîches",
    "category": "Légumes",
    "ig": 15,
    "cg": 1.2,
    "portion": "150g",
    "kcal": 30,
    "carbs": 5,
    "fiber": 1.8,
    "protein": 1.3,
    "icon": "🍅",
    "brands": [
      "Prince de Bretagne",
      "Savéol",
      "Bio Village"
    ],
    "tip": "Riche en lycopène antioxydant (encore mieux assimilé avec un filet d'huile d'olive)."
  },
  {
    "id": "v7",
    "name": "Carotte crue râpée",
    "category": "Légumes",
    "ig": 16,
    "cg": 2.0,
    "portion": "120g",
    "kcal": 42,
    "carbs": 9,
    "fiber": 3.4,
    "protein": 1.0,
    "icon": "🥕",
    "brands": [
      "Priméale",
      "Biocoop",
      "Maraîcher Local"
    ],
    "tip": "Crue avec du jus de citron, son IG reste très bas (16)."
  },
  {
    "id": "v8",
    "name": "Carotte cuite",
    "category": "Légumes",
    "ig": 47,
    "cg": 4.5,
    "portion": "120g",
    "kcal": 44,
    "carbs": 9.5,
    "fiber": 3.0,
    "protein": 1.0,
    "icon": "🥕",
    "brands": [
      "Priméale",
      "Biocoop",
      "Picard"
    ],
    "tip": "La cuisson gélatinise l'amidon : consommez-la avec des fibres vertes et des protéines."
  },
  {
    "id": "v9",
    "name": "Chou-fleur",
    "category": "Légumes",
    "ig": 15,
    "cg": 1.0,
    "portion": "150g",
    "kcal": 38,
    "carbs": 5,
    "fiber": 3.5,
    "protein": 3.0,
    "icon": "🥦",
    "brands": [
      "Prince de Bretagne",
      "Picard",
      "Biocoop"
    ],
    "tip": "Remplace merveilleusement le riz blanc une fois râpé en semoule."
  },
  {
    "id": "v10",
    "name": "Asperges vertes",
    "category": "Légumes",
    "ig": 15,
    "cg": 0.5,
    "portion": "150g",
    "kcal": 30,
    "carbs": 3,
    "fiber": 3.2,
    "protein": 3.4,
    "icon": "🥢",
    "brands": [
      "Asperges de France",
      "Picard",
      "Grand Frais"
    ],
    "tip": "Effet drainant rénal et riche en inuline prébiotique."
  },
  {
    "id": "v11",
    "name": "Champignons de Paris",
    "category": "Légumes",
    "ig": 15,
    "cg": 0.5,
    "portion": "150g",
    "kcal": 33,
    "carbs": 3,
    "fiber": 2.5,
    "protein": 4.5,
    "icon": "🍄",
    "brands": [
      "Lou Légumes",
      "Biocoop",
      "Grand Frais"
    ],
    "tip": "Riche en bêta-glucanes qui ralentissent l'absorption des glucides."
  },
  {
    "id": "v12",
    "name": "Blanc de Poireau",
    "category": "Légumes",
    "ig": 15,
    "cg": 1.2,
    "portion": "150g",
    "kcal": 42,
    "carbs": 6,
    "fiber": 3.5,
    "protein": 2.0,
    "icon": "🧅",
    "brands": [
      "Priméale",
      "Biocoop",
      "Maraîcher"
    ],
    "tip": "Très riche en fibres prébiotiques protectrices du microbiote."
  },
  {
    "id": "v13",
    "name": "Oignon & Ail",
    "category": "Légumes",
    "ig": 15,
    "cg": 1.0,
    "portion": "80g",
    "kcal": 32,
    "carbs": 6,
    "fiber": 1.6,
    "protein": 1.0,
    "icon": "🧅",
    "brands": [
      "Oignon de Roscoff",
      "Biocoop",
      "Ferme Locale"
    ],
    "tip": "Riches en quercétine et composés soufrés hypoglycémiants."
  },
  {
    "id": "v14",
    "name": "Haricots verts extra-fins",
    "category": "Légumes",
    "ig": 30,
    "cg": 2.0,
    "portion": "150g",
    "kcal": 46,
    "carbs": 7,
    "fiber": 4.5,
    "protein": 2.8,
    "icon": "🫘",
    "brands": [
      "Cassegrain",
      "Picard",
      "Bonduelle"
    ],
    "tip": "Excellent tapis de fibres à consommer en début de repas."
  },
  {
    "id": "v15",
    "name": "Concombre bio",
    "category": "Légumes",
    "ig": 15,
    "cg": 0.4,
    "portion": "150g",
    "kcal": 20,
    "carbs": 2.5,
    "fiber": 1.2,
    "protein": 0.9,
    "icon": "🥒",
    "brands": [
      "Maraîcher Bio",
      "Biocoop",
      "Grand Frais"
    ],
    "tip": "96% d'eau structurée, charge glycémique quasi nulle."
  },
  {
    "id": "v16",
    "name": "Chou Kale / Chou Rouge",
    "category": "Légumes",
    "ig": 15,
    "cg": 0.8,
    "portion": "120g",
    "kcal": 42,
    "carbs": 5,
    "fiber": 4.2,
    "protein": 3.5,
    "icon": "🥬",
    "brands": [
      "Biocoop",
      "Naturalia",
      "Grand Frais"
    ],
    "tip": "Concentration exceptionnelle en antioxydants et vitamine K."
  },
  {
    "id": "v17",
    "name": "Fenouil bulbe",
    "category": "Légumes",
    "ig": 15,
    "cg": 1.0,
    "portion": "150g",
    "kcal": 36,
    "carbs": 5,
    "fiber": 4.5,
    "protein": 1.8,
    "icon": "🌱",
    "brands": [
      "Biocoop",
      "Grand Frais",
      "Primeur"
    ],
    "tip": "Digestif, anti-ballonnements et très pauvre en glucides."
  },
  {
    "id": "f1",
    "name": "Myrtilles / Framboises",
    "category": "Fruits",
    "ig": 25,
    "cg": 2.5,
    "portion": "100g",
    "kcal": 48,
    "carbs": 8,
    "fiber": 5.5,
    "protein": 1.2,
    "icon": "🫐",
    "brands": [
      "Picard (Surgelées bio)",
      "Biocoop",
      "Maraîcher"
    ],
    "tip": "Les meilleurs fruits antidiabète grâce à leurs anthocyanes."
  },
  {
    "id": "f2",
    "name": "Pomme Granny Smith",
    "category": "Fruits",
    "ig": 35,
    "cg": 4.5,
    "portion": "130g",
    "kcal": 62,
    "carbs": 13,
    "fiber": 3.5,
    "protein": 0.4,
    "icon": "🍏",
    "brands": [
      "Juliet (Bio)",
      "AOP Limousin",
      "Biocoop"
    ],
    "tip": "Conservez la peau bio : elle concentre la pectine et la quercétine."
  },
  {
    "id": "f3",
    "name": "Poire Conférence",
    "category": "Fruits",
    "ig": 38,
    "cg": 5.0,
    "portion": "130g",
    "kcal": 68,
    "carbs": 14,
    "fiber": 4.0,
    "protein": 0.5,
    "icon": "🍐",
    "brands": [
      "Conférence (AOP)",
      "Angélys",
      "Biocoop"
    ],
    "tip": "Dégustez-la avec quelques amandes ou noix pour lisser son absorption."
  },
  {
    "id": "f4",
    "name": "Banane peu mûre (jaune-verte)",
    "category": "Fruits",
    "ig": 35,
    "cg": 8.0,
    "portion": "100g",
    "kcal": 85,
    "carbs": 19,
    "fiber": 3.0,
    "protein": 1.1,
    "icon": "🍌",
    "brands": [
      "Max Havelaar (Équitable)",
      "Bio Village"
    ],
    "tip": "Riche en amidon résistant tant qu'elle n'est pas tigrée."
  },
  {
    "id": "f5",
    "name": "Banane très mûre (tigrée)",
    "category": "Fruits",
    "ig": 60,
    "cg": 14.0,
    "portion": "100g",
    "kcal": 95,
    "carbs": 23,
    "fiber": 2.2,
    "protein": 1.1,
    "icon": "🍌",
    "brands": [
      "Max Havelaar",
      "Bio Village"
    ],
    "tip": "Attention : l'amidon s'est transformé en sucres rapides ! Réservez-la à l'effort sportif."
  },
  {
    "id": "f6",
    "name": "Fraises fraîches",
    "category": "Fruits",
    "ig": 25,
    "cg": 1.8,
    "portion": "120g",
    "kcal": 40,
    "carbs": 7,
    "fiber": 2.6,
    "protein": 0.8,
    "icon": "🍓",
    "brands": [
      "Gariguette France",
      "Biocoop",
      "Grand Frais"
    ],
    "tip": "Très faible en sucre, idéale en fin de repas."
  },
  {
    "id": "f7",
    "name": "Pamplemousse rose",
    "category": "Fruits",
    "ig": 25,
    "cg": 2.2,
    "portion": "120g",
    "kcal": 45,
    "carbs": 9,
    "fiber": 2.0,
    "protein": 0.8,
    "icon": "🍊",
    "brands": [
      "Corsica (IGP)",
      "Biocoop",
      "Grand Frais"
    ],
    "tip": "La naringine du pamplemousse stimule la sensibilité à l'insuline."
  },
  {
    "id": "f8",
    "name": "Raisin frais",
    "category": "Fruits",
    "ig": 53,
    "cg": 9.0,
    "portion": "100g",
    "kcal": 72,
    "carbs": 17,
    "fiber": 1.2,
    "protein": 0.6,
    "icon": "🍇",
    "brands": [
      "Chasselas de Moissac",
      "Biocoop"
    ],
    "tip": "Concentré en glucose : limitez la portion à une petite grappe avec des noix."
  },
  {
    "id": "f9",
    "name": "Kiwi vert",
    "category": "Fruits",
    "ig": 50,
    "cg": 5.5,
    "portion": "100g",
    "kcal": 58,
    "carbs": 11,
    "fiber": 3.0,
    "protein": 1.1,
    "icon": "🥝",
    "brands": [
      "Oscar (Origine France)",
      "Zespri",
      "Biocoop"
    ],
    "tip": "Un seul kiwi couvre 100% des besoins quotidiens en vitamine C."
  },
  {
    "id": "f10",
    "name": "Citron jaune / vert",
    "category": "Fruits",
    "ig": 20,
    "cg": 0.5,
    "portion": "50g",
    "kcal": 14,
    "carbs": 2.5,
    "fiber": 1.4,
    "protein": 0.5,
    "icon": "🍋",
    "brands": [
      "Citron de Menton",
      "Biocoop",
      "Naturalia"
    ],
    "tip": "Son acidité ralentit la digestion de l'amidon des féculents."
  },
  {
    "id": "p1",
    "name": "Blanc de Poulet / Dinde",
    "category": "Protéines",
    "ig": 0,
    "cg": 0.0,
    "portion": "130g",
    "kcal": 145,
    "carbs": 0,
    "fiber": 0.0,
    "protein": 31.0,
    "icon": "🍗",
    "brands": [
      "Loué (Label Rouge)",
      "Maître Coq Bio",
      "Fermier"
    ],
    "tip": "Zéro glucide, haute satiété et maintien de la masse musculaire."
  },
  {
    "id": "p2",
    "name": "Pavé de Saumon",
    "category": "Protéines",
    "ig": 0,
    "cg": 0.0,
    "portion": "130g",
    "kcal": 240,
    "carbs": 0,
    "fiber": 0.0,
    "protein": 26.0,
    "icon": "🐟",
    "brands": [
      "Labeyrie (Sauvage)",
      "Mowi (ASC)",
      "Picard"
    ],
    "tip": "Les oméga-3 EPA/DHA réduisent l'inflammation métabolique."
  },
  {
    "id": "p3",
    "name": "Tofu ferme / fumé bio",
    "category": "Protéines",
    "ig": 15,
    "cg": 0.3,
    "portion": "120g",
    "kcal": 148,
    "carbs": 1.5,
    "fiber": 1.8,
    "protein": 16.5,
    "icon": "🧊",
    "brands": [
      "Taifun",
      "Soy (Bio France)",
      "Bjorg"
    ],
    "tip": "Protéine végétale complète à impact glycémique nul."
  },
  {
    "id": "p4",
    "name": "Œufs bio plein air (x2)",
    "category": "Protéines",
    "ig": 0,
    "cg": 0.0,
    "portion": "120g (2 œufs)",
    "kcal": 155,
    "carbs": 0.6,
    "fiber": 0.0,
    "protein": 13.0,
    "icon": "🥚",
    "brands": [
      "Loué (Plein air)",
      "Cocorette",
      "Matines Bio"
    ],
    "tip": "Le meilleur petit-déjeuner salé pour éviter toute fringale à 11h."
  },
  {
    "id": "p5",
    "name": "Bœuf maigre / Filet",
    "category": "Protéines",
    "ig": 0,
    "cg": 0.0,
    "portion": "130g",
    "kcal": 175,
    "carbs": 0,
    "fiber": 0.0,
    "protein": 28.0,
    "icon": "🥩",
    "brands": [
      "Charal (5% MG)",
      "Boucherie Label Rouge",
      "Vrai Bio"
    ],
    "tip": "Riche en fer héminique et zinc essentiels à l'insuline."
  },
  {
    "id": "p6",
    "name": "Crevettes sauvages",
    "category": "Protéines",
    "ig": 0,
    "cg": 0.0,
    "portion": "140g",
    "kcal": 125,
    "carbs": 0,
    "fiber": 0.0,
    "protein": 27.0,
    "icon": "🍤",
    "brands": [
      "Pescanova",
      "Delpierre",
      "Escal (ASC)"
    ],
    "tip": "Ultra riche en protéines maigres, sélénium et iode."
  },
  {
    "id": "p7",
    "name": "Dos de Cabillaud / Colin",
    "category": "Protéines",
    "ig": 0,
    "cg": 0.0,
    "portion": "140g",
    "kcal": 115,
    "carbs": 0,
    "fiber": 0.0,
    "protein": 25.0,
    "icon": "🐟",
    "brands": [
      "Findus (MSC)",
      "Picard",
      "Poissonnerie"
    ],
    "tip": "Poisson blanc très digeste, parfait pour le dîner."
  },
  {
    "id": "p8",
    "name": "Sardines / Maquereau",
    "category": "Protéines",
    "ig": 0,
    "cg": 0.0,
    "portion": "120g",
    "kcal": 220,
    "carbs": 0,
    "fiber": 0.0,
    "protein": 24.0,
    "icon": "🐟",
    "brands": [
      "Connétable (Huile d'olive vierge)",
      "Phare d'Eckmühl"
    ],
    "tip": "Champion des oméga-3 et de la vitamine D."
  },
  {
    "id": "p9",
    "name": "Tempeh / Seitan bio",
    "category": "Protéines",
    "ig": 15,
    "cg": 0.8,
    "portion": "100g",
    "kcal": 165,
    "carbs": 4,
    "fiber": 4.0,
    "protein": 20.0,
    "icon": "🥖",
    "brands": [
      "Soy",
      "Lima",
      "La Vie"
    ],
    "tip": "Fermenté (tempeh), il nourrit la flore intestinale tout en rassasiant."
  },
  {
    "id": "c1",
    "name": "Quinoa cuit",
    "category": "Glucides lents",
    "ig": 35,
    "cg": 9.5,
    "portion": "150g cuit",
    "kcal": 175,
    "carbs": 27,
    "fiber": 4.2,
    "protein": 6.5,
    "icon": "🌾",
    "brands": [
      "Quinola",
      "Priméal (Anjou)",
      "Tipiak"
    ],
    "tip": "Pseudo-céréale sans gluten riche en acides aminés essentiels."
  },
  {
    "id": "c2",
    "name": "Flocons d'avoine complets",
    "category": "Glucides lents",
    "ig": 40,
    "cg": 9.0,
    "portion": "40g",
    "kcal": 148,
    "carbs": 23,
    "fiber": 4.4,
    "protein": 5.2,
    "icon": "🥣",
    "brands": [
      "Bjorg (Gros flocons)",
      "Celnat",
      "Quaker Oats"
    ],
    "tip": "Riches en bêta-glucanes qui forment un gel ralentissant le glucose."
  },
  {
    "id": "c3",
    "name": "Patate douce vapeur/four",
    "category": "Glucides lents",
    "ig": 46,
    "cg": 10.5,
    "portion": "130g",
    "kcal": 112,
    "carbs": 23,
    "fiber": 3.8,
    "protein": 2.0,
    "icon": "🍠",
    "brands": [
      "Biocoop",
      "Grand Frais",
      "Ferme Locale"
    ],
    "tip": "Préférez la cuisson vapeur douce (IG 46) plutôt que rôtie très longtemps."
  },
  {
    "id": "c4",
    "name": "Pomme de terre au four (À limiter)",
    "category": "Glucides lents",
    "ig": 85,
    "cg": 20.0,
    "portion": "150g",
    "kcal": 140,
    "carbs": 28,
    "fiber": 2.2,
    "protein": 3.0,
    "icon": "🥔",
    "brands": [
      "Parmentine",
      "Princesse Amandine"
    ],
    "tip": "⚠️ IG élevé (85) ! Si vous en mangez, laissez-la refroidir 12h en salade avec vinaigrette."
  },
  {
    "id": "c5",
    "name": "Pain de seigle intégral au levain",
    "category": "Glucides lents",
    "ig": 40,
    "cg": 7.5,
    "portion": "50g (1 belle tranche)",
    "kcal": 115,
    "carbs": 19,
    "fiber": 4.5,
    "protein": 4.0,
    "icon": "🍞",
    "brands": [
      "Bjorg (Pumpernickel)",
      "Poilâne",
      "Artisan Levain"
    ],
    "tip": "La fermentation au levain naturel réduit l'IG du pain de 20 points."
  },
  {
    "id": "c6",
    "name": "Pain blanc de mie (À éviter)",
    "category": "Glucides lents",
    "ig": 75,
    "cg": 18.0,
    "portion": "50g (2 tranches)",
    "kcal": 135,
    "carbs": 24,
    "fiber": 1.2,
    "protein": 4.0,
    "icon": "🍞",
    "brands": [
      "Harrys",
      "Jacquet"
    ],
    "tip": "⚠️ Provoque un pic d'insuline rapide comparable au sucre blanc."
  },
  {
    "id": "c7",
    "name": "Lentilles vertes du Puy",
    "category": "Glucides lents",
    "ig": 25,
    "cg": 5.0,
    "portion": "150g cuites",
    "kcal": 165,
    "carbs": 20,
    "fiber": 8.5,
    "protein": 12.5,
    "icon": "🧆",
    "brands": [
      "Lentilles du Puy (AOP)",
      "Sabarot",
      "Vivien Paille"
    ],
    "tip": "Effet 'second repas' : stabilise la glycémie même au repas suivant !"
  },
  {
    "id": "c8",
    "name": "Riz Basmati complet",
    "category": "Glucides lents",
    "ig": 45,
    "cg": 12.0,
    "portion": "130g cuit",
    "kcal": 155,
    "carbs": 27,
    "fiber": 2.8,
    "protein": 3.8,
    "icon": "🍚",
    "brands": [
      "Taureau Ailé",
      "Priméal",
      "Autour du Riz"
    ],
    "tip": "Riche en amylose qui résiste à la gélatinisation rapide."
  },
  {
    "id": "c9",
    "name": "Riz blanc gluant / standard (À éviter)",
    "category": "Glucides lents",
    "ig": 70,
    "cg": 22.0,
    "portion": "150g cuit",
    "kcal": 190,
    "carbs": 38,
    "fiber": 0.6,
    "protein": 3.5,
    "icon": "🍚",
    "brands": [
      "Lustucru",
      "Uncle Ben's"
    ],
    "tip": "⚠️ Remplacez toujours le riz blanc standard par du Basmati complet ou du quinoa."
  },
  {
    "id": "c10",
    "name": "Pois chiches / Houmous",
    "category": "Glucides lents",
    "ig": 28,
    "cg": 6.5,
    "portion": "130g cuits",
    "kcal": 180,
    "carbs": 23,
    "fiber": 7.5,
    "protein": 10.0,
    "icon": "🥙",
    "brands": [
      "Cassegrain",
      "Bonduelle",
      "Biocoop"
    ],
    "tip": "Excellente source de fibres solubles et protéines végétales."
  },
  {
    "id": "c11",
    "name": "Pâtes intégrales / Légumineuses (Al dente)",
    "category": "Glucides lents",
    "ig": 42,
    "cg": 11.5,
    "portion": "130g cuites",
    "kcal": 165,
    "carbs": 27,
    "fiber": 5.5,
    "protein": 7.5,
    "icon": "🍝",
    "brands": [
      "Barilla (Integrale / Lentilles corail)",
      "Rummo",
      "Lazzaretti"
    ],
    "tip": "Cuisez-les al dente et accompagnez-les de légumes et d'huile d'olive."
  },
  {
    "id": "c12",
    "name": "Haricots rouges / Blancs",
    "category": "Glucides lents",
    "ig": 25,
    "cg": 5.5,
    "portion": "140g cuits",
    "kcal": 155,
    "carbs": 22,
    "fiber": 8.0,
    "protein": 11.0,
    "icon": "🫘",
    "brands": [
      "Bonduelle",
      "Cassegrain",
      "Biocoop"
    ],
    "tip": "Contiennent des inhibiteurs naturels de l'alpha-amylase."
  },
  {
    "id": "c13",
    "name": "Sarrasin (Kasha) / Sobas 100%",
    "category": "Glucides lents",
    "ig": 35,
    "cg": 8.5,
    "portion": "130g cuit",
    "kcal": 150,
    "carbs": 24,
    "fiber": 4.0,
    "protein": 5.8,
    "icon": "🌾",
    "brands": [
      "Celnat",
      "Priméal",
      "Markal"
    ],
    "tip": "Riche en D-chiro-inositol qui mime et soutient l'action de l'insuline."
  },
  {
    "id": "g1",
    "name": "Amandes entières",
    "category": "Graisses Saines",
    "ig": 15,
    "cg": 0.5,
    "portion": "30g (1 poignée)",
    "kcal": 175,
    "carbs": 3,
    "fiber": 3.8,
    "protein": 6.5,
    "icon": "🥜",
    "brands": [
      "Juste Bio",
      "Daco Bello",
      "Biocoop"
    ],
    "tip": "Croquer 10 amandes avant un repas réduit la réponse glycémique de 30%."
  },
  {
    "id": "g2",
    "name": "Noix de Grenoble",
    "category": "Graisses Saines",
    "ig": 15,
    "cg": 0.5,
    "portion": "30g",
    "kcal": 195,
    "carbs": 2,
    "fiber": 2.2,
    "protein": 4.5,
    "icon": "🌰",
    "brands": [
      "Noix de Grenoble (AOP)",
      "Juste Bio"
    ],
    "tip": "Riche en acide alpha-linolénique (Oméga-3 végétal)."
  },
  {
    "id": "g3",
    "name": "Avocat Hass (1/2)",
    "category": "Graisses Saines",
    "ig": 10,
    "cg": 0.5,
    "portion": "100g",
    "kcal": 160,
    "carbs": 2,
    "fiber": 6.7,
    "protein": 2.0,
    "icon": "🥑",
    "brands": [
      "Biocoop",
      "Grand Frais"
    ],
    "tip": "6,7g de fibres et acides gras mono-insaturés : le bouclier anti-pic par excellence."
  },
  {
    "id": "g4",
    "name": "Huile d'Olive Vierge Extra / Colza",
    "category": "Graisses Saines",
    "ig": 0,
    "cg": 0.0,
    "portion": "15ml (1 c.à.s)",
    "kcal": 120,
    "carbs": 0,
    "fiber": 0.0,
    "protein": 0.0,
    "icon": "🫒",
    "brands": [
      "Puget Bio",
      "Émile Noël",
      "Cauvin"
    ],
    "tip": "Ralentit la vidange de l'estomac et apporte des polyphénols protecteurs."
  },
  {
    "id": "g5",
    "name": "Graines de Chia / Lin moulu",
    "category": "Graisses Saines",
    "ig": 15,
    "cg": 0.3,
    "portion": "20g (2 c.à.s)",
    "kcal": 96,
    "carbs": 1.5,
    "fiber": 7.0,
    "protein": 3.5,
    "icon": "⚫",
    "brands": [
      "Linwoods",
      "Celnat",
      "Markal"
    ],
    "tip": "Absorbent 10x leur poids en eau et forment un gel mucilagineux coupe-faim."
  },
  {
    "id": "g6",
    "name": "Chocolat Noir 85% minimum",
    "category": "Graisses Saines",
    "ig": 20,
    "cg": 1.2,
    "portion": "20g (2 carrés)",
    "kcal": 118,
    "carbs": 4,
    "fiber": 3.0,
    "protein": 2.5,
    "icon": "🍫",
    "brands": [
      "Lindt 85%/90%",
      "Alter Eco Bio",
      "Kaoka"
    ],
    "tip": "Riche en flavanols de cacao et magnésium sans excès de sucre."
  },
  {
    "id": "l1",
    "name": "Yaourt Grec / Brebis nature",
    "category": "Laitages",
    "ig": 15,
    "cg": 1.5,
    "portion": "150g",
    "kcal": 145,
    "carbs": 5,
    "fiber": 0.0,
    "protein": 12.0,
    "icon": "🥛",
    "brands": [
      "Mavrommatis",
      "Vrai (Bio)",
      "Soignon"
    ],
    "tip": "Égoutté du lactosérum, il contient 2x plus de protéines et moins de lactose."
  },
  {
    "id": "l2",
    "name": "Skyr / Fromage blanc nature",
    "category": "Laitages",
    "ig": 25,
    "cg": 2.0,
    "portion": "150g",
    "kcal": 90,
    "carbs": 6,
    "fiber": 0.0,
    "protein": 14.0,
    "icon": "🥣",
    "brands": [
      "Siggi's",
      "Yoplait Skyr",
      "Vrai Bio"
    ],
    "tip": "Haute teneur en protéines rassasiantes."
  },
  {
    "id": "l3",
    "name": "Lait d'Amande / Soja (Sans sucres)",
    "category": "Laitages",
    "ig": 20,
    "cg": 0.5,
    "portion": "200ml",
    "kcal": 45,
    "carbs": 1,
    "fiber": 1.0,
    "protein": 4.0,
    "icon": "🥛",
    "brands": [
      "Bjorg (Sans sucres ajoutés)",
      "Alpro",
      "Bonneterre"
    ],
    "tip": "Vérifiez toujours la mention 'Sans sucres ajoutés' (évitez le lait d'avoine ou de riz industriel qui a un IG élevé)."
  },
  {
    "id": "l4",
    "name": "Feta AOP / Chèvre frais",
    "category": "Laitages",
    "ig": 0,
    "cg": 0.2,
    "portion": "40g",
    "kcal": 105,
    "carbs": 0.5,
    "fiber": 0.0,
    "protein": 6.5,
    "icon": "🧀",
    "brands": [
      "Dodoni (AOP)",
      "Salakis",
      "Soignon"
    ],
    "tip": "Pauvre en lactose, parfait pour enrichir une salade en protéines et lipides."
  }
];

export const mealExamples = {
  "breakfast": [
    {
      "title": "Toast de Seigle au Levain, Avocat & Saumon Fumé",
      "time": "8 min",
      "description": "Le grand classique salé riche en oméga-3 et fibres de seigle : zéro pic d'insuline garanti jusqu'au déjeuner.",
      "ig": "Très Bas",
      "cg": 6,
      "kcal": 340,
      "tags": [
        "Petit-déjeuner Salé",
        "Oméga-3",
        "IG Très Bas"
      ],
      "ingredients": [
        "1 belle tranche de pain de seigle intégral au levain (50g)",
        "1/2 avocat mûr écrasé",
        "1 tranche de saumon fumé sauvage",
        "Filet de jus de citron & aneth frais"
      ],
      "instructions": "Faites griller légèrement le pain de seigle. Tartinez l'avocat écrasé avec le jus de citron, déposez le saumon fumé et parsemez d'aneth."
    },
    {
      "title": "Omelette Forestière Épinards, Champignons & Feta",
      "time": "10 min",
      "description": "Petit-déjeuner 100% protéiné et riche en fibres vertes, avec une charge glycémique quasi nulle (CG 1).",
      "ig": "Très Bas",
      "cg": 1,
      "kcal": 295,
      "tags": [
        "Petit-déjeuner Salé",
        "Protéiné",
        "Sans Glucides"
      ],
      "ingredients": [
        "2 œufs bio plein air",
        "1 grosse poignée d'épinards frais",
        "4 champignons de Paris émincés",
        "25g de feta émiettée",
        "1 c.à.c d'huile d'olive"
      ],
      "instructions": "Faites poêler les champignons et les épinards 3 min dans l'huile d'olive. Versez les œufs battus, parsemez de feta et repliez l'omelette baveuse."
    },
    {
      "title": "Œufs au Plat sur Lit d'Avocat, Tomates Cerises & Pain Intégral",
      "time": "9 min",
      "description": "Assiette salée complète apportant choline, lutéine et acides gras mono-insaturés.",
      "ig": "Très Bas",
      "cg": 6,
      "kcal": 350,
      "tags": [
        "Petit-déjeuner Salé",
        "Satiété",
        "IG Bas"
      ],
      "ingredients": [
        "2 œufs bio",
        "1/2 avocat en lamelles",
        "6 tomates cerises coupées en deux",
        "1 tranche de pain intégral au levain",
        "Piment d'Espelette & origan"
      ],
      "instructions": "Faites cuire les œufs au plat à feu doux (le jaune coulant est plus digeste). Servez avec l'avocat, les tomates cerises et le pain grillé."
    },
    {
      "title": "Tartine Pumpernickel au Chèvre Frais, Noix & Radis Croquants",
      "time": "6 min",
      "description": "Croquant, frais et alcalinisant grâce au pain noir allemand Pumpernickel (IG 40).",
      "ig": "Très Bas",
      "cg": 5,
      "kcal": 280,
      "tags": [
        "Petit-déjeuner Salé",
        "Express",
        "Végétarien"
      ],
      "ingredients": [
        "2 fines tranches de pain de seigle Pumpernickel",
        "40g de fromage de chèvre frais",
        "5 radis roses en fines rondelles",
        "4 cerneaux de noix concassés",
        "Ciboulette fraîche"
      ],
      "instructions": "Tartinez le pain de seigle de chèvre frais, disposez les rondelles de radis, les éclats de noix et la ciboulette ciselée."
    },
    {
      "title": "Brouillade d'Œufs au Saumon Fumé & Ciboulette",
      "time": "8 min",
      "description": "Texture crémeuse obtenue à feu doux, riche en protéines nobles et vitamine D.",
      "ig": "Très Bas",
      "cg": 1,
      "kcal": 310,
      "tags": [
        "Petit-déjeuner Salé",
        "Protéiné",
        "Keto / IG Nul"
      ],
      "ingredients": [
        "2 œufs bio",
        "1 tranche de saumon ou truite fumée en lanières",
        "1 c.à.s de yaourt grec ou crème d'amande",
        "Ciboulette fraîche & poivre du moulin"
      ],
      "instructions": "Battez les œufs et faites-les cuire à feu très doux en remuant sans cesse. Hors du feu, ajoutez la cuillère de yaourt grec, le saumon fumé et la ciboulette."
    },
    {
      "title": "Porridge Flocons d'Avoine & Graines de Chia — Myrtilles Sauvages & Amandes Effilées",
      "time": "8 min",
      "description": "Riches en anthocyanes antioxydants avec une charge glycémique très basse. Base rassasiante riche en fibres solubles.",
      "ig": "Très Bas",
      "cg": 5,
      "kcal": 330,
      "tags": [
        "Petit-déjeuner",
        "IG Très Bas",
        "Fibres"
      ],
      "ingredients": [
        "40g de flocons d'avoine complets",
        "1 c.à.s de graines de chia",
        "180ml de lait d'amande sans sucre",
        "80g de myrtilles fraîches ou surgelées",
        "15g d'amandes effilées grillées"
      ],
      "instructions": "Faites tiédir ou gonfler à froid les flocons d'avoine et le chia dans le lait d'amande pendant 5 min. Garnissez ensuite avec : 80g de myrtilles fraîches ou surgelées, 15g d'amandes effilées grillées."
    },
    {
      "title": "Porridge Flocons d'Avoine & Graines de Chia — Framboises Fraîches & Éclats de Noix",
      "time": "8 min",
      "description": "Alliance de fibres solubles et d'oméga-3 pour une matinée sans fringale. Base rassasiante riche en fibres solubles.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 322,
      "tags": [
        "Petit-déjeuner",
        "IG Très Bas",
        "Fibres"
      ],
      "ingredients": [
        "40g de flocons d'avoine complets",
        "1 c.à.s de graines de chia",
        "180ml de lait d'amande sans sucre",
        "80g de framboises",
        "4 cerneaux de noix de Grenoble concassés"
      ],
      "instructions": "Faites tiédir ou gonfler à froid les flocons d'avoine et le chia dans le lait d'amande pendant 5 min. Garnissez ensuite avec : 80g de framboises, 4 cerneaux de noix de Grenoble concassés."
    },
    {
      "title": "Porridge Flocons d'Avoine & Graines de Chia — Pomme Granny Smith & Cannelle de Ceylan",
      "time": "8 min",
      "description": "La cannelle de Ceylan et la pectine de pomme verte régulent la glycémie matinale. Base rassasiante riche en fibres solubles.",
      "ig": "Bas",
      "cg": 6,
      "kcal": 338,
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Fibres"
      ],
      "ingredients": [
        "40g de flocons d'avoine complets",
        "1 c.à.s de graines de chia",
        "180ml de lait d'amande sans sucre",
        "1/2 pomme Granny Smith coupée en petits dés",
        "1/2 c.à.c de cannelle de Ceylan"
      ],
      "instructions": "Faites tiédir ou gonfler à froid les flocons d'avoine et le chia dans le lait d'amande pendant 5 min. Garnissez ensuite avec : 1/2 pomme Granny Smith coupée en petits dés, 1/2 c.à.c de cannelle de Ceylan."
    },
    {
      "title": "Porridge Flocons d'Avoine & Graines de Chia — Poire Conférence, Cacao Cru & Noisettes",
      "time": "8 min",
      "description": "Gourmand, riche en magnésium et polyphénols de cacao. Base rassasiante riche en fibres solubles.",
      "ig": "Bas",
      "cg": 7,
      "kcal": 346,
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Fibres"
      ],
      "ingredients": [
        "40g de flocons d'avoine complets",
        "1 c.à.s de graines de chia",
        "180ml de lait d'amande sans sucre",
        "1/2 poire en lamelles",
        "1 carré de chocolat noir 85% râpé",
        "10 noisettes torréfiées"
      ],
      "instructions": "Faites tiédir ou gonfler à froid les flocons d'avoine et le chia dans le lait d'amande pendant 5 min. Garnissez ensuite avec : 1/2 poire en lamelles, 1 carré de chocolat noir 85% râpé, 10 noisettes torréfiées."
    },
    {
      "title": "Porridge Flocons d'Avoine & Graines de Chia — Fraises Fraîches, Pistaches & Menthe",
      "time": "8 min",
      "description": "Frais, vitaminé et ultra léger pour la glycémie. Base rassasiante riche en fibres solubles.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 322,
      "tags": [
        "Petit-déjeuner",
        "IG Très Bas",
        "Fibres"
      ],
      "ingredients": [
        "40g de flocons d'avoine complets",
        "1 c.à.s de graines de chia",
        "180ml de lait d'amande sans sucre",
        "100g de fraises en quartiers",
        "1 c.à.s de pistaches non salées",
        "Quelques feuilles de menthe ciselées"
      ],
      "instructions": "Faites tiédir ou gonfler à froid les flocons d'avoine et le chia dans le lait d'amande pendant 5 min. Garnissez ensuite avec : 100g de fraises en quartiers, 1 c.à.s de pistaches non salées, Quelques feuilles de menthe ciselées."
    },
    {
      "title": "Pudding de Chia Velouté Coco-Vanille — Myrtilles Sauvages & Amandes Effilées",
      "time": "5 min",
      "description": "Riches en anthocyanes antioxydants avec une charge glycémique très basse. Base rassasiante riche en fibres solubles.",
      "ig": "Très Bas",
      "cg": 5,
      "kcal": 330,
      "tags": [
        "Petit-déjeuner",
        "IG Très Bas",
        "Fibres"
      ],
      "ingredients": [
        "3 c.à.s de graines de chia",
        "200ml de lait de coco léger sans sucre",
        "1/2 c.à.c d'extrait de vanille naturelle",
        "80g de myrtilles fraîches ou surgelées",
        "15g d'amandes effilées grillées"
      ],
      "instructions": "Mélangez les graines de chia, le lait de coco et la vanille. Laissez prendre au frais 2h (ou la veille au soir). Garnissez ensuite avec : 80g de myrtilles fraîches ou surgelées, 15g d'amandes effilées grillées."
    },
    {
      "title": "Pudding de Chia Velouté Coco-Vanille — Framboises Fraîches & Éclats de Noix",
      "time": "5 min",
      "description": "Alliance de fibres solubles et d'oméga-3 pour une matinée sans fringale. Base rassasiante riche en fibres solubles.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 322,
      "tags": [
        "Petit-déjeuner",
        "IG Très Bas",
        "Fibres"
      ],
      "ingredients": [
        "3 c.à.s de graines de chia",
        "200ml de lait de coco léger sans sucre",
        "1/2 c.à.c d'extrait de vanille naturelle",
        "80g de framboises",
        "4 cerneaux de noix de Grenoble concassés"
      ],
      "instructions": "Mélangez les graines de chia, le lait de coco et la vanille. Laissez prendre au frais 2h (ou la veille au soir). Garnissez ensuite avec : 80g de framboises, 4 cerneaux de noix de Grenoble concassés."
    },
    {
      "title": "Pudding de Chia Velouté Coco-Vanille — Pomme Granny Smith & Cannelle de Ceylan",
      "time": "5 min",
      "description": "La cannelle de Ceylan et la pectine de pomme verte régulent la glycémie matinale. Base rassasiante riche en fibres solubles.",
      "ig": "Bas",
      "cg": 6,
      "kcal": 338,
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Fibres"
      ],
      "ingredients": [
        "3 c.à.s de graines de chia",
        "200ml de lait de coco léger sans sucre",
        "1/2 c.à.c d'extrait de vanille naturelle",
        "1/2 pomme Granny Smith coupée en petits dés",
        "1/2 c.à.c de cannelle de Ceylan"
      ],
      "instructions": "Mélangez les graines de chia, le lait de coco et la vanille. Laissez prendre au frais 2h (ou la veille au soir). Garnissez ensuite avec : 1/2 pomme Granny Smith coupée en petits dés, 1/2 c.à.c de cannelle de Ceylan."
    },
    {
      "title": "Pudding de Chia Velouté Coco-Vanille — Poire Conférence, Cacao Cru & Noisettes",
      "time": "5 min",
      "description": "Gourmand, riche en magnésium et polyphénols de cacao. Base rassasiante riche en fibres solubles.",
      "ig": "Bas",
      "cg": 7,
      "kcal": 346,
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Fibres"
      ],
      "ingredients": [
        "3 c.à.s de graines de chia",
        "200ml de lait de coco léger sans sucre",
        "1/2 c.à.c d'extrait de vanille naturelle",
        "1/2 poire en lamelles",
        "1 carré de chocolat noir 85% râpé",
        "10 noisettes torréfiées"
      ],
      "instructions": "Mélangez les graines de chia, le lait de coco et la vanille. Laissez prendre au frais 2h (ou la veille au soir). Garnissez ensuite avec : 1/2 poire en lamelles, 1 carré de chocolat noir 85% râpé, 10 noisettes torréfiées."
    },
    {
      "title": "Pudding de Chia Velouté Coco-Vanille — Fraises Fraîches, Pistaches & Menthe",
      "time": "5 min",
      "description": "Frais, vitaminé et ultra léger pour la glycémie. Base rassasiante riche en fibres solubles.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 322,
      "tags": [
        "Petit-déjeuner",
        "IG Très Bas",
        "Fibres"
      ],
      "ingredients": [
        "3 c.à.s de graines de chia",
        "200ml de lait de coco léger sans sucre",
        "1/2 c.à.c d'extrait de vanille naturelle",
        "100g de fraises en quartiers",
        "1 c.à.s de pistaches non salées",
        "Quelques feuilles de menthe ciselées"
      ],
      "instructions": "Mélangez les graines de chia, le lait de coco et la vanille. Laissez prendre au frais 2h (ou la veille au soir). Garnissez ensuite avec : 100g de fraises en quartiers, 1 c.à.s de pistaches non salées, Quelques feuilles de menthe ciselées."
    },
    {
      "title": "Bol de Yaourt Grec Protéiné & Lin Moulu — Myrtilles Sauvages & Amandes Effilées",
      "time": "5 min",
      "description": "Riches en anthocyanes antioxydants avec une charge glycémique très basse. Base rassasiante riche en fibres solubles.",
      "ig": "Très Bas",
      "cg": 5,
      "kcal": 330,
      "tags": [
        "Petit-déjeuner",
        "IG Très Bas",
        "Fibres"
      ],
      "ingredients": [
        "150g de yaourt grec nature",
        "1 c.à.s de graines de lin fraîchement moulues",
        "80g de myrtilles fraîches ou surgelées",
        "15g d'amandes effilées grillées"
      ],
      "instructions": "Versez le yaourt grec dans un bol et incorporez les graines de lin moulues riches en oméga-3. Garnissez ensuite avec : 80g de myrtilles fraîches ou surgelées, 15g d'amandes effilées grillées."
    },
    {
      "title": "Bol de Yaourt Grec Protéiné & Lin Moulu — Framboises Fraîches & Éclats de Noix",
      "time": "5 min",
      "description": "Alliance de fibres solubles et d'oméga-3 pour une matinée sans fringale. Base rassasiante riche en fibres solubles.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 322,
      "tags": [
        "Petit-déjeuner",
        "IG Très Bas",
        "Fibres"
      ],
      "ingredients": [
        "150g de yaourt grec nature",
        "1 c.à.s de graines de lin fraîchement moulues",
        "80g de framboises",
        "4 cerneaux de noix de Grenoble concassés"
      ],
      "instructions": "Versez le yaourt grec dans un bol et incorporez les graines de lin moulues riches en oméga-3. Garnissez ensuite avec : 80g de framboises, 4 cerneaux de noix de Grenoble concassés."
    },
    {
      "title": "Bol de Yaourt Grec Protéiné & Lin Moulu — Pomme Granny Smith & Cannelle de Ceylan",
      "time": "5 min",
      "description": "La cannelle de Ceylan et la pectine de pomme verte régulent la glycémie matinale. Base rassasiante riche en fibres solubles.",
      "ig": "Bas",
      "cg": 6,
      "kcal": 338,
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Fibres"
      ],
      "ingredients": [
        "150g de yaourt grec nature",
        "1 c.à.s de graines de lin fraîchement moulues",
        "1/2 pomme Granny Smith coupée en petits dés",
        "1/2 c.à.c de cannelle de Ceylan"
      ],
      "instructions": "Versez le yaourt grec dans un bol et incorporez les graines de lin moulues riches en oméga-3. Garnissez ensuite avec : 1/2 pomme Granny Smith coupée en petits dés, 1/2 c.à.c de cannelle de Ceylan."
    },
    {
      "title": "Bol de Yaourt Grec Protéiné & Lin Moulu — Poire Conférence, Cacao Cru & Noisettes",
      "time": "5 min",
      "description": "Gourmand, riche en magnésium et polyphénols de cacao. Base rassasiante riche en fibres solubles.",
      "ig": "Bas",
      "cg": 7,
      "kcal": 346,
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Fibres"
      ],
      "ingredients": [
        "150g de yaourt grec nature",
        "1 c.à.s de graines de lin fraîchement moulues",
        "1/2 poire en lamelles",
        "1 carré de chocolat noir 85% râpé",
        "10 noisettes torréfiées"
      ],
      "instructions": "Versez le yaourt grec dans un bol et incorporez les graines de lin moulues riches en oméga-3. Garnissez ensuite avec : 1/2 poire en lamelles, 1 carré de chocolat noir 85% râpé, 10 noisettes torréfiées."
    },
    {
      "title": "Bol de Yaourt Grec Protéiné & Lin Moulu — Fraises Fraîches, Pistaches & Menthe",
      "time": "5 min",
      "description": "Frais, vitaminé et ultra léger pour la glycémie. Base rassasiante riche en fibres solubles.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 322,
      "tags": [
        "Petit-déjeuner",
        "IG Très Bas",
        "Fibres"
      ],
      "ingredients": [
        "150g de yaourt grec nature",
        "1 c.à.s de graines de lin fraîchement moulues",
        "100g de fraises en quartiers",
        "1 c.à.s de pistaches non salées",
        "Quelques feuilles de menthe ciselées"
      ],
      "instructions": "Versez le yaourt grec dans un bol et incorporez les graines de lin moulues riches en oméga-3. Garnissez ensuite avec : 100g de fraises en quartiers, 1 c.à.s de pistaches non salées, Quelques feuilles de menthe ciselées."
    },
    {
      "title": "Skyr Nature Fouetté à la Purée d'Amande — Myrtilles Sauvages & Amandes Effilées",
      "time": "5 min",
      "description": "Riches en anthocyanes antioxydants avec une charge glycémique très basse. Base rassasiante riche en fibres solubles.",
      "ig": "Très Bas",
      "cg": 5,
      "kcal": 330,
      "tags": [
        "Petit-déjeuner",
        "IG Très Bas",
        "Fibres"
      ],
      "ingredients": [
        "150g de Skyr ou fromage blanc",
        "1 c.à.s de purée d'amande complète 100%",
        "80g de myrtilles fraîches ou surgelées",
        "15g d'amandes effilées grillées"
      ],
      "instructions": "Fouettez le Skyr avec la purée d'amande pour obtenir une texture onctueuse et très rassasiante. Garnissez ensuite avec : 80g de myrtilles fraîches ou surgelées, 15g d'amandes effilées grillées."
    },
    {
      "title": "Skyr Nature Fouetté à la Purée d'Amande — Framboises Fraîches & Éclats de Noix",
      "time": "5 min",
      "description": "Alliance de fibres solubles et d'oméga-3 pour une matinée sans fringale. Base rassasiante riche en fibres solubles.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 322,
      "tags": [
        "Petit-déjeuner",
        "IG Très Bas",
        "Fibres"
      ],
      "ingredients": [
        "150g de Skyr ou fromage blanc",
        "1 c.à.s de purée d'amande complète 100%",
        "80g de framboises",
        "4 cerneaux de noix de Grenoble concassés"
      ],
      "instructions": "Fouettez le Skyr avec la purée d'amande pour obtenir une texture onctueuse et très rassasiante. Garnissez ensuite avec : 80g de framboises, 4 cerneaux de noix de Grenoble concassés."
    },
    {
      "title": "Skyr Nature Fouetté à la Purée d'Amande — Pomme Granny Smith & Cannelle de Ceylan",
      "time": "5 min",
      "description": "La cannelle de Ceylan et la pectine de pomme verte régulent la glycémie matinale. Base rassasiante riche en fibres solubles.",
      "ig": "Bas",
      "cg": 6,
      "kcal": 338,
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Fibres"
      ],
      "ingredients": [
        "150g de Skyr ou fromage blanc",
        "1 c.à.s de purée d'amande complète 100%",
        "1/2 pomme Granny Smith coupée en petits dés",
        "1/2 c.à.c de cannelle de Ceylan"
      ],
      "instructions": "Fouettez le Skyr avec la purée d'amande pour obtenir une texture onctueuse et très rassasiante. Garnissez ensuite avec : 1/2 pomme Granny Smith coupée en petits dés, 1/2 c.à.c de cannelle de Ceylan."
    },
    {
      "title": "Skyr Nature Fouetté à la Purée d'Amande — Poire Conférence, Cacao Cru & Noisettes",
      "time": "5 min",
      "description": "Gourmand, riche en magnésium et polyphénols de cacao. Base rassasiante riche en fibres solubles.",
      "ig": "Bas",
      "cg": 7,
      "kcal": 346,
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Fibres"
      ],
      "ingredients": [
        "150g de Skyr ou fromage blanc",
        "1 c.à.s de purée d'amande complète 100%",
        "1/2 poire en lamelles",
        "1 carré de chocolat noir 85% râpé",
        "10 noisettes torréfiées"
      ],
      "instructions": "Fouettez le Skyr avec la purée d'amande pour obtenir une texture onctueuse et très rassasiante. Garnissez ensuite avec : 1/2 poire en lamelles, 1 carré de chocolat noir 85% râpé, 10 noisettes torréfiées."
    },
    {
      "title": "Skyr Nature Fouetté à la Purée d'Amande — Fraises Fraîches, Pistaches & Menthe",
      "time": "5 min",
      "description": "Frais, vitaminé et ultra léger pour la glycémie. Base rassasiante riche en fibres solubles.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 322,
      "tags": [
        "Petit-déjeuner",
        "IG Très Bas",
        "Fibres"
      ],
      "ingredients": [
        "150g de Skyr ou fromage blanc",
        "1 c.à.s de purée d'amande complète 100%",
        "100g de fraises en quartiers",
        "1 c.à.s de pistaches non salées",
        "Quelques feuilles de menthe ciselées"
      ],
      "instructions": "Fouettez le Skyr avec la purée d'amande pour obtenir une texture onctueuse et très rassasiante. Garnissez ensuite avec : 100g de fraises en quartiers, 1 c.à.s de pistaches non salées, Quelques feuilles de menthe ciselées."
    },
    {
      "title": "Pancakes Express Farine d'Amande & Sarrasin — Myrtilles Sauvages & Amandes Effilées",
      "time": "10 min",
      "description": "Riches en anthocyanes antioxydants avec une charge glycémique très basse. Base rassasiante riche en fibres solubles.",
      "ig": "Très Bas",
      "cg": 5,
      "kcal": 330,
      "tags": [
        "Petit-déjeuner",
        "IG Très Bas",
        "Fibres"
      ],
      "ingredients": [
        "1 œuf bio",
        "25g de farine de sarrasin",
        "20g de poudre d'amande",
        "50ml de lait végétal",
        "80g de myrtilles fraîches ou surgelées",
        "15g d'amandes effilées grillées"
      ],
      "instructions": "Mélangez les ingrédients en pâte lisse et faites dorer 2 petits pancakes à la poêle antiadhésive 2 min par face. Garnissez ensuite avec : 80g de myrtilles fraîches ou surgelées, 15g d'amandes effilées grillées."
    },
    {
      "title": "Pancakes Express Farine d'Amande & Sarrasin — Framboises Fraîches & Éclats de Noix",
      "time": "10 min",
      "description": "Alliance de fibres solubles et d'oméga-3 pour une matinée sans fringale. Base rassasiante riche en fibres solubles.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 322,
      "tags": [
        "Petit-déjeuner",
        "IG Très Bas",
        "Fibres"
      ],
      "ingredients": [
        "1 œuf bio",
        "25g de farine de sarrasin",
        "20g de poudre d'amande",
        "50ml de lait végétal",
        "80g de framboises",
        "4 cerneaux de noix de Grenoble concassés"
      ],
      "instructions": "Mélangez les ingrédients en pâte lisse et faites dorer 2 petits pancakes à la poêle antiadhésive 2 min par face. Garnissez ensuite avec : 80g de framboises, 4 cerneaux de noix de Grenoble concassés."
    },
    {
      "title": "Pancakes Express Farine d'Amande & Sarrasin — Pomme Granny Smith & Cannelle de Ceylan",
      "time": "10 min",
      "description": "La cannelle de Ceylan et la pectine de pomme verte régulent la glycémie matinale. Base rassasiante riche en fibres solubles.",
      "ig": "Bas",
      "cg": 6,
      "kcal": 338,
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Fibres"
      ],
      "ingredients": [
        "1 œuf bio",
        "25g de farine de sarrasin",
        "20g de poudre d'amande",
        "50ml de lait végétal",
        "1/2 pomme Granny Smith coupée en petits dés",
        "1/2 c.à.c de cannelle de Ceylan"
      ],
      "instructions": "Mélangez les ingrédients en pâte lisse et faites dorer 2 petits pancakes à la poêle antiadhésive 2 min par face. Garnissez ensuite avec : 1/2 pomme Granny Smith coupée en petits dés, 1/2 c.à.c de cannelle de Ceylan."
    },
    {
      "title": "Pancakes Express Farine d'Amande & Sarrasin — Poire Conférence, Cacao Cru & Noisettes",
      "time": "10 min",
      "description": "Gourmand, riche en magnésium et polyphénols de cacao. Base rassasiante riche en fibres solubles.",
      "ig": "Bas",
      "cg": 7,
      "kcal": 346,
      "tags": [
        "Petit-déjeuner",
        "IG Bas",
        "Fibres"
      ],
      "ingredients": [
        "1 œuf bio",
        "25g de farine de sarrasin",
        "20g de poudre d'amande",
        "50ml de lait végétal",
        "1/2 poire en lamelles",
        "1 carré de chocolat noir 85% râpé",
        "10 noisettes torréfiées"
      ],
      "instructions": "Mélangez les ingrédients en pâte lisse et faites dorer 2 petits pancakes à la poêle antiadhésive 2 min par face. Garnissez ensuite avec : 1/2 poire en lamelles, 1 carré de chocolat noir 85% râpé, 10 noisettes torréfiées."
    },
    {
      "title": "Pancakes Express Farine d'Amande & Sarrasin — Fraises Fraîches, Pistaches & Menthe",
      "time": "10 min",
      "description": "Frais, vitaminé et ultra léger pour la glycémie. Base rassasiante riche en fibres solubles.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 322,
      "tags": [
        "Petit-déjeuner",
        "IG Très Bas",
        "Fibres"
      ],
      "ingredients": [
        "1 œuf bio",
        "25g de farine de sarrasin",
        "20g de poudre d'amande",
        "50ml de lait végétal",
        "100g de fraises en quartiers",
        "1 c.à.s de pistaches non salées",
        "Quelques feuilles de menthe ciselées"
      ],
      "instructions": "Mélangez les ingrédients en pâte lisse et faites dorer 2 petits pancakes à la poêle antiadhésive 2 min par face. Garnissez ensuite avec : 100g de fraises en quartiers, 1 c.à.s de pistaches non salées, Quelques feuilles de menthe ciselées."
    }
  ],
  "lunch": [
    {
      "title": "Blanc de Poulet Fermier aux Herbes, Brocolis Croquants au Citron & Quinoa Gourmand",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Volaille maigre haute satiété.",
      "ig": "Bas",
      "cg": 9,
      "kcal": 390,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de fleurettes de brocoli (à consommer en premier)",
        "130g de blanc de poulet fermier",
        "120g de quinoa cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Rincez et cuisez le quinoa 12 min dans 2 volumes d'eau salée. 2. Préparez les légumes riches en fibres : Cuisez les brocolis à la vapeur 6 min pour les garder vert vif et croquants. 3. Cuisez la protéine : Faites dorer le poulet émincé à la poêle dans l'huile d'olive avec du thym et de l'ail. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Blanc de Poulet Fermier aux Herbes, Fondue de Poireaux Douce & Lentilles Vertes du Puy",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Volaille maigre haute satiété.",
      "ig": "Très Bas",
      "cg": 6,
      "kcal": 400,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "2 blancs de poireaux émincés (à consommer en premier)",
        "130g de blanc de poulet fermier",
        "140g de lentilles vertes du Puy cuites",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Cuisez les lentilles 22 min avec laurier et oignon piqué de girofle. 2. Préparez les légumes riches en fibres : Faites fondre les poireaux à couvert 12 min à feu doux avec un filet d'eau et d'huile d'olive. 3. Cuisez la protéine : Faites dorer le poulet émincé à la poêle dans l'huile d'olive avec du thym et de l'ail. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Blanc de Poulet Fermier aux Herbes, Tagliatelles de Courgettes à l'Ail & Patate Douce Vapeur au Paprika",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Volaille maigre haute satiété.",
      "ig": "Bas",
      "cg": 10,
      "kcal": 350,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "200g de courgettes bio (à consommer en premier)",
        "130g de blanc de poulet fermier",
        "120g de patate douce en dés",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Cuisez les dés de patate douce à la vapeur douce 12 min et saupoudrez de paprika fumé. 2. Préparez les légumes riches en fibres : Taillez les courgettes en rubans et poêlez-les 4 min à feu vif pour conserver leur croquant. 3. Cuisez la protéine : Faites dorer le poulet émincé à la poêle dans l'huile d'olive avec du thym et de l'ail. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Blanc de Poulet Fermier aux Herbes, Poêlée Forestière Épinards & Champignons & Riz Basmati Complet",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Volaille maigre haute satiété.",
      "ig": "Bas",
      "cg": 11,
      "kcal": 390,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "150g d'épinards frais et 100g de champignons (à consommer en premier)",
        "130g de blanc de poulet fermier",
        "120g de riz basmati complet cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Faites cuire le riz basmati complet à couvert puis égrainez à la fourchette. 2. Préparez les légumes riches en fibres : Faites sauter les champignons 5 min puis ajoutez les épinards 1 min jusqu'à ce qu'ils tombent. 3. Cuisez la protéine : Faites dorer le poulet émincé à la poêle dans l'huile d'olive avec du thym et de l'ail. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Blanc de Poulet Fermier aux Herbes, Tian de Poivrons & Aubergines Grillées & Sarrasin Torréfié (Kasha)",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Volaille maigre haute satiété.",
      "ig": "Bas",
      "cg": 8,
      "kcal": 380,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "150g d'aubergine et 1 poivron rouge (à consommer en premier)",
        "130g de blanc de poulet fermier",
        "120g de sarrasin cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Hydratez le sarrasin 10 min dans l'eau bouillante salée puis égouttez. 2. Préparez les légumes riches en fibres : Faites griller les légumes en lanières 15 min avec des herbes de Provence. 3. Cuisez la protéine : Faites dorer le poulet émincé à la poêle dans l'huile d'olive avec du thym et de l'ail. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Blanc de Poulet Fermier aux Herbes, Haricots Verts Extra-Fins & Amandes & Pois Chiches Rôtis au Cumin",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Volaille maigre haute satiété.",
      "ig": "Très Bas",
      "cg": 7,
      "kcal": 410,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de haricots verts extra-fins + 10g d'amandes effilées (à consommer en premier)",
        "130g de blanc de poulet fermier",
        "130g de pois chiches cuits",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Faites revenir les pois chiches égouttés 6 min à la poêle avec du cumin et de la coriandre. 2. Préparez les légumes riches en fibres : Cuisez les haricots verts à la vapeur 8 min et parsemez d'amandes effilées grillées. 3. Cuisez la protéine : Faites dorer le poulet émincé à la poêle dans l'huile d'olive avec du thym et de l'ail. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Blanc de Poulet Fermier aux Herbes, Chou-Fleur Rôti au Curcuma & Poivre Noir & Quinoa Gourmand",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Volaille maigre haute satiété.",
      "ig": "Bas",
      "cg": 9,
      "kcal": 390,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de chou-fleur en bouquets (à consommer en premier)",
        "130g de blanc de poulet fermier",
        "120g de quinoa cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Rincez et cuisez le quinoa 12 min dans 2 volumes d'eau salée. 2. Préparez les légumes riches en fibres : Faites dorer les bouquets de chou-fleur 12 min avec 1/2 c.à.c de curcuma et du poivre noir. 3. Cuisez la protéine : Faites dorer le poulet émincé à la poêle dans l'huile d'olive avec du thym et de l'ail. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Pavé de Saumon Sauvage à l'Unilatéral, Brocolis Croquants au Citron & Lentilles Vertes du Puy",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en oméga-3 anti-inflammatoires.",
      "ig": "Très Bas",
      "cg": 6,
      "kcal": 480,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de fleurettes de brocoli (à consommer en premier)",
        "1 pavé de saumon frais (130g)",
        "140g de lentilles vertes du Puy cuites",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Cuisez les lentilles 22 min avec laurier et oignon piqué de girofle. 2. Préparez les légumes riches en fibres : Cuisez les brocolis à la vapeur 6 min pour les garder vert vif et croquants. 3. Cuisez la protéine : Cuisez le saumon côté peau 6 min à feu moyen puis 2 min sur l'autre face. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Pavé de Saumon Sauvage à l'Unilatéral, Fondue de Poireaux Douce & Patate Douce Vapeur au Paprika",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en oméga-3 anti-inflammatoires.",
      "ig": "Bas",
      "cg": 10,
      "kcal": 430,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "2 blancs de poireaux émincés (à consommer en premier)",
        "1 pavé de saumon frais (130g)",
        "120g de patate douce en dés",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Cuisez les dés de patate douce à la vapeur douce 12 min et saupoudrez de paprika fumé. 2. Préparez les légumes riches en fibres : Faites fondre les poireaux à couvert 12 min à feu doux avec un filet d'eau et d'huile d'olive. 3. Cuisez la protéine : Cuisez le saumon côté peau 6 min à feu moyen puis 2 min sur l'autre face. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Pavé de Saumon Sauvage à l'Unilatéral, Tagliatelles de Courgettes à l'Ail & Riz Basmati Complet",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en oméga-3 anti-inflammatoires.",
      "ig": "Bas",
      "cg": 11,
      "kcal": 470,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "200g de courgettes bio (à consommer en premier)",
        "1 pavé de saumon frais (130g)",
        "120g de riz basmati complet cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Faites cuire le riz basmati complet à couvert puis égrainez à la fourchette. 2. Préparez les légumes riches en fibres : Taillez les courgettes en rubans et poêlez-les 4 min à feu vif pour conserver leur croquant. 3. Cuisez la protéine : Cuisez le saumon côté peau 6 min à feu moyen puis 2 min sur l'autre face. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Pavé de Saumon Sauvage à l'Unilatéral, Poêlée Forestière Épinards & Champignons & Sarrasin Torréfié (Kasha)",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en oméga-3 anti-inflammatoires.",
      "ig": "Bas",
      "cg": 8,
      "kcal": 460,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "150g d'épinards frais et 100g de champignons (à consommer en premier)",
        "1 pavé de saumon frais (130g)",
        "120g de sarrasin cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Hydratez le sarrasin 10 min dans l'eau bouillante salée puis égouttez. 2. Préparez les légumes riches en fibres : Faites sauter les champignons 5 min puis ajoutez les épinards 1 min jusqu'à ce qu'ils tombent. 3. Cuisez la protéine : Cuisez le saumon côté peau 6 min à feu moyen puis 2 min sur l'autre face. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Pavé de Saumon Sauvage à l'Unilatéral, Tian de Poivrons & Aubergines Grillées & Pois Chiches Rôtis au Cumin",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en oméga-3 anti-inflammatoires.",
      "ig": "Très Bas",
      "cg": 7,
      "kcal": 490,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "150g d'aubergine et 1 poivron rouge (à consommer en premier)",
        "1 pavé de saumon frais (130g)",
        "130g de pois chiches cuits",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Faites revenir les pois chiches égouttés 6 min à la poêle avec du cumin et de la coriandre. 2. Préparez les légumes riches en fibres : Faites griller les légumes en lanières 15 min avec des herbes de Provence. 3. Cuisez la protéine : Cuisez le saumon côté peau 6 min à feu moyen puis 2 min sur l'autre face. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Pavé de Saumon Sauvage à l'Unilatéral, Haricots Verts Extra-Fins & Amandes & Quinoa Gourmand",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en oméga-3 anti-inflammatoires.",
      "ig": "Bas",
      "cg": 9,
      "kcal": 470,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de haricots verts extra-fins + 10g d'amandes effilées (à consommer en premier)",
        "1 pavé de saumon frais (130g)",
        "120g de quinoa cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Rincez et cuisez le quinoa 12 min dans 2 volumes d'eau salée. 2. Préparez les légumes riches en fibres : Cuisez les haricots verts à la vapeur 8 min et parsemez d'amandes effilées grillées. 3. Cuisez la protéine : Cuisez le saumon côté peau 6 min à feu moyen puis 2 min sur l'autre face. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Pavé de Saumon Sauvage à l'Unilatéral, Chou-Fleur Rôti au Curcuma & Poivre Noir & Lentilles Vertes du Puy",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en oméga-3 anti-inflammatoires.",
      "ig": "Très Bas",
      "cg": 6,
      "kcal": 480,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de chou-fleur en bouquets (à consommer en premier)",
        "1 pavé de saumon frais (130g)",
        "140g de lentilles vertes du Puy cuites",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Cuisez les lentilles 22 min avec laurier et oignon piqué de girofle. 2. Préparez les légumes riches en fibres : Faites dorer les bouquets de chou-fleur 12 min avec 1/2 c.à.c de curcuma et du poivre noir. 3. Cuisez la protéine : Cuisez le saumon côté peau 6 min à feu moyen puis 2 min sur l'autre face. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Tofu Fumé Doré au Sésame & Tamari, Brocolis Croquants au Citron & Patate Douce Vapeur au Paprika",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Protéine végétale complète à IG 15.",
      "ig": "Bas",
      "cg": 10,
      "kcal": 355,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de fleurettes de brocoli (à consommer en premier)",
        "120g de tofu fumé bio en dés",
        "120g de patate douce en dés",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Cuisez les dés de patate douce à la vapeur douce 12 min et saupoudrez de paprika fumé. 2. Préparez les légumes riches en fibres : Cuisez les brocolis à la vapeur 6 min pour les garder vert vif et croquants. 3. Cuisez la protéine : Faites dorer les dés de tofu à la poêle avec 1 c.à.c de sauce soja Tamari réduite en sel et des graines de sésame. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Tofu Fumé Doré au Sésame & Tamari, Fondue de Poireaux Douce & Riz Basmati Complet",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Protéine végétale complète à IG 15.",
      "ig": "Bas",
      "cg": 11,
      "kcal": 395,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "2 blancs de poireaux émincés (à consommer en premier)",
        "120g de tofu fumé bio en dés",
        "120g de riz basmati complet cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Faites cuire le riz basmati complet à couvert puis égrainez à la fourchette. 2. Préparez les légumes riches en fibres : Faites fondre les poireaux à couvert 12 min à feu doux avec un filet d'eau et d'huile d'olive. 3. Cuisez la protéine : Faites dorer les dés de tofu à la poêle avec 1 c.à.c de sauce soja Tamari réduite en sel et des graines de sésame. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Tofu Fumé Doré au Sésame & Tamari, Tagliatelles de Courgettes à l'Ail & Sarrasin Torréfié (Kasha)",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Protéine végétale complète à IG 15.",
      "ig": "Bas",
      "cg": 8,
      "kcal": 385,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "200g de courgettes bio (à consommer en premier)",
        "120g de tofu fumé bio en dés",
        "120g de sarrasin cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Hydratez le sarrasin 10 min dans l'eau bouillante salée puis égouttez. 2. Préparez les légumes riches en fibres : Taillez les courgettes en rubans et poêlez-les 4 min à feu vif pour conserver leur croquant. 3. Cuisez la protéine : Faites dorer les dés de tofu à la poêle avec 1 c.à.c de sauce soja Tamari réduite en sel et des graines de sésame. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Tofu Fumé Doré au Sésame & Tamari, Poêlée Forestière Épinards & Champignons & Pois Chiches Rôtis au Cumin",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Protéine végétale complète à IG 15.",
      "ig": "Très Bas",
      "cg": 7,
      "kcal": 415,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "150g d'épinards frais et 100g de champignons (à consommer en premier)",
        "120g de tofu fumé bio en dés",
        "130g de pois chiches cuits",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Faites revenir les pois chiches égouttés 6 min à la poêle avec du cumin et de la coriandre. 2. Préparez les légumes riches en fibres : Faites sauter les champignons 5 min puis ajoutez les épinards 1 min jusqu'à ce qu'ils tombent. 3. Cuisez la protéine : Faites dorer les dés de tofu à la poêle avec 1 c.à.c de sauce soja Tamari réduite en sel et des graines de sésame. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Tofu Fumé Doré au Sésame & Tamari, Tian de Poivrons & Aubergines Grillées & Quinoa Gourmand",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Protéine végétale complète à IG 15.",
      "ig": "Bas",
      "cg": 9,
      "kcal": 395,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "150g d'aubergine et 1 poivron rouge (à consommer en premier)",
        "120g de tofu fumé bio en dés",
        "120g de quinoa cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Rincez et cuisez le quinoa 12 min dans 2 volumes d'eau salée. 2. Préparez les légumes riches en fibres : Faites griller les légumes en lanières 15 min avec des herbes de Provence. 3. Cuisez la protéine : Faites dorer les dés de tofu à la poêle avec 1 c.à.c de sauce soja Tamari réduite en sel et des graines de sésame. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Tofu Fumé Doré au Sésame & Tamari, Haricots Verts Extra-Fins & Amandes & Lentilles Vertes du Puy",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Protéine végétale complète à IG 15.",
      "ig": "Très Bas",
      "cg": 6,
      "kcal": 405,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de haricots verts extra-fins + 10g d'amandes effilées (à consommer en premier)",
        "120g de tofu fumé bio en dés",
        "140g de lentilles vertes du Puy cuites",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Cuisez les lentilles 22 min avec laurier et oignon piqué de girofle. 2. Préparez les légumes riches en fibres : Cuisez les haricots verts à la vapeur 8 min et parsemez d'amandes effilées grillées. 3. Cuisez la protéine : Faites dorer les dés de tofu à la poêle avec 1 c.à.c de sauce soja Tamari réduite en sel et des graines de sésame. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Tofu Fumé Doré au Sésame & Tamari, Chou-Fleur Rôti au Curcuma & Poivre Noir & Patate Douce Vapeur au Paprika",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Protéine végétale complète à IG 15.",
      "ig": "Bas",
      "cg": 10,
      "kcal": 355,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de chou-fleur en bouquets (à consommer en premier)",
        "120g de tofu fumé bio en dés",
        "120g de patate douce en dés",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Cuisez les dés de patate douce à la vapeur douce 12 min et saupoudrez de paprika fumé. 2. Préparez les légumes riches en fibres : Faites dorer les bouquets de chou-fleur 12 min avec 1/2 c.à.c de curcuma et du poivre noir. 3. Cuisez la protéine : Faites dorer les dés de tofu à la poêle avec 1 c.à.c de sauce soja Tamari réduite en sel et des graines de sésame. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Dos de Cabillaud au Citron & Aneth, Brocolis Croquants au Citron & Riz Basmati Complet",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Poisson blanc ultra-léger et digeste.",
      "ig": "Bas",
      "cg": 11,
      "kcal": 360,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de fleurettes de brocoli (à consommer en premier)",
        "140g de dos de cabillaud",
        "120g de riz basmati complet cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Faites cuire le riz basmati complet à couvert puis égrainez à la fourchette. 2. Préparez les légumes riches en fibres : Cuisez les brocolis à la vapeur 6 min pour les garder vert vif et croquants. 3. Cuisez la protéine : Cuisez le cabillaud au four ou à couvert à la poêle 8 min avec un filet de citron et de l'aneth. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Dos de Cabillaud au Citron & Aneth, Fondue de Poireaux Douce & Sarrasin Torréfié (Kasha)",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Poisson blanc ultra-léger et digeste.",
      "ig": "Bas",
      "cg": 8,
      "kcal": 350,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "2 blancs de poireaux émincés (à consommer en premier)",
        "140g de dos de cabillaud",
        "120g de sarrasin cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Hydratez le sarrasin 10 min dans l'eau bouillante salée puis égouttez. 2. Préparez les légumes riches en fibres : Faites fondre les poireaux à couvert 12 min à feu doux avec un filet d'eau et d'huile d'olive. 3. Cuisez la protéine : Cuisez le cabillaud au four ou à couvert à la poêle 8 min avec un filet de citron et de l'aneth. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Dos de Cabillaud au Citron & Aneth, Tagliatelles de Courgettes à l'Ail & Pois Chiches Rôtis au Cumin",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Poisson blanc ultra-léger et digeste.",
      "ig": "Très Bas",
      "cg": 7,
      "kcal": 380,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "200g de courgettes bio (à consommer en premier)",
        "140g de dos de cabillaud",
        "130g de pois chiches cuits",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Faites revenir les pois chiches égouttés 6 min à la poêle avec du cumin et de la coriandre. 2. Préparez les légumes riches en fibres : Taillez les courgettes en rubans et poêlez-les 4 min à feu vif pour conserver leur croquant. 3. Cuisez la protéine : Cuisez le cabillaud au four ou à couvert à la poêle 8 min avec un filet de citron et de l'aneth. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Dos de Cabillaud au Citron & Aneth, Poêlée Forestière Épinards & Champignons & Quinoa Gourmand",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Poisson blanc ultra-léger et digeste.",
      "ig": "Bas",
      "cg": 9,
      "kcal": 360,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "150g d'épinards frais et 100g de champignons (à consommer en premier)",
        "140g de dos de cabillaud",
        "120g de quinoa cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Rincez et cuisez le quinoa 12 min dans 2 volumes d'eau salée. 2. Préparez les légumes riches en fibres : Faites sauter les champignons 5 min puis ajoutez les épinards 1 min jusqu'à ce qu'ils tombent. 3. Cuisez la protéine : Cuisez le cabillaud au four ou à couvert à la poêle 8 min avec un filet de citron et de l'aneth. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Dos de Cabillaud au Citron & Aneth, Tian de Poivrons & Aubergines Grillées & Lentilles Vertes du Puy",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Poisson blanc ultra-léger et digeste.",
      "ig": "Très Bas",
      "cg": 6,
      "kcal": 370,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "150g d'aubergine et 1 poivron rouge (à consommer en premier)",
        "140g de dos de cabillaud",
        "140g de lentilles vertes du Puy cuites",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Cuisez les lentilles 22 min avec laurier et oignon piqué de girofle. 2. Préparez les légumes riches en fibres : Faites griller les légumes en lanières 15 min avec des herbes de Provence. 3. Cuisez la protéine : Cuisez le cabillaud au four ou à couvert à la poêle 8 min avec un filet de citron et de l'aneth. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Dos de Cabillaud au Citron & Aneth, Haricots Verts Extra-Fins & Amandes & Patate Douce Vapeur au Paprika",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Poisson blanc ultra-léger et digeste.",
      "ig": "Bas",
      "cg": 10,
      "kcal": 320,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de haricots verts extra-fins + 10g d'amandes effilées (à consommer en premier)",
        "140g de dos de cabillaud",
        "120g de patate douce en dés",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Cuisez les dés de patate douce à la vapeur douce 12 min et saupoudrez de paprika fumé. 2. Préparez les légumes riches en fibres : Cuisez les haricots verts à la vapeur 8 min et parsemez d'amandes effilées grillées. 3. Cuisez la protéine : Cuisez le cabillaud au four ou à couvert à la poêle 8 min avec un filet de citron et de l'aneth. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Dos de Cabillaud au Citron & Aneth, Chou-Fleur Rôti au Curcuma & Poivre Noir & Riz Basmati Complet",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Poisson blanc ultra-léger et digeste.",
      "ig": "Bas",
      "cg": 11,
      "kcal": 360,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de chou-fleur en bouquets (à consommer en premier)",
        "140g de dos de cabillaud",
        "120g de riz basmati complet cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Faites cuire le riz basmati complet à couvert puis égrainez à la fourchette. 2. Préparez les légumes riches en fibres : Faites dorer les bouquets de chou-fleur 12 min avec 1/2 c.à.c de curcuma et du poivre noir. 3. Cuisez la protéine : Cuisez le cabillaud au four ou à couvert à la poêle 8 min avec un filet de citron et de l'aneth. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Crevettes Sauvages Sautées à l'Ail & Persil, Brocolis Croquants au Citron & Sarrasin Torréfié (Kasha)",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en protéines et sélénium.",
      "ig": "Bas",
      "cg": 8,
      "kcal": 360,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de fleurettes de brocoli (à consommer en premier)",
        "140g de crevettes décortiquées",
        "120g de sarrasin cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Hydratez le sarrasin 10 min dans l'eau bouillante salée puis égouttez. 2. Préparez les légumes riches en fibres : Cuisez les brocolis à la vapeur 6 min pour les garder vert vif et croquants. 3. Cuisez la protéine : Saisissez les crevettes 4 min à feu vif avec une gousse d'ail hachée et du persil plat. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Crevettes Sauvages Sautées à l'Ail & Persil, Fondue de Poireaux Douce & Pois Chiches Rôtis au Cumin",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en protéines et sélénium.",
      "ig": "Très Bas",
      "cg": 7,
      "kcal": 390,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "2 blancs de poireaux émincés (à consommer en premier)",
        "140g de crevettes décortiquées",
        "130g de pois chiches cuits",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Faites revenir les pois chiches égouttés 6 min à la poêle avec du cumin et de la coriandre. 2. Préparez les légumes riches en fibres : Faites fondre les poireaux à couvert 12 min à feu doux avec un filet d'eau et d'huile d'olive. 3. Cuisez la protéine : Saisissez les crevettes 4 min à feu vif avec une gousse d'ail hachée et du persil plat. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Crevettes Sauvages Sautées à l'Ail & Persil, Tagliatelles de Courgettes à l'Ail & Quinoa Gourmand",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en protéines et sélénium.",
      "ig": "Bas",
      "cg": 9,
      "kcal": 370,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "200g de courgettes bio (à consommer en premier)",
        "140g de crevettes décortiquées",
        "120g de quinoa cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Rincez et cuisez le quinoa 12 min dans 2 volumes d'eau salée. 2. Préparez les légumes riches en fibres : Taillez les courgettes en rubans et poêlez-les 4 min à feu vif pour conserver leur croquant. 3. Cuisez la protéine : Saisissez les crevettes 4 min à feu vif avec une gousse d'ail hachée et du persil plat. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Crevettes Sauvages Sautées à l'Ail & Persil, Poêlée Forestière Épinards & Champignons & Lentilles Vertes du Puy",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en protéines et sélénium.",
      "ig": "Très Bas",
      "cg": 6,
      "kcal": 380,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "150g d'épinards frais et 100g de champignons (à consommer en premier)",
        "140g de crevettes décortiquées",
        "140g de lentilles vertes du Puy cuites",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Cuisez les lentilles 22 min avec laurier et oignon piqué de girofle. 2. Préparez les légumes riches en fibres : Faites sauter les champignons 5 min puis ajoutez les épinards 1 min jusqu'à ce qu'ils tombent. 3. Cuisez la protéine : Saisissez les crevettes 4 min à feu vif avec une gousse d'ail hachée et du persil plat. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Crevettes Sauvages Sautées à l'Ail & Persil, Tian de Poivrons & Aubergines Grillées & Patate Douce Vapeur au Paprika",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en protéines et sélénium.",
      "ig": "Bas",
      "cg": 10,
      "kcal": 330,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "150g d'aubergine et 1 poivron rouge (à consommer en premier)",
        "140g de crevettes décortiquées",
        "120g de patate douce en dés",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Cuisez les dés de patate douce à la vapeur douce 12 min et saupoudrez de paprika fumé. 2. Préparez les légumes riches en fibres : Faites griller les légumes en lanières 15 min avec des herbes de Provence. 3. Cuisez la protéine : Saisissez les crevettes 4 min à feu vif avec une gousse d'ail hachée et du persil plat. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Crevettes Sauvages Sautées à l'Ail & Persil, Haricots Verts Extra-Fins & Amandes & Riz Basmati Complet",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en protéines et sélénium.",
      "ig": "Bas",
      "cg": 11,
      "kcal": 370,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de haricots verts extra-fins + 10g d'amandes effilées (à consommer en premier)",
        "140g de crevettes décortiquées",
        "120g de riz basmati complet cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Faites cuire le riz basmati complet à couvert puis égrainez à la fourchette. 2. Préparez les légumes riches en fibres : Cuisez les haricots verts à la vapeur 8 min et parsemez d'amandes effilées grillées. 3. Cuisez la protéine : Saisissez les crevettes 4 min à feu vif avec une gousse d'ail hachée et du persil plat. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Crevettes Sauvages Sautées à l'Ail & Persil, Chou-Fleur Rôti au Curcuma & Poivre Noir & Sarrasin Torréfié (Kasha)",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en protéines et sélénium.",
      "ig": "Bas",
      "cg": 8,
      "kcal": 360,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de chou-fleur en bouquets (à consommer en premier)",
        "140g de crevettes décortiquées",
        "120g de sarrasin cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Hydratez le sarrasin 10 min dans l'eau bouillante salée puis égouttez. 2. Préparez les légumes riches en fibres : Faites dorer les bouquets de chou-fleur 12 min avec 1/2 c.à.c de curcuma et du poivre noir. 3. Cuisez la protéine : Saisissez les crevettes 4 min à feu vif avec une gousse d'ail hachée et du persil plat. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Émincé de Bœuf Maigre au Romarin, Brocolis Croquants au Citron & Pois Chiches Rôtis au Cumin",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en fer héminique et zinc.",
      "ig": "Très Bas",
      "cg": 7,
      "kcal": 435,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de fleurettes de brocoli (à consommer en premier)",
        "125g de filet ou rumsteck de bœuf maigre",
        "130g de pois chiches cuits",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Faites revenir les pois chiches égouttés 6 min à la poêle avec du cumin et de la coriandre. 2. Préparez les légumes riches en fibres : Cuisez les brocolis à la vapeur 6 min pour les garder vert vif et croquants. 3. Cuisez la protéine : Saisissez l'émincé de bœuf 3 min à feu vif avec une branche de romarin. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Émincé de Bœuf Maigre au Romarin, Fondue de Poireaux Douce & Quinoa Gourmand",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en fer héminique et zinc.",
      "ig": "Bas",
      "cg": 9,
      "kcal": 415,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "2 blancs de poireaux émincés (à consommer en premier)",
        "125g de filet ou rumsteck de bœuf maigre",
        "120g de quinoa cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Rincez et cuisez le quinoa 12 min dans 2 volumes d'eau salée. 2. Préparez les légumes riches en fibres : Faites fondre les poireaux à couvert 12 min à feu doux avec un filet d'eau et d'huile d'olive. 3. Cuisez la protéine : Saisissez l'émincé de bœuf 3 min à feu vif avec une branche de romarin. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Émincé de Bœuf Maigre au Romarin, Tagliatelles de Courgettes à l'Ail & Lentilles Vertes du Puy",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en fer héminique et zinc.",
      "ig": "Très Bas",
      "cg": 6,
      "kcal": 425,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "200g de courgettes bio (à consommer en premier)",
        "125g de filet ou rumsteck de bœuf maigre",
        "140g de lentilles vertes du Puy cuites",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Cuisez les lentilles 22 min avec laurier et oignon piqué de girofle. 2. Préparez les légumes riches en fibres : Taillez les courgettes en rubans et poêlez-les 4 min à feu vif pour conserver leur croquant. 3. Cuisez la protéine : Saisissez l'émincé de bœuf 3 min à feu vif avec une branche de romarin. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Émincé de Bœuf Maigre au Romarin, Poêlée Forestière Épinards & Champignons & Patate Douce Vapeur au Paprika",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en fer héminique et zinc.",
      "ig": "Bas",
      "cg": 10,
      "kcal": 375,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "150g d'épinards frais et 100g de champignons (à consommer en premier)",
        "125g de filet ou rumsteck de bœuf maigre",
        "120g de patate douce en dés",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Cuisez les dés de patate douce à la vapeur douce 12 min et saupoudrez de paprika fumé. 2. Préparez les légumes riches en fibres : Faites sauter les champignons 5 min puis ajoutez les épinards 1 min jusqu'à ce qu'ils tombent. 3. Cuisez la protéine : Saisissez l'émincé de bœuf 3 min à feu vif avec une branche de romarin. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Émincé de Bœuf Maigre au Romarin, Tian de Poivrons & Aubergines Grillées & Riz Basmati Complet",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en fer héminique et zinc.",
      "ig": "Bas",
      "cg": 11,
      "kcal": 415,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "150g d'aubergine et 1 poivron rouge (à consommer en premier)",
        "125g de filet ou rumsteck de bœuf maigre",
        "120g de riz basmati complet cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Faites cuire le riz basmati complet à couvert puis égrainez à la fourchette. 2. Préparez les légumes riches en fibres : Faites griller les légumes en lanières 15 min avec des herbes de Provence. 3. Cuisez la protéine : Saisissez l'émincé de bœuf 3 min à feu vif avec une branche de romarin. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Émincé de Bœuf Maigre au Romarin, Haricots Verts Extra-Fins & Amandes & Sarrasin Torréfié (Kasha)",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en fer héminique et zinc.",
      "ig": "Bas",
      "cg": 8,
      "kcal": 405,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de haricots verts extra-fins + 10g d'amandes effilées (à consommer en premier)",
        "125g de filet ou rumsteck de bœuf maigre",
        "120g de sarrasin cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Hydratez le sarrasin 10 min dans l'eau bouillante salée puis égouttez. 2. Préparez les légumes riches en fibres : Cuisez les haricots verts à la vapeur 8 min et parsemez d'amandes effilées grillées. 3. Cuisez la protéine : Saisissez l'émincé de bœuf 3 min à feu vif avec une branche de romarin. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    },
    {
      "title": "Émincé de Bœuf Maigre au Romarin, Chou-Fleur Rôti au Curcuma & Poivre Noir & Pois Chiches Rôtis au Cumin",
      "time": "20 min",
      "description": "Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). Riche en fer héminique et zinc.",
      "ig": "Très Bas",
      "cg": 7,
      "kcal": 435,
      "tags": [
        "Déjeuner Complet",
        "IG Bas",
        "Assiette Équilibrée"
      ],
      "ingredients": [
        "180g de chou-fleur en bouquets (à consommer en premier)",
        "125g de filet ou rumsteck de bœuf maigre",
        "130g de pois chiches cuits",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Préparez le féculent à IG bas : Faites revenir les pois chiches égouttés 6 min à la poêle avec du cumin et de la coriandre. 2. Préparez les légumes riches en fibres : Faites dorer les bouquets de chou-fleur 12 min avec 1/2 c.à.c de curcuma et du poivre noir. 3. Cuisez la protéine : Saisissez l'émincé de bœuf 3 min à feu vif avec une branche de romarin. 4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
    }
  ],
  "dinner": [
    {
      "title": "Blanc de Poulet Fermier aux Herbes sur Lit de Brocolis Croquants au Citron",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Volaille maigre haute satiété.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 270,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "180g de fleurettes de brocoli",
        "130g de blanc de poulet fermier",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Cuisez les brocolis à la vapeur 6 min pour les garder vert vif et croquants. 2. Faites dorer le poulet émincé à la poêle dans l'huile d'olive avec du thym et de l'ail. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Blanc de Poulet Fermier aux Herbes, Fondue de Poireaux Douce & Touche de Lentilles Vertes du Puy",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 353,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "2 blancs de poireaux émincés",
        "130g de blanc de poulet fermier",
        "Demi-portion : 140g de lentilles vertes du Puy cuites",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Faites fondre les poireaux à couvert 12 min à feu doux avec un filet d'eau et d'huile d'olive. 2. Faites dorer le poulet émincé à la poêle dans l'huile d'olive avec du thym et de l'ail. 3. Ajoutez une demi-portion de lentilles vertes du puy (Cuisez les lentilles 22 min avec laurier et oignon piqué de girofle.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Blanc de Poulet Fermier aux Herbes sur Lit de Tagliatelles de Courgettes à l'Ail",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Volaille maigre haute satiété.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 270,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "200g de courgettes bio",
        "130g de blanc de poulet fermier",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Taillez les courgettes en rubans et poêlez-les 4 min à feu vif pour conserver leur croquant. 2. Faites dorer le poulet émincé à la poêle dans l'huile d'olive avec du thym et de l'ail. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Blanc de Poulet Fermier aux Herbes, Poêlée Forestière Épinards & Champignons & Touche de Riz Basmati Complet",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Bas",
      "cg": 8,
      "kcal": 346,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "150g d'épinards frais et 100g de champignons",
        "130g de blanc de poulet fermier",
        "Demi-portion : 120g de riz basmati complet cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Faites sauter les champignons 5 min puis ajoutez les épinards 1 min jusqu'à ce qu'ils tombent. 2. Faites dorer le poulet émincé à la poêle dans l'huile d'olive avec du thym et de l'ail. 3. Ajoutez une demi-portion de riz basmati complet (Faites cuire le riz basmati complet à couvert puis égrainez à la fourchette.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Blanc de Poulet Fermier aux Herbes sur Lit de Tian de Poivrons & Aubergines Grillées",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Volaille maigre haute satiété.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 270,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "150g d'aubergine et 1 poivron rouge",
        "130g de blanc de poulet fermier",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Faites griller les légumes en lanières 15 min avec des herbes de Provence. 2. Faites dorer le poulet émincé à la poêle dans l'huile d'olive avec du thym et de l'ail. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Blanc de Poulet Fermier aux Herbes, Haricots Verts Extra-Fins & Amandes & Touche de Pois Chiches Rôtis au Cumin",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 360,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "180g de haricots verts extra-fins + 10g d'amandes effilées",
        "130g de blanc de poulet fermier",
        "Demi-portion : 130g de pois chiches cuits",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Cuisez les haricots verts à la vapeur 8 min et parsemez d'amandes effilées grillées. 2. Faites dorer le poulet émincé à la poêle dans l'huile d'olive avec du thym et de l'ail. 3. Ajoutez une demi-portion de pois chiches rôtis au cumin (Faites revenir les pois chiches égouttés 6 min à la poêle avec du cumin et de la coriandre.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Blanc de Poulet Fermier aux Herbes sur Lit de Chou-Fleur Rôti au Curcuma & Poivre Noir",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Volaille maigre haute satiété.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 270,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "180g de chou-fleur en bouquets",
        "130g de blanc de poulet fermier",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Faites dorer les bouquets de chou-fleur 12 min avec 1/2 c.à.c de curcuma et du poivre noir. 2. Faites dorer le poulet émincé à la poêle dans l'huile d'olive avec du thym et de l'ail. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Pavé de Saumon Sauvage à l'Unilatéral, Brocolis Croquants au Citron & Touche de Patate Douce Vapeur au Paprika",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Bas",
      "cg": 7,
      "kcal": 398,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "180g de fleurettes de brocoli",
        "1 pavé de saumon frais (130g)",
        "Demi-portion : 120g de patate douce en dés",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Cuisez les brocolis à la vapeur 6 min pour les garder vert vif et croquants. 2. Cuisez le saumon côté peau 6 min à feu moyen puis 2 min sur l'autre face. 3. Ajoutez une demi-portion de patate douce vapeur au paprika (Cuisez les dés de patate douce à la vapeur douce 12 min et saupoudrez de paprika fumé.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Pavé de Saumon Sauvage à l'Unilatéral sur Lit de Fondue de Poireaux Douce",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Riche en oméga-3 anti-inflammatoires.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 350,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "2 blancs de poireaux émincés",
        "1 pavé de saumon frais (130g)",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Faites fondre les poireaux à couvert 12 min à feu doux avec un filet d'eau et d'huile d'olive. 2. Cuisez le saumon côté peau 6 min à feu moyen puis 2 min sur l'autre face. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Pavé de Saumon Sauvage à l'Unilatéral, Tagliatelles de Courgettes à l'Ail & Touche de Sarrasin Torréfié (Kasha)",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Très Bas",
      "cg": 5,
      "kcal": 419,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "200g de courgettes bio",
        "1 pavé de saumon frais (130g)",
        "Demi-portion : 120g de sarrasin cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Taillez les courgettes en rubans et poêlez-les 4 min à feu vif pour conserver leur croquant. 2. Cuisez le saumon côté peau 6 min à feu moyen puis 2 min sur l'autre face. 3. Ajoutez une demi-portion de sarrasin torréfié (kasha) (Hydratez le sarrasin 10 min dans l'eau bouillante salée puis égouttez.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Pavé de Saumon Sauvage à l'Unilatéral sur Lit de Poêlée Forestière Épinards & Champignons",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Riche en oméga-3 anti-inflammatoires.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 350,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "150g d'épinards frais et 100g de champignons",
        "1 pavé de saumon frais (130g)",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Faites sauter les champignons 5 min puis ajoutez les épinards 1 min jusqu'à ce qu'ils tombent. 2. Cuisez le saumon côté peau 6 min à feu moyen puis 2 min sur l'autre face. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Pavé de Saumon Sauvage à l'Unilatéral, Tian de Poivrons & Aubergines Grillées & Touche de Quinoa Gourmand",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Bas",
      "cg": 6,
      "kcal": 426,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "150g d'aubergine et 1 poivron rouge",
        "1 pavé de saumon frais (130g)",
        "Demi-portion : 120g de quinoa cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Faites griller les légumes en lanières 15 min avec des herbes de Provence. 2. Cuisez le saumon côté peau 6 min à feu moyen puis 2 min sur l'autre face. 3. Ajoutez une demi-portion de quinoa gourmand (Rincez et cuisez le quinoa 12 min dans 2 volumes d'eau salée.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Pavé de Saumon Sauvage à l'Unilatéral sur Lit de Haricots Verts Extra-Fins & Amandes",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Riche en oméga-3 anti-inflammatoires.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 350,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "180g de haricots verts extra-fins + 10g d'amandes effilées",
        "1 pavé de saumon frais (130g)",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Cuisez les haricots verts à la vapeur 8 min et parsemez d'amandes effilées grillées. 2. Cuisez le saumon côté peau 6 min à feu moyen puis 2 min sur l'autre face. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Pavé de Saumon Sauvage à l'Unilatéral, Chou-Fleur Rôti au Curcuma & Poivre Noir & Touche de Patate Douce Vapeur au Paprika",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Bas",
      "cg": 7,
      "kcal": 398,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "180g de chou-fleur en bouquets",
        "1 pavé de saumon frais (130g)",
        "Demi-portion : 120g de patate douce en dés",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Faites dorer les bouquets de chou-fleur 12 min avec 1/2 c.à.c de curcuma et du poivre noir. 2. Cuisez le saumon côté peau 6 min à feu moyen puis 2 min sur l'autre face. 3. Ajoutez une demi-portion de patate douce vapeur au paprika (Cuisez les dés de patate douce à la vapeur douce 12 min et saupoudrez de paprika fumé.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Tofu Fumé Doré au Sésame & Tamari sur Lit de Brocolis Croquants au Citron",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Protéine végétale complète à IG 15.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 275,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "180g de fleurettes de brocoli",
        "120g de tofu fumé bio en dés",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Cuisez les brocolis à la vapeur 6 min pour les garder vert vif et croquants. 2. Faites dorer les dés de tofu à la poêle avec 1 c.à.c de sauce soja Tamari réduite en sel et des graines de sésame. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Tofu Fumé Doré au Sésame & Tamari, Fondue de Poireaux Douce & Touche de Pois Chiches Rôtis au Cumin",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 365,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "2 blancs de poireaux émincés",
        "120g de tofu fumé bio en dés",
        "Demi-portion : 130g de pois chiches cuits",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Faites fondre les poireaux à couvert 12 min à feu doux avec un filet d'eau et d'huile d'olive. 2. Faites dorer les dés de tofu à la poêle avec 1 c.à.c de sauce soja Tamari réduite en sel et des graines de sésame. 3. Ajoutez une demi-portion de pois chiches rôtis au cumin (Faites revenir les pois chiches égouttés 6 min à la poêle avec du cumin et de la coriandre.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Tofu Fumé Doré au Sésame & Tamari sur Lit de Tagliatelles de Courgettes à l'Ail",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Protéine végétale complète à IG 15.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 275,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "200g de courgettes bio",
        "120g de tofu fumé bio en dés",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Taillez les courgettes en rubans et poêlez-les 4 min à feu vif pour conserver leur croquant. 2. Faites dorer les dés de tofu à la poêle avec 1 c.à.c de sauce soja Tamari réduite en sel et des graines de sésame. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Tofu Fumé Doré au Sésame & Tamari, Poêlée Forestière Épinards & Champignons & Touche de Lentilles Vertes du Puy",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 358,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "150g d'épinards frais et 100g de champignons",
        "120g de tofu fumé bio en dés",
        "Demi-portion : 140g de lentilles vertes du Puy cuites",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Faites sauter les champignons 5 min puis ajoutez les épinards 1 min jusqu'à ce qu'ils tombent. 2. Faites dorer les dés de tofu à la poêle avec 1 c.à.c de sauce soja Tamari réduite en sel et des graines de sésame. 3. Ajoutez une demi-portion de lentilles vertes du puy (Cuisez les lentilles 22 min avec laurier et oignon piqué de girofle.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Tofu Fumé Doré au Sésame & Tamari sur Lit de Tian de Poivrons & Aubergines Grillées",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Protéine végétale complète à IG 15.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 275,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "150g d'aubergine et 1 poivron rouge",
        "120g de tofu fumé bio en dés",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Faites griller les légumes en lanières 15 min avec des herbes de Provence. 2. Faites dorer les dés de tofu à la poêle avec 1 c.à.c de sauce soja Tamari réduite en sel et des graines de sésame. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Tofu Fumé Doré au Sésame & Tamari, Haricots Verts Extra-Fins & Amandes & Touche de Riz Basmati Complet",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Bas",
      "cg": 8,
      "kcal": 351,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "180g de haricots verts extra-fins + 10g d'amandes effilées",
        "120g de tofu fumé bio en dés",
        "Demi-portion : 120g de riz basmati complet cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Cuisez les haricots verts à la vapeur 8 min et parsemez d'amandes effilées grillées. 2. Faites dorer les dés de tofu à la poêle avec 1 c.à.c de sauce soja Tamari réduite en sel et des graines de sésame. 3. Ajoutez une demi-portion de riz basmati complet (Faites cuire le riz basmati complet à couvert puis égrainez à la fourchette.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Tofu Fumé Doré au Sésame & Tamari sur Lit de Chou-Fleur Rôti au Curcuma & Poivre Noir",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Protéine végétale complète à IG 15.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 275,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "180g de chou-fleur en bouquets",
        "120g de tofu fumé bio en dés",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Faites dorer les bouquets de chou-fleur 12 min avec 1/2 c.à.c de curcuma et du poivre noir. 2. Faites dorer les dés de tofu à la poêle avec 1 c.à.c de sauce soja Tamari réduite en sel et des graines de sésame. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Dos de Cabillaud au Citron & Aneth, Brocolis Croquants au Citron & Touche de Quinoa Gourmand",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Bas",
      "cg": 6,
      "kcal": 316,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "180g de fleurettes de brocoli",
        "140g de dos de cabillaud",
        "Demi-portion : 120g de quinoa cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Cuisez les brocolis à la vapeur 6 min pour les garder vert vif et croquants. 2. Cuisez le cabillaud au four ou à couvert à la poêle 8 min avec un filet de citron et de l'aneth. 3. Ajoutez une demi-portion de quinoa gourmand (Rincez et cuisez le quinoa 12 min dans 2 volumes d'eau salée.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Dos de Cabillaud au Citron & Aneth sur Lit de Fondue de Poireaux Douce",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Poisson blanc ultra-léger et digeste.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 240,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "2 blancs de poireaux émincés",
        "140g de dos de cabillaud",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Faites fondre les poireaux à couvert 12 min à feu doux avec un filet d'eau et d'huile d'olive. 2. Cuisez le cabillaud au four ou à couvert à la poêle 8 min avec un filet de citron et de l'aneth. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Dos de Cabillaud au Citron & Aneth, Tagliatelles de Courgettes à l'Ail & Touche de Patate Douce Vapeur au Paprika",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Bas",
      "cg": 7,
      "kcal": 288,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "200g de courgettes bio",
        "140g de dos de cabillaud",
        "Demi-portion : 120g de patate douce en dés",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Taillez les courgettes en rubans et poêlez-les 4 min à feu vif pour conserver leur croquant. 2. Cuisez le cabillaud au four ou à couvert à la poêle 8 min avec un filet de citron et de l'aneth. 3. Ajoutez une demi-portion de patate douce vapeur au paprika (Cuisez les dés de patate douce à la vapeur douce 12 min et saupoudrez de paprika fumé.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Dos de Cabillaud au Citron & Aneth sur Lit de Poêlée Forestière Épinards & Champignons",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Poisson blanc ultra-léger et digeste.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 240,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "150g d'épinards frais et 100g de champignons",
        "140g de dos de cabillaud",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Faites sauter les champignons 5 min puis ajoutez les épinards 1 min jusqu'à ce qu'ils tombent. 2. Cuisez le cabillaud au four ou à couvert à la poêle 8 min avec un filet de citron et de l'aneth. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Dos de Cabillaud au Citron & Aneth, Tian de Poivrons & Aubergines Grillées & Touche de Sarrasin Torréfié (Kasha)",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Très Bas",
      "cg": 5,
      "kcal": 309,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "150g d'aubergine et 1 poivron rouge",
        "140g de dos de cabillaud",
        "Demi-portion : 120g de sarrasin cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Faites griller les légumes en lanières 15 min avec des herbes de Provence. 2. Cuisez le cabillaud au four ou à couvert à la poêle 8 min avec un filet de citron et de l'aneth. 3. Ajoutez une demi-portion de sarrasin torréfié (kasha) (Hydratez le sarrasin 10 min dans l'eau bouillante salée puis égouttez.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Dos de Cabillaud au Citron & Aneth sur Lit de Haricots Verts Extra-Fins & Amandes",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Poisson blanc ultra-léger et digeste.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 240,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "180g de haricots verts extra-fins + 10g d'amandes effilées",
        "140g de dos de cabillaud",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Cuisez les haricots verts à la vapeur 8 min et parsemez d'amandes effilées grillées. 2. Cuisez le cabillaud au four ou à couvert à la poêle 8 min avec un filet de citron et de l'aneth. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Dos de Cabillaud au Citron & Aneth, Chou-Fleur Rôti au Curcuma & Poivre Noir & Touche de Quinoa Gourmand",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Bas",
      "cg": 6,
      "kcal": 316,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "180g de chou-fleur en bouquets",
        "140g de dos de cabillaud",
        "Demi-portion : 120g de quinoa cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Faites dorer les bouquets de chou-fleur 12 min avec 1/2 c.à.c de curcuma et du poivre noir. 2. Cuisez le cabillaud au four ou à couvert à la poêle 8 min avec un filet de citron et de l'aneth. 3. Ajoutez une demi-portion de quinoa gourmand (Rincez et cuisez le quinoa 12 min dans 2 volumes d'eau salée.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Crevettes Sauvages Sautées à l'Ail & Persil sur Lit de Brocolis Croquants au Citron",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Riche en protéines et sélénium.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 250,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "180g de fleurettes de brocoli",
        "140g de crevettes décortiquées",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Cuisez les brocolis à la vapeur 6 min pour les garder vert vif et croquants. 2. Saisissez les crevettes 4 min à feu vif avec une gousse d'ail hachée et du persil plat. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Crevettes Sauvages Sautées à l'Ail & Persil, Fondue de Poireaux Douce & Touche de Riz Basmati Complet",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Bas",
      "cg": 8,
      "kcal": 326,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "2 blancs de poireaux émincés",
        "140g de crevettes décortiquées",
        "Demi-portion : 120g de riz basmati complet cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Faites fondre les poireaux à couvert 12 min à feu doux avec un filet d'eau et d'huile d'olive. 2. Saisissez les crevettes 4 min à feu vif avec une gousse d'ail hachée et du persil plat. 3. Ajoutez une demi-portion de riz basmati complet (Faites cuire le riz basmati complet à couvert puis égrainez à la fourchette.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Crevettes Sauvages Sautées à l'Ail & Persil sur Lit de Tagliatelles de Courgettes à l'Ail",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Riche en protéines et sélénium.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 250,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "200g de courgettes bio",
        "140g de crevettes décortiquées",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Taillez les courgettes en rubans et poêlez-les 4 min à feu vif pour conserver leur croquant. 2. Saisissez les crevettes 4 min à feu vif avec une gousse d'ail hachée et du persil plat. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Crevettes Sauvages Sautées à l'Ail & Persil, Poêlée Forestière Épinards & Champignons & Touche de Pois Chiches Rôtis au Cumin",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 340,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "150g d'épinards frais et 100g de champignons",
        "140g de crevettes décortiquées",
        "Demi-portion : 130g de pois chiches cuits",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Faites sauter les champignons 5 min puis ajoutez les épinards 1 min jusqu'à ce qu'ils tombent. 2. Saisissez les crevettes 4 min à feu vif avec une gousse d'ail hachée et du persil plat. 3. Ajoutez une demi-portion de pois chiches rôtis au cumin (Faites revenir les pois chiches égouttés 6 min à la poêle avec du cumin et de la coriandre.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Crevettes Sauvages Sautées à l'Ail & Persil sur Lit de Tian de Poivrons & Aubergines Grillées",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Riche en protéines et sélénium.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 250,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "150g d'aubergine et 1 poivron rouge",
        "140g de crevettes décortiquées",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Faites griller les légumes en lanières 15 min avec des herbes de Provence. 2. Saisissez les crevettes 4 min à feu vif avec une gousse d'ail hachée et du persil plat. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Crevettes Sauvages Sautées à l'Ail & Persil, Haricots Verts Extra-Fins & Amandes & Touche de Lentilles Vertes du Puy",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 333,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "180g de haricots verts extra-fins + 10g d'amandes effilées",
        "140g de crevettes décortiquées",
        "Demi-portion : 140g de lentilles vertes du Puy cuites",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Cuisez les haricots verts à la vapeur 8 min et parsemez d'amandes effilées grillées. 2. Saisissez les crevettes 4 min à feu vif avec une gousse d'ail hachée et du persil plat. 3. Ajoutez une demi-portion de lentilles vertes du puy (Cuisez les lentilles 22 min avec laurier et oignon piqué de girofle.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Crevettes Sauvages Sautées à l'Ail & Persil sur Lit de Chou-Fleur Rôti au Curcuma & Poivre Noir",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Riche en protéines et sélénium.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 250,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "180g de chou-fleur en bouquets",
        "140g de crevettes décortiquées",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Faites dorer les bouquets de chou-fleur 12 min avec 1/2 c.à.c de curcuma et du poivre noir. 2. Saisissez les crevettes 4 min à feu vif avec une gousse d'ail hachée et du persil plat. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Émincé de Bœuf Maigre au Romarin, Brocolis Croquants au Citron & Touche de Sarrasin Torréfié (Kasha)",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Très Bas",
      "cg": 5,
      "kcal": 364,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "180g de fleurettes de brocoli",
        "125g de filet ou rumsteck de bœuf maigre",
        "Demi-portion : 120g de sarrasin cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Cuisez les brocolis à la vapeur 6 min pour les garder vert vif et croquants. 2. Saisissez l'émincé de bœuf 3 min à feu vif avec une branche de romarin. 3. Ajoutez une demi-portion de sarrasin torréfié (kasha) (Hydratez le sarrasin 10 min dans l'eau bouillante salée puis égouttez.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Émincé de Bœuf Maigre au Romarin sur Lit de Fondue de Poireaux Douce",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Riche en fer héminique et zinc.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 295,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "2 blancs de poireaux émincés",
        "125g de filet ou rumsteck de bœuf maigre",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Faites fondre les poireaux à couvert 12 min à feu doux avec un filet d'eau et d'huile d'olive. 2. Saisissez l'émincé de bœuf 3 min à feu vif avec une branche de romarin. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Émincé de Bœuf Maigre au Romarin, Tagliatelles de Courgettes à l'Ail & Touche de Quinoa Gourmand",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Bas",
      "cg": 6,
      "kcal": 371,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "200g de courgettes bio",
        "125g de filet ou rumsteck de bœuf maigre",
        "Demi-portion : 120g de quinoa cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Taillez les courgettes en rubans et poêlez-les 4 min à feu vif pour conserver leur croquant. 2. Saisissez l'émincé de bœuf 3 min à feu vif avec une branche de romarin. 3. Ajoutez une demi-portion de quinoa gourmand (Rincez et cuisez le quinoa 12 min dans 2 volumes d'eau salée.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Émincé de Bœuf Maigre au Romarin sur Lit de Poêlée Forestière Épinards & Champignons",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Riche en fer héminique et zinc.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 295,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "150g d'épinards frais et 100g de champignons",
        "125g de filet ou rumsteck de bœuf maigre",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Faites sauter les champignons 5 min puis ajoutez les épinards 1 min jusqu'à ce qu'ils tombent. 2. Saisissez l'émincé de bœuf 3 min à feu vif avec une branche de romarin. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Émincé de Bœuf Maigre au Romarin, Tian de Poivrons & Aubergines Grillées & Touche de Patate Douce Vapeur au Paprika",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Bas",
      "cg": 7,
      "kcal": 343,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "150g d'aubergine et 1 poivron rouge",
        "125g de filet ou rumsteck de bœuf maigre",
        "Demi-portion : 120g de patate douce en dés",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Faites griller les légumes en lanières 15 min avec des herbes de Provence. 2. Saisissez l'émincé de bœuf 3 min à feu vif avec une branche de romarin. 3. Ajoutez une demi-portion de patate douce vapeur au paprika (Cuisez les dés de patate douce à la vapeur douce 12 min et saupoudrez de paprika fumé.). Assaisonnez d'huile d'olive et de citron."
    },
    {
      "title": "Émincé de Bœuf Maigre au Romarin sur Lit de Haricots Verts Extra-Fins & Amandes",
      "time": "15 min",
      "description": "Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. Riche en fer héminique et zinc.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 295,
      "tags": [
        "Dîner Léger",
        "Sans Féculents",
        "IG Très Bas"
      ],
      "ingredients": [
        "180g de haricots verts extra-fins + 10g d'amandes effilées",
        "125g de filet ou rumsteck de bœuf maigre",
        "1/4 d'avocat ou 10g de graines de courge",
        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
      ],
      "instructions": "1. Cuisez les haricots verts à la vapeur 8 min et parsemez d'amandes effilées grillées. 2. Saisissez l'émincé de bœuf 3 min à feu vif avec une branche de romarin. 3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
    },
    {
      "title": "Poêlée du Soir : Émincé de Bœuf Maigre au Romarin, Chou-Fleur Rôti au Curcuma & Poivre Noir & Touche de Sarrasin Torréfié (Kasha)",
      "time": "18 min",
      "description": "Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
      "ig": "Très Bas",
      "cg": 5,
      "kcal": 364,
      "tags": [
        "Dîner Complet",
        "Satiété Nocturne",
        "IG Bas"
      ],
      "ingredients": [
        "180g de chou-fleur en bouquets",
        "125g de filet ou rumsteck de bœuf maigre",
        "Demi-portion : 120g de sarrasin cuit",
        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
      ],
      "instructions": "1. Faites dorer les bouquets de chou-fleur 12 min avec 1/2 c.à.c de curcuma et du poivre noir. 2. Saisissez l'émincé de bœuf 3 min à feu vif avec une branche de romarin. 3. Ajoutez une demi-portion de sarrasin torréfié (kasha) (Hydratez le sarrasin 10 min dans l'eau bouillante salée puis égouttez.). Assaisonnez d'huile d'olive et de citron."
    }
  ],
  "dessert": [
    {
      "title": "Fondant Intense au Chocolat Noir & Farine de Pois Chiche",
      "time": "22 min",
      "description": "Un fondant au chocolat bluffant, sans farine de blé ni sucre blanc, riche en fibres et protéines végétales.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 215,
      "tags": [
        "Dessert",
        "Chocolat",
        "Sans Gluten",
        "IG Très Bas"
      ],
      "ingredients": [
        "150g de chocolat noir 85%",
        "3 œufs bio",
        "40g d'huile de coco ou purée d'amande",
        "2 c.à.s d'érythritol ou xylitol",
        "25g de farine de pois chiche ou poudre d'amande"
      ],
      "instructions": "Faites fondre le chocolat avec la purée d'amande. Battez les œufs avec l'érythritol, incorporez la farine puis le chocolat. Enfournez 12 à 14 min à 180°C."
    },
    {
      "title": "Panna Cotta Lait d'Amande & Coulis de Framboises sans Sucre",
      "time": "15 min",
      "description": "Dessert italien revisité sans crème lourde ni sucre ajouté, gélifié à l'agar-agar (fibre marine prébiotique).",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 135,
      "tags": [
        "Dessert",
        "Fruits Rouges",
        "Sans Lactose",
        "IG Très Bas"
      ],
      "ingredients": [
        "250ml de lait et crème d'amande cuisine sans sucre",
        "1g d'agar-agar",
        "100g de framboises",
        "1/2 gousse de vanille"
      ],
      "instructions": "Portez à ébullition 2 min le lait d'amande avec la vanille et l'agar-agar. Versez en verrines et réfrigérez 2h. Nappez de framboises mixées."
    },
    {
      "title": "Cookies Moelleux Beurre de Cacahuète & Pépites 85%",
      "time": "18 min",
      "description": "Biscuits riches en bons lipides et protéines végétales, parfaits avec un thé vert.",
      "ig": "Bas",
      "cg": 5,
      "kcal": 195,
      "tags": [
        "Dessert",
        "Biscuits",
        "Sans Farine Blanche"
      ],
      "ingredients": [
        "100g de purée de cacahuète 100% arachide",
        "1 œuf bio",
        "40g de poudre d'amande",
        "25g de pépites de chocolat noir 85%",
        "1 c.à.s d'érythritol"
      ],
      "instructions": "Mélangez tous les ingrédients, formez 8 petits palets sur papier cuisson et enfournez 10 min à 180°C."
    },
    {
      "title": "Carpaccio d'Agrumes à la Cannelle, Menthe & Pistaches",
      "time": "8 min",
      "description": "Dessert méditerranéen ultra-frais associant la naringine du pamplemousse à la cannelle régulatrice.",
      "ig": "Très Bas",
      "cg": 4,
      "kcal": 110,
      "tags": [
        "Dessert",
        "Agrumes",
        "Vitamine C"
      ],
      "ingredients": [
        "1/2 pamplemousse rose pelé à vif",
        "1/2 orange sanguine en fines tranches",
        "1/2 c.à.c de cannelle de Ceylan",
        "10g de pistaches concassées",
        "Feuilles de menthe fraîche"
      ],
      "instructions": "Disposez les tranches d'agrumes en rosace, saupoudrez de cannelle de Ceylan, de pistaches et de menthe ciselée."
    },
    {
      "title": "Crumble Pomme Granny &Fruits Rouges à la Poudre d'Amande",
      "time": "25 min",
      "description": "Tout le plaisir d'un crumble chaud et croustillant avec une pâte aux amandes et flocons d'avoine à IG bas.",
      "ig": "Bas",
      "cg": 6,
      "kcal": 210,
      "tags": [
        "Dessert",
        "Four",
        "Gourmand"
      ],
      "ingredients": [
        "1 pomme Granny Smith en dés",
        "80g de myrtilles et framboises",
        "40g de poudre d'amande",
        "20g de flocons d'avoine",
        "1 c.à.s d'huile de coco",
        "Cannelle de Ceylan"
      ],
      "instructions": "Disposez les fruits et la cannelle dans un plat. Sablez du bout des doigts la poudre d'amande, l'avoine et l'huile de coco, répartissez sur les fruits et enfournez 20 min à 180°C."
    },
    {
      "title": "Mousse Aérienne au Chocolat Noir 85% & Éclats de Noisettes Torréfiées",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "100g de chocolat noir 85% min.",
        "3 blancs d'œufs bio",
        "1 pincée de fleur de sel",
        "15g de noisettes torréfiées concassées"
      ],
      "instructions": "Faites fondre le chocolat noir au bain-marie. Montez les blancs en neige ferme et incorporez-les délicatement au chocolat tiédi. Parsemez les noisettes juste avant de servir pour le croquant."
    },
    {
      "title": "Mousse Aérienne au Chocolat Noir 85% & Framboises Fraîches Acidulées",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "100g de chocolat noir 85% min.",
        "3 blancs d'œufs bio",
        "1 pincée de fleur de sel",
        "60g de framboises fraîches"
      ],
      "instructions": "Faites fondre le chocolat noir au bain-marie. Montez les blancs en neige ferme et incorporez-les délicatement au chocolat tiédi. Déposez les framboises fraîches au sommet."
    },
    {
      "title": "Mousse Aérienne au Chocolat Noir 85% & Vanille Bourbon & Cacao Pur",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "100g de chocolat noir 85% min.",
        "3 blancs d'œufs bio",
        "1 pincée de fleur de sel",
        "Graines d'1/2 gousse de vanille",
        "Voile de cacao pur non sucré"
      ],
      "instructions": "Faites fondre le chocolat noir au bain-marie. Montez les blancs en neige ferme et incorporez-les délicatement au chocolat tiédi. Parfumez à la vanille et poudrez de cacao."
    },
    {
      "title": "Mousse Aérienne au Chocolat Noir 85% & Fève Tonka Râpée & Amandes",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "100g de chocolat noir 85% min.",
        "3 blancs d'œufs bio",
        "1 pincée de fleur de sel",
        "1 pincée de fève Tonka râpée",
        "10g d'amandes effilées"
      ],
      "instructions": "Faites fondre le chocolat noir au bain-marie. Montez les blancs en neige ferme et incorporez-les délicatement au chocolat tiédi. Râpez la fève Tonka au dernier moment."
    },
    {
      "title": "Mousse Aérienne au Chocolat Noir 85% & Pistaches Vertes Concassées",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "100g de chocolat noir 85% min.",
        "3 blancs d'œufs bio",
        "1 pincée de fleur de sel",
        "15g de pistaches vertes non salées"
      ],
      "instructions": "Faites fondre le chocolat noir au bain-marie. Montez les blancs en neige ferme et incorporez-les délicatement au chocolat tiédi. Ajoutez les pistaches concassées au dressage."
    },
    {
      "title": "Verrine Onctueuse Brebis-Amande & Éclats de Noisettes Torréfiées",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "150g de yaourt de brebis ou grec",
        "1 c.à.s de purée d'amande blanche",
        "Extrait de vanille",
        "15g de noisettes torréfiées concassées"
      ],
      "instructions": "Fouettez le yaourt avec la purée d'amande et la vanille puis dressez en verrine. Parsemez les noisettes juste avant de servir pour le croquant."
    },
    {
      "title": "Verrine Onctueuse Brebis-Amande & Framboises Fraîches Acidulées",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "150g de yaourt de brebis ou grec",
        "1 c.à.s de purée d'amande blanche",
        "Extrait de vanille",
        "60g de framboises fraîches"
      ],
      "instructions": "Fouettez le yaourt avec la purée d'amande et la vanille puis dressez en verrine. Déposez les framboises fraîches au sommet."
    },
    {
      "title": "Verrine Onctueuse Brebis-Amande & Vanille Bourbon & Cacao Pur",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "150g de yaourt de brebis ou grec",
        "1 c.à.s de purée d'amande blanche",
        "Extrait de vanille",
        "Graines d'1/2 gousse de vanille",
        "Voile de cacao pur non sucré"
      ],
      "instructions": "Fouettez le yaourt avec la purée d'amande et la vanille puis dressez en verrine. Parfumez à la vanille et poudrez de cacao."
    },
    {
      "title": "Verrine Onctueuse Brebis-Amande & Fève Tonka Râpée & Amandes",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "150g de yaourt de brebis ou grec",
        "1 c.à.s de purée d'amande blanche",
        "Extrait de vanille",
        "1 pincée de fève Tonka râpée",
        "10g d'amandes effilées"
      ],
      "instructions": "Fouettez le yaourt avec la purée d'amande et la vanille puis dressez en verrine. Râpez la fève Tonka au dernier moment."
    },
    {
      "title": "Verrine Onctueuse Brebis-Amande & Pistaches Vertes Concassées",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "150g de yaourt de brebis ou grec",
        "1 c.à.s de purée d'amande blanche",
        "Extrait de vanille",
        "15g de pistaches vertes non salées"
      ],
      "instructions": "Fouettez le yaourt avec la purée d'amande et la vanille puis dressez en verrine. Ajoutez les pistaches concassées au dressage."
    },
    {
      "title": "Tartelette Crue Amande-Coco & Éclats de Noisettes Torréfiées",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "50g de poudre d'amande",
        "1 c.à.s d'huile de coco vierge",
        "1 c.à.s de purée de noisette",
        "15g de noisettes torréfiées concassées"
      ],
      "instructions": "Mélangez la poudre d'amande, le coco et la purée de noisette, tassez au fond d'un cercle et laissez figer 15 min au frais. Parsemez les noisettes juste avant de servir pour le croquant."
    },
    {
      "title": "Tartelette Crue Amande-Coco & Framboises Fraîches Acidulées",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "50g de poudre d'amande",
        "1 c.à.s d'huile de coco vierge",
        "1 c.à.s de purée de noisette",
        "60g de framboises fraîches"
      ],
      "instructions": "Mélangez la poudre d'amande, le coco et la purée de noisette, tassez au fond d'un cercle et laissez figer 15 min au frais. Déposez les framboises fraîches au sommet."
    },
    {
      "title": "Tartelette Crue Amande-Coco & Vanille Bourbon & Cacao Pur",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "50g de poudre d'amande",
        "1 c.à.s d'huile de coco vierge",
        "1 c.à.s de purée de noisette",
        "Graines d'1/2 gousse de vanille",
        "Voile de cacao pur non sucré"
      ],
      "instructions": "Mélangez la poudre d'amande, le coco et la purée de noisette, tassez au fond d'un cercle et laissez figer 15 min au frais. Parfumez à la vanille et poudrez de cacao."
    },
    {
      "title": "Tartelette Crue Amande-Coco & Fève Tonka Râpée & Amandes",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "50g de poudre d'amande",
        "1 c.à.s d'huile de coco vierge",
        "1 c.à.s de purée de noisette",
        "1 pincée de fève Tonka râpée",
        "10g d'amandes effilées"
      ],
      "instructions": "Mélangez la poudre d'amande, le coco et la purée de noisette, tassez au fond d'un cercle et laissez figer 15 min au frais. Râpez la fève Tonka au dernier moment."
    },
    {
      "title": "Tartelette Crue Amande-Coco & Pistaches Vertes Concassées",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "50g de poudre d'amande",
        "1 c.à.s d'huile de coco vierge",
        "1 c.à.s de purée de noisette",
        "15g de pistaches vertes non salées"
      ],
      "instructions": "Mélangez la poudre d'amande, le coco et la purée de noisette, tassez au fond d'un cercle et laissez figer 15 min au frais. Ajoutez les pistaches concassées au dressage."
    },
    {
      "title": "Cheesecake Léger Sans Cuisson & Éclats de Noisettes Torréfiées",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "100g de fromage frais ou ricotta",
        "50g de Skyr",
        "Zeste de citron bio non traité",
        "15g de noisettes torréfiées concassées"
      ],
      "instructions": "Fouettez la ricotta et le Skyr avec le zeste de citron et dressez sur un lit d'amandes concassées. Parsemez les noisettes juste avant de servir pour le croquant."
    },
    {
      "title": "Cheesecake Léger Sans Cuisson & Framboises Fraîches Acidulées",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "100g de fromage frais ou ricotta",
        "50g de Skyr",
        "Zeste de citron bio non traité",
        "60g de framboises fraîches"
      ],
      "instructions": "Fouettez la ricotta et le Skyr avec le zeste de citron et dressez sur un lit d'amandes concassées. Déposez les framboises fraîches au sommet."
    },
    {
      "title": "Cheesecake Léger Sans Cuisson & Vanille Bourbon & Cacao Pur",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "100g de fromage frais ou ricotta",
        "50g de Skyr",
        "Zeste de citron bio non traité",
        "Graines d'1/2 gousse de vanille",
        "Voile de cacao pur non sucré"
      ],
      "instructions": "Fouettez la ricotta et le Skyr avec le zeste de citron et dressez sur un lit d'amandes concassées. Parfumez à la vanille et poudrez de cacao."
    },
    {
      "title": "Cheesecake Léger Sans Cuisson & Fève Tonka Râpée & Amandes",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "100g de fromage frais ou ricotta",
        "50g de Skyr",
        "Zeste de citron bio non traité",
        "1 pincée de fève Tonka râpée",
        "10g d'amandes effilées"
      ],
      "instructions": "Fouettez la ricotta et le Skyr avec le zeste de citron et dressez sur un lit d'amandes concassées. Râpez la fève Tonka au dernier moment."
    },
    {
      "title": "Cheesecake Léger Sans Cuisson & Pistaches Vertes Concassées",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "100g de fromage frais ou ricotta",
        "50g de Skyr",
        "Zeste de citron bio non traité",
        "15g de pistaches vertes non salées"
      ],
      "instructions": "Fouettez la ricotta et le Skyr avec le zeste de citron et dressez sur un lit d'amandes concassées. Ajoutez les pistaches concassées au dressage."
    },
    {
      "title": "Poire Rôtie au Four aux Épices & Éclats de Noisettes Torréfiées",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "1 poire Conférence ferme",
        "1/2 c.à.c de cannelle de Ceylan",
        "1 noisette de beurre clarifié ou huile de coco",
        "15g de noisettes torréfiées concassées"
      ],
      "instructions": "Coupez la poire en deux, saupoudrez de cannelle et enfournez 15 min à 180°C. Parsemez les noisettes juste avant de servir pour le croquant."
    },
    {
      "title": "Poire Rôtie au Four aux Épices & Framboises Fraîches Acidulées",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "1 poire Conférence ferme",
        "1/2 c.à.c de cannelle de Ceylan",
        "1 noisette de beurre clarifié ou huile de coco",
        "60g de framboises fraîches"
      ],
      "instructions": "Coupez la poire en deux, saupoudrez de cannelle et enfournez 15 min à 180°C. Déposez les framboises fraîches au sommet."
    },
    {
      "title": "Poire Rôtie au Four aux Épices & Vanille Bourbon & Cacao Pur",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "1 poire Conférence ferme",
        "1/2 c.à.c de cannelle de Ceylan",
        "1 noisette de beurre clarifié ou huile de coco",
        "Graines d'1/2 gousse de vanille",
        "Voile de cacao pur non sucré"
      ],
      "instructions": "Coupez la poire en deux, saupoudrez de cannelle et enfournez 15 min à 180°C. Parfumez à la vanille et poudrez de cacao."
    },
    {
      "title": "Poire Rôtie au Four aux Épices & Fève Tonka Râpée & Amandes",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "1 poire Conférence ferme",
        "1/2 c.à.c de cannelle de Ceylan",
        "1 noisette de beurre clarifié ou huile de coco",
        "1 pincée de fève Tonka râpée",
        "10g d'amandes effilées"
      ],
      "instructions": "Coupez la poire en deux, saupoudrez de cannelle et enfournez 15 min à 180°C. Râpez la fève Tonka au dernier moment."
    },
    {
      "title": "Poire Rôtie au Four aux Épices & Pistaches Vertes Concassées",
      "time": "12 min",
      "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
      "ig": "Très Bas",
      "cg": 3,
      "kcal": 185,
      "tags": [
        "Dessert",
        "IG Très Bas",
        "Sans Sucre Ajouté"
      ],
      "ingredients": [
        "1 poire Conférence ferme",
        "1/2 c.à.c de cannelle de Ceylan",
        "1 noisette de beurre clarifié ou huile de coco",
        "15g de pistaches vertes non salées"
      ],
      "instructions": "Coupez la poire en deux, saupoudrez de cannelle et enfournez 15 min à 180°C. Ajoutez les pistaches concassées au dressage."
    }
  ],
  "drinks": [
    {
      "title": "Tonique Pré-Repas au Vinaigre de Cidre & Citron",
      "time": "2 min",
      "description": "Réduit de 20 à 30% le pic de glycémie du repas suivant grâce à l'acide acétique qui freine l'alpha-amylase.",
      "ig": "Très Bas",
      "cg": 0,
      "kcal": 8,
      "tags": [
        "Boisson Fonctionnelle",
        "Anti-Pic Glycémique",
        "Avant Repas"
      ],
      "ingredients": [
        "250ml d'eau tempérée ou gazeuse",
        "1 c.à.s de vinaigre de cidre bio non pasteurisé (avec la mère)",
        "Quelques gouttes de jus de citron"
      ],
      "instructions": "Diluez le vinaigre de cidre dans le grand verre d'eau et buvez (idéalement à la paille) 10 à 15 minutes avant le déjeuner ou le dîner."
    },
    {
      "title": "Golden Latte (Lait d'Or Anti-Inflammatoire Curcuma & Cannelle)",
      "time": "5 min",
      "description": "Boisson chaude ayurvédique combinant curcumine, pipérine et cannelle de Ceylan pour l'équilibre métabolique.",
      "ig": "Très Bas",
      "cg": 1,
      "kcal": 65,
      "tags": [
        "Boisson Chaude",
        "Anti-inflammatoire",
        "Soir"
      ],
      "ingredients": [
        "250ml de lait d'amande sans sucre",
        "1 c.à.c de curcuma bio",
        "1/2 c.à.c de cannelle de Ceylan",
        "1 pincée de poivre noir moulu",
        "1/2 c.à.c d'huile de coco"
      ],
      "instructions": "Chauffez doucement le lait d'amande avec toutes les épices et l'huile de coco en fouettant jusqu'à obtenir une mousse fine."
    },
    {
      "title": "Thé Vert Sencha Glacé au Gingembre & Menthe Fraîche",
      "time": "10 min",
      "description": "Riche en catéchines EGCG qui stimulent l'oxydation des graisses et la sensibilité à l'insuline.",
      "ig": "Très Bas",
      "cg": 0,
      "kcal": 5,
      "tags": [
        "Thé Glacé",
        "Antioxydant",
        "Zéro Sucre"
      ],
      "ingredients": [
        "1 litre d'eau à 75°C",
        "2 c.à.s de thé vert Sencha bio",
        "3 cm de gingembre frais râpé",
        "10 feuilles de menthe fraîche",
        "Jus d'1/2 citron"
      ],
      "instructions": "Faites infuser le thé vert et le gingembre 4 min (pas plus pour éviter l'amertume), filtrez, ajoutez la menthe et le citron puis placez au frais."
    },
    {
      "title": "Infusion d'Écorce de Cannelle de Ceylan & Fenugrec",
      "time": "10 min",
      "description": "Tisane métabolique traditionnelle reconnue pour soutenir la régulation naturelle de la glycémie après le repas.",
      "ig": "Très Bas",
      "cg": 0,
      "kcal": 5,
      "tags": [
        "Tisane Métabolique",
        "Cannelle",
        "Après Repas"
      ],
      "ingredients": [
        "300ml d'eau frémissante",
        "1 bâton de vraie cannelle de Ceylan",
        "1/2 c.à.c de graines de fenugrec",
        "1 rondelle de citron bio"
      ],
      "instructions": "Laissez infuser le bâton de cannelle et les graines de fenugrec 8 à 10 minutes à couvert dans l'eau frémissante, puis filtrez."
    },
    {
      "title": "Eau Détox Concombre, Citron, Romarin & Framboises",
      "time": "5 min",
      "description": "Eau infusée reminéralisante pour s'hydrater toute la journée sans aucune calorie ni édulcorant.",
      "ig": "Très Bas",
      "cg": 0,
      "kcal": 10,
      "tags": [
        "Eau Infusée",
        "Hydratation",
        "Zéro Sucre"
      ],
      "ingredients": [
        "1 litre d'eau filtrée",
        "1/3 de concombre en fines rondelles",
        "1/2 citron bio tranché",
        "1 branche de romarin frais",
        "6 framboises fraîches"
      ],
      "instructions": "Placez tous les ingrédients dans une carafe en verre, remplissez d'eau fraîche et laissez infuser au moins 1h au réfrigérateur."
    },
    {
      "title": "Kéfir d'Eau Fermenté Maison (Zéro Sucre Résiduel)",
      "time": "10 min (+48h)",
      "description": "Boisson pétillante riche en probiotiques vivants qui renforcent le microbiote intestinal impliqué dans le contrôle glycémique.",
      "ig": "Très Bas",
      "cg": 1,
      "kcal": 18,
      "tags": [
        "Probiotique",
        "Microbiote",
        "Pétillant"
      ],
      "ingredients": [
        "1 litre d'eau de source",
        "3 c.à.s de grains de kéfir de fruits",
        "1/2 citron bio",
        "1 figue sèche bio",
        "20g de sucre blond (consommé à 95% par les grains lors de la fermentation)"
      ],
      "instructions": "Fermentez 48h en bocal couvert d'un linge jusqu'à ce que la figue remonte. Filtrez et mettez en bouteille au frais."
    },
    {
      "title": "Infusion Glacée Hibiscus (Bissap), Vanille & Citron Vert",
      "time": "12 min",
      "description": "Riche en anthocyanes protecteurs du système vasculaire et de la tension artérielle.",
      "ig": "Très Bas",
      "cg": 0,
      "kcal": 8,
      "tags": [
        "Infusion",
        "Cardiovasculaire",
        "Zéro Sucre"
      ],
      "ingredients": [
        "1 litre d'eau",
        "3 c.à.s de fleurs d'hibiscus séchées",
        "1/2 gousse de vanille fendue",
        "Le jus d'un citron vert"
      ],
      "instructions": "Infusez les fleurs d'hibiscus et la vanille 10 min dans l'eau chaude. Filtrez, ajoutez le jus de citron vert et servez bien frais."
    },
    {
      "title": "Matcha Latte Fouetté au Lait de Soja Sans Sucre",
      "time": "5 min",
      "description": "Concentration d'antioxydants L-théanine et EGCG offrant une énergie calme et durable sans pic de cortisol.",
      "ig": "Très Bas",
      "cg": 1,
      "kcal": 70,
      "tags": [
        "Matcha",
        "Énergie Calme",
        "Antioxydant"
      ],
      "ingredients": [
        "1 c.à.c rase de thé vert Matcha cérémoniel",
        "60ml d'eau à 75°C",
        "180ml de lait de soja ou d'amande sans sucre",
        "1 pincée de cannelle"
      ],
      "instructions": "Fouettez le matcha avec l'eau chaude en formant un W, puis versez le lait végétal chaud préalablement moussé."
    },
    {
      "title": "Smoothie Vert Fibres Intégrales Avocat, Épinards & Citron",
      "time": "5 min",
      "description": "Préparé au blender pour conserver 100% des fibres insolubles et solubles avec une charge glycémique quasi nulle.",
      "ig": "Très Bas",
      "cg": 2,
      "kcal": 145,
      "tags": [
        "Smoothie",
        "Fibres Intégrales",
        "Satiété"
      ],
      "ingredients": [
        "1/2 concombre bio",
        "1 grosse poignée d'épinards frais",
        "1/3 d'avocat",
        "Jus d'un demi-citron",
        "200ml d'eau fraîche ou lait d'amande",
        "1 c.à.c de graines de chia"
      ],
      "instructions": "Mixez tous les ingrédients au blender pendant 45 secondes jusqu'à l'obtention d'un velouté vert homogène."
    },
    {
      "title": "Chai Latte Maison aux Épices Entières (Sans Sirop)",
      "time": "10 min",
      "description": "Synergie de cardamome, cannelle, gingembre et clou de girofle pour stimuler la thermogenèse sans sucre.",
      "ig": "Très Bas",
      "cg": 1,
      "kcal": 60,
      "tags": [
        "Boisson Chaude",
        "Épices",
        "Thermogenèse"
      ],
      "ingredients": [
        "200ml de lait d'amande ou soja sans sucre",
        "100ml d'eau",
        "1 sachet de thé noir Assam ou Rooibos",
        "3 gousses de cardamome, 1 bâton de cannelle, 2 rondelles de gingembre"
      ],
      "instructions": "Faites frémir l'eau avec les épices 5 min, ajoutez le thé et le lait végétal, laissez infuser 3 min puis filtrez."
    }
  ],
  "kenwood": [
    {
      "id": "sig-love",
      "title": "LOVE (Spécial Antidiabète)",
      "category": "signature",
      "time": "4 min",
      "description": "Alliance veloutée de fraises antioxydantes, pomme Granny Smith et avocat crémeux pour freiner l'absorption des glucides et stabiliser la glycémie.",
      "ig": "IG 15 (Très basse)",
      "igNumeric": 15,
      "cg": 1.6,
      "kcal": 145,
      "volumeMl": 250,
      "kenwoodSpeed": "Vitesse 1 (fraises) puis Vitesse 2 (pomme)",
      "bestTime": "Matin ou Collation 16h",
      "vitamins": [
        "Vitamine C",
        "Vitamine E",
        "Vitamine B9",
        "Potassium",
        "Acides gras mono-insaturés"
      ],
      "tags": [
        "Signature Menu",
        "Vitesse 1 (fraises) puis Vitesse 2 (pomme)",
        "Régulation glycémie",
        "Santé cardiovasculaire"
      ],
      "ingredients": [
        "1 belle poignée de fraises fraîches équeutées (100 g)",
        "1/2 avocat bien mûr (incorporé après extraction)",
        "1 pomme Granny Smith bio (IG bas)",
        "Quelques gouttes de jus de citron frais"
      ],
      "instructions": "Passez les fraises en Vitesse 1 puis la pomme Granny Smith en Vitesse 2 dans la centrifugeuse Kenwood AT641. Écrasez finement la chair du demi-avocat (ou mixez-la au blender avec le jus extrait) car l'avocat ne se centrifuge pas. Servez frais immédiatement."
    },
    {
      "id": "sig-vitamine",
      "title": "VITAMINE",
      "category": "signature",
      "time": "4 min",
      "description": "Un concentré de vitamine C naturelle associant le kiwi, la fraise et la fraîcheur de la menthe sur une base de pomme verte peu sucrée.",
      "ig": "IG 22 (Basse)",
      "igNumeric": 22,
      "cg": 4.0,
      "kcal": 98,
      "volumeMl": 260,
      "kenwoodSpeed": "Vitesse 1 (kiwi, fraises, menthe) puis Vitesse 2 (pomme)",
      "bestTime": "Matin au petit-déjeuner",
      "vitamins": [
        "Vitamine C",
        "Vitamine K",
        "Antioxydants",
        "Folate (B9)"
      ],
      "tags": [
        "Signature Menu",
        "Vitesse 1 (kiwi, fraises, menthe) puis Vitesse 2 (pomme)",
        "Immunité & Défenses",
        "Énergie & Tonus"
      ],
      "ingredients": [
        "1 kiwi vert épluché",
        "1 poignée de fraises fraîches (80 g)",
        "6 feuilles de menthe fraîche",
        "1 pomme verte Granny Smith"
      ],
      "instructions": "Enroulez les feuilles de menthe autour des fraises et du kiwi, passez-les en Vitesse 1 dans la Kenwood AT641, puis terminez par la pomme verte en Vitesse 2 pour pousser toutes les fibres aromatiques."
    },
    {
      "id": "sig-summer",
      "title": "SUMMER",
      "category": "signature",
      "time": "3 min",
      "description": "Jus désaltérant d'été mariant l'eau cellulaire du concombre aux polyphénols de la fraise et aux notes aromatiques du basilic frais.",
      "ig": "IG 16 (Très basse)",
      "igNumeric": 16,
      "cg": 2.2,
      "kcal": 76,
      "volumeMl": 280,
      "kenwoodSpeed": "Vitesse 1 (concombre, fraises, basilic) puis Vitesse 2 (pomme)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Vitamine C",
        "Silice",
        "Potassium",
        "Polyphénols"
      ],
      "tags": [
        "Signature Menu",
        "Vitesse 1 (concombre, fraises, basilic) puis Vitesse 2 (pomme)",
        "Hydratation profonde",
        "Peau & Éclat"
      ],
      "ingredients": [
        "1/2 concombre bio avec la peau",
        "1 poignée de fraises équeutées (80 g)",
        "4 grandes feuilles de basilic frais",
        "1 pomme verte Granny Smith"
      ],
      "instructions": "Insérez le basilic coincé entre les fraises et le concombre en Vitesse 1, puis passez la pomme verte en Vitesse 2. Remuez doucement et dégustez bien frais."
    },
    {
      "id": "sig-iconique",
      "title": "ICONIQUE",
      "category": "signature",
      "time": "4 min",
      "description": "Duo acidulé pamplemousse rose et framboises, riche en naringine qui améliore la sensibilité à l'insuline et stimule le métabolisme.",
      "ig": "IG 18 (Très basse)",
      "igNumeric": 18,
      "cg": 2.7,
      "kcal": 84,
      "volumeMl": 250,
      "kenwoodSpeed": "Vitesse 1 (pamplemousse, framboises) puis Vitesse 2 (pomme)",
      "bestTime": "Matin à jeun ou Avant déjeuner",
      "vitamins": [
        "Vitamine C",
        "Naringine",
        "Anthocyanes",
        "Potassium"
      ],
      "tags": [
        "Signature Menu",
        "Vitesse 1 (pamplemousse, framboises) puis Vitesse 2 (pomme)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "1/2 pamplemousse rose pelé à vif",
        "1 poignée de framboises fraîches (70 g)",
        "1 pomme verte Granny Smith"
      ],
      "instructions": "Pelez le demi-pamplemousse à vif pour retirer l'albédo amer. Passez les framboises et le pamplemousse en Vitesse 1, puis la pomme verte en Vitesse 2."
    },
    {
      "id": "sig-sunny",
      "title": "SUNNY",
      "category": "signature",
      "time": "4 min",
      "description": "Éclat exotique riche en bêta-carotène et vitamine A, parfumé au fruit de la passion frais sans excès de sucre.",
      "ig": "IG 24 (Basse)",
      "igNumeric": 24,
      "cg": 4.6,
      "kcal": 102,
      "volumeMl": 250,
      "kenwoodSpeed": "Vitesse 2 (carottes & pomme)",
      "bestTime": "Matin ou Collation",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Vitamine C",
        "Biotine",
        "Potassium"
      ],
      "tags": [
        "Signature Menu",
        "Vitesse 2 (carottes & pomme)",
        "Peau & Éclat",
        "Énergie & Tonus"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 pomme verte Granny Smith",
        "La pulpe d'1 fruit de la passion frais",
        "1 filet d'huile de colza ou lin (pour assimiler la provitamine A)"
      ],
      "instructions": "Centrifugez les carottes et la pomme verte en Vitesse 2 dans la Kenwood AT641. Versez dans un verre puis incorporez à la cuillère la pulpe fraîche du fruit de la passion (ne passez pas les graines de passion dans le tamis)."
    },
    {
      "id": "sig-tonique",
      "title": "TONIQUE",
      "category": "signature",
      "time": "4 min",
      "description": "Le grand classique revitalisant carotte, citron et gingembre frais pour réveiller l'organisme et stimuler la circulation.",
      "ig": "IG 21 (Basse)",
      "igNumeric": 21,
      "cg": 3.6,
      "kcal": 92,
      "volumeMl": 260,
      "kenwoodSpeed": "Vitesse 1 (citron) puis Vitesse 2 (gingembre, carottes, pomme)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Provitamine A",
        "Vitamine C",
        "Gingérol",
        "Potassium"
      ],
      "tags": [
        "Signature Menu",
        "Vitesse 1 (citron) puis Vitesse 2 (gingembre, carottes, pomme)",
        "Énergie & Tonus",
        "Immunité & Défenses"
      ],
      "ingredients": [
        "2 carottes moyennes bien brossées",
        "1/2 citron jaune pelé",
        "1,5 cm de racine de gingembre frais",
        "1 pomme verte Granny Smith"
      ],
      "instructions": "Passez le demi-citron en Vitesse 1, puis passez en Vitesse 2 pour le gingembre coincé entre les carottes et la pomme verte."
    },
    {
      "id": "sig-detox",
      "title": "DETOX",
      "category": "signature",
      "time": "4 min",
      "description": "Formule drainante et alcalinisante au concombre, céleri branche, citron et menthe pour purifier le foie et les reins.",
      "ig": "IG 12 (Très basse)",
      "igNumeric": 12,
      "cg": 1.4,
      "kcal": 68,
      "volumeMl": 300,
      "kenwoodSpeed": "Vitesse 1 (concombre, citron, menthe) puis Vitesse 2 (céleri, pomme)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Vitamine K",
        "Vitamine C",
        "Potassium",
        "Apigénine"
      ],
      "tags": [
        "Signature Menu",
        "Vitesse 1 (concombre, citron, menthe) puis Vitesse 2 (céleri, pomme)",
        "Détox Foie & Reins",
        "Régulation glycémie"
      ],
      "ingredients": [
        "1/2 concombre bio avec la peau",
        "2 belles branches de céleri frais",
        "1/2 citron jaune pelé",
        "6 feuilles de menthe fraîche",
        "1 pomme verte Granny Smith"
      ],
      "instructions": "Passez la menthe, le citron et le concombre en Vitesse 1, puis enchaînez en Vitesse 2 avec les branches de céleri et la pomme verte."
    },
    {
      "id": "sig-fresh",
      "title": "FRESH",
      "category": "signature",
      "time": "3 min",
      "description": "Minimaliste, ultra-hydratant et d'une fraîcheur cristalline pour alcaliniser le corps sans aucun pic glycémique.",
      "ig": "IG 14 (Très basse)",
      "igNumeric": 14,
      "cg": 1.5,
      "kcal": 62,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (citron, concombre) puis Vitesse 2 (pomme)",
      "bestTime": "Toute la journée",
      "vitamins": [
        "Vitamine C",
        "Silice",
        "Électrolytes naturels"
      ],
      "tags": [
        "Signature Menu",
        "Vitesse 1 (citron, concombre) puis Vitesse 2 (pomme)",
        "Hydratation profonde",
        "Régulation glycémie"
      ],
      "ingredients": [
        "1/2 citron jaune pelé",
        "1/2 concombre bio",
        "1 pomme verte Granny Smith"
      ],
      "instructions": "Centrifugez le citron et le concombre en Vitesse 1, puis terminez par la pomme verte en Vitesse 2."
    },
    {
      "id": "sig-glow",
      "title": "GLOW",
      "category": "signature",
      "time": "4 min",
      "description": "Élixir beauté riche en précurseurs de collagène (vitamine C des fraises et du citron) et gingérol micro-circulatoire.",
      "ig": "IG 17 (Très basse)",
      "igNumeric": 17,
      "cg": 2.5,
      "kcal": 82,
      "volumeMl": 250,
      "kenwoodSpeed": "Vitesse 1 (fraises, citron) puis Vitesse 2 (gingembre, pomme)",
      "bestTime": "Matin ou Collation",
      "vitamins": [
        "Vitamine C",
        "Acide ellagique",
        "Gingérol",
        "Antioxydants"
      ],
      "tags": [
        "Signature Menu",
        "Vitesse 1 (fraises, citron) puis Vitesse 2 (gingembre, pomme)",
        "Peau & Éclat",
        "Immunité & Défenses"
      ],
      "ingredients": [
        "1 belle poignée de fraises (90 g)",
        "1/2 citron pelé",
        "1 cm de gingembre frais",
        "1 pomme verte Granny Smith"
      ],
      "instructions": "Passez les fraises et le citron en Vitesse 1, puis le gingembre poussé par la pomme verte en Vitesse 2."
    },
    {
      "id": "sig-green",
      "title": "GREEN (Onctueux IG Bas)",
      "category": "signature",
      "time": "5 min",
      "description": "Cocktail vert riche en chlorophylle, fer végétal et bons lipides d'avocat pour une énergie constante toute la matinée.",
      "ig": "IG 13 (Très basse)",
      "igNumeric": 13,
      "cg": 1.4,
      "kcal": 150,
      "volumeMl": 260,
      "kenwoodSpeed": "Vitesse 1 (épinards, citron) puis Vitesse 2 (pomme)",
      "bestTime": "Matin au petit-déjeuner",
      "vitamins": [
        "Fer",
        "Magnésium",
        "Vitamine K",
        "Vitamine B9",
        "Oméga-9"
      ],
      "tags": [
        "Signature Menu",
        "Vitesse 1 (épinards, citron) puis Vitesse 2 (pomme)",
        "Régulation glycémie",
        "Énergie & Tonus"
      ],
      "ingredients": [
        "1 grosse poignée d'épinards frais (60 g)",
        "1/2 citron pelé",
        "1 pomme verte Granny Smith",
        "1/2 avocat mûr (incorporé après extraction)"
      ],
      "instructions": "Compressez les épinards en boule, passez-les en Vitesse 1 avec le citron, puis poussez avec la pomme en Vitesse 2. Mixez ou écrasez le demi-avocat avec le jus obtenu pour obtenir une texture veloutée."
    },
    {
      "id": "shot-immunite",
      "title": "SHOT IMMUNITÉ",
      "category": "shots",
      "time": "2 min",
      "description": "Concentré bouclier au gingembre et citron entier pour stimuler les défenses naturelles dès les premiers signes de fatigue.",
      "ig": "IG 12 (Très basse)",
      "igNumeric": 12,
      "cg": 0.8,
      "kcal": 38,
      "volumeMl": 90,
      "kenwoodSpeed": "Vitesse 1 (citron) puis Vitesse 2 (gingembre, pomme)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Vitamine C haute dose",
        "Gingérol",
        "Citral"
      ],
      "tags": [
        "Shot Express",
        "Vitesse 1 (citron) puis Vitesse 2 (gingembre, pomme)",
        "Immunité & Défenses",
        "Anti-inflammatoire"
      ],
      "ingredients": [
        "2 cm de racine de gingembre frais",
        "1 citron jaune entier pelé",
        "1/2 pomme verte Granny Smith"
      ],
      "instructions": "Passez le citron en Vitesse 1, puis le gingembre poussé par la demi-pomme en Vitesse 2. Buvez d'un trait."
    },
    {
      "id": "shot-energy",
      "title": "SHOT ENERGY",
      "category": "shots",
      "time": "2 min",
      "description": "Coup de fouet matinal sans caféine associant le piquant du gingembre à la richesse vitaminique du kiwi vert.",
      "ig": "IG 18 (Très basse)",
      "igNumeric": 18,
      "cg": 1.8,
      "kcal": 52,
      "volumeMl": 100,
      "kenwoodSpeed": "Vitesse 1 (kiwi) puis Vitesse 2 (gingembre, pomme)",
      "bestTime": "Matin ou Avant sport",
      "vitamins": [
        "Vitamine C",
        "Actinidine",
        "Gingérol",
        "Potassium"
      ],
      "tags": [
        "Shot Express",
        "Vitesse 1 (kiwi) puis Vitesse 2 (gingembre, pomme)",
        "Énergie & Tonus",
        "Immunité & Défenses"
      ],
      "ingredients": [
        "2 cm de gingembre frais",
        "1 kiwi mûr épluché",
        "1/2 pomme verte Granny Smith"
      ],
      "instructions": "Passez le kiwi en Vitesse 1, puis le gingembre et la demi-pomme en Vitesse 2."
    },
    {
      "id": "shot-boost",
      "title": "SHOT BOOST",
      "category": "shots",
      "time": "3 min",
      "description": "Triple synergie gingembre, kiwi et citron pour réveiller le métabolisme et oxygéner les cellules.",
      "ig": "IG 16 (Très basse)",
      "igNumeric": 16,
      "cg": 1.8,
      "kcal": 56,
      "volumeMl": 110,
      "kenwoodSpeed": "Vitesse 1 (kiwi, citron) puis Vitesse 2 (gingembre, pomme)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Vitamine C",
        "Antioxydants",
        "Gingérol",
        "Magnésium"
      ],
      "tags": [
        "Shot Express",
        "Vitesse 1 (kiwi, citron) puis Vitesse 2 (gingembre, pomme)",
        "Énergie & Tonus",
        "Immunité & Défenses"
      ],
      "ingredients": [
        "1,5 cm de gingembre frais",
        "1 kiwi épluché",
        "1/2 citron pelé",
        "1/2 pomme verte Granny Smith"
      ],
      "instructions": "Centrifugez le kiwi et le demi-citron en Vitesse 1, puis le gingembre et la demi-pomme en Vitesse 2."
    },
    {
      "id": "shot-curcuma-gold",
      "title": "SHOT CURCUMA GOLD",
      "category": "shots",
      "time": "3 min",
      "description": "Anti-inflammatoire puissant au curcuma frais, gingembre, citron et poivre noir (pipérine) pour multiplier par 20 l'assimilation de la curcumine.",
      "ig": "IG 11 (Très basse)",
      "igNumeric": 11,
      "cg": 0.7,
      "kcal": 35,
      "volumeMl": 85,
      "kenwoodSpeed": "Vitesse 1 (citron) puis Vitesse 2 (curcuma, gingembre, pomme)",
      "bestTime": "Matin ou Après repas",
      "vitamins": [
        "Curcumine",
        "Gingérol",
        "Vitamine C",
        "Pipérine"
      ],
      "tags": [
        "Shot Express",
        "Vitesse 1 (citron) puis Vitesse 2 (curcuma, gingembre, pomme)",
        "Anti-inflammatoire",
        "Immunité & Défenses"
      ],
      "ingredients": [
        "2 cm de racine de curcuma frais bio",
        "1,5 cm de racine de gingembre frais",
        "1/2 citron jaune pelé",
        "1/2 pomme verte Granny Smith",
        "1 pincée de poivre noir fraîchement moulu"
      ],
      "instructions": "Passez le citron en Vitesse 1, puis les racines de curcuma et gingembre poussées par la demi-pomme en Vitesse 2. Ajoutez la pincée de poivre noir dans le verre avant de boire."
    },
    {
      "id": "shot-chlorophylle",
      "title": "SHOT CHLOROPHYLLE PURE",
      "category": "shots",
      "time": "3 min",
      "description": "Concentré alcalinisant d'épinards, persil plat, céleri et citron vert pour oxygéner le sang et purifier l'haleine et le foie.",
      "ig": "IG 8 (Très basse)",
      "igNumeric": 8,
      "cg": 0.3,
      "kcal": 28,
      "volumeMl": 95,
      "kenwoodSpeed": "Vitesse 1 (épinards, persil, citron vert) puis Vitesse 2 (céleri)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Chlorophylle",
        "Vitamine K",
        "Fer",
        "Vitamine C",
        "Apigénine"
      ],
      "tags": [
        "Shot Express",
        "Vitesse 1 (épinards, persil, citron vert) puis Vitesse 2 (céleri)",
        "Détox Foie & Reins",
        "Régulation glycémie"
      ],
      "ingredients": [
        "1 grosse poignée d'épinards frais",
        "1/2 bouquet de persil plat frais",
        "1/2 citron vert pelé",
        "1 branche de céleri bien ferme"
      ],
      "instructions": "Roulez les feuilles d'épinards et le persil en boule serrée, passez-les en Vitesse 1 avec le citron vert, puis poussez avec la branche de céleri en Vitesse 2."
    },
    {
      "id": "shot-glycemie-cannelle",
      "title": "SHOT INSULINO-ÉQUILIBRE",
      "category": "shots",
      "time": "2 min",
      "description": "Shot fonctionnel pré-repas au citron, gingembre, céleri et cannelle de Ceylan pour réduire le pic glycémique du repas suivant.",
      "ig": "IG 9 (Très basse)",
      "igNumeric": 9,
      "cg": 0.4,
      "kcal": 26,
      "volumeMl": 90,
      "kenwoodSpeed": "Vitesse 1 (citron) puis Vitesse 2 (gingembre, céleri)",
      "bestTime": "15 min avant un repas",
      "vitamins": [
        "Polyphénols de cannelle",
        "Vitamine C",
        "Potassium",
        "Gingérol"
      ],
      "tags": [
        "Shot Express",
        "Vitesse 1 (citron) puis Vitesse 2 (gingembre, céleri)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 citron jaune entier pelé",
        "1 branche de céleri",
        "1,5 cm de gingembre frais",
        "1/4 c. à café de cannelle de Ceylan en poudre"
      ],
      "instructions": "Centrifugez le citron en Vitesse 1 puis le gingembre et le céleri en Vitesse 2. Fouettez la cannelle de Ceylan dans le shot obtenu et buvez 15 minutes avant le repas."
    },
    {
      "id": "rec-001",
      "title": "Élixir Concombre, Épinards & Pomme Granny au Gingembre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et épinards, relevée par pomme granny et gingembre. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.6,
      "kcal": 87,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Silice",
        "Potassium",
        "Fer",
        "Magnésium",
        "Acide alpha-lipoïque"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 pomme verte Granny Smith (IG bas)",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, concombre. Passez ensuite en Vitesse 2 avec : pomme granny, gingembre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-002",
      "title": "Élixir Concombre, Épinards & Citron Jaune au Curcuma & Poivre",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et épinards, relevée par citron jaune et curcuma & poivre. Indice glycémique maîtrisé (IG 11) idéal pour l'équilibre métabolique.",
      "ig": "IG 11 (Très basse)",
      "igNumeric": 11,
      "cg": 0.7,
      "kcal": 47,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Silice",
        "Potassium",
        "Fer",
        "Magnésium",
        "Acide alpha-lipoïque"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 grosse poignée d'épinards frais (50 g)",
        "1/2 citron jaune bio pelé",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, citron jaune, concombre. Passez ensuite en Vitesse 2 avec : curcuma & poivre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-003",
      "title": "Élixir Concombre, Épinards & Pamplemousse Rose au Menthe Fraîche",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et épinards, relevée par pamplemousse rose et menthe fraîche. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Très basse)",
      "igNumeric": 15,
      "cg": 1.8,
      "kcal": 71,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Silice",
        "Potassium",
        "Fer",
        "Magnésium",
        "Acide alpha-lipoïque"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 grosse poignée d'épinards frais (50 g)",
        "1/2 pamplemousse rose pelé à vif",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de épinards autour des morceaux de concombre et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec pamplemousse rose et menthe fraîche. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-004",
      "title": "Élixir Concombre, Épinards & Kiwi Vert au Basilic & Cannelle",
      "category": "green",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et épinards, relevée par kiwi vert et basilic & cannelle. Indice glycémique maîtrisé (IG 14) idéal pour l'équilibre métabolique.",
      "ig": "IG 14 (Basse)",
      "igNumeric": 14,
      "cg": 1.8,
      "kcal": 77,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Silice",
        "Potassium",
        "Fer",
        "Magnésium",
        "Acide alpha-lipoïque"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 kiwi vert mûr épluché",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de épinards autour des morceaux de concombre et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec kiwi vert et basilic & cannelle. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-005",
      "title": "Élixir Concombre, Épinards & Fraises au Persil Plat",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et épinards, relevée par fraises et persil plat. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Très basse)",
      "igNumeric": 15,
      "cg": 1.5,
      "kcal": 61,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Silice",
        "Potassium",
        "Fer",
        "Magnésium",
        "Acide alpha-lipoïque"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de épinards autour des morceaux de concombre et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec fraises et persil plat. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-006",
      "title": "Élixir Concombre, Épinards & Framboises au Gingembre",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et épinards, relevée par framboises et gingembre. Indice glycémique maîtrisé (IG 13) idéal pour l'équilibre métabolique.",
      "ig": "IG 13 (Très basse)",
      "igNumeric": 13,
      "cg": 1.2,
      "kcal": 60,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Silice",
        "Potassium",
        "Fer",
        "Magnésium",
        "Acide alpha-lipoïque"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 poignée de framboises fraîches (70 g)",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, framboises, concombre. Passez ensuite en Vitesse 2 avec : gingembre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-007",
      "title": "Élixir Concombre, Chou Kale & Pomme Granny au Curcuma & Poivre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et chou kale, relevée par pomme granny et curcuma & poivre. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.7,
      "kcal": 93,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Silice",
        "Potassium",
        "Vitamine K",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "2 grandes feuilles de chou Kale bio",
        "1 pomme verte Granny Smith (IG bas)",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, concombre. Passez ensuite en Vitesse 2 avec : pomme granny, curcuma & poivre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-008",
      "title": "Élixir Concombre, Chou Kale & Citron Jaune au Menthe Fraîche",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et chou kale, relevée par citron jaune et menthe fraîche. Indice glycémique maîtrisé (IG 11) idéal pour l'équilibre métabolique.",
      "ig": "IG 11 (Très basse)",
      "igNumeric": 11,
      "cg": 0.8,
      "kcal": 53,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Silice",
        "Potassium",
        "Vitamine K",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "2 grandes feuilles de chou Kale bio",
        "1/2 citron jaune bio pelé",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de chou kale autour des morceaux de concombre et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec citron jaune et menthe fraîche. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-009",
      "title": "Élixir Concombre, Chou Kale & Pamplemousse Rose au Basilic & Cannelle",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et chou kale, relevée par pamplemousse rose et basilic & cannelle. Indice glycémique maîtrisé (IG 13) idéal pour l'équilibre métabolique.",
      "ig": "IG 13 (Basse)",
      "igNumeric": 13,
      "cg": 1.7,
      "kcal": 77,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Silice",
        "Potassium",
        "Vitamine K",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "2 grandes feuilles de chou Kale bio",
        "1/2 pamplemousse rose pelé à vif",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de chou kale autour des morceaux de concombre et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec pamplemousse rose et basilic & cannelle. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-010",
      "title": "Élixir Concombre, Chou Kale & Kiwi Vert au Persil Plat",
      "category": "green",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et chou kale, relevée par kiwi vert et persil plat. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.2,
      "kcal": 83,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Silice",
        "Potassium",
        "Vitamine K",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "2 grandes feuilles de chou Kale bio",
        "1 kiwi vert mûr épluché",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de chou kale autour des morceaux de concombre et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec kiwi vert et persil plat. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-011",
      "title": "Élixir Concombre, Chou Kale & Fraises au Gingembre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et chou kale, relevée par fraises et gingembre. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Très basse)",
      "igNumeric": 15,
      "cg": 1.6,
      "kcal": 67,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Silice",
        "Potassium",
        "Vitamine K",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "2 grandes feuilles de chou Kale bio",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, fraises, concombre. Passez ensuite en Vitesse 2 avec : gingembre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-012",
      "title": "Élixir Concombre, Chou Kale & Framboises au Curcuma & Poivre",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et chou kale, relevée par framboises et curcuma & poivre. Indice glycémique maîtrisé (IG 13) idéal pour l'équilibre métabolique.",
      "ig": "IG 13 (Très basse)",
      "igNumeric": 13,
      "cg": 1.3,
      "kcal": 66,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Silice",
        "Potassium",
        "Vitamine K",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "2 grandes feuilles de chou Kale bio",
        "1 poignée de framboises fraîches (70 g)",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, framboises, concombre. Passez ensuite en Vitesse 2 avec : curcuma & poivre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-013",
      "title": "Élixir Concombre, Blette & Pomme Granny au Menthe Fraîche",
      "category": "green",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et blette, relevée par pomme granny et menthe fraîche. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.7,
      "kcal": 89,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Silice",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium",
        "Vitamine K"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 pomme verte Granny Smith (IG bas)",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, menthe fraîche, concombre. Passez ensuite en Vitesse 2 avec : pomme granny pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-014",
      "title": "Élixir Concombre, Blette & Citron Jaune au Basilic & Cannelle",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et blette, relevée par citron jaune et basilic & cannelle. Indice glycémique maîtrisé (IG 10) idéal pour l'équilibre métabolique.",
      "ig": "IG 10 (Très basse)",
      "igNumeric": 10,
      "cg": 0.7,
      "kcal": 49,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Silice",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium",
        "Vitamine K"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1/2 citron jaune bio pelé",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de blette autour des morceaux de concombre et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec citron jaune et basilic & cannelle. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-015",
      "title": "Élixir Concombre, Blette & Pamplemousse Rose au Persil Plat",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et blette, relevée par pamplemousse rose et persil plat. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Basse)",
      "igNumeric": 15,
      "cg": 1.9,
      "kcal": 73,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Silice",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium",
        "Vitamine K"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1/2 pamplemousse rose pelé à vif",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de blette autour des morceaux de concombre et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec pamplemousse rose et persil plat. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-016",
      "title": "Élixir Concombre, Blette & Kiwi Vert au Gingembre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et blette, relevée par kiwi vert et gingembre. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.2,
      "kcal": 79,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Silice",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium",
        "Vitamine K"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 kiwi vert mûr épluché",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, kiwi vert, concombre. Passez ensuite en Vitesse 2 avec : gingembre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-017",
      "title": "Élixir Concombre, Blette & Fraises au Curcuma & Poivre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et blette, relevée par fraises et curcuma & poivre. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Très basse)",
      "igNumeric": 15,
      "cg": 1.6,
      "kcal": 63,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Silice",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium",
        "Vitamine K"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, fraises, concombre. Passez ensuite en Vitesse 2 avec : curcuma & poivre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-018",
      "title": "Élixir Concombre, Blette & Framboises au Menthe Fraîche",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et blette, relevée par framboises et menthe fraîche. Indice glycémique maîtrisé (IG 13) idéal pour l'équilibre métabolique.",
      "ig": "IG 13 (Très basse)",
      "igNumeric": 13,
      "cg": 1.3,
      "kcal": 62,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Silice",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium",
        "Vitamine K"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 poignée de framboises fraîches (70 g)",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de blette autour des morceaux de concombre et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec framboises et menthe fraîche. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-019",
      "title": "Élixir Concombre, Cresson & Pomme Granny au Basilic & Cannelle",
      "category": "green",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et cresson, relevée par pomme granny et basilic & cannelle. Indice glycémique maîtrisé (IG 14) idéal pour l'équilibre métabolique.",
      "ig": "IG 14 (Basse)",
      "igNumeric": 14,
      "cg": 2.2,
      "kcal": 86,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Silice",
        "Potassium",
        "Fer",
        "Vitamine C",
        "Glucosinolates"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 belle poignée de cresson de fontaine",
        "1 pomme verte Granny Smith (IG bas)",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, basilic & cannelle, concombre. Passez ensuite en Vitesse 2 avec : pomme granny pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-020",
      "title": "Élixir Concombre, Cresson & Citron Jaune au Persil Plat",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et cresson, relevée par citron jaune et persil plat. Indice glycémique maîtrisé (IG 11) idéal pour l'équilibre métabolique.",
      "ig": "IG 11 (Très basse)",
      "igNumeric": 11,
      "cg": 0.7,
      "kcal": 46,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Silice",
        "Potassium",
        "Fer",
        "Vitamine C",
        "Glucosinolates"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 belle poignée de cresson de fontaine",
        "1/2 citron jaune bio pelé",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de cresson autour des morceaux de concombre et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec citron jaune et persil plat. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-021",
      "title": "Élixir Concombre, Cresson & Pamplemousse Rose au Gingembre",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et cresson, relevée par pamplemousse rose et gingembre. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Très basse)",
      "igNumeric": 15,
      "cg": 1.8,
      "kcal": 70,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Silice",
        "Potassium",
        "Fer",
        "Vitamine C",
        "Glucosinolates"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 belle poignée de cresson de fontaine",
        "1/2 pamplemousse rose pelé à vif",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, pamplemousse rose, concombre. Passez ensuite en Vitesse 2 avec : gingembre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-022",
      "title": "Élixir Concombre, Cresson & Kiwi Vert au Curcuma & Poivre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et cresson, relevée par kiwi vert et curcuma & poivre. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.1,
      "kcal": 76,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Silice",
        "Potassium",
        "Fer",
        "Vitamine C",
        "Glucosinolates"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 belle poignée de cresson de fontaine",
        "1 kiwi vert mûr épluché",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, kiwi vert, concombre. Passez ensuite en Vitesse 2 avec : curcuma & poivre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-023",
      "title": "Élixir Concombre, Cresson & Fraises au Menthe Fraîche",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et cresson, relevée par fraises et menthe fraîche. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Très basse)",
      "igNumeric": 15,
      "cg": 1.5,
      "kcal": 60,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Silice",
        "Potassium",
        "Fer",
        "Vitamine C",
        "Glucosinolates"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 belle poignée de cresson de fontaine",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de cresson autour des morceaux de concombre et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec fraises et menthe fraîche. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-024",
      "title": "Élixir Concombre, Cresson & Framboises au Basilic & Cannelle",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et cresson, relevée par framboises et basilic & cannelle. Indice glycémique maîtrisé (IG 11) idéal pour l'équilibre métabolique.",
      "ig": "IG 11 (Très basse)",
      "igNumeric": 11,
      "cg": 1.0,
      "kcal": 59,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Silice",
        "Potassium",
        "Fer",
        "Vitamine C",
        "Glucosinolates"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 belle poignée de cresson de fontaine",
        "1 poignée de framboises fraîches (70 g)",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de cresson autour des morceaux de concombre et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec framboises et basilic & cannelle. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-025",
      "title": "Élixir Concombre, Mâche & Pomme Granny au Persil Plat",
      "category": "green",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et mâche, relevée par pomme granny et persil plat. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.6,
      "kcal": 87,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Silice",
        "Potassium",
        "Oméga-3 ALA",
        "Vitamine B9",
        "Bêta-carotène"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 grosse poignée de mâche fraîche",
        "1 pomme verte Granny Smith (IG bas)",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, persil plat, concombre. Passez ensuite en Vitesse 2 avec : pomme granny pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-026",
      "title": "Élixir Concombre, Mâche & Citron Jaune au Gingembre",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et mâche, relevée par citron jaune et gingembre. Indice glycémique maîtrisé (IG 11) idéal pour l'équilibre métabolique.",
      "ig": "IG 11 (Très basse)",
      "igNumeric": 11,
      "cg": 0.7,
      "kcal": 47,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Silice",
        "Potassium",
        "Oméga-3 ALA",
        "Vitamine B9",
        "Bêta-carotène"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 grosse poignée de mâche fraîche",
        "1/2 citron jaune bio pelé",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, citron jaune, concombre. Passez ensuite en Vitesse 2 avec : gingembre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-027",
      "title": "Élixir Concombre, Mâche & Pamplemousse Rose au Curcuma & Poivre",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et mâche, relevée par pamplemousse rose et curcuma & poivre. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Très basse)",
      "igNumeric": 15,
      "cg": 1.8,
      "kcal": 71,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Silice",
        "Potassium",
        "Oméga-3 ALA",
        "Vitamine B9",
        "Bêta-carotène"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 grosse poignée de mâche fraîche",
        "1/2 pamplemousse rose pelé à vif",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, pamplemousse rose, concombre. Passez ensuite en Vitesse 2 avec : curcuma & poivre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-028",
      "title": "Élixir Concombre, Mâche & Kiwi Vert au Menthe Fraîche",
      "category": "green",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et mâche, relevée par kiwi vert et menthe fraîche. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.1,
      "kcal": 77,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Silice",
        "Potassium",
        "Oméga-3 ALA",
        "Vitamine B9",
        "Bêta-carotène"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 grosse poignée de mâche fraîche",
        "1 kiwi vert mûr épluché",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de mâche autour des morceaux de concombre et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec kiwi vert et menthe fraîche. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-029",
      "title": "Élixir Concombre, Mâche & Fraises au Basilic & Cannelle",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et mâche, relevée par fraises et basilic & cannelle. Indice glycémique maîtrisé (IG 13) idéal pour l'équilibre métabolique.",
      "ig": "IG 13 (Très basse)",
      "igNumeric": 13,
      "cg": 1.3,
      "kcal": 61,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Silice",
        "Potassium",
        "Oméga-3 ALA",
        "Vitamine B9",
        "Bêta-carotène"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 grosse poignée de mâche fraîche",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de mâche autour des morceaux de concombre et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec fraises et basilic & cannelle. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-030",
      "title": "Élixir Concombre, Mâche & Framboises au Persil Plat",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance hydratant de concombre et mâche, relevée par framboises et persil plat. Indice glycémique maîtrisé (IG 13) idéal pour l'équilibre métabolique.",
      "ig": "IG 13 (Très basse)",
      "igNumeric": 13,
      "cg": 1.2,
      "kcal": 60,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Silice",
        "Potassium",
        "Oméga-3 ALA",
        "Vitamine B9",
        "Bêta-carotène"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Hydratation profonde"
      ],
      "ingredients": [
        "1/2 concombre bio (avec la peau)",
        "1 grosse poignée de mâche fraîche",
        "1 poignée de framboises fraîches (70 g)",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de mâche autour des morceaux de concombre et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec framboises et persil plat. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-031",
      "title": "Élixir Céleri, Épinards & Pomme Granny au Curcuma & Poivre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et épinards, relevée par pomme granny et curcuma & poivre. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.6,
      "kcal": 85,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 pomme verte Granny Smith (IG bas)",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards. Passez ensuite en Vitesse 2 avec : pomme granny, curcuma & poivre, céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-032",
      "title": "Élixir Céleri, Épinards & Citron Jaune au Menthe Fraîche",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et épinards, relevée par citron jaune et menthe fraîche. Indice glycémique maîtrisé (IG 11) idéal pour l'équilibre métabolique.",
      "ig": "IG 11 (Très basse)",
      "igNumeric": 11,
      "cg": 0.7,
      "kcal": 45,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 grosse poignée d'épinards frais (50 g)",
        "1/2 citron jaune bio pelé",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, citron jaune, menthe fraîche. Passez ensuite en Vitesse 2 avec : céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-033",
      "title": "Élixir Céleri, Épinards & Pamplemousse Rose au Basilic & Cannelle",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et épinards, relevée par pamplemousse rose et basilic & cannelle. Indice glycémique maîtrisé (IG 13) idéal pour l'équilibre métabolique.",
      "ig": "IG 13 (Très basse)",
      "igNumeric": 13,
      "cg": 1.6,
      "kcal": 69,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 grosse poignée d'épinards frais (50 g)",
        "1/2 pamplemousse rose pelé à vif",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, pamplemousse rose, basilic & cannelle. Passez ensuite en Vitesse 2 avec : céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-034",
      "title": "Élixir Céleri, Épinards & Kiwi Vert au Persil Plat",
      "category": "green",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et épinards, relevée par kiwi vert et persil plat. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.1,
      "kcal": 75,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 kiwi vert mûr épluché",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, kiwi vert, persil plat. Passez ensuite en Vitesse 2 avec : céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-035",
      "title": "Élixir Céleri, Épinards & Fraises au Gingembre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et épinards, relevée par fraises et gingembre. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Très basse)",
      "igNumeric": 15,
      "cg": 1.5,
      "kcal": 59,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, fraises. Passez ensuite en Vitesse 2 avec : gingembre, céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-036",
      "title": "Élixir Céleri, Épinards & Framboises au Curcuma & Poivre",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et épinards, relevée par framboises et curcuma & poivre. Indice glycémique maîtrisé (IG 13) idéal pour l'équilibre métabolique.",
      "ig": "IG 13 (Très basse)",
      "igNumeric": 13,
      "cg": 1.2,
      "kcal": 58,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 poignée de framboises fraîches (70 g)",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, framboises. Passez ensuite en Vitesse 2 avec : curcuma & poivre, céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-037",
      "title": "Élixir Céleri, Chou Kale & Pomme Granny au Menthe Fraîche",
      "category": "green",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et chou kale, relevée par pomme granny et menthe fraîche. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.7,
      "kcal": 91,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "2 grandes feuilles de chou Kale bio",
        "1 pomme verte Granny Smith (IG bas)",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, menthe fraîche. Passez ensuite en Vitesse 2 avec : pomme granny, céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-038",
      "title": "Élixir Céleri, Chou Kale & Citron Jaune au Basilic & Cannelle",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et chou kale, relevée par citron jaune et basilic & cannelle. Indice glycémique maîtrisé (IG 10) idéal pour l'équilibre métabolique.",
      "ig": "IG 10 (Très basse)",
      "igNumeric": 10,
      "cg": 0.7,
      "kcal": 51,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "2 grandes feuilles de chou Kale bio",
        "1/2 citron jaune bio pelé",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, citron jaune, basilic & cannelle. Passez ensuite en Vitesse 2 avec : céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-039",
      "title": "Élixir Céleri, Chou Kale & Pamplemousse Rose au Persil Plat",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et chou kale, relevée par pamplemousse rose et persil plat. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Basse)",
      "igNumeric": 15,
      "cg": 1.9,
      "kcal": 75,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "2 grandes feuilles de chou Kale bio",
        "1/2 pamplemousse rose pelé à vif",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, pamplemousse rose, persil plat. Passez ensuite en Vitesse 2 avec : céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-040",
      "title": "Élixir Céleri, Chou Kale & Kiwi Vert au Gingembre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et chou kale, relevée par kiwi vert et gingembre. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.2,
      "kcal": 81,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "2 grandes feuilles de chou Kale bio",
        "1 kiwi vert mûr épluché",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, kiwi vert. Passez ensuite en Vitesse 2 avec : gingembre, céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-041",
      "title": "Élixir Céleri, Chou Kale & Fraises au Curcuma & Poivre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et chou kale, relevée par fraises et curcuma & poivre. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Très basse)",
      "igNumeric": 15,
      "cg": 1.6,
      "kcal": 65,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "2 grandes feuilles de chou Kale bio",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, fraises. Passez ensuite en Vitesse 2 avec : curcuma & poivre, céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-042",
      "title": "Élixir Céleri, Chou Kale & Framboises au Menthe Fraîche",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et chou kale, relevée par framboises et menthe fraîche. Indice glycémique maîtrisé (IG 13) idéal pour l'équilibre métabolique.",
      "ig": "IG 13 (Très basse)",
      "igNumeric": 13,
      "cg": 1.3,
      "kcal": 64,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "2 grandes feuilles de chou Kale bio",
        "1 poignée de framboises fraîches (70 g)",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, framboises, menthe fraîche. Passez ensuite en Vitesse 2 avec : céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-043",
      "title": "Élixir Céleri, Blette & Pomme Granny au Basilic & Cannelle",
      "category": "green",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et blette, relevée par pomme granny et basilic & cannelle. Indice glycémique maîtrisé (IG 14) idéal pour l'équilibre métabolique.",
      "ig": "IG 14 (Basse)",
      "igNumeric": 14,
      "cg": 2.4,
      "kcal": 87,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 pomme verte Granny Smith (IG bas)",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, basilic & cannelle. Passez ensuite en Vitesse 2 avec : pomme granny, céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-044",
      "title": "Élixir Céleri, Blette & Citron Jaune au Persil Plat",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et blette, relevée par citron jaune et persil plat. Indice glycémique maîtrisé (IG 11) idéal pour l'équilibre métabolique.",
      "ig": "IG 11 (Très basse)",
      "igNumeric": 11,
      "cg": 0.8,
      "kcal": 47,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1/2 citron jaune bio pelé",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, citron jaune, persil plat. Passez ensuite en Vitesse 2 avec : céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-045",
      "title": "Élixir Céleri, Blette & Pamplemousse Rose au Gingembre",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et blette, relevée par pamplemousse rose et gingembre. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Basse)",
      "igNumeric": 15,
      "cg": 1.9,
      "kcal": 71,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1/2 pamplemousse rose pelé à vif",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, pamplemousse rose. Passez ensuite en Vitesse 2 avec : gingembre, céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-046",
      "title": "Élixir Céleri, Blette & Kiwi Vert au Curcuma & Poivre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et blette, relevée par kiwi vert et curcuma & poivre. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.2,
      "kcal": 77,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 kiwi vert mûr épluché",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, kiwi vert. Passez ensuite en Vitesse 2 avec : curcuma & poivre, céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-047",
      "title": "Élixir Céleri, Blette & Fraises au Menthe Fraîche",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et blette, relevée par fraises et menthe fraîche. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Très basse)",
      "igNumeric": 15,
      "cg": 1.6,
      "kcal": 61,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, fraises, menthe fraîche. Passez ensuite en Vitesse 2 avec : céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-048",
      "title": "Élixir Céleri, Blette & Framboises au Basilic & Cannelle",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et blette, relevée par framboises et basilic & cannelle. Indice glycémique maîtrisé (IG 11) idéal pour l'équilibre métabolique.",
      "ig": "IG 11 (Très basse)",
      "igNumeric": 11,
      "cg": 1.1,
      "kcal": 60,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 poignée de framboises fraîches (70 g)",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, framboises, basilic & cannelle. Passez ensuite en Vitesse 2 avec : céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-049",
      "title": "Élixir Céleri, Cresson & Pomme Granny au Persil Plat",
      "category": "green",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et cresson, relevée par pomme granny et persil plat. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.6,
      "kcal": 84,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Fer",
        "Vitamine C"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 belle poignée de cresson de fontaine",
        "1 pomme verte Granny Smith (IG bas)",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, persil plat. Passez ensuite en Vitesse 2 avec : pomme granny, céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-050",
      "title": "Élixir Céleri, Cresson & Citron Jaune au Gingembre",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et cresson, relevée par citron jaune et gingembre. Indice glycémique maîtrisé (IG 11) idéal pour l'équilibre métabolique.",
      "ig": "IG 11 (Très basse)",
      "igNumeric": 11,
      "cg": 0.7,
      "kcal": 44,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Fer",
        "Vitamine C"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 belle poignée de cresson de fontaine",
        "1/2 citron jaune bio pelé",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, citron jaune. Passez ensuite en Vitesse 2 avec : gingembre, céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-051",
      "title": "Élixir Céleri, Cresson & Pamplemousse Rose au Curcuma & Poivre",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et cresson, relevée par pamplemousse rose et curcuma & poivre. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Très basse)",
      "igNumeric": 15,
      "cg": 1.8,
      "kcal": 68,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Fer",
        "Vitamine C"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 belle poignée de cresson de fontaine",
        "1/2 pamplemousse rose pelé à vif",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, pamplemousse rose. Passez ensuite en Vitesse 2 avec : curcuma & poivre, céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-052",
      "title": "Élixir Céleri, Cresson & Kiwi Vert au Menthe Fraîche",
      "category": "green",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et cresson, relevée par kiwi vert et menthe fraîche. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.1,
      "kcal": 74,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Fer",
        "Vitamine C"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 belle poignée de cresson de fontaine",
        "1 kiwi vert mûr épluché",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, kiwi vert, menthe fraîche. Passez ensuite en Vitesse 2 avec : céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-053",
      "title": "Élixir Céleri, Cresson & Fraises au Basilic & Cannelle",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et cresson, relevée par fraises et basilic & cannelle. Indice glycémique maîtrisé (IG 13) idéal pour l'équilibre métabolique.",
      "ig": "IG 13 (Très basse)",
      "igNumeric": 13,
      "cg": 1.3,
      "kcal": 58,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Fer",
        "Vitamine C"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 belle poignée de cresson de fontaine",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, fraises, basilic & cannelle. Passez ensuite en Vitesse 2 avec : céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-054",
      "title": "Élixir Céleri, Cresson & Framboises au Persil Plat",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et cresson, relevée par framboises et persil plat. Indice glycémique maîtrisé (IG 13) idéal pour l'équilibre métabolique.",
      "ig": "IG 13 (Très basse)",
      "igNumeric": 13,
      "cg": 1.2,
      "kcal": 57,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Fer",
        "Vitamine C"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 belle poignée de cresson de fontaine",
        "1 poignée de framboises fraîches (70 g)",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, framboises, persil plat. Passez ensuite en Vitesse 2 avec : céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-055",
      "title": "Élixir Céleri, Mâche & Pomme Granny au Gingembre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et mâche, relevée par pomme granny et gingembre. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.6,
      "kcal": 85,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Oméga-3 ALA",
        "Vitamine B9"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 grosse poignée de mâche fraîche",
        "1 pomme verte Granny Smith (IG bas)",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche. Passez ensuite en Vitesse 2 avec : pomme granny, gingembre, céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-056",
      "title": "Élixir Céleri, Mâche & Citron Jaune au Curcuma & Poivre",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et mâche, relevée par citron jaune et curcuma & poivre. Indice glycémique maîtrisé (IG 11) idéal pour l'équilibre métabolique.",
      "ig": "IG 11 (Très basse)",
      "igNumeric": 11,
      "cg": 0.7,
      "kcal": 45,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Oméga-3 ALA",
        "Vitamine B9"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 grosse poignée de mâche fraîche",
        "1/2 citron jaune bio pelé",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, citron jaune. Passez ensuite en Vitesse 2 avec : curcuma & poivre, céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-057",
      "title": "Élixir Céleri, Mâche & Pamplemousse Rose au Menthe Fraîche",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et mâche, relevée par pamplemousse rose et menthe fraîche. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Très basse)",
      "igNumeric": 15,
      "cg": 1.8,
      "kcal": 69,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Oméga-3 ALA",
        "Vitamine B9"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 grosse poignée de mâche fraîche",
        "1/2 pamplemousse rose pelé à vif",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, pamplemousse rose, menthe fraîche. Passez ensuite en Vitesse 2 avec : céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-058",
      "title": "Élixir Céleri, Mâche & Kiwi Vert au Basilic & Cannelle",
      "category": "green",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et mâche, relevée par kiwi vert et basilic & cannelle. Indice glycémique maîtrisé (IG 14) idéal pour l'équilibre métabolique.",
      "ig": "IG 14 (Basse)",
      "igNumeric": 14,
      "cg": 1.8,
      "kcal": 75,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Oméga-3 ALA",
        "Vitamine B9"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 grosse poignée de mâche fraîche",
        "1 kiwi vert mûr épluché",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, kiwi vert, basilic & cannelle. Passez ensuite en Vitesse 2 avec : céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-059",
      "title": "Élixir Céleri, Mâche & Fraises au Persil Plat",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et mâche, relevée par fraises et persil plat. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Très basse)",
      "igNumeric": 15,
      "cg": 1.5,
      "kcal": 59,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Oméga-3 ALA",
        "Vitamine B9"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 grosse poignée de mâche fraîche",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, fraises, persil plat. Passez ensuite en Vitesse 2 avec : céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-060",
      "title": "Élixir Céleri, Mâche & Framboises au Gingembre",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance alcalinisant de céleri et mâche, relevée par framboises et gingembre. Indice glycémique maîtrisé (IG 13) idéal pour l'équilibre métabolique.",
      "ig": "IG 13 (Très basse)",
      "igNumeric": 13,
      "cg": 1.2,
      "kcal": 58,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Vitamine K",
        "Apigénine",
        "Potassium",
        "Oméga-3 ALA",
        "Vitamine B9"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Détox Foie & Reins"
      ],
      "ingredients": [
        "2 belles branches de céleri frais",
        "1 grosse poignée de mâche fraîche",
        "1 poignée de framboises fraîches (70 g)",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, framboises. Passez ensuite en Vitesse 2 avec : gingembre, céleri pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-061",
      "title": "Élixir Courgette, Épinards & Pomme Granny au Menthe Fraîche",
      "category": "green",
      "time": "4 min",
      "description": "Alliance doux de courgette et épinards, relevée par pomme granny et menthe fraîche. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.9,
      "kcal": 91,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 pomme verte Granny Smith (IG bas)",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, menthe fraîche, courgette. Passez ensuite en Vitesse 2 avec : pomme granny pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-062",
      "title": "Élixir Courgette, Épinards & Citron Jaune au Basilic & Cannelle",
      "category": "green",
      "time": "4 min",
      "description": "Alliance doux de courgette et épinards, relevée par citron jaune et basilic & cannelle. Indice glycémique maîtrisé (IG 10) idéal pour l'équilibre métabolique.",
      "ig": "IG 10 (Très basse)",
      "igNumeric": 10,
      "cg": 0.7,
      "kcal": 51,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 grosse poignée d'épinards frais (50 g)",
        "1/2 citron jaune bio pelé",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de épinards autour des morceaux de courgette et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec citron jaune et basilic & cannelle. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-063",
      "title": "Élixir Courgette, Épinards & Pamplemousse Rose au Persil Plat",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance doux de courgette et épinards, relevée par pamplemousse rose et persil plat. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.1,
      "kcal": 75,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 grosse poignée d'épinards frais (50 g)",
        "1/2 pamplemousse rose pelé à vif",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de épinards autour des morceaux de courgette et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec pamplemousse rose et persil plat. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-064",
      "title": "Élixir Courgette, Épinards & Kiwi Vert au Gingembre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance doux de courgette et épinards, relevée par kiwi vert et gingembre. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.4,
      "kcal": 81,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 kiwi vert mûr épluché",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, kiwi vert, courgette. Passez ensuite en Vitesse 2 avec : gingembre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-065",
      "title": "Élixir Courgette, Épinards & Fraises au Curcuma & Poivre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance doux de courgette et épinards, relevée par fraises et curcuma & poivre. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Très basse)",
      "igNumeric": 16,
      "cg": 1.8,
      "kcal": 65,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, fraises, courgette. Passez ensuite en Vitesse 2 avec : curcuma & poivre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-066",
      "title": "Élixir Courgette, Épinards & Framboises au Menthe Fraîche",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance doux de courgette et épinards, relevée par framboises et menthe fraîche. Indice glycémique maîtrisé (IG 14) idéal pour l'équilibre métabolique.",
      "ig": "IG 14 (Très basse)",
      "igNumeric": 14,
      "cg": 1.4,
      "kcal": 64,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 poignée de framboises fraîches (70 g)",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de épinards autour des morceaux de courgette et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec framboises et menthe fraîche. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-067",
      "title": "Élixir Courgette, Chou Kale & Pomme Granny au Basilic & Cannelle",
      "category": "green",
      "time": "4 min",
      "description": "Alliance doux de courgette et chou kale, relevée par pomme granny et basilic & cannelle. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Basse)",
      "igNumeric": 15,
      "cg": 2.7,
      "kcal": 97,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Vitamine K",
        "Calcium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "2 grandes feuilles de chou Kale bio",
        "1 pomme verte Granny Smith (IG bas)",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, basilic & cannelle, courgette. Passez ensuite en Vitesse 2 avec : pomme granny pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-068",
      "title": "Élixir Courgette, Chou Kale & Citron Jaune au Persil Plat",
      "category": "green",
      "time": "4 min",
      "description": "Alliance doux de courgette et chou kale, relevée par citron jaune et persil plat. Indice glycémique maîtrisé (IG 12) idéal pour l'équilibre métabolique.",
      "ig": "IG 12 (Très basse)",
      "igNumeric": 12,
      "cg": 1.0,
      "kcal": 57,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Vitamine K",
        "Calcium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "2 grandes feuilles de chou Kale bio",
        "1/2 citron jaune bio pelé",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de chou kale autour des morceaux de courgette et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec citron jaune et persil plat. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-069",
      "title": "Élixir Courgette, Chou Kale & Pamplemousse Rose au Gingembre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance doux de courgette et chou kale, relevée par pamplemousse rose et gingembre. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.2,
      "kcal": 81,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Vitamine K",
        "Calcium"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "2 grandes feuilles de chou Kale bio",
        "1/2 pamplemousse rose pelé à vif",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, pamplemousse rose, courgette. Passez ensuite en Vitesse 2 avec : gingembre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-070",
      "title": "Élixir Courgette, Chou Kale & Kiwi Vert au Curcuma & Poivre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance doux de courgette et chou kale, relevée par kiwi vert et curcuma & poivre. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.5,
      "kcal": 87,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Vitamine K",
        "Calcium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "2 grandes feuilles de chou Kale bio",
        "1 kiwi vert mûr épluché",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, kiwi vert, courgette. Passez ensuite en Vitesse 2 avec : curcuma & poivre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-071",
      "title": "Élixir Courgette, Chou Kale & Fraises au Menthe Fraîche",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance doux de courgette et chou kale, relevée par fraises et menthe fraîche. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Très basse)",
      "igNumeric": 16,
      "cg": 1.9,
      "kcal": 71,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Vitamine K",
        "Calcium"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "2 grandes feuilles de chou Kale bio",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de chou kale autour des morceaux de courgette et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec fraises et menthe fraîche. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-072",
      "title": "Élixir Courgette, Chou Kale & Framboises au Basilic & Cannelle",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance doux de courgette et chou kale, relevée par framboises et basilic & cannelle. Indice glycémique maîtrisé (IG 12) idéal pour l'équilibre métabolique.",
      "ig": "IG 12 (Très basse)",
      "igNumeric": 12,
      "cg": 1.3,
      "kcal": 70,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Vitamine K",
        "Calcium"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "2 grandes feuilles de chou Kale bio",
        "1 poignée de framboises fraîches (70 g)",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de chou kale autour des morceaux de courgette et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec framboises et basilic & cannelle. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-073",
      "title": "Élixir Courgette, Blette & Pomme Granny au Persil Plat",
      "category": "green",
      "time": "4 min",
      "description": "Alliance doux de courgette et blette, relevée par pomme granny et persil plat. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 3.1,
      "kcal": 93,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 pomme verte Granny Smith (IG bas)",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, persil plat, courgette. Passez ensuite en Vitesse 2 avec : pomme granny pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-074",
      "title": "Élixir Courgette, Blette & Citron Jaune au Gingembre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance doux de courgette et blette, relevée par citron jaune et gingembre. Indice glycémique maîtrisé (IG 12) idéal pour l'équilibre métabolique.",
      "ig": "IG 12 (Très basse)",
      "igNumeric": 12,
      "cg": 1.0,
      "kcal": 53,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1/2 citron jaune bio pelé",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, citron jaune, courgette. Passez ensuite en Vitesse 2 avec : gingembre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-075",
      "title": "Élixir Courgette, Blette & Pamplemousse Rose au Curcuma & Poivre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance doux de courgette et blette, relevée par pamplemousse rose et curcuma & poivre. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.2,
      "kcal": 77,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1/2 pamplemousse rose pelé à vif",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, pamplemousse rose, courgette. Passez ensuite en Vitesse 2 avec : curcuma & poivre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-076",
      "title": "Élixir Courgette, Blette & Kiwi Vert au Menthe Fraîche",
      "category": "green",
      "time": "4 min",
      "description": "Alliance doux de courgette et blette, relevée par kiwi vert et menthe fraîche. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.5,
      "kcal": 83,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 kiwi vert mûr épluché",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de blette autour des morceaux de courgette et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec kiwi vert et menthe fraîche. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-077",
      "title": "Élixir Courgette, Blette & Fraises au Basilic & Cannelle",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance doux de courgette et blette, relevée par fraises et basilic & cannelle. Indice glycémique maîtrisé (IG 14) idéal pour l'équilibre métabolique.",
      "ig": "IG 14 (Très basse)",
      "igNumeric": 14,
      "cg": 1.7,
      "kcal": 67,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de blette autour des morceaux de courgette et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec fraises et basilic & cannelle. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-078",
      "title": "Élixir Courgette, Blette & Framboises au Persil Plat",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance doux de courgette et blette, relevée par framboises et persil plat. Indice glycémique maîtrisé (IG 14) idéal pour l'équilibre métabolique.",
      "ig": "IG 14 (Très basse)",
      "igNumeric": 14,
      "cg": 1.5,
      "kcal": 66,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 poignée de framboises fraîches (70 g)",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de blette autour des morceaux de courgette et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec framboises et persil plat. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-079",
      "title": "Élixir Courgette, Cresson & Pomme Granny au Gingembre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance doux de courgette et cresson, relevée par pomme granny et gingembre. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.9,
      "kcal": 90,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Fer",
        "Vitamine C"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 belle poignée de cresson de fontaine",
        "1 pomme verte Granny Smith (IG bas)",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, courgette. Passez ensuite en Vitesse 2 avec : pomme granny, gingembre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-080",
      "title": "Élixir Courgette, Cresson & Citron Jaune au Curcuma & Poivre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance doux de courgette et cresson, relevée par citron jaune et curcuma & poivre. Indice glycémique maîtrisé (IG 12) idéal pour l'équilibre métabolique.",
      "ig": "IG 12 (Très basse)",
      "igNumeric": 12,
      "cg": 0.8,
      "kcal": 50,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Fer",
        "Vitamine C"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 belle poignée de cresson de fontaine",
        "1/2 citron jaune bio pelé",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, citron jaune, courgette. Passez ensuite en Vitesse 2 avec : curcuma & poivre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-081",
      "title": "Élixir Courgette, Cresson & Pamplemousse Rose au Menthe Fraîche",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance doux de courgette et cresson, relevée par pamplemousse rose et menthe fraîche. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.1,
      "kcal": 74,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Fer",
        "Vitamine C"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 belle poignée de cresson de fontaine",
        "1/2 pamplemousse rose pelé à vif",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de cresson autour des morceaux de courgette et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec pamplemousse rose et menthe fraîche. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-082",
      "title": "Élixir Courgette, Cresson & Kiwi Vert au Basilic & Cannelle",
      "category": "green",
      "time": "4 min",
      "description": "Alliance doux de courgette et cresson, relevée par kiwi vert et basilic & cannelle. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Basse)",
      "igNumeric": 15,
      "cg": 2.1,
      "kcal": 80,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Fer",
        "Vitamine C"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 belle poignée de cresson de fontaine",
        "1 kiwi vert mûr épluché",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de cresson autour des morceaux de courgette et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec kiwi vert et basilic & cannelle. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-083",
      "title": "Élixir Courgette, Cresson & Fraises au Persil Plat",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance doux de courgette et cresson, relevée par fraises et persil plat. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Très basse)",
      "igNumeric": 16,
      "cg": 1.8,
      "kcal": 64,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Fer",
        "Vitamine C"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 belle poignée de cresson de fontaine",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de cresson autour des morceaux de courgette et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec fraises et persil plat. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-084",
      "title": "Élixir Courgette, Cresson & Framboises au Gingembre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance doux de courgette et cresson, relevée par framboises et gingembre. Indice glycémique maîtrisé (IG 14) idéal pour l'équilibre métabolique.",
      "ig": "IG 14 (Très basse)",
      "igNumeric": 14,
      "cg": 1.4,
      "kcal": 63,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Fer",
        "Vitamine C"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 belle poignée de cresson de fontaine",
        "1 poignée de framboises fraîches (70 g)",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, framboises, courgette. Passez ensuite en Vitesse 2 avec : gingembre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-085",
      "title": "Élixir Courgette, Mâche & Pomme Granny au Curcuma & Poivre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance doux de courgette et mâche, relevée par pomme granny et curcuma & poivre. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.9,
      "kcal": 91,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Oméga-3 ALA",
        "Bêta-carotène"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 grosse poignée de mâche fraîche",
        "1 pomme verte Granny Smith (IG bas)",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, courgette. Passez ensuite en Vitesse 2 avec : pomme granny, curcuma & poivre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-086",
      "title": "Élixir Courgette, Mâche & Citron Jaune au Menthe Fraîche",
      "category": "green",
      "time": "4 min",
      "description": "Alliance doux de courgette et mâche, relevée par citron jaune et menthe fraîche. Indice glycémique maîtrisé (IG 12) idéal pour l'équilibre métabolique.",
      "ig": "IG 12 (Très basse)",
      "igNumeric": 12,
      "cg": 0.8,
      "kcal": 51,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Oméga-3 ALA",
        "Bêta-carotène"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 grosse poignée de mâche fraîche",
        "1/2 citron jaune bio pelé",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de mâche autour des morceaux de courgette et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec citron jaune et menthe fraîche. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-087",
      "title": "Élixir Courgette, Mâche & Pamplemousse Rose au Basilic & Cannelle",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance doux de courgette et mâche, relevée par pamplemousse rose et basilic & cannelle. Indice glycémique maîtrisé (IG 14) idéal pour l'équilibre métabolique.",
      "ig": "IG 14 (Basse)",
      "igNumeric": 14,
      "cg": 1.8,
      "kcal": 75,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Oméga-3 ALA",
        "Bêta-carotène"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 grosse poignée de mâche fraîche",
        "1/2 pamplemousse rose pelé à vif",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de mâche autour des morceaux de courgette et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec pamplemousse rose et basilic & cannelle. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-088",
      "title": "Élixir Courgette, Mâche & Kiwi Vert au Persil Plat",
      "category": "green",
      "time": "4 min",
      "description": "Alliance doux de courgette et mâche, relevée par kiwi vert et persil plat. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.4,
      "kcal": 81,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (extraction douce)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Oméga-3 ALA",
        "Bêta-carotène"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (extraction douce)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 grosse poignée de mâche fraîche",
        "1 kiwi vert mûr épluché",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez tous les ingrédients. Enroulez les feuilles de mâche autour des morceaux de courgette et passez l'ensemble en Vitesse 1 dans la Kenwood AT641 avec kiwi vert et persil plat. Remuez et consommez aussitôt."
    },
    {
      "id": "rec-089",
      "title": "Élixir Courgette, Mâche & Fraises au Gingembre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance doux de courgette et mâche, relevée par fraises et gingembre. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Très basse)",
      "igNumeric": 16,
      "cg": 1.8,
      "kcal": 65,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Oméga-3 ALA",
        "Bêta-carotène"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 grosse poignée de mâche fraîche",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, fraises, courgette. Passez ensuite en Vitesse 2 avec : gingembre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-090",
      "title": "Élixir Courgette, Mâche & Framboises au Curcuma & Poivre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance doux de courgette et mâche, relevée par framboises et curcuma & poivre. Indice glycémique maîtrisé (IG 14) idéal pour l'équilibre métabolique.",
      "ig": "IG 14 (Très basse)",
      "igNumeric": 14,
      "cg": 1.4,
      "kcal": 64,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Vitamine B9",
        "Lutéine",
        "Potassium",
        "Oméga-3 ALA",
        "Bêta-carotène"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1 petite courgette crue bio",
        "1 grosse poignée de mâche fraîche",
        "1 poignée de framboises fraîches (70 g)",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, framboises, courgette. Passez ensuite en Vitesse 2 avec : curcuma & poivre pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-091",
      "title": "Élixir Fenouil, Épinards & Pomme Granny au Basilic & Cannelle",
      "category": "green",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et épinards, relevée par pomme granny et basilic & cannelle. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Basse)",
      "igNumeric": 15,
      "cg": 2.5,
      "kcal": 93,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 pomme verte Granny Smith (IG bas)",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, basilic & cannelle. Passez ensuite en Vitesse 2 avec : pomme granny, fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-092",
      "title": "Élixir Fenouil, Épinards & Citron Jaune au Persil Plat",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et épinards, relevée par citron jaune et persil plat. Indice glycémique maîtrisé (IG 12) idéal pour l'équilibre métabolique.",
      "ig": "IG 12 (Très basse)",
      "igNumeric": 12,
      "cg": 0.8,
      "kcal": 53,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 grosse poignée d'épinards frais (50 g)",
        "1/2 citron jaune bio pelé",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, citron jaune, persil plat. Passez ensuite en Vitesse 2 avec : fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-093",
      "title": "Élixir Fenouil, Épinards & Pamplemousse Rose au Gingembre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et épinards, relevée par pamplemousse rose et gingembre. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.1,
      "kcal": 77,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 grosse poignée d'épinards frais (50 g)",
        "1/2 pamplemousse rose pelé à vif",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, pamplemousse rose. Passez ensuite en Vitesse 2 avec : gingembre, fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-094",
      "title": "Élixir Fenouil, Épinards & Kiwi Vert au Curcuma & Poivre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et épinards, relevée par kiwi vert et curcuma & poivre. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.4,
      "kcal": 83,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 kiwi vert mûr épluché",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, kiwi vert. Passez ensuite en Vitesse 2 avec : curcuma & poivre, fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-095",
      "title": "Élixir Fenouil, Épinards & Fraises au Menthe Fraîche",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et épinards, relevée par fraises et menthe fraîche. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Très basse)",
      "igNumeric": 16,
      "cg": 1.8,
      "kcal": 67,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, fraises, menthe fraîche. Passez ensuite en Vitesse 2 avec : fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-096",
      "title": "Élixir Fenouil, Épinards & Framboises au Basilic & Cannelle",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et épinards, relevée par framboises et basilic & cannelle. Indice glycémique maîtrisé (IG 12) idéal pour l'équilibre métabolique.",
      "ig": "IG 12 (Très basse)",
      "igNumeric": 12,
      "cg": 1.2,
      "kcal": 66,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Fer",
        "Magnésium"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 poignée de framboises fraîches (70 g)",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, framboises, basilic & cannelle. Passez ensuite en Vitesse 2 avec : fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-097",
      "title": "Élixir Fenouil, Chou Kale & Pomme Granny au Persil Plat",
      "category": "green",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et chou kale, relevée par pomme granny et persil plat. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 3.1,
      "kcal": 99,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Vitamine K",
        "Sulforaphane"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "2 grandes feuilles de chou Kale bio",
        "1 pomme verte Granny Smith (IG bas)",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, persil plat. Passez ensuite en Vitesse 2 avec : pomme granny, fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-098",
      "title": "Élixir Fenouil, Chou Kale & Citron Jaune au Gingembre",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et chou kale, relevée par citron jaune et gingembre. Indice glycémique maîtrisé (IG 12) idéal pour l'équilibre métabolique.",
      "ig": "IG 12 (Très basse)",
      "igNumeric": 12,
      "cg": 1.0,
      "kcal": 59,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Vitamine K",
        "Sulforaphane"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "2 grandes feuilles de chou Kale bio",
        "1/2 citron jaune bio pelé",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, citron jaune. Passez ensuite en Vitesse 2 avec : gingembre, fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-099",
      "title": "Élixir Fenouil, Chou Kale & Pamplemousse Rose au Curcuma & Poivre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et chou kale, relevée par pamplemousse rose et curcuma & poivre. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.2,
      "kcal": 83,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Vitamine K",
        "Sulforaphane"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "2 grandes feuilles de chou Kale bio",
        "1/2 pamplemousse rose pelé à vif",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, pamplemousse rose. Passez ensuite en Vitesse 2 avec : curcuma & poivre, fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-100",
      "title": "Élixir Fenouil, Chou Kale & Kiwi Vert au Menthe Fraîche",
      "category": "green",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et chou kale, relevée par kiwi vert et menthe fraîche. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.5,
      "kcal": 89,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Vitamine K",
        "Sulforaphane"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "2 grandes feuilles de chou Kale bio",
        "1 kiwi vert mûr épluché",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, kiwi vert, menthe fraîche. Passez ensuite en Vitesse 2 avec : fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-101",
      "title": "Élixir Fenouil, Chou Kale & Fraises au Basilic & Cannelle",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et chou kale, relevée par fraises et basilic & cannelle. Indice glycémique maîtrisé (IG 14) idéal pour l'équilibre métabolique.",
      "ig": "IG 14 (Très basse)",
      "igNumeric": 14,
      "cg": 1.7,
      "kcal": 73,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Vitamine K",
        "Sulforaphane"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "2 grandes feuilles de chou Kale bio",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, fraises, basilic & cannelle. Passez ensuite en Vitesse 2 avec : fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-102",
      "title": "Élixir Fenouil, Chou Kale & Framboises au Persil Plat",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et chou kale, relevée par framboises et persil plat. Indice glycémique maîtrisé (IG 14) idéal pour l'équilibre métabolique.",
      "ig": "IG 14 (Très basse)",
      "igNumeric": 14,
      "cg": 1.5,
      "kcal": 72,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Vitamine K",
        "Sulforaphane"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "2 grandes feuilles de chou Kale bio",
        "1 poignée de framboises fraîches (70 g)",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, framboises, persil plat. Passez ensuite en Vitesse 2 avec : fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-103",
      "title": "Élixir Fenouil, Blette & Pomme Granny au Gingembre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et blette, relevée par pomme granny et gingembre. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 3.1,
      "kcal": 95,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 pomme verte Granny Smith (IG bas)",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette. Passez ensuite en Vitesse 2 avec : pomme granny, gingembre, fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-104",
      "title": "Élixir Fenouil, Blette & Citron Jaune au Curcuma & Poivre",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et blette, relevée par citron jaune et curcuma & poivre. Indice glycémique maîtrisé (IG 12) idéal pour l'équilibre métabolique.",
      "ig": "IG 12 (Très basse)",
      "igNumeric": 12,
      "cg": 1.0,
      "kcal": 55,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1/2 citron jaune bio pelé",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, citron jaune. Passez ensuite en Vitesse 2 avec : curcuma & poivre, fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-105",
      "title": "Élixir Fenouil, Blette & Pamplemousse Rose au Menthe Fraîche",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et blette, relevée par pamplemousse rose et menthe fraîche. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.2,
      "kcal": 79,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1/2 pamplemousse rose pelé à vif",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, pamplemousse rose, menthe fraîche. Passez ensuite en Vitesse 2 avec : fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-106",
      "title": "Élixir Fenouil, Blette & Kiwi Vert au Basilic & Cannelle",
      "category": "green",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et blette, relevée par kiwi vert et basilic & cannelle. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Basse)",
      "igNumeric": 15,
      "cg": 2.2,
      "kcal": 85,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 kiwi vert mûr épluché",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, kiwi vert, basilic & cannelle. Passez ensuite en Vitesse 2 avec : fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-107",
      "title": "Élixir Fenouil, Blette & Fraises au Persil Plat",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et blette, relevée par fraises et persil plat. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Très basse)",
      "igNumeric": 16,
      "cg": 1.9,
      "kcal": 69,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, fraises, persil plat. Passez ensuite en Vitesse 2 avec : fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-108",
      "title": "Élixir Fenouil, Blette & Framboises au Gingembre",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et blette, relevée par framboises et gingembre. Indice glycémique maîtrisé (IG 14) idéal pour l'équilibre métabolique.",
      "ig": "IG 14 (Très basse)",
      "igNumeric": 14,
      "cg": 1.5,
      "kcal": 68,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Acide syringique (antidiabète)",
        "Magnésium"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 poignée de framboises fraîches (70 g)",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, framboises. Passez ensuite en Vitesse 2 avec : gingembre, fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-109",
      "title": "Élixir Fenouil, Cresson & Pomme Granny au Curcuma & Poivre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et cresson, relevée par pomme granny et curcuma & poivre. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.9,
      "kcal": 92,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Fer",
        "Glucosinolates"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 belle poignée de cresson de fontaine",
        "1 pomme verte Granny Smith (IG bas)",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson. Passez ensuite en Vitesse 2 avec : pomme granny, curcuma & poivre, fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-110",
      "title": "Élixir Fenouil, Cresson & Citron Jaune au Menthe Fraîche",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et cresson, relevée par citron jaune et menthe fraîche. Indice glycémique maîtrisé (IG 12) idéal pour l'équilibre métabolique.",
      "ig": "IG 12 (Très basse)",
      "igNumeric": 12,
      "cg": 0.8,
      "kcal": 52,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Fer",
        "Glucosinolates"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 belle poignée de cresson de fontaine",
        "1/2 citron jaune bio pelé",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, citron jaune, menthe fraîche. Passez ensuite en Vitesse 2 avec : fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-111",
      "title": "Élixir Fenouil, Cresson & Pamplemousse Rose au Basilic & Cannelle",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et cresson, relevée par pamplemousse rose et basilic & cannelle. Indice glycémique maîtrisé (IG 14) idéal pour l'équilibre métabolique.",
      "ig": "IG 14 (Basse)",
      "igNumeric": 14,
      "cg": 1.8,
      "kcal": 76,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Fer",
        "Glucosinolates"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 belle poignée de cresson de fontaine",
        "1/2 pamplemousse rose pelé à vif",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, pamplemousse rose, basilic & cannelle. Passez ensuite en Vitesse 2 avec : fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-112",
      "title": "Élixir Fenouil, Cresson & Kiwi Vert au Persil Plat",
      "category": "green",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et cresson, relevée par kiwi vert et persil plat. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.4,
      "kcal": 82,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Fer",
        "Glucosinolates"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 belle poignée de cresson de fontaine",
        "1 kiwi vert mûr épluché",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, kiwi vert, persil plat. Passez ensuite en Vitesse 2 avec : fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-113",
      "title": "Élixir Fenouil, Cresson & Fraises au Gingembre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et cresson, relevée par fraises et gingembre. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Très basse)",
      "igNumeric": 16,
      "cg": 1.8,
      "kcal": 66,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Fer",
        "Glucosinolates"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 belle poignée de cresson de fontaine",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, fraises. Passez ensuite en Vitesse 2 avec : gingembre, fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-114",
      "title": "Élixir Fenouil, Cresson & Framboises au Curcuma & Poivre",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et cresson, relevée par framboises et curcuma & poivre. Indice glycémique maîtrisé (IG 14) idéal pour l'équilibre métabolique.",
      "ig": "IG 14 (Très basse)",
      "igNumeric": 14,
      "cg": 1.4,
      "kcal": 65,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Fer",
        "Glucosinolates"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 belle poignée de cresson de fontaine",
        "1 poignée de framboises fraîches (70 g)",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, framboises. Passez ensuite en Vitesse 2 avec : curcuma & poivre, fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-115",
      "title": "Élixir Fenouil, Mâche & Pomme Granny au Menthe Fraîche",
      "category": "green",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et mâche, relevée par pomme granny et menthe fraîche. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.9,
      "kcal": 93,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Oméga-3 ALA",
        "Vitamine B9"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 grosse poignée de mâche fraîche",
        "1 pomme verte Granny Smith (IG bas)",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, menthe fraîche. Passez ensuite en Vitesse 2 avec : pomme granny, fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-116",
      "title": "Élixir Fenouil, Mâche & Citron Jaune au Basilic & Cannelle",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et mâche, relevée par citron jaune et basilic & cannelle. Indice glycémique maîtrisé (IG 10) idéal pour l'équilibre métabolique.",
      "ig": "IG 10 (Très basse)",
      "igNumeric": 10,
      "cg": 0.7,
      "kcal": 53,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Oméga-3 ALA",
        "Vitamine B9"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 grosse poignée de mâche fraîche",
        "1/2 citron jaune bio pelé",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, citron jaune, basilic & cannelle. Passez ensuite en Vitesse 2 avec : fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-117",
      "title": "Élixir Fenouil, Mâche & Pamplemousse Rose au Persil Plat",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et mâche, relevée par pamplemousse rose et persil plat. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Basse)",
      "igNumeric": 16,
      "cg": 2.1,
      "kcal": 77,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Oméga-3 ALA",
        "Vitamine B9"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 grosse poignée de mâche fraîche",
        "1/2 pamplemousse rose pelé à vif",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, pamplemousse rose, persil plat. Passez ensuite en Vitesse 2 avec : fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-118",
      "title": "Élixir Fenouil, Mâche & Kiwi Vert au Gingembre",
      "category": "green",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et mâche, relevée par kiwi vert et gingembre. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.4,
      "kcal": 83,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Oméga-3 ALA",
        "Vitamine B9"
      ],
      "tags": [
        "Green Détox",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 grosse poignée de mâche fraîche",
        "1 kiwi vert mûr épluché",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, kiwi vert. Passez ensuite en Vitesse 2 avec : gingembre, fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-119",
      "title": "Élixir Fenouil, Mâche & Fraises au Curcuma & Poivre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et mâche, relevée par fraises et curcuma & poivre. Indice glycémique maîtrisé (IG 16) idéal pour l'équilibre métabolique.",
      "ig": "IG 16 (Très basse)",
      "igNumeric": 16,
      "cg": 1.8,
      "kcal": 67,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Oméga-3 ALA",
        "Vitamine B9"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 grosse poignée de mâche fraîche",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, fraises. Passez ensuite en Vitesse 2 avec : curcuma & poivre, fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-120",
      "title": "Élixir Fenouil, Mâche & Framboises au Menthe Fraîche",
      "category": "glycemie",
      "time": "4 min",
      "description": "Alliance digestif de fenouil et mâche, relevée par framboises et menthe fraîche. Indice glycémique maîtrisé (IG 14) idéal pour l'équilibre métabolique.",
      "ig": "IG 14 (Très basse)",
      "igNumeric": 14,
      "cg": 1.4,
      "kcal": 66,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Anéthol",
        "Vitamine C",
        "Calcium",
        "Oméga-3 ALA",
        "Vitamine B9"
      ],
      "tags": [
        "Spécial Glycémie IG≤15",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Digestion & Ventre plat"
      ],
      "ingredients": [
        "1/3 de bulbe de fenouil frais",
        "1 grosse poignée de mâche fraîche",
        "1 poignée de framboises fraîches (70 g)",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, framboises, menthe fraîche. Passez ensuite en Vitesse 2 avec : fenouil pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-121",
      "title": "Élixir Carotte, Épinards & Pomme Granny au Persil Plat",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et épinards, relevée par pomme granny et persil plat. Indice glycémique maîtrisé (IG 20) idéal pour l'équilibre métabolique.",
      "ig": "IG 20 (Basse)",
      "igNumeric": 20,
      "cg": 4.4,
      "kcal": 114,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Fer",
        "Magnésium",
        "Acide alpha-lipoïque"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 pomme verte Granny Smith (IG bas)",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, persil plat. Passez ensuite en Vitesse 2 avec : pomme granny, carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-122",
      "title": "Élixir Carotte, Épinards & Citron Jaune au Gingembre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et épinards, relevée par citron jaune et gingembre. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Très basse)",
      "igNumeric": 15,
      "cg": 1.8,
      "kcal": 74,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Fer",
        "Magnésium",
        "Acide alpha-lipoïque"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 grosse poignée d'épinards frais (50 g)",
        "1/2 citron jaune bio pelé",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, citron jaune. Passez ensuite en Vitesse 2 avec : gingembre, carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-123",
      "title": "Élixir Carotte, Épinards & Pamplemousse Rose au Curcuma & Poivre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et épinards, relevée par pamplemousse rose et curcuma & poivre. Indice glycémique maîtrisé (IG 19) idéal pour l'équilibre métabolique.",
      "ig": "IG 19 (Basse)",
      "igNumeric": 19,
      "cg": 3.4,
      "kcal": 98,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Fer",
        "Magnésium",
        "Acide alpha-lipoïque"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 grosse poignée d'épinards frais (50 g)",
        "1/2 pamplemousse rose pelé à vif",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, pamplemousse rose. Passez ensuite en Vitesse 2 avec : curcuma & poivre, carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-124",
      "title": "Élixir Carotte, Épinards & Kiwi Vert au Menthe Fraîche",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et épinards, relevée par kiwi vert et menthe fraîche. Indice glycémique maîtrisé (IG 20) idéal pour l'équilibre métabolique.",
      "ig": "IG 20 (Basse)",
      "igNumeric": 20,
      "cg": 3.8,
      "kcal": 104,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Fer",
        "Magnésium",
        "Acide alpha-lipoïque"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 kiwi vert mûr épluché",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, kiwi vert, menthe fraîche. Passez ensuite en Vitesse 2 avec : carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-125",
      "title": "Élixir Carotte, Épinards & Fraises au Basilic & Cannelle",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et épinards, relevée par fraises et basilic & cannelle. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.7,
      "kcal": 88,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Fer",
        "Magnésium",
        "Acide alpha-lipoïque"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, fraises, basilic & cannelle. Passez ensuite en Vitesse 2 avec : carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-126",
      "title": "Élixir Carotte, Épinards & Framboises au Persil Plat",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et épinards, relevée par framboises et persil plat. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.5,
      "kcal": 87,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Fer",
        "Magnésium",
        "Acide alpha-lipoïque"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 grosse poignée d'épinards frais (50 g)",
        "1 poignée de framboises fraîches (70 g)",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : épinards, framboises, persil plat. Passez ensuite en Vitesse 2 avec : carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-127",
      "title": "Élixir Carotte, Chou Kale & Pomme Granny au Gingembre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et chou kale, relevée par pomme granny et gingembre. Indice glycémique maîtrisé (IG 20) idéal pour l'équilibre métabolique.",
      "ig": "IG 20 (Basse)",
      "igNumeric": 20,
      "cg": 4.6,
      "kcal": 120,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Vitamine K",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "2 grandes feuilles de chou Kale bio",
        "1 pomme verte Granny Smith (IG bas)",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale. Passez ensuite en Vitesse 2 avec : pomme granny, gingembre, carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-128",
      "title": "Élixir Carotte, Chou Kale & Citron Jaune au Curcuma & Poivre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et chou kale, relevée par citron jaune et curcuma & poivre. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Basse)",
      "igNumeric": 15,
      "cg": 1.9,
      "kcal": 80,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Vitamine K",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "2 grandes feuilles de chou Kale bio",
        "1/2 citron jaune bio pelé",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, citron jaune. Passez ensuite en Vitesse 2 avec : curcuma & poivre, carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-129",
      "title": "Élixir Carotte, Chou Kale & Pamplemousse Rose au Menthe Fraîche",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et chou kale, relevée par pamplemousse rose et menthe fraîche. Indice glycémique maîtrisé (IG 19) idéal pour l'équilibre métabolique.",
      "ig": "IG 19 (Basse)",
      "igNumeric": 19,
      "cg": 3.6,
      "kcal": 104,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Vitamine K",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "2 grandes feuilles de chou Kale bio",
        "1/2 pamplemousse rose pelé à vif",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, pamplemousse rose, menthe fraîche. Passez ensuite en Vitesse 2 avec : carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-130",
      "title": "Élixir Carotte, Chou Kale & Kiwi Vert au Basilic & Cannelle",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et chou kale, relevée par kiwi vert et basilic & cannelle. Indice glycémique maîtrisé (IG 18) idéal pour l'équilibre métabolique.",
      "ig": "IG 18 (Basse)",
      "igNumeric": 18,
      "cg": 3.6,
      "kcal": 110,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Vitamine K",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "2 grandes feuilles de chou Kale bio",
        "1 kiwi vert mûr épluché",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, kiwi vert, basilic & cannelle. Passez ensuite en Vitesse 2 avec : carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-131",
      "title": "Élixir Carotte, Chou Kale & Fraises au Persil Plat",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et chou kale, relevée par fraises et persil plat. Indice glycémique maîtrisé (IG 19) idéal pour l'équilibre métabolique.",
      "ig": "IG 19 (Basse)",
      "igNumeric": 19,
      "cg": 3.2,
      "kcal": 94,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Vitamine K",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "2 grandes feuilles de chou Kale bio",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, fraises, persil plat. Passez ensuite en Vitesse 2 avec : carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-132",
      "title": "Élixir Carotte, Chou Kale & Framboises au Gingembre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et chou kale, relevée par framboises et gingembre. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.7,
      "kcal": 93,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Vitamine K",
        "Calcium",
        "Sulforaphane"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "2 grandes feuilles de chou Kale bio",
        "1 poignée de framboises fraîches (70 g)",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : chou kale, framboises. Passez ensuite en Vitesse 2 avec : gingembre, carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-133",
      "title": "Élixir Carotte, Blette & Pomme Granny au Curcuma & Poivre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et blette, relevée par pomme granny et curcuma & poivre. Indice glycémique maîtrisé (IG 20) idéal pour l'équilibre métabolique.",
      "ig": "IG 20 (Basse)",
      "igNumeric": 20,
      "cg": 4.6,
      "kcal": 116,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Acide syringique (antidiabète)",
        "Magnésium",
        "Vitamine K"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 pomme verte Granny Smith (IG bas)",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette. Passez ensuite en Vitesse 2 avec : pomme granny, curcuma & poivre, carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-134",
      "title": "Élixir Carotte, Blette & Citron Jaune au Menthe Fraîche",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et blette, relevée par citron jaune et menthe fraîche. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Basse)",
      "igNumeric": 15,
      "cg": 1.9,
      "kcal": 76,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Acide syringique (antidiabète)",
        "Magnésium",
        "Vitamine K"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1/2 citron jaune bio pelé",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, citron jaune, menthe fraîche. Passez ensuite en Vitesse 2 avec : carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-135",
      "title": "Élixir Carotte, Blette & Pamplemousse Rose au Basilic & Cannelle",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et blette, relevée par pamplemousse rose et basilic & cannelle. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 3.2,
      "kcal": 100,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Acide syringique (antidiabète)",
        "Magnésium",
        "Vitamine K"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1/2 pamplemousse rose pelé à vif",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, pamplemousse rose, basilic & cannelle. Passez ensuite en Vitesse 2 avec : carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-136",
      "title": "Élixir Carotte, Blette & Kiwi Vert au Persil Plat",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et blette, relevée par kiwi vert et persil plat. Indice glycémique maîtrisé (IG 20) idéal pour l'équilibre métabolique.",
      "ig": "IG 20 (Basse)",
      "igNumeric": 20,
      "cg": 4.0,
      "kcal": 106,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Acide syringique (antidiabète)",
        "Magnésium",
        "Vitamine K"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 kiwi vert mûr épluché",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, kiwi vert, persil plat. Passez ensuite en Vitesse 2 avec : carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-137",
      "title": "Élixir Carotte, Blette & Fraises au Gingembre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et blette, relevée par fraises et gingembre. Indice glycémique maîtrisé (IG 19) idéal pour l'équilibre métabolique.",
      "ig": "IG 19 (Basse)",
      "igNumeric": 19,
      "cg": 3.2,
      "kcal": 90,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Acide syringique (antidiabète)",
        "Magnésium",
        "Vitamine K"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, fraises. Passez ensuite en Vitesse 2 avec : gingembre, carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-138",
      "title": "Élixir Carotte, Blette & Framboises au Curcuma & Poivre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et blette, relevée par framboises et curcuma & poivre. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.7,
      "kcal": 89,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Acide syringique (antidiabète)",
        "Magnésium",
        "Vitamine K"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "2 feuilles de blette fraîche (côtes et vert)",
        "1 poignée de framboises fraîches (70 g)",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : blette, framboises. Passez ensuite en Vitesse 2 avec : curcuma & poivre, carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-139",
      "title": "Élixir Carotte, Cresson & Pomme Granny au Menthe Fraîche",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et cresson, relevée par pomme granny et menthe fraîche. Indice glycémique maîtrisé (IG 20) idéal pour l'équilibre métabolique.",
      "ig": "IG 20 (Basse)",
      "igNumeric": 20,
      "cg": 4.4,
      "kcal": 113,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Fer",
        "Vitamine C",
        "Glucosinolates"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 belle poignée de cresson de fontaine",
        "1 pomme verte Granny Smith (IG bas)",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, menthe fraîche. Passez ensuite en Vitesse 2 avec : pomme granny, carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-140",
      "title": "Élixir Carotte, Cresson & Citron Jaune au Basilic & Cannelle",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et cresson, relevée par citron jaune et basilic & cannelle. Indice glycémique maîtrisé (IG 13) idéal pour l'équilibre métabolique.",
      "ig": "IG 13 (Très basse)",
      "igNumeric": 13,
      "cg": 1.6,
      "kcal": 73,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Fer",
        "Vitamine C",
        "Glucosinolates"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 belle poignée de cresson de fontaine",
        "1/2 citron jaune bio pelé",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, citron jaune, basilic & cannelle. Passez ensuite en Vitesse 2 avec : carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-141",
      "title": "Élixir Carotte, Cresson & Pamplemousse Rose au Persil Plat",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et cresson, relevée par pamplemousse rose et persil plat. Indice glycémique maîtrisé (IG 19) idéal pour l'équilibre métabolique.",
      "ig": "IG 19 (Basse)",
      "igNumeric": 19,
      "cg": 3.4,
      "kcal": 97,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Fer",
        "Vitamine C",
        "Glucosinolates"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 belle poignée de cresson de fontaine",
        "1/2 pamplemousse rose pelé à vif",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, pamplemousse rose, persil plat. Passez ensuite en Vitesse 2 avec : carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-142",
      "title": "Élixir Carotte, Cresson & Kiwi Vert au Gingembre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et cresson, relevée par kiwi vert et gingembre. Indice glycémique maîtrisé (IG 20) idéal pour l'équilibre métabolique.",
      "ig": "IG 20 (Basse)",
      "igNumeric": 20,
      "cg": 3.8,
      "kcal": 103,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Fer",
        "Vitamine C",
        "Glucosinolates"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 belle poignée de cresson de fontaine",
        "1 kiwi vert mûr épluché",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, kiwi vert. Passez ensuite en Vitesse 2 avec : gingembre, carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-143",
      "title": "Élixir Carotte, Cresson & Fraises au Curcuma & Poivre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et cresson, relevée par fraises et curcuma & poivre. Indice glycémique maîtrisé (IG 19) idéal pour l'équilibre métabolique.",
      "ig": "IG 19 (Basse)",
      "igNumeric": 19,
      "cg": 3.0,
      "kcal": 87,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Fer",
        "Vitamine C",
        "Glucosinolates"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 belle poignée de cresson de fontaine",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, fraises. Passez ensuite en Vitesse 2 avec : curcuma & poivre, carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-144",
      "title": "Élixir Carotte, Cresson & Framboises au Menthe Fraîche",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et cresson, relevée par framboises et menthe fraîche. Indice glycémique maîtrisé (IG 17) idéal pour l'équilibre métabolique.",
      "ig": "IG 17 (Basse)",
      "igNumeric": 17,
      "cg": 2.5,
      "kcal": 86,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Fer",
        "Vitamine C",
        "Glucosinolates"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 belle poignée de cresson de fontaine",
        "1 poignée de framboises fraîches (70 g)",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : cresson, framboises, menthe fraîche. Passez ensuite en Vitesse 2 avec : carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-145",
      "title": "Élixir Carotte, Mâche & Pomme Granny au Basilic & Cannelle",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et mâche, relevée par pomme granny et basilic & cannelle. Indice glycémique maîtrisé (IG 18) idéal pour l'équilibre métabolique.",
      "ig": "IG 18 (Basse)",
      "igNumeric": 18,
      "cg": 4.0,
      "kcal": 114,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Oméga-3 ALA",
        "Vitamine B9",
        "Bêta-carotène"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 grosse poignée de mâche fraîche",
        "1 pomme verte Granny Smith (IG bas)",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, basilic & cannelle. Passez ensuite en Vitesse 2 avec : pomme granny, carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-146",
      "title": "Élixir Carotte, Mâche & Citron Jaune au Persil Plat",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et mâche, relevée par citron jaune et persil plat. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Très basse)",
      "igNumeric": 15,
      "cg": 1.8,
      "kcal": 74,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin à jeun",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Oméga-3 ALA",
        "Vitamine B9",
        "Bêta-carotène"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 grosse poignée de mâche fraîche",
        "1/2 citron jaune bio pelé",
        "1 petit bouquet de persil plat frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, citron jaune, persil plat. Passez ensuite en Vitesse 2 avec : carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-147",
      "title": "Élixir Carotte, Mâche & Pamplemousse Rose au Gingembre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et mâche, relevée par pamplemousse rose et gingembre. Indice glycémique maîtrisé (IG 19) idéal pour l'équilibre métabolique.",
      "ig": "IG 19 (Basse)",
      "igNumeric": 19,
      "cg": 3.4,
      "kcal": 98,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Matin au réveil",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Oméga-3 ALA",
        "Vitamine B9",
        "Bêta-carotène"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 grosse poignée de mâche fraîche",
        "1/2 pamplemousse rose pelé à vif",
        "1,5 cm de racine de gingembre frais"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, pamplemousse rose. Passez ensuite en Vitesse 2 avec : gingembre, carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-148",
      "title": "Élixir Carotte, Mâche & Kiwi Vert au Curcuma & Poivre",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et mâche, relevée par kiwi vert et curcuma & poivre. Indice glycémique maîtrisé (IG 20) idéal pour l'équilibre métabolique.",
      "ig": "IG 20 (Basse)",
      "igNumeric": 20,
      "cg": 3.8,
      "kcal": 104,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Avant ou pendant le repas",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Oméga-3 ALA",
        "Vitamine B9",
        "Bêta-carotène"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 grosse poignée de mâche fraîche",
        "1 kiwi vert mûr épluché",
        "1,5 cm de curcuma frais + 1 pincée de poivre noir"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, kiwi vert. Passez ensuite en Vitesse 2 avec : curcuma & poivre, carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-149",
      "title": "Élixir Carotte, Mâche & Fraises au Menthe Fraîche",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et mâche, relevée par fraises et menthe fraîche. Indice glycémique maîtrisé (IG 19) idéal pour l'équilibre métabolique.",
      "ig": "IG 19 (Basse)",
      "igNumeric": 19,
      "cg": 3.0,
      "kcal": 88,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "Après-midi ou Avant repas",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Oméga-3 ALA",
        "Vitamine B9",
        "Bêta-carotène"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 grosse poignée de mâche fraîche",
        "1 belle poignée de fraises fraîches équeutées (80 g)",
        "6 feuilles de menthe fraîche"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, fraises, menthe fraîche. Passez ensuite en Vitesse 2 avec : carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    },
    {
      "id": "rec-150",
      "title": "Élixir Carotte, Mâche & Framboises au Basilic & Cannelle",
      "category": "vitality",
      "time": "4 min",
      "description": "Alliance ensoleillé de carotte et mâche, relevée par framboises et basilic & cannelle. Indice glycémique maîtrisé (IG 15) idéal pour l'équilibre métabolique.",
      "ig": "IG 15 (Basse)",
      "igNumeric": 15,
      "cg": 2.2,
      "kcal": 87,
      "volumeMl": 270,
      "kenwoodSpeed": "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
      "bestTime": "15 min avant le déjeuner",
      "vitamins": [
        "Provitamine A (Bêta-carotène)",
        "Biotine",
        "Oméga-3 ALA",
        "Vitamine B9",
        "Bêta-carotène"
      ],
      "tags": [
        "Vitalité",
        "Vitesse 1 (feuilles & tendres) puis Vitesse 2 (durs)",
        "Régulation glycémie",
        "Peau & Éclat"
      ],
      "ingredients": [
        "2 carottes moyennes bio brossées",
        "1 grosse poignée de mâche fraîche",
        "1 poignée de framboises fraîches (70 g)",
        "5 feuilles de basilic frais + 1 pincée de cannelle de Ceylan"
      ],
      "instructions": "Lavez soigneusement les ingrédients. Dans la cheminée XXL de la Kenwood AT641, insérez d'abord en Vitesse 1 : mâche, framboises, basilic & cannelle. Passez ensuite en Vitesse 2 avec : carotte pour pousser les fibres et maximiser l'extraction. Dégustez immédiatement."
    }
  ]
};
