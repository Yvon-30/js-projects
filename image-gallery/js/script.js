// Handle image click to show in lightbox
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function() {
        const src = this.src;
        const lightboxImage = document.getElementById('lightboxImage');
        lightboxImage.src = src;
    });
});
