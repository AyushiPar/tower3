const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var bg = "day.jpg";
var backg;

function preload() {
    getBackgroundImg();
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    platform1 = new Ground(350, 250, 240, 10);

    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);

    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);

    box9 = new Box(390,155,30,40);


    platform2 = new Ground(550, 150, 220, 10);

    box11 = new Box(530,115,30,40);
    box12 = new Box(560,115,30,40);
    box13 = new Box(590,115,30,40);
    box14 = new Box(620,115,30,40);
    box15 = new Box(650,115,30,40);

    box16 = new Box(560,100,30,40);
    box17 = new Box(590,100,30,40);
    box18 = new Box(620,100,30,40);

    box19 = new Box(590,75,30,40);

    stone = new Stone(95,280,30,30);
    slingshot = new SlingShot(stone.body,{x:100, y:300});
}


function draw(){
    if(backg){
        background(backg);
    }
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();

    ground.display();
    platform1.display();
    platform2.display();
    slingshot.display();
    stone.display();

    box1.Score();
    box2.Score();
    box3.Score();
    box4.Score();
    box5.Score();
    box6.Score();
    box7.Score();
    box8.Score();
    box9.Score();

    box11.Score();
    box12.Score();
    box13.Score();
    box14.Score();
    box15.Score();
    box16.Score();
    box17.Score();
    box18.Score();
    box19.Score();

    fill("white");
    text("score: "+ score,150,40);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(stone.body);
    }
}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/est");
    var responseJSON = await response.json();
console.log(responseJSON);
    var dt = responseJSON.datetime;
    var hour = dt.slice(11,13);
    console.log(hour);
    if(hour>=06 && hour<=18){
        bg = "day.jpg";
    }
    else{
        bg = "night.jpeg";
    }

   backg = loadImage(bg); 
}