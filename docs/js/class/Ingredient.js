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
  }

  static init() {
    this.open();
    this.close();
  }
}

export {Ingredient};