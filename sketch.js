var sea, ship;
var seaImg, shipImg;
function preload(){
  seaImage = loadImage("sea.png");
shipImg = loadAnimation ("ship-1.png","ship-2.png", "ship-3.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200, 200, 400, 400);
  sea.addImage("sea",seaImage);
  sea.scale = 1
  ship = createSprite(200, 200, 10, 20);
  ship.addAnimation('moving', shipImg);
  ship.scale = 0.5;
}

function draw() {
  background("blue");
sea.velocity.x= -2;

 if (sea.x <0){
 sea.x=sea.width/2;
 }
drawSprites();
}