import json
import re
import random

# Dessert ideas (Low GI)
dessert_bases = [
    ("Mousse au Chocolat Noir et {}", ["100g de chocolat noir 85%", "3 blancs d'œufs", "1 pincée de sel"], "Faites fondre le chocolat. Montez les blancs en neige avec le sel. Incorporez délicatement le chocolat tiédi."),
    ("Verrine Fraîcheur à la {}", ["150g de yaourt de brebis", "1 c.à.s de purée d'amande"], "Mélangez le yaourt et la purée d'amande. Alternez dans un verre avec la garniture."),
    ("Tartelette Express sans cuisson à la {}", ["50g de poudre d'amande", "1 c.à.s d'huile de coco", "1 c.à.c de purée de cacahuète"], "Mélangez l'amande, l'huile de coco et la purée pour faire un fond de tarte. Tassez. Ajoutez la garniture."),
    ("Cheesecake cru à la {}", ["100g de fromage frais (type Philadelphia)", "1 c.à.s de crème de coco"], "Fouettez le fromage avec la crème. Disposez sur une petite base d'amandes concassées. Surmontez de la garniture."),
    ("Poire Rôtie et {}", ["1 poire", "1 pincée de cannelle", "1 noisette de beurre clarifié"], "Coupez la poire en deux. Faites rôtir 15 min au four à 180°C. Servez avec la garniture.")
]

toppings = [
    ("Noisette Croquante", ["Éclats de noisettes torréfiées"], "Parsemez les noisettes juste avant de servir."),
    ("Framboise", ["Quelques framboises fraîches"], "Ajoutez les framboises en décoration."),
    ("Vanille Intense", ["Graines d'une gousse de vanille"], "Mélangez la vanille dans la préparation de base."),
    ("Fève Tonka", ["Un peu de fève Tonka râpée"], "Râpez la fève au dernier moment pour le parfum."),
    ("Pistache", ["Pistaches concassées non salées"], "Ajoutez pour une touche de couleur et de croquant.")
]

desserts = []
seen_titles = set()

def generate_dessert():
    base = random.choice(dessert_bases)
    top = random.choice(toppings)
    
    title = base[0].format(top[0])
    ingredients = base[1] + top[1]
    instructions = f"{base[2]} {top[2]}"
    
    return {
        "title": title,
        "time": f"{random.randint(5, 20)} min",
        "description": "Un dessert sans culpabilité, à indice glycémique très bas pour éviter le stockage de graisses.",
        "ig": "Très Bas",
        "tags": ["Dessert", "Gourmand", "IG Bas"],
        "ingredients": ingredients,
        "instructions": instructions
    }

for _ in range(30):
    for i in range(100):
        d = generate_dessert()
        if d["title"] not in seen_titles:
            seen_titles.add(d["title"])
            desserts.append(d)
            break

# Also add some explicit, famous low-GI desserts to ensure quality
manual_desserts = [
    {
        "title": "Fondant au Chocolat (Farine de Pois Chiche)",
        "time": "25 min",
        "description": "Un fondant bluffant, sans farine de blé et sans sucre raffiné.",
        "ig": "Bas",
        "tags": ["Dessert", "Chocolat", "Sans Gluten"],
        "ingredients": ["150g de chocolat noir 70% min.", "3 œufs", "50g de beurre ou huile de coco", "1 c.à.s de xylitol (sucre de bouleau)", "1 c.à.s de farine de pois chiche"],
        "instructions": "Faites fondre le chocolat et le gras. Fouettez les œufs et le xylitol. Mélangez le tout avec la farine. Enfournez 15 min à 180°C."
    },
    {
        "title": "Panna Cotta Lait d'Amande et Coulis Fruits Rouges",
        "time": "15 min",
        "description": "Léger, frais, et pratiquement sans impact sur la glycémie.",
        "ig": "Très Bas",
        "tags": ["Dessert", "Frais", "Sans Lactose"],
        "ingredients": ["250ml de crème d'amande", "1g d'agar-agar", "100g de fruits rouges surgelés", "1 c.à.c d'extrait de vanille"],
        "instructions": "Faites bouillir la crème d'amande avec l'agar-agar 2 min. Versez dans des verrines. Laissez prendre au frais. Mixez les fruits rouges pour le coulis et versez dessus."
    },
    {
        "title": "Cookies IG Bas au Beurre de Cacahuète",
        "time": "20 min",
        "description": "La gourmandise absolue du goûter ou du dessert, version saine.",
        "ig": "Bas",
        "tags": ["Dessert", "Biscuits"],
        "ingredients": ["100g de beurre de cacahuète pur", "1 œuf", "30g de poudre d'amande", "Pépites de chocolat noir"],
        "instructions": "Mélangez tous les ingrédients. Formez des boules et aplatissez-les sur une plaque. Enfournez 10 min à 180°C."
    }
]

desserts.extend(manual_desserts)

try:
    with open('data.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    parts = content.split('export const mealExamples = ')
    top_part = parts[0]
    json_str = parts[1].strip()
    
    if json_str.endswith(';'):
        json_str = json_str[:-1]
        
    meal_data = json.loads(json_str)
    
    # Add dessert key
    meal_data['dessert'] = desserts
    
    new_meal_examples_str = "export const mealExamples = " + json.dumps(meal_data, ensure_ascii=False, indent=2) + ";\n"
    
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(top_part)
        f.write(new_meal_examples_str)
        
    print(f"Successfully added {len(desserts)} desserts to data.js.")

except Exception as e:
    print(f"Error: {e}")
