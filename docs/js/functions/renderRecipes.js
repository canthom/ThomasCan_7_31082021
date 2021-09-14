import { recipes } from '../recipes.js';
import { Recipe } from '../class/Recipe.js';

function renderRecipes() {
  let result = recipes;

  // RESET
  document.querySelector('.section-result').innerHTML = '';
  
  // SI FILTRE 
  const filterAppli = document.querySelector('.filters-selected__box--appliance span');
  const filterUst = document.querySelector('.filters-selected__box--ustensils span');
    
  if (filterAppli) {
    result = recipes.filter(element => {
      return element.appliance.includes(filterAppli.textContent);
    })
  }

  if (filterUst) {
    result = recipes.filter(element => {
      return element.ustensils.includes(filterUst.textContent);
    })
  }
  
  // RENDEMENT PAR DEFAUT
  result.forEach(element => {
    const recipe = new Recipe(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils);
    recipe.render();
  })
}

export { renderRecipes };