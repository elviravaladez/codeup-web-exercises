(function() {
    "use strict";

    // create a circle object


    //****START: The scope of the circle where we can use the THIS keyword starts here****//

    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            return (Math.PI * Math.pow(this.radius, 2)); // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            // if(doRounding === false) {
            //     console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea(this.radius));
            //     return circle.getArea(this.radius);
            // } else {
            //     console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(circle.getArea(this.radius)));
            //     return Math.round(circle.getArea(this.radius));
            // }
            //
            // console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.logInfo());



            //Simpler Way
            var circleArea = this.getArea();

            if(doRounding) {
                circleArea = Math.round(circleArea);
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + circleArea);

        }
    };

    //**********END: Cannot use this after this point! *********//


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
