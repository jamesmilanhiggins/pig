//Back End Logic
function Player (name,score) {
this.name = name;
this.score = score;
}
function PigGame(player1){
  this.players = [player1];

}
// var player2 = new Player (sum);


// var newTurn = new Turn (randomNumberGenerator);

var randomNumberGenerator = function (){
  return Math.floor((Math.random() * 6) + 1);
};

var rollArray = [];

var result = 0;



//Front End User Logic
$(document).ready(function(){
  $("#name").submit(function(event){
    event.preventDefault();
    var nameInput = $("input[name=name]").val();
    console.log(nameInput);
    var newPlayer = new Player(nameInput, sumUserRoll);
    var newPigGame = new PigGame(newPlayer);
    console.log(newPlayer.name);
    $("#roll").click(function(){
      // var newGame = new Game (userRoll);
      var userRoll = randomNumberGenerator();
      rollArray.push(userRoll);
      var sumUserRoll = rollArray.reduce((a, b) => a + b, 0);



      $(".displayRoll").append("<li>" + userRoll + "</li>");
      $(".displayTurn").text( sumUserRoll );

    });
});

  $("#hold").click(function() {

  });




    // var gameTotal =  function () {
    //   turnTotal.forEach
    //   turnTotal.length + this.
    // }





  });
