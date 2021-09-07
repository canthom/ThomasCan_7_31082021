// OUVRIR LE PANNEAU INGREDIENTS
const ingredientsOpen = document.querySelector('#ingredientsOpen');

ingredientsOpen.addEventListener('click', (e) => {
  e.preventDefault();

  const box = document.querySelector('.filters-list__box--ingredients');
  const activeBox = document.querySelector('.filters-list__box--active');

  if (activeBox) {
    box.classList.remove('filters-list__box--active');
    box.classList.add('filters-list__box--inactive');
  } else {
    box.classList.remove('filters-list__box--inactive');
    box.classList.add('filters-list__box--active');
  }
})

// SUPPRIMER UN FILTRE SELECTIONNE
const ingredientClose = document.querySelector('#ingredientClose');

ingredientClose.addEventListener('click', (e) => {
  e.preventDefault;

  ingredientClose.parentNode.remove();
})

// RECUPERER LES DONNEES
import { recipes } from './recipes.js';
import { Recipe } from './class/Recipe.js';


recipes.forEach(element => {
  const recipe = new Recipe(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils);

  recipe.render();
})