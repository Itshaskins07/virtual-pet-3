class Food{
    constructor(){
    this.image=loadImage("images/milk.png");
    this.garden1=loadImage("images/Garden.png");
    this.washroom1=loadImage("images/Wash Room.png");
    this.bedroom1=loadImage("images/Bed Room.png");
    }
    display(){
         var x=80;
        var y=100; 
        imageMode(CENTER);
        image(this.image,720,220,70,70);
        if(foodv!=0){
            for(var i=0;i<foodv;i=i+1){
                if(i % 10==0){
                 x=80;
                 y=y+50;   

                }
                image(this.image,x,y,50,50);
                x=x+30;
             }
        }   
    }  
     garden(){
 background(this.garden1,550,500);       
     }
     bedroom(){
        background(this.bedroom1,550,500);       
       }
     washroom(){
        background(this.washroom1,550,500);       
       }
}
