document.addEventListener("DOMContentLoaded", function () {
    const selectCountry = document.getElementById("countryInput");
    const resultados = document.getElementById('resultados');

    const apiUrlCountries = "https://api-mindfeed.onrender.com/api/paises/";
    const apiUrlCities = "https://api-mindfeed.onrender.com/api/ciudades/";

    // Función para cargar ciudades
    async function loadCities(selectedCountryId, resultados) {
        // Limpiar el contenedor antes de cargar nuevas ciudades
        resultados.innerHTML = '';

        try {
            // Cargar la lista de ciudades del país seleccionado
            const response = await fetch(apiUrlCities + `?pais=${selectedCountryId}`);
            const citiesData = await response.json();

            citiesData.sort((a, b) => a.nombre.localeCompare(b.nombre));

            citiesData.forEach((city) => {
                const resultElement = document.createElement("div");
                resultElement.textContent = city.nombre;
                resultados.appendChild(resultElement);
            });
        } catch (error) {
            console.error("Error al obtener datos de la API de ciudades:", error);
        }
    }

    // Evento al enviar el formulario (al presionar Enter en el input)
    document.querySelector('.form-flex').addEventListener("submit", function (e) {
        e.preventDefault();
        const selectedCountryId = selectCountry.value;
        loadCities(selectedCountryId, resultados);
    });
});

// Función getCities que estás llamando en el HTML
function getCities(event) {
    // Esta función podría contener lógica específica que necesitas ejecutar al hacer clic
    // Pero en este caso, parece que no necesitas definirla si estás usando loadCities directamente
    event.preventDefault();
}