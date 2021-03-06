//Back End Logic
//constructor for player object that contains the users inputted name, the dice roll values, and their total score
function Player (name, diceRoll, subTotal) {
  this.name = name;
  this.diceRoll = 0;
  this.subTotal = 0;
  this.gameTotal = 0;
}
Player.prototype.updateValue = function() {
    this.subTotal = 0;
}
Player.prototype.sumSubTotal = function() {
	   this.subTotal += this.diceRoll;
}
Player.prototype.sumGameTotal = function() {
  this.gameTotal += this.subTotal;
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
      newGame.currentPlayer.diceRoll = randomNumberGenerator();

      // pushing the value of the current dice roll to the diceRoll property of the current player

      if (newGame.currentPlayer.diceRoll === 1) {
        newGame.currentPlayer.updateValue();
      } else {
        newGame.currentPlayer.sumSubTotal();
      }


      $(".displayRoll").append("<li>" + newGame.currentPlayer.diceRoll + "</li>");

      // // creates a variable that stores the total of the users roll for that turn
      // //pushes the users roll to the roll array variable
      // // sets the new player property of score equal to the sumUserRoll variable
      // console.log(sumUserRoll);
      // $(".displayCurrentPlayerTotal").text(currentPlayer.subTotal);

      //   var playerClassString = ".displayPlay"
      // }
      console.log(newGame);
  });



    $("#hold").click(function(){
      newGame.currentPlayer.sumGameTotal();
      newGame.currentPlayer.subTotal = 0;
      newGame.switchPlayer();
      $(".displayRoll").text("");
      console.log(newGame);
      $(".displayPlayerOneGameTotal").text(playerOne.gameTotal);
      $(".displayPlayerTwoGameTotal").text(playerTwo.gameTotal);

      if (playerOne.gameTotal >= 100) {
        alert("Congrats " + playerOne.name + " You Won!");
      } else if (playerTwo.gameTotal >= 100) {
        alert("Congrats "  + playerTwo.name + " You Won!");
      }
    });
  });
});
