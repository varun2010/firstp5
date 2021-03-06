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
    
    fill(252, 252, 0);
    stroke(47, 224, 7);
    circle(50,50,50);
    
    image(video,120,120,400,240);
}
function take_snapshot(){
    save("selfie.png");
}
