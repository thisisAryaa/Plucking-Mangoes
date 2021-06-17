const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyimg,stoneimg,mangoImage,treeImage,gardenimg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var attach1,attach2,attach3,attach4,attach5,attach6,attach7,attach8,attach9,attach10;
var ground, stone;
var slingy;

function preload()
{
	boyimg=loadImage("boy.png");
	stoneimg=loadImage("stone.png");
	mangoimg=loadImage("mango.png");
	treeImage=loadImage("tree.png");
	gardenimg = loadImage("garden.jpg");
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1=new Mango(900,100,20);
	mango2=new Mango(820,200,20);
	mango3=new Mango(1000,100,20);
	mango4=new Mango(990,190,20);
	mango5=new Mango(1120,170,20);
	mango6=new Mango(680,190,20);
	mango7=new Mango(820,140,20);
	mango8=new Mango(900,180,20);
	mango9=new Mango(820,80,20);
	mango10=new Mango(950,60,20);

	attach1=new SlingShot(mango1.body,{x : 900, y : 100});
	attach2=new SlingShot(mango2.body,{x : 820, y : 200});
	attach3=new SlingShot(mango3.body,{x : 1000, y : 100});
	attach4=new SlingShot(mango4.body,{x : 990, y : 190});
	attach5=new SlingShot(mango5.body,{x : 1120, y : 170});
	attach6=new SlingShot(mango6.body,{x : 680, y : 190});
	attach7=new SlingShot(mango7.body,{x : 820, y : 140});
	attach8=new SlingShot(mango8.body,{x : 900, y : 180});
	attach9=new SlingShot(mango9.body,{x : 820, y : 80});
	attach10=new SlingShot(mango10.body,{x : 950, y : 60});

	ground=new Ground(width/2,490,width,20);

	stone=new Stone(138,380,10,10);

	slingy=new SlingShot(stone.body,{x : 138, y : 380});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(gardenimg);
  
  textSize(20);
  fill("Black");
  text("Press SPACE to get one more chance!",100,50);

  imageMode(CENTER);
  image(treeImage,900,250,550,500);

  imageMode(CENTER);
  image(boyimg,200,430,200,200);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  ground.display();

  stone.display();

  slingy.display();

  detectCollision(stone,mango1,attach1);
  detectCollision(stone,mango2,attach2);
  detectCollision(stone,mango3,attach3);
  detectCollision(stone,mango4,attach4);
  detectCollision(stone,mango5,attach5);
  detectCollision(stone,mango6,attach6);
  detectCollision(stone,mango7,attach7);
  detectCollision(stone,mango8,attach8);
  detectCollision(stone,mango9,attach9);
  detectCollision(stone,mango10,attach10);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
    slingy.detach();
}

function  detectCollision(lstone,lmango,lattach) {
    mPos=lmango.body.position;
    sPos=lstone.body.position;

	var distance= dist(sPos.x,sPos.y,mPos.x,mPos.y)
        if(distance<=lmango.width+lstone.width){
            lattach.detach();
        }
}

function keyPressed(){
  if(keyCode===32){
      Matter.Body.setPosition(stone.body,{x : 138, y : 380})
      slingy.attachBody(stone.body);
  }  
}