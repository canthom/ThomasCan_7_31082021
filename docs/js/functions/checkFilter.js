let filters = [];

function checkFilter(recipesArray) {
  filters.forEach(element => {
    const elemValue = element.value;

    if (element.type === 'Ingredient') {
      recipesArray = recipesArray.filter(element => {
        return element.ingredients.find(element => element.ingredient.includes(elemValue));
      })
    }

    if (element.type === 'Appliance') {
      recipesArray = recipesArray.filter(element => {
        return element.appliance.toLocaleLowerCase().includes(elemValue.toLocaleLowerCase());
      })
    }

    if (element.type === 'Ustensil') {
      recipesArray = recipesArray.filter(element => {
        return element.ustensils.includes(elemValue);
      })
    }
  })

  return recipesArray;
}

export { checkFilter, filters };