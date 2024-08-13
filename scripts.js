document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.gallery img');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            const src = img.getAttribute('src');
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            overlay.innerHTML = `<img src="${src}" alt="Gallery Image"><span class="close-btn">&times;</span>`;
            document.body.appendChild(overlay);

            overlay.querySelector('.close-btn').addEventListener('click', () => {
                document.body.removeChild(overlay);
            });
        });
    });
});
