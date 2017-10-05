$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

    $(".red").click(function () {

        $(this).css("background-color", "yellow");

        $(".black,.cell").click(function ()
        {
            $(this).removeClass("piece black").addClass("piece red");
        });

        $(this).click(function ()
        {
            for (var i = 0; i < cells.length; i++)
            {
                var cell = $(cells[i]);
                var isDark = colorCount % 2 == 0;
                var isNextRow = (i + 1) % 8 == 0;
                colorCount += isNextRow ? 2 : 1;
                cell.css("background-color", isDark ? "navy" : "white");
            }
        });
    });

    $(".black").click(function () {

        $(this).css("background-color", "yellow");

        $(".red,.cell").click(function () {
            $(this).removeClass("piece red").addClass("piece black");
        });

        $(this).click(function () {
            for (var i = 0; i < cells.length; i++) {
                var cell = $(cells[i]);
                var isDark = colorCount % 2 == 0;
                var isNextRow = (i + 1) % 8 == 0;
                colorCount += isNextRow ? 2 : 1;
                cell.css("background-color", isDark ? "navy" : "white");
            }
        });
    });

});