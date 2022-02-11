window.addEventListener('DOMContentLoaded', function () {

    // бургер
    let trigger = true;
    document.querySelector('.header_burger').addEventListener('click', function () {
        if (trigger) {
            document.querySelector('.header_menu').classList.add('active');
            document.querySelector('.header_burger').classList.add('active_burger');
        }
        else {
            document.querySelector('.header_menu').classList.remove('active');
            document.querySelector('.header_burger').classList.remove('active_burger');
        }
        trigger = !trigger;
    });
    var menuItems = document.querySelectorAll('.header_menu_item');
    for (var i = 0; i < menuItems.length; ++i) {
        menuItems[i].addEventListener('click', function () {
            document.querySelector('.header_menu').classList.remove('active')
            document.querySelector('.header_burger').classList.remove('active_burger')
        });
    };


    document.querySelector('.about_button').addEventListener('click', function () {
        document.querySelector('.about_describe').classList.remove('none');
        document.querySelector('.about_button').classList.add('none');
    });

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        rewind: false,
        slideToClickedSlide: true,
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            630: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        },
    });

    // tabs in swiper
    function show() {
        document.querySelectorAll('.doctor_cart').forEach((item) =>
            item.addEventListener('click', function (e) {
                e.preventDefault();
                const id = e.target.getAttribute('href').replace('#', '');
                document.querySelectorAll('.picture_doctors').forEach(
                    (child) => child.classList.add('none')
                );
                document.getElementById(id).classList.remove('none');
            })
        );
    }
    show();
    window.addEventListener('resize', function (event) {
        if (document.documentElement.clientWidth >= 640) {
            document.getElementById('docs').classList.remove('none');
            show();
        } else {
            document.getElementById('docs').classList.add('none');
        };
    });

    // date footer
    let today = new Date();
    let year = today.getFullYear();
    document.getElementById("footer_date").textContent = "©" + year + " " + "Dental Clinic Medico. All rights reserved.";



});