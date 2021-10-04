import { checkFilter, filters } from '../functions/checkFilter.js';

function generateFiltersList(recipesArray, filtersList, filterType, searchValue) {
  recipesArray = checkFilter(recipesArray);

  if (searchValue) {
    recipesArray.forEach(element => {
      if (filterType === 'ingredients') {
        element.ingredients.forEach(element => {
          if (element.ingredient.toLocaleLowerCase().match(searchValue.toLocaleLowerCase())) {
            filtersList.push(element.ingredient);
          }
        })
      }
  
      if (filterType === 'appliances') {
        if (element.appliance.toLocaleLowerCase().match(searchValue.toLocaleLowerCase())) {
          filtersList.push(element.appliance);
        }
      }
  
      if (filterType === 'ustensils') {
        element.ustensils.forEach(element => {
          if (element.toLocaleLowerCase().match(searchValue.toLocaleLowerCase())) {
            filtersList.push(element);
          }
        })
      }
    })
  } else {
    recipesArray.forEach(element => {
      if (filterType === 'ingredients') {
        element.ingredients.forEach(element => {
          filtersList.push(element.ingredient);
        })
      }
  
      if (filterType === 'appliances') {
        filtersList.push(element.appliance);
      }
  
      if (filterType === 'ustensils') {
        element.ustensils.forEach(element => {
          filtersList.push(element);
        })
      }
    })
  }
}

export { generateFiltersList };