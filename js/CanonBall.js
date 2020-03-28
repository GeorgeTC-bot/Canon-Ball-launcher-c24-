class CanonBall {
  constructor(x, y) {
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.image = loadImage("assets/canonBall.png");
    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(this.x,this.y,50,50, options);
    World.add(world,this.body);
  };

  display(){
    var angle = this.body.angle;
    push();
    rotate(angle);
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,50,70);
    pop();

    console.log(this.body.position.y);
  };
};
