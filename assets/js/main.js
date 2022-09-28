$(document).ready(function () {
  $('select').niceSelect();

  //menu 
  $('.btn15').click(function () {
    $('.menu > ul').slideToggle();
  })
  $('.menu').click(function () {
    $(this).toggleClass('open');
  });

  // Owl Carousel
  var hero_slider = $(".hero_slider");
  hero_slider.owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    nav: true,
    dots: true,
  });

  // Forbes Slider
  var fore_slider = $(".fore_slider");
  fore_slider.owlCarousel({
    items: 3,
    margin: 15,
    loop: true,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      769: {
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
    dots: true,
    responsive: {
      0: {
        items: 3
      },
      480: {
        items: 5
      },
      769: {
        items: 7
      },
      992: {
        items: 8
      }
    }

  });


  // checkbox js 
  $('input[type=checkbox]').css('display', 'none');
  $('input[type=checkbox]').after('<div class="laces-checkbox"><i class="fa"></i></div>');
  $('input[type=checkbox]').each(function () {
    if ($(this).prop('checked') == true) {
      $(this).find('~ .laces-checkbox .fa').addClass('fa-check');
    }
  });

  $('input[type=checkbox]').on('change', function () {
    if ($(this).find('.fa').hasClass('fa-check')) {
      $(this).prev('input[type=checkbox]').prop('checked', false);
      $(this).find('.fa').removeClass('fa-check');
    } else {
      $(this).prev('input[type=checkbox]').prop('checked', true);
      $(this).find('.fa').addClass('fa-check');
    }
  });

  $('.laces-checkbox').on('click', function () {
    if ($(this).find('.fa').hasClass('fa-check')) {
      $(this).prev('input[type=checkbox]').prop('checked', false);
      $(this).find('.fa').removeClass('fa-check');
    } else {
      $(this).prev('input[type=checkbox]').prop('checked', true);
      $(this).find('.fa').addClass('fa-check');
    }
  });

  //  stricky header 
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 100) {
  //     $('.d_header').addClass('sticky')
  //   } else {
  //     $('.d_header').removeClass('sticky')
  //   }
  // });

  // smoth scroll 
  
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
        
      });
    } // End if
  });
})