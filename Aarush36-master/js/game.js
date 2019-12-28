class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      car1=createSprite(100,200);
      car2=createSprite(300,200);
      car3=createSprite(500,200);
      car4=createSprite(700,200);
      cars=[car1,car2,car3,car4];
      
    }
  
    play(){
      form.hide();
    //  textSize(30);
      //text("try yourself", 120, 100)
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
        //index of the array
        var index=0;
        //x,y of cars
        var x =0;
        var y;

        //var display_position = 130;
        for(var plr in allPlayers){
          //add one to the index for every loop;
          index=index+1;
          //positon the cars a little away from each other in x  direction
          x = x+200;
          //use data from data base to display the cars in y  direction
          y=displayHeight-allPlayers[plr].distance;
          cars[index-1].x=x;

          cars[index-1].y=y;
          if(index===player.index){
            cars[index-1].shapeColor="red";
            camera.position.x=displayWidth/2;
            camera.position.y=cars[index-1].y;

          }
          
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      drawSprites();
    }
  }
  