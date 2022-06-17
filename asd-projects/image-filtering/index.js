// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", onButtonClick);
  $("#reset").on("click", onButtonClick);
});

		
  function onButtonClick(){
    if ($("button").text() === "Apply Filter") {  // if the button says "Apply Filter"
      applyAndRender();
    }
    else {                                        // if the button says "Reset Filter"
      resetAndRender();
    }
  }	

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; changes the button to "Apply Filter"
function resetAndRender() {
  reset();
  render($("#display"), image);

  $("#reset").text("Apply Filter");
  $("#reset").css("background-color", "green");
  $("#reset").attr("id", "apply");

}

// this function applies the filters to the image

function applyAndRender() {
// this function applies the filter to the image; changes the button to "Reset Filter"
  //breakpoint here
  noBackground(reddit);
  noBackground(decreaseBlue);
  noBackground(increaseBlueByGreen);
  

  // do not change the below line of code
  render($("#display"), image);
  $("#apply").text("Reset Filter");
  $("#apply").css("background-color", "red");
  $("#apply").attr("id", "reset");
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
function noBackground(filterFunction){
  for (var i = 0; i< image.length; i++)
    for (var j = 0; j< image[i].length; j++){
      if (image[i][j] != image[0][0]){
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
}

// TODO 3: Create reddify function
function reddit (rgbNumbers){   // "red- it", the "reddfy" function
  rgbNumbers[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue (rgbNumbers){ 
  rgbNumbers[BLUE] = keepInBounds(rgbNumbers[BLUE] = rgbNumbers[BLUE] - 50);
}
function increaseBlueByGreen (rgbNumbers){  
  rgbNumbers[GREEN] = keepInBounds(rgbNumbers [GREEN] + rgbNumbers[BLUE]);
}

// CHALLENGE code goes below here
