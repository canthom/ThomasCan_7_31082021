import { renderRecipes } from '../functions/renderRecipes.js';
import { addFilter, removeFilter } from '../functions/addFilter.js';
import { refresh } from '../index.js';

class Ingredient {
  constructor(ingredient) {
    this.ingredient = ingredient;
  }

  static close() {
    window.addEventListener('click', (e) => {
      const box = document.querySelector('.filters-list__box--ingredients');
      if (!e.target.closest('.filters-list__box--ingredients div')) {
        box.classList.remove('filters-list__box--active');
        box.classList.add('filters-list__box--inactive');
      }
    })
  }

  static open() {
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
  }

  renderPannel() {
    const ul = document.querySelector('#ingredients');
    const li = document.createElement('li');
    li.innerHTML = this.ingredient;
    ul.append(li);

    li.addEventListener('click', () => {
      this.selectFilter();

      addFilter('Ingredient', this.ingredient);
      refresh();
    })
  }

  selectFilter() {
    const container = document.querySelector('.filters-selected');
    const div = document.createElement('div');
    const span = document.createElement('span');
    const img = document.createElement('img');

    div.classList.add('filters-selected__box');
    div.classList.add('filters-selected__box--ingredients');
    span.classList.add('filters-selected__text');
    img.classList.add('ingredientClose');
    
    img.setAttribute('src', './img/close.svg');
    img.setAttribute('alt', 'Fermer');

    span.innerHTML = this.ingredient;

    container.append(div);
    div.append(span, img);

    // Event
    img.addEventListener('click', () => {
      img.parentNode.remove();
      removeFilter(span.textContent);
      renderRecipes();
    })
  }

  static init() {
    this.open();
    this.close();
  }
}

export {Ingredient};