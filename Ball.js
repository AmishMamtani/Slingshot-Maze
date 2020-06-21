class Ball{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            density: 0.006
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.x =x;
        this.y =y;
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        circle(pos.x,pos.y,this.radius);
    }
}