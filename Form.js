class Form {

    constructor() {
      
      this.button = createButton('Play');
      this.title = createElement('h1');
      this.text = createElement('h2');
      this.text2 = createElement('h2');
      
    }
    hide(){
      
      this.button.hide();
     
      this.title.hide();

      this.text.hide();

      this.text2.hide();



    }
  
    display(){
      this.title.html("Freedom Bridge");
      this.title.position(displayWidth/2 - 50, 0);
  
     this.text.html("Freedom bridge is a bridge that spans the Imjin river between North Korea and South Korea");
     this.text.position(displayWidth-1185,displayHeight-713);

     this.text2.html("Please use Headphones for a better experience");
     this.text2.position(displayWidth-985,displayHeight-613);
      
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      
  
      this.button.mousePressed(()=>{
        
        this.button.hide();
        gameState = "bar1";
      });
  
  
    }
  }
  