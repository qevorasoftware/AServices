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

  $('#current-year').text(new Date().getFullYear());

  $('#request-form').on('submit', function (event) {
    event.preventDefault();
    var message = $(this).serializeArray().map(function (field) {
      return field.name + ': ' + field.value;
    }).join('\n');
    var subject = encodeURIComponent('Aanvraag minibus huren');
    var body = encodeURIComponent(message);
    $('#form-status').text('Je e-mailprogramma opent met je aanvraag. Verstuur de e-mail om deze definitief in te dienen.');
    window.location.href = 'mailto:info@rent-a-bus.be?subject=' + subject + '&body=' + body;
  });
});
