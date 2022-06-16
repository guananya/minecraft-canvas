let c = "pink";
let colorArr = ["pink", "powderblue", "lavender"]

function setup() {
  let cnv = createCanvas(850, 600);
  cnv.position(295, 125)
  background('powderblue');
}

function mouseMoved() {
  fill(c);
  ellipse(mouseX, mouseY, 50);
}

function mouseClicked() {
  c = random(colorArr)
}
