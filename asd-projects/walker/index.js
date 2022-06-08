/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var XPOS = 0;
  var YPOS = 0;
  var Xvel = 0;
  var Yvel = 0;

  // Game Item Objects

  var KEY = {
    //   Player 1   Player 2
          W: 87,     UP: 38,
          A:65,      LEFT: 37,
          S:83,      DOWN: 40,
          D: 68,     RIGHT: 39,
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionWalker()
    redrawWalker()
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    console.log(event.which) 
    
    if (event.which === KEY.W){
      Yvel = -5;
    };
    if (event.which === KEY.A){
      Xvel = -5;
    };
    if (event.which === KEY.S){
       Yvel = 5;
    };
    if (event.which === KEY.D){
      Xvel = 5;
    };
  }

  function handleKeyUp(){
    Xvel = 0;
    Yvel = 0;
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionWalker(){
    XPOS += Xvel; // update the position of the box along the x-axis
    YPOS += Yvel; // update the position of the box along the x-axis
  }

  function redrawWalker(){
    $("#walker").css("left", XPOS);    // draw the box in the new location, positionX pixels away from the "left"
    $("#walker").css("top", YPOS);    // draw the box in the new location, positionX pixels away from the "top"
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
