document.addEventListener("DOMContentLoaded", () => {
    function changeTheme(element) {
        let html = document.querySelector('html');
        let inputChecked = element.querySelector('.switch__original');

        if(localStorage.getItem('theme') === 'dark') {
            inputChecked.checked = true;
        }
        else {
            inputChecked.checked = false;
        }

        inputChecked.addEventListener("click", () => {

            let arrayInputChecked = document.querySelectorAll('.switch__original');
            let checked = false;

            if(localStorage.getItem('theme') === 'dark') {
                localStorage.setItem('theme', 'light')
                html.classList.remove('dark-theme');
                checked = false;
            }
            else {
                localStorage.setItem('theme', 'dark')
                html.classList.add('dark-theme');
                checked = true;
            }

            arrayInputChecked.forEach(input => {
                input.checked = checked;
            });

        })
    }

    let html = document.querySelector('html');
    if(localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark-theme');
    }
    else {
        html.classList.remove('dark-theme');
    }

    let headerSwitch = document.querySelector('.header__switch');
    let headerModalWindow = document.querySelector('.header__burger-modal-window');

    changeTheme(headerSwitch);
    changeTheme(headerModalWindow);
})
