// IMPORTS
import { renderRecipes } from './functions/renderRecipes.js';
import { renderFilters } from './functions/renderFilters.js';
import { Appliance } from './class/Appliance.js';
import { Ustensil } from './class/Ustensil.js';
import { Ingredient } from './class/Ingredient.js';
import { startSearch } from './functions/search.js';
import { startSearchFilter } from './functions/searchFilter.js';
import { recipes } from './recipes.js';
import { checkFilter } from './functions/checkFilter.js';

// INITIALISATION DES CLASSES
Appliance.init();
Ustensil.init();
Ingredient.init();

// AFFICHAGE PAR DEFAUT DE LA PAGE
let result = [...recipes];


function refresh() {
  renderRecipes(result);
  renderFilters(result);
}
export { refresh };

renderRecipes(result);
renderFilters(result);

// RECHERCHE
startSearch();
startSearchFilter();