var currentIndexD = 0;
    const totalImagesD = document.querySelectorAll('.carousel-image-d').length;

    function showImageD(index) {
        const carouselD = document.getElementById('image-carrusel-d');
        const offsetD = -index * 100 + '%';
        carouselD.style.transform = 'translateX(' + offsetD + ')';
    }

    function nextImageD() {
        currentIndexD = (currentIndexD + 1) % totalImagesD;
        showImageD(currentIndexD);
    }

    function prevImageD() {
        currentIndexD = (currentIndexD - 1 + totalImagesD) % totalImagesD;
        showImageD(currentIndexD);
    }