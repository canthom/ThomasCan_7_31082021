import { applyFilter } from './applyFilter.js';
import { renderFiltersList } from './renderFiltersList.js';
import { resultFiltered } from '../index.js';

const searchIngredients = document.querySelector('#ingredientsSearch');
const searchAppliances = document.querySelector('#applianceSearch');
const searchUstensils = document.querySelector('#ustensilsSearch');

// Recherche parmi les filtres Ingredients
function searchFilterIngredients(e) {
  applyFilter(resultFiltered);

  if (e.target.value.length > 1) {
    let searchValue = e.target.value; 
    renderFiltersList(resultFiltered, searchValue);
  }

  if (e.target.value.length === 0) {
    renderFiltersList(resultFiltered);
  }

  window.addEventListener('click', (e) => {
    if (!e.target.closest('#ingredientsSearch')) {
      searchIngredients.value = '';
      renderFiltersList(resultFiltered);
    }
  })
}
searchIngredients.oninput = searchFilterIngredients;

// Recherche parmi les filtres Appareils
function searchFilterAppliances(e) {
  applyFilter(resultFiltered);

  if (e.target.value) {
    let searchValue = e.target.value;
    renderFiltersList(resultFiltered, searchValue);
  }

  if (e.target.value.length === 0) {
    renderFiltersList(resultFiltered);
  }

  window.addEventListener('click', (e) => {
    if (!e.target.closest('#applianceSearch')) {
      searchAppliances.value = '';
      renderFiltersList(resultFiltered);
    }
  })
}
searchAppliances.oninput = searchFilterAppliances;

// Recherche parmi les filtres Appareils
function searchFilterUstensils(e) {
  applyFilter(resultFiltered);

  if (e.target.value) {
    let searchValue = e.target.value; 
    renderFiltersList(resultFiltered, searchValue);
  }

  if (e.target.value.length === 0) {
    renderFiltersList(resultFiltered);
  }

  window.addEventListener('click', (e) => {
    if (!e.target.closest('#ustensilsSearch')) {
      searchUstensils.value = '';
      renderFiltersList(resultFiltered);
    }
  })
}
searchUstensils.oninput = searchFilterUstensils;

export { searchFilterIngredients, searchFilterAppliances, searchFilterUstensils }; 