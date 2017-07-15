$(function() {

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // WE NEED TO SANITIZE THE OUTPUT WITH THIS BELOW, BUT HOW?
  // $('tweet').text(renderTweets());

  function loadTweets() {
    var newTweet = $('#text-form').val("");
    console.log("Are we receiving anything?");

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
    });
  }

  loadTweets(); // <------- what does this do?

  // prepending tweets to see newest tweets first
  function renderTweets(tweets) {
    for (let tweet of tweets) {
      let newTweet = createTweetElement(tweet);
      $('.tweets').prepend(newTweet);
    }
  }

  function createTweetElement(tweet) {
    console.log('Tweet Data', tweet);

    // escape function to prevent XSS
    function escape(str) {
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    }

    var $tweet = $(`<article class="tweet">
            <header>
              <img src="${tweet.user.avatars.small}" >
              <h3>
                ${escape(tweet.user.name)}
              </h3>
              <span>
                ${escape(tweet.user.handle)}
              </span>
            </header>
              <p>${escape(tweet.content.text)}</p>
            <footer>
                <small>
                ${tweet.created_at}
                </small>
                <div id="footer-icons">
                  <i class="icon-flag"></i>
                  <i class="icon-heart"></i>
                  <i class="icon-retweet"></i>
                </div>
            </footer>
          </article>`);
    return $tweet
  }

  $('#text-form').on('submit', function(event) {
    event.preventDefault();
    console.log("Ok!")
    let textLength = $('#textarea').val().length

    if (textLength === 0) {
      alert("You have to write something to tweet."); // look above for better way to com with user
    } else if (textLength > 140) {
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
