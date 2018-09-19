

var nav = document.querySelector('.navigation'),
    menuItems = document.querySelectorAll('.header__menu-item'),
    burgerMenu = document.querySelector('.burger-menu'),
    menuClose = document.querySelector('.navigation-close'),
    isOpened = 0;

burgerMenu.addEventListener('click', function () {
    if(!isOpened) {
        nav.classList.add('navigation_active');

        // show menu items with interval

        (function iterate(i) {
            if(i < menuItems.length) {

                menuItems[i].classList.add('header__menu-item_active');

                setTimeout(function () {
                    iterate(i + 1);
                },100);
            }
        })(0);

        isOpened = 1;
    }});

menuClose.addEventListener('click', function () {
    if(isOpened) {
        nav.classList.remove('navigation_active');
        menuItems.forEach(function (item) {
            item.classList.remove('header__menu-item_active');
        });
        isOpened = 0;
    }
});