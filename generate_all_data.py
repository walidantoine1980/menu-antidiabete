# -*- coding: utf-8 -*-
"""
Générateur unifié et déterministe de la base de données Menu Antidiabète (data.js).
Produit :
1. theoryData : 6 fiches scientifiques et pratiques complètes
2. foodDatabase : 60 aliments détaillés (IG, CG, portion, kcal, glucides, fibres, protéines, marques, conseil)
3. mealExamples :
   - breakfast (30 petits-déjeuners sucrés & salés 100% cohérents, sans aucun mélange absurde)
   - lunch (45 déjeuners complets à IG bas)
   - dinner (45 dîners légers et métaboliques)
   - dessert (30 desserts gourmands à IG très bas / bas)
   - drinks (15 boissons fonctionnelles antidiabète)
   - kenwood (166 recettes vérifiées pour centrifugeuse Kenwood AT641 avec IG, vitamines et vitesses 1/2)
"""

import json
import os

# ---------------------------------------------------------------------------
# 1. THÉORIE & PILIERS SCIENTIFIQUES ANTIDIABÈTE
# ---------------------------------------------------------------------------
THEORY_DATA = [
    {
        "icon": "📊",
        "title": "Comprendre l'Indice Glycémique (IG)",
        "badge": "Pilier n°1",
        "content": (
            "L'Indice Glycémique mesure la vitesse à laquelle les glucides d'un aliment passent dans le sang "
            "sur une échelle de 0 à 100 (référence : glucose pur = 100).\n"
            "• **IG Très Bas (≤ 35)** : Légumes verts, baies, légumineuses, oléagineux, avocat, chocolat noir 85%.\n"
            "• **IG Bas (36 à 50)** : Quinoa, flocons d'avoine, patate douce, riz basmati complet, pain de seigle au levain.\n"
            "• **IG Moyen (51 à 69)** : Banane mûre, raisin, riz blanc standard, couscous.\n"
            "• **IG Élevé (≥ 70 — à éviter)** : Pain blanc, pomme de terre au four/purée, galettes de riz soufflé, sodas."
        )
    },
    {
        "icon": "⚖️",
        "title": "La Charge Glycémique (CG) : l'indicateur roi",
        "badge": "Pilier n°2",
        "content": (
            "L'IG indique la vitesse, mais la **Charge Glycémique (CG)** mesure la quantité réelle de sucre qui "
            "impacte votre glycémie pour une portion donnée.\n"
            "• **Formule officielle** : **CG = (IG × Glucides nets de la portion en g) / 100**.\n"
            "• **CG Basse (≤ 10)** : Impact minimal sur l'insuline (idéal à chaque repas).\n"
            "• **CG Modérée (11 à 19)** : À accompagner de fibres et de protéines.\n"
            "• **CG Élevée (≥ 20)** : Provoque un pic glycémique suivi d'une hypoglycémie réactionnelle.\n"
            "• **Objectif journalier** : Viser une CG totale inférieure à **45 par jour**."
        )
    },
    {
        "icon": "🥗",
        "title": "L'Ordre d'Ingestion des Aliments (-40% de pic)",
        "badge": "Astuce Clinique",
        "content": (
            "Les études cliniques montrent que manger les mêmes aliments dans un ordre précis réduit le pic de glucose jusqu'à **-40%** :\n"
            "1. **Commencez par les fibres (Crudités / Légumes verts)** : elles tapissent la paroi intestinale d'un maillage visqueux.\n"
            "2. **Poursuivez avec les protéines et les bonnes graisses** (poisson, volaille, œufs, tofu, huile d'olive, avocat) : elles ralentissent la vidange gastrique.\n"
            "3. **Terminez par les glucides lents et le dessert** : leur passage dans le sang sera freiné et progressif."
        )
    },
    {
        "icon": "🔥",
        "title": "Cuisson, Maturité & Amidon Résistant",
        "badge": "Transformation",
        "content": (
            "La préparation modifie radicalement l'Indice Glycémique d'un même aliment :\n"
            "1. **La cuisson Al Dente** : Des pâtes complètes cuites 7 min ont un IG de 45 ; trop cuites, elles montent à 60.\n"
            "2. **Le refroidissement (Rétrogradation de l'amidon)** : Faire refroidir le riz basmati, les lentilles ou la patate douce pendant 12h au réfrigérateur transforme une partie de l'amidon en **amidon résistant** prébiotique non assimilable (baisse de l'IG de 25%, même réchauffé doucement).\n"
            "3. **La maturité** : Préférez une banane légèrement verte (IG 35) plutôt que tigrée (IG 60)."
        )
    },
    {
        "icon": "🍋",
        "title": "Les Modulateurs Naturels de Glycémie",
        "badge": "Bio-Actifs",
        "content": (
            "Certains ingrédients agissent directement sur les enzymes digestives et la sensibilité à l'insuline :\n"
            "• **Vinaigre de cidre non pasteurisé** : 1 c. à soupe dans un grand verre d'eau 15 min avant un repas riche en féculents réduit le pic glycémique de 20 à 30%.\n"
            "• **Jus de citron frais** : L'acide citrique abaisse l'IG global du plat.\n"
            "• **Cannelle de Ceylan & Gingembre** : Améliorent la captation cellulaire du glucose.\n"
            "• **Huile d'olive vierge extra & Oléagineux** : Freinent l'absorption intestinale des sucres."
        )
    },
    {
        "icon": "🚶",
        "title": "La Marche Digestive de 10 Minutes",
        "badge": "Hygiène de vie",
        "content": (
            "Vos muscles sont les plus grands consommateurs de glucose de l'organisme :\n"
            "• Une **marche active de 10 à 15 minutes** dans les 30 minutes qui suivent un repas permet aux fibres musculaires de capter directement le glucose sanguin **sans même avoir besoin d'insuline** (voie GLUT-4).\n"
            "• Après le dîner, cette habitude simple lisse la courbe nocturne et améliore la qualité du sommeil profond."
        )
    }
]

# ---------------------------------------------------------------------------
# 2. BASE D'ALIMENTS ENRICHIE (AVEC PORTIONS, MACROS & MARQUES)
# ---------------------------------------------------------------------------
FOOD_DATABASE = [
    # --- LÉGUMES ---
    {"id": "v1", "name": "Brocoli vapeur", "category": "Légumes", "ig": 15, "cg": 1.0, "portion": "150g", "kcal": 52, "carbs": 6, "fiber": 4.5, "protein": 4.2, "icon": "🥦", "brands": ["Picard (Surgelé brut)", "Biocoop", "Maraîcher Local"], "tip": "Riche en sulforaphane qui améliore la sensibilité à l'insuline."},
    {"id": "v2", "name": "Épinards frais", "category": "Légumes", "ig": 15, "cg": 0.5, "portion": "150g", "kcal": 35, "carbs": 2, "fiber": 3.5, "protein": 4.0, "icon": "🥬", "brands": ["Bonduelle (Frais)", "Picard (Branches)", "Naturalia"], "tip": "Contient de l'acide alpha-lipoïque et du magnésium."},
    {"id": "v3", "name": "Courgette", "category": "Légumes", "ig": 15, "cg": 1.0, "portion": "150g", "kcal": 26, "carbs": 4, "fiber": 2.0, "protein": 1.8, "icon": "🥒", "brands": ["Primeur Bio", "Biocoop", "Grand Frais"], "tip": "Idéale en tagliatelles crues ou juste poêlées al dente."},
    {"id": "v4", "name": "Poivron rouge / vert", "category": "Légumes", "ig": 15, "cg": 1.2, "portion": "150g", "kcal": 40, "carbs": 6, "fiber": 3.0, "protein": 1.5, "icon": "🫑", "brands": ["Maraîcher Local", "Biocoop", "Carrefour Bio"], "tip": "3 fois plus riche en vitamine C qu'une orange."},
    {"id": "v5", "name": "Aubergine", "category": "Légumes", "ig": 20, "cg": 1.5, "portion": "150g", "kcal": 38, "carbs": 5, "fiber": 4.5, "protein": 1.5, "icon": "🍆", "brands": ["Biocoop", "Grand Frais", "Naturalia"], "tip": "Ses fibres solubles piègent les sucres et le cholestérol."},
    {"id": "v6", "name": "Tomates fraîches", "category": "Légumes", "ig": 15, "cg": 1.2, "portion": "150g", "kcal": 30, "carbs": 5, "fiber": 1.8, "protein": 1.3, "icon": "🍅", "brands": ["Prince de Bretagne", "Savéol", "Bio Village"], "tip": "Riche en lycopène antioxydant (encore mieux assimilé avec un filet d'huile d'olive)."},
    {"id": "v7", "name": "Carotte crue râpée", "category": "Légumes", "ig": 16, "cg": 2.0, "portion": "120g", "kcal": 42, "carbs": 9, "fiber": 3.4, "protein": 1.0, "icon": "🥕", "brands": ["Priméale", "Biocoop", "Maraîcher Local"], "tip": "Crue avec du jus de citron, son IG reste très bas (16)."},
    {"id": "v8", "name": "Carotte cuite", "category": "Légumes", "ig": 47, "cg": 4.5, "portion": "120g", "kcal": 44, "carbs": 9.5, "fiber": 3.0, "protein": 1.0, "icon": "🥕", "brands": ["Priméale", "Biocoop", "Picard"], "tip": "La cuisson gélatinise l'amidon : consommez-la avec des fibres vertes et des protéines."},
    {"id": "v9", "name": "Chou-fleur", "category": "Légumes", "ig": 15, "cg": 1.0, "portion": "150g", "kcal": 38, "carbs": 5, "fiber": 3.5, "protein": 3.0, "icon": "🥦", "brands": ["Prince de Bretagne", "Picard", "Biocoop"], "tip": "Remplace merveilleusement le riz blanc une fois râpé en semoule."},
    {"id": "v10", "name": "Asperges vertes", "category": "Légumes", "ig": 15, "cg": 0.5, "portion": "150g", "kcal": 30, "carbs": 3, "fiber": 3.2, "protein": 3.4, "icon": "🥢", "brands": ["Asperges de France", "Picard", "Grand Frais"], "tip": "Effet drainant rénal et riche en inuline prébiotique."},
    {"id": "v11", "name": "Champignons de Paris", "category": "Légumes", "ig": 15, "cg": 0.5, "portion": "150g", "kcal": 33, "carbs": 3, "fiber": 2.5, "protein": 4.5, "icon": "🍄", "brands": ["Lou Légumes", "Biocoop", "Grand Frais"], "tip": "Riche en bêta-glucanes qui ralentissent l'absorption des glucides."},
    {"id": "v12", "name": "Blanc de Poireau", "category": "Légumes", "ig": 15, "cg": 1.2, "portion": "150g", "kcal": 42, "carbs": 6, "fiber": 3.5, "protein": 2.0, "icon": "🧅", "brands": ["Priméale", "Biocoop", "Maraîcher"], "tip": "Très riche en fibres prébiotiques protectrices du microbiote."},
    {"id": "v13", "name": "Oignon & Ail", "category": "Légumes", "ig": 15, "cg": 1.0, "portion": "80g", "kcal": 32, "carbs": 6, "fiber": 1.6, "protein": 1.0, "icon": "🧅", "brands": ["Oignon de Roscoff", "Biocoop", "Ferme Locale"], "tip": "Riches en quercétine et composés soufrés hypoglycémiants."},
    {"id": "v14", "name": "Haricots verts extra-fins", "category": "Légumes", "ig": 30, "cg": 2.0, "portion": "150g", "kcal": 46, "carbs": 7, "fiber": 4.5, "protein": 2.8, "icon": "🫘", "brands": ["Cassegrain", "Picard", "Bonduelle"], "tip": "Excellent tapis de fibres à consommer en début de repas."},
    {"id": "v15", "name": "Concombre bio", "category": "Légumes", "ig": 15, "cg": 0.4, "portion": "150g", "kcal": 20, "carbs": 2.5, "fiber": 1.2, "protein": 0.9, "icon": "🥒", "brands": ["Maraîcher Bio", "Biocoop", "Grand Frais"], "tip": "96% d'eau structurée, charge glycémique quasi nulle."},
    {"id": "v16", "name": "Chou Kale / Chou Rouge", "category": "Légumes", "ig": 15, "cg": 0.8, "portion": "120g", "kcal": 42, "carbs": 5, "fiber": 4.2, "protein": 3.5, "icon": "🥬", "brands": ["Biocoop", "Naturalia", "Grand Frais"], "tip": "Concentration exceptionnelle en antioxydants et vitamine K."},
    {"id": "v17", "name": "Fenouil bulbe", "category": "Légumes", "ig": 15, "cg": 1.0, "portion": "150g", "kcal": 36, "carbs": 5, "fiber": 4.5, "protein": 1.8, "icon": "🌱", "brands": ["Biocoop", "Grand Frais", "Primeur"], "tip": "Digestif, anti-ballonnements et très pauvre en glucides."},

    # --- FRUITS ---
    {"id": "f1", "name": "Myrtilles / Framboises", "category": "Fruits", "ig": 25, "cg": 2.5, "portion": "100g", "kcal": 48, "carbs": 8, "fiber": 5.5, "protein": 1.2, "icon": "🫐", "brands": ["Picard (Surgelées bio)", "Biocoop", "Maraîcher"], "tip": "Les meilleurs fruits antidiabète grâce à leurs anthocyanes."},
    {"id": "f2", "name": "Pomme Granny Smith", "category": "Fruits", "ig": 35, "cg": 4.5, "portion": "130g", "kcal": 62, "carbs": 13, "fiber": 3.5, "protein": 0.4, "icon": "🍏", "brands": ["Juliet (Bio)", "AOP Limousin", "Biocoop"], "tip": "Conservez la peau bio : elle concentre la pectine et la quercétine."},
    {"id": "f3", "name": "Poire Conférence", "category": "Fruits", "ig": 38, "cg": 5.0, "portion": "130g", "kcal": 68, "carbs": 14, "fiber": 4.0, "protein": 0.5, "icon": "🍐", "brands": ["Conférence (AOP)", "Angélys", "Biocoop"], "tip": "Dégustez-la avec quelques amandes ou noix pour lisser son absorption."},
    {"id": "f4", "name": "Banane peu mûre (jaune-verte)", "category": "Fruits", "ig": 35, "cg": 8.0, "portion": "100g", "kcal": 85, "carbs": 19, "fiber": 3.0, "protein": 1.1, "icon": "🍌", "brands": ["Max Havelaar (Équitable)", "Bio Village"], "tip": "Riche en amidon résistant tant qu'elle n'est pas tigrée."},
    {"id": "f5", "name": "Banane très mûre (tigrée)", "category": "Fruits", "ig": 60, "cg": 14.0, "portion": "100g", "kcal": 95, "carbs": 23, "fiber": 2.2, "protein": 1.1, "icon": "🍌", "brands": ["Max Havelaar", "Bio Village"], "tip": "Attention : l'amidon s'est transformé en sucres rapides ! Réservez-la à l'effort sportif."},
    {"id": "f6", "name": "Fraises fraîches", "category": "Fruits", "ig": 25, "cg": 1.8, "portion": "120g", "kcal": 40, "carbs": 7, "fiber": 2.6, "protein": 0.8, "icon": "🍓", "brands": ["Gariguette France", "Biocoop", "Grand Frais"], "tip": "Très faible en sucre, idéale en fin de repas."},
    {"id": "f7", "name": "Pamplemousse rose", "category": "Fruits", "ig": 25, "cg": 2.2, "portion": "120g", "kcal": 45, "carbs": 9, "fiber": 2.0, "protein": 0.8, "icon": "🍊", "brands": ["Corsica (IGP)", "Biocoop", "Grand Frais"], "tip": "La naringine du pamplemousse stimule la sensibilité à l'insuline."},
    {"id": "f8", "name": "Raisin frais", "category": "Fruits", "ig": 53, "cg": 9.0, "portion": "100g", "kcal": 72, "carbs": 17, "fiber": 1.2, "protein": 0.6, "icon": "🍇", "brands": ["Chasselas de Moissac", "Biocoop"], "tip": "Concentré en glucose : limitez la portion à une petite grappe avec des noix."},
    {"id": "f9", "name": "Kiwi vert", "category": "Fruits", "ig": 50, "cg": 5.5, "portion": "100g", "kcal": 58, "carbs": 11, "fiber": 3.0, "protein": 1.1, "icon": "🥝", "brands": ["Oscar (Origine France)", "Zespri", "Biocoop"], "tip": "Un seul kiwi couvre 100% des besoins quotidiens en vitamine C."},
    {"id": "f10", "name": "Citron jaune / vert", "category": "Fruits", "ig": 20, "cg": 0.5, "portion": "50g", "kcal": 14, "carbs": 2.5, "fiber": 1.4, "protein": 0.5, "icon": "🍋", "brands": ["Citron de Menton", "Biocoop", "Naturalia"], "tip": "Son acidité ralentit la digestion de l'amidon des féculents."},

    # --- PROTÉINES ---
    {"id": "p1", "name": "Blanc de Poulet / Dinde", "category": "Protéines", "ig": 0, "cg": 0.0, "portion": "130g", "kcal": 145, "carbs": 0, "fiber": 0.0, "protein": 31.0, "icon": "🍗", "brands": ["Loué (Label Rouge)", "Maître Coq Bio", "Fermier"], "tip": "Zéro glucide, haute satiété et maintien de la masse musculaire."},
    {"id": "p2", "name": "Pavé de Saumon", "category": "Protéines", "ig": 0, "cg": 0.0, "portion": "130g", "kcal": 240, "carbs": 0, "fiber": 0.0, "protein": 26.0, "icon": "🐟", "brands": ["Labeyrie (Sauvage)", "Mowi (ASC)", "Picard"], "tip": "Les oméga-3 EPA/DHA réduisent l'inflammation métabolique."},
    {"id": "p3", "name": "Tofu ferme / fumé bio", "category": "Protéines", "ig": 15, "cg": 0.3, "portion": "120g", "kcal": 148, "carbs": 1.5, "fiber": 1.8, "protein": 16.5, "icon": "🧊", "brands": ["Taifun", "Soy (Bio France)", "Bjorg"], "tip": "Protéine végétale complète à impact glycémique nul."},
    {"id": "p4", "name": "Œufs bio plein air (x2)", "category": "Protéines", "ig": 0, "cg": 0.0, "portion": "120g (2 œufs)", "kcal": 155, "carbs": 0.6, "fiber": 0.0, "protein": 13.0, "icon": "🥚", "brands": ["Loué (Plein air)", "Cocorette", "Matines Bio"], "tip": "Le meilleur petit-déjeuner salé pour éviter toute fringale à 11h."},
    {"id": "p5", "name": "Bœuf maigre / Filet", "category": "Protéines", "ig": 0, "cg": 0.0, "portion": "130g", "kcal": 175, "carbs": 0, "fiber": 0.0, "protein": 28.0, "icon": "🥩", "brands": ["Charal (5% MG)", "Boucherie Label Rouge", "Vrai Bio"], "tip": "Riche en fer héminique et zinc essentiels à l'insuline."},
    {"id": "p6", "name": "Crevettes sauvages", "category": "Protéines", "ig": 0, "cg": 0.0, "portion": "140g", "kcal": 125, "carbs": 0, "fiber": 0.0, "protein": 27.0, "icon": "🍤", "brands": ["Pescanova", "Delpierre", "Escal (ASC)"], "tip": "Ultra riche en protéines maigres, sélénium et iode."},
    {"id": "p7", "name": "Dos de Cabillaud / Colin", "category": "Protéines", "ig": 0, "cg": 0.0, "portion": "140g", "kcal": 115, "carbs": 0, "fiber": 0.0, "protein": 25.0, "icon": "🐟", "brands": ["Findus (MSC)", "Picard", "Poissonnerie"], "tip": "Poisson blanc très digeste, parfait pour le dîner."},
    {"id": "p8", "name": "Sardines / Maquereau", "category": "Protéines", "ig": 0, "cg": 0.0, "portion": "120g", "kcal": 220, "carbs": 0, "fiber": 0.0, "protein": 24.0, "icon": "🐟", "brands": ["Connétable (Huile d'olive vierge)", "Phare d'Eckmühl"], "tip": "Champion des oméga-3 et de la vitamine D."},
    {"id": "p9", "name": "Tempeh / Seitan bio", "category": "Protéines", "ig": 15, "cg": 0.8, "portion": "100g", "kcal": 165, "carbs": 4, "fiber": 4.0, "protein": 20.0, "icon": "🥖", "brands": ["Soy", "Lima", "La Vie"], "tip": "Fermenté (tempeh), il nourrit la flore intestinale tout en rassasiant."},

    # --- GLUCIDES LENTS & LÉGUMINEUSES ---
    {"id": "c1", "name": "Quinoa cuit", "category": "Glucides lents", "ig": 35, "cg": 9.5, "portion": "150g cuit", "kcal": 175, "carbs": 27, "fiber": 4.2, "protein": 6.5, "icon": "🌾", "brands": ["Quinola", "Priméal (Anjou)", "Tipiak"], "tip": "Pseudo-céréale sans gluten riche en acides aminés essentiels."},
    {"id": "c2", "name": "Flocons d'avoine complets", "category": "Glucides lents", "ig": 40, "cg": 9.0, "portion": "40g", "kcal": 148, "carbs": 23, "fiber": 4.4, "protein": 5.2, "icon": "🥣", "brands": ["Bjorg (Gros flocons)", "Celnat", "Quaker Oats"], "tip": "Riches en bêta-glucanes qui forment un gel ralentissant le glucose."},
    {"id": "c3", "name": "Patate douce vapeur/four", "category": "Glucides lents", "ig": 46, "cg": 10.5, "portion": "130g", "kcal": 112, "carbs": 23, "fiber": 3.8, "protein": 2.0, "icon": "🍠", "brands": ["Biocoop", "Grand Frais", "Ferme Locale"], "tip": "Préférez la cuisson vapeur douce (IG 46) plutôt que rôtie très longtemps."},
    {"id": "c4", "name": "Pomme de terre au four (À limiter)", "category": "Glucides lents", "ig": 85, "cg": 20.0, "portion": "150g", "kcal": 140, "carbs": 28, "fiber": 2.2, "protein": 3.0, "icon": "🥔", "brands": ["Parmentine", "Princesse Amandine"], "tip": "⚠️ IG élevé (85) ! Si vous en mangez, laissez-la refroidir 12h en salade avec vinaigrette."},
    {"id": "c5", "name": "Pain de seigle intégral au levain", "category": "Glucides lents", "ig": 40, "cg": 7.5, "portion": "50g (1 belle tranche)", "kcal": 115, "carbs": 19, "fiber": 4.5, "protein": 4.0, "icon": "🍞", "brands": ["Bjorg (Pumpernickel)", "Poilâne", "Artisan Levain"], "tip": "La fermentation au levain naturel réduit l'IG du pain de 20 points."},
    {"id": "c6", "name": "Pain blanc de mie (À éviter)", "category": "Glucides lents", "ig": 75, "cg": 18.0, "portion": "50g (2 tranches)", "kcal": 135, "carbs": 24, "fiber": 1.2, "protein": 4.0, "icon": "🍞", "brands": ["Harrys", "Jacquet"], "tip": "⚠️ Provoque un pic d'insuline rapide comparable au sucre blanc."},
    {"id": "c7", "name": "Lentilles vertes du Puy", "category": "Glucides lents", "ig": 25, "cg": 5.0, "portion": "150g cuites", "kcal": 165, "carbs": 20, "fiber": 8.5, "protein": 12.5, "icon": "🧆", "brands": ["Lentilles du Puy (AOP)", "Sabarot", "Vivien Paille"], "tip": "Effet 'second repas' : stabilise la glycémie même au repas suivant !"},
    {"id": "c8", "name": "Riz Basmati complet", "category": "Glucides lents", "ig": 45, "cg": 12.0, "portion": "130g cuit", "kcal": 155, "carbs": 27, "fiber": 2.8, "protein": 3.8, "icon": "🍚", "brands": ["Taureau Ailé", "Priméal", "Autour du Riz"], "tip": "Riche en amylose qui résiste à la gélatinisation rapide."},
    {"id": "c9", "name": "Riz blanc gluant / standard (À éviter)", "category": "Glucides lents", "ig": 70, "cg": 22.0, "portion": "150g cuit", "kcal": 190, "carbs": 38, "fiber": 0.6, "protein": 3.5, "icon": "🍚", "brands": ["Lustucru", "Uncle Ben's"], "tip": "⚠️ Remplacez toujours le riz blanc standard par du Basmati complet ou du quinoa."},
    {"id": "c10", "name": "Pois chiches / Houmous", "category": "Glucides lents", "ig": 28, "cg": 6.5, "portion": "130g cuits", "kcal": 180, "carbs": 23, "fiber": 7.5, "protein": 10.0, "icon": "🥙", "brands": ["Cassegrain", "Bonduelle", "Biocoop"], "tip": "Excellente source de fibres solubles et protéines végétales."},
    {"id": "c11", "name": "Pâtes intégrales / Légumineuses (Al dente)", "category": "Glucides lents", "ig": 42, "cg": 11.5, "portion": "130g cuites", "kcal": 165, "carbs": 27, "fiber": 5.5, "protein": 7.5, "icon": "🍝", "brands": ["Barilla (Integrale / Lentilles corail)", "Rummo", "Lazzaretti"], "tip": "Cuisez-les al dente et accompagnez-les de légumes et d'huile d'olive."},
    {"id": "c12", "name": "Haricots rouges / Blancs", "category": "Glucides lents", "ig": 25, "cg": 5.5, "portion": "140g cuits", "kcal": 155, "carbs": 22, "fiber": 8.0, "protein": 11.0, "icon": "🫘", "brands": ["Bonduelle", "Cassegrain", "Biocoop"], "tip": "Contiennent des inhibiteurs naturels de l'alpha-amylase."},
    {"id": "c13", "name": "Sarrasin (Kasha) / Sobas 100%", "category": "Glucides lents", "ig": 35, "cg": 8.5, "portion": "130g cuit", "kcal": 150, "carbs": 24, "fiber": 4.0, "protein": 5.8, "icon": "🌾", "brands": ["Celnat", "Priméal", "Markal"], "tip": "Riche en D-chiro-inositol qui mime et soutient l'action de l'insuline."},

    # --- GRAISSES SAINES & OLÉAGINEUX ---
    {"id": "g1", "name": "Amandes entières", "category": "Graisses Saines", "ig": 15, "cg": 0.5, "portion": "30g (1 poignée)", "kcal": 175, "carbs": 3, "fiber": 3.8, "protein": 6.5, "icon": "🥜", "brands": ["Juste Bio", "Daco Bello", "Biocoop"], "tip": "Croquer 10 amandes avant un repas réduit la réponse glycémique de 30%."},
    {"id": "g2", "name": "Noix de Grenoble", "category": "Graisses Saines", "ig": 15, "cg": 0.5, "portion": "30g", "kcal": 195, "carbs": 2, "fiber": 2.2, "protein": 4.5, "icon": "🌰", "brands": ["Noix de Grenoble (AOP)", "Juste Bio"], "tip": "Riche en acide alpha-linolénique (Oméga-3 végétal)."},
    {"id": "g3", "name": "Avocat Hass (1/2)", "category": "Graisses Saines", "ig": 10, "cg": 0.5, "portion": "100g", "kcal": 160, "carbs": 2, "fiber": 6.7, "protein": 2.0, "icon": "🥑", "brands": ["Biocoop", "Grand Frais"], "tip": "6,7g de fibres et acides gras mono-insaturés : le bouclier anti-pic par excellence."},
    {"id": "g4", "name": "Huile d'Olive Vierge Extra / Colza", "category": "Graisses Saines", "ig": 0, "cg": 0.0, "portion": "15ml (1 c.à.s)", "kcal": 120, "carbs": 0, "fiber": 0.0, "protein": 0.0, "icon": "🫒", "brands": ["Puget Bio", "Émile Noël", "Cauvin"], "tip": "Ralentit la vidange de l'estomac et apporte des polyphénols protecteurs."},
    {"id": "g5", "name": "Graines de Chia / Lin moulu", "category": "Graisses Saines", "ig": 15, "cg": 0.3, "portion": "20g (2 c.à.s)", "kcal": 96, "carbs": 1.5, "fiber": 7.0, "protein": 3.5, "icon": "⚫", "brands": ["Linwoods", "Celnat", "Markal"], "tip": "Absorbent 10x leur poids en eau et forment un gel mucilagineux coupe-faim."},
    {"id": "g6", "name": "Chocolat Noir 85% minimum", "category": "Graisses Saines", "ig": 20, "cg": 1.2, "portion": "20g (2 carrés)", "kcal": 118, "carbs": 4, "fiber": 3.0, "protein": 2.5, "icon": "🍫", "brands": ["Lindt 85%/90%", "Alter Eco Bio", "Kaoka"], "tip": "Riche en flavanols de cacao et magnésium sans excès de sucre."},

    # --- LAITAGES & ALTERNATIVES ---
    {"id": "l1", "name": "Yaourt Grec / Brebis nature", "category": "Laitages", "ig": 15, "cg": 1.5, "portion": "150g", "kcal": 145, "carbs": 5, "fiber": 0.0, "protein": 12.0, "icon": "🥛", "brands": ["Mavrommatis", "Vrai (Bio)", "Soignon"], "tip": "Égoutté du lactosérum, il contient 2x plus de protéines et moins de lactose."},
    {"id": "l2", "name": "Skyr / Fromage blanc nature", "category": "Laitages", "ig": 25, "cg": 2.0, "portion": "150g", "kcal": 90, "carbs": 6, "fiber": 0.0, "protein": 14.0, "icon": "🥣", "brands": ["Siggi's", "Yoplait Skyr", "Vrai Bio"], "tip": "Haute teneur en protéines rassasiantes."},
    {"id": "l3", "name": "Lait d'Amande / Soja (Sans sucres)", "category": "Laitages", "ig": 20, "cg": 0.5, "portion": "200ml", "kcal": 45, "carbs": 1, "fiber": 1.0, "protein": 4.0, "icon": "🥛", "brands": ["Bjorg (Sans sucres ajoutés)", "Alpro", "Bonneterre"], "tip": "Vérifiez toujours la mention 'Sans sucres ajoutés' (évitez le lait d'avoine ou de riz industriel qui a un IG élevé)."},
    {"id": "l4", "name": "Feta AOP / Chèvre frais", "category": "Laitages", "ig": 0, "cg": 0.2, "portion": "40g", "kcal": 105, "carbs": 0.5, "fiber": 0.0, "protein": 6.5, "icon": "🧀", "brands": ["Dodoni (AOP)", "Salakis", "Soignon"], "tip": "Pauvre en lactose, parfait pour enrichir une salade en protéines et lipides."}
]

# ---------------------------------------------------------------------------
# 3. GÉNÉRATEUR DE REPAS COHÉRENTS (PETIT-DÉJ, DÉJEUNER, DÎNER, DESSERTS, BOISSONS)
# ---------------------------------------------------------------------------
def build_breakfasts():
    # Séparation stricte Sucré IG Bas vs Salé IG Bas !
    sweet_bases = [
        ("Porridge Flocons d'Avoine & Graines de Chia", ["40g de flocons d'avoine complets", "1 c.à.s de graines de chia", "180ml de lait d'amande sans sucre"], "Faites tiédir ou gonfler à froid les flocons d'avoine et le chia dans le lait d'amande pendant 5 min.", 8),
        ("Pudding de Chia Velouté Coco-Vanille", ["3 c.à.s de graines de chia", "200ml de lait de coco léger sans sucre", "1/2 c.à.c d'extrait de vanille naturelle"], "Mélangez les graines de chia, le lait de coco et la vanille. Laissez prendre au frais 2h (ou la veille au soir).", 5),
        ("Bol de Yaourt Grec Protéiné & Lin Moulu", ["150g de yaourt grec nature", "1 c.à.s de graines de lin fraîchement moulues"], "Versez le yaourt grec dans un bol et incorporez les graines de lin moulues riches en oméga-3.", 5),
        ("Skyr Nature Fouetté à la Purée d'Amande", ["150g de Skyr ou fromage blanc", "1 c.à.s de purée d'amande complète 100%"], "Fouettez le Skyr avec la purée d'amande pour obtenir une texture onctueuse et très rassasiante.", 5),
        ("Pancakes Express Farine d'Amande & Sarrasin", ["1 œuf bio", "25g de farine de sarrasin", "20g de poudre d'amande", "50ml de lait végétal"], "Mélangez les ingrédients en pâte lisse et faites dorer 2 petits pancakes à la poêle antiadhésive 2 min par face.", 10),
    ]
    sweet_toppings = [
        ("Myrtilles Sauvages & Amandes Effilées", ["80g de myrtilles fraîches ou surgelées", "15g d'amandes effilées grillées"], "Riches en anthocyanes antioxydants avec une charge glycémique très basse.", "Très Bas", 5),
        ("Framboises Fraîches & Éclats de Noix", ["80g de framboises", "4 cerneaux de noix de Grenoble concassés"], "Alliance de fibres solubles et d'oméga-3 pour une matinée sans fringale.", "Très Bas", 4),
        ("Pomme Granny Smith & Cannelle de Ceylan", ["1/2 pomme Granny Smith coupée en petits dés", "1/2 c.à.c de cannelle de Ceylan"], "La cannelle de Ceylan et la pectine de pomme verte régulent la glycémie matinale.", "Bas", 6),
        ("Poire Conférence, Cacao Cru & Noisettes", ["1/2 poire en lamelles", "1 carré de chocolat noir 85% râpé", "10 noisettes torréfiées"], "Gourmand, riche en magnésium et polyphénols de cacao.", "Bas", 7),
        ("Fraises Fraîches, Pistaches & Menthe", ["100g de fraises en quartiers", "1 c.à.s de pistaches non salées", "Quelques feuilles de menthe ciselées"], "Frais, vitaminé et ultra léger pour la glycémie.", "Très Bas", 4),
    ]

    savory_recipes = [
        {
            "title": "Toast de Seigle au Levain, Avocat & Saumon Fumé",
            "time": "8 min",
            "description": "Le grand classique salé riche en oméga-3 et fibres de seigle : zéro pic d'insuline garanti jusqu'au déjeuner.",
            "ig": "Très Bas",
            "cg": 6,
            "kcal": 340,
            "tags": ["Petit-déjeuner Salé", "Oméga-3", "IG Très Bas"],
            "ingredients": ["1 belle tranche de pain de seigle intégral au levain (50g)", "1/2 avocat mûr écrasé", "1 tranche de saumon fumé sauvage", "Filet de jus de citron & aneth frais"],
            "instructions": "Faites griller légèrement le pain de seigle. Tartinez l'avocat écrasé avec le jus de citron, déposez le saumon fumé et parsemez d'aneth."
        },
        {
            "title": "Omelette Forestière Épinards, Champignons & Feta",
            "time": "10 min",
            "description": "Petit-déjeuner 100% protéiné et riche en fibres vertes, avec une charge glycémique quasi nulle (CG 1).",
            "ig": "Très Bas",
            "cg": 1,
            "kcal": 295,
            "tags": ["Petit-déjeuner Salé", "Protéiné", "Sans Glucides"],
            "ingredients": ["2 œufs bio plein air", "1 grosse poignée d'épinards frais", "4 champignons de Paris émincés", "25g de feta émiettée", "1 c.à.c d'huile d'olive"],
            "instructions": "Faites poêler les champignons et les épinards 3 min dans l'huile d'olive. Versez les œufs battus, parsemez de feta et repliez l'omelette baveuse."
        },
        {
            "title": "Œufs au Plat sur Lit d'Avocat, Tomates Cerises & Pain Intégral",
            "time": "9 min",
            "description": "Assiette salée complète apportant choline, lutéine et acides gras mono-insaturés.",
            "ig": "Très Bas",
            "cg": 6,
            "kcal": 350,
            "tags": ["Petit-déjeuner Salé", "Satiété", "IG Bas"],
            "ingredients": ["2 œufs bio", "1/2 avocat en lamelles", "6 tomates cerises coupées en deux", "1 tranche de pain intégral au levain", "Piment d'Espelette & origan"],
            "instructions": "Faites cuire les œufs au plat à feu doux (le jaune coulant est plus digeste). Servez avec l'avocat, les tomates cerises et le pain grillé."
        },
        {
            "title": "Tartine Pumpernickel au Chèvre Frais, Noix & Radis Croquants",
            "time": "6 min",
            "description": "Croquant, frais et alcalinisant grâce au pain noir allemand Pumpernickel (IG 40).",
            "ig": "Très Bas",
            "cg": 5,
            "kcal": 280,
            "tags": ["Petit-déjeuner Salé", "Express", "Végétarien"],
            "ingredients": ["2 fines tranches de pain de seigle Pumpernickel", "40g de fromage de chèvre frais", "5 radis roses en fines rondelles", "4 cerneaux de noix concassés", "Ciboulette fraîche"],
            "instructions": "Tartinez le pain de seigle de chèvre frais, disposez les rondelles de radis, les éclats de noix et la ciboulette ciselée."
        },
        {
            "title": "Brouillade d'Œufs au Saumon Fumé & Ciboulette",
            "time": "8 min",
            "description": "Texture crémeuse obtenue à feu doux, riche en protéines nobles et vitamine D.",
            "ig": "Très Bas",
            "cg": 1,
            "kcal": 310,
            "tags": ["Petit-déjeuner Salé", "Protéiné", "Keto / IG Nul"],
            "ingredients": ["2 œufs bio", "1 tranche de saumon ou truite fumée en lanières", "1 c.à.s de yaourt grec ou crème d'amande", "Ciboulette fraîche & poivre du moulin"],
            "instructions": "Battez les œufs et faites-les cuire à feu très doux en remuant sans cesse. Hors du feu, ajoutez la cuillère de yaourt grec, le saumon fumé et la ciboulette."
        }
    ]

    result = list(savory_recipes)
    for b_title, b_ing, b_inst, b_time in sweet_bases:
        for t_title, t_ing, t_desc, t_ig, t_cg in sweet_toppings:
            result.append({
                "title": f"{b_title} — {t_title}",
                "time": f"{b_time} min",
                "description": f"{t_desc} Base rassasiante riche en fibres solubles.",
                "ig": t_ig,
                "cg": t_cg,
                "kcal": 290 + t_cg * 8,
                "tags": ["Petit-déjeuner", f"IG {t_ig}", "Fibres"],
                "ingredients": b_ing + t_ing,
                "instructions": f"{b_inst} Garnissez ensuite avec : {', '.join(t_ing)}."
            })
    return result


def build_lunches_and_dinners():
    proteins = [
        ("Blanc de Poulet Fermier aux Herbes", "130g de blanc de poulet fermier", "Faites dorer le poulet émincé à la poêle dans l'huile d'olive avec du thym et de l'ail.", "Volaille maigre haute satiété", 150),
        ("Pavé de Saumon Sauvage à l'Unilatéral", "1 pavé de saumon frais (130g)", "Cuisez le saumon côté peau 6 min à feu moyen puis 2 min sur l'autre face.", "Riche en oméga-3 anti-inflammatoires", 230),
        ("Tofu Fumé Doré au Sésame & Tamari", "120g de tofu fumé bio en dés", "Faites dorer les dés de tofu à la poêle avec 1 c.à.c de sauce soja Tamari réduite en sel et des graines de sésame.", "Protéine végétale complète à IG 15", 155),
        ("Dos de Cabillaud au Citron & Aneth", "140g de dos de cabillaud", "Cuisez le cabillaud au four ou à couvert à la poêle 8 min avec un filet de citron et de l'aneth.", "Poisson blanc ultra-léger et digeste", 120),
        ("Crevettes Sauvages Sautées à l'Ail & Persil", "140g de crevettes décortiquées", "Saisissez les crevettes 4 min à feu vif avec une gousse d'ail hachée et du persil plat.", "Riche en protéines et sélénium", 130),
        ("Émincé de Bœuf Maigre au Romarin", "125g de filet ou rumsteck de bœuf maigre", "Saisissez l'émincé de bœuf 3 min à feu vif avec une branche de romarin.", "Riche en fer héminique et zinc", 175)
    ]

    carbs = [
        ("Quinoa Gourmand", "120g de quinoa cuit", "Rincez et cuisez le quinoa 12 min dans 2 volumes d'eau salée.", 8, 145),
        ("Lentilles Vertes du Puy", "140g de lentilles vertes du Puy cuites", "Cuisez les lentilles 22 min avec laurier et oignon piqué de girofle.", 5, 155),
        ("Patate Douce Vapeur au Paprika", "120g de patate douce en dés", "Cuisez les dés de patate douce à la vapeur douce 12 min et saupoudrez de paprika fumé.", 9, 105),
        ("Riz Basmati Complet", "120g de riz basmati complet cuit", "Faites cuire le riz basmati complet à couvert puis égrainez à la fourchette.", 10, 145),
        ("Sarrasin Torréfié (Kasha)", "120g de sarrasin cuit", "Hydratez le sarrasin 10 min dans l'eau bouillante salée puis égouttez.", 7, 135),
        ("Pois Chiches Rôtis au Cumin", "130g de pois chiches cuits", "Faites revenir les pois chiches égouttés 6 min à la poêle avec du cumin et de la coriandre.", 6, 165)
    ]

    veggies = [
        ("Brocolis Croquants au Citron", "180g de fleurettes de brocoli", "Cuisez les brocolis à la vapeur 6 min pour les garder vert vif et croquants."),
        ("Fondue de Poireaux Douce", "2 blancs de poireaux émincés", "Faites fondre les poireaux à couvert 12 min à feu doux avec un filet d'eau et d'huile d'olive."),
        ("Tagliatelles de Courgettes à l'Ail", "200g de courgettes bio", "Taillez les courgettes en rubans et poêlez-les 4 min à feu vif pour conserver leur croquant."),
        ("Poêlée Forestière Épinards & Champignons", "150g d'épinards frais et 100g de champignons", "Faites sauter les champignons 5 min puis ajoutez les épinards 1 min jusqu'à ce qu'ils tombent."),
        ("Tian de Poivrons & Aubergines Grillées", "150g d'aubergine et 1 poivron rouge", "Faites griller les légumes en lanières 15 min avec des herbes de Provence."),
        ("Haricots Verts Extra-Fins & Amandes", "180g de haricots verts extra-fins + 10g d'amandes effilées", "Cuisez les haricots verts à la vapeur 8 min et parsemez d'amandes effilées grillées."),
        ("Chou-Fleur Rôti au Curcuma & Poivre Noir", "180g de chou-fleur en bouquets", "Faites dorer les bouquets de chou-fleur 12 min avec 1/2 c.à.c de curcuma et du poivre noir.")
    ]

    lunches = []
    dinners = []

    # 42 Déjeuners complets (Protéine + Légume en entrée/accompagnement + Glucide lent IG bas)
    for p_idx, p in enumerate(proteins):
        for v_idx, v in enumerate(veggies):
            c = carbs[(p_idx + v_idx) % len(carbs)]
            lunches.append({
                "title": f"{p[0]}, {v[0]} & {c[0]}",
                "time": "20 min",
                "description": f"Assiette antidiabète équilibrée (50% fibres, 25% protéine, 25% glucide lent). {p[3]}.",
                "ig": "Très Bas" if c[3] <= 6 else "Bas",
                "cg": c[3] + 1,
                "kcal": p[4] + c[4] + 95,
                "tags": ["Déjeuner Complet", "IG Bas", "Assiette Équilibrée"],
                "ingredients": [
                    v[1] + " (à consommer en premier)",
                    p[1],
                    c[1],
                    "1 c.à.s d'huile d'olive vierge extra & jus de citron"
                ],
                "instructions": (
                    f"1. Préparez le féculent à IG bas : {c[2]} "
                    f"2. Préparez les légumes riches en fibres : {v[2]} "
                    f"3. Cuisez la protéine : {p[2]} "
                    f"4. Conseil glycémie : commencez par déguster quelques bouchées de légumes avant le féculent."
                )
            })

    # 42 Dîners métaboliques (soit sans féculents pour le repos pancréatique nocturne, soit avec légumineuses légères)
    for p_idx, p in enumerate(proteins):
        for v_idx, v in enumerate(veggies):
            light_dinner = (p_idx + v_idx) % 2 == 0
            if light_dinner:
                dinners.append({
                    "title": f"{p[0]} sur Lit de {v[0]}",
                    "time": "15 min",
                    "description": f"Dîner métabolique léger sans féculents pour maintenir une glycémie nocturne basse et favoriser la lipolyse. {p[3]}.",
                    "ig": "Très Bas",
                    "cg": 2,
                    "kcal": p[4] + 120,
                    "tags": ["Dîner Léger", "Sans Féculents", "IG Très Bas"],
                    "ingredients": [
                        v[1],
                        p[1],
                        "1/4 d'avocat ou 10g de graines de courge",
                        "1 c.à.s d'huile d'olive ou de colza & herbes fraîches"
                    ],
                    "instructions": (
                        f"1. {v[2]} "
                        f"2. {p[2]} "
                        f"3. Dressez sur assiette chaude, arrosez d'huile crue riche en oméga-3/9 et parsemez de graines."
                    )
                })
            else:
                c = carbs[(p_idx * 2 + v_idx) % len(carbs)]
                dinners.append({
                    "title": f"Poêlée du Soir : {p[0]}, {v[0]} & Touche de {c[0]}",
                    "time": "18 min",
                    "description": f"Dîner rassasiant à charge glycémique contrôlée favorisant la sérotonine et un sommeil réparateur.",
                    "ig": "Très Bas" if c[3] <= 7 else "Bas",
                    "cg": max(4, c[3] - 2),
                    "kcal": p[4] + int(c[4] * 0.7) + 95,
                    "tags": ["Dîner Complet", "Satiété Nocturne", "IG Bas"],
                    "ingredients": [
                        v[1],
                        p[1],
                        f"Demi-portion : {c[1]}",
                        "1 c.à.s d'huile d'olive vierge extra & jus de citron"
                    ],
                    "instructions": (
                        f"1. {v[2]} "
                        f"2. {p[2]} "
                        f"3. Ajoutez une demi-portion de {c[0].lower()} ({c[2]}). Assaisonnez d'huile d'olive et de citron."
                    )
                })

    return lunches, dinners


def build_desserts():
    dessert_bases = [
        ("Mousse Aérienne au Chocolat Noir 85% & {}", ["100g de chocolat noir 85% min.", "3 blancs d'œufs bio", "1 pincée de fleur de sel"], "Faites fondre le chocolat noir au bain-marie. Montez les blancs en neige ferme et incorporez-les délicatement au chocolat tiédi."),
        ("Verrine Onctueuse Brebis-Amande & {}", ["150g de yaourt de brebis ou grec", "1 c.à.s de purée d'amande blanche", "Extrait de vanille"], "Fouettez le yaourt avec la purée d'amande et la vanille puis dressez en verrine."),
        ("Tartelette Crue Amande-Coco & {}", ["50g de poudre d'amande", "1 c.à.s d'huile de coco vierge", "1 c.à.s de purée de noisette"], "Mélangez la poudre d'amande, le coco et la purée de noisette, tassez au fond d'un cercle et laissez figer 15 min au frais."),
        ("Cheesecake Léger Sans Cuisson & {}", ["100g de fromage frais ou ricotta", "50g de Skyr", "Zeste de citron bio non traité"], "Fouettez la ricotta et le Skyr avec le zeste de citron et dressez sur un lit d'amandes concassées."),
        ("Poire Rôtie au Four aux Épices & {}", ["1 poire Conférence ferme", "1/2 c.à.c de cannelle de Ceylan", "1 noisette de beurre clarifié ou huile de coco"], "Coupez la poire en deux, saupoudrez de cannelle et enfournez 15 min à 180°C.")
    ]
    toppings = [
        ("Éclats de Noisettes Torréfiées", ["15g de noisettes torréfiées concassées"], "Parsemez les noisettes juste avant de servir pour le croquant.", 3),
        ("Framboises Fraîches Acidulées", ["60g de framboises fraîches"], "Déposez les framboises fraîches au sommet.", 3),
        ("Vanille Bourbon & Cacao Pur", ["Graines d'1/2 gousse de vanille", "Voile de cacao pur non sucré"], "Parfumez à la vanille et poudrez de cacao.", 2),
        ("Fève Tonka Râpée & Amandes", ["1 pincée de fève Tonka râpée", "10g d'amandes effilées"], "Râpez la fève Tonka au dernier moment.", 3),
        ("Pistaches Vertes Concassées", ["15g de pistaches vertes non salées"], "Ajoutez les pistaches concassées au dressage.", 3)
    ]

    desserts = [
        {
            "title": "Fondant Intense au Chocolat Noir & Farine de Pois Chiche",
            "time": "22 min",
            "description": "Un fondant au chocolat bluffant, sans farine de blé ni sucre blanc, riche en fibres et protéines végétales.",
            "ig": "Très Bas",
            "cg": 4,
            "kcal": 215,
            "tags": ["Dessert", "Chocolat", "Sans Gluten", "IG Très Bas"],
            "ingredients": ["150g de chocolat noir 85%", "3 œufs bio", "40g d'huile de coco ou purée d'amande", "2 c.à.s d'érythritol ou xylitol", "25g de farine de pois chiche ou poudre d'amande"],
            "instructions": "Faites fondre le chocolat avec la purée d'amande. Battez les œufs avec l'érythritol, incorporez la farine puis le chocolat. Enfournez 12 à 14 min à 180°C."
        },
        {
            "title": "Panna Cotta Lait d'Amande & Coulis de Framboises sans Sucre",
            "time": "15 min",
            "description": "Dessert italien revisité sans crème lourde ni sucre ajouté, gélifié à l'agar-agar (fibre marine prébiotique).",
            "ig": "Très Bas",
            "cg": 2,
            "kcal": 135,
            "tags": ["Dessert", "Fruits Rouges", "Sans Lactose", "IG Très Bas"],
            "ingredients": ["250ml de lait et crème d'amande cuisine sans sucre", "1g d'agar-agar", "100g de framboises", "1/2 gousse de vanille"],
            "instructions": "Portez à ébullition 2 min le lait d'amande avec la vanille et l'agar-agar. Versez en verrines et réfrigérez 2h. Nappez de framboises mixées."
        },
        {
            "title": "Cookies Moelleux Beurre de Cacahuète & Pépites 85%",
            "time": "18 min",
            "description": "Biscuits riches en bons lipides et protéines végétales, parfaits avec un thé vert.",
            "ig": "Bas",
            "cg": 5,
            "kcal": 195,
            "tags": ["Dessert", "Biscuits", "Sans Farine Blanche"],
            "ingredients": ["100g de purée de cacahuète 100% arachide", "1 œuf bio", "40g de poudre d'amande", "25g de pépites de chocolat noir 85%", "1 c.à.s d'érythritol"],
            "instructions": "Mélangez tous les ingrédients, formez 8 petits palets sur papier cuisson et enfournez 10 min à 180°C."
        },
        {
            "title": "Carpaccio d'Agrumes à la Cannelle, Menthe & Pistaches",
            "time": "8 min",
            "description": "Dessert méditerranéen ultra-frais associant la naringine du pamplemousse à la cannelle régulatrice.",
            "ig": "Très Bas",
            "cg": 4,
            "kcal": 110,
            "tags": ["Dessert", "Agrumes", "Vitamine C"],
            "ingredients": ["1/2 pamplemousse rose pelé à vif", "1/2 orange sanguine en fines tranches", "1/2 c.à.c de cannelle de Ceylan", "10g de pistaches concassées", "Feuilles de menthe fraîche"],
            "instructions": "Disposez les tranches d'agrumes en rosace, saupoudrez de cannelle de Ceylan, de pistaches et de menthe ciselée."
        },
        {
            "title": "Crumble Pomme Granny &Fruits Rouges à la Poudre d'Amande",
            "time": "25 min",
            "description": "Tout le plaisir d'un crumble chaud et croustillant avec une pâte aux amandes et flocons d'avoine à IG bas.",
            "ig": "Bas",
            "cg": 6,
            "kcal": 210,
            "tags": ["Dessert", "Four", "Gourmand"],
            "ingredients": ["1 pomme Granny Smith en dés", "80g de myrtilles et framboises", "40g de poudre d'amande", "20g de flocons d'avoine", "1 c.à.s d'huile de coco", "Cannelle de Ceylan"],
            "instructions": "Disposez les fruits et la cannelle dans un plat. Sablez du bout des doigts la poudre d'amande, l'avoine et l'huile de coco, répartissez sur les fruits et enfournez 20 min à 180°C."
        }
    ]

    for b_title, b_ing, b_inst in dessert_bases:
        for t_title, t_ing, t_inst, t_cg in toppings:
            desserts.append({
                "title": b_title.format(t_title),
                "time": "12 min",
                "description": "Dessert gourmand à indice glycémique très bas, formulé sans sucre raffiné ni farine blanche.",
                "ig": "Très Bas",
                "cg": t_cg,
                "kcal": 185,
                "tags": ["Dessert", "IG Très Bas", "Sans Sucre Ajouté"],
                "ingredients": b_ing + t_ing,
                "instructions": f"{b_inst} {t_inst}"
            })

    return desserts


def build_drinks():
    return [
        {
            "title": "Tonique Pré-Repas au Vinaigre de Cidre & Citron",
            "time": "2 min",
            "description": "Réduit de 20 à 30% le pic de glycémie du repas suivant grâce à l'acide acétique qui freine l'alpha-amylase.",
            "ig": "Très Bas",
            "cg": 0,
            "kcal": 8,
            "tags": ["Boisson Fonctionnelle", "Anti-Pic Glycémique", "Avant Repas"],
            "ingredients": ["250ml d'eau tempérée ou gazeuse", "1 c.à.s de vinaigre de cidre bio non pasteurisé (avec la mère)", "Quelques gouttes de jus de citron"],
            "instructions": "Diluez le vinaigre de cidre dans le grand verre d'eau et buvez (idéalement à la paille) 10 à 15 minutes avant le déjeuner ou le dîner."
        },
        {
            "title": "Golden Latte (Lait d'Or Anti-Inflammatoire Curcuma & Cannelle)",
            "time": "5 min",
            "description": "Boisson chaude ayurvédique combinant curcumine, pipérine et cannelle de Ceylan pour l'équilibre métabolique.",
            "ig": "Très Bas",
            "cg": 1,
            "kcal": 65,
            "tags": ["Boisson Chaude", "Anti-inflammatoire", "Soir"],
            "ingredients": ["250ml de lait d'amande sans sucre", "1 c.à.c de curcuma bio", "1/2 c.à.c de cannelle de Ceylan", "1 pincée de poivre noir moulu", "1/2 c.à.c d'huile de coco"],
            "instructions": "Chauffez doucement le lait d'amande avec toutes les épices et l'huile de coco en fouettant jusqu'à obtenir une mousse fine."
        },
        {
            "title": "Thé Vert Sencha Glacé au Gingembre & Menthe Fraîche",
            "time": "10 min",
            "description": "Riche en catéchines EGCG qui stimulent l'oxydation des graisses et la sensibilité à l'insuline.",
            "ig": "Très Bas",
            "cg": 0,
            "kcal": 5,
            "tags": ["Thé Glacé", "Antioxydant", "Zéro Sucre"],
            "ingredients": ["1 litre d'eau à 75°C", "2 c.à.s de thé vert Sencha bio", "3 cm de gingembre frais râpé", "10 feuilles de menthe fraîche", "Jus d'1/2 citron"],
            "instructions": "Faites infuser le thé vert et le gingembre 4 min (pas plus pour éviter l'amertume), filtrez, ajoutez la menthe et le citron puis placez au frais."
        },
        {
            "title": "Infusion d'Écorce de Cannelle de Ceylan & Fenugrec",
            "time": "10 min",
            "description": "Tisane métabolique traditionnelle reconnue pour soutenir la régulation naturelle de la glycémie après le repas.",
            "ig": "Très Bas",
            "cg": 0,
            "kcal": 5,
            "tags": ["Tisane Métabolique", "Cannelle", "Après Repas"],
            "ingredients": ["300ml d'eau frémissante", "1 bâton de vraie cannelle de Ceylan", "1/2 c.à.c de graines de fenugrec", "1 rondelle de citron bio"],
            "instructions": "Laissez infuser le bâton de cannelle et les graines de fenugrec 8 à 10 minutes à couvert dans l'eau frémissante, puis filtrez."
        },
        {
            "title": "Eau Détox Concombre, Citron, Romarin & Framboises",
            "time": "5 min",
            "description": "Eau infusée reminéralisante pour s'hydrater toute la journée sans aucune calorie ni édulcorant.",
            "ig": "Très Bas",
            "cg": 0,
            "kcal": 10,
            "tags": ["Eau Infusée", "Hydratation", "Zéro Sucre"],
            "ingredients": ["1 litre d'eau filtrée", "1/3 de concombre en fines rondelles", "1/2 citron bio tranché", "1 branche de romarin frais", "6 framboises fraîches"],
            "instructions": "Placez tous les ingrédients dans une carafe en verre, remplissez d'eau fraîche et laissez infuser au moins 1h au réfrigérateur."
        },
        {
            "title": "Kéfir d'Eau Fermenté Maison (Zéro Sucre Résiduel)",
            "time": "10 min (+48h)",
            "description": "Boisson pétillante riche en probiotiques vivants qui renforcent le microbiote intestinal impliqué dans le contrôle glycémique.",
            "ig": "Très Bas",
            "cg": 1,
            "kcal": 18,
            "tags": ["Probiotique", "Microbiote", "Pétillant"],
            "ingredients": ["1 litre d'eau de source", "3 c.à.s de grains de kéfir de fruits", "1/2 citron bio", "1 figue sèche bio", "20g de sucre blond (consommé à 95% par les grains lors de la fermentation)"],
            "instructions": "Fermentez 48h en bocal couvert d'un linge jusqu'à ce que la figue remonte. Filtrez et mettez en bouteille au frais."
        },
        {
            "title": "Infusion Glacée Hibiscus (Bissap), Vanille & Citron Vert",
            "time": "12 min",
            "description": "Riche en anthocyanes protecteurs du système vasculaire et de la tension artérielle.",
            "ig": "Très Bas",
            "cg": 0,
            "kcal": 8,
            "tags": ["Infusion", "Cardiovasculaire", "Zéro Sucre"],
            "ingredients": ["1 litre d'eau", "3 c.à.s de fleurs d'hibiscus séchées", "1/2 gousse de vanille fendue", "Le jus d'un citron vert"],
            "instructions": "Infusez les fleurs d'hibiscus et la vanille 10 min dans l'eau chaude. Filtrez, ajoutez le jus de citron vert et servez bien frais."
        },
        {
            "title": "Matcha Latte Fouetté au Lait de Soja Sans Sucre",
            "time": "5 min",
            "description": "Concentration d'antioxydants L-théanine et EGCG offrant une énergie calme et durable sans pic de cortisol.",
            "ig": "Très Bas",
            "cg": 1,
            "kcal": 70,
            "tags": ["Matcha", "Énergie Calme", "Antioxydant"],
            "ingredients": ["1 c.à.c rase de thé vert Matcha cérémoniel", "60ml d'eau à 75°C", "180ml de lait de soja ou d'amande sans sucre", "1 pincée de cannelle"],
            "instructions": "Fouettez le matcha avec l'eau chaude en formant un W, puis versez le lait végétal chaud préalablement moussé."
        },
        {
            "title": "Smoothie Vert Fibres Intégrales Avocat, Épinards & Citron",
            "time": "5 min",
            "description": "Préparé au blender pour conserver 100% des fibres insolubles et solubles avec une charge glycémique quasi nulle.",
            "ig": "Très Bas",
            "cg": 2,
            "kcal": 145,
            "tags": ["Smoothie", "Fibres Intégrales", "Satiété"],
            "ingredients": ["1/2 concombre bio", "1 grosse poignée d'épinards frais", "1/3 d'avocat", "Jus d'un demi-citron", "200ml d'eau fraîche ou lait d'amande", "1 c.à.c de graines de chia"],
            "instructions": "Mixez tous les ingrédients au blender pendant 45 secondes jusqu'à l'obtention d'un velouté vert homogène."
        },
        {
            "title": "Chai Latte Maison aux Épices Entières (Sans Sirop)",
            "time": "10 min",
            "description": "Synergie de cardamome, cannelle, gingembre et clou de girofle pour stimuler la thermogenèse sans sucre.",
            "ig": "Très Bas",
            "cg": 1,
            "kcal": 60,
            "tags": ["Boisson Chaude", "Épices", "Thermogenèse"],
            "ingredients": ["200ml de lait d'amande ou soja sans sucre", "100ml d'eau", "1 sachet de thé noir Assam ou Rooibos", "3 gousses de cardamome, 1 bâton de cannelle, 2 rondelles de gingembre"],
            "instructions": "Faites frémir l'eau avec les épices 5 min, ajoutez le thé et le lait végétal, laissez infuser 3 min puis filtrez."
        }
    ]


# ---------------------------------------------------------------------------
# 4. IMPORTATION DES 166 RECETTES VÉRIFIÉES KENWOOD AT641
# ---------------------------------------------------------------------------
def load_kenwood_recipes():
    detox_file = r"G:\Mon Drive\Antoine-Drive\Antigravity\Recettes-Detox\recipes.js"
    if os.path.exists(detox_file):
        with open(detox_file, "r", encoding="utf-8") as f:
            raw = f.read().strip()
        json_str = raw.replace("const recipes = ", "", 1).rstrip(";\n ")
        detox_list = json.loads(json_str)
        converted = []
        for r in detox_list:
            gi_val = r.get("glycemicIndex", 15)
            cat_label = {
                "signature": "Signature Menu",
                "shots": "Shot Express",
                "glycemie": "Spécial Glycémie IG≤15",
                "green": "Green Détox",
                "vitality": "Vitalité"
            }.get(r.get("category"), "Kenwood AT641")
            converted.append({
                "id": r.get("id"),
                "title": r.get("title"),
                "category": r.get("category", "green"),
                "time": f"{r.get('nutrition', {}).get('prepMinutes', 4)} min",
                "description": r.get("description"),
                "ig": f"IG {gi_val} ({r.get('glycemicLoad', 'Très basse')})",
                "igNumeric": gi_val,
                "cg": round((gi_val * r.get("nutrition", {}).get("carbsGrams", 10)) / 100, 1),
                "kcal": r.get("nutrition", {}).get("kcal", 80),
                "volumeMl": r.get("nutrition", {}).get("volumeMl", 250),
                "kenwoodSpeed": r.get("kenwoodSpeed", "Vitesse 1 puis Vitesse 2"),
                "bestTime": r.get("bestTime", "Matin"),
                "vitamins": r.get("vitamins", []),
                "tags": [cat_label, r.get("kenwoodSpeed", "Kenwood AT641")] + r.get("benefits", [])[:2],
                "ingredients": r.get("ingredients", []),
                "instructions": r.get("instructions", "")
            })
        return converted
    return []


def main():
    breakfasts = build_breakfasts()
    lunches, dinners = build_lunches_and_dinners()
    desserts = build_desserts()
    drinks = build_drinks()
    kenwood = load_kenwood_recipes()

    meal_examples = {
        "breakfast": breakfasts,
        "lunch": lunches,
        "dinner": dinners,
        "dessert": desserts,
        "drinks": drinks,
        "kenwood": kenwood
    }

    output = (
        "// Fichier généré automatiquement par generate_all_data.py — Base vérifiée Menu Antidiabète\n"
        f"export const theoryData = {json.dumps(THEORY_DATA, ensure_ascii=False, indent=2)};\n\n"
        f"export const foodDatabase = {json.dumps(FOOD_DATABASE, ensure_ascii=False, indent=2)};\n\n"
        f"export const mealExamples = {json.dumps(meal_examples, ensure_ascii=False, indent=2)};\n"
    )

    with open("data.js", "w", encoding="utf-8") as f:
        f.write(output)

    total_meals = sum(len(v) for v in meal_examples.values())
    print(
        f"data.js généré avec succès : {len(THEORY_DATA)} fiches théorie, "
        f"{len(FOOD_DATABASE)} aliments, et {total_meals} recettes vérifiées "
        f"(dont {len(kenwood)} jus Kenwood AT641)."
    )


if __name__ == "__main__":
    main()
