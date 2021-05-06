
$(document).ready(function() {

  $(window).on('scroll', function() {

    //ADD .TIGHT
    if ($(window).scrollTop() + $(window).height() > $('#content').outerHeight()) {
      $('body').addClass('tight');
      $('.arrow').show();
    } else {
      $('body').removeClass('tight');
      $('.arrow').hide();
    }
  });

  //BACK TO PRESENTATION MODE
  $("html").on("click", "body.tight #content", function() {
    $('html, body').animate({
      scrollTop: $('#content').outerHeight() - $(window).height()
    }, 500);
  });

  $('.arrow').click(function(){
    $("html").animate({ scrollTop: 0}, 5200);
    console.log('si funciona we');
 });
});



    //Nav-Bar
    /*
    $(".mat-drawer-backdrop").click(function(){
        $('#transparentWall').removeAttr('style','width: 100%; height: 100vh; ');
        $('mat-toolbar').removeAttr('style','background:red !important;');
        $('mat-toolbar').attr('style','background:rgba(0, 0, 0, 0.438) !important; height: 50px;');
    });
*/

  /*  $(".linkNav").click(function(){
        $('#transparentWall').removeAttr('style','background:black; width: 100%; height: 100vh; ');
        $('mat-toolbar').removeAttr('style','background:black; display:none');

    });
    $("#buttonNav2").click(function(){
        $('#transparentWall').removeAttr('style','background:black; width: 100%; height: 100vh; ');
        $('mat-toolbar').removeAttr('style','background:black; display:none');
    });
*/
/*
    $('.element').mouseover(function(){
        $(this).find('h2').css('display','block');

    });

    $('.element').mouseleave(function(){
        $(this).find('h2').css('display','none');
    });*/



/*
$(window).ready(function(){

    var width = $(window).width();
    console.log(width);
    if(width<'696'){
        $('.skillName').css('width','110px');
     }
    /*let sizeElement=$('.element').css('width');
        let size=parseInt(sizeElement.slice(0,(sizeElement.length-2)));
        console.log(size);
        if(size<'111'){
           $('.skillName').css('width','110px');
        }

    });*/


    //header


/*
//header
$(document.body).on('click', 'a[href*="#"]', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 900);
  });

  $(window).on('scroll', function() {
    var scrolled = $(window).scrollTop();
    var height = $(window).height();
    if (scrolled < height) {
      $('.full-image').css({
        'top': -scrolled * .5
      });
    }
  });
*/

 /*
function addAnimate(){
  var cards = document.querySelectorAll('.card');
  cards.forEach((card) => {

    $('.card').mouseenter(function(){
      $(this).find('.card_layer').removeClass('leave-right');
      $(this).find('.card_layer').addClass('enter-right');
    });
    $('.card').mouseleave(function(){
      $(this).find('.card_layer').removeClass('enter-right');
      $(this).find('.card_layer').addClass('leave-right');
    });
    //console.log($('.card').mouseenter());

  });
}

window.addEventListener('load', addAnimate);
*/


