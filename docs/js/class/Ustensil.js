import { renderRecipes } from '../functions/renderRecipes.js';
import { addFilter, removeFilter } from '../functions/addFilter.js';
import { refresh } from '../index.js';

class Ustensil {
  constructor(ustensil) {
    this.ustensil = ustensil;
  }

  static close() {
    window.addEventListener('click', (e) => {
      const box = document.querySelector('.filters-list__box--ustensils');
      const input = document.querySelector('#ustensilsSearch');
      if (!e.target.closest('.filters-list__box--ustensils div')) {
        box.classList.remove('filters-list__box--active');
        box.classList.add('filters-list__box--inactive');
        input.value = '';
        refresh();
      }
    })
  }

  static open() {
    const ustensilsOpen = document.querySelector('.filters-list__box--ustensils');
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
  }

  renderPannel() {
    const ul = document.querySelector('#ustensils');
    const li = document.createElement('li');
    li.innerHTML = this.ustensil;
    ul.append(li);

    li.addEventListener('click', () => {
      this.selectFilter();

      addFilter('Ustensil', this.ustensil);
      refresh();
    })
  }

  selectFilter() {
    const container = document.querySelector('.filters-selected');
    const div = document.createElement('div');
    const span = document.createElement('span');
    const img = document.createElement('img');

    div.classList.add('filters-selected__box');
    div.classList.add('filters-selected__box--ustensils');
    span.classList.add('filters-selected__text');
    img.classList.add('ingredientClose');
    
    img.setAttribute('src', './img/close.svg');
    img.setAttribute('alt', 'Fermer');

    span.innerHTML = this.ustensil;

    container.append(div);
    div.append(span, img);

    // Event
    img.addEventListener('click', () => {
      img.parentNode.remove();
      removeFilter(this.ustensil);
      refresh();
    })
  }

  static init() {
    this.open();
    this.close();
  }
}

export {Ustensil};