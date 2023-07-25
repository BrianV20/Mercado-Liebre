const productoEl = document.getElementsByClassName('producto')
const descripcionEl = document.querySelector('descripcion')

productoEl[0].addEventListener('hover', () => {
    descripcionEl.style.display = 'none';
    descripcionEl.style.backgroundColor = 'red';
});