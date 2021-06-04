var police,thief,policeImage,thiefImage,bulletFlag = 0,bullet;
var edge;
var gameState = 0;
var playbutton,playbuttonImage;
var bulletGroup;
var thief1,kill1 =0,gameOver;

function preload() {
  policeImage = loadImage("police.png");
  thiefImage = loadImage("thief.png");
  playbuttonImage = loadImage("Play Button.png");
  Background = loadImage("Bg1.png");
  gameOver = loadImage("gmo.png");
}
function setup() {
  createCanvas(800, 400);
 police = createSprite(40, 200,20,20);
 thief = createSprite(200,300,20,20);
 bulletFlag = 0;
 bullet = createSprite(75,196,5,5);
 police.addImage(policeImage);
 thief.addImage(thiefImage);
 thief1 = createSprite(200,-1,20,20);
 thief1.addImage(thiefImage);
 thief1.visible = false;
 police.scale = 0.1;
 thief.scale = 0.07;
 thief1.scale = 0.07;
 edge = createEdgeSprites()
 playbutton = createSprite(400,300);
 playbutton.addImage(playbuttonImage);
 playbutton.scale = 0.1;
 bulletGroup = new Group();
}


 
 function draw() {
if(gameState===0){
  background("black");
  text("controls:",300,100);
  text("Press up,down,left,right arrow keys for movement of police",300,150);
  text("Press Space to fire the bullet on the  theif",300,200);
  text("Click oN PLAy BUttOn tO stARt tHe GaMe",300,250);
  if (mousePressedOver(playbutton)){
    gameState = 1;

  }
}
if(gameState===1){



background(Background);
playbutton.visible = false;
  if(keyDown(UP_ARROW)){
    police.y = police.y-2;
  }
  if(keyDown(DOWN_ARROW)){
    police.y = police.y+2;
  }
  if(keyDown(RIGHT_ARROW)){
    
    police.x = police.x+2;
  }
  if(keyDown(LEFT_ARROW)){
    police.x = police.x-2;
  }
  if(keyDown("SPACE")&&bulletFlag===0){
    fire();
    bulletFlag =1;
    
  }
  if(bullet.x>750){
    bulletFlag = 0;
  }
  thief.velocityX = 2;
 thief.velocityY = Math.round(random(-2,2));
 thief.y = Math.round(random(100,300))
   //thief.bounceOff(edge[0]);
   //thief.bounceOff(edge[3]);
   if(bullet.isTouching(thief)){
     thief.remove()
     kill1 =1;
     
   }
   if(thief.x>800||thief1.x>800){
     
     gameState = 3;
     
   }
    if(kill1===1){
     thief1.visible = true;
     
     
     thief1.velocityX = 4;
     console.log("x"+thief1.velocityX)
     thief1.velocityY = Math.round(random(-2,2));
     thief1.y = Math.round(random(100,300))
    }
    if(bullet.isTouching(thief1)){
      thief1.remove(
        gameState = 2

      )
      
    }
  }
  if(gameState===2){
    background("green");
    bulletGroup.destroyEach();
    textSize(30);
    text("yOu WiN",350,200);
  }
  if(gameState===3){
    background(gameOver);
    bulletGroup.destroyEach();
    textSize(30);
    if(keyDown ("space")){
      gameState = 0
      
    }

  }
  drawSprites();
}
function fire() {
  bullet = createSprite(75,196,2,2);
  bullet.x = police.x+35;
  bullet.y = police.y-4;
  bullet.velocityX = 3;
  bulletGroup.add(bullet);
}