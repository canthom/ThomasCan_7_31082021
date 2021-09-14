import { recipes } from '../recipes.js';
import { Appliance } from '../class/Appliance.js';
import { Ustensil } from '../class/Ustensil.js';
import { Ingredient } from '../class/Ingredient.js';

function renderFilters() {
  let result = recipes;
  let ingredients = [];
  let appliances = [];
  let ustensils = [];

  // RESET
  const uls = document.querySelectorAll('ul');
  uls.forEach(element => {
    element.innerHTML = '';
  })

  const filterAppli = document.querySelector('.filters-selected__box--appliance span');
  const filterUst = document.querySelector('.filters-selected__box--ustensils span');
  let filter = '';

  if (filterAppli) {
    filter = 'Appliance';

  } else if (filterUst) {
    filter = 'Ustensils';
  }

  switch (filter) {
    case 'Appliance':
      console.log('Appliance !')
      result = recipes.filter(element => {
        return element.appliance.includes(filterAppli.textContent);
      })

      result.forEach(element => {
        element.ingredients.forEach(element => {
          ingredients.push(element.ingredient);
        })
        appliances.push(element.appliance);
        element.ustensils.forEach(element => {
          ustensils.push(element);
        })
      })
      break;
    case 'Ustensils':
      console.log('Ustensils')
      result = recipes.filter(element =>  {
        return element.ustensils.includes(filterUst.textContent);
      })

      result.forEach(element => {
        element.ingredients.forEach(element => {
          ingredients.push(element.ingredient);
        })
        appliances.push(element.appliance);
        element.ustensils.forEach(element => {
          ustensils.push(element);
        })
      })
      break;
    default : 
      console.log('Default !')
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

  if (filterAppli) {
    // Filtrer selon le choix
    result = recipes.filter(element => {
      return element.appliance.includes(filterAppli.textContent);
    })
  
    result.forEach(element => {
      element.ingredients.forEach(element => {
        ingredients.push(element.ingredient);
      })
      appliances.push(element.appliance);
      element.ustensils.forEach(element => {
        ustensils.push(element);
      })
    })

  } else {
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

  const ingredientsUnique = [...new Set(ingredients)].slice(0, 30);
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

  // Recherche APPAREIL
  const appliSearch = document.querySelector('#applianceSearch');
  appliSearch.oninput = searchAppliance;
  function searchAppliance() {
    const ul = document.querySelector('#appliances');
    if (appliSearch.value.length > 3) {
      ul.innerHTML = '';
      
      const result = appliancesUnique.filter(element => {
        return element.toLocaleLowerCase().includes(appliSearch.value.toLocaleLowerCase())
      })

      result.forEach(element => {
        const appliance = new Appliance(element);
        appliance.renderPannel();
      })
    }

    if (appliSearch.value.length === 0) {
      ul.innerHTML = '';
      appliancesUnique.forEach(element => {
        const appliance = new Appliance(element);
        appliance.renderPannel();
      })
    }
  }
  searchAppliance();

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

export { renderFilters };