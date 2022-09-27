$(document).ready(function(){
    $('select').niceSelect();

    // Owl Carousel
    var hero_slider = $(".hero_slider");
    hero_slider.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        dots:true,
    });

    // Forbes Slider
    var fore_slider = $(".fore_slider");
    fore_slider.owlCarousel({
        items: 3,
        margin: 15,
        loop: true,
        nav: true,
        dots:true,
        responsive: {
            0:{
              items: 1
            },
            480:{
              items: 2
            },
            769:{
              items: 3
            }
        }

    });

     // partner Slider
     var partnar_slider = $(".partnar_slider");
     partnar_slider.owlCarousel({
         items: 8,
         margin: 10,
         loop: true,
         nav: true,
         dots:true,
         responsive: {
             0:{
               items: 3
             },
             480:{
               items: 5
             },
             769:{
               items: 7
             },
             992:{
                items:8
             }
         }
 
     });
})