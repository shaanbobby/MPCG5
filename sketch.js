var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var tracki,groundi,car1i,car2i,car3i,car4i;
function preload(){
  tracki=loadImage("images/track.jpg");
  groundi=loadImage("images/ground.png");
  car1i=loadImage("images/car1.png");
  car2i=loadImage("images/car2.png");
  car3i=loadImage("images/car3.png");
  car4i=loadImage("images/car4.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
 
}
