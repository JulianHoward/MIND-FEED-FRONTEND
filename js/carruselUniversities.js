var currentIndexUno = 0;
    const totalImages = document.querySelectorAll('.carousel-image').length;

    function showImage(index) {
        const carousel = document.getElementById('image-carrusel');
        const offset = -index * 100 + '%';
        carousel.style.transform = 'translateX(' + offset + ')';
    }

    function nextImage() {
        currentIndexUno = (currentIndexUno + 1) % totalImages;
        showImage(currentIndexUno);
    }

    function prevImage() {
        currentIndexUno = (currentIndexUno - 1 + totalImages) % totalImages;
        showImage(currentIndexUno);
    }