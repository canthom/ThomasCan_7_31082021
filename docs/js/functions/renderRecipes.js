import { Recipe } from '../class/Recipe.js';
import { checkFilter, result } from '../functions/checkFilter.js';

function renderRecipes() {
  // RESET
  document.querySelector('.section-result').innerHTML = '';
  
  // FILTRES
  checkFilter();

  // RENDEMENT PAR DEFAUT
  result.forEach(element => {
    const recipe = new Recipe(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils);
    recipe.render();
  })
}

export { renderRecipes };