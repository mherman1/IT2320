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
                    $("#UsernameError").html("Username Invalid");
                }
                else if (info.Password == "Wrong")
                {
                    $("#PasswordError").html("Wrong Password");
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
                if (info.Username == "Invalid")
                {
                    $("#NewUsernameError").html("Username Invalid; Minimun 6 Characters");
                }
                else if (info.Username == "Exists")
                {
                    $("#NewUsernameError").html("Username Already Exists");
                }
                else if (info.Password == "Invalid")
                {
                    $("#NewPasswordError").html("Password Invalid; Minimum 6 Characters");
                }
                else if (info.EmailAdd == "Invalid")
                {
                    $("#NewEmailAddError").html("Email Must Contain @ Symbol");
                }
                else if (info.EmailCon == "Invalid")
                {
                    $("#NewEmailConError").html("Confirm Email");
                }
                else if (info.EmailCon == "Mismatch")
                {
                    $("#NewEmailConError").html("Emails Must Match");
                }
                else
                {
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
                var info = JSON.parse(result);
                if (info.Error == "Cannot Change Username") {
                    $("#ElementNameError").html(info.Error);
                }
                else if (info.Error == "Cannot Have Spaces In Element Name") {
                    $("#ElementNameError").html(info.Error);
                }
                else
                { 
                    $.ajax
                        ({
                            url: "Home/GetAccountInformation",
                            data: { Username: $("#LoginUsername").val() || $("#NewUsername").val() },
                            success: function (result) {
                                var info = JSON.parse(result);
                                $(".displayInfo").html(info.Payload);
                            }   
                        });
                }   
            }

        });
}

$(document).ready(function () {
    $(".LoginButton").click(Home.LoginButtonClick);
    $(".CreateAccountButton").click(Home.CreateAccountButtonClick);
    $(".AddElementButton").click(Home.AddElementButtonClick);
});