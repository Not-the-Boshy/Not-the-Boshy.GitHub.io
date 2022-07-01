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
  
  var speedX = 0;
  var speedY = 0;
  // Paddle factory function (takes in either paddleLeft or paddleRight and the speedY)

  function Paddle(paddleNumber, speedY){
    var paddleNumber = {};
    paddleNumber.y = $(".paddle").top,
    paddleNumber.speedY = 0
    paddleNumber.height = $(".paddle").height,
    paddleNumber.width = $(".paddle").width;
    return paddleNumber;
  }
    // Sets the id and X pos of the left paddle
    paddleLeft.id = $("#paddleLeft").id;
    paddleLeft.x = $("#paddleLeft").left;
       // Sets the id and X pos of the right paddle
    paddleRight.id = $("#paddleRight").id;
    paddleRight.x = $("#paddleRight").left;

  // Ball obj
var ball = {};
  ball.x = Number($("#ball").css("right").replace(/[^-\d\.]/g, '')) + ball.speedX
  ball.y = Number($("#ball").css("top").replace(/[^-\d\.]/g, '')) + ball.speedY
  ball.speedX = speedX
  ball.speedY = speedY
  ball.height = $("#ball").height
  ball.width = $("#ball").height

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeydown);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

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
