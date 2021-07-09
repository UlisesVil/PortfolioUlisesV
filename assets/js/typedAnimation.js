'use strict'

$(document).ready(function() {

  const typed = new Typed('.typed', {
    //strings:[
    //  '<i class="typedText">Gato</i>',
    //  '<i class="typedText">Perro</i>',
    //  '<i class="typedText">Tigre</i>'
    //],
    stringsElement: '#words',
    typeSpeed: 100,
    startDelay: 3000,
    backSpeed: 50,
    smartBackspace: true,
    //shuffle: true, //tiene el error que antes de borrar cambia la palabra
    backDelay: 1000,
    //fadeOut: true,
    //fadeOutDelay: 50,
    loop : true,
    loopCount: false,  //false=infinite
    showCursor: true,
    cursorChar: '|',
    contentType: 'html'



  });
});
