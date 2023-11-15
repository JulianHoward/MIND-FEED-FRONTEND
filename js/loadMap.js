function loadMap(city) {
  const mapOptions = {
    zoom: 15,
  };

  const map = window.map || new google.maps.Map(document.getElementById("map"), mapOptions);

  const centerLatLng = { lat: city.lat, lng: city.lon };

  if (window.map) {
    map.setCenter(centerLatLng);
    new google.maps.Marker({
      position: centerLatLng,
      map: map,
      title: city.nombre,
    });
  } else {
    window.map = map;
    const event = new CustomEvent('citySelected', { detail: centerLatLng });
    document.dispatchEvent(event);
  }
}

// Definir initMap globalmente
window.initMap = function () {
  const mapOptions = {
    center: { lat: 0, lng: 0 },
    zoom: 15,
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const userLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        map.setCenter(userLatLng);

        new google.maps.Marker({
          position: userLatLng,
          map: map,
          title: "Tu posición actual",
        });
      },
      function () {
        alert("No se pudo obtener la posición actual del usuario.");
      }
    );
  } else {
    alert("La geolocalización no está soportada por tu navegador.");
  }
};

// Cargar la API de Google Maps con el callback
function loadGoogleMapsScript() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${config.apiKey}&libraries=places&callback=initMap`;
  script.defer = true;
  document.head.appendChild(script);
}

// Llamar a la función para cargar la API cuando se cargue la página
window.onload = loadGoogleMapsScript;