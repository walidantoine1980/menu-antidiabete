import json

# Drinks ideas (Low GI, Detox)
drinks = [
    {
        "title": "Infusion Froide Menthe & Citron",
        "time": "5 min (infusion 2h)",
        "description": "Une eau détox ultra-rafraîchissante, idéale pour nettoyer le foie sans sucre.",
        "ig": "Très Bas",
        "tags": ["Détox", "Frais", "Zéro Sucre"],
        "ingredients": ["1 litre d'eau filtrée", "1/2 citron bio coupé en rondelles", "10 feuilles de menthe fraîche", "Quelques glaçons"],
        "instructions": "Placez les rondelles de citron et la menthe au fond d'une carafe. Versez l'eau. Laissez infuser au frais pendant 2 heures minimum."
    },
    {
        "title": "Smoothie Vert Brûle-Graisse",
        "time": "5 min",
        "description": "Un concentré de vitamines et de fibres. L'avocat et le concombre maintiennent l'IG très bas.",
        "ig": "Très Bas",
        "tags": ["Smoothie", "Fibres", "Vert"],
        "ingredients": ["1/2 concombre", "1 poignée d'épinards frais", "1/4 d'avocat", "Le jus d'un demi citron", "200ml d'eau ou lait d'amande sans sucre"],
        "instructions": "Épluchez le concombre et l'avocat. Mixez tous les ingrédients dans un blender jusqu'à obtenir une texture parfaitement lisse."
    },
    {
        "title": "Thé Vert Glacé au Gingembre",
        "time": "10 min (refroidissement 1h)",
        "description": "Le thé vert et le gingembre sont connus pour accélérer le métabolisme et stabiliser la glycémie.",
        "ig": "Très Bas",
        "tags": ["Thé", "Gingembre", "Stimulant"],
        "ingredients": ["1 litre d'eau", "2 sachets de thé vert bio", "1 gros morceau de gingembre frais râpé", "1 c.à.c d'érythritol (optionnel)"],
        "instructions": "Faites infuser le thé et le gingembre râpé dans l'eau chaude pendant 10 minutes. Filtrez, sucrez à l'érythritol si désiré, puis placez au frais."
    },
    {
        "title": "Eau Détox Concombre, Framboise & Romarin",
        "time": "5 min",
        "description": "Une boisson très douce et aromatique, parfaite pour s'hydrater tout au long de la journée.",
        "ig": "Très Bas",
        "tags": ["Eau infusée", "Hydratation"],
        "ingredients": ["1 litre d'eau", "1/4 de concombre en fines rondelles", "1 branche de romarin frais", "Quelques framboises écrasées"],
        "instructions": "Mélangez tous les ingrédients dans une bouteille ou une carafe. Laissez reposer 1 heure au réfrigérateur pour libérer les arômes."
    },
    {
        "title": "Kéfir de Fruits Maison (IG contrôlé)",
        "time": "10 min (fermentation 48h)",
        "description": "La boisson probiotique par excellence. La fermentation consomme le sucre, l'IG final est donc quasi nul !",
        "ig": "Bas",
        "tags": ["Probiotique", "Pétillant"],
        "ingredients": ["1 litre d'eau", "3 c.à.s de grains de Kéfir de fruits", "2 c.à.s de sucre (qui sera mangé par le kéfir)", "1 demi citron", "1 figue sèche"],
        "instructions": "Dans un bocal, mettez l'eau, les grains, le sucre, le citron et la figue. Couvrez d'un linge. Laissez fermenter 48h à température ambiante jusqu'à ce que la figue remonte à la surface. Filtrez et buvez."
    },
    {
        "title": "Golden Latte (Lait d'Or au Curcuma)",
        "time": "5 min",
        "description": "Le curcuma est un puissant anti-inflammatoire naturel.",
        "ig": "Très Bas",
        "tags": ["Boisson Chaude", "Anti-inflammatoire"],
        "ingredients": ["250ml de lait d'amande sans sucre", "1 c.à.c rase de curcuma en poudre", "1 pincée de poivre noir (crucial pour l'absorption)", "1 pincée de cannelle", "1/2 c.à.c d'huile de coco"],
        "instructions": "Faites chauffer doucement le lait végétal à la casserole. Ajoutez les épices et l'huile de coco. Fouettez vigoureusement jusqu'à obtenir une petite mousse."
    },
    {
        "title": "Infusion Hibiscus (Bissap sans sucre)",
        "time": "15 min",
        "description": "Très florale et acidulée, cette boisson aide à faire baisser la tension artérielle.",
        "ig": "Très Bas",
        "tags": ["Tisane", "Rouge", "Froid ou Chaud"],
        "ingredients": ["1 litre d'eau", "3 c.à.s de fleurs d'hibiscus séchées", "1 gousse de vanille fendue", "Érythritol (selon le goût)"],
        "instructions": "Faites bouillir l'eau avec les fleurs et la vanille pendant 10 minutes. Filtrez pour retirer les fleurs. À boire très frais l'été ou chaud l'hiver."
    },
    {
        "title": "Jus Vert Céleri-Pomme (Extracteur)",
        "time": "10 min",
        "description": "Le fameux jus de céleri purifiant, adouci par une demi-pomme verte (qui a un IG bas).",
        "ig": "Bas",
        "tags": ["Jus", "Vitamines", "Céleri"],
        "ingredients": ["1/2 botte de céleri branche", "1/2 pomme verte (Granny Smith)", "1/2 citron pelé à vif"],
        "instructions": "Passez le céleri, la pomme et le citron à l'extracteur de jus (pas de blender). À boire immédiatement, de préférence le matin à jeun."
    },
    {
        "title": "Vinaigre de Cidre Tonique Matinal",
        "time": "2 min",
        "description": "Boire du vinaigre de cidre avant un repas abaisse considérablement le pic de glycémie qui suit.",
        "ig": "Très Bas",
        "tags": ["Tonique", "Coupe-faim", "Astuce IG"],
        "ingredients": ["1 grand verre d'eau tiède", "1 c.à.s de vinaigre de cidre de pomme (non pasteurisé)"],
        "instructions": "Mélangez le vinaigre de cidre dans l'eau. Buvez-le à la paille (pour protéger l'émail des dents) 15 minutes avant votre repas principal."
    },
    {
        "title": "Chai Tea Latte au Lait de Soja",
        "time": "10 min",
        "description": "L'alternative parfaite aux lattes des grandes chaînes, bourrés de sirops sucrés.",
        "ig": "Très Bas",
        "tags": ["Réconfortant", "Épices"],
        "ingredients": ["1 sachet de thé noir", "200ml de lait de soja nature", "Cardamome, cannelle, clou de girofle", "1 c.à.c d'extrait de vanille"],
        "instructions": "Faites infuser le thé avec les épices dans très peu d'eau chaude. Faites chauffer et mousser le lait de soja, puis versez-le sur l'infusion."
    }
]

try:
    with open('data.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    parts = content.split('export const mealExamples = ')
    top_part = parts[0]
    json_str = parts[1].strip()
    
    if json_str.endswith(';'):
        json_str = json_str[:-1]
        
    meal_data = json.loads(json_str)
    
    # Add drinks key
    meal_data['drinks'] = drinks
    
    new_meal_examples_str = "export const mealExamples = " + json.dumps(meal_data, ensure_ascii=False, indent=2) + ";\n"
    
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(top_part)
        f.write(new_meal_examples_str)
        
    print(f"Successfully added {len(drinks)} drinks to data.js.")

except Exception as e:
    print(f"Error: {e}")
