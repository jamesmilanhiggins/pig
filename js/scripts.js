//Back End Logic
//constructor for player object
function Player (name, roll, score) {
this.name = name;
this.roll = [];
this.score = score;
}
// function PigGame (players) {
// this.players = players;
// }
// var player2 = new Player (sum);
// var newTurn = new Turn (randomNumberGenerator);
var randomNumberGenerator = function (){
  return Math.floor(Math.random() * 6 + 1);
};


//Front End User Logic
$(document).ready(function(){

  // $("#start-section").hide();
  $("#players").submit(function(event){
    // create variable to hold value of users inputted name
    var namePlayerOneInput = $("input[name=player-one-name]").val();
    var namePlayerTwoInput = $("input[name=player-two-name]").val();


    // create new player object that contains the users inputted name, and their score
    var playerOne = new Player(namePlayerOneInput);
    var playerTwo = new Player(namePlayerTwoInput)
    // create pig game object that contains the players
    // var newGame = new PigGame(players);

    console.log(playerOne , playerTwo);


    // $("#start-section").show();
    // var newPigGame = new PigGame(newPlayer);

    $("#roll").click(function(){

      // creates a variable to hold the randomnumber when the user clicks the "roll" button
      var userRoll = randomNumberGenerator();
      // creates a variable that stores the total of the users roll for that turn
      playerOne.roll.push(userRoll);
      var sumUserRoll = playerOne.roll.reduce((a, b) => a + b, 0);
      //pushes the users roll to the roll array variable
      // sets the new player property of score equal to the sumUserRoll variable
      playerOne.score = sumUserRoll;

      $(".displayRoll").append("<li>" + userRoll + "</li>");
      $(".displayTurn").text( sumUserRoll );

      console.log(playerOne);



      // $("#hold").click(function(){
      //   if {
      //
      //   }
    });
      event.preventDefault();
    });
  });
