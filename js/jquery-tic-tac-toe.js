"use strict";

$(document).ready(function() {
    var updatePlayerOneScore = 0;
    var updatePlayerTwoScore = 0;
    var player = 1;
    var changePlayerDisplay = document.getElementById('turn');


    //Function starts game when start button is clicked
    var startFunction = $('#start-btn').click(function(e) {
        //Function activates once a square is clicked
        $('.square').click(function(e) {
            var squareSelected = $(this);

            //Statement checks to see is the square selected has a class of fas fa-times or far fa-circle. If it does not, it adds one of the classes and sets player as one or two
            if(squareSelected.hasClass('fas fa-times') || squareSelected.hasClass('far fa-circle')){
                alert('Whoops! Looks like this square is already taken. Try Again!');
            } else {
                if(player === 1) {
                    squareSelected.addClass('fas fa-times');
                    if(playerWon('fas fa-times')) {
                        alert('Congrats Player 1! You just won!');
                        updatePlayerOneScore += 1;
                        document.getElementById('p-1-wins').innerHTML = updatePlayerOneScore;
                    } else {
                        player = 2;
                        changePlayerDisplay.innerText = "2";
                    }
                } else {
                    squareSelected.addClass('far fa-circle');
                    if(playerWon('far fa-circle')) {
                        alert('Congrats! Player 2! You just won!');
                        updatePlayerTwoScore += 1;
                        document.getElementById('p-2-wins').innerHTML = updatePlayerTwoScore;
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


    //Function to reset game
    $('#reset-btn').click(function() {

        $('.square').empty();
        $('.square').removeClass('fas fa-times');
        $('.square').removeClass('far fa-circle');
    });

});