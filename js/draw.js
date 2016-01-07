/*
    Draw.js
    Provides drawing functionality. Good luck.
*/

$(document).ready(function(){
    //Create a 8 by 8 grid of divs... somehow.
    for (var i = 0; i < 64; i++)
        $('.grid').append('<div class="square"></div>')
});