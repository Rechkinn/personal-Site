document.addEventListener("DOMContentLoaded", () => {
    
    let headerWrapper = document.querySelector('.header__wrapper')
    let header = document.querySelector('header');

    window.addEventListener("scroll", () => {
        if(header.offsetTop <= 40) {
            headerWrapper.classList.remove('header__wrapper_animation-scrolling-header-alt')
        }
        else {
            headerWrapper.classList.add('header__wrapper_animation-scrolling-header-alt')
        }
    })
})
