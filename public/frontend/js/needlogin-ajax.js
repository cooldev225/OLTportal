/* ajax for non login users */

 jQuery(document).ready(function($){
	 
	jQuery('*[data-modal="modal-3"]').on('click', function(e){
		jQuery('div#modal-3').html('');
		jQuery('.content-loading').css('background-position','center center');
		$this = jQuery(this);
		jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_login_object.ajaxurl,
            data: { 
                'action': 'listingpro_loginpopup',
                'lpNonce' : jQuery('#lpNonce').val()
			},
            success: function(res){
                jQuery('.content-loading').css('background-position','-9999px -9999px');
                jQuery('div#modal-3').html(res);
                if(jQuery('form#register .check_policy').is('.termpolicy')){
                    jQuery("input#lp_usr_reg_btn").prop('disabled',true);
                    jQuery('.check_policy').on('click', function(){
                        if(jQuery('#check_policy').is(':checked')){
                            jQuery("input#lp_usr_reg_btn").prop('disabled',false);
                        }
                        else{
                            jQuery("input#lp_usr_reg_btn").prop('disabled',true);
                        }
                    });
                }
            }
        });
	 });
	 
	 jQuery('.reviewformwithnotice input[type=text], .reviewformwithnotice textarea').keyup(function (e) {

        jQuery('div#modal-3').html('');
        jQuery('.content-loading').css('background-position', 'center center');
        $this = jQuery(this);
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_login_object.ajaxurl,
            data: {
                'action': 'listingpro_loginpopup',
                'lpNonce' : jQuery('#lpNonce').val()
            },
            success: function (res) {
                jQuery('.content-loading').css('background-position', '-9999px -9999px');
                jQuery('div#modal-3').html(res);
            }
        });
    });

    jQuery('.reviewformwithnotice input[type=text], .reviewformwithnotice textarea').keyup(function (e) {

        if(jQuery('body').find('.lp-menu-container') )
        {

            jQuery( "body" ).prepend( '<div class="full-overlay-popup"></div>' );
            jQuery(".full-overlay-popup").css({
                "width": "100vw",
                "height": "100vh",
                "position": "fixed",
                "background": "#000000c7",
                "z-index": "10",
            });

            jQuery('#app-view-login-popup').fadeIn();
            jQuery('#app-view-login-popup').css({
                'top': '20%',
                'transform': 'translateY(0%)',
                'opacity' : 1
            });
        }
        else
        {
            jQuery('#app-view-login-popup').css({
                'top': '0px',
                'transform': 'translateY(0%)',
            });
        }
    });

    jQuery(document).on('click', '.md-close', function(){
        jQuery('.full-overlay-popup').remove();
    });
 });
 /* document ready ends here */
 
 
 /* for app view */
 
 jQuery(document).on('click' ,'#app-view-login-popup .signUpClick' , function() {
	  jQuery('.signInClick').removeClass('active');
	  jQuery('.siginincontainer2').hide();
	  jQuery('.forgetpasswordcontainer2').hide();
	  jQuery('.siginupcontainer2').fadeIn();
	  jQuery(this).addClass('active');
  });
 jQuery(document).on('click', "#app-view-login-popup .signInClick" , function() {
	  jQuery('.signUpClick').removeClass('active');
	  jQuery(this).addClass('active');
	  jQuery('.forgetpasswordcontainer2').hide();
	  jQuery('.siginupcontainer2').hide();
	  jQuery('.siginincontainer2').fadeIn();
  });
 jQuery(document).on('click', "#app-view-login-popup .forgetPasswordClick" , function() { 
  jQuery('.siginupcontainer2').hide();
  jQuery('.siginincontainer2').hide(); 
  jQuery('.forgetpasswordcontainer2').fadeIn();

  });
 jQuery(document).on('click' ,"#app-view-login-popup .cancelClick",  function() { 
  jQuery('.siginupcontainer2').hide();
  jQuery('.forgetpasswordcontainer2').hide();
  jQuery('.siginincontainer2').fadeIn(); 

  });
  
  
  /* for desktop view */
	jQuery(document).on('click', ".signUpClick" , function() {
		jQuery('.signInClick').removeClass('active');
        jQuery(this).addClass('active');
		jQuery('.siginincontainer').fadeOut();
		jQuery('.forgetpasswordcontainer').fadeOut();
		jQuery('.siginupcontainer').fadeIn();
	 });
	jQuery(document).on('click', ".signInClick" , function() {
		jQuery('.signUpClick').removeClass('active');
		jQuery(this).addClass('active');
		jQuery('.forgetpasswordcontainer').fadeOut();
		jQuery('.siginupcontainer').fadeOut();
		jQuery('.siginincontainer').fadeIn();
	 });
	jQuery(document).on('click', ".forgetPasswordClick", function() { 
		jQuery('.siginupcontainer').fadeOut();
		jQuery('.siginincontainer').fadeOut(); 
		jQuery('.forgetpasswordcontainer').fadeIn();

	 });
	jQuery(document).on('click', ".cancelClick", function() { 
		jQuery('.siginupcontainer').fadeOut();
		jQuery('.forgetpasswordcontainer').fadeOut();
		jQuery('.siginincontainer').fadeIn(); 

	 });