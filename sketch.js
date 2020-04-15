var s;
var scl = 10;
var food;


function setup() {
  createCanvas(500, 500);
  s = new Snake();
  frameRate(10);
  pickLocation();
}
function pickLocation(){
 var cols = floor (width/scl);
 var rows = floor (height/scl);
  food = createVector ( floor(random(cols)), floor(random(rows)));
  food.mult(scl); 
}

function mousePressed() {
s.total++;
}

function draw() {
  background(random());
 
  
if (s.eat(food)){
pickLocation();
}
  s.death();
  s.update();
  s.show();
  
  
  fill(255,0,100);
  ellipse (food.x, food.y, scl,scl);
  fill(255,0,100);
  ellipse (food.y, food.y, scl,scl);
  fill(255,0,100);
  ellipse (food.y, food.x, scl,scl);
  fill(255,0,100);
  ellipse (food.x, food.x, scl,scl);
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0,1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1,0);
  } else if (keyCode === LEFT_ARROW) {
  s.dir(-1,0);
  }
}
