$( document ).ready(function() {

    // Слайдер

    // $('.owl-carousel').owlCarousel({
    $('#slider00, #slider01').owlCarousel({
        center: true,
        loop:true,
        margin:15,
        nav:false,
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

    $('#slider02').owlCarousel({
        center: true,
        loop:true,
        margin:15,
        nav:true,
         // autoplay:true,
         // autoplayTimeout:1000,
        dots: true,
        navText: [
        '<svg  width="35" height="35"  fill="#cbd4d4" viewBox="0 0 24 24"><path id="fff" d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
        '<svg width="35" height="35" fill="#cbd4d4" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>'],
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
