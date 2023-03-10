jQuery(document).ready(function($) {
	    $('#wp-login-submit').addClass('disabled_button');
	    if ($('.login').hasClass("error")) {
					$('[id="user_login"],[id="user_pass"]').addClass('login_input_error');
					$(".login-username , .login-password").addClass('error_label').append('<div class="cross-icon"></div>')
		        }
	    $('[id="user_pass"]').prev().addClass('label_fix');
	    $('[id="user_login"],[id="user_pass"]').focus(function() {
		            $(this).parent().removeClass('text_blur').addClass('text_focussed');
		            if (!$(this).hasClass('login_input_error'))
			                $(this).removeClass('login_input_error').addClass('login_input_focussed');
		        })

	    $('[id="user_login"]').focus(function() {
		            $(this).prev().removeClass('label_fix');
		            $(this).prev().addClass('label_move');
		        })
	    $('[id="user_login"]').blur(function() {
		            if ($('[id="user_login"]').val() == "") {
				                $(this).prev().removeClass('label_move');
				                $(this).prev().addClass('label_fix');
				            }
		        })
	    $('[id="user_pass"]').focus(function() {
		            $(this).prev().removeClass('label_fix');
		            $(this).prev().addClass('label_move');
		        })
	    $('[id="user_pass"]').blur(function() {
		            if ($('[id="user_pass"]').val() == "") {
				                $(this).prev().removeClass('label_move');
				                $(this).prev().addClass('label_fix');
				            }
		        })
	    $('[id="user_login"],[id="user_pass"]').blur(function() {
		            if ($(this).val() == "") {
				                $(this).parent().removeClass('text_focussed').addClass('text_blur');
				                if (!$(this).hasClass('login_input_error'))
					                    $(this).removeClass('login_input_focussed').addClass('login_input');
				            }
		        })
	    $('[id="user_login"],[id="user_pass"]').on('input', function() {
		            if (($('[id="user_pass"]').val() != "") && ($('[id="user_login"]').val() != "")) {
				                $('#wp-login-submit').addClass('enabled_button').removeClass('disabled_button');
				                $('#wp-login-submit').removeAttr('disabled');
				            } else {
						                $('#wp-login-submit').addClass('disabled_button').removeClass('enabled_button');
						            }
		            if (($('[id="user_pass"]').val() != "") || ($('[id="user_login"]').val() != "")) {
				                jQuery('[id="user_login"],[id="user_pass"]').removeClass('login_input_error').addClass('login_input');
								$(this).removeClass('login_input').addClass('login_input_focussed');
								$(".login-username , .login-password").removeClass('error_label');
								$(".cross-icon").remove();
				            }
		        })
	    $('[id="user_login"]').focus();
	    setTimeout(function() {
		            $('[id="user_pass"]').removeAttr('type');
		            $('[id="user_pass"]').attr('type', 'password')
				}, 300)
				
				$( "#loginform" ).submit(function( event ) {	
					if($('#user_login').val() == ''){
						$('#error_login').hide();
						$('.user-empty').show();
					}
					else{
						$('.user-empty').hide();
					}

					if($('#user_pass').val() == ''){
						$('#error_login').hide();
						$('.password-empty').show();
					}
					else{
						$('.password-empty').hide();
					}
					if($('#user_login').val() == '' || $('#user_pass').val() == ''){
						$('.empty-field').show();
						event.preventDefault();
					}
					else{
						$('.empty-field').hide();
					}
				  });

    /** Show login success toast when user is logged in */
    if($('#login-success-overlay').length > 0){
        document.getElementById("login-success-overlay").style.display = "block";
        $(".login-toast").fadeIn(200);
        setTimeout(function() {
            $(".login-toast").fadeOut(200);
        }, 2000);
    
        setTimeout(function(){ 
            document.getElementById("login-success-overlay").style.display = "none";
            $(".login-toast").remove();
            }, 2000);
    }
})
/** Show login modal when login failed */
function showLogin(){
	$('#loginModal').modal('show');
}