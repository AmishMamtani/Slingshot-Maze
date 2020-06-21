class Sling{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:80
        }
        this.sling = Constraint.create(option);
        World.add(world,this.sling);
        this.pointB = pointB;
    }
    display(){
        if(this.sling.bodyA){
        var bodyA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push ();
        stroke(255);
        strokeWeight(3);
        line (bodyA.x,bodyA.y,pointB.x,pointB.y);
        pop ();
        }
    }

    fly(){
        this.sling.bodyA = null;
        //if(this.sling.bodyA = null){
         //   this.sling.bodyA = "ball"+ 1+r;
       // }
    }
}