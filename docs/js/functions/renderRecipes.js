import { recipes } from '../recipes.js';
import { Recipe } from '../class/Recipe.js';
import { filters } from '../functions/addFilter.js';

function renderRecipes() {
  let result = recipes;

  // RESET
  document.querySelector('.section-result').innerHTML = '';
  
  // FILTRES
  filters.forEach(element => {
    const elemValue = element.value;
    if (element.type === 'Ingredient') {
      result = recipes.filter(element => {
        return element.ingredients.find(element => element.ingredient.includes(elemValue));
      })
    }

    if (element.type === 'Appliance') {
      result = recipes.filter(element => {
        return element.appliance.toLocaleLowerCase().includes(elemValue.toLocaleLowerCase());
      })
    }

    if (element.type === 'Ustensil') {
      result = recipes.filter(element => {
        return element.ustensils.includes(elemValue);
      })
    }
  })

  // RENDEMENT PAR DEFAUT
  result.forEach(element => {
    const recipe = new Recipe(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils);
    recipe.render();
  })
}

export { renderRecipes };