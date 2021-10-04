import { refresh } from '../index.js';
import { recipes } from '../recipes.js';
import { checkFilter } from './checkFilter.js';
import { renderFiltersList } from './renderFiltersList.js';

const searchIngredients = document.querySelector('#ingredientsSearch');
const searchAppliances = document.querySelector('#applianceSearch');
const searchUstensils = document.querySelector('#ustensilsSearch');
let result = [...recipes];

// Recherche parmi les filtres Ingredients
function searchFilterIngredients(e) {
  result = [...recipes];
  checkFilter(result);

  if (e.target.value.length > 1) {
    let searchValue = e.target.value; 
    renderFiltersList(result, searchValue);
  }

  if (e.target.value.length === 0) {
    renderFiltersList(result);
  }
}
searchIngredients.oninput = searchFilterIngredients;

// Recherche parmi les filtres Appareils
function searchFilterAppliances(e) {
  result = [...recipes];
  checkFilter(result);

  if (e.target.value) {
    let searchValue = e.target.value;
    renderFiltersList(result, searchValue);
  }

  if (e.target.value.length === 0) {
    renderFiltersList(result);
  }
}
searchAppliances.oninput = searchFilterAppliances;

// Recherche parmi les filtres Appareils
function searchFilterUstensils(e) {
  result = [...recipes];
  checkFilter(result);

  if (e.target.value) {
    let searchValue = e.target.value; 
    renderFiltersList(result, searchValue);
  }

  if (e.target.value.length === 0) {
    renderFiltersList(result);
  }
}
searchUstensils.oninput = searchFilterUstensils;

export { searchFilterIngredients, searchFilterAppliances, searchFilterUstensils }; 