let xActor = 90;
let yActor = 372;
var collision = false;
let actorWidth = 20;
let actorHeight = 20;
let points = 0;

function showActor() {
  image(actorImage, xActor, yActor, 20, 20);//esquerda, altura(de cma pra baixo), tamanhao(altura), tamanho(comprimento)
}

function moveActor() {
  if (keyIsDown(UP_ARROW)) {//tecla para cima
    yActor -= 1.2;
  } else if (keyIsDown(DOWN_ARROW)) {
    
    if (canMove()) {
      yActor += 1.2;
    }
    
  }
}

function checkCollision() {
  //collideRectCircle(xDoRetangulo, yDoRetangulo, width1, height1, xDoCirculo, yDoCirculo, diameter)
  for (let i = 0;i < carImages.length; i++) {
    collision = collideRectCircle(xCars[i], yCars[i], carWidth, carHeight, 
                                  xActor, yActor, actorWidth, actorHeight);
    if (collision) {
      backActorToInitialPosition();
      soundCollided.play();
      if (pointsGreaterThanZero()) {
        points--;
      }
    }
  }
}

function backActorToInitialPosition() {
  yActor = 372;
}

function showsPoints() {
  fill(color(50,205,50));
  textAlign(CENTER);
  textSize(25);
  text(points, width / 5, 27);//nomedoqépramostrar, posiçao, altura em px
}

function scorePoints() {
  if (yActor < 14) {
    points++;
    soundPoints.play();
    backActorToInitialPosition();
  }
}

function pointsGreaterThanZero() {//pontos maior que zero
  return points > 0;
}

function canMove() {
  return yActor < 372;
}
