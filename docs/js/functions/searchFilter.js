import { recipes } from '../recipes.js';
import { isFilterActive } from './isFilterActive.js';
import { renderFiltersList } from './renderFiltersList.js';

const searchIngredients = document.querySelector('#ingredientsSearch');
const searchAppliances = document.querySelector('#applianceSearch');
const searchUstensils = document.querySelector('#ustensilsSearch');
let result = [...recipes];

// Recherche parmi les filtres Ingredients
function searchFilterIngredients(e) {
  result = [...recipes];
  isFilterActive(result);

  if (e.target.value.length > 1) {
    let searchValue = e.target.value; 
    renderFiltersList(result, searchValue);
  }

  if (e.target.value.length === 0) {
    renderFiltersList(result);
  }

  window.addEventListener('click', (e) => {
    if (!e.target.closest('#ingredientsSearch')) {
      e.target.value = '';
      renderFiltersList(result);
    }
  })
}
searchIngredients.oninput = searchFilterIngredients;

// Recherche parmi les filtres Appareils
function searchFilterAppliances(e) {
  result = [...recipes];
  isFilterActive(result);

  if (e.target.value) {
    let searchValue = e.target.value;
    renderFiltersList(result, searchValue);
  }

  if (e.target.value.length === 0) {
    renderFiltersList(result);
  }

  window.addEventListener('click', (e) => {
    if (!e.target.closest('#applianceSearch')) {
      e.target.value = '';
      renderFiltersList(result);
    }
  })
}
searchAppliances.oninput = searchFilterAppliances;

// Recherche parmi les filtres Appareils
function searchFilterUstensils(e) {
  result = [...recipes];
  isFilterActive(result);

  if (e.target.value) {
    let searchValue = e.target.value; 
    renderFiltersList(result, searchValue);
  }

  if (e.target.value.length === 0) {
    renderFiltersList(result);
  }

  window.addEventListener('click', (e) => {
    if (!e.target.closest('#ustensilsSearch')) {
      e.target.value = '';
      renderFiltersList(result);
    }
  })
}
searchUstensils.oninput = searchFilterUstensils;

export { searchFilterIngredients, searchFilterAppliances, searchFilterUstensils }; 