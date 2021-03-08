var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 800++-----+);

	 fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

}


function draw() {
  background(bgImg);

 Engine.update(engine);
 star.x=starBody.position.x;
 star.y=starBody.position.y;

   if(starBody.position.y>470){
   Matter.Body.setStatic(starBody,true);
	 
	 
   }

  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyCode===RIGHT_ARROW){
      fairy.x+=20;
	}

	if(keyCode===LEFT_ARROW){
      fairy.x-=20;
	}

    if(keyCode===DOWN_ARROW){
		console.log("high");
      Matter.Body.setStatic(starBody,false);
	}

}


















































3+-