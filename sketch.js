var s;
var scl = 10;
var food;
let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  
  noFill();

  //createCanvas(500, 500);
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
  //background(random());
   //if (mouseIsPressed){
// if (mouseIsPressed==true){
background(200,0,0,10);
strokeWeight(strokeWidth);

noiseOffset += 0.07;
strokeWidth = noise(noiseOffset) * 100;


stroke(map(mouseX,0,500,0,300,true));
line(width-mouseX, height-mouseY, width-pmouseX, height-pmouseY);
line(mouseX, mouseY, pmouseX, pmouseY);
//background(0);
array.push([mouseX,mouseY]);

 
  
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
  
  beginShape();
for(let i = 0; i < array.length; i++){
//line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
curveVertex(array[i][0], array[i][1]);

}
endShape();{
//line(array[0][0], array[0][1],array[2][0],array[2][1]);
}
return false;
}
  
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
