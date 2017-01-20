$(document).ready(function(){
  $(".content").load("home.html");

  $(".MenuSection ul").addClass("animMenu");

  $("#home").click(function(){
    $(".content").load("home.html");
  });

  $("#info").click(function(){
    $(".content").load("info.html");
  });

  $("#showcase").click(function(){
    $(".content").load("showcase.html");
  });

});
