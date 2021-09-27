import { recipes } from '../recipes.js';
import { checkFilter } from './checkFilter.js';
import { refresh } from '../index.js';
import { renderFilters } from './renderFilters.js';

const searchFilter = document.querySelectorAll('.filters-list div input');
let result = [...recipes];

function startSearchFilter() {
  result = [...recipes];
  checkFilter(result);

  searchFilter.forEach(element => {
    const search = element;
    if (element.value.length > 2) {
      result = result.filter(element =>  {
        console.log(element.appliance.includes(search.value))
        return element.appliance.toLocaleLowerCase().includes(search.value.toLocaleLowerCase());
      })
      console.log(result)
      renderFilters(result);
    }
  
    if (element.value.length === 0) {
      refresh();
    }
  })
}

searchFilter.forEach(element => {
  element.oninput = startSearchFilter;
});

export { startSearchFilter };
