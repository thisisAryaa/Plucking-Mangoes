class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }

        this.attach = Constraint.create(options);
        World.add(world,this.attach);
    }

    display(){
        if(this.attach.bodyA){
            var pointA = this.attach.bodyA.position;
            var pointB = this.attach.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    detach(){
        this.attach.bodyA=null;
    }

    attachBody(body){
        this.attach.bodyA=body;
    }
}