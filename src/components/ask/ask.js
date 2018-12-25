$(document).ready(function(){
  $('.jsAskFor').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    // variableWidth: true,
    asNavFor: '.jsAskNav'
  });
  $('.jsAskNav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.jsAskFor',
    dots: false,
    centerMode: true,
    fade: true,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="ask-prev"><img src="assets/images/right-arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="ask-next"><img src="assets/images/right-arrow.svg" alt=""></button>'
  });
});
