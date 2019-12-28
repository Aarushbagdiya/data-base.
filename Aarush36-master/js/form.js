class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("car racing");
      title.position(displayWidth/2-45, 0);
  
      this.input.position(displayWidth/2-40,displayHeight/2-75);
      this.button.position(displayWidth/2+25,displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hi " + player.name)
        this.greeting.position(displayWidth/2-65,displayHeight/4);
      });
  
    }
  }
  