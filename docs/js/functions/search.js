import { Recipe } from '../class/Recipe.js';
import { recipes } from '../recipes.js';
import { checkFilter } from './checkFilter.js';
import { renderRecipes } from './renderRecipes.js';
import { refresh } from '../index.js';

const container = document.querySelector('.section-result');
const search = document.querySelector('#search');

let result = [...recipes];

function startSearch() {
  result = [...recipes];
  checkFilter(result);

  if (search.value.length > 3) {
    container.innerHTML = '';
    result = result.filter(element => {
      return  element.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()) || element.description.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()) || element.ingredients.find(element => element.ingredient.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()));
    });

    renderRecipes(result);
  }

  if (search.value.length === 0) {
    refresh();
  }
}

search.oninput = startSearch;

export {startSearch};