
var FinishFlag;
var Player1, Player2;
var Trophy;
var FinishFlagImg;
var Player1Img, Player2Img;
var TrophyImg;


function preload(){
    Player1Img = loadImage("Player1.png")
    FinishFlagImg = loadImage("FinishFlag.png")
    Player2Img = loadImage ("Player2.jpeg")
    TrophyImg = loadImage ("Trophy.png")
}

function setup(){
 canvas=createCanvas(600,500)

Player1 = createSprite(50,300,10,10);
Player1.addImage("player1",Player1Img)
Player1.scale=0.15;

Player2 = createSprite(120,310,10,10);
Player2.addImage("player2",Player2Img)
Player2.scale=0.45;

FinishFlag = createSprite(350,50,20,10);
FinishFlag.addImage("flag",FinishFlagImg)
FinishFlag.scale=0.25;

Trophy = createSprite(200,200,15,15); 
Trophy.addImage("trophy",TrophyImg);
Trophy.scale=0.25;
//Trophy.visible = false;

}

function draw(){
background("white");


 drawSprites();
}








