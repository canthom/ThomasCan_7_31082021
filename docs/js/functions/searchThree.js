import { recipes } from '../recipes.js';
import { checkFilter } from './isFilterActive.js';
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
    let filteredResult = [];

    for (let i = 0 ; i < result.length ; i+= 1) {
      if (result[i].name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())) {
        filteredResult.push(result[i]);
      }

      if (result[i].description.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())) {
        filteredResult.push(result[i]);
      }

      if (result[i].ingredients.find(el => el.ingredient.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()))){
        filteredResult.push(result[i]);
      }
    }
    result = [...filteredResult];

    renderRecipes(result);
  }

  if (search.value.length === 0) {
    refresh();
  }
}

search.oninput = startSearch;

export {startSearch};