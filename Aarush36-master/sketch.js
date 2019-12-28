var canvas,backgroundImage;
var gameState=0;
var playerCount;
var allPlayers;
var database;
var form,game ,player;
var cars,car1,car2,car3,car4;
function setup(){
  canvas=createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  console.log(database);
  
  game=new Game();
  game.getState();
  game.start();

}

function draw(){
 if(playerCount===4){
   game.update(1);
 }
  if(gameState===1){
    clear();
    game.play();
  }
}

