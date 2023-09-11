document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo');
    const modal = document.querySelector('.modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close');

    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            modalImage.src = photo.querySelector('img').src;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
