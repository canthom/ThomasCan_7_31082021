import { recipes } from '../recipes.js';
import { checkFilter } from './checkFilter.js';
import { refresh } from '../index.js';
import { renderFilters } from './renderFilters.js';

const searchFilter = document.querySelectorAll('.filters-list div input');
const searchIngredients = document.querySelector('#ingredientsSearch');
const searchAppliance = document.querySelector('#applianceSearch');
const searchUstensils = document.querySelector('#ustensilsSearch');
let result = [...recipes];

function startSearchFilter() {
  result = [...recipes];
  checkFilter(result);

  if (searchIngredients.value.length > 2) {
    result = result.filter(element => {
      return element.ingredients.find(element => element.ingredient.toLocaleLowerCase().match(searchIngredients.value.toLocaleLowerCase()));
    })
  }
  
  if (searchAppliance.value.length > 2) {
    result = result.filter(element =>  {
      return element.appliance.toLocaleLowerCase().includes(searchAppliance.value.toLocaleLowerCase());
    })
    renderFilters(result);
  }

  if (searchUstensils.value.length > 2) {
    result = result.filter(element =>  {
      return element.ustensils.find(element => element.toLocaleLowerCase().match(searchUstensils.value.toLocaleLowerCase()));
    })
    renderFilters(result);
  }

  searchFilter.forEach(element => {
    if (element.value.length === 0) {
      renderFilters(result);
    }
  })
}

searchFilter.forEach(element => {
  element.oninput = startSearchFilter;
})

export { startSearchFilter };
