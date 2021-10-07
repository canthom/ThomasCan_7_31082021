import { addFilter, removeFilter } from '../functions/isFilterActive.js';
import { refresh } from '../index.js';

class Appliance {
  constructor(appliance) {
    this.appliance = appliance;
  }

  static close() {
    window.addEventListener('click', (e) => {
      const box = document.querySelector('.filters-list__box--appliance');
      const input = document.querySelector('#applianceSearch');
      if (!e.target.closest('.filters-list__box--appliance div')) {
        box.classList.remove('filters-list__box--active');
        box.classList.add('filters-list__box--inactive');
      }
    })
  }

  static open() {
    const appliancesOpen = document.querySelector('.filters-list__box--appliance');
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
  }

  renderPannel() {
    const ul = document.querySelector('#appliances');
    const li = document.createElement('li');
    li.innerHTML = this.appliance;
    ul.append(li);
    
    li.addEventListener('click', () => {
      this.selectFilter();
      addFilter('Appliance', this.appliance);
      refresh();
    })
  }

  selectFilter() {
    const container = document.querySelector('.filters-selected');
    const div = document.createElement('div');
    const span = document.createElement('span');
    const img = document.createElement('img');

    div.classList.add('filters-selected__box');
    div.classList.add('filters-selected__box--appliance');
    span.classList.add('filters-selected__text');
    img.classList.add('ingredientClose');
    
    img.setAttribute('src', './img/close.svg');
    img.setAttribute('alt', 'Fermer');

    span.innerHTML = this.appliance;

    container.append(div);
    div.append(span, img);

    // Event
    img.addEventListener('click', () => {
      img.parentNode.remove();
      removeFilter(span.textContent);
      refresh();
    })
  }

  static init() {
    this.open();
    this.close();
  }
}

export {Appliance};