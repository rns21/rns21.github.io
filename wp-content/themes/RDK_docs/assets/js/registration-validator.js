jQuery(document).ready(($) => {

    /* Validation functions are invoked on focusout event. Every function asserts the input value to its corresponding regex pattern and changes the icons and state of the input box to success/error based on the result of pattern.test() */

    /* Email Validation - with @ and domain name with two letter or more*/
    
    $("#email").focusout(function () {
        validate_email();
    })

    $("#email").on("input", function () {
        if ($("#email").is(':focus')) {
            $("#email").css({ "border-color": "#ffffff", "color": "#ffffff" });
            $("label[for=email]").css("color", "#ffffff");
        } else {
            $("#email").css({ "border-color": "#81959a", "color": "#81959a" });
            $("label[for=email]").css("color", "#81959a");
        }
    })
    $("#email").on("click", function () {
        $("#success_email").css("display", "none");
        $("#error_email").css("display", "none");
        if (($("#email").is(':focus')) || (($("#email").val() == ""))) {
            $("#email").css({ "border-color": "#ffffff", "color": "#ffffff" });
            $("label[for=email]").css("color", "#ffffff");
        } else {
            $("#email").css({ "border-color": "#81959a", "color": "#81959a" });
            $("label[for=email]").css("color", "#81959a");
        }
    })

    function validate_email() {
        var pattern_email = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var email_value = $("#email").val();
        if (email_value !== '') {
            if (pattern_email.test(email_value)) {
                $("#success_email").css("display", "block");
                $("#error_email").css("display", "none");
                $("#email").css({ "border-color": "#5ECD8F", "color": "#5ECD8F" });
                $("label[for=email]").css("color", "#5ECD8F");
                $("#error_msg_div").css("display","none");
            } else {
                $("#error_email").css("display", "block");
                $("#success_email").css("display", "none");
                $("#email").css({ "border-color": "#C13D31", "color": "#C13D31" });
                $("label[for=email]").css("color", "#C13D31");
                $("#error_msg_div").css("display","flex");
                $("#error_msg").empty().text("Email Address is Invalid");
                $('#wp-submit').addClass('disabled_button').removeClass('enabled_button');
                $('#wp-submit').attr('disabled', 'disabled');
            }
        } else {
            if ($("#email").is(':focus')) {
                $("#email").css({ "border-color": "#ffffff", "color": "#ffffff" });
                $("label[for=email]").css("color", "#ffffff");
            } else {
                $("#email").css({ "border-color": "#81959a", "color": "#81959a" });
                $("label[for=email]").css("color", "#81959a");
            }
            $("#success_email").css("display", "none");
            $("#error_email").css("display", "none");
        }
    }

    /* Fullname Validation - (0-240 char length, type:alphabets - no special characters)*/

    $("#full_name").focusout(function () {
        validate_fullname();
    })

    $("#full_name").on("input", function () {
        if ($("#full_name").is(':focus')) {
            $("#full_name").css({ "border-color": "#ffffff", "color": "#ffffff" });
            $("label[for=full_name]").css("color", "#ffffff");
        } else {
            $("#full_name").css({ "border-color": "#81959a", "color": "#81959a" });
            $("label[for=full_name]").css("color", "#81959a");
        }
    })
    $("#full_name").on("click", function () {
        $("#success_fname").css("display", "none");
        $("#error_fname").css("display", "none");
        if (($("#full_name").is(':focus')) || (($("#full_name").val() == ""))) {
            $("#full_name").css({ "border-color": "#ffffff", "color": "#ffffff" });
            $("label[for=full_name]").css("color", "#ffffff");
        } else {
            $("#full_name").css({ "border-color": "#81959a", "color": "#81959a" });
            $("label[for=full_name]").css("color", "#81959a");
        }
    })

    function validate_fullname() {
        var pattern_fname = /^[a-zA-Z ]{0,240}$/;
        var fullname_value = $("#full_name").val();
        if (fullname_value !== '') {
            if (pattern_fname.test(fullname_value)) {
                $("#success_fname").css("display", "block");
                $("#error_fname").css("display", "none");
                $("#full_name").css({ "border-color": "#5ECD8F", "color": "#5ECD8F" });
                $("label[for=full_name]").css("color", "#5ECD8F");
                $("#error_msg_div").css("display","none");
                
            } else {
                $("#error_fname").css("display", "block");
                $("#success_fname").css("display", "none");
                $("#full_name").css({ "border-color": "#C13D31", "color": "#C13D31" });
                $("label[for=full_name]").css("color", "#C13D31");
                $("#error_msg_div").css("display","flex");
                $("#error_msg").empty().text("Invalid Format - Numbers and Special Characters are not Permitted");
                $('#wp-submit').addClass('disabled_button').removeClass('enabled_button');
                $('#wp-submit').attr('disabled', 'disabled');
            }
        } else {
            if ($("#full_name").is(':focus')) {
                $("#full_name").css({ "border-color": "#ffffff", "color": "#ffffff" });
                $("label[for=full_name]").css("color", "#ffffff");
            } else {
                $("#full_name").css({ "border-color": "#81959a", "color": "#81959a" });
                $("label[for=full_name]").css("color", "#81959a");
            }
            $("#success_fname").css("display", "none");
            $("#error_fname").css("display", "none");
        }
    }


    /* Companyname Validation - (1-64 char length, type:alphabets - no special characters)*/

    $("#company_name").focusout(function () {
        validate_compname();
    })

    $("#company_name").on("input", function () {
        if ($("#company_name").is(':focus')) {
            $("#company_name").css({ "border-color": "#ffffff", "color": "#ffffff" });
            $("label[for=company_name]").css("color", "#ffffff");
        } else {
            $("#company_name").css({ "border-color": "#81959a", "color": "#81959a" });
            $("label[for=company_name]").css("color", "#81959a");
        }
    })
    $("#company_name").on("click", function () {
        $("#success_compname").css("display", "none");
        $("#error_compname").css("display", "none");
        if (($("#company_name").is(':focus')) || (($("#company_name").val() == ""))) {
            $("#company_name").css({ "border-color": "#ffffff", "color": "#ffffff" });
            $("label[for=company_name]").css("color", "#ffffff");
        } else {
            $("#company_name").css({ "border-color": "#81959a", "color": "#81959a" });
            $("label[for=company_name]").css("color", "#81959a");
        }
    })

    function validate_compname() {
        var pattern_compname = /^[a-zA-Z ]{1,64}$/;
        var compname_value = $("#company_name").val();
        if (compname_value !== '') {
            if (pattern_compname.test(compname_value)) {
                $("#success_compname").css("display", "block");
                $("#error_compname").css("display", "none");
                $("#company_name").css({ "border-color": "#5ECD8F", "color": "#5ECD8F" });
                $("label[for=company_name]").css("color", "#5ECD8F");
                $("#error_msg_div").css("display","none");
            } else {
                $("#error_compname").css("display", "block");
                $("#success_compname").css("display", "none");
                $("#company_name").css({ "border-color": "#C13D31", "color": "#C13D31" });
                $("label[for=company_name]").css("color", "#C13D31");
                $("#error_msg_div").css("display","flex");
                $("#error_msg").empty().text("Invalid Format - Numbers and Special Characters are not Permitted");
                $('#wp-submit').addClass('disabled_button').removeClass('enabled_button');
                $('#wp-submit').attr('disabled', 'disabled');
            }
        } else {
            if ($("#company_name").is(':focus')) {
                $("#company_name").css({ "border-color": "#ffffff", "color": "#ffffff" });
                $("label[for=company_name]").css("color", "#ffffff");
            } else {
                $("#company_name").css({ "border-color": "#81959a", "color": "#81959a" });
                $("label[for=company_name]").css("color", "#81959a");
            }
            $("#success_compname").css("display", "none");
            $("#error_compname").css("display", "none");
        }
    }

    /* Username Validation - (type:alphanumeric - no special characters, reserved word: anonymous)*/

    $("#user_name_login").focusout(function () {
        validate_username();
    })

    $("#user_name_login").on("input", function () {
        if ($("#user_name_login").is(':focus')) {
            $("#user_name_login").css({ "border-color": "#ffffff", "color": "#ffffff" });
            $("label[for=user_name_login]").css("color", "#ffffff");
        } else {
            $("#user_name_login").css({ "border-color": "#81959a", "color": "#81959a" });
            $("label[for=user_name_login]").css("color", "#81959a");
        }
    })
    $("#user_name_login").on("click", function () {
        $("#success_uname").css("display", "none");
        $("#error_uname").css("display", "none");
        if (($("#user_name_login").is(':focus')) || (($("#user_name_login").val() == ""))) {
            $("#user_name_login").css({ "border-color": "#ffffff", "color": "#ffffff" });
            $("label[for=user_name_login]").css("color", "#ffffff");
        } else {
            $("#user_name_login").css({ "border-color": "#81959a", "color": "#81959a" });
            $("label[for=user_name_login]").css("color", "#81959a");
        }
    })

    function validate_username() {
        var pattern_username = /^[0-9a-z]+$/;
        var reserved_keyword = "anonymous";
        var username_value = $("#user_name_login").val();
        if (username_value !== '') {
            if (pattern_username.test(username_value) && reserved_keyword !== ($("#user_name_login").val()).toLowerCase()) {
                $("#success_uname").css("display", "block");
                $("#error_uname").css("display", "none");
                $("#user_name_login").css({ "border-color": "#5ECD8F", "color": "#5ECD8F" });
                $("label[for=user_name_login]").css("color", "#5ECD8F");
                $("#error_msg_div").css("display","none");
            } else {
                $("#error_uname").css("display", "block");
                $("#success_uname").css("display", "none");
                $("#user_name_login").css({ "border-color": "#C13D31", "color": "#C13D31" });
                $("label[for=user_name_login]").css("color", "#C13D31");
                $("#error_msg_div").css("display","flex");
                $("#error_msg").empty().text("Invalid Format - Uppercase Letters & Special Characters are not Permitted");
                $('#wp-submit').addClass('disabled_button').removeClass('enabled_button');
                $('#wp-submit').attr('disabled', 'disabled');
            }
        } else {
            if ($("#user_name_login").is(':focus')) {
                $("#user_name_login").css({ "border-color": "#ffffff", "color": "#ffffff" });
                $("label[for=user_name_login]").css("color", "#ffffff");
            } else {
                $("#user_name_login").css({ "border-color": "#81959a", "color": "#81959a" });
                $("label[for=user_name_login]").css("color", "#81959a");
            }
            $("#success_uname").css("display", "none");
            $("#error_uname").css("display", "none");
        }
    }

    /* Password Validation - (wiki password policy - should contain atleast 1 digit, 1 special character, 1 upper case and 1 lower case letter)*/

    $("#user_password").focusout(function () {
        validate_password();
    })

    $("#user_password").on("input", function () {
        if ($("#user_password").is(':focus')) {
            $("#user_password").css({ "border-color": "#ffffff", "color": "#ffffff" });
            $("label[for=user_password]").css("color", "#ffffff");
        } else {
            $("#user_password").css({ "border-color": "#81959a", "color": "#81959a" });
            $("label[for=user_password]").css("color", "#81959a");
        }
    })
    $("#user_password").on("click", function () {
        $("#success_pwd").css("display", "none");
        $("#error_pwd").css("display", "none");
        if (($("#user_password").is(':focus')) || (($("#user_password").val() == ""))) {
            $("#user_password").css({ "border-color": "#ffffff", "color": "#ffffff" });
            $("label[for=user_password]").css("color", "#ffffff");
        } else {
            $("#user_password").css({ "border-color": "#81959a", "color": "#81959a" });
            $("label[for=user_password]").css("color", "#81959a");
        }
    })

    function validate_password() {
        var pattern_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@#$%!]{8,40}$/;
        var password_value = $("#user_password").val();
        var confirmPwdForComparision = $("#confirm_user_password").val();
        if (password_value !== '') {
            if (pattern_password.test(password_value)) {
                if ((password_value != confirmPwdForComparision) && ($("#confirm_user_password").val()).length > 0){
                    $("#error_pwd").css("display", "block");
                    $("#success_pwd").css("display", "none");
                    $("#user_password").css({ "border-color": "#C13D31", "color": "#C13D31" });
                    $("label[for=user_password]").css("color", "#C13D31");
                    $("#error_cpwd").css("display", "block");
                    $("#success_cpwd").css("display", "none");
                    $("#confirm_user_password").css({ "border-color": "#C13D31", "color": "#C13D31" });
                    $("label[for=confirm_user_password]").css("color", "#C13D31");
                    $("#error_msg_div").css("display","flex");                  
                    $("#error_msg").empty().text("Passwords do not match!");
                } else {
                    $("#success_pwd").css("display", "block");
                    $("#error_pwd").css("display", "none");
                    $("#user_password").css({ "border-color": "#5ECD8F", "color": "#5ECD8F" });
                    $("label[for=user_password]").css("color", "#5ECD8F");
                    if(($("#confirm_user_password").val()).length > 0){
                        $("#success_cpwd").css("display", "block");
                        $("#error_cpwd").css("display", "none");
                        $("#confirm_user_password").css({ "border-color": "#5ECD8F", "color": "#5ECD8F" });
                        $("label[for=confirm_user_password]").css("color", "#5ECD8F");
                    }
                    $("#error_msg_div").css("display","none");
                }
            } else {
                $("#error_pwd").css("display", "block");
                $("#success_pwd").css("display", "none");
                $("#user_password").css({ "border-color": "#C13D31", "color": "#C13D31" });
                $("label[for=user_password]").css("color", "#C13D31");
                $("#error_msg_div").css("display","flex");
                // $("#error_msg").empty().text("Password should contain atleast 1 special character, 1 digit, 1 upper case and 1 lower case letter");
                if ((password_value != confirmPwdForComparision) && ($("#confirm_user_password").val()).length > 0){
                    $("#error_msg").empty().text("Passwords do not match!");
                } else {
                    $("#error_msg").empty().text("Password should contain atleast 1 special character, 1 digit, 1 upper case and 1 lower case letter");
                }
                $('#wp-submit').addClass('disabled_button').removeClass('enabled_button');
                $('#wp-submit').attr('disabled', 'disabled');
            }
        } else {
            if ($("#user_password").is(':focus')) {
                $("#user_password").css({ "border-color": "#ffffff", "color": "#ffffff" });
                $("label[for=user_password]").css("color", "#ffffff");
            } else {
                $("#user_password").css({ "border-color": "#81959a", "color": "#81959a" });
                $("label[for=user_password]").css("color", "#81959a");
            }
            $("#success_pwd").css("display", "none");
            $("#error_pwd").css("display", "none");
        }
    }

    /* Confirm Password Validation - (wiki password policy - should contain atleast 1 digit, 1 special character, 1 upper case and 1 lower case letter)*/

    $("#confirm_user_password").focusout(function () {
        validate_confirm_pwd();
    })

    $("#confirm_user_password").on("input", function () {
        if ($("#confirm_user_password").is(':focus')) {
            $("#confirm_user_password").css({ "border-color": "#ffffff", "color": "#ffffff" });
            $("label[for=confirm_user_password]").css("color", "#ffffff");
        } else {
            $("#confirm_user_password").css({ "border-color": "#81959a", "color": "#81959a" });
            $("label[for=confirm_user_password]").css("color", "#81959a");
        }
    })
    $("#confirm_user_password").on("click", function () {
        $("#success_cpwd").css("display", "none");
        $("#error_cpwd").css("display", "none");
        if (($("#confirm_user_password").is(':focus')) || (($("#confirm_user_password").val() == ""))) {
            $("#confirm_user_password").css({ "border-color": "#ffffff", "color": "#ffffff" });
            $("label[for=confirm_user_password]").css("color", "#ffffff");
        } else {
            $("#confirm_user_password").css({ "border-color": "#81959a", "color": "#81959a" });
            $("label[for=confirm_user_password]").css("color", "#81959a");
        }
    })

    function validate_confirm_pwd() {
        var pattern_cpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@#$%!]{8,40}$/;
        var cpwd_value = $("#confirm_user_password").val();
        var passwordForComparision = $("#user_password").val();
        if (cpwd_value !== '') {
            if (pattern_cpwd.test(cpwd_value)) {
                if ((passwordForComparision != cpwd_value) && ($("#user_password").val()).length > 0){
                    $("#error_cpwd").css("display", "block");
                    $("#success_cpwd").css("display", "none");
                    $("#confirm_user_password").css({ "border-color": "#C13D31", "color": "#C13D31" });
                    $("label[for=confirm_user_password]").css("color", "#C13D31");
                    $("#error_pwd").css("display", "block");
                    $("#success_pwd").css("display", "none");
                    $("#user_password").css({ "border-color": "#C13D31", "color": "#C13D31" });
                    $("label[for=user_password]").css("color", "#C13D31");
                    $("#error_msg_div").css("display","flex");                 
                    $("#error_msg").empty().text("Passwords do not match!");
                } else {
                    $("#success_cpwd").css("display", "block");
                    $("#error_cpwd").css("display", "none");
                    $("#confirm_user_password").css({ "border-color": "#5ECD8F", "color": "#5ECD8F" });
                    $("label[for=confirm_user_password]").css("color", "#5ECD8F");
                    if(($("#user_password").val()).length > 0){
                        $("#success_pwd").css("display", "block");
                        $("#error_pwd").css("display", "none");
                        $("#user_password").css({ "border-color": "#5ECD8F", "color": "#5ECD8F" });
                        $("label[for=user_password]").css("color", "#5ECD8F");
                    }
                    $("#error_msg_div").css("display","none");
                    $("#error_msg_div").css("display","none");
                }
            } else {
                $("#error_cpwd").css("display", "block");
                $("#success_cpwd").css("display", "none");
                $("#confirm_user_password").css({ "border-color": "#C13D31", "color": "#C13D31" });
                $("label[for=confirm_user_password]").css("color", "#C13D31");
                $("#error_msg_div").css("display","flex");
                if ((passwordForComparision != cpwd_value) && ($("#user_password").val()).length > 0){
                    $("#error_msg").empty().text("Passwords do not match!");
                } else {
                    $("#error_msg").empty().text("Password should contain atleast 1 special character, 1 digit, 1 upper case and 1 lower case letter");
                }
                $('#wp-submit').addClass('disabled_button').removeClass('enabled_button');
                $('#wp-submit').attr('disabled', 'disabled');
            }
        } else {
            if ($("#confirm_user_password").is(':focus')) {
                $("#confirm_user_password").css({ "border-color": "#ffffff", "color": "#ffffff" });
                $("label[for=confirm_user_password]").css("color", "#ffffff");
            } else {
                $("#confirm_user_password").css({ "border-color": "#81959a", "color": "#81959a" });
                $("label[for=confirm_user_password]").css("color", "#81959a");
            }
            $("#success_cpwd").css("display", "none");
            $("#error_cpwd").css("display", "none");
        }
    }

})
