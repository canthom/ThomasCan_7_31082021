class Ustensil {
  constructor(ustensil) {
    this.ustensil = ustensil;
  }

  static close() {
    window.addEventListener('click', (e) => {
      const box = document.querySelector('.filters-list__box--ustensils');
      if (!e.target.closest('.filters-list__box--ustensils div')) {
          box.classList.remove('filters-list__box--active');
          box.classList.add('filters-list__box--inactive');
      }
    })
  }

  static open() {
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
  }

  renderPannel() {
    const ul = document.querySelector('#ustensils');
    const li = document.createElement('li');
    li.innerHTML = this.ustensil;
    ul.append(li);
  }

  static init() {
    this.open();
    this.close();
  }
}

export {Ustensil};