const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
  backgroundImg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(600, 600);

  engine = Engine.create();
  world = engine.world;

  bg = createSprite(0, 0, 600, 600)
  
  bg.addImage("snow", backgroundImg)
  bg.scale = 1.25
}

function draw() {
  background(255);  
  bg.velocityX = -3
if(bg.x<200){
  bg.x=800
}
  drawSprites();
}