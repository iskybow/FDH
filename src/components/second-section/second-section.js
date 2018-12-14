function reSizeSecond($target) {
  var leftWidth = $('.container').offset().left;
  // var windowW = $(window).width();
  // var sideMargin = (windowW - containerW) / 2;
  $target.css('width', (leftWidth + 50) + 'px');
}

$(document).ready(function () {
  reSizeSecond($('.jsSecondFon'));
});

$(window).resize(function () {
  reSizeSecond($('.jsSecondFon'));
});
