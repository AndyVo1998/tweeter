$(document).ready(function() {

  function getTweetData(selectedTweet) {
    let days = Math.floor(selectedTweet.created_at / (1000*60*60*24)) % 7;
    return `<article class="interactive">
              <header class="interactive">
                <img class="logo" src="${selectedTweet.user.avatars.regular}">
                <h1>${selectedTweet.user.name}</h1>
                <h3>${selectedTweet.user.handle}</h3>
              </header>
                <p>${selectedTweet.content.text}</p>
              <footer class="interactive">
                <span class="interactive">
                <i class="fas fa-share-square"></i>
                <i class="fas fa-retweet"></i>
                <i class="far fa-thumbs-up"></i>
                </span>
                <h4>${days} days ago</h4>
              </footer>
            </article>`
  }

  function renderTweets(tweets) {
    let tweetArr = [];
    tweets.forEach(function(tweet) {
      // let tweetHTML = getTweetData(tweet);
      // $('.tweets-container').append(tweetHTML);
      tweetArr.push(getTweetData(tweet))
    })
    return tweetArr;
  }


  $('#new-tweet form').on('submit', function(e){
    e.preventDefault();
    let rawTweet = $('#tweetfield').val();
    if (rawTweet.length <= 140 && rawTweet) {
      let text = $('#new-tweet form').serialize()
      $.post('/tweets', text).done(function() {
        $(".tweets-container").empty();
        loadAndRenderTweets();
        console.log(rawTweet.length)
      })
    } else {
      alert("Tweet must be 0-140 characters!")
    }
  })

  function loadAndRenderTweets() {
    $.get("/tweets").done(function(data) {
      var newData = renderTweets(data);
      $('.tweets-container').append(newData)
    })
  }


  loadAndRenderTweets();
});


















