$(document).ready(function() {
  //tracks the character count and updates the counter
    $("#tweetfield").bind("keydown", function() {
        var charCount = $(this).val().length;
        var counter = $(this).siblings("text.counter");

        counter.text(140 - charCount);

        if (charCount > 140) {
            counter.css("color", "red");
        } else {
            counter.css("color", "black");
        };
    });

});