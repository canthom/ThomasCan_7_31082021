import { recipes } from '../recipes.js';
import { isFilterActive } from './isFilterActive.js';
import { renderRecipes } from './renderRecipes.js';
import { refresh } from '../index.js';
import { renderFiltersList } from './renderFiltersList.js';

const container = document.querySelector('.section-result');
const search = document.querySelector('#search');

let result = [...recipes];

function startSearch() {
  result = [...recipes];
  isFilterActive(result);
  if (search.value.length > 3) {
    container.innerHTML = '';
    result = result.filter(element => {
      return  element.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()) || element.description.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()) || element.ingredients.find(element => element.ingredient.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()));
    });
    renderRecipes(result);
    renderFiltersList(result)
  }

  if (search.value.length === 0) {
    refresh();
  }
}

search.oninput = startSearch;

export {startSearch};