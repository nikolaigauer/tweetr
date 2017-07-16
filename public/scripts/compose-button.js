$(function () {
  //Controls the behaviour of the Compose button in the nav-bar
    $("#new-tweet").hide();
    $( "#comp-button" ).click(function() {
    $( "#new-tweet" ).toggle( "fast", function() {
      $("#textarea").focus()
    });
  });
})