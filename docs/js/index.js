// IMPORTS
import { renderRecipes } from './functions/renderRecipes.js';
import { renderFiltersList } from './functions/renderFiltersList.js';
import { Appliance } from './class/Appliance.js';
import { Ustensil } from './class/Ustensil.js';
import { Ingredient } from './class/Ingredient.js';
import { recipes } from './recipes.js';
import { searchFilterIngredients, searchFilterAppliances, searchFilterUstensils } from './functions/searchFilter.js';
import { isFilterActive } from './functions/isFilterActive.js';

// INITIALISATION DES CLASSES
Appliance.init();
Ustensil.init();
Ingredient.init();

// Etape 1 : faire une copie des recettes dans une Array
let result = [...recipes];

// Etape 2 : vérifier si un filtre est actif
let resultFiltered = isFilterActive(result);

// Etape 3 : Recherche
const search = document.querySelector('#search');

function startSearch() {
  if (search.value.length > 3) {
    const container = document.querySelector('.section-result');
    container.innerHTML = '';
    resultFiltered = resultFiltered.filter(element => {
      return  element.name.toLocaleLowerCase().match(search.value.toLocaleLowerCase()) || element.description.toLocaleLowerCase().match(search.value.toLocaleLowerCase()) || element.ingredients.find(element => element.ingredient.toLocaleLowerCase().match(search.value.toLocaleLowerCase()));
    });
    refresh();
  }

  if (search.value.length === 0) {
    resultFiltered = isFilterActive(result);
    refresh();
  }
}

search.oninput = startSearch;

// Etape 4 : afficher les résultats à l'écran
function refresh() {
  renderFiltersList(resultFiltered);
  renderRecipes(resultFiltered);  
}
refresh();
export { refresh };