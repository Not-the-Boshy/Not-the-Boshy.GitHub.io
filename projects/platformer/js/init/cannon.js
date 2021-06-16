(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     *
     * GOAL: Add at least 3 cannons to make your level challenging. 
     * 
     * Use the createCannon Function to create cannons for the level. 
     * 
     * createCannon() takes these arguments:
     *      
     *      createPlatform(type, position, delay);
     * 
     *      type: "top", "bottom", "left", or "right"
     *      position: The position of the cannon along whichever side the cannon is placed on
     *          - the x coordinate for "top" and "bottom" cannons
     *          - the y coordinate for "left" and "right" cannons
     *      delay: OPTIONAL the number of milliseconds to wait before firing the first projectile
     */ 
    function init(game) {
        let createCannon = cannon.create;
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 

        //Group 1:

        createCannon("top", 500);
        createCannon("top", 7);  //--\  Distance is 55 units of hallebot horizontally.
        createCannon("top", 64); //---| Hallebot is wider when she is squatting/crouching.
        createCannon("top", 119);//--/  (Although I increased the interval by 2px per value)
        createCannon("top", 174);
        createCannon("top", 229);
        createCannon("top", 284);

        //Group 2:

        var delay = 1000

        createCannon("top", 7,delay);  //-\.  Distance is 55 units of hallebot horizontally.
        createCannon("top", 64,delay); //-/   Hallebot is wider when she is squatting/crouching.
        createCannon("top", 119,delay);  
        createCannon("top", 174,delay);
        createCannon("top", 229,delay);
        createCannon("top", 284,delay)

        createCannon("bottom", 740);
        createCannon("bottom", 740, 3000);

        createCannon("bottom", 810)
        createCannon("bottom", 810, 3000);   

        createCannon("top", 5);  

        //Group 3:

        var delay2= 1500

        createCannon("top", 7,delay2);
        createCannon("top", 64,delay2); 
        createCannon("top", 119,delay2);  
        createCannon("top", 174,delay2);
        createCannon("top", 229,delay2);
        createCannon("top", 284,delay2);
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    cannon.init = init;
})(window);
