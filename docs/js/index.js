// IMPORTS
import { recipes } from './recipes.js';
import { Recipe } from './class/Recipe.js';
import { renderRecipes } from './functions/renderRecipes.js';
import { renderFilters } from './functions/renderFilters.js';
import { Appliance } from './class/Appliance.js';
import { Ustensil } from './class/Ustensil.js';
import { Ingredient } from './class/Ingredient.js';
import { startSearch } from './functions/search.js';

// INITIALISATION DES CLASSES
Appliance.init();
Ustensil.init();
Ingredient.init();

// AFFICHAGE PAR DEFAUT DE LA PAGE
renderRecipes();
renderFilters();

// RECHERCHE
startSearch();





