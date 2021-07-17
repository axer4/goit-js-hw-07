const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
}
console.log(refs);
refs.input.addEventListener('input', (event) => {
    event.currentTarget.value.trim() === '' ? refs.output.textContent = 'незнакомец' : refs.output.textContent = event.currentTarget.value
    
});

