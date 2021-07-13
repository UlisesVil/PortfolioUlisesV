

$(document).ready(function() {

  $(window).on('scroll', function() {

    //ADD .TIGHT CLASS - FOOTER ANIMATION
    if ($(window).scrollTop() + $(window).height() > $('#content').outerHeight()) {
      $('body').addClass('tight');
      $('.arrow').show();
    } else {
      $('body').removeClass('tight');
      $('.arrow').hide();
    }
  });

  //BACK TO PRESENTATION MODE - FOOTER ANIMATION
  $("html").on("click", "body.tight #content", function() {
    $('html, body').animate({
      scrollTop: $('#content').outerHeight() - $(window).height()
    }, 500);
  });

  $('.arrow').click(function(){
    $("html").animate({ scrollTop: 0}, 5200);
  });

  //SCROLL REVEAL FUNCTIONS
  ScrollReveal().reveal('.project', {delay:500});
  ScrollReveal().reveal('.element', {delay:500});
  ScrollReveal().reveal('.imgContent', {delay:500});
  ScrollReveal().reveal('.formContainer', {delay:500});
  ScrollReveal().reveal('.resume', {delay:500});
  ScrollReveal().reveal('.social', {delay:500});
});
