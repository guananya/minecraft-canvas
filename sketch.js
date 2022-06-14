let params;

function setup() {
  let c = createCanvas(1000, 1000);
  background('lavender');
  //it is 16x16 grid. Each square is 16 in length
  for (i = 0; i<256;) {
    for (n = 0; n<256;) {
      //image(img, i, n, 16, 16);
      fill('powderblue')
      square(i, n, 16);
      n += 16;
    }
    i += 16;
  }
  
  params = getURLParams();
  console.log(params.one);
  img1 = loadImage(str(params.one));
  
  
  //saveCanvas(c, 'myCanvas', 'png');
  
}

function draw() {
  //background(220);
  image(img1, 300, 300, 16, 16);
  img2 = loadImage('p1.png');
  image(img2, 100, 100, 30, 30)
}
