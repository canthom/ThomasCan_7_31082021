class Appliance {
  constructor(appliance) {
    this.appliance = appliance;
  }

  static close() {
    window.addEventListener('click', (e) => {
      const box = document.querySelector('.filters-list__box--appliance');
      const activeBox = document.querySelector('.filters-list__box--active');
      if (!e.target.closest('.filters-list__box--appliance div')) {
          box.classList.remove('filters-list__box--active');
          box.classList.add('filters-list__box--inactive');
      }
    })
  }

  static open() {
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
  }

  renderPannel() {
    const ul = document.querySelector('#appliances');
    const li = document.createElement('li');
    li.innerHTML = this.appliance;
    ul.append(li);
  }

  static init() {
    this.open();
    this.close();
  }
}

export {Appliance};