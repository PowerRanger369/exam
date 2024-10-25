document.getElementById('fetchDataButton').addEventListener('click', function() {
    fetch('https://picsum.photos/400/300?random=${Math.random()}')
        .then(response => response.json())

        .catch(error => console.error('Error fetching data:', error));
});
