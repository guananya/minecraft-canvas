let c = "pink";
let colorArr = ["pink", "powderblue", "lavender"]

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0,0)
  background('powderblue');
  textSize(50);
  text('Loading', windowWidth/2, windowHeight/2);
}

function mouseMoved() {
  fill(c);
  ellipse(mouseX, mouseY, 50);
}

function mouseClicked() {
  c = random(colorArr)
}
