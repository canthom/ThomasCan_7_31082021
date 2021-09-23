import { Recipe } from '../class/Recipe.js';
import { checkFilter } from './checkFilter.js';

const container = document.querySelector('.section-result');
const search = document.querySelector('#search');
search.oninput = startSearch;
function startSearch(recipesArray) {

  if (search.value.length > 3) {
    checkFilter();
    container.innerHTML = '';
    
    recipesArray.filter(element => {
      return element.ingredients.find(element => element.ingredient.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())) || element.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()) || element.description.toLocaleLowerCase().includes(search.value.toLocaleLowerCase());
    });

    recipesArray.forEach(element => {
      const recipe = new Recipe(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils);
      recipe.render();
    })
  }

  if (search.value.length === 0) {
    container.innerHTML = '';
    recipesArray.forEach(element => {
      const recipe = new Recipe(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils);
      recipe.render();
    })
  }
}

export {startSearch};