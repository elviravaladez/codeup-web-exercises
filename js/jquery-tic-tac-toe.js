"use strict";

$(document).ready(function() {
    var player = 1;
    var changePlayerDisplay = document.getElementById('turn');


    //Function activates once a square is clicked
    $('.square').click(function(e) {
        var squareSelected = $(this);

        //Statement checks to see is the square selected has a class of x or o
        //If it does not, it adds an x or o class and sets player as one or two
        if(squareSelected.hasClass('x') || squareSelected.hasClass('o')){
            alert('Whoops! Looks like this square is already taken. Try Again!');
        } else {
            if(player === 1) {
                squareSelected.addClass('x');
                player = 2;
                changePlayerDisplay.innerText = "2";
            } else {
                squareSelected.addClass('o');
                player = 1;
                changePlayerDisplay.innerText = "1";
            }
        }
    });
});