var bg,sleep,brush,gym,eat,drink,move;
var bgImg,sleepImg,brushImg,gymImg,eatImg,drinkImg,moveImg;

function preload(){
  bgImg = loadImage("iss.png");
  sleepImg = loadImage("sleep.png");  
  brushImg = loadImage("brush.png")
  gymImg = loadAnimation("gym1.png","gym2.png");
  eatImg = loadAnimation("eat1.png","eat2.png");
  drinkImg = loadAnimation("drink1.png","drink2.png");
  moveImg = loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(400, 400);

  bg = createSprite(200,200,20,50);
  bg.addImage("bg", bgImg);
}

function draw() {
  background(220);

  drawSprites();  
}