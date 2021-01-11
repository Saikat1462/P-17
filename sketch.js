
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTIme
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

 
}



function setup() {
  createCanvas(600,600);
  
  ground = createSprite(400,350,1200,10);
  ground.shapeColor = "grey";
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  SurvivalTime = 0;
  
}


function draw() {
  background("white");
  
   fill("red");
   textSize(20)
   text("SurvivalTime: "+ SurvivalTime, 220,30);
  
  
  SurvivalTime = SurvivalTime + Math.round(frameCount/120);
  
  
  ground.velocityX = -4
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -21 ;
        
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  spawnobstacles();
  spawnfood();
  
  
  monkey.collide(ground);
  
  drawSprites();
  
}

function spawnobstacles() {
  if (frameCount % 300 === 0){
  var obstacle = createSprite(600,327,10,40);
  obstacle.velocityX = -4;
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1
  obstacle.lifetime = 150;
  obstacleGroup.add(obstacle);
}
}

function spawnfood() {
  if (frameCount % 80 === 0){
  var food = createSprite(600,Math.round(random(40, 200)), 10, 10);
  food.velocityX = -4;
  food.addImage(bananaImage);
  food.scale = 0.1
  food.lifetime = 150;
  FoodGroup.add(food);
}
}

