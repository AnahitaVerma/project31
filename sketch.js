
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var particles = [];
var plinkos =[];
var division = [];

var divisionHeight=300;

function setup() {
	createCanvas(480,610);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(245,605,490,10)
	edge1 = new Ground(5,495,10,300)
	edge2 = new Ground(475,495,10,300)
	division1 = new Ground(101,495,10,300)
	division2 = new Ground(193,495,10,300)
	division3 = new Ground(289,495,10,300)
	division4 = new Ground(380,495,10,300)

  for (var j=40; j<=width; j=j+50)
	{
		plinkos.push(new Plinko(j,35,10));
	}
	for (var j=15; j<=width-10; j=j+50)
	{
		plinkos.push(new Plinko(j,115,10));
	}
	for (var j=40; j<=width; j=j+50)
	{
		plinkos.push(new Plinko(j,215,10));
	}
	for (var j=15; j<=width-10; j=j+50)
	{
		plinkos.push(new Plinko(j,315,10));
	}
    particle1 = new Particle(200,0,10)

	



	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);

  if(frameCount%60===0){

	particles.push(new Particle(random(width/2-10),10,10))
}


  
  
  ground.display();
  edge1.display();
  particle1.display();
  edge2.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
 
  
  
  for (var j=0; j< particles.length;j++){

  particles[j].display();
  }

  for(var b=0;b<plinkos.length;b++){
    plinkos[b].display();
    }
  
  drawSprites();
 
}



