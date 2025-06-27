function openCloseModalWindow() {
    let modalWindow = document.querySelector('.header__burger-modal-window');
    let menu = document.querySelector('.header__list');
    let switchCustom = document.querySelector('.switch');
    modalWindow.classList.toggle('hidden');
    menu.classList.toggle('show');
    switchCustom.classList.toggle('show');

    let arrSpan = document.querySelectorAll('.burger-menu__span');
    arrSpan.forEach(span => {
        span.classList.toggle('burger-menu__span_close-45');
    });

    let body = document.querySelector('body');
    body.classList.toggle('body_overflow-hidden');
    // let main = document.querySelector('main');
    // main.classList.toggle('hidden');
    // main.classList.toggle('position-absolute');

}
