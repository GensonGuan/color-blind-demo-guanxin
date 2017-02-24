var myVideo
var myVideo2
//var myImage
var myImage2
var myImage3
var myImage4
var myImage5
var mySong
var mySong2


function preload(){
  myVideo = createVideo('video/car1.mp4')
  myVideo2 = createVideo('video/car3.mp4')
  //myImage = loadImage("pics/carp.png")
  myImage2 = loadImage("pics/boom.png")
  myImage3 = loadImage("pics/BG.png")
  myImage4 = loadImage("pics/good.png")
  myImage5 = loadImage("pics/logo2.png")
  mySong = loadSound('music/boom.mp3')
  mySong2 = loadSound('music/pass.mp3')
  
}


function setup() {
  createCanvas(windowWidth,windowHeight)
  //videoMode()
  //video(myVideo,)
  imageMode(CENTER)
  drive()
  
  //left text
  textAlign(LEFT)
  fill(237,78,41)
  textSize(16)
  s = "Pretend that you are a color-blindness patient, and you need to drive through the street. Decide when to across at the traffic light. Be careful!"
  text(s,15,windowHeight/100*40,260,windowHeight/100*80)
  
  image(myImage5, width/100*92, height/100*12);
  
  //setTimeout(greenlight,20000)
  
}

function draw() {
  setTimeout(button,17000)
  
  fill(250)
  textSize(20)
  textAlign(CENTER)
  text("Go", width/2-150, height/100*90+30)
  text("Wait 10s", width/2+150, height/100*90+30)
  
}

function drive(){
  myVideo.play()
  
}

function greenlight(){
  myVideo2.play()
  mySong2.play()
  
}

function button(){
  push()
  strokeWeight(40)
  stroke(237,78,41)
  line(width/2-200,height/100*90+20,width/2-100,height/100*90+20)
  line(width/2+100,height/100*90+20,width/2+200,height/100*90+20)
  pop()
  fill(237,78,41)
  textSize(26)
  textAlign(CENTER)
  text("Choose go or wait",windowWidth/2,windowHeight/20*17)
  
}

function boom(){
  imageMode(CENTER)
  image(myImage3, width/2, height/2, width, height)
  image(myImage2, width/2, height/2, height/4177*7426, height)
  mySong.play()
}

function good(){
  imageMode(CENTER)
  image(myImage3, width/2, height/2, width, height)
  image(myImage4, width/2, height/2, height/4177*7426, height)
  
}

function mouseClicked(){
  if(mouseX > width/2-200 && mouseX < width/2-100 && mouseY > height/100*90 && mouseY < height/100*90+40){
    boom()}
  if(mouseX > width/2+100 && mouseX < width/2+200 && mouseY > height/100*90 && mouseY < height/100*90+40){
    greenlight()
    setTimeout(good,22000)}
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}