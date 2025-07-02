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
}


document.addEventListener("DOMContentLoaded", () => {

    let modalWindow = document.querySelector('.header__burger-modal-window');
    let main = document.querySelector('.main');

    setInterval(() => {
        if(window.innerWidth <= 857) {
            // может открыться модалка
            if(modalWindow.classList.contains('hidden')) {
                // 'Модалка скрыта, main должен показываться'
                
                main.classList.remove('hidden');
                main.classList.remove('position-absolute');
            }
            else {
                // 'Модалка открыта, main скрыт'
                
                main.classList.add('hidden');
                main.classList.add('position-absolute');
            }
        }
        else {
            // main всегда открыт
            
            main.classList.remove('hidden');
            main.classList.remove('position-absolute');
        }
    }, 15)
})
