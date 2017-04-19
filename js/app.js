$(document).ready(function() {
  masonry();
});

$('#js-menu').click(menuMobile);
$('.triangle').click(smoothScroll);
$(window).scroll(backgroundMenu);
var coverHeight = $('#js-cover-height').height();


function masonry() {
  $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 12,
    percentPosition: true

  });
}

function menuMobile () {
	$('header').toggleClass('view-nav-mobile');
}

function smoothScroll() {
  $('html, body').animate({
    scrollTop: $('#first-section').offset().top },
    'slow');
}

function backgroundMenu() {
  var scrollWindow = $(window).scrollTop();
  console.log(scrollWindow);

  if (scrollWindow >= coverHeight) {
    $('.background-menu').addClass('dark');
  } else if (scrollWindow < coverHeight) {
    $('.background-menu').removeClass('dark');
  }
}

