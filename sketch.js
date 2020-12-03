const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground1, ground2, ground3, box1
var box2, box3, box4, box5, box6
var box7, box8, box9, box10, box11
var box12, box13, box14, box15, box16
var box17, box18, box19, box20, box21, box22
var hexagon, slingshot1;

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

    hexagon = new polygonal_shape(200, 300, 25);
    slingshot1 = new SlingShot(hexagon.body, {x: 200, y: 300});


    ground1 = new Ground(width/2, height-20, width, 28);
    ground2 = new Ground(width/3 + 115, height-170, width/4, 10)
    ground3 = new Ground(width/2 + 410, height - 290, width/4, 10)
    box1 = new Box(500, height - 195, 30, 30);
    box2 = new Box(530, height - 195, 30, 30);
    box3 = new Box(560, height - 195, 30, 30);
    box4 = new Box(590, height - 195, 30, 30);
    box5 = new Box(620, height - 195, 30, 30);
    box6 = new Box(650, height - 195, 30, 30);
    box7 = new Box(680, height - 195, 30, 30);
    box8 = new Box(710, height - 195, 30, 30);
    box9 = new Box(740, height - 195, 30, 30);
    box10 = new Box(770, height - 195, 30, 30);
    box11 = new Box(800, height - 195, 30, 30);

    box12 = new Box(530, height - 225, 30, 30);
    box13 = new Box(570, height - 225, 30, 30);
    box14 = new Box(600, height - 225, 30, 30);
    box15 = new Box(640, height - 225, 30, 30);
    box16 = new Box(680, height - 225, 30, 30);
    box17 = new Box(720, height - 225, 30, 30);
    box18 = new Box(760, height - 225, 30, 30);
    box19 = new Box(800, height - 225, 30, 30);
    box20 = new Box(840, height - 225, 30, 30);
    //box21 = new Box(770, height - 225, 30, 30);
    //box22 = new Box(800, height - 225, 30, 30);
}

function draw(){
    background(150);
    Engine.update(engine);
    ground1.display();
    ground2.display();
    ground3.display();
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
    box19.display();
    box20.display();
    //box21.display();
    //box22.display();

    hexagon.display();
    slingshot1.display();
    textSize(30);
    text("DRAG AND RELEASE THE HEXAGONAL STONE TO LAUNCH IT TOWARDS THE BOXES!!", 100, 40);
}

/*function keyPressed()
{
    if (keyCode == 32)
    {
        slingshot1.attach(hexagon.body);
    }
}*/

function mouseDragged()
{
    Matter.Body.setPosition(hexagon.body, {x: mouseX, y: mouseY})
}

function mouseReleased()
{
    slingshot1.fly()
}
