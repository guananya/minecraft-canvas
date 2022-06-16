let c = "pink";
let colorArr = ["pink", "powderblue", "lavender"]

function setup() {
  let cnv = createCanvas(windowHeight, windowWidth);
  cnv.position(0,0)
  background('powderblue');
}

function mouseMoved() {
  fill(c);
  ellipse(mouseX, mouseY, 50);
}

function mouseClicked() {
  c = random(colorArr)
}
