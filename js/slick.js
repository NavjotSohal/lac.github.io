$(document).ready(function(){
  $('.carousel-inner').slick({
    infinite: true,
    speed: 5000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: 'linear'
  });

  $('.comments').slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
   {
     breakpoint: 1024,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 3,
       infinite: true,
       dots: true,
     }
   },
   {
     breakpoint: 600,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
     }
   }
   ]
  });
});
