//  For home main product slider
$('.home-main-slides').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2500,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    767: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
})

//  For home category slider
$('.home-top-category-slides').owlCarousel({
  loop: true,
  margin: 25,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 2
    },
    576: {
      items: 4
    },
    768: {
      items: 5
    },
    1200: {
      items: 8
    }
  }
})

//  For home advertise slider
$('.home-advertise-slides').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  autoplay: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})
$(".home-advertise-slides .owl-prev").html(' <i class="fas fa-arrow-circle-left"></i>');
$(".home-advertise-slides .owl-next").html(' <i class="fas fa-arrow-circle-right"></i>');

//  For home testimonials slider
$('.testimonials-slides').owlCarousel({
  loop: true,
  margin: 40,
  autoplay: true,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
})
$(".testimonials-slides .owl-prev").html('<i class="fa fa-chevron-left"></i>');
$(".testimonials-slides .owl-next").html('<i class="fa fa-chevron-right"></i>');

// Custom input file
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});



//  For advert details image slider
$('.advert-det-image-slide').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  autoplay: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    },
    1000: {
      items: 6
    }
  }
})
$(".advert-det-image-slide .owl-prev").html(' <i class="fas fa-arrow-circle-left"></i>');
$(".advert-det-image-slide .owl-next").html(' <i class="fas fa-arrow-circle-right"></i>');


//  For advert details video slider
$('.advert-det-video-slide').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  autoplay: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})
$(".advert-det-video-slide .owl-prev").html(' <i class="fas fa-arrow-circle-left"></i>');
$(".advert-det-video-slide .owl-next").html(' <i class="fas fa-arrow-circle-right"></i>');

// For range slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
