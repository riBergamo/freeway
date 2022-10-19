let roadImage;
let actorImage;
let carImage;
let car2Image;
let car3Image;

function preload() {
  roadImage = loadImage("images/road.png");
  actorImage = loadImage("images/actor-1.png");
  carImage = loadImage("images/car-1.png");
  car2Image = loadImage("images/car-2.png");
  car3Image = loadImage("images/car-3.png");
               //verde     cinza     amarelo
  carImages = [carImage, car2Image, car3Image, 
               carImage, car2Image, car3Image];
  
}