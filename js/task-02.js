const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const list = document.querySelector("#ingredients");
ingredients.forEach(function (ingredient) {
  const ingridientsListItem = document.createElement("li");
  ingridientsListItem.textContent = ingredient;
  list.appendChild(ingridientsListItem);
});




