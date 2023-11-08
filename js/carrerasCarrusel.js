
let currentIndexCarreras = 0;

  function prevCarrera() {
    if (currentIndexCarreras > 0) {
      currentIndexCarreras--;
    } else {
      currentIndexCarreras = document.querySelectorAll('.carousel-carrera').length - 1;
    }
    updateCarouselCarreras();
  }

  function nextCarrera() {
    if (currentIndexCarreras < document.querySelectorAll('.carousel-carrera').length - 1) {
      currentIndexCarreras++;
    } else {
      currentIndexCarreras = 0;
    }
    updateCarouselCarreras();
  }

  function updateCarouselCarreras() {
    const carruselCarreras = document.getElementById('carreras-carrusel');
    const itemWidthCarreras = document.querySelector('.carousel-carrera').offsetWidth;
    const newPositionCarreras = -currentIndexCarreras * itemWidthCarreras;
    carruselCarreras.style.transform = `translateX(${newPositionCarreras}px)`;
  }