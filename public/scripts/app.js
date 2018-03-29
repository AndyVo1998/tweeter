$(document).ready(function() {

  function getTweetData(selectedTweet) {
    let days = Math.floor(selectedTweet.created_at / (1000*60*60*24)) % 7;
    return `<article class="interactive">
              <header class="interactive">
                <img class="logo" src="${escape(selectedTweet.user.avatars.regular)}">
                <h1>${escape(selectedTweet.user.name)}</h1>
                <h3>${escape(selectedTweet.user.handle)}</h3>
              </header>
                <p>${escape(selectedTweet.content.text)}</p>
              <footer class="interactive">
                <span class="interactive">
                <i class="fas fa-share-square"></i>
                <i class="fas fa-retweet"></i>
                <i class="fas fa-heart"></i>
                </span>
                <h4>${days} days ago</h4>
              </footer>
            </article>`
  }

  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function renderTweets(tweets) {
    let tweetArr = [];
    tweets.forEach(function(tweet) {
      tweetArr.unshift(getTweetData(tweet))
    })
    return tweetArr;
  }

  $('.new-tweet form').on('submit', function(e){
    e.preventDefault();
    let rawTweet = escape($('#tweetfield').val());
    if (rawTweet.length <= 140 && rawTweet) {
      let text = $('.new-tweet form').serialize();
      $.post('/tweets', text).done(function() {
        $(".tweets-container").empty();
        loadAndRenderTweets();
        $("#tweetfield").val("");
      })
    } else {
      alert("Tweet must be 1-140 characters!")
    }
  })

  function loadAndRenderTweets() {
    $.get("/tweets").done(function(data) {
      var newData = renderTweets(data);
      $('.tweets-container').prepend(newData)
    })
  }

  loadAndRenderTweets();

  $( ".compose" ).on("click", function() {
    $( ".new-tweet" ).slideToggle("fast");
    $( "#tweetfield" ).focus();
  });
});


















