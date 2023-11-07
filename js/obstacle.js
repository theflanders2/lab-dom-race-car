class Obstacle {
    //to be defined later
    constructor (gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 300 + 70);
        // in the case that Math.random generates 0, 70 will be added
        // so the obstacle is not 'out of bounds' - final number is converted to px
        // we basically want to keep the red car randomly between 70 to 370
        // so that it appears properly within the road
        this.top = top;
        this.width = width;
        this.height = height;
        this.element = document.createElement('img'); // this.element is the obstacle (the red car) image

        this.element.src = './images/redCar.png'
        this.element.style.position = 'absolute';
        // set up the default element's property values
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.top = `${top}px`;
        this.element.style.left = `${left}px`;

        this.gameScreen.appendChild(this.element);
    }
}