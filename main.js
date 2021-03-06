function preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(390,200);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    fill(0, 255, 213);
    stroke(117, 8, 212);
    strokeWeight(10);
    rect(50,50,540,380,20,20,20,20);
    fill(228, 232, 16);
    stroke(17, 214, 20);
    circle(50,50,40);
    image(video,120,120,400,240);
}
function take_snapshot(){
    save("selfie.png");
}
