new Swiper('.swiper-box', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    grabCursor: true,
    keyboard: {
        enabled: true
    },
    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: true
    },
    speed: 800,
});
