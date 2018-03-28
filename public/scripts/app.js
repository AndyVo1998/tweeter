$(document).ready(function() {
 const data = [
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
    "created_at": 146111845893457385347539873796368
  }
];

  function getTweetData(selectedTweet) {
    let days = Math.floor(selectedTweet.created_at / (1000*60*60*24)) % 7;
    return `<article class="interactive"><header class="interactive"><img class="logo" src="${selectedTweet.user.avatars.regular}"><h1>${selectedTweet.user.name}</h1><h3>${selectedTweet.user.handle}</h3></header><p>${selectedTweet.content.text}</p><footer class="interactive"><span class="interactive"><i class="fas fa-share-square"></i><i class="fas fa-retweet"></i><i class="far fa-thumbs-up"></i></span><h4>${days} days ago</h4></footer></article>`
  }

  function renderTweets(tweets) {
    tweets.forEach(function(tweet) {
      let tweetHTML = getTweetData(tweet);
      $('section#tweets-container').append(tweetHTML);
    })
  }

  renderTweets(data);
});
