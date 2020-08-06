const mioMenu = document.querySelector('.menuPrin');
const mioMenuNav = document.querySelector('.menuPrin-navigazione');
//console.log(prova);
//console.log(mioMenuNav);

mioMenu.addEventListener("click", () => {
    mioMenuNav.classList.toggle("spread");
})

window.addEventListener('click', e => {
    if (mioMenuNav.classList.contains("spread") && e.target != mioMenuNav && e.target != mioMenu) {
        mioMenuNav.classList.toggle("spread");
    }
})

