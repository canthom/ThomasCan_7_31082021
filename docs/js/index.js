// IMPORTS
import { renderRecipes } from './functions/renderRecipes.js';
import { Appliance } from './class/Appliance.js';
import { Ustensil } from './class/Ustensil.js';
import { Ingredient } from './class/Ingredient.js';
import { startSearch } from './functions/searchTwo.js';

// INITIALISATION DES CLASSES
Appliance.init();
Ustensil.init();
Ingredient.init();

// VARIABLES
let filters = [];
export { filters };

// AFFICHAGE PAR DEFAUT DE LA PAGE
renderRecipes();

// RECHERCHE
startSearch();