$(document).ready(() => {

  // click on sound
  const soundBtn = $('.display-area__user-menu .sound');
  soundBtn.on('click', () => {
    soundBtn.toggleClass('mute');
  });

  //= js/roulete.js


  //= js/speedometer.js
  $('#speedometr').myfunc({divFact:10, eventListenerType:'keyup'});


  // report-page

  // toggle interface color
  $('.interface-color > div').on('click', function() {
    $('.interface-color > div').removeClass('active');
    $('.reports-page .window').toggleClass('dark');
    $(this).addClass('active');
  });


});
