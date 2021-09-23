import { filters } from '../functions/checkFilter.js';

function addFilter(type, value) {
  filters.push({type: type, value:value});
}

// AJOUTER LE PARAM TYPE EN PLUS DE LA VALUE
// const filters = [{value : 'coco', type: "Ingredient"}]
function removeFilter(param) {
  filters.splice(filters.findIndex(element => element.value === param), 1);
}

export { addFilter, removeFilter };