//Back End Logic
function Game (roll, turn, total) {
this.roll = roll;
this.turn = turn;
// this.total = total;
}

// var player1 = new Player (roll, turn);
// var player2 = new Player (roll, turn);


// var newTurn = new Turn (randomNumberGenerator);

var randomNumberGenerator = function (){
  return Math.floor((Math.random() * 6) + 1);
};

var rollArray = [];






var result = 0;



//Front End User Logic
$(document).ready(function(){
  $("#roll").click(function(){
    var newGame = new Game (userRoll);
    var userRoll = randomNumberGenerator();
    rollArray.push(userRoll);
    var sum = rollArray.reduce((a, b) => a + b, 0);



    $(".displayRoll").append("<li>" + userRoll + "</li>");
    $(".displayTurn").text( sum );

    });



    // var gameTotal =  function () {
    //   turnTotal.forEach
    //   turnTotal.length + this.
    // }





  });
