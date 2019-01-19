$(document).ready(function(){
  $("form#triangle").submit(function(event){
    var a = parseInt($("input#sideA").val());
    var b = parseInt($("input#sideB").val());
    var c = parseInt($("input#sideC").val());

    if (((a + b) < c) || ((b + c) < a) || ((a + c) < b)) {
      $(".not-triangle").show();
      $(".isosceles").hide());
      $(".equilateral").hide();
      $(".scalene").hide();
    } else if ((a === b) || (b === c) || (a === c)) {
      $(".not-triangle").hide();
      $(".isosceles").show());
      $(".equilateral").hide();
      $(".scalene").hide();
    } else if ((a === b) && (b === c)) {
      $(".not-triangle").hide();
      $(".isosceles").hide());
      $(".equilateral").show();
      $(".scalene").hide();
    } else {
      $(".not-triangle").hide();
      $(".isosceles").hide());
      $(".equilateral").hide();
      $(".scalene").show();
    }
  event.preventDefault();
  });
});
