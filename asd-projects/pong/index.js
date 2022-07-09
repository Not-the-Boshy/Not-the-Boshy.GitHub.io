/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  // Game Item Objects
  const KEY = {
    W: 87, S: 83,     // P1
    UP: 38, DOWN: 40. // P2
  };
  
  // Game Items
  let paddleLeft = gameItemFactory("#paddleLeft");
  let paddleRight = gameItemFactory("#paddleRight");
  let ball = gameItemFactory("#ball");
  let Board = {
    height : Math.round($("#board").height()), // height & width are all you really need
    width : Math.round($("#board").width())
  }
  console.log(Board);

  // Score Items
  let scoreLeft= {
    points: 0,
  };
  let scoreRight= {
    points: 0,
  };
  $("#scoreLeft").append($("<p>").text(scoreLeft.points));
  $("#scoreRight").append($("<p>").text(scoreRight.points));

   // gameItem (both paddles and ball) factory:

   function gameItemFactory(id){
    var MiscObject = {}; // Paddle & Ball factory
    MiscObject.id = id;
    MiscObject.x = Math.round(Number($(id).css('left').replace(/[^-\d\.]/g, '')));
    MiscObject.y = Math.round(Number($(id).css('top').replace(/[^-\d\.]/g, '')));
    MiscObject.height = Math.round($(id).height());
    MiscObject.width = Math.round($(id).width());
    MiscObject.speedX = 0
    MiscObject.speedY = 0
    console.log(MiscObject)
    return MiscObject;
  }

  // ^^ Only used once when creating game item objects, so that's why I put it here.
  //    Plus, I don't need to scroll all the way down to the helper functions to look at the code.

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  Reset();
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
    
  $(document).on("keydown", handleKeydown); // keyPresses seem important to the core logic
  $(document).on("keyup", handleKeyup);

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
 
  function newFrame() {
    moveGameItem(ball);
  }
  
  /* 
  Called in response to events.
  */

  function handleKeydown(event){
    if (event.which === KEY.W){
      moveGameItem(paddleLeft, 5)
    };
    if (event.which === KEY.S){
      moveGameItem(paddleLeft, -5)
    };
    if (event.which === KEY.UP){
      moveGameItem(paddleRight, 5)
    };
    if (event.which === KEY.DOWN){
      moveGameItem(paddleRight, -5)
    };
  }

  // moveGameItem function (takes in any gameItem, Yspeed, and Xspeed if applicable)
  function moveGameItem(gameItem, Yspeed, Xspeed){
    gameItem.x = gameItem.x + Xspeed;           // Calculate new X pos
    gameItem.y = gameItem.y + Yspeed;           // Calculate new Y pos
    $(gameItem).css("left", gameItem.x)         // update X pos onscreen
    $(gameItem).css("top", gameItem.y)          // update Y pos onscreen

    if (ball.x > Board.width || ball.x < 0){
    updateScore();
    reset();
    }

    if (paddleRight.points === 7 || paddleLeft.points === 7){
      endGame()
    }
  }
    ballCollide(paddleRight);

    if (gameItem !== "#ball"){
      handleKeyup(gameItem)
    }
  };

  function handleKeyup(){    
    paddleLeft.speedX = 0;
    paddleLeft.speedY = 0;
    paddleRight.speedX = 0;
    paddleRight.speedY = 0;
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function ballCollide(something) {
      // Thanks, doCollide homework!
      ball.leftX = ball.x;
      ball.topY = ball.y;
      ball.rightX = ball.x + ball.width;
      ball.bottomY = ball.y + ball.width;
    
      something.leftX = something.x;
      something.topY = something.y;
      something.rightX = something.x + something.width;
      something.bottomY = something.y + something.width;
    
      // TODO: Bounce() if they are overlapping, false otherwise
      
      if ((ball.leftX < something.rightX) && (ball.rightX > something.leftX) && (ball.topY < something.bottomY) && (ball.bottomY > something.topY)){
        Bounce() // Figure out later
      }
  }

  function updateScore(){
      if (ball.x > Board.width){
        scoreLeft.points = scoreLeft.points + 1
        $("#scoreLeft").text(scoreLeft.points);
      }
      if (ball.x < 0){
        scoreRight.points = scoreRight.points + 1
        $("#scoreRight").text(scoreRight.points);


  }

  function Reset(){
    paddleLeft.x = 0;
    paddleRight.y = 0;
    paddleLeft.speedY = 0;
    paddleRight.speedY = 0;
    ball.x = 0;
    ball.y = 0;
    ball.speedX = 0;
    ball.speedY = 0;
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}
