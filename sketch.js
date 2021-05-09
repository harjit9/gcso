var car 
var speed
function setup() {
  createCanvas(800,400);
 car=createSprite(50, 200, 50, 50);
 wall=createSprite(1500,200,60,height/2)
speed=random(55,90)
weight=random(400,500)
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed
  drawSprites();
}