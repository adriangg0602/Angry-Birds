var fixedRect, movingRect, rect1, rect2,rect3,rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1=createSprite(200,300,50,50);
  rect2=createSprite(200,200,50,50);
  rect3=createSprite(200,500,50,50);
  rect4=createSprite(200,100,50,50);
  rect1.shapeColor="blue";
  rect2.shapeColor="blue";
  rect3.shapeColor="blue";
  rect4.shapeColor="blue";
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
  rect1.velocityY=-5;
  rect2.veloctyY=5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(isTouching(movingRect,rect2)){
    movingRect.shapeColor = "red";
    rect2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    rect2.shapeColor = "blue";
  }
  bounceOff(rect1,rect2);
  drawSprites();
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX=object1.velocityX*(-1)
      object2.velocityX=object2.velocityX*(-1)
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){
        object1.velocityY=object1.velocityY*(-1)
        object2.velocityY=object2.velocityY*(-1)
      }
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
 return true;
}
else{
  return false;
}
}