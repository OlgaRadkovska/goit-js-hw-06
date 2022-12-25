const findCategoryList = () => {
  const categoriesListRef = document.querySelector("#categories");

  return categoriesListRef;
};

const findCategoryItems = () => {
  const categoriesListItemsRef = document.querySelectorAll(".item");

  return categoriesListItemsRef;
};

const showFinalMessage = () => {
  const categoryList = findCategoryList();
  const categoriesNumber = categoryList.children.length;

  console.log(`Number of categories: ${categoriesNumber}`);

  const categoryListItems = findCategoryItems();

  categoryListItems.forEach((categorie) => {
    const categorieTitle = categorie.querySelector("h2").textContent;
    const categorieElementNumber = categorie.querySelectorAll("li").length;

    console.log(`Category: ${categorieTitle}`);
    console.log(`Elements: ${categorieElementNumber}`);
  });
};

showFinalMessage();
