  //description 

function TYPE(x,y) {
    this.x=x;
        this.y =y;
 
    noStroke();
    fill(255, 90);
    textFont("Arial"); 
    textSize(20); 
    textAlign(LEFT, CENTER);
    text('DAY '+this.x, width - 95, 35);

    textSize(22); 
    text("#CODING365-the secret of the beauty", 25, 35);

    textSize(14);
    text("Created by", 25, height - 50);
    textSize(16); 
    text("Pem Zhipeng Xie", 25, height - 30);

    textSize(16); 
    text(this.y, width - 110, height - 30);

    
    
    
    
        
   }