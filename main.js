
$(document).ready(function(){
  function setHeaderHeight() {
    $('.header').css('min-height', $(window).height() + 'px');
  }
  setHeaderHeight();
  $(window).on('resize', setHeaderHeight);

  $('#year').text(new Date().getFullYear());

  $('.description button').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('#features').offset().top - 70 }, 700);
  });

  $('#contact').on('submit', function(e){
    e.preventDefault();
    alert('Дякуємо! Повідомлення відправлене (демо).');

  });
});
