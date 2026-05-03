import json
import random

# We generate permutations of low GI ingredients to make healthy detox juices.

bases_aqueuses = [
    ("Concombre", "1/2 concombre", "Hydratant et très faible en sucre."),
    ("Céleri", "2 branches de céleri", "Diurétique naturel et riche en minéraux."),
    ("Courgette", "1 petite courgette", "Doux, aqueux et IG nul."),
    ("Laitue Romaine", "1 cœur de laitue romaine", "Base très douce et riche en eau."),
    ("Eau de Coco", "150ml d'eau de coco pure", "Naturellement isotonique.")
]

feuillages_verts = [
    ("Épinards", "1 grosse poignée d'épinards frais", "Riche en fer et magnésium."),
    ("Chou Kale", "2 belles feuilles de chou Kale", "Super-aliment bourré d'antioxydants."),
    ("Persil", "1 petit bouquet de persil", "Aide à la détoxification des reins."),
    ("Cresson", "1 poignée de cresson", "Saveur poivrée et détoxifiant puissant."),
    ("Blettes", "1 feuille de blette", "Riche en fibres douces.")
]

fruits_faible_ig = [
    ("Pomme Verte", "1 pomme Granny Smith", "IG bas, apporte la juste dose de douceur acidulée."),
    ("Citron", "Le jus d'un demi-citron", "Alcalinisant et antioxydant majeur."),
    ("Pamplemousse", "1/2 pamplemousse", "Baisse le taux d'insuline et de sucre dans le sang."),
    ("Kiwi", "1 kiwi", "Riche en vitamine C et fibres douces."),
    ("Fraises", "Une poignée de fraises", "Riches en antioxydants, IG très bas.")
]

boosters = [
    ("Gingembre", "1 cm de racine de gingembre frais", "Stimule la digestion et l'immunité."),
    ("Curcuma", "1 cm de racine de curcuma frais", "Anti-inflammatoire naturel extrêmement puissant."),
    ("Menthe", "5 feuilles de menthe fraîche", "Rafraîchissant et aide à la digestion."),
    ("Fenouil", "1/4 de bulbe de fenouil", "Adoucit et favorise le confort intestinal."),
    ("Graines de Chia", "1 c.à.c de graines de chia", "Apporte des oméga-3 et épaissit le jus.")
]

def generate_juice():
    b = random.choice(bases_aqueuses)
    f = random.choice(feuillages_verts)
    fr = random.choice(fruits_faible_ig)
    boost = random.choice(boosters)
    
    title = f"Jus Détox {b[0]}, {f[0]} & {fr[0]}"
    
    ingredients = [b[1], f[1], fr[1], boost[1]]
    
    instructions = (
        f"Lavez soigneusement tous les ingrédients. "
        f"Passez d'abord le feuillage ({f[0].lower()}) dans l'extracteur Kenwood AT641, "
        f"suivi de la base aqueuse ({b[0].lower()}) pour bien extraire le jus des feuilles. "
        f"Ajoutez ensuite le fruit ({fr[0].lower()}) et terminez par le booster ({boost[0].lower()}). "
        f"Mélangez le jus obtenu et consommez-le idéalement dans les 15 minutes."
    )
    
    desc = f"{b[2]} {f[2]} {fr[2]} {boost[2]} Idéal pour une extraction lente."
    
    return {
        "title": title,
        "time": f"{random.randint(5, 8)} min",
        "description": desc,
        "ig": "Très Bas",
        "tags": ["Extracteur de Jus", "Détox", "Kenwood AT641"],
        "ingredients": ingredients,
        "instructions": instructions
    }

recipes = []
seen_titles = set()

def get_unique_recipe():
    for _ in range(200):
        r = generate_juice()
        if r["title"] not in seen_titles:
            seen_titles.add(r["title"])
            return r
    # Fallback to variants
    r = generate_juice()
    r["title"] += f" (Variante {random.randint(1, 1000)})"
    return r

# Generate exactly 150 unique combinations
for _ in range(150):
    recipes.append(get_unique_recipe())

# Path to the deployed data.js
data_js_path = r"g:\Mon Drive\Antoine\Antigravity\menu-antidiabete\menu-antidiabete-deploy\data.js"

try:
    with open(data_js_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # We find the final "};" closing the export const mealExamples object.
    # We will replace the very last instance of "\n};" or "};"
    # Actually, simpler: rsplit on "};", insert the new category, then join.
    parts = content.rsplit("};", 1)
    
    if len(parts) == 2:
        new_json = ",\n  \"kenwood\": " + json.dumps(recipes, ensure_ascii=False, indent=4) + "\n};"
        new_content = parts[0] + new_json + parts[1]
        
        with open(data_js_path, 'w', encoding='utf-8') as file:
            file.write(new_content)
        
        print(f"Successfully injected 150 Kenwood Detox recipes into {data_js_path}.")
    else:
        print("Error: Could not find the closing brace of the data.js file.")

except Exception as e:
    print(f"An error occurred: {e}")
