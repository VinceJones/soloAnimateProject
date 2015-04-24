

$(document).ready(function(){

    $(".selected").append("<p>HELLO</p>");


    $(".selected").click(function(){
        $(this).animate({left: '100px'}, "slow");
        $(this).animate({fontSize: '3em'}, "slow");
        $(this).animate({padding: '15px'}, "slow");
        $(this).animate({textAlign: 'center'})
    });

    $.get("data.txt", function(data) {

        var string =  data.split("\n");

        for (i =0; i < string.length; i++) {
            $(".container").append(string[i] + "<br>");
        }
    });

});