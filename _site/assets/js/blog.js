$(document).ready(function() {

  $('#switch').click(function() {
    // Ignore rapid clicks while animation is running
    if ($(".blog-main-content").is(":animated")) return;

    // Play sound effect (safe: ignore browser autoplay restrictions)
    var player = document.getElementById('player');
    if (player) {
      var p = player.play();
      if (p && p.catch) p.catch(function() {});
    }

    // Toggle: fade out visible, fade in hidden
    $(".blog-main-content:visible").fadeOut("normal");
    $(".blog-main-content:hidden").fadeIn("slow");
  });

});
