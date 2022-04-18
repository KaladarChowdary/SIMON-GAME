var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var flag = false;
var level = 0;
var index = 0;

function animatePress(currentColor){
  var btn = $("#"+currentColor);
  btn.addClass("pressed");
  setTimeout(function(){
              btn.removeClass('pressed');
      }, 100);

}

function playSound(name){
  var audio = new Audio(name);
  audio.play();
}

function nextSequence(){
  $('#level-title').text("Level "+level);
  level += 1;

  var randomNumber = Math.floor(Math.random()*4);
  var randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);

  $("#"+randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound('sounds/'+randomChoosenColor+'.mp3');



}




$(document).on('keypress',function(e) {
    if(flag == false) {
      flag = true;
      nextSequence();
    }
});


// New level? index starts from zero.
// Button clicked, campare with our index.
// If not equal game over.




// when the any color is pressed
$(".btn").click(function (event) {
  // get id of the color choosen
  var userChoosenColor = this.id;
  // if the color choosen isn't same as color in the index of gamePattern array then declare it as wrong
  if(userChoosenColor != gamePattern[index])
    alert("Wrong");
  // increase the index for next click or next level
  index++;

  // when index reached until no of colors in gamePattern
  if(index === gamePattern.length-1){
    index = 0;
    level += 1;}

  $('#level-title').text("Level "+level);




  userClickedPattern.push(userChoosenColor);
  playSound('sounds/'+userChoosenColor+'.mp3');
  animatePress(userChoosenColor);

});
