var Home = {}

Home.LoginButtonClick = function () {
    $.ajax
        ({
            url: "Home/Login",
            data: { Username: $("#LoginUsername").val(), Password: $("#LoginPassword").val()},
            success: function (result) {
                var info = JSON.parse(result);
                if (info.Username == "Invalid")
                {
                    alert("Username Invalid");
                }
                else if (info.Password == "Wrong")
                {
                    alert("Wrong Password");
                }
                else
                { 
                    $(".login").animate({ left: "-100%" });
                    $(".accountInfo").animate({ left: "8px" });
                }

                $.ajax
                    ({
                        url: "Home/GetAccountInformation",
                        data: { Username: $("#LoginUsername").val() },
                        success: function (result) {
                            var info = JSON.parse(result);
                            $(".displayInfo").html(info.Payload);
                        }
                    });
            }
        });

    
}

Home.CreateAccountButtonClick = function () {
    $.ajax
        ({
            url: "Home/CreateAccount",
            data: { Username: $("#NewUsername").val(), Password: $("#NewPassword").val(), EmailAdd: $("#NewEmailAdd").val(), EmailCon: $("#NewEmailCon").val() },
            success: function (result) {
                var info = JSON.parse(result);
                if (info.Message == "Error") {
                    alert(info.Message);
                }
                
                else {
                    $(".login").animate({ left: "-100%" });
                    $(".accountInfo").animate({ left: "8px" });
                }

                $.ajax
                    ({
                        url: "Home/GetAccountInformation",
                        data: { Username: $("#NewUsername").val() },
                        success: function (result) {
                            var info = JSON.parse(result);
                            $(".displayInfo").html(info.Payload);
                        }
                    });
            }
        });

    
}

Home.AddElementButtonClick = function () {
    $.ajax
        ({
            url: "Home/AddOrUpdateElement",
            data: { Username: $("#LoginUsername").val() || $("#NewUsername").val(), ElementName: $("#ElementName").val(), ElementValue: $("#ElementValue").val() },
            success: function (result) {
                alert(result);


                $.ajax
                    ({
                        url: "Home/GetAccountInformation",
                        data: { Username: $("#LoginUsername").val() || $("#NewUsername").val() },
                        success: function (result) {
                            $(".displayInfo").html(result)
                        }
                    });
            }

        });

    
}

$(document).ready(function () {
    $(".LoginButton").click(Home.LoginButtonClick);
    $(".CreateAccountButton").click(Home.CreateAccountButtonClick);
    $(".AddElementButton").click(Home.AddElementButtonClick);
});