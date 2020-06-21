const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world,engine;
var ground;
var ground1;
var bar,bar2;
var ball1,ball2,constraint; 
var block1,block2,block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20,block21;
var block22,block23,block24,block25,block26;
var block27,block28,block29,block30;
var block31,block32,block33,block34,block35,block36;
var block37,block38,block39,block40,block41;
var block42,block43,block44,block45;
//var w = 0;
//var r = 1+w;


function setup() {
  createCanvas(1440,837);
  engine = Engine.create();
  world = engine.world; 
  ground = new Ground(720,837,1440,5);
  ground1 = new Ground(720,0,1440,5);
  bar = new Ground((1440+720)/2,(837/2)*1.5,1440/3,40);
  bar2 = new Ground(800,837/3,1440/4,40);
  ball1 = new Ball((1440-720)/2,(837/2)*1.3,50);
  constraint = new Sling(ball1.body,{x:(1440-720)/2, y:(837/2)*1.3})
  //first row
  block1 = new Block(1290,600,60,60);
  block2 = new Block(1230,600,60,60);
  block3 = new Block(1170,600,60,60);
  block4 = new Block(1110,600,60,60);
  block5 = new Block(1050,600,60,60);
  block6 = new Block(990,600,60,60);
  block7 = new Block(930,600,60,60);
  block8 = new Block(870,600,60,60);
  //second row
  block9 = new Block(1260,540,60,60);
  block10 = new Block(1200,540,60,60);
  block11 = new Block(1140,540,60,60);
  block12 = new Block(1080,540,60,60);
  block13 = new Block(1020,540,60,60);
  block14 = new Block(960,540,60,60);
  block15 = new Block(900,540,60,60);
  //third row
  block16 = new Block(1230,480,60,60);
  block17 = new Block(1170,480,60,60);
  block18 = new Block(1110,480,60,60);
  block19 = new Block(1050,480,60,60);
  block20 = new Block(990,480,60,60);
  block21 = new Block(930,480,60,60);
  //4th row
  block22 = new Block(1200,420,60,60);
  block23 = new Block(1140,420,60,60);
  block24 = new Block(1080,420,60,60);
  block25 = new Block(1020,420,60,60);
  block26 = new Block(960,420,60,60);
  //5th row
  block27 = new Block(1170,360,60,60);
  block28 = new Block(1110,360,60,60);
  block29 = new Block(1050,360,60,60);
  block30 = new Block(990,360,60,60);
  //2nd Bar 1st row
  block31 = new Block(950,260,60,60);
  block32 = new Block(890,260,60,60);
  block33 = new Block(830,260,60,60);
  block34 = new Block(770,260,60,60);
  block35 = new Block(710,260,60,60);
  block36 = new Block(650,260,60,60);
  //2nd bar 2nd row
  block37 = new Block(920,190,60,60);
  block38 = new Block(860,190,60,60);
  block39 = new Block(800,190,60,60);
  block40 = new Block(740,190,60,60);
  block41 = new Block(680,190,60,60);
  //2nd bar 3rd row
  block42 = new Block(890,120,60,60);
  block43 = new Block(830,120,60,60);
  block44 = new Block(770,120,60,60);
  block45 = new Block(710,120,60,60);
  }

function draw() {
  background(0);
  Engine.update(engine);
  fill (0);
  ground.display();
  ground1.display();
  fill(147,200,200);
  bar.display();
  bar2.display();
  // 1st row
  fill(239,118,122);
  block1.display();
  fill(69,105,144);
  block2.display();
  fill(73,190,170);
  block3.display();
  fill(69,105,144);
  block4.display();
  fill(73,220,177);
  block5.display();
  fill(69,105,144);
  block6.display();
  fill(239,118,122);
  block7.display();
  fill(73,220,177);
  block8.display();
  //2nd row
  fill(73,220,177);
  block9.display();
  fill(239,118,122);
  block10.display();
  fill(73,190,170);
  block11.display();
  fill(69,105,144);
  block12.display();
  fill(73,220,177);;
  block13.display();
  fill(239,118,122);
  block14.display();
  fill(69,105,144);
  block15.display();
  //3rd row
  fill(239,118,122);
  block16.display();
  fill(73,220,177);
  block17.display();
  fill(239,118,122);
  block18.display();
  fill(73,220,177);
  block19.display();
  fill(73,190,170);
  block20.display();
  fill(69,105,144);
  block21.display();
  //4th row
  fill(73,190,170);
  block22.display();
  fill(73,220,177);
  block23.display();
  fill(239,118,122);
  block24.display();
  fill(69,105,144);
  block25.display();
  fill(73,220,177);
  block26.display();
  //5th row
  fill(69,105,144);
  block27.display();
  fill(73,190,170);
  block28.display();
  fill(239,118,122);
  block29.display();
  fill(73,220,177);
  block30.display();
  //2nd bar row 1
  fill(239,118,122);
  block31.display();
  fill(73,220,177);
  block32.display();
  fill(69,105,144);
  block33.display();
  fill(73,190,170);
  block34.display();
  fill(73,220,177);
  block35.display();
  fill(69,105,144);
  block36.display();
  //2nd bar row 2
  fill(69,105,144);
  block37.display();
  fill(239,118,122);
  block38.display();
  fill(73,190,170);
  block39.display();
  fill(69,105,144);
  block40.display();
  fill(73,220,177);
  block41.display();
  //2nd bar row 3
  fill(73,220,177);
  block42.display();
  fill(69,105,144);
  block43.display();
  fill(239,118,122);
  block44.display();
  fill(73,190,170);
  block45.display();
//fill(69,105,144);
//fill(239,118,122);
//fill(73,190,170);
//fill(73,220,177);

//fill(239,118,122);
//fill(69,105,144);
//fill(73,190,170);
//fill(73,220,177);
fill(255);
  circle((1440-720)/2,(837/2)*1.3,10)
  constraint.display();
  fill(21,176,151);
  ball1.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
  Matter.Body.setStatic(ball1.body, isStatic=false);
}

function mouseReleased(){
 constraint.fly(); 
 //ball2.display();}
}