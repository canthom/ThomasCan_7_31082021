import { Appliance } from '../class/Appliance.js';
import { Ustensil } from '../class/Ustensil.js';
import { Ingredient } from '../class/Ingredient.js';
import { filters } from '../index.js';
import { recipes } from '../recipes.js';
let result = recipes;

function checkFilter() {
  let ingredients = [];
  let appliances = [];
  let ustensils = [];

  // RESET DES FILTRES
  const uls = document.querySelectorAll('ul');
  uls.forEach(element => {
    element.innerHTML = '';
  })

  if (filters.length != 0) {
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
  
      result.forEach(element => {
        element.ingredients.forEach(element => {
          ingredients.push(element.ingredient);
        })
        appliances.push(element.appliance);
        element.ustensils.forEach(element => {
          ustensils.push(element);
        })
      })
    })
  }

  if (filters.length === 0) {
    recipes.forEach(element => {
      element.ingredients.forEach(element => {
        ingredients.push(element.ingredient);
      })
      appliances.push(element.appliance);
      element.ustensils.forEach(element => {
        ustensils.push(element);
      })
    })
  }

    // RANGER PAR ORDRE ALPHABETIQUE
    const ingredientsUnique = [...new Set(ingredients)];
    ingredientsUnique.sort(function (a, b) {
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
    });
    ingredientsUnique.forEach(element => {
      const ingredient = new Ingredient(element);
      ingredient.renderPannel();
    })
  
    const appliancesUnique = [...new Set(appliances)];
    appliancesUnique.sort(function (a, b) {
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
    });
    appliancesUnique.forEach(element => {
      const appliance = new Appliance(element);
      appliance.renderPannel();
    })
  
    const ustensilsUnique = [...new Set(ustensils)];
    ustensilsUnique.sort(function (a, b) {
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
      
    });
    ustensilsUnique.forEach(element => {
      const ustensil = new Ustensil(element);
      ustensil.renderPannel();
    })
}

export { checkFilter, result };