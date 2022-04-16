var path,pathImage
var jaxon,jaxonImage
var leftBoundary,rightBoundary,edges;

function preload(){
  //pre-load images
  pathImage=loadImage('path.png')
jaxonImage=loadAnimation('Runner-1.png','Runner-2.png')

}

function setup(){
  createCanvas(600,600);
  //create sprites here
  path=createSprite(300,300,40,40)
  path.addImage('path',pathImage)
path.scale=1.2
path.velocityY=4



jaxon=createSprite(0,200,20,20)
jaxon.addAnimation('jaxon',jaxonImage)
jaxon.scale=0.1
 
leftBoundary=createSprite(0,0,280,800)


rightBoundary=createSprite(560,0,200,800)


edges=createEdgeSprites();
}

function draw() {
  background('white');
  jaxon.x=World.mouseX;


if(path.y>450){
  path.y=height/2
}
jaxon.collide(leftBoundary);
jaxon.collide(rightBoundary);
jaxon.collide(edges[3])
drawSprites()
}