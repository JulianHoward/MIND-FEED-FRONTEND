let currentIndex = 0;
  const intervalTiming = 3000;

  function nextAnnounce() {
    if (currentIndex < document.querySelectorAll('.anuncio-image').length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarruselAnuncios();
  }

  function updateCarruselAnuncios() {
    const carr = document.getElementById('anuncios-carrusel');
    const imgWidth = document.querySelector('.anuncio-image').offsetWidth;
    const newPos = -currentIndex * imgWidth;
    carr.style.transform = `translateX(${newPos}px)`;
  }

  setInterval(nextAnnounce, intervalTiming);