$( document ).ready(function() {

    // Слайдер

    $('.owl-carousel').owlCarousel({
        center: true,
        loop:true,
        margin:15,
        nav:true,
        // autoplay:true,
        // autoplayTimeout:4000,
        dots: false,
        navText : ['<i class="fas fa-chevron-left fa-2x">','<i class="fas fa-chevron-right fa-2x">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

});
