function setup() {
  createCanvas(400, 400);
}

function draw() {
  prescription();
}
function prescription() {
  fill(255);
  rect(50, 50, 300, 300, 20);
  textSize(28);
  textStyle(BOLD);
  fill(0)
text('PRESCRIPTION', 120, 100);
    img = createImg('https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/29e81ea754c047c9a8d92c7040d219ea.png');
  img.hide();
  image(img, 65,70,50, 50);
  img = createImg('pawprintsign.png');
img.hide();
image(img, 220, 230, 80, 80);
  textStyle(ITALIC);
  fill(0, 102, 153);
  text('get a real cat', 120, 190);
  fill(0);
  textStyle(BOLD);
  textSize(10);
  text('DOCTOR SIGNATURE', 210, 320);
}
