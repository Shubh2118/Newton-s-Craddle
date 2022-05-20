
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
width=1600;
height=700;


	//Create the Bodies Here.
roof1=new Roof(400,height/4,width/7,20)
bob1 = new Bob(300,500,10)
bob2 = new Bob(340,500,10)
bob3 = new Bob(380,500,10)
bob4 = new Bob(420,500,10)
bob5 = new Bob(460,500,10)

rope1=new Rope(bob1.body,roof1.body,-80,0)
rope2=new Rope(bob2.body,roof1.body,-40,0)
rope3=new Rope(bob3.body,roof1.body,0,0)
rope4=new Rope(bob4.body,roof1.body,+40,0)
rope5=new Rope(bob5.body,roof1.body,+80,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine)
  roof1.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();


  drawSprites();
 
}



