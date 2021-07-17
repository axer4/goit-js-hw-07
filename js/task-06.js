const refs = {
    inputEl: document.querySelector('#validation-input'),
    
}
const validation = refs.inputEl.addEventListener('change', (event) => {
    if (Number(refs.inputEl.dataset.length) !== refs.inputEl.value.length) {
        refs.inputEl.classList.add('invalid');
    }
    else {
        refs.inputEl.classList.replace('invalid','valid');
        
    }
});
console.log(refs.inputEl.textContent.length);