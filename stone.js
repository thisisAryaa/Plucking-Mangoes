class Stone {
    constructor(x,y,width){
        var options = {
           restitution : 0.8,
           friction : 1,
           density : 2
        }
        this.body=Bodies.circle(x,y,width,options);
        this.image=loadImage("stone.png");
        this.width=width;

        World.add(world,this.body);
    }

    display(){
       var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width+20,this.width+20);
        pop();
    }    
}