var bg;
var spaceShip, spaceShipImg;
var asteroid, asteroidImg, asteroidGrp;
var missile, missileImg;
var score = 0;

function preload() {
  //loading images
  bg = loadImage("background.jpg")
  spaceShipImg = loadImage("spaceship.png");
  asteroidImg = loadImage("asteroid.png");
  missileImg = loadImage("missile.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  //making the spaceship
  spaceShip = createSprite(displayWidth/2, displayHeight*0.75, 50, 50);
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.25;

  //creating an asteroid group
  asteroidGrp = new Group();
}

function draw() {
  background(bg);  

  //movement for the spaceship
  if(keyDown("RIGHT_ARROW")){
    spaceShip.x += 7;
  }

  if(keyDown("LEFT_ARROW")){
    spaceShip.x -= 7;
  }

  //destroying asteroids when player touches them
  if(asteroidGrp.isTouching(spaceShip)){
        asteroidGrp.destroy();
  }

  //calling the function to spawn asteroids
  asteroids();

  drawSprites();
}

//creating a function to spawn asteroids
function asteroids() {
  if(frameCount % 70 === 0){
  asteroid = createSprite(random(100,1300),displayHeight/7,30,30);
  asteroid.addImage(asteroidImg);
  asteroid.scale = 0.15;
  asteroid.velocityY = 3;
  asteroid.lifetime = 200;
  asteroidGrp.add(asteroid);
  }
}