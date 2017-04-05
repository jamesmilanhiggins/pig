//Back End Logic
//constructor for player object
function PigGame (players) {
  this.players = [];
}
function Player (name, roll, score) {
this.name = name;
this.roll = [];
this.score = score;
}



var randomNumberGenerator = function (){
  return Math.floor(Math.random() * 6 + 1);
};


//Front End User Logic
$(document).ready(function(){

  // $("#start-section").hide();
  $("#players").submit(function(event){
    // create variable to hold value of users inputted name
    var personOneNameInput = $("input[name=person-one-name]").val();
    var personTwoNameInput = $("input[name=person-two-name]").val();

    // create new player object that contains the users inputted name, and their score
    var newPlayer1 = new Player(personOneNameInput);
    var newPlayer2 = new Player(personTwoNameInput);

    var newGame = new PigGame(newPlayer1,newPlayer2);
    newGame.players.push(newPlayer1,newPlayer2);
    // console.log(newGame);
    // var playerTwo = new Player(namePlayerTwoInput)
    // create pig game object that contains the players
    // newGame.players.push(newPlayer, newPlayer);

    // $("#start-section").show();
    // var newPigGame = new PigGame(newPlayer);

    $("#roll").click(function(){
      // creates a variable to hold the randomnumber when the user clicks the "roll" button
      var userRoll = randomNumberGenerator();
      newPlayer1.roll.push(userRoll);
      $(".displayRoll").append("<li>" + userRoll + "</li>");
      var sumUserRoll = newPlayer1.roll.reduce((a, b) => a + b, 0);
      newPlayer1.score = sumUserRoll;
      console.log(newGame);


      // creates a variable that stores the total of the users roll for that turn
      //pushes the users roll to the roll array variable
      // sets the new player property of score equal to the sumUserRoll variable

      $(".displayTurn").text( newPlayer1.score );
      console.log(sumUserRoll);
    });



    event.preventDefault();
    });
});
