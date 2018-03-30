$(document).ready(function() {

    function getTweetData(selectedTweet) {
        let days = Math.floor(selectedTweet.created_at / (1000 * 60 * 60 * 24)) % 7;
        return `<article class="interactive">
              <header class="interactive">
                <img class="logo" src="${selectedTweet.user.avatars.regular}">
                <h1>${escape(selectedTweet.user.name)}</h1>
                <h3>${selectedTweet.user.handle}</h3>
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
    //Denies scripts from running if entered in the new tweets field
    function escape(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }
    //
    function renderTweets(tweets) {
        let tweetArr = [];
        tweets.forEach(function(tweet) {
            tweetArr.unshift(getTweetData(tweet));
        })
        return tweetArr;
    }

    $('.new-tweet form').on('submit', function(e) {
        //prevents the page from refreshing after submitting the form
        e.preventDefault();
        let rawTweet = escape($('#tweetfield').val());
        if (rawTweet.length <= 140 && rawTweet) {
            let text = $('.new-tweet form').serialize();
            $.post('/tweets', text).done(function() {
                $(".tweets-container").empty();
                loadAndRenderTweets();
                $("#tweetfield").val("");
                $(".counter").text(140);
            })
        } else {
            alert("Tweet must be 1-140 characters!");
        }
    })

    function loadAndRenderTweets() {
        $.get("/tweets").done(function(data) {
            var newData = renderTweets(data);
            $('.tweets-container').prepend(newData);
        })
    }

    loadAndRenderTweets();

    $(".compose").on("click", function() {
        $(".new-tweet").slideToggle("fast");
        $("#tweetfield").focus();
    });
});