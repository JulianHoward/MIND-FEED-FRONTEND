

function setupMenu(){
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const navLinks = document.querySelector('.desplegar');

    openMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
        openMenu.style.display = 'none';
        closeMenu.style.display = 'block';
    });

    closeMenu.addEventListener('click', function () {
        navLinks.classList.remove('show');
        openMenu.style.display = 'block';
        closeMenu.style.display = 'none';
    });

    document.addEventListener('DOMContentLoaded', setupMenu);
}

