$(function() {

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 function loadTweets() {
  var newTweet = $('#text-form').val("");

    console.log("Are we receiving anything?")

    $.ajax({
      url:    '/tweets',
      method: 'GET',
      success: function (results) {
        console.log("we are loading up!", results);
        renderTweets(results);
      },
      error: function () {
      console.log("loadTweet is having an error");
      }
    })
 }

  $('#text-form').on('submit', function () {

  });

  loadTweets();

  function renderTweets(tweets) {
    for (let tweet of tweets) {
      let newTweet = createTweetElement(tweet);
      $('.tweets').append(newTweet);
    }
  }

  function createTweetElement(tweet) {
    console.log('Tweet Data', tweet);
    var $tweet = $(`<article class="tweet">
            <header>
              <img src="${tweet.user.avatars.small}" >
              <h3>
                ${tweet.user.name}
              </h3>
              <span>
                ${tweet.user.handle}
              </span>
            </header>
              <p>${tweet.content.text}</p>
            <footer>
                <small>
                ${tweet.created_at}
                </small>
            </footer>
          </article>`)
    return $tweet
  }

  // WE NEED TO SANITIZE THE OUTPUT WITH THIS BELOW, BUT HOW?
  // $('tweet').text(renderTweets());

  $('#text-form').on('submit', function() {
    event.preventDefault();
    console.log("Ok!")
    let textLength = $('#textarea').val().length

    if (textLength === 0) {
      alert("You have to write something to tweet.");
    }
    else if (textLength > 140) {
      alert("You cannot tweet more than 140 characters.");
    } else {
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $(this).serialize(),
        success: function (results) {
          console.log("Results: ", results);
          loadTweets();
          $('#textarea').val("")
        },
        error: function (){
          console.log("There was an error")
        }
      })
    }
  });
})
