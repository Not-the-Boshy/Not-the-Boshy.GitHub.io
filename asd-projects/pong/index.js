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
  var KEY = {
    W: 87, S: 83,     // P1
    UP: 38, DOWN: 40. // P2
  };
  
  // Paddle factory function (takes in either paddleLeft or paddleRight and the speedY)


  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeydown);
  var paddleLeft = Paddlefactory("#paddleLeft");
  var paddleRight = Paddlefactory("#paddleRight");

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function Paddlefactory(id){
    var paddleObject = {};
    paddleObject.id = id;
    paddleObject.x = Math.round(Number($(id).css('left').replace(/[^-\d\.]/g, '')));
    paddleObject.y = Math.round(Number($(id).css('top').replace(/[^-\d\.]/g, '')));
    paddleObject.height = Math.round($(id).height());
    paddleObject.width = Math.round($(id).width());
    paddleObject.speedX = 0
    paddleObject.speedY = 0
    console.log(paddleObject)
    return paddleObject;
  }
  
  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    moveBall();
  }
  
  /* 
  Called in response to events.
  */

  // TO BE FIXED! VV
  function handleKeydown(event){
    if (event.which === KEY.W){
      Paddle(paddleLeft, 5);
    };
    if (event.which === KEY.S){
      Paddle(paddleLeft, -5);
    };
    if (event.which === KEY.UP){
      Paddle(paddleRight, 5);
    };
    if (event.which === KEY.DOWN){
      Paddle(paddleRight, -5);
    };
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function moveBall(){
    // Repositions Ball
    ball.x += ball.speedX;              // update ball X pos var
    ball.y += ball.speedY;              // update ball Y pos var
    // Redraws Ball
    $(ball.id).css("left", ball.x);     // update ball Y pos onscreen
    $(ball.id).css("top", ball.x);      // update ball Y pos onscreen
    ballCollide();
  }

  function ballCollide(ball, something) {
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
        ballBounce()
      }
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
