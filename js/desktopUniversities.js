var actual = 0;
    const totalImagesA = document.querySelectorAll('.carousel-image-desktop').length;

    function showImageDesk(index) {
        const carouselA = document.getElementById('image-carrusel-desktop');
        const offsetA = -index * 100 + '%';
        carouselA.style.transform = 'translateX(' + offsetA + ')';
        console.log('Showing image at index:', index);
    }
    
    function nextImageDesk() {
        actual = (actual + 1) % totalImagesA;
        showImageDesk(actual);
        console.log('actual index after next:', actual);
    }
    
    function prevImageDesk() {
        actual = (actual - 1 + totalImagesA) % totalImagesA;
        showImageDesk(actual);
        console.log('actual index after prev:', actual);
    }
