
var form;
var player;
var river, bridge, bank, bank_mask, bridgebg, bridge_mask;
var bar1, bar2, bar3, bar4;
var playerDie;
var gameState = "start";

var Player;
var River, Bridge, Bank, Bank_mask, Bridgebg, Bridge_mask;
var wire1, wire2, wire3, wire4;
var PlayerDie, dead;
var sprite1, sprite2;

var riverSound,gunShotSound;
function preload() {
    player = loadImage("player.png");
    river = loadImage("river.png");
    bridge = loadImage("bridge_fg.png");
    bank = loadImage("bank.png");
    bank_mask = loadImage("bank_mask.png");
    bridgebg = loadImage("bridge_bg.png");
    bridge_mask = loadImage("bridge_mask.png");
    bar1 = loadImage("barb01.png");
    bar2 = loadImage("barb02.png");
    bar3 = loadImage("barb04.png");
    bar4 = loadImage("barb04.png");
    playerDie = loadImage("splat.png");
    riverSound = loadSound("river.mp3");
    gunShotSound = loadSound("gunshot.mp3");
    smokeImage = loadImage("download.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
form = new Form();


Player = createSprite(displayWidth-1515,displayHeight-543);
Player.addImage(player);
Player.scale = 1.4;
Player.depth = 4;
Player.visible = false;

dead = createSprite(displayWidth-605, Player.y);
dead.addImage(playerDie);
dead.scale = 1.4;
dead.depth = 4;
dead.visible = false;

wire1 = createSprite(displayWidth-55, displayHeight-543, 20, displayHeight-30);
wire1.addImage(bar1);
wire1.scale = 1.8;
wire1.visible = false;


wire2 = createSprite(displayWidth+15, displayHeight-543, 20, displayHeight-30);
wire2.addImage(bar2);
wire2.scale = 1.8;
wire2.visible = false;


wire3 = createSprite(displayWidth+665,displayHeight-543, 20, displayHeight-30);
wire3.addImage(bar3);
wire3.scale = 1.8;
wire3.visible = false;


wire4 = createSprite(displayWidth-135, displayHeight-543, 20, displayHeight-30);
wire4.addImage(bar4);
wire4.scale = 1.8;
wire4.visible = false;


Bridge = createSprite(displayWidth-585, displayHeight-513);
Bridge.addImage(bridge);
Bridge.scale = 1.8;
Bridge.depth = 3;
Bridge.visible = false;


Bridgebg = createSprite(displayWidth-585, displayHeight-513);
Bridgebg.addImage(bridgebg);
Bridgebg.scale = 1.8;
Bridgebg.depth = 2;
Bridgebg.visible = false;



Bridge_mask = createSprite(displayWidth-585, displayHeight-513);
Bridge_mask.addImage(bridge_mask);
Bridge_mask.scale = 1.8;
Bridge_mask.depth = 2;
Bridge_mask.visible = false;


River = createSprite(displayWidth-585, displayHeight-513);
River.addImage(river);
River.depth = 1;
River.scale = 1.8;
River.visible = false;


Bank = createSprite(displayWidth-585, displayHeight-513);
Bank.addImage(bank);
Bank.scale = 1.8;
Bank.depth = 1;
Bank.visible = false;



Bank_mask = createSprite(displayWidth-585, displayHeight-513);
Bank_mask.addImage(bank_mask);
Bank_mask.scale = 1.8;
Bank_mask.depth = 1;
Bank_mask.visible = false;

sprite1 = createSprite(displayWidth-785, displayHeight-248, 40, 400);
sprite1.depth = 4;
sprite1.visible = false;

sprite2 = createSprite(displayWidth-785, displayHeight-713, 50, 320);
sprite2.depth = 4;
sprite2.visible = false;

sprite3 = createSprite(displayWidth-615, displayHeight-548, 395, 20);
sprite3.depth = 4;
sprite3.visible = false;

sprite4 = createSprite(displayWidth-615, displayHeight-423, 395, 20);
sprite4.depth = 4;
sprite4.visible = false;


}
function draw() {
  if(gameState==="start"){
    form.display();
    background("white");
  }
  if(gameState === "bar1"){
    background("white");
    form.hide();
    Player.visible = true;
    wire1.visible = true;
    
    
    
     
    }
    if (keyWentDown("RIGHT_ARROW")) {
      
      wire1.velocityX = -3;
      Player.velocityX = 1;
      
    }
    if (keyWentUp("RIGHT_ARROW")) {
      
      wire1.velocityX = 0;
      Player.velocityX = 0;
    }
    if (keyDown("up")) {
      Player.y = Player.y-3;
      
    }
   if (keyDown("down")) {
      Player.y = Player.y+3;
      
    }
  
    if (Player.isTouching(wire1)) {
      gameState = "bar2";
      
    }
    if(gameState === "bar2"){
      background("white");
      for (var i = 0; i < 400; i=i+20) {
        strokeWeight(1);
        stroke("red");
	drawingContext.setLineDash([5, 15]);
  line(wire1.x, wire1.y, Player.x, Player.y);
      }
      wire3.visible = true;
      

    
    if (keyWentDown("RIGHT_ARROW")) {
      wire3.velocityX = -2;
      wire1.velocityX = -3;
      Player.velocityX = 0.7;
      
    }
    if (keyWentUp("RIGHT_ARROW")) {
      wire2.velocityX = 0;
      wire1.velocityX = 0;
      Player.velocityX = 0;
    }
    if (keyDown("up")) {
      Player.y = Player.y-3;
    }
    
   if (keyDown("down")) {
      Player.y = Player.y+3;
      
    }
    if (Player.isTouching(wire2)) {
      gameState = "bar3";
      Player.x = 20;

      
    }
  }
  
   if(gameState === "bar3"){
    background("white");
    for (var i = 0; i < 400; i=i+20) {
      strokeWeight(2);
      stroke("red");
drawingContext.setLineDash([10, 5]);
line(0, 350, Player.x, Player.y);
    }
    wire3.visible = true;
    wire2.destroy();
    
     
      
    }
    if (keyWentDown("RIGHT_ARROW")) {
      wire3.velocityX = -1;
      Player.velocityX = 0.7;
      
    }
    if (keyWentUp("RIGHT_ARROW")) {
      wire3.velocityX = 0;
      Player.velocityX = 0;
    }
    if (keyDown("up")) {
      Player.y = Player.y-3;
      
    }
   if (keyDown("down")) {
      Player.y = Player.y+3;
      
    }

    if (Player.isTouching(wire3)) {
      gameState = "bridge";
      Player.x = displayWidth-1515;

    }
  
  if(gameState === "bridge"){
    background("white");
    for (var i = 0; i < 400; i=i+20) {
      strokeWeight(2);
      stroke("red");
drawingContext.setLineDash([0.5, 3]);
line(0, 350, Player.x, Player.y);
    }
    wire3.destroy();
    wire4.visible = true;
    River.visible = true;
    Bank.visible = true;
    Bank_mask.visible = true;
    Bridgebg.visible = true;
    Bridge_mask.visible = true;
    Bridge.visible = true;
    Player.collide(sprite1);
    Player.collide(sprite2);
    Player.collide(sprite3);
    Player.collide(sprite4);

    if(Player.x >= 930){
      console.log(frameCount);
      Player.destroy();
      dead.visible = true;
      dead.y = Player.y;
      dead.x = Player.x;
      dead.velocityX = 0;
      dead.velocityY = 0;
      if (keyDown("up")) {
        Player.y = Player.y;
        
      }
     if (keyDown("down")) {
        Player.y = Player.y;
        
      }
      if (keyDown("up")) {
       dead.y = dead.y;
        
      }
     if (keyDown("down")) {
        dead.y = dead.y;
        
      }
      
      
    }
  }
  
  drawSprites();
}
