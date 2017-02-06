var player;
var playerImage;
var enemy;
var enemy2;
var enemyImage;
var isGameOver;

//Preloading images 
function preload(){
    playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
    enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
    backgroundImage = loadImage("https://lh3.googleusercontent.com/K3UdS0t311DpKIiq614Ix6cRanFYxueEFaLF3T0bPQLGcJtqzw5ps3ClI85nK7jB4ElbKBs8xg=s640-h400-e365-rw");
    
}

//Setting up canvas, sprites
function setup(){
    createCanvas(500, 256);
    
    player = createSprite (width/2, height -25, 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 8;
    enemy2 = createSprite(width/2 + 60, 0, 0, 0)
    enemy2.addImage(enemyImage);
    enemy2.rotationSpeed = 3.5;
    
    isGameOver = false;
}

//game code
function draw(){
        background(backgroundImage);
    
    if(isGameOver){
        gameover();
    }
    else{
     if(enemy.overlap(player)) {
       isGameOver = true;
   }

   if(keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width/2))){
       player.position.x += 4;
   }
   if(keyDown(LEFT_ARROW) && player.position.x > 25){
       player.position.x -= 4;
   }
   enemy.position.y = enemy.position.y + 6;
   if(enemy.position.y > height){
       enemy.position.y = 0;
       enemy.position.x = random(5, width - 5);
   }
      enemy2.position.y = enemy2.position.y + 3.5;
      if(enemy2.position.y > height){
       enemy2.position.y = 0;
       enemy2.position.x = random(5, width - 5);
   }
      
      drawSprites();
    }
}

// called if enemy overlap player
function gameover() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width / 2, height / 2);
  text("Click anywhere to try again", width / 2, 3 * height / 4);
}

//reset game when in gameover menu
function mouseClicked(){
    if(isGameOver){
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height - (playerImage.height/2);
    
    enemy.position.x = width/2;
    enemy.position.y = 0;
    }
}