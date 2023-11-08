var currentIndex = 0;
    const totalImages = document.querySelectorAll('.carousel-image').length;

    function showImage(index) {
        const carousel = document.getElementById('image-carrusel');
        const offset = -index * 100 + '%';
        carousel.style.transform = 'translateX(' + offset + ')';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }