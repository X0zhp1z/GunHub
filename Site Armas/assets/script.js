document.querySelectorAll('.arma').forEach(item => {
    item.addEventListener('click', event => {
        item.querySelectorAll('p').forEach(p => p.classList.toggle('hidden'));
    });
});
