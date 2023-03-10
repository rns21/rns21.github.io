jQuery(document).ready(function($) {
    /* Disable submit & proceed buttons on load */
    $('#wp-submit').attr('disabled', 'disabled');
    $('#proceed-button-id').attr('disabled', 'disabled');

    /* Adding Focus to input fields */
    $(".formInpWrap input").focus(function() {
        $(this).parent().addClass("focussed");
    });

    /* Adding Blur to input fields */
    $(".formInpWrap input").blur(function() {
        if ($(this).val() == "" && $(this).parent().hasClass("focussed")) {
            $(this).parent().removeClass("focussed");
        }
    });

    /* To Enable Sign-up Button only if all the fields are filled */
    $(".formInpWrap input").on("input", function() {
        $("#error_msg_div").css("display", "none");
        /* Condition to include company name field in null input check if Company radio button is clicked-
        disable/enable submit button*/
        if ($("#company").is(':checked')) {
            if (($("#company_name").val() !== "") && ($("#full_name").val() !== "") && ($("#email").val() !== "") &&
                ($("#user_name_login").val() !== "") && ($("#user_password").val() !== "") && ($("#confirm_user_password").val() !== "") &&
                enableFlag && agreementFlag && jQuery('#read_content').is(":checked") && (jQuery("#user_password").val() == jQuery("#confirm_user_password").val())) {
                $('#wp-submit').addClass('enabled_button').removeClass('disabled_button');
                $('#wp-submit').removeAttr('disabled');
            } else {
                $('#wp-submit').addClass('disabled_button').removeClass('enabled_button');
                $('#wp-submit').attr('disabled', 'disabled');
            }
        } else {
            if (($("#full_name").val() !== "") && ($("#email").val() !== "") && ($("#user_name_login").val() !== "") &&
                ($("#user_password").val() !== "") && ($("#confirm_user_password").val() !== "") && enableFlag && agreementFlag &&
                jQuery('#read_content').is(":checked") && (jQuery("#user_password").val() == jQuery("#confirm_user_password").val())) {
                $('#wp-submit').addClass('enabled_button').removeClass('disabled_button');
                $('#wp-submit').removeAttr('disabled');
            } else {
                $('#wp-submit').addClass('disabled_button').removeClass('enabled_button');
                $('#wp-submit').attr('disabled', 'disabled');
            }
        }

    })

    /* CLA Agreement , enabling proceed button */
    $("#signed").on('input', function() {
        if (($("#signed").val() != "")) {
            $('#proceed-button-id').addClass('enabled_button').removeClass('disabled_button');
            $('#proceed-button-id').removeAttr('disabled');
        } else {
            $('#proceed-button-id').removeClass('enabled_button');
            $('#proceed-button-id').attr('disabled', 'disabled');
            $("#agreement-button").removeClass('enabled');
            agreementFlag = false;
            if ($('#wp-submit').hasClass('enabled_button')) {
                $('#wp-submit').addClass('disabled_button').removeClass('enabled_button');
                $('#wp-submit').attr('disabled', 'disabled');
            }
        }
    });

    /* To check whether the password & confirm passwords are matching */
    function checkPasswordMatch() {
        var password = $("#user_password").val();
        var confirmPassword = $("#confirm_user_password").val();
        if ((password != confirmPassword) && ($("#confirm_user_password").val()).length > 0) {
            $("#error_msg_div").css("display", "flex");
            $("#error_msg").empty().text("Passwords do not match!");
            $('#wp-submit').addClass('disabled_button').removeClass('enabled_button');
        } else {
            $("#error_msg_div").css("display", "none");
        }
    }
    $("#user_password, #confirm_user_password").on("input", checkPasswordMatch);
})

/* Captcha field's data callback function to enable the sign-up button after verification & after all fields are filled */
var enableFlag = false;
var agreementFlag = false;

function enableBtn() {
    enableFlag = true;
    if (jQuery("#company").is(':checked')) {
        if ((jQuery("#company_name").val() !== "") && (jQuery("#full_name").val() !== "") &&
            (jQuery("#email").val() !== "") && (jQuery("#user_name_login").val() !== "") && (jQuery("#user_password").val() !== "") &&
            (jQuery("#confirm_user_password").val() !== "") && (jQuery("#user_password").val() == jQuery("#confirm_user_password").val()) &&
            agreementFlag && jQuery('#read_content').is(":checked")) {

            jQuery('#wp-submit').addClass('enabled_button').removeClass('disabled_button');
            jQuery('#wp-submit').removeAttr('disabled');
        }
    } else {
        if ((jQuery("#full_name").val() !== "") && (jQuery("#email").val() !== "") && (jQuery("#user_name_login").val() !== "") &&
            (jQuery("#user_password").val() !== "") && (jQuery("#confirm_user_password").val() !== "") && agreementFlag &&
            (jQuery("#user_password").val() == jQuery("#confirm_user_password").val()) && jQuery('#read_content').is(":checked")) {

            jQuery('#wp-submit').addClass('enabled_button').removeClass('disabled_button');
            jQuery('#wp-submit').removeAttr('disabled');
        }
    }
}

/* For Contributor License Agreement signed status and to change the background color of the agreement button if the user
 * has filled the form inside the agreement modal.
 */
jQuery("#proceed-button-id").click(function() {
    if (jQuery("#signed").val() !== "") {
        agreementFlag = true;
        jQuery("#agreement-button").addClass('enabled');
        $('#claModal').modal('toggle');
        if (jQuery("#company").is(':checked')) {
            if ((jQuery("#company_name").val() !== "") && (jQuery("#full_name").val() !== "") && (jQuery("#email").val() !== "") &&
                (jQuery("#user_name_login").val() !== "") && (jQuery("#user_password").val() !== "") &&
                (jQuery("#confirm_user_password").val() !== "") && (jQuery("#user_password").val() == jQuery("#confirm_user_password").val()) &&
                enableFlag && jQuery('#read_content').is(":checked")) {
                jQuery('#wp-submit').addClass('enabled_button').removeClass('disabled_button');
                jQuery('#wp-submit').removeAttr('disabled');
            }
        } else {
            if ((jQuery("#full_name").val() !== "") && (jQuery("#email").val() !== "") && (jQuery("#user_name_login").val() !== "") &&
                (jQuery("#user_password").val() !== "") && (jQuery("#confirm_user_password").val() !== "") && enableFlag &&
                jQuery('#read_content').is(":checked") && (jQuery("#user_password").val() == jQuery("#confirm_user_password").val())) {
                jQuery('#wp-submit').addClass('enabled_button').removeClass('disabled_button');
                jQuery('#wp-submit').removeAttr('disabled');
            }
        }
    }
})

/* Disabling Submit on unchecked email subscription. */
jQuery('#read_content').click(function() {

    if (!jQuery('#read_content').is(":checked")) {
        if (jQuery('#wp-submit').hasClass('enabled_button')) {
            jQuery('#wp-submit').addClass('disabled_button').removeClass('enabled_button');
            jQuery('#wp-submit').attr('disabled', 'disabled');
        }

        jQuery(this).attr('value', 'false');
    } else {
        jQuery(this).attr('value', 'true');

        if (jQuery("#company").is(':checked')) {
            if ((jQuery("#company_name").val() !== "") && (jQuery("#full_name").val() !== "") &&
                (jQuery("#email").val() !== "") && (jQuery("#user_name_login").val() !== "") && (jQuery("#user_password").val() !== "") &&
                (jQuery("#confirm_user_password").val() !== "") && agreementFlag && enableFlag && jQuery('#read_content').is(":checked") &&
                (jQuery("#user_password").val() == jQuery("#confirm_user_password").val())) {

                jQuery('#wp-submit').addClass('enabled_button').removeClass('disabled_button');
                jQuery('#wp-submit').removeAttr('disabled');
            }
        } else {
            if ((jQuery("#full_name").val() !== "") && (jQuery("#email").val() !== "") && (jQuery("#user_name_login").val() !== "") &&
                (jQuery("#user_password").val() !== "") && (jQuery("#confirm_user_password").val() !== "") && agreementFlag && enableFlag &&
                jQuery('#read_content').is(":checked") && (jQuery("#user_password").val() == jQuery("#confirm_user_password").val())) {

                jQuery('#wp-submit').addClass('enabled_button').removeClass('disabled_button');
                jQuery('#wp-submit').removeAttr('disabled');
            }
        }
    }
});