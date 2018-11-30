

// $(".burger_menu").hide();

$(".list_style").mouseenter(function(){
  // $(".burger_menu").slideDown();
  $(this).children(".burger_menu").slideDown();
});
$(".list_style").mouseleave(function(){
  $(this).children(".dropdown-menu").slideUp();
});
