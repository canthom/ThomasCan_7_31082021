// IMPORTS
import { recipes } from './recipes.js';
import { Recipe } from './class/Recipe.js';
import { Appliance } from './class/Appliance.js';
import { Ustensil } from './class/Ustensil.js';
import { Ingredient } from './class/Ingredient.js';

// INITIALISATION DES CLASSES
Appliance.init();
Ustensil.init();
Ingredient.init();

// SUPPRIMER UN FILTRE SELECTIONNE
const ingredientClose = document.querySelector('#ingredientClose');

ingredientClose.addEventListener('click', (e) => {
  e.preventDefault;

  ingredientClose.parentNode.remove();
})

// AFFICHAGE PAR DEFAUT DE LA PAGE

recipes.forEach(element => {
  const recipe = new Recipe(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils);
  recipe.render();
})

// RECHERCHE
const search = document.querySelector('#search');
search.oninput = startSearch;
function startSearch() {
  if (search.value.length > 3) {
    const container = document.querySelector('.section-result');
    container.innerHTML = '';
    
    const result = recipes.filter(element => {
      return element.name.toLocaleLowerCase().includes(search.value)
      // element.description.toLocaleLowerCase().includes(search.value);
    });
    
    result.forEach(element => {
      const recipe = new Recipe(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils);

      recipe.render();
    })
  }

  if (search.value.length === 0) {
    recipes.forEach(element => {
      const recipe = new Recipe(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils);
      recipe.render();
    })
  }
}

// FILTRES
let ingredients = [];
let appliances = [];
let ustensils = [];
recipes.forEach(element => {
  element.ingredients.forEach(element => {
    ingredients.push(element.ingredient);
  })
  appliances.push(element.appliance);
  element.ustensils.forEach(element => {
    ustensils.push(element);
  })
})

const ingredientsUnique = [...new Set(ingredients)].slice(0, 30);
ingredientsUnique.forEach(element => {
  const ingredient = new Ingredient(element);
  ingredient.renderPannel();
})

const appliancesUnique = [...new Set(appliances)];
appliancesUnique.forEach(element => {
  const appliance = new Appliance(element);
  appliance.renderPannel();
})

const ustensilsUnique = [...new Set(ustensils)];
ustensilsUnique.forEach(element => {
  const ustensil = new Ustensil(element);
  ustensil.renderPannel();
})