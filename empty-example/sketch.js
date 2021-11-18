var diam1=222.6244
var diam2=134.8416
var diam3=217.4006
var diam4=104.5957
var diam5=57.0136
var diam6=30.7692
var diam7=7
var diam8=2.357
var diam9=125.2579
var diam10=241.8568
var value="#de3163"

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#f4bbff");
  
  //Text
  fill(value)
  textSize(25)
  text("Make Donut Vanish",65,100)
  
  //Donut
  fill(225,169,95)
  noStroke()
  ellipse(195.5206 , 249.181 , diam1 , diam2 )
  
  //Frosting
  fill(255,85,163)
  noStroke()
  ellipse(194.8887 , 234.0346 , diam3 , diam4 )
  
  //Hole
  fill(244,187,255)
  noStroke()
  ellipse(196.2986 , 230.629 , diam5 , diam6 )

  //Bsprinkle1
  fill("#00bbf9")
  noStroke()
  ellipse( 125.2579 , 241.8568 , 7, diam7, diam8)
  
  //BS2
  fill("#00bbf9")
  noStroke()
  ellipse(272.3167 , 226.2124 , 7, diam7, diam8)
  
  //Yellowsprinkle1
  fill("#fee440")
  noStroke()
  ellipse(145.5161 , 212.6593 , 7, diam7, diam8)
  
  //YS2
  fill("#fee440")
  noStroke()
  ellipse(249.5832 , 250.8021 , 7, diam7, diam8)
  
  //Redsprinkle1
  fill("#ff0000")
  noStroke()
  ellipse(189.7993 , 200 , 7, diam7, diam8)
  
  //RS2
  fill("#ff0000")
  noStroke()
  ellipse(212.9149 , 266.4465 , 7, diam7, diam8)
  
  //Greensprinkle1
  fill("#9ef01a")
  noStroke()
  ellipse(161.1702 , 258.6243 , 7, diam7, diam8)
  
  //GS2
  fill("#9ef01a")
  noStroke()
  ellipse(233.3404 , 202.3617 , 7, diam7, diam8)
}
function mousePressed(){
  //To shrink Donnut
  diam1 = diam1-2;
    diam2 = diam2-2;
    diam3 = diam3-2;
    diam4 = diam4-2;
    diam5 = diam5-2;
    diam6 = diam6-2;
    diam7 = diam7/2;
    diam8 = diam8/2;
}
function mouseDragged(){
 value = value + 5;
  if (value > 255) {
    value = 0;
  }
}