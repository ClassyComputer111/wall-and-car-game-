var car1;
var car2;
var car3;

var wall1;
var wall2; 
var wall3;

var speed;
var weight;







function setup() {
  createCanvas(600,400);
  speed = random(20,30);
  weight = random(400,1500);
  wall1 = createSprite(590, 80, 20, 60);
  wall2 = createSprite(590,220,20,60);
  wall3 = createSprite(590,360,20,60);
  
  car1= createSprite(40,80,40,40);
  car1.velocityX = speed;
  car2 = createSprite(40,220,40,40);
  car2.velocityX = speed;
  car3 = createSprite(40,360,40,40);
  car3.velocityX = speed;
  
  car1.debug = true;
  wall1.debug = true;
  car2.debug = true;
  wall2.debug = true;
  car3.debug = true;
  wall3.debug = true;
}

function draw() {

  background("pink");  

  if(wall1.x-car1.x < (car1.width+wall1.width)/2)  {
    car1.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22509;
    if(deformation>180) {
      car1.shapeColor = color(255,0,0);
    }
    if(deformation<180  && deformation>100) {
      car1.shapeColor = color(230,230,0);
    }
    if(deformation<100) {
      car1.shapeColor = color(0,255,0);
    }
  }

  if(wall2.x-car2.x < (car2.width+wall2.width)/2)  {
    car2.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22509;
    if(deformation>180) {
      car2.shapeColor = color(255,0,0);
    }
    if(deformation<180  && deformation>100) {
      car2.shapeColor = color(230,230,0);
    }
    if(deformation<100) {
      car2.shapeColor = color(0,255,0);
    }
  }

  if(wall3.x-car3.x < (car3.width+wall3.width)/2)  {
    car3.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22509;
    if(deformation>180) {
      car3.shapeColor = color(255,0,0);
    }
    if(deformation<180  && deformation>100) {
      car3.shapeColor = color(230,230,0);
    }
    if(deformation<100) {
      car3.shapeColor = color(0,255,0);
    }
  }

    
  drawSprites();
}