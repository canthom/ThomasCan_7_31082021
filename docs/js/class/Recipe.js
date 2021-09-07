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
      const h2 = document.createElement('h2');
      const divTime = document.createElement('div');
      const imgTime = document.createElement('img');
      const spanTime = document.createElement('span');
      const divIngredients = document.createElement('div');
      const divDesc = document.createElement('div');
      const p = document.createElement('p');

      // Classes
      divResult.classList.add('result');
      divImg.classList.add('result__img');
      divInfo.classList.add('result__info');
      h2.classList.add('result__title');
      divTime.classList.add('result__time');
      spanTime.classList.add('result__minutes');
      divIngredients.classList.add('result__ingredients');
      divDesc.classList.add('result__desc');

      // Set Attribut
      imgTime.setAttribute('src', './img/time.svg');
      imgTime.setAttribute('alt', `Symbole d'horloge`);

      // Contenu
      h2.innerHTML = this.name;
      spanTime.innerHTML = `${this.time} min`;
      p.innerHTML = this.description;

      // Append
      container.append(divResult);
      divResult.append(divImg, divInfo);
      divInfo.append(h2, divTime, divIngredients, divDesc);
      divTime.append(imgTime, spanTime);
      
      divDesc.append(p);

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