let filters = [];

function isFilterActive(recipesArray) {
  filters.forEach(element => {
    const elemValue = element.value;

    if (element.type === 'Ingredient') {
      recipesArray = recipesArray.filter(element => {
        return element.ingredients.find(element => element.ingredient === elemValue);
      })
    }

    if (element.type === 'Appliance') {
      recipesArray = recipesArray.filter(element => {
        return element.appliance.toLocaleLowerCase() === elemValue.toLocaleLowerCase();
      })
    }

    if (element.type === 'Ustensil') {
      recipesArray = recipesArray.filter(element => {
        return element.ustensils.find(element => element === elemValue);
      })
    }
  })
  
  return recipesArray;
}

function addFilter(type, value) {
  filters.push({type: type, value:value});
}

function removeFilter(param) {
  filters.splice(filters.findIndex(element => element.value === param), 1);
}

export { isFilterActive, addFilter, removeFilter };