const hamburgerButton = document.getElementById('ham-button');
const nav = document.getElementById('right-nav');

hamburgerButton.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
});

hamburgerButton.addEventListener("focusout", (e) => {
    if (e.relatedTarget === null)
        nav.classList.remove('nav-open');
})