'use strict'

$(document).ready(function() {
  const typed = new Typed('.typed', {
    stringsElement: '#words',
    typeSpeed: 100,
    startDelay: 3000,
    backSpeed: 50,
    smartBackspace: true,
    backDelay: 1000,
    loop : true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html'
  });
});
