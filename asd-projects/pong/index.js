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
  }
  // Paddle obj (no speed X required because it just moves up and down and not side-to-side)
var paddle ={};
  paddle.x = Number($(".paddle").css("right").replace(/[^-\d\.]/g, ''))
  paddle.y = Number($(".paddle").css("top").replace(/[^-\d\.]/g, ''))
  paddle.speedY = speedY

  // hardcoded, doesn't need to be changed
  paddle.height = $(".paddle").height
  paddle.width = $(".paddle").width

  console.log(paddle);

  // Ball obj
var ball = {};
  ball.x = Number($("#ball").css("right").replace(/[^-\d\.]/g, ''))
  ball.y = Number($("#ball").css("top").replace(/[^-\d\.]/g, ''))
  ball.speedX = speedX
  ball.speedY = speedY
  ball.height = $("#ball").height
  ball.width = $("#ball").height

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('eventType', handleEvent);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */

  $(document).on("keydown",handleKeyDown);

  function newFrame() {
    moveBall();
  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  function moveBall(){
    ball.x += ball.speedX;              // update ball X pos var
    $(ball.id).css("left", ball.x);     // update ball Y pos onscreen
    ball.y += ball.speedY;              // update ball Y pos var
    $(ball.id).css("top", ball.x);      // update ball Y pos onscreen
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function handleKeydown(event){
    if (event.which === KEY.W || event.which === KEY.UP){
      paddle.speedY =+ -5;
    };
    if (event.which === KEY.A || event.which === KEY.DOWN){
      paddle.speedY =+ -5;
    };
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
