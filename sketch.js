function setup() {
    createCanvas(500, 400);
    soundTrack.loop();
  }
  
  function draw() {
    background(roadImage);
    showActor();
    showCar();
    moveCar();
    moveActor();
    backToInitialPosition();
    checkCollision();
    showsPoints();
    scorePoints();
  }
  