// IMPORTS
import { renderRecipes } from './functions/renderRecipes.js';
import { renderFiltersList } from './functions/renderFiltersList.js';
import { Appliance } from './class/Appliance.js';
import { Ustensil } from './class/Ustensil.js';
import { Ingredient } from './class/Ingredient.js';
import { recipes } from './recipes.js';
import { searchFilterIngredients, searchFilterAppliances, searchFilterUstensils } from './functions/searchFilter.js';
import { startSearch } from './functions/search.js';
import { isFilterActive } from './functions/isFilterActive.js'

// INITIALISATION DES CLASSES
Appliance.init();
Ustensil.init();
Ingredient.init();

// Etape 1 : référencer les recettes dans une Array
let result = [...recipes];

// Etape 2 : vérifier si un filtre est actif
let resultFiltered = isFilterActive(result);

// Etape 3 : vérifier si une recherche a eu lieu
// let resultSearched = isSearchActive(resultFiltered);

// Etape 4 : afficher les résultats à l'écran
function refresh() {
  renderFiltersList(resultFiltered);
  renderRecipes(resultFiltered);
}
refresh();
export { refresh };