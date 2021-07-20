const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const list = document.querySelector("#ingredients");
const addListItem = ingredients.map(function (ingredient) {
  const createListItems = document.createElement('li');
  createListItems.textContent = ingredient;
  return createListItems;
});
list.append(...addListItem);




