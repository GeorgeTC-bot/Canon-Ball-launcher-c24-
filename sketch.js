// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

var engine,world;
var ground;
var cannon , ball, band;
var target = [];

function setup() {
    createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

    ground = new Ground(500,400,1000,100);
    cannon = new Tanker(200,340,50,20);
    ball = new CanonBall(400,300);
    band = new ShootBall(ball.body,{x: 220, y: 280});
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background(240);
    Engine.update(engine);

    cannon.display();
    band.display();
    ball.display();
    ground.display();

    if(frameCount % 50 === 0 || frameCount === 0){
        target.push(new Ball(random(400,width),-50,random(10,50)));
    }

    if(target.length > 10){
        target.pop();
    }

    for(var i = 0; i < target.length; i++){
        target[i].display();
    }

    drawSprites();

}


function mouseReleased(){
    // Call the shoot method for the cannon.
    band.shot();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});
}

function keyPressed(){
    Matter.Body.setPosition(ball.body,{x: 120, y: 340});
    band.attach(ball.body);
}