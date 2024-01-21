function preload() {
  img = loadImage('https://raw.githubusercontent.com/haxmxah/p5.js/main/face.png');
}

function setup() {
  createCanvas(2000, 2000);
}

function draw() {
  background(200);
  x = width/2 - 300;
  y = width/2 + 60;
  eyes(x, y, mouseX, mouseY);
  image(img, -x, -y);

}

function eyes(x, y){
  translate(x,y)
  
  eye_globe(0, 0,10)
  iris(0,0)
  eye_globe(650, 0,-10)
  iris(640,0)

}
function eyes(x, y, mouseX, mouseY) {
  translate(x, y);
  
  let eye1_x = map(mouseX, 0, width, -50, 20); 
  let eye1_y = map(mouseY, 0, height, -15, 20);

  eye_globe(0, 0, 10);
  iris(eye1_x, eye1_y);

  let eye2_x = map(mouseX, 0, width, 600, 670); 
  let eye2_y = map(mouseY, 0, height, -15, 20); 

  eye_globe(650, 0, -10);
  iris(eye2_x, eye2_y);
}

function eye_globe(pos_x,pos_y, rotationAngle) {
  push()
  angleMode(DEGREES);
  translate(pos_x, pos_y)
  rotate(rotationAngle);
  ellipse(0,0,250,110);
  fill(205);
  pop()
}

function iris(pos_x, pos_y){
  push()
  noStroke();
  fill('#792CC9');
  angleMode(DEGREES);
  translate(pos_x, pos_y)
  ellipse(15,0,70,70);
  fill('black')
  ellipse(15,0,10,10)

  pop()
}