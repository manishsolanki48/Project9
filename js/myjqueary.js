 if (screen.width < 960) {
  $(".header").hide();

  $(".show-btn").click(function(){
    $(".header").fadeToggle();
  });
}