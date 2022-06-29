/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  var xSpeed = 20;
  var ySpeed = 20;
  var XPOS;
  var YPOS;

  var KEY = {
    //   WASD is superior
          W: 87,
          A:65,
          S:83,
          D: 68,
  }
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    snakeMoveOnscreen()
    $(document).on("keydown", WASD_Detect);
    snakeCollide(something);
  }
  
  /* 
  Called in response to events.
  */
  function snakeCollide(something) {
    if (something.id === "apple"){
      score++
      addSnakeSegment();
    }
                              // if id starts w/ "snake"    or      id is the board
    else if (something.id === $("div:visible[id*='snake']") || something.id === "board"){
      endGame();
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function snakeMoveOnscreen(){
    xSpeed += xVel
    ySpeed += xVel
    XPOS = xSpeed + XPOS
    YPOS = ySpeed + YPOS

    $("#snakeHead").css("left", XPOS);    // draw the head in the new location, positionX pixels away from the "left"
    $("#snakeHead").css("top", YPOS);    // draw the head in the new location, positionX pixels away from the "top"
  }

  function WASD_Detect(event) {
    if (event.which === KEY.W){
      Yvel =+ -5;
    };
    if (event.which === KEY.A){
      Xvel =+ -5;
    };
    if (event.which === KEY.S){
       Yvel =+ 5;
    };
    if (event.which === KEY.D){
      Xvel =+ 5;
    };
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
