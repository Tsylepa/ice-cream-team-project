function scrollToAnchor(hash) {
  var target = $(hash),
    headerHeight = $('.header__container').height() - 1; // Get fixed header height
  target = target.length ? target : $('[name=' + hash.slice(1) + ']');
  if (target.length) {
    $('html,body').animate(
      {
        scrollTop: target.offset().top - headerHeight,
      },
      700
    );
    return false;
  }
}

if (window.location.hash) {
  scrollToAnchor(window.location.hash);
}

$('a[href*=\\#]:not([href=\\#])').click(function () {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
    location.hostname == this.hostname
  ) {
    scrollToAnchor(this.hash);
  }
});
