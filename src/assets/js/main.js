
$(document).ready(function() {

    //Nav-Bar
    $(".mat-drawer-backdrop").click(function(){
        $('#transparentWall').removeAttr('style','background:red; width: 100%; height: 100vh; ');
        $('mat-toolbar').removeAttr('style','background:red;');
        console.log('checa otra cosa');
    });


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

});  