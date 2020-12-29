class Corona {
    constructor(x, y) {
        var options = {
            restitution: 0.8,
            friction: 0.1,
            isStatic:true
        }
        this.r = 40;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image=loadImage("corona.1.png");
        World.add(world, this.body);
    }
    
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        
        imageMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

};