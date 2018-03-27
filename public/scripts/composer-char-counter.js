$(document).ready(function() {

  $("#tweetfield").bind( "keyup", function() {
    var charCount = $(this).val().length;
    var counter = $(this).siblings("span.counter");

    counter.text(140 - charCount);

    if(charCount > 140) {
      counter.css("color", "red");
    } else {
      counter.css("color", "black");
    }
  });

});
