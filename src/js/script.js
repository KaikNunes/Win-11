document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal-windows');
    const imagem = document.getElementById('logo-win11');
    const fechar = document.getElementById('fechar');

    imagem.addEventListener('click', () => {
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    });

    fechar.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
