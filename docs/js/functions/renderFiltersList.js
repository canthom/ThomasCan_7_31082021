import { Appliance } from '../class/Appliance.js';
import { Ustensil } from '../class/Ustensil.js';
import { Ingredient } from '../class/Ingredient.js';
import { sortArray } from './sortArray.js';
import { checkFilter } from './checkFilter.js';
import { generateFiltersList } from './generateFiltersList.js';

let ingredients = [];
let appliances = [];
let ustensils = [];

function renderFiltersList(recipesArray, searchValue) {
  ingredients = [];
  appliances = [];
  ustensils = [];

  recipesArray = checkFilter(recipesArray);

  // RESET DES FILTRES
  const uls = document.querySelectorAll('ul');
  uls.forEach(element => {
    element.innerHTML = '';
  })

  // Génération des filtres
  generateFiltersList(recipesArray, ingredients, 'ingredients', searchValue);
  generateFiltersList(recipesArray, appliances, 'appliances', searchValue);
  generateFiltersList(recipesArray, ustensils, 'ustensils', searchValue);

  // Représentation visuelle des filtres
  const ingredientsUnique = [...new Set(ingredients)];
  sortArray(ingredientsUnique);
  ingredientsUnique.forEach(element => {
    const ingredient = new Ingredient(element);
    ingredient.renderPannel();
  })

  const appliancesUnique = [...new Set(appliances)];
  sortArray(appliancesUnique);
  appliancesUnique.forEach(element => {
    const appliance = new Appliance(element);
    appliance.renderPannel();
  })

  const ustensilsUnique = [...new Set(ustensils)];
  sortArray(ustensilsUnique);
  ustensilsUnique.forEach(element => {
    const ustensil = new Ustensil(element);
    ustensil.renderPannel();
  })
}

export {renderFiltersList};