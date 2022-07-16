function setup(){
 canvas =   createCanvas(450,450);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
 }
function draw(){
   image(video,25,25,400,400);
   stroke(22,22);
   circle(25,25,50,70);
   fill(255,0,0);
   rect(20,50,15,350);
   fill(0,255,0);
   circle(425,25,50,70);
   fill(255,0,0);
   rect(420,50,15,350);
   fill(0,255,0);
   circle(25,425,50,70);
   fill(255,0,0);
   rect(50,420,350,15);
   fill(0,255,0);
   circle(425,425,50,70);
   fill(255,0,0)
   rect(50,20,350,15);
   fill(0,255,0)
}

function take_snapshot()
{
    save('framed.png');
}
