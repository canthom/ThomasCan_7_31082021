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