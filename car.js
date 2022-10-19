let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [42, 98, 152, 212, 270, 318];
let carSpeeds = [3, 2.5, 3.2, 4.5, 4, 2.3];
let carWidth = 48;//largura
let carHeight = 35;//altura

function showCar() {
  for(let i = 0; i < carImages.length; i++) {
    image(carImages[i], xCars[i], yCars[i], 48, 35);
  }
}

function moveCar() {
  for(let i = 0; i < carImages.length; i++) {
    xCars[i] -= carSpeeds[i];//speed the car moves
  }
}

function backToInitialPosition() {
  for(let i = 0; i < carImages.length; i++) {
    if (pastTheScreen(xCars[i])) {
      xCars[i] = 600;
    }
  }
}

function pastTheScreen(xCars) {//passou a tela
  return xCars < -50;
}