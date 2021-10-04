// IMPORTS
import { renderRecipes } from './functions/renderRecipes.js';
import { renderFiltersList } from './functions/renderFiltersList.js';
import { Appliance } from './class/Appliance.js';
import { Ustensil } from './class/Ustensil.js';
import { Ingredient } from './class/Ingredient.js';
import { recipes } from './recipes.js';
import { searchFilterIngredients, searchFilterAppliances, searchFilterUstensils } from './functions/searchFilter.js';

// INITIALISATION DES CLASSES
Appliance.init();
Ustensil.init();
Ingredient.init();

// AFFICHAGE PAR DEFAUT DE LA PAGE
let result = [...recipes];

function refresh() {
  renderRecipes(result);
  renderFiltersList(result);
}
refresh();
export { refresh };