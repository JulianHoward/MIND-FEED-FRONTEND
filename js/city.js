async function getCities(e) {
    e.preventDefault(); // Evitar que la página se recargue

    const searchTerm = document.getElementById('countryInput').value;

    try {
        const response = await fetch(`http://127.0.0.1:8000/api/paises?q=${searchTerm}`);
        const data = await response.json();

        const resultados = document.getElementById('resultados');
        resultados.innerHTML = '';

        data.forEach(item => {
            const resultElement = document.createElement('div');
            resultElement.textContent = item.nombre;
            resultados.appendChild(resultElement);
        });
    } catch (error) {
        console.error('Error al obtener datos:', error);    
    }
}
