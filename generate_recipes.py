import json
import random
import re

# We will read the current data.js, extract the first part (theory and foodDatabase), and append the massive mealExamples.

# Banks of ingredients for permutations
breakfast_bases = [
    ("Bowl Express Avoine & {}", ["40g de flocons d'avoine", "150ml de lait d'amande", "Cannelle"], "Mélangez les flocons d'avoine avec le lait. Laissez gonfler 5 minutes. Ajoutez la garniture."),
    ("Pudding de Chia au Lait de Coco & {}", ["3 c.à.s de graines de chia", "200ml de lait de coco léger", "Extrait de vanille"], "Mélangez le chia et le lait. Laissez reposer 2h ou toute la nuit. Ajoutez les fruits frais par-dessus."),
    ("Toast de Seigle à l'Avocat & {}", ["1 tranche de pain de seigle", "1/2 avocat écrasé", "Jus de citron"], "Faites griller le pain. Tartinez l'avocat citronné. Ajoutez la garniture et dégustez."),
    ("Yaourt Grec Nature & {}", ["150g de yaourt grec", "1 c.à.s de graines de lin"], "Versez le yaourt dans un bol. Mélangez avec les graines de lin et ajoutez votre garniture."),
    ("Omelette Protéinée & {}", ["2 œufs entiers", "Un filet d'huile d'olive", "Herbes de Provence"], "Battez les œufs. Faites cuire l'omelette dans la poêle chaude avec la garniture pendant 3 minutes.")
]
breakfast_toppings = [
    ("Myrtilles", ["1 poignée de myrtilles", "Amandes effilées"], "Antioxydant et IG très bas."),
    ("Framboises", ["1 poignée de framboises", "Noix concassées"], "Riche en fibres et acidulé."),
    ("Saumon Fumé", ["1 tranche de saumon fumé", "Aneth frais"], "Gourmand et riche en oméga-3."),
    ("Épinards et Champignons", ["1 poignée d'épinards", "2 champignons émincés"], "Salé et très rassasiant."),
    ("Pomme Cannelle", ["1/2 pomme verte en dés", "1 pincée de cannelle supplémentaire"], "Doux, avec une charge glycémique contrôlée.")
]

proteins = [
    ("Poulet Grillé", "120g de blanc de poulet", "Faites dorer le poulet à la poêle avec un peu d'huile d'olive.", "Volaille maigre"),
    ("Pavé de Saumon", "1 pavé de saumon frais", "Faites cuire le saumon à l'unilatéral pendant 8 minutes.", "Riche en oméga-3"),
    ("Tofu Fumé", "100g de tofu fumé en cubes", "Faites revenir le tofu dans une cuillère de sauce soja.", "Végétarien"),
    ("Bœuf Émincé", "100g de bœuf maigre émincé", "Saisissez la viande rapidement à feu vif.", "Riche en fer"),
    ("Crevettes Sautées", "150g de crevettes", "Faites sauter les crevettes avec de l'ail et du persil.", "Très pauvre en calories")
]

carbs = [
    ("Quinoa", "50g de quinoa", "Faites cuire le quinoa 12 min dans l'eau bouillante."),
    ("Lentilles Vertes", "60g de lentilles", "Laissez mijoter les lentilles 25 min avec un bouquet garni."),
    ("Patate Douce", "1 petite patate douce", "Coupez en dés et rôtissez au four 20 min avec du paprika."),
    ("Spaghettis Complets", "50g de pâtes au blé complet", "Cuisez les pâtes al dente pour maintenir un IG bas."),
    ("Riz Sauvage", "50g de riz sauvage", "Faites cuire le riz 20 minutes.")
]

veggies = [
    ("Brocolis Croquants", "150g de brocolis", "Faites cuire les brocolis à la vapeur pendant 7 min."),
    ("Fondue de Poireaux", "2 blancs de poireaux", "Émincez et faites suer les poireaux à la poêle 15 min."),
    ("Courgettes Poêlées", "1 belle courgette", "Coupez en rondelles et faites revenir à la poêle avec de l'ail."),
    ("Poivrons Confits", "1 poivron rouge", "Faites revenir de fines lanières de poivron jusqu'à ce qu'elles soient tendres."),
    ("Épinards à la Crème", "200g d'épinards frais", "Faites tomber les épinards dans une poêle avec 1 c.à.s de crème végétale.")
]

def generate_breakfast():
    base = random.choice(breakfast_bases)
    top = random.choice(breakfast_toppings)
    
    title = base[0].format(top[0])
    ingredients = base[1] + top[1]
    instructions = f"{top[2]} {base[2]}"
    
    return {
        "title": title,
        "time": f"{random.randint(5, 12)} min",
        "description": f"Un petit-déjeuner parfaitement équilibré. {top[2]}",
        "ig": "Très Bas" if "Myrtilles" in title or "Épinard" in title else "Bas",
        "tags": ["Petit-déjeuner", "IG Bas", "Santé"],
        "ingredients": ingredients,
        "instructions": instructions
    }

def generate_lunch_dinner(is_dinner=False):
    p = random.choice(proteins)
    c = random.choice(carbs)
    v = random.choice(veggies)
    
    # Dinners sometimes skip carbs
    if is_dinner and random.random() > 0.5:
        title = f"{p[0]} aux {v[0]}"
        ingredients = [p[1], v[1], "1 c.à.s d'huile d'olive", "Herbes fraîches", "Sel et poivre"]
        instructions = f"Préparation du légume : {v[2]} Préparation de la protéine : {p[2]} Dressez ensemble et ajoutez un filet d'huile d'olive."
        desc = f"Un repas très léger, idéal pour le soir. {p[3]}."
        tags = ["Sans Féculents", "Léger", "Soir"]
    else:
        title = f"Bowl de {p[0]}, {c[0]} et {v[0]}"
        ingredients = [p[1], c[1], v[1], "1 c.à.s d'huile d'olive", "Épices au choix", "Sel et poivre"]
        instructions = f"1. {c[2]} 2. {v[2]} 3. {p[2]} 4. Assemblez le tout dans une assiette creuse ou un bol. Assaisonnez."
        desc = f"Une assiette complète et rassasiante. L'association parfait entre fibres, protéines et glucides lents."
        tags = ["Complet", "Équilibré"]

    return {
        "title": title,
        "time": f"{random.randint(15, 30)} min",
        "description": desc,
        "ig": "Bas",
        "tags": tags,
        "ingredients": ingredients,
        "instructions": instructions
    }

# Generate 50 of each
breakfasts = []
lunches = []
dinners = []

# To ensure uniqueness, we will keep generating and using a set for titles
seen_titles = set()

def get_unique_recipe(generator, *args):
    for _ in range(100):
        r = generator(*args)
        if r["title"] not in seen_titles:
            seen_titles.add(r["title"])
            return r
    # Fallback if we run out of pure unique titles
    r = generator(*args)
    r["title"] += f" (Variante {random.randint(1, 100)})"
    return r

for _ in range(50):
    breakfasts.append(get_unique_recipe(generate_breakfast))
    lunches.append(get_unique_recipe(generate_lunch_dinner, False))
    dinners.append(get_unique_recipe(generate_lunch_dinner, True))

# We need to read the existing data.js to preserve the theory and foodDatabase
try:
    with open('data.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Split the file right before "export const mealExamples"
    parts = content.split('export const mealExamples')
    top_part = parts[0]
    
    # Construct the new JSON for mealExamples
    meal_examples_obj = {
        "breakfast": breakfasts,
        "lunch": lunches,
        "dinner": dinners
    }
    
    new_meal_examples_str = "export const mealExamples = " + json.dumps(meal_examples_obj, ensure_ascii=False, indent=2) + ";\n"
    
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(top_part)
        f.write(new_meal_examples_str)
        
    print(f"Successfully generated 150 recipes (50 breakfast, 50 lunch, 50 dinner).")

except Exception as e:
    print(f"Error: {e}")
