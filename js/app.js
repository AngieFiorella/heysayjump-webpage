$(document).ready(function() {
  masonry();
});

function masonry() {
  $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 12,
    percentPosition: true

  });
}

$('#js-menu').click(menuMobile);

function menuMobile () {
	$(this).parent().toggleClass('active');
}

