$(window).on('resize',function(){location.reload();});

$(document).ready(function () {

  // Fakes the loading setting a timeout
  setTimeout(function () {
    $('body').addClass('loaded');
  }, 600);

  $("#ul").hide();

  // Show the div in 3s
  $("#ul").delay(3000).fadeIn(500);
});
