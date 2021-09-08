class Recipe {
  constructor(id, name, servings, ingredients, time, description, appliance, ustensils) {
    this.id = id;
    this.name = name;
    this.servings = servings;
    this.ingredients = ingredients;
    this.time = time;
    this.description = description;
    this.appliance = appliance;
    this.ustensils = ustensils;
  }

  render() {
    const container = document.querySelector('.section-result');

    if (container) {
      // Création des éléments
      const divResult = document.createElement('div');
      const divImg = document.createElement('div');
      const divInfo = document.createElement('div');
      const divInfoBox = document.createElement('div');
      const spanTitle = document.createElement('span');
      const spanTime = document.createElement('span');
      const divIngredients = document.createElement('div');
      const paraDesc = document.createElement('p');

      // Classes
      divResult.classList.add('result');
      divImg.classList.add('result__img');
      divInfo.classList.add('result__info');
      divInfoBox.classList.add('result__box');
      spanTitle.classList.add('result__title');
      spanTime.classList.add('result__time');
      spanTime.classList.add('result__minutes');
      divIngredients.classList.add('result__ingredients');
      paraDesc.classList.add('result__desc');

      // Contenu
      spanTitle.innerHTML = this.name;
      spanTime.innerHTML = `<img src="./img/time.svg"> ${this.time} min`;
      paraDesc.innerHTML = `${this.description.substr(0, 200)}...`;

      // Append
      container.append(divResult);
      divResult.append(divImg, divInfo);
      divInfo.append(divInfoBox, divIngredients, paraDesc);
      divInfoBox.append(spanTitle, spanTime);
  
      this.ingredients.forEach(element => {
        const divIngreBox = document.createElement('div');
        const span = document.createElement('span');
        
        divIngreBox.classList.add('ingredients');

        if (element.unit) {
          span.innerHTML = `<strong>${element.ingredient}</strong>` + ': ' + element.quantity + ' ' + element.unit;
        } else {
          span.innerHTML = `<strong>${element.ingredient}</strong>` + ': ' + element.quantity;
        }

        divIngredients.append(divIngreBox);
        divIngreBox.append(span);
      })
    }
  }
}

export { Recipe };