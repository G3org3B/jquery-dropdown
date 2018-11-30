

// al passare del mouse scende la tendina

$('.right').mouseenter(function()
{

  $('.list_style li').removeClass('dropdown_menu');
  
  $(this).children('.list_style li').addClass('dropdown_menu');
});

// al togliere il mouse dalla sezione la tendina scompare

$('.right').mouseleave(function() {

  $('.list_style li').removeClass('dropdown_menu');
});
