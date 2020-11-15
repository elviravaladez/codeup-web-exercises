"use strict";

$(document).ready(function() {
    var player = 1;
    var changePlayerDisplay = document.getElementById('turn');


    //Function activates once start button is clicked
    $('#start-btn').click(function(e) {
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
                    if(playerWon('x')) {
                        alert('Congrats! Player ' + player + '. You just won!');
                    } else {
                        player = 2;
                        changePlayerDisplay.innerText = "2";
                    }
                } else {
                    squareSelected.addClass('o');
                    if(playerWon('o')) {
                        alert('Congrats! Player ' + player + '. You just won!');
                    } else {
                        player = 1;
                        changePlayerDisplay.innerText = "1";
                    }
                }
            }
        });
    });


    //Function to check if a player won
    function playerWon(symbol) {
        if($('#1').hasClass(symbol) && $('#2').hasClass(symbol) && $('#3').hasClass(symbol)) {
            return true;
        } else if($('#4').hasClass(symbol) && $('#5').hasClass(symbol) && $('#6').hasClass(symbol)) {
            return true;
        } else if($('#7').hasClass(symbol) && $('#8').hasClass(symbol) && $('#9').hasClass(symbol)) {
            return true;
        } else if($('#1').hasClass(symbol) && $('#4').hasClass(symbol) && $('#7').hasClass(symbol)) {
            return true;
        } else if($('#2').hasClass(symbol) && $('#5').hasClass(symbol) && $('#8').hasClass(symbol)) {
            return true;
        } else if($('#3').hasClass(symbol) && $('#6').hasClass(symbol) && $('#9').hasClass(symbol)) {
            return true;
        } else if($('#1').hasClass(symbol) && $('#5').hasClass(symbol) && $('#9').hasClass(symbol)) {
            return true;
        } else if($('#3').hasClass(symbol) && $('#5').hasClass(symbol) && $('#7').hasClass(symbol)) {
            return true;
        } else {
            return false;
        }
    }


});