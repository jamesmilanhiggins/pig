//Back End Logic
//constructor for player object that contains the users inputted name, the dice roll values, and their total score
function Player (name, diceRoll, score) {
  this.name = name;
  this.diceRoll = [];
  this.score = score;
}
// constructor for game object that declares the current player and an array containing all the players
function PigGame (player, players) {
  this.currentPlayer = player
  this.players = [];
}
// method for game object to swith players
PigGame.prototype.switchPlayer = function() {
  if (this.currentPlayer === this.players[0]) {
    this.currentPlayer = this.players[1];
  } else if (this.currentPlayer === this.players[1]) {
    this.currentPlayer = this.players[0];
  }
};
// function to generate a random number
var randomNumberGenerator = function (){
  return Math.floor(Math.random() * 6 + 1);
};

//Front End User Logic
$(document).ready(function(){
  // $("#start-section").hide();
  $("button[name=submit-button]").click(function(){
    // create variable to hold value of users inputted name
    var playerOneNameInput = $("input[name=person-one-name]").val();
    var playerTwoNameInput = $("input[name=person-two-name]").val();
    // create new player objects that contains the users inputted name
    var playerOne = new Player(playerOneNameInput);
    var playerTwo = new Player(playerTwoNameInput);

    // create new game object that declares the current player, and then all of the players
    var newGame = new PigGame(playerOne);

    // using a push method to push the two players into the players property of the newGame object
    newGame.players.push(playerOne,playerTwo);

    // setting the current player property of the newGame object equal to playerOne
    newGame.currentPlayer = playerOne;

    // $("#start-section").show();
    //setting a click function listener for the roll dice button
    $("#roll-dice").click(function(){

      // creates a variable to hold the randomnumber when the user clicks the roll dice button
      var currentDiceRoll = randomNumberGenerator();

      // pushing the value of the current dice roll to the diceRoll property of the current player
      newGame.currentPlayer.diceRoll.push(currentDiceRoll);


      $(".displayRoll").append("<li>" + currentDiceRoll + "</li>");
      var rollTotal = newGame.currentPlayer.diceRoll.reduce((a, b) => a + b, 0);
      newGame.currentPlayer.score = rollTotal;

      // // creates a variable that stores the total of the users roll for that turn
      // //pushes the users roll to the roll array variable
      // // sets the new player property of score equal to the sumUserRoll variable
      $(".displayPlayerOneTotal").text(playerOne.score);
      $(".displayPlayerTwoTotal").text(playerTwo.score);
      // console.log(sumUserRoll);
    });


    $("#hold").click(function(){
      newGame.switchPlayer();
      console.log(newGame);
    });
  });
});
