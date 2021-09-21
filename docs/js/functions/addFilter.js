let filters = [];

function addFilter(type, value) {
  filters.push({type: type, value:value});
}

function removeFilter(param) {
  filters.splice(filters.indexOf(param), 1);
}

export { addFilter, removeFilter, filters };