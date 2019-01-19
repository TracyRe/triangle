$(document).ready(function(){
  $("form#triangle").submit(function(event){
    var a = parseInt($("input#sideA").val());
    var b = parseInt($("input#sideB").val());
    var c = parseInt($("input#sideC").val());

    if () {
      $(".not-triangle").show();
      $(".equilateral").hide();
      $(".isosceles").hide());
      $(".scalene").hide();
    } else if () {
      $(".not-triangle").hide();
      $(".equilateral").show();
      $(".isosceles").hide());
      $(".scalene").hide();
    } else if () {
      $(".not-triangle").hide();
      $(".equilateral").hide();
      $(".isosceles").show());
      $(".scalene").hide();
    } else {
      $(".not-triangle").hide();
      $(".equilateral").hide();
      $(".isosceles").hide());
      $(".scalene").show();
    }
  event.preventDefault();
  });
});
