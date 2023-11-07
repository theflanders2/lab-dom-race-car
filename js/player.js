class Player {
    // to be defined later
    constructor (gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement('img'); // this.element is the player (the blue car) image
        
        this.element.src = imgSrc;
        this.element.style.position = 'absolute';
        // set up the default element's property values
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.top = `${top}px`;
        this.element.style.left = `${left}px`;

        this.gameScreen.appendChild(this.element);
    }

    move () { 
        // Update player's car position based on directionX and directionY propertiees
    this.left += this.directionX;
    this.top += this.directionY;

    // Ensure the player's car stays within the game screen
    // handles left hand side
    if (this.left < 10) {
        this.left = 10;
      }
  
      // handles top side
      if (this.top < 10) {
        this.top = 10;
      }
  
      // handles right hand side
      if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
        this.left = this.gameScreen.offsetWidth - this.width - 10;
      }
  
      // handles bottom side
      if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
        this.top = this.gameScreen.offsetHeight - this.height - 10;
      }

    // Update the player's car position on the screen
    // by redrawing the car at the new positions
    this.updatePosition();
    }

    updatePosition() { // redefines for the car where left and top are
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
      }

    didCollide(obstacle) {

    }
}