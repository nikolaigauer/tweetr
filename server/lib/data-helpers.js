"use strict";

// Simulates the kind of delay we see with network or filesystem operations
// const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {


//insert:

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insert(newTweet)
      // simulateDelay(() => {
        // db.tweets.push(newTweet);
        callback(null, true);
      // });
    },


//find:
    getTweets: function(callback) {
      db.collection("tweets").find().toArray((err, tweets) => {
        if (err) {
          return callback(err);
        }
        callback(null, tweets);
    });

    // Get all tweets in `db`, sorted by newest first

      // simulateDelay(() => {
      //   const sortNewestFirst = (a, b) => a.created_at - b.created_at;
      //   callback(null, db.tweets.sort(sortNewestFirst));
      // // });
    }

  };
}
