$(function () {
  var $toggle = $('.menu-toggle');
  var $navigation = $('#primary-navigation');

  $toggle.on('click', function () {
    var isOpen = $toggle.attr('aria-expanded') === 'true';
    $toggle.attr('aria-expanded', String(!isOpen));
    $toggle.attr('aria-label', isOpen ? 'Open navigatiemenu' : 'Sluit navigatiemenu');
    $navigation.toggleClass('is-open', !isOpen);
  });

  $navigation.find('a').on('click', function () {
    $toggle.attr('aria-expanded', 'false').attr('aria-label', 'Open navigatiemenu');
    $navigation.removeClass('is-open');
  });

  $(window).on('resize', function () {
    if (window.matchMedia('(min-width: 701px)').matches) {
      $toggle.attr('aria-expanded', 'false').attr('aria-label', 'Open navigatiemenu');
      $navigation.removeClass('is-open');
    }
  });
});
