const refs = {
    controlsEl: document.querySelector('#controls'),
    render: document.querySelector('button[data-action="render"]'),
    destroy: document.querySelector('button[data-action="destroy"]'),
    boxes: document.querySelector('#boxes')
}
console.log(refs);
function createBoxes(amount) {
    amount = Number(refs.controlsEl.firstElementChild.value);
    const customDiv = document.createElement('div');
    let width = 30;
    let height = 30;
    for (let i = 1; i <= amount; i++) {
        const elDiv = customDiv.cloneNode(true);
        elDiv.style.width = width + 'px';
        elDiv.style.height = height + 'px';
        elDiv.style.backgroundColor = randomRgbColor();
        refs.boxes.appendChild(elDiv);
        width += 10;
        height += 10;
    }
}
refs.render.addEventListener('click', createBoxes);
function destroyBoxes(amount) {
    amount = Number(refs.controlsEl.firstElementChild.value);
    for (let i = 1; i <= amount; i++) {
        refs.boxes.firstElementChild.remove();
    }
}
const randomRgbColor = () => {
    const r = Math.round(Math.random() * (255 - 1) + 1);
    const g = Math.round(Math.random() * (255 - 1) + 1);
    const b = Math.round(Math.random() * (255 - 1) + 1);
    return `rgb(${r},${g},${b})`;
}
// const widthAndHeight = () => {
//     for (let i = 0; )
// }
refs.destroy.addEventListener('click', destroyBoxes);


