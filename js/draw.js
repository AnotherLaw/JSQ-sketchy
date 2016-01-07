/*
    Draw.js
    Provides drawing functionality. Good luck.
*/


var rows = 16;
var columns = 16;

var $row = $('<div />', {
    class: 'row'
});

var $square = $('<div />', {
    class: 'square'
});

$(document).ready(function () {
    "use strict";
    // Create a 16 by 16 grid of divs.
    for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    
    for (var i = 0; i < rows; i++) {
        $(".grid").append($row.clone());
    }
    
    
    // This just creates 64 divs with a class of square. Needs more than that.
    /*
    for (var i = 0; i < 64; i++)
        $('.grid').append('<div class="square"></div>')
    */
});