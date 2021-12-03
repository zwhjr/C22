//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine,myworld;
var ground, ball;

function setup(){
    var canvas = createCanvas(800,400);
   
    myengine = Engine.create();
    myworld = myengine.world;

    //Code for brown ground
    var ground_options ={
        isStatic: true, 
    }

    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(myworld,ground);
    console.log(ground);

    // Code for red box
    var redBox_options ={
        isStatic: true,
    }

    redBox = Bodies.rectangle(270,320,100,120,redBox_options);
    World.add(myworld,redBox);

    // Code for green box
    var greenBox_options ={
        isStatic: true,
    }

    greenBox = Bodies.rectangle(390,320,100,120,greenBox_options);
    World.add(myworld,greenBox);

    // Code for yellow box
    var yellowBox_options ={
        isStatic: true,
        angle:-60
        
    }

    yellowBox = Bodies.rectangle(590,320,100,20,yellowBox_options);
    // Matter.Body.setAngle(yellowBox,130)
    World.add(myworld,yellowBox);

    // Code for ball
    var ball_options ={
         isStatic : false,
        // isStatic: false
        // isStatic = false,
        // isStatic : true,
        restitution: 1.3
    }

    // ball = Bodies.circle(590,100,20);
    // World.add(myworld,ball);

    // ball = Bodies.ellipse(590,100,20,
    //                      ball_options);
    // World.add(myworld,ball);

     ball = Bodies.circle(590,100,20, ball_options);
     World.add(myworld,ball);

    // ball = Bodies(590,100,20);
    // World.add(myworld,ball);
}

function draw(){
    background("lightgreen");
    Engine.update(myengine);
    rectMode(CENTER);

    fill("brown")
    rect(ground.position.x,ground.position.y,800,20);
    fill("red")
    rect(redBox.position.x,redBox.position.y,100,120);
    fill("green")
    rect(greenBox.position.x,greenBox.position.y,100,120);
    
    fill("yellow")
    push();
    translate(yellowBox.position.x,yellowBox.position.y);
    rotate(-45);
    rectMode(CENTER);
    rect(0, 0, 100, 20);
    pop();
   
    fill("red")
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}
