

$(document).ready(function(){

    $.get("data.txt", function(data) {
        var string =  data.split("\n");

        for (i =0; i < string.length; i++) {
            $(".container").append("<div class='clickableThing'>" + string[i] + "</div>");
        }
    });

    $(".container").on('click', '.clickableThing', function(){

        $(this).removeClass("clickableThing");
        $(this).addClass("clickedOn");
        $(this).animate({fontSize: '3em'}, "slow");
        $(this).css({fontFamily: 'Ubuntu'}, "slow");
        $(this).animate({opacity: 0.75},"slow");
        $(this).animate({color: 'white'}, "fast");
        $(this).css({textAlign: 'center'});
        $(this).css({borderRadius: '15px'}, "fast");
        $(this).css({backgroundColor: 'rgba(7, 170, 158,0.4)'}, "fast");

    });

    $(".container").on('click', '.clickedOn', function() {
        $(this).removeClass("clickedOn");
        $(this).addClass("clickableThing");
        $(this).animate({fontSize: '14px'}, "slow");
        $(this).css({fontFamily: "Open Sans Condensed"}, "slow");
        $(this).animate({color: 'black'}, "slow");
        $(this).css({backgroundColor: '#809E9B'}, "fast");
    });

});