Home.ButtonClick = function () {
    $.ajax
        ({
            url: "Home/GetPlayerInformation",
            data: { PlayerNumber: $("input").val() },
            success: function (response) { $(".output").val(response); }
        });
}

$(document).ready(function () {
    $("button").click(Home.ButtonClick);
});