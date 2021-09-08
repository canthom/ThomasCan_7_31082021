// OUVRIR LE PANNEAU INGREDIENTS
const ingredientsOpen = document.querySelector('#ingredientsOpen');

ingredientsOpen.addEventListener('click', (e) => {
  e.preventDefault();

  const box = document.querySelector('.filters-list__box--ingredients');
  const activeBox = document.querySelector('.filters-list__box--active');

  if (box === activeBox) {
    box.classList.remove('filters-list__box--active');
    box.classList.add('filters-list__box--inactive');
  } else {
    box.classList.remove('filters-list__box--inactive');
    box.classList.add('filters-list__box--active');
  }
})

// OUVRIR LE PANNEAU APPAREIL
const appliancesOpen = document.querySelector('#appliancesOpen');
appliancesOpen.addEventListener('click', (e) => {
  e.preventDefault();
  const box = document.querySelector('.filters-list__box--appliance');
  const activeBox = document.querySelector('.filters-list__box--active');

  if (box === activeBox) {
    box.classList.remove('filters-list__box--active');
    box.classList.add('filters-list__box--inactive');
  } else {
    box.classList.remove('filters-list__box--inactive');
    box.classList.add('filters-list__box--active');
  }
})

// OUVRIR LE PANNEAU USTENSILES
const ustensilsOpen = document.querySelector('#ustensilsOpen');
ustensilsOpen.addEventListener('click', (e) => {
  e.preventDefault();
  const box = document.querySelector('.filters-list__box--ustensils');
  const activeBox = document.querySelector('.filters-list__box--active');

  if (box === activeBox) {
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

// INGREDIENTS & APPLIANCES
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
  const ul = document.querySelector('#ingredients');
  const li = document.createElement('li');

  li.innerHTML = element;
  ul.append(li);
})

const appliancesUnique = [...new Set(appliances)];
appliancesUnique.forEach(element => {
  const ul = document.querySelector('#appliances');
  const li = document.createElement('li');
  li.innerHTML = element;
  ul.append(li);
})

const ustensilsUnique = [...new Set(ustensils)];
ustensilsUnique.forEach(element => {
  const ul = document.querySelector('#ustensils');
  const li = document.createElement('li');
  li.innerHTML = element;
  ul.append(li);
})