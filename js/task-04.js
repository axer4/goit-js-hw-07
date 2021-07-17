const refs = {
    counter: document.querySelector("#value"),
    increment: document.querySelector("button[data-action = 'increment']"),
    decrement: document.querySelector("button[data-action = 'decrement']"),
}

refs.increment.addEventListener('click', () => {
    refs.counter.textContent++;
});
refs.decrement.addEventListener('click', () => {
    refs.counter.textContent--;
});

