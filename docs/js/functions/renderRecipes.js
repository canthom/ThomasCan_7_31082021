import { Recipe } from '../class/Recipe.js';
import { checkFilter, filters } from '../functions/checkFilter.js';
import { recipes } from '../recipes.js';

function renderRecipes(recipesArray) {
  // RESET
  document.querySelector('.section-result').innerHTML = '';

  recipesArray = checkFilter(recipesArray);

  // RENDEMENT
  if (filters.length != 0) {
    recipesArray.forEach(element => {
      const recipe = new Recipe(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils);
      recipe.render();
    })
  } else {
    recipes.forEach(element => {
      const recipe = new Recipe(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils);
      recipe.render();
    })
  }
}

export { renderRecipes };