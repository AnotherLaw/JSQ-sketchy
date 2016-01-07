/*
    Draw.js
    Provides drawing functionality. Good luck.
*/
var rows = 8;
var columns = 8;

var $row = $('<div />', {
    class: 'row'
});

var $square = $('<div />', {
    class: 'square'
});

$(document).ready(function(){
    // Create a 8 by 8 grid of divs.
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