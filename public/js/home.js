const burgerMenuBtn = document.querySelector('#burgerMenuBtn');

burgerMenuBtn.addEventListener('click', () => {
    document.querySelector('#navLinksUl').classList.toggle('navLinksUlStyle');
});