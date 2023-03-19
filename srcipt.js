$(function() {

    $(window).scroll(function() {
  
      var mass = Math.min(20, 1+0.005*$(this).scrollTop());
  
      $('#title').css('transform', 'scale(' + mass + ')');
    });
  });