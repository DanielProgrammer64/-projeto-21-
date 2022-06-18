//Codigo :
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var Groundobj;
var Direita;
var Esquerda;

function preload()
{
	
}

function setup() {
	createCanvas(1365, 620);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

var ball_options={
IsStatic : false,
restituition : 0.3,
friction : 0,
density : 1.2
}

ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  Groundobj.display();
  Ground = new Ground(width/2,670,width,20);
  Esquerda = new Ground(1100,600,20,120);
  Direita = new Ground(1200,700,120,20);

}
  



