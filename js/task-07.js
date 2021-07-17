const refs = {
    inputEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text')
}
refs.inputEl.addEventListener('input', (event) => {
    const fontSizeByRange = Number(refs.inputEl.value);
    refs.textEl.style.fontSize = `${fontSizeByRange}px`;
})