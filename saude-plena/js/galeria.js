document.addEventListener("DOMContentLoaded", loadJs);

function loadJs() {
    var galleryDays = new Swiper('.gallery-days', {
        spaceBetween: 0,
        autoHeight: false,
        slidesPerView: 4,
        //centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // altura minima, apenas desabilita o botao
            576: {
                slidesPerView: 7,
                spaceBetween: 8,
            },
        },
        loop: true,
        //autoplay: {
        //    delay: 3000,
        //    disableOnInteraction: false,
        //},
    });
    var galleryCategories = new Swiper('.gallery-categories', {
        spaceBetween: 32,
        autoHeight: false,
        slidesPerView: 1.4,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // altura minima, apenas desabilita o botao
            576: {
                slidesPerView: 4.2,
                spaceBetween: 64,
            },
        },
        loop: true,
    });
    var galleryMovies = new Swiper('.gallery-movies', {
        spaceBetween: 32,
        autoHeight: false,
        slidesPerView: 1.6,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // altura minima, apenas desabilita o botao
            576: {
                slidesPerView: 4,
                spaceBetween: 32,
                centeredSlides: false,
            },
        },
        loop: true,
    });
    var galleryMovies = new Swiper('.gallery-movies-2', {
        spaceBetween: 32,
        autoHeight: false,
        slidesPerView: 1.6,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // altura minima, apenas desabilita o botao
            576: {
                slidesPerView: 2.5,
                spaceBetween: 32,
                centeredSlides: false,
            },
        },
        loop: true,
    });
}