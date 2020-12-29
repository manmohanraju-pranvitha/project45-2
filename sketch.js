
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var corona=[];
var vaccine1;
var scientist,scienimg;
var sling;
maxcorona=50;
function preload()
{
	scienimg=loadImage("123456789.png");
}

function setup() {
	var canvas=createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;
scientist=createSprite(300,height/2+230,30,30);
scientist.addImage(scienimg);
	//Create the Bodies Here.
	for (var j = 75; j <=width/2; j=j+30) 
    {
    
       corona.push(new Corona(j+400,665));
    }
    for (var j = 75; j <=width/2; j=j+40) 
    {
    
       corona.push(new Corona(j+400,605));
    }

    for (var j = 75; j <=width/2; j=j+50) 
    {
    
       corona.push(new Corona(j+400,565));
    }

    for (var j = 75; j <=width/2; j=j+60) 
    {
    
       corona.push(new Corona(j+400,505));
    }
    for (var j = 75; j <=width/2; j=j+70) 
    {
    
       corona.push(new Corona(j+400,465));
    }
	   
ground1= new Ground(width/2,height/2+350,width,18);

vaccine1=new Vaccine(width/2+20,height/2-20,60);
sling=new Slingshot(vaccine1.body,{x:100,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

	
  ground1.display();
  for (var i = 0; i < corona.length; i++) {
     
    corona[i].display();
    
  }
  vaccine1.display();
  sling.display();
  drawSprites();
 
}
function mouseDragged(){
   Matter.Body.setPosition(vaccine1.body,{x:mouseX,y:mouseY});
 }
 function mouseReleased(){
   sling.fly();
 }
 



