$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var number=Math.floor(Math.random()*100)
  console.log('number')
  
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    $('#feedback').empty()
    var guess=parseint($('input').val())
    //save their guess as a variable
    
    
    if guess===number
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    {
      $('#feedback').append('Correct...nice.')
    }
      //what happens if the guess is correct?
    else
      if guess>number
      {
        $('#feedback').append('Number's too high...')
      }
      else
      {
        $("#feedback").append("Number's too low...");
      }
    //if the user guessed too high...
    
      //update the 'feedback' paragraph to tell them to guess lower
      
    //otherwise, the user guessed too low...
    
      //update the 'feedback' paragraph to tell them to guess higher
    
  });
});
