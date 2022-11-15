var bg, bgImg
var player, girlImg
var rock, rockImg
var butterfly, butterflyImg

var butterflyGroup
var rockGroup

function preload(){
  girlImg = loadImage("Girl.png")
  rockImg = loadImage("rock.png")
  butterflyImg = loadImage("butterfly.png")

  bgImg = loadImage("bg.jpg")
}



function draw() {
  background(255,255,255);  
  drawSprites();
}