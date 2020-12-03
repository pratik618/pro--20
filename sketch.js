var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  
  background(0);  
 speed=random(55,90);
 weight=random(400,1500);

 car=createSprite(50,200,50,50);
 car.velocityX=speed;
 wall=createSprite(1500,200,60,height/2);

 if(wall.x-car.x<(car.width+wall.width)){
car.velocityX=0;
var deformation=0.5*wight*speed*speed/22509;
if (deformation>180);
 }
  drawSprites();
}