 var hr,mn,sc



function setup() {
  createCanvas(800,700);
hr=hour()
mn=minute()
sc=second()
scAngle=map(sc,0,60,0,360)
}

function draw() {
  background(0);  
  
  
  
push()
angleMode(DEGREES)
rotate(scAngle)
stroke(255,0,0)
strokeWeight(7)
line(200,200,300,200)

pop()

  drawSprites();
}