document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    const overlay = document.createElement('div');
    const overlayImage = document.createElement('img');
    const closeButton = document.createElement('span');
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    overlay.classList.add('overlay');
    closeButton.classList.add('close-btn');
    closeButton.textContent = '×';

    overlay.appendChild(overlayImage);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);

    // Ensure the overlay is hidden by default
    overlay.style.display = 'none';

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            overlayImage.src = this.src;
            overlay.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay || event.target === closeButton) {
            overlay.style.display = 'none';
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            overlay.style.display = 'none';
        }
    });

    // Toggle navigation links for hamburger menu
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
