import { Recipe } from '../class/Recipe.js';
import { checkFilter } from '../functions/checkFilter.js';

function renderRecipes(recipesArray) {
  // RESET
  document.querySelector('.section-result').innerHTML = '';

  recipesArray = checkFilter(recipesArray);

  // RENDEMENT
  recipesArray.forEach(element => {
    const recipe = new Recipe(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils);
    recipe.render();
  })
}

export { renderRecipes };