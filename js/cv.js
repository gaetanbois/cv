$(document).ready(function()
{
  $('[data-toggle="tooltip"]').tooltip()

  $("#link1").on("click", function()
  {
    $path=$("#apropos").offset().top;
    console.log(animate());
    $('body').animate({scrollTop:$path},1000);
  });
  $("#competence").click(function(){
    $path=$("#box2").offset().top;
    $('body').animate({scrollTop:$path},1000);
    });
  $("#xp").click(function(){
    $path=$("#box3").offset().top;
    $('body').animate({scrollTop:$path},1000);
  });
  $("#contact").click(function(){
    $path=$("#box4").offset().top;
    $('body').animate({scrollTop:$path},1000);
  });
});
