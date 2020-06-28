const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1,platform;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var score=0;


function preload(){
  getBackgroundImg();
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


  polygon= Bodies.circle(50,200,20);
  World.add(world,polygon);

  ground1=new Ground(400,400,800,20);
  platform=new Ground(400,200,400,20);

  box1=new Box(330,235,30,40);
  box2=new Box(360,235,30,40);
  box3=new Box(390,235,30,40);
  box4=new Box(420,235,30,40);
  box5=new Box(450,235,30,40);
  box6=new Box(480,235,30,40);
  box7=new Box(510,235,30,40);
  box8=new Box(540,235,30,40);
  box9=new Box(570,235,30,40);
  box10=new Box(600,235,30,40);
  slingShot=new Slingshot(this.polygon,{x:100,y:200});




}

function draw() {
  
  if(backgroundImg){
    background(backgroundImg);
}
 ssssssnoStroke();
 textSize(35)
 fill("white")
 text("Score  " + score,750,50)
    
  ground1.display();
  platform.display();
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
  slingShot.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.polygon);
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "light.jpg";
  }
  else{
      bg = "dark.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
