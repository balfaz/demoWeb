const imagini = document.querySelectorAll('.img-gallery');
const imagenesLight = document.querySelector('.agregar-img');
const contenedorLight = document.querySelector('.imagen-light');
const mioMenu2 = document.querySelector('.menuPrin');

imagini.forEach(imagine => {
    imagine.addEventListener('click', () => {
        aparecerImagine(imagine.getAttribute('src'));
    })
})

contenedorLight.addEventListener('click', (e) => {
    if (e.target != imagenesLight) {
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        mioMenu2.style.opacity = '1';
    }
})

const aparecerImagine = (imagine) => {
    imagenesLight.src = imagine;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    mioMenu2.style.opacity = '0';
}

