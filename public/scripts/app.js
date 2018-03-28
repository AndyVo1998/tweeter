$(document).ready(function() {
  function addTweet(content) {
    if(content !== "") {
      $("article").append("<p>" + content + "<p>");
    }
  }

  function tweetSubmit(event) {
    var input = $(event.target.elements.text);
    addTweet(input.val());
    debugger;
  }

  $("form").on("submit", tweetSubmit);
});
