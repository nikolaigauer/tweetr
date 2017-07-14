$(function () {

$( "#comp-button" ).click(function() {
  console.log("We got a tap-a-tappa")
  $( "#new-tweet" ).toggle( "fast", function() {
    console.log("we are toggling")
    $("#textarea").focus()
  });
});










// don't delete brackets below
})