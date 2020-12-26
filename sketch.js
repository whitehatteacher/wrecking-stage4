const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;
var rope;

function preload(){

    bg = loadImage("img/NYC2.jpg");
    craneAni = loadAnimation("img/cran.gif");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    crane = createSprite(1010, 240);
    crane.addAnimation("crane", craneAni);

    ground = new Ground(600,590,1200,20);

    box1= new Box(500,350);
    box2= new Box(600,350);
    box3= new Box(400,350);

    box4= new Box(500,300);
    box5= new Box(600,300);
    box6= new Box(400,300);

    box7= new Box(500,250);
    box8= new Box(600,250);
    box9= new Box(400,250);

    box10= new Box(500,200);
    box11= new Box(600,200);
    box12= new Box(400,200);

    box13= new Box(500,150);
    box14= new Box(600,150);
    box15= new Box(400,150);

    box16= new Box(500,100);
    box17= new Box(600,100);
    box18= new Box(400,100);

    ball = new Ball(900, 240, 50);

    rope = new Rope(ball.body, {x:900, y:100});
}

function draw(){
    background(bg);
    
    Engine.update(engine);
   ground.display();

   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();

   ball.display();

   rope.display();

   drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
