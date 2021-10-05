import { Recipe } from '../class/Recipe.js';
import { refresh } from '../index.js';
import { isFilterActive } from './isFilterActive.js';

function renderRecipes(recipesArray) {
  // RESET
  document.querySelector('.section-result').innerHTML = '';

  recipesArray = isFilterActive(recipesArray);

  // RENDEMENT
  recipesArray.forEach(element => {
    const recipe = new Recipe(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils);
    recipe.render();
  })
}

export { renderRecipes };