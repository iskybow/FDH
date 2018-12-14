'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shared = function Shared() {
  _classCallCheck(this, Shared);
};

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
//# sourceMappingURL=script.js.map
