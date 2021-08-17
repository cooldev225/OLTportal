 /* login singup and forget password action */

    jQuery(document).on('submit','form#login', function(e){
		e.preventDefault();
        var $this = jQuery(this);
        $this.find('p.status').show().html(ajax_login_object.loadingmessage);
		isCaptcha = jQuery(this).data('lp-recaptcha');
		siteKey = jQuery(this).data('lp-recaptcha-sitekey');
		token = '';
		if ( (isCaptcha == '' || isCaptcha === null) || (siteKey == '' || siteKey === null) ) {
			jQuery.ajax({
				type: 'POST',
				headers: {
					'X-CSRF-Token': jQuery('meta[name="csrf-token"]').attr('content')
				},
				dataType: 'json',
				url: ajax_login_object.ajaxurl,
				data: {
                    'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
					'username': $this.find('#lpusername').val(),
					'password': $this.find('#lppassword').val(),
					'security': $this.find('#security').val(),
				},
				success: function(data){

                    $this.find('p.status').html(data.message);
					if (data.loggedin == true){
						document.location.href = ajax_login_object.redirecturl;
					}
				}
			});
		}else{
			grecaptcha.ready(function() {
				grecaptcha.execute(siteKey, {action: 'lp_login'}).then(function(token) {
					jQuery.ajax({
						type: 'POST',
						headers: {
							'X-CSRF-Token': jQuery('meta[name="csrf-token"]').attr('content')
						},
						dataType: 'json',
						url: ajax_login_object.ajaxurl,
						data: { 
							'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
                            'username': $this.find('#lpusername').val(),
                            'password': $this.find('#lppassword').val(),
							'security': jQuery('form#login #security').val(),
							'token': token,
							'recaptha-action': 'lp_login',
						},
						success: function(data){
							
							jQuery('form#login p.status').html(data.message);
							if (data.loggedin == true){
								document.location.href = ajax_login_object.redirecturl;
							}
						}
					});
				})
			});
		}
		
        
        
    });
	
	// Perform AJAX login on from listing login template
    jQuery(document).on('submit','form#lp-login-temp', function(e){
		e.preventDefault();
        jQuery('form#lp-login-temp p.status').show().html(ajax_login_object.loadingmessage);
		
		isCaptcha = jQuery(this).data('lp-recaptcha');
		siteKey = jQuery(this).data('lp-recaptcha-sitekey');
		token = '';
		if ( (isCaptcha == '' || isCaptcha === null) || (siteKey == '' || siteKey === null) ) {
		
				jQuery.ajax({
					type: 'POST',
					dataType: 'json',
					url: ajax_login_object.ajaxurl,
					data: { 
						'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
						'username': jQuery('form#lp-login-temp #lpusernameT').val(), 
						'password': jQuery('form#lp-login-temp #lppasswordT').val(), 
						'security': jQuery('form#lp-login-temp #lpsecurityT').val(),
					},
					success: function(data){
						
						
						jQuery('form#lp-login-temp p.status').html(data.message);
						if (data.loggedin == true){
							document.location.href = ajax_login_object.redirecturl;
						}
					}
				});
		}else{
			
			grecaptcha.ready(function() {
				grecaptcha.execute(siteKey, {action: 'lp_login'}).then(function(token) {
					jQuery.ajax({
						type: 'POST',
						dataType: 'json',
						url: ajax_login_object.ajaxurl,
						data: { 
							'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
							'username': jQuery('form#lp-login-temp #lpusernameT').val(), 
							'password': jQuery('form#lp-login-temp #lppasswordT').val(), 
							'security': jQuery('form#lp-login-temp #lpsecurityT').val(),
							'token': token,
							'recaptha-action': 'lp_login',
						},
						success: function(data){

							jQuery('form#lp-login-temp p.status').html(data.message);
							if (data.loggedin == true){
								document.location.href = ajax_login_object.redirecturl;
							}
						}
					});
				});
			});
		}
        
    });
	
	// Perform AJAX login on form submit
    jQuery(document).on('submit', 'form#register' , function(e){
		var $this=jQuery(this);

        jQuery('form#register p.status').show().html(ajax_login_object.loadingmessage);
		isCaptcha = jQuery(this).data('lp-recaptcha');
		siteKey = jQuery(this).data('lp-recaptcha-sitekey');
		token = '';

		if ( (isCaptcha == '' || isCaptcha === null) || (siteKey == '' || siteKey === null) ) {

				jQuery.ajax({
					type: 'POST',
					headers: {
                        'X-CSRF-Token': jQuery('meta[name="csrf-token"]').attr('content')
                    },
					dataType: 'json',
					url: ajax_login_object.ajaxurl,
					data: { 
						'action': 'ajax_register', //calls wp_ajax_nopriv_ajaxregister
						'username': $this.find('#username2').val(),
						'email': $this.find('#email').val(),
						'password': $this.find('#upassword').val(),
						'security': $this.find('#security2').val(),
						'telephone': $this.find('#telephone').val(),
						'national': $this.find('#national').val(),
						'smsallow': $this.find('#smsallow').val(),
						},
						
					success: function(data){

                        $this.find('p.status').html(data.message);
						var timer = '';
						 function flipItNow(){
							jQuery('.forgetpasswordcontainer').fadeOut();
							jQuery('.siginupcontainer').fadeOut();
							jQuery('.siginincontainer').fadeIn();
							clearTimeout(timer);
						}
						if (data.password){
							document.location.href = ajax_login_object.redirecturl;
						}else{
							timer = setTimeout(flipItNow, 5000);
						}
					}
				});
		}else{
			
			grecaptcha.ready(function() {
				grecaptcha.execute(siteKey, {action: 'lp_register'}).then(function(token) {
					
					jQuery.ajax({
						type: 'POST',
						headers: {
							'X-CSRF-Token': jQuery('meta[name="csrf-token"]').attr('content')
						},
						dataType: 'json',
						url: ajax_login_object.ajaxurl,
						data: { 
							'action': 'ajax_register', //calls wp_ajax_nopriv_ajaxregister
                            'username': $this.find('#username2').val(),
                            'email': $this.find('#email').val(),
                            'upassword': $this.find('#upassword').val(),
                            'security': $this.find('#security2').val(),
							'token': token,
							'recaptha-action': 'lp_register',
							},
							
						success: function(data){
							
							jQuery('form#register p.status').html(data.message);
							var timer = '';
							 function flipItNow(){
								jQuery('.forgetpasswordcontainer').fadeOut();
								jQuery('.siginupcontainer').fadeOut();
								jQuery('.siginincontainer').fadeIn();
								clearTimeout(timer);
							}
							if (data.password){
								document.location.href = ajax_login_object.redirecturl;
							}else{
								timer = setTimeout(flipItNow, 5000);
							}
							
						}
					});
				
				
				});
			})		
			
		}
        e.preventDefault();
    });
	
	jQuery(document).on('submit','form#registertmp', function(e){
        jQuery('form#registertmp p.status').show().html(ajax_login_object.loadingmessage);		
		isCaptcha = jQuery(this).data('lp-recaptcha');
		siteKey = jQuery(this).data('lp-recaptcha-sitekey');
		token = '';
		if ( (isCaptcha == '' || isCaptcha === null) || (siteKey == '' || siteKey === null) ) {		
			jQuery.ajax({
				type: 'POST',
				headers: {
					'X-CSRF-Token':jQuery('meta[name="csrf-token"]').attr('content')
				},
				dataType: 'json',
				url: ajax_login_object.ajaxurl,
				data: { 
					'action': 'ajax_register', //calls wp_ajax_nopriv_ajaxregister
					'username': jQuery('form#registertmp #username2T').val(), 
					'email': jQuery('form#registertmp #emailT').val(), 
					'upassword': jQuery('form#registertmp #upasswordT').val(), 
					'security': jQuery('form#registertmp #lpsecurityregT').val(),
					
					},
					
				success: function(data){
					if (jQuery("form#registertmp .g-recaptcha-response").length){
						lp_reset_grecaptcha();
					}
					jQuery('form#registertmp p.status').html(data.message);
					var timer = '';
					 function flipItNow(){
						jQuery('.forgetpasswordcontainer').fadeOut();
						jQuery('.siginupcontainer').fadeOut();
						jQuery('.siginincontainer').fadeIn();
						clearTimeout(timer);
					}
					timer = setTimeout(flipItNow, 5000);
					
				}
			});
		}else{
				grecaptcha.ready(function() {
					grecaptcha.execute(siteKey, {action: 'lp_register'}).then(function(token) {
						
						jQuery.ajax({
							type: 'POST',
							headers: {
								'X-CSRF-Token': jQuery('meta[name="csrf-token"]').attr('content')
							},
							dataType: 'json',
							url: ajax_login_object.ajaxurl,
							data: { 
								'action': 'ajax_register', //calls wp_ajax_nopriv_ajaxregister
								'username': jQuery('form#registertmp #username2T').val(), 
								'email': jQuery('form#registertmp #emailT').val(), 
								'upassword': jQuery('form#registertmp #upasswordT').val(), 
								'security': jQuery('form#registertmp #lpsecurityregT').val(),
								'token': token,
								'recaptha-action': 'lp_register',
								
								},
								
							success: function(data){
								if (jQuery("form#registertmp .g-recaptcha-response").length){
									lp_reset_grecaptcha();
								}
								jQuery('form#registertmp p.status').html(data.message);
								var timer = '';
								 function flipItNow(){
									jQuery('.forgetpasswordcontainer').fadeOut();
									jQuery('.siginupcontainer').fadeOut();
									jQuery('.siginincontainer').fadeIn();
									clearTimeout(timer);
								}
								timer = setTimeout(flipItNow, 5000);
								
							}
						});
						
					});
				})
		}
        e.preventDefault();
    });
	
	
	// Perform AJAX forget password
    jQuery(document).on('submit','form#lp_forget_pass_form', function(e){
        jQuery('form#lp_forget_pass_form p.status').show().html(ajax_login_object.loadingmessage);
        jQuery.ajax({
			type: 'POST',
			headers: {
				'X-CSRF-Token': jQuery('meta[name="csrf-token"]').attr('content')
			},
            dataType: 'json',
            url: ajax_login_object.ajaxurl,
            data: { 
                'action': 'ajax_forget_pass', //calls wp_ajax_nopriv_ajaxregister
                'email': jQuery('form#lp_forget_pass_form #email3').val(), 
                'security': jQuery('form#lp_forget_pass_form #security3').val() },
				
            success: function(data){
				//grecaptcha.reset();
                jQuery('form#lp_forget_pass_form p.status').html(data.message);
            }
        });
        e.preventDefault();
    });
	
	// Perform AJAX forget password

	jQuery(document).on('submit','form#lp_forget_pass_formm', function(e){

		jQuery('form#lp_forget_pass_formm p.status').show().html(ajax_login_object.loadingmessage);

		jQuery.ajax({

			type: 'POST',
			headers: {
				'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
			},
			dataType: 'json',

			url: ajax_login_object.ajaxurl,

			data: {

				'action': 'ajax_forget_pass', //calls wp_ajax_nopriv_ajaxregister

				'email': jQuery('form#lp_forget_pass_formm #email2').val(),

				'security': jQuery('form#lp_forget_pass_formm #security4').val() },

			success: function(data){

				//grecaptcha.reset();

				jQuery('form#lp_forget_pass_formm p.status').html(data.message);

			}

		});

		e.preventDefault();

	});

// logins ends