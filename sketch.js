var backgroundImg, rockImg, sciImg, paperImg, playerImg, computerImg, playerMad, pcMad, playerHappy, pcHappy, buttonImg;
var rock, paper, sci, player, computer;
var score = 0;
var computerScore = 0;
var playerChoice;
var pcChoice;

var button;

var oPaper, oSci, oRock;

var PLAY = 1;
var END = 0;
var SERVE = 2;
var gameState = SERVE;

function preload() {

  backgroundImg = loadImage("background.jpg");
  rockImg = loadImage("rock.jpg");
  paperImg = loadImage("paper.jpg");
  sciImg = loadImage("sci.jpg");
  playerImg = loadImage("player.png");
  computerImg = loadImage("computer.png");
  playerHappy = loadImage("playerHappy.png");
  pcHappy = loadImage("pcHappy.png");
  playerMad = loadImage("playerMad.png");
  pcMad = loadImage("pcMad.png");
  buttonImg = loadImage("play.png");

}

function setup() {
  createCanvas(800,800);

  button = createSprite(350, 400, 20, 20);
  button.addImage("play", buttonImg);
  button.scale = 0.35;
  
}

function draw() {
    

  if(gameState == SERVE) {
    background("black");

    textSize(30);
    fill("white");
    text("1. Press the option you want to choose.", 100, 100);
    text("2. Whoever wins, Computer or player, gets a point.", 100, 150);
    text("3. Whoever gets 5 points first, wins!", 100, 200);

    button.visible = true;
 
    if(mousePressedOver(button)) {
      gameState = PLAY;
    }
  }

  if (gameState == PLAY) {
    play();

    if(playerChoice == null){
      showOptions();

      
    if(mousePressedOver(oRock)) {
      playerChoice = "ROCK";
      oPaper.destroy();
      oSci.destroy();
    }
  
    if(mousePressedOver(oSci)) {
      playerChoice = "SCI";
      oRock.destroy();
      oPaper.destroy();
    }
  
    if(mousePressedOver(oPaper)) {
      playerChoice = "PAPER"
      oSci.destroy();
      oRock.destroy();
    }
    }
  

  }


  drawSprites();
}

function play() {

  background(backgroundImg);

  button.destroy();

  player = createSprite(100,750,10,10);
  player.addImage("playing", playerImg);
  player.addImage("happy", playerHappy);
  player.addImage("mad", playerMad);
  player.scale = 0.3;

  computer = createSprite(700,730,10,10);
  computer.addImage("playing", computerImg);
  computer.addImage("happy", pcHappy);
  computer.addImage("mad", pcMad);
  computer.scale = 0.7;



  textSize(40);
  fill("red");
  text(score + " - " + computerScore , 350, 730);
}

function showOptions() {
  oPaper = createSprite(100, 100, 20, 20);
  oSci = createSprite(400, 100, 20, 20);
  oRock = createSprite(700, 100, 20, 20);

  oPaper.addImage(paperImg);
  oSci.addImage(sciImg);
  oRock.addImage(rockImg);

  oPaper.scale = 0.5;
  oSci.scale = 0.5;
  oRock.scale = 0.5;

  oRock.visible = true;
  oPaper.visible = true;
  oSci.visible = true;
 
}