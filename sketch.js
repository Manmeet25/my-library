var fixedRect, movingRect, gameObject1, gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(100,700,30,30);
  gameObject1.shapeColor = "pink";
  gameObject1.velocityX=3;
  gameObject2 = createSprite(600,700,30,30);
  gameObject2.shapeColor = "grey";
  gameObject2.velocityX=-3;
  gameObject3 = createSprite(200,100,40,30)
  gameObject3.shapeColor ="blue"
  gameObject3.velocityY = 2;
  gameObject4 = createSprite(200,700,40,30)
  gameObject4.shapeColor ="blue"
  gameObject4.velocityY = -2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "pink";
  }

  bounceOff(gameObject1, gameObject2);
  bounceOff(gameObject3,gameObject4);
  drawSprites();
}

