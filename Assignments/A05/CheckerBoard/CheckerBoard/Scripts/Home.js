$(document).ready(function () {
    var cells = $(".cell");
    var colorCount = 0;
    var piece = {};
    
    for (var i = 0; i < cells.length; i++) {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

    $("div").click(function () {
        if ($(this).hasClass("red")) {
            piece = this;

            $(piece).css("border", "1px solid limegreen")

            $(piece).click(function () {
                $(piece).css("border", "1px solid black")
            })

            $(".black, .cell").click(function () {
                $(this).removeClass("piece black").addClass("piece red");
                $(piece).removeClass("piece red").css("border", "1px solid black");
            })
        }
    });


});