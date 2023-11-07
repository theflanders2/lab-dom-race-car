window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
    let game; // initialize the variable 'game'
  });

  function startGame() {
    console.log("start game");
    game = new Game(); // create an instance of the game

    game.start(); // execute the start() method
  }
};
