 $(function() {

  var test = document.getElementById('tweets')

  test.addEventListener("mouseover", function( event ) {
    event.target.style.color = "orange";

    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

})

