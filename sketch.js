
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1360,500);		


	engine = Engine.create();
	world = engine.world;

	bottom = new Bottom(1300,480,10,20);
	Side1 = new Side(1300,480,20,30);
	side2 = new Side(1300,200,20,20);
	ground = new Ground(200,height,400,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bottom.display();
  side1.display();
  side2.display();
  ground.display();
}



