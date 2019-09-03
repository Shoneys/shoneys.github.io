// Video: https://youtu.be/FUI7HEEz9B0

let pi;
let za;


function preload() {
     pi = loadImage("Pizzapie/13917_Pepperoni_diffuse.jpg");
    za = loadModel("Pizzapie/13917_Pepperoni_v2_l2.obj");
}

function setup() {
    createCanvas(300, 300, WEBGL);

}

function draw() {
    background(0xffffffff);
    texture(pi);
    scale(20);
    rotateY(frameCount*.005);
    model(za);
}
