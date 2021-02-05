class Stone{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0,
            friction:0.5,
            density:1.2
        }
        
        this.body = Bodies.rectangle(x,y, 20, 20, options);
        World.add(world,this.body);
        //this.width = width;
        //this.height = height;
        this.r = width;
        this.image = loadImage("polygon.png");
        
    }

    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r, this.r);
        pop();
    } 
}
