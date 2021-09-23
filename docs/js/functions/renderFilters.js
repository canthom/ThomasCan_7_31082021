import { Appliance } from '../class/Appliance.js';
import { Ustensil } from '../class/Ustensil.js';
import { Ingredient } from '../class/Ingredient.js';
import { sortArray } from '../functions/sortArray.js';
import { checkFilter } from '../functions/checkFilter.js';

function renderFilters(recipesArray) {
  let ingredients = [];
  let appliances = [];
  let ustensils = [];

  recipesArray = checkFilter(recipesArray);

  
  console.log(recipesArray);
  
  // RESET DES FILTRES
  const uls = document.querySelectorAll('ul');
  uls.forEach(element => {
    element.innerHTML = '';
  })

  recipesArray.forEach(element => {
    element.ingredients.forEach(element => {
      ingredients.push(element.ingredient);
    })
    appliances.push(element.appliance);
    element.ustensils.forEach(element => {
      ustensils.push(element);
    })
  })

  // Créer les filtres
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

export {renderFilters};