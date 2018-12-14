function reSizeHeader($target) {
  var rightWidth = $('.container').offset().left;
  // var windowW = $(window).width();
  // var sideMargin = (windowW - containerW) / 2;
  $target.css('width', (rightWidth + 850) + 'px');
}

$(document).ready(function () {
  reSizeHeader($('.jsHeaderBlueFon'));
});

$(window).resize(function () {
  reSizeHeader($('.jsHeaderBlueFon'));
});
