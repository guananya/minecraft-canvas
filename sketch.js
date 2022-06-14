let params;

function setup() {
  let c = createCanvas(256, 256);
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
  
  image(img1, 0, 0, 16, 16);
  //saveCanvas(c, 'myCanvas', 'png');
  
}

function draw() {
  //background(220);
}
