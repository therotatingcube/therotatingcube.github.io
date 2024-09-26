
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);
}
function draw() {
  background(0, 0, 0);
  orbitControl();
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  ambientMaterial(frameCount, 100, 100)
  directionalLight(0, 0, 100, 1)
  box(100, 100);
}
