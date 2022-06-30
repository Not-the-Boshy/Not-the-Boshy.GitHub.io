/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var speedX = 0;
  var speedY = 0;
  // Game Item Objects
  
  var KEY = {
    W: 87, S: 83,     // P1
    UP: 38, DOWN: 40. // P2
  }
  // Paddle obj (no speed X required because it just moves up and down and not side-to-side)

  function Paddle(paddleNumber, speedY){
    paddleNumber = {};
    paddleNumber.id = $(paddleNumber).id,
    console.log(paddleNumber.id),
    paddleNumber.y = Number($(".paddle").css("top").replace(/[^-\d\.]/g, '')),
    paddleNumber.speedY = speedY,
    paddleNumber.height = $(".paddle").height,
    paddleNumber.width = $(".paddle").width;

    return paddleNumber;
  }

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
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
