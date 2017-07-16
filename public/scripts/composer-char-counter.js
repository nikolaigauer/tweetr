$(function() {

  //Controls the behaviour of the character counter
  let text = document.getElementById('text-form');
  let textArea = document.getElementById('textarea');
  let counter = document.getElementById('counter');

  $(textArea).on("input", function() {
    let count = $(this).val().length
    $(counter).text("Characters left: " + (140 - count));
      if (140 - count < 0) {
        $('#counter').addClass('text-red');
      } else if (140 - count >= 0) {
        $('#counter').removeClass('text-red');
      }

  });

});
