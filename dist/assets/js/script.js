'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shared = function Shared() {
  _classCallCheck(this, Shared);
};

$(document).ready(function () {
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

function reSizeHeader($target) {
  var rightWidth = $('.container').offset().left;
  // var windowW = $(window).width();
  // var sideMargin = (windowW - containerW) / 2;
  $target.css('width', rightWidth + 850 + 'px');
}

$(document).ready(function () {
  reSizeHeader($('.jsHeaderBlueFon'));
});

$(window).resize(function () {
  reSizeHeader($('.jsHeaderBlueFon'));
});

function reSizeSecond($target) {
  var leftWidth = $('.container').offset().left;
  // var windowW = $(window).width();
  // var sideMargin = (windowW - containerW) / 2;
  $target.css('width', leftWidth + 50 + 'px');
}

$(document).ready(function () {
  reSizeSecond($('.jsSecondFon'));
});

$(window).resize(function () {
  reSizeSecond($('.jsSecondFon'));
});

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
//# sourceMappingURL=script.js.map
