
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1;
var rope1;
var world;
var ground,roofObject;
var s1,s2,s3,s4,s5,s6,s7,s8,s9,sx;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	ground= new roof(400,590,800,20);
	roofObject=new roof(400,250,100,20);
	bob1 = new bob(320,500,70);
	s1= new square(450,570);
	s2= new square(450,550);
	s3= new square(450,530);
	s4= new square(450,510);
	s5= new square(450,490);
	s6= new square(500,570);
	s7= new square(500,550);
	s8= new square(500,530);
	s9= new square(500,510);
	sx= new square(500,490);
	
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0);

	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();
 ground.display();
  rope1.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();
  s8.display();
  s9.display();
  sx.display();
  


  bob1.display();
  
  }

  function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45} );
	}
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
    //}
}






