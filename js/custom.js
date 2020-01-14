$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

  

/**Banner-slick slider */
$('.banner-box').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: '<button class="next-arrow"><i class="fas fa-angle-right"></i></button>',
  prevArrow: '<button class="back-arrow"><i class="fas fa-angle-left"></i></button>',
  
  });
  
  /**Deal-Slick Slider */
  $('.deal-block').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: '<button class="next-arrow"><i class="fas fa-angle-right"></i></button>',
  prevArrow: '<button class="back-arrow"><i class="fas fa-angle-left"></i></button>',
  responsive: [
  {
  breakpoint: 992,
  settings: {
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  dots: true
  }
  },
  {
  breakpoint: 768,
  settings: {
  slidesToShow: 2,
  slidesToScroll: 2
  }
  },
  
  {
  breakpoint: 600,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1
  }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
  });