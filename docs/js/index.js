// IMPORTS
import { renderRecipes } from './functions/renderRecipes.js';
import { renderFiltersList } from './functions/renderFiltersList.js';
import { Appliance } from './class/Appliance.js';
import { Ustensil } from './class/Ustensil.js';
import { Ingredient } from './class/Ingredient.js';
import { recipes } from './recipes.js';
import { searchFilterIngredients, searchFilterAppliances, searchFilterUstensils } from './functions/searchFilter.js';
import { applyFilter } from './functions/applyFilter.js';

// INITIALISATION DES CLASSES
Appliance.init();
Ustensil.init();
Ingredient.init();

// Etape 1 : faire une copie des recettes dans une Array
let result = [...recipes];

// Etape 2 : vérifier si un filtre est actif
let resultFiltered = applyFilter(result);

// Etape 3 : Recherche
const search = document.querySelector('#search');

function startSearch(event) {
  if (event.target.value.length > 3) {
    const container = document.querySelector('.section-result');
    container.innerHTML = '';
    resultFiltered = searchRecipes(resultFiltered, event.target.value);

    if (resultFiltered.length === 0) {
      container.innerHTML = `Aucune recette ne correspond à votre critère… vous pouvez
      chercher « tarte aux pommes », « poisson », etc`;
    } else {
      refresh();
    }
  }

  if (event.target.value.length === 0) {
    resultFiltered = applyFilter(result);
    refresh();
  }
}

function searchRecipes(recipesList, value) {
  let searchResults = [];

  for (let i = 0; i < recipesList.length; i += 1) {
    if (recipesList[i].name.toLocaleLowerCase().match(value.toLocaleLowerCase())) {
      searchResults.push(recipesList[i]);
    }

    if (recipesList[i].description.toLocaleLowerCase().match(value.toLocaleLowerCase())) {
      searchResults.push(recipesList[i]);
    }

    if (recipesList[i].ingredients.find(element => element.ingredient.toLocaleLowerCase().match(value.toLocaleLowerCase()))) {
      searchResults.push(recipesList[i]);
    }
  }
  return [...new Set(searchResults)];
}

search.oninput = startSearch;

// Etape 4 : afficher les résultats à l'écran
function refresh() {
  renderFiltersList(resultFiltered);
  renderRecipes(resultFiltered);
}
refresh();
export { refresh, resultFiltered };