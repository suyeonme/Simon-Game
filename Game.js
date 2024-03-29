

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;


$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

});



function nextSequence(){

 var randomNumber = Math.floor(Math.random() * 4);
 var randomChosenColour = buttonColours[randomNumber];
 gamePattern.push(randomChosenColour);

 $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
 playSound(randomChosenColour);
}


function playSound(name){

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

};


function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");

  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}


$(document).keypress(function(){

  if (!started){

    $("#level-title").text("level" + level);
    nextSequence();
    started = true;

  }
});
