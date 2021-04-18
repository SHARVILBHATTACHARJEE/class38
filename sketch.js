var db;
var form,game,player;
var playerCount
var gameState=0
var all;
var car1,car2,car3,car4,cars

function setup(){
    createCanvas(displayWidth-30,displayHeight-40);
    db=firebase.database()
    game=new Game()
    game.getState()
    game.start()
   
}

function draw(){
   if(playerCount===4){
       game.updateState(1)
   }
   if(gameState===1){
       clear()
       game.play()
   }
}

