var hr, mn, sc;
var hrAngle, minAngle, scAngle;
function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);

}

function draw() {
  background(255);

  translate(200, 200)
  rotate(-90)

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  minAngle = map(mn, 0, 60, 0, 360)
  hrAngle = map(hr % 12, 0, 12, 0, 360)

  push();
  rotate(scAngle);
  stroke(0, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop()

  push();
  rotate(minAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop()

  push();
  rotate(hrAngle);
  stroke(255, 223, 0);
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  strokeWeight(10);
  noFill();

  stroke(0, 0, 0);
  arc(0, 0, 300, 300, 0, scAngle);

  stroke(255, 0, 0);
  arc(0, 0, 280, 280, 0, minAngle);

  stroke(255, 223, 0);
  arc(0, 0, 260, 260, 0, hrAngle);
}
