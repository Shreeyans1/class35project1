var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;

var feed, addFood;

var fedTime, lastFed, currentTime;

var foodObj;

var gameState, readState;

function preload(){
   dogImg=loadImage("Images/Dog.png");
   dogImg1=loadImage("Images/happy dog.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(900,500);

  foodObj = new Food();


  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  fedTime = database.ref('feedTime');
  fedTime.on("value",function(data){
    lastFed = data.val();
  });

  readState = database.ref('gameState');
  readState.on("value",function(data){
    gameState = data.val();
  });

  dog=createSprite(400,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  

  feed = createButton('Feed the dog');
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton('Add Food');
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  textSize(20); 
}

// function to display UI
function draw() {
  background(46,139,87);
 
  // if(keyWentDown(UP_ARROW)){
  //   writeStock(foodS);
  //   dog.addImage(dogImg1);
  // }
  foodObj.display();
  drawSprites();
 

  
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}

//Function to write values in DB
// function writeStock(x){
//   if(x<=0){
//     x=0;
//   }else{
//     x=x-1;
//   } 
//   database.ref('/').update({
//     Food:x
//   })
// }

function feedDog(){
  dog.addImage("dogImg1");
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food : foodObj.getFoodStock(),
    FeedTime : hour(),
    gameState : "hungry"
  });
}

function addFoods(){
foodS++;
database.ref('/').update({
  Food:foodS
});
}
function update(state){
  database.ref('/').update({
    gameState: state
  });
}