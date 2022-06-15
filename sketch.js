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
  img2 = loadImage(str(params.two));
  img3 = loadImage(str(params.three));
  img4 = loadImage(str(params.four));
  img5 = loadImage(str(params.five));
  img6 = loadImage(str(params.six));
  img7 = loadImage(str(params.seven));
  img8 = loadImage(str(params.eight));
  img9 = loadImage(str(params.nine));
  //saveCanvas(c, 'myCanvas', 'png');
  
}

function draw() {
  //background(220);
  image(img1, 0, 0, 16, 16);
  image(img2, 16, 0, 16, 16);
  image(img3, 0, 32, 16, 16);
  image(img4, 32, 0, 16, 16);
  image(img5, 0, 16, 16, 16);
  image(img6, 32, 16, 16, 16);
  image(img7, 16, 32, 16, 16);
  image(img8, 48, 32, 16, 16);
  image(img9, 48, 0, 16, 16);
  
}
