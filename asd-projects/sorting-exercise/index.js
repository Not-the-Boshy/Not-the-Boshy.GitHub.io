/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
/*
function bubbleSort(array){ 
    var sorted = false;
    while (sorted !== true){
        sorted = true;
        for(var i = 0; i < array.length - 1; i++){             yes, I know that the 
          if (array[i].value > array[i+1].value){              versions on JSBin and
            swap(i, (i + 1), array);                           here aren't the same
                                                               but I did use it for
            updateCounter(bubbleCounter);                      reference.
            await sleep();
            sorted = false;
            }
         }
    }
}
*/

async function bubbleSort(array){
    for (var i=0; i< array.length; i++){                     // ITERATE over the array from i = 0 to i = length - 1
        for (var j = array.length - 1; j>= i + 1; j--){            //     ITERATE over the array from j = length - 1 to j = i + 1
            if (array[j].value < array[j-1].value){          //         IF array[j]'s value < array[j - 1]'s value
                swap(j, j-1, array);                           //             swap array[j] and array[j - 1]

                updateCounter(bubbleCounter);
                await sleep();
            }
        }
    }
}

// TODO 3: Implement quickSort

async function quickSort(array, leftmost, rightmost){
    if (rightmost - leftmost > 0){
        var index = await partition()
        if (leftmost < (index - 1){
            await quickSort(array, leftmost, index - 1)
        }
        if (rightmost > index){
            await quickSort(array, index, rightmost)
        }
    }
    
}

// TODOs 4 & 5: Implement partition
function partition(array, left, right){
    var pivot = array[Math.floor((right + left)/2)].value;
    while (left < right){

    }
    return left + 1
}

// TODO 1: Implement swap
function swap(x, y, array){
    var temporary = array[x];
    array[x] = array[y];
    array[y] = temporary;

    drawSwap(array, x, y);
}

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}