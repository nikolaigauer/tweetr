$(function() {

  function loadTweets() {
    var newTweet = $('#text-form').val("");
    $.ajax({
      url:    '/tweets',
      method: 'GET',
      success: function (results) {
        renderTweets(results);
      },
      error: function () {
      }
    });
  }

  loadTweets();

  // prepending tweets to see newest tweets first
  function renderTweets(tweets) {
    for (let tweet of tweets) {
      let newTweet = createTweetElement(tweet);
      $('.tweets').prepend(newTweet);
    }
  }

  function createTweetElement(tweet) {

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
                <small class="timeago">
                  ${$.timeago(tweet.created_at)}
                </small>
                <div class="footer-icons">
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
          loadTweets();
            $('#textarea').val("")
        },
        error: function (){
        }
      })
    }
  });

})
