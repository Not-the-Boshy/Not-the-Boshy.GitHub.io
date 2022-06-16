// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  //breakpoint here
  applyFilter(reddit);
  applyFilter(blue);
  applyFilter(green);
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
var rgbString;
var rgbNumbers;

function applyFilter(filterFunction){
  for (var i = 0; i< image.length; i++){

    for (var j = 0; j< image[i].length; j++){
      rgbString = image[i][j];
      rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers);
      image[i][j] = rgbString;
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function

function noBackground(){
  for (var i = 0; i< image.length; i++)
    for (var j = 0; j< image[i].length; j++){
      if (image[i][j] === "rgb(150, 150, 150)"){
        rgbString = image[i][j];
        rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers);
        image[i][j] = rgbString;
      }
    }
  }

// TODO 5: Create the keepInBounds function
function keepInBounds(number){
  return Math.max(Math.min(255,number), 0);
  console.log(keepInBounds(-30)); // should print 0
  console.log(keepInBounds(300)); // should print 255
  console.log(keepInBounds(127)); // should print 127
}

// TODO 3: Create reddify function
function reddit (tim_henson_is_cool){   // "red- it", the "reddfy" function
  rgbNumbers[RED] = 200;
}

// TODO 6: Create more filter functions
function blue (tim_henson_is_cool){
  rgbNumbers[BLUE] = keepInBounds(rgbNumbers[BLUE] -= 50);
}                                                            

function green (tim_henson_is_cool){ 
keepInBounds(rgbNumbers[GREEN] += rgbNumbers[BLUE]);
}


// CHALLENGE code goes below here
