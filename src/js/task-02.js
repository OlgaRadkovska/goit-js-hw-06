const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const findIngredientsList = () => {
  const ingredientsListRef = document.querySelector("#ingredients");
  return ingredientsListRef;
};

const createIngredientsItem = (ingredient) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add("item");

  return ingredientsItem;
};

const addItems = (ingredients) => {
  const ingredientsList = findIngredientsList();

  ingredients.map((ingredient) => {
    const listItem = createIngredientsItem(ingredient);
    ingredientsList.append(listItem);
  });
};

addItems(ingredients);
