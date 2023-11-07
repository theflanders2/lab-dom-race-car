class Game {
    // code to be added
    constructor () {
        this.startScreen = document.getElementById('game-intro'); // access elements in HTML file with ID #game-intro
        this.gameScreen = document.getElementById('game-screen'); // access elements in HTML file with ID #game-screen
        this.gameEndScreen = document.getElementById('game-end'); // access elements in HTML file with ID #game-end
        this.player = new Player (
            this.gameScreen,
            300,
            500,
            100,
            100,
            './images/car.png'
        ) // new Player()
        this.height = 600; // height of game screen
        this.width = 500; // width of game screen
        this.obstacles = []; // new Obstacle ()
        this.score = 0; // track player's score
        this.lives = 3; // track the number of lives the player has
        this.gameIsOver = false;
    }

    start () { // Initialize the game
        this.gameScreen.style.width = `${this.width}px`; // set the width of the game screen
        this.gameScreen.style.height = `${this.height}px`; // set the height of the game screen
        this.startScreen.style.display = 'none'; // hide the start screen
        this.gameScreen.style.display = 'block'; // show the game screen
        this.gameLoop();
        // car starts at a specific position
        // obstacles are going to be at a specific position as well
    }

    gameLoop () { // Run the game loop
        // right now, always, this.gameIsOver === false
        if (this.gameIsOver === true) {
            return; // an empty return stops the loop, in general 'return' stops an interation
        }

        this.update(); // update the game, update the position of the car

        window.requestAnimationFrame( ()=> this.gameLoop());
        // --> recursive function, this.gameLoop()
        // recursive function is when a function is called within itself
        // keeps the call in the loop and function can be executed multiple times
        // to ensure a consistent frame rate, use window.requestAnimationFrame() to execute the function
        // it is recommended to use window.requestAnimationFrame() when using animation in your browser
        // used to improve/better manage the rate of frames for the game animation
        // with using this method, the animation would be too fast and cause the browser to crash
    }

    update () { // This method is responsible for updating the game state during each loop iteration
        // return the new position of the car to update the game
        // return the positions of the obstacles to update the game
        this.player.move();
    }
}