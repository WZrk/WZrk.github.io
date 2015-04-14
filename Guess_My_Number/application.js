$(document).ready(function(){
  var CurrentIndex = 100
  var click_count = 0
  randomIndex = Math.floor(Math.random()*100);
  $('button').on('click', function(){
    var userGuess = $('input').val();
    click_count = click_count+1 ;
    $('#guess_counter')
    console.log(click_count)
    console.log(userGuess)
    $("#feedback").empty();
    if (userGuess == randomIndex){
      $("#feedback").append("Number's correct.")
    }
   else if (userGuess > randomIndex){
      $('#feedback').append("Number's too high...");
    }
    else if (userGuess < randomIndex){
      $("#feedback").append("Number's too low...");
    }
    });
});

