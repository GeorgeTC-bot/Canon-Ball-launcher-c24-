class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.shoot = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.shoot);
    }

    attach(body){
        this.shoot.bodyA = body;
    }

    shot(){
        this.shoot.bodyA = null;
    }

    display(){
        if(this.shoot.bodyA != null){
            var pointA = this.shoot.bodyA.position;
            var pointB = this.pointB;

            push();

            strokeWeight(10);
            line(pointA.x,pointA.y,pointB.x,pointB.y);

            pop ();
        }
    }

}
