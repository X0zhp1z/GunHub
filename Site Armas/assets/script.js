document.querySelectorAll('.arma').forEach(item => {
    item.addEventListener('click', event => {
        item.querySelectorAll('p').forEach(p => p.classList.toggle('hidden'));
    });
});

document.getElementById('searchButton').addEventListener('click', function() {
    let filter = document.getElementById('search').value.toLowerCase();
    let items = document.querySelectorAll('.arma, .municao, .forca-armada');

    let foundItem = null;
    let results = [];

    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = '';
            results.push(item);
            if (!foundItem && item.querySelector('h3').textContent.toLowerCase().includes(filter)) {
                foundItem = item;
            }
        } else {
            item.style.display = 'none';
        }
    });

    if (foundItem) {
        window.location.hash = `#${foundItem.id}`;
    } else if (results.length > 0) {
        window.location.hash = `#${results[0].id}`;
    }
});

