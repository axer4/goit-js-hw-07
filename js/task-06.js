const refs = {
    inputEl: document.querySelector('#validation-input'),
    
}
const validation = refs.inputEl.addEventListener('change', (event) => {
    if (Number(refs.inputEl.dataset.length) !== refs.inputEl.value.length) {
        refs.inputEl.classList.toggle('invalid');
    }
    else {
        refs.inputEl.classList.toggle('invalid')
        refs.inputEl.classList.replace('invalid', 'valid');
        refs.inputEl.classList.add('valid');
        
        
    }
    
});