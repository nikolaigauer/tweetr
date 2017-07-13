$(function() {
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.

  // var tweetData = {
  //   "user": {
  //     "name": "Newton",
  //     "avatars": {
  //       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
  //       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
  //       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
  //     },
  //     "handle": "@SirIsaac"
  //   },
  //   "content": {
  //     "text": "If I have seen further it is by standing on the shoulders of giants"
  //   },
  //   "created_at": 1461116232227
  // }

  var data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Slick Rick",
        "avatars": {
          "small":   "https://fillmurray.com/50/50",
          "regular": "https://fillmurray.com/50/50",
          "large":   "https://fillmurray.com/50/50"
        },
        "handle": "@SirSlick"
      },
      "content": {
        "text":
              "There lived a lil boy who was miss lead By another lil boy and this is what he said Me and you tonight we are gonna make some cash Robbin old folks and makin the dash"
      },
      "created_at": 1461116234957
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function renderTweets(tweets) {
    console.log("Tweet data from render", tweets)
    // loops through tweets
    for (let tweet of tweets) {
      // calls createTweetElement for each tweet
      let newTweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('.tweets').append(newTweet);  //$ ('.tweets').append($tweet);
    }
  }

  // (TweetData) => jQuery
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

  // var $tweet = createTweetElement(tweetData);



  // $('.tweets').append($tweet);
$('tweet').text(renderTweets(data));
  // renderTweets(data)

});


