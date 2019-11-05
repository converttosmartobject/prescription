function setup() {
  createCanvas(600, 600);
}

function draw() {
  timesUp();
}

function timesUp() {
  textStyle(NORMAL);
  textSize(19);
  text('Times Up. Your therapet has to see her next patient now. Goodbye.', 10, 30);
   button = createButton('double click to pick up your prescription');
  button.position(60, 60);
  button.mousePressed(prescription);
}

function prescription() {
  fill(255);
  rect(80, 120, 300, 300, 20);
  textSize(28);
  textStyle(BOLD);
  fill(0)
text('PRESCRIPTION', 150, 170);
    img = createImg('https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/29e81ea754c047c9a8d92c7040d219ea.png');
  img.hide();
  image(img, 95,140,50, 50);
  img = createImg('pawprintsign.png');
img.hide();
image(img, 250, 300, 80, 80);
  textStyle(ITALIC);
  fill(0, 102, 153);
  text('get a real cat', 150, 260);
  fill(0);
  textStyle(BOLD);
  textSize(10);
  text('DOCTOR SIGNATURE', 240, 390);
}
