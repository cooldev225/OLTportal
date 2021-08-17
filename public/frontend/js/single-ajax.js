 jQuery(document).ready(function($){


	/* for claim slider */
	if( jQuery('div.claim_slider').length > 0 ){
		$wol_claim = jQuery(".lp-form-planclaim-st .rightside").width();
		console.log($wol_claim);
		jQuery('.lp-form-planclaim-st .claim-detailstext').css('width', $wol_claim+'px');
		jQuery('.claim_slider').slick({
			dots: true,
			infinite: true,
			arrows:false,
			slidesToShow: 1,
			slidesToScroll: 1
		});
		
	}
	
	jQuery('.singincheckboxx input').on('click', function(){
		var checked = jQuery(".singincheckboxx input").is(":checked");
		
		if(checked){
			jQuery('.lp-form-planclaim-st .claim_signup').hide();
			jQuery('.lp-form-planclaim-st .claim_signin').show();
		}else{
			jQuery('.lp-form-planclaim-st .claim_signin').hide();
			jQuery('.lp-form-planclaim-st .claim_signup').show();
		}
	});
	
	
	 
	 
	 jQuery('#claimform').on('submit', function(e){
		
		$this = jQuery(this);
		jQuery('.planclaim-page-popup-st .statuss').hide();
		jQuery('.planclaim-page-popup-st .statuss .lp-claim-cuccess').html('');
		jQuery(this).find('.formsubmitting').css('visibility','visible');
		e.preventDefault();
		
		
		var data = new FormData(this);
		data.append('action', 'listingpro_claim_list');
		data.append('lpNonce', jQuery('#lpNonce').val());

		jQuery.ajax({
            type: 'POST',
            url: single_ajax_object.ajaxurl,
            data: data,   
            success: function(resp){
				var res = jQuery.parseJSON(resp);
				console.log(res.result);
                if(res.result > '0'){
                    $this.find('.formsubmitting').css('visibility','hidden');
                    jQuery('.planclaim-page-popup-st .statuss .lp-claim-cuccess').html(res.state);
                    jQuery('.planclaim-page-popup-st .statuss').show();
                    jQuery('.planclaim-page-popup-st .claim-details.insidewrp').hide();
                    jQuery('.rightside').css("height","");
                }else{
                    $this.find('.formsubmitting').css('visibility','hidden');
                    jQuery('.planclaim-page-popup-st .lp-claim-cuccess-return').hide();
                    jQuery('.planclaim-page-popup-st .statuss .lp-claim-cuccess').html(res.state);
                    jQuery('.planclaim-page-popup-st .statuss').show();
                    jQuery('.planclaim-page-popup-st .claim-details.insidewrp').hide();
                    jQuery('.rightside').css("height","");

                }
				
				$this[0].reset();
            },
			processData: false,
			contentType: false,
        });
		//return false;
		 //alert(formData);
	 });
	 
	  jQuery('#claimformmobile').on('submit', function(e){
		$this = jQuery(this);
		$this.find('.statuss').html('');
		jQuery(this).find('.formsubmitting').css('visibility','visible');
		e.preventDefault();
		var data = new FormData(this);
		data.append('action', 'listingpro_claim_list');
		data.append('lpNonce', jQuery('#lpNonce').val());

		jQuery.ajax({
            type: 'POST',
            url: single_ajax_object.ajaxurl,
            data: data,   
            success: function(resp){
				var res = jQuery.parseJSON(resp);
				$this.find('.formsubmitting').css('visibility','hidden');
                //alert(res.state);
				$this.find('.statuss').html(res.state);
				
				$this[0].reset();
            },
			processData: false,
			contentType: false,
        });
		//return false;
		 //alert(formData);
	 });



jQuery('#contactOwner').on('submit', function(e){

         $this = jQuery(this);

         e.preventDefault();

         var lEmail     =   jQuery('#email7').val(),
             lName      =   jQuery('#name7').val(),
             lMsg       =   jQuery('#message7').val(),
             proceedIt  =   true;

         if( lEmail == '' || lName == '' || lMsg == '' )
         {

             if( lEmail == '' )
             {
                 jQuery('#email7').addClass('error-msg');
             }
             else
             {
                 jQuery('#email7').removeClass('error-msg');
             }
             if( lName == '' )
             {
                 jQuery('#name7').addClass('error-msg');
             }
             else
             {
                 jQuery('#name7').removeClass('error-msg');
             }
             if( lMsg == '' )
             {
                 jQuery('#message7').addClass('error-msg');
             }
             else
             {
                 jQuery('#message7').removeClass('error-msg');
             }

             proceedIt  =   false;
         }
         if( jQuery('input:checkbox.lp-required-field').length > 0 )
         {
             if (jQuery('input:checkbox.lp-required-field', this).is(':checked'))
             {
                 jQuery('input:checkbox.lp-required-field').closest('label' ).removeClass('error-msg');
             }
             else
             {
                 jQuery('input:checkbox.lp-required-field').closest('label' ).addClass('error-msg');
                 proceedIt  =   false;
             }
         }
         if( jQuery('input:radio.lp-required-field').length > 0 )
         {
             if(jQuery('input:radio.lp-required-field', this).is(':checked') )
             {
                 jQuery('input:radio.lp-required-field').closest('label' ).removeClass('error-msg');
             }
             else
             {
                 jQuery('input:radio.lp-required-field').closest('label' ).addClass('error-msg');
                 proceedIt  =   false;

             }
         }

         if( jQuery('#contactOwner .lp-required-field').length > 0 )
         {
             jQuery('#contactOwner .lp-required-field').each(function (index) {
                 var $this      =   jQuery(this),
                     $thisVal   =   $this.val(),
                     $thisType  =   $this.attr('type');

                 if( $this.prop('tagName') == 'SELECT' )
                 {
                     if( $thisVal == 0 )
                     {
                         proceedIt  =   false;
                         $this.addClass('error-msg');
                     }
                     else
                     {
                         $this.removeClass('error-msg');
                     }
                 }
                 else
                 {

                     if( $thisVal == '' )
                     {
                         proceedIt  =   false;
                         $this.addClass('error-msg');
                     }
                     else
                     {
                         $this.removeClass('error-msg');
                     }
                 }

             });
         }
         if( proceedIt === false )
         {
             return proceedIt;
         }



         var formData = $(this).serialize();
         $this.find('.lp-search-icon').removeClass('fa-send');
         $this.find('.lp-search-icon').addClass('fa-spinner fa-spin');
		 
		isCaptcha = jQuery(this).data('lp-recaptcha');
		siteKey = jQuery(this).data('lp-recaptcha-sitekey');
		token = '';
		if ( (isCaptcha == '' || isCaptcha === null) || (siteKey == '' || siteKey === null) ) {

				 jQuery.ajax({
					 type: 'POST',
					 dataType: 'json',
					 url: single_ajax_object.ajaxurl,
					 data: {
						 'action': 'listingpro_contactowner',
						 'formData': formData,
                         'lpNonce' : jQuery('#lpNonce').val()
					 },
					 success: function(res){
						 
						 if(res.result==="fail"){
							 jQuery.each(res.errors, function (k, v) {
								 if(k==="email"){
									 jQuery("input[name='email7']").addClass('error-msg');
								 }
								 if(k==="message"){
									 jQuery("textarea[name='message7']").addClass('error-msg');
								 }
								 if(k==="name7"){
									 jQuery("input[name='name7']").addClass('error-msg');
								 }
								 $this.find('.lp-search-icon').removeClass('fa-spinner fa-spin');
								 $this.find('.lp-search-icon').addClass('fa-cross');
								 //$this.append(res.state);
							 });
						 }
						 else{
							 $this.find('.lp-search-icon').removeClass('fa-spinner fa-spin');
							 $this.find('.lp-search-icon').addClass('fa-check');
							 // success msg.
							 jQuery('.lp-lead-success-msg-outer').fadeIn('700');
							 //$this.append(res.state);
							 $this[0].reset();
						 }
					 }
				 });
		}else{
			
			grecaptcha.ready(function() {
				grecaptcha.execute(siteKey, {action: 'lp_lead'}).then(function(token) {
					
						jQuery.ajax({
							 type: 'POST',
							 dataType: 'json',
							 url: single_ajax_object.ajaxurl,
							 data: {
								 'action': 'listingpro_contactowner',
								 'formData': formData,
								 'recaptha-action' : 'lp_lead',
								 'token' : token,
                                 'lpNonce' : jQuery('#lpNonce').val()
							 },
							 success: function(res){
								 
								 if(res.result==="fail"){
									 jQuery.each(res.errors, function (k, v) {
										 if(k==="email"){
											 jQuery("input[name='email7']").addClass('error-msg');
										 }
										 if(k==="message"){
											 jQuery("textarea[name='message7']").addClass('error-msg');
										 }
										 if(k==="name7"){
											 jQuery("input[name='name7']").addClass('error-msg');
										 }
										 $this.find('.lp-search-icon').removeClass('fa-spinner fa-spin');
										 $this.find('.lp-search-icon').addClass('fa-cross');
										 //$this.append(res.state);
									 });
								 }
								 else{
									 $this.find('.lp-search-icon').removeClass('fa-spinner fa-spin');
									 $this.find('.lp-search-icon').addClass('fa-check');
									 // success msg.
									 jQuery('.lp-lead-success-msg-outer').fadeIn('700');
									 //$this.append(res.state);
									 $this[0].reset();
								 }
							 }
						 });
					
				});
			})
			
		}
         

     });
	 
	 
/* jquery ajax code for expired listing plan change */
	
	jQuery(document).on('click','.lp-change-proceed-link', function(e){
		jQuery('div.lp-existing-plane-container').slideToggle(700);
		jQuery('div.lp-new-plane-container').slideToggle(700);
		e.preventDefault();
	});
	
	jQuery(document).on('click','.lp-role-back-to-current-plan', function(e){
		jQuery('div.lp-existing-plane-container').slideToggle(700);
		jQuery('div.lp-new-plane-container').slideToggle(700);
		e.preventDefault();
	});
        
        jQuery(document).on('click','.lp-back-to-change-plan', function(e){
            jQuery('input[name="submit-change"]').show();
            jQuery('.change-plan-btn-holder').hide();
            jQuery('.lp-change-plane-status .lp-action-div').html('');
            e.preventDefault();
	})
	
	/* for recurring stripe */
	jQuery(document).on('click','#select-plan-form .select-plan-form input[name=plans-posts]', function(){
            jQuery('input[name="submit-change"]').show();
            jQuery('.change-plan-btn-holder').hide();
            jQuery("a.lp_change_plan_action").hide('');
            jQuery("div.lp-action-div form").hide('');
	});
	
	
	jQuery('.lp-change-plan-btn').on('click', function(e){
		var listing_id = '';
		var listing_status = '';
		var plan_title = '';
		var plan_price = '';
		var haveplan = '';
		jQuery('div.lp-loadingPlans').html(jQuery('div.lp-loadingPlans').data('default'));
		listing_id = jQuery(this).data('listingid');
		plan_title = jQuery(this).data('plantitle');
		plan_price = jQuery(this).data('planprice');
		haveplan = jQuery(this).data('haveplan');
		listing_status = jQuery(this).data('listingstatus');
		jQuery('.lp-selected-plan-price h3' ).html('');
		jQuery('.lp-selected-plan-price h3' ).text(plan_title);
		jQuery('.lp-selected-plan-price h4' ).html('');
		jQuery('.lp-selected-plan-price h4' ).html(plan_price);
		jQuery('#select-plan-form input#listing_id' ).val(listing_id);
		jQuery('#select-plan-form input#listing_statuss' ).val(listing_status);
			jQuery.ajax({
				type: 'POST',
				dataType: 'json',
				url: single_ajax_object.ajaxurl,
				data: { 
					'action': 'listingpro_change_plan_data', 
					'listing_id': listing_id, 
					'plan_title': plan_title, 
					'plan_price': plan_price, 
					'haveplan': haveplan, 
					'listing_status': listing_status,
                    'lpNonce' : jQuery('#lpNonce').val()
				},   
				success: function(data){
					jQuery('div.lp-loadingPlans').html(data);
				}
			});		
			
			e.preventDefault();
	});
	jQuery(document).on('submit', '#select-plan-form',function(event){
		var plan_id = '';
		$this = jQuery(this);
		listing_idd = '';
		listing_status = '';
		listing_idd = jQuery("input[name='plans-posts']:checked").val();
		listing_id = jQuery("input[name='listing-id']").val();
		listing_status = jQuery("input[name='listing_status']").val();
		jQuery('.lp-change-plane-status .lp-action-div').html('');
		if( typeof(listing_idd)  !== "undefined" ){
			jQuery("div.lp-expire-update-status").html('<i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i>');
			jQuery.ajax({
				type: 'POST',
				dataType: 'json',
				url: single_ajax_object.ajaxurl,
				data: { 
					'action': 'listingpro_change_plan', 
					'ch_plan_id': listing_idd, 
					'ch_listing_id': listing_id, 
					'ch_listing_status': listing_status,
                    'lpNonce' : jQuery('#lpNonce').val()
				},   
				success: function(data){
					//jQuery('#select-plan-form')[0].reset();
					if( data.subscribed ){
						if(data.subscribed=="yes"){
							alert(data.alertmsg);
						}
					}
                                        jQuery('input[name="submit-change"]').hide();
                                        jQuery('.change-plan-btn-holder').show();
					jQuery("div.lp-expire-update-status").html('');
					jQuery('.lp-change-plane-status .lp-action-div').html('');
					jQuery('.lp-change-plane-status .lp-action-div').html(data.action);
					
				}
			});
			
		}
		event.preventDefault();
	})
	 
 });
 
 
 /* change plan proceedings */
 jQuery(document).on('click', '.lp_change_plan_action', function(e){
	 var planid = jQuery('.lp-action-div input[name="planid"]').val();
	 var listingid = jQuery('.lp-action-div input[name="listingid"]').val();
	 jQuery('.lp-action-div').html('');
	 jQuery("div.lp-expire-update-status").html('<i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i>');
	 jQuery.ajax({
				type: 'POST',
				dataType: 'json',
				url: single_ajax_object.ajaxurl,
				data: { 
					'action': 'listingpro_change_plan_proceeding', 
					'plan_iddd': planid, 
					'listing_iddd': listingid,
                    'lpNonce' : jQuery('#lpNonce').val()
				},   
				success: function(data){
					//jQuery('#select-plan-form')[0].reset();
					jQuery("div.lp-expire-update-status").html('');
					jQuery("div.lp-expire-update-status").html(data.message);
				}
			});
	 
	 e.preventDefault();
 })
 /* end change plan proceedings */ 
 
 /* delete subscription proceedings */
jQuery(document).on('click', 'a.delete-subsc-btn', function(e){

     e.preventDefault();
     var $this = jQuery(this),
         cMsg   =   $this.data('cmsg');


     var r = confirm(cMsg);


     if( r == true )
     {
         jQuery('body').addClass('listingpro-loading');
         var subscript_id = jQuery(this).attr('href');
        if($this.hasClass('paystack-unsub')) {
            var mail_token  =   $this.attr('data-mailtoekn');
            unsubsribe_paystack(subscript_id, mail_token, $this);

        }else if ($this.hasClass('razorpay-unsub')) {
            unsubsribe_razorpay(subscript_id, $this);
        } else {
            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                url: single_ajax_object.ajaxurl,
                data: {
                    'action': 'listingpro_cancel_subscription_proceeding',
                    'subscript_id': subscript_id,
                    'lpNonce' : jQuery('#lpNonce').val()
                },
                success: function(data){
                    jQuery('body').removeClass('listingpro-loading');
                    alert(data.msg);
                    if(data.status=="success"){
                        $this.closest('tr').slideToggle();
                    }

                },
                error: function(jqXHR, textStatus, errorThrown) {
                    jQuery('body').removeClass('listingpro-loading');
                    console.log(textStatus, errorThrown);
                }
            });
        }
     }
 });
 
 /* Report listing or Report Review */
 jQuery(document).on('click', '#lp-report-listing a#lp-report-this-listing, #lp-report-review a#lp-report-this-review, .lp-review-right-bottom a#lp-report-this-review', function(e){
	 var $this = jQuery(this);
	 var $posttype = $this.data('posttype');
	 var $postid = $this.data('postid');
	 var $reportedby = $this.data('reportedby');
	 jQuery('body').addClass('listingpro-loading');
	 jQuery.ajax({
				type: 'POST',
				dataType: 'json',
				url: single_ajax_object.ajaxurl,
				data: { 
					'action': 'listingpro_report_this_post', 
					'posttype': $posttype, 
					'postid': $postid, 
					'reportedby': $reportedby,
                    'lpNonce' : jQuery('#lpNonce').val()
				},   
				success: function(data){
					jQuery('body').removeClass('listingpro-loading');
					jQuery('div.lp-top-notification-bar').html('');
					var alertmsgs = '';
					if(data.status==="success"){
						alertmsgs = '<div class="lp-reporting-success">'+data.msg+'</div>';
						jQuery('div.lp-top-notification-bar').html(alertmsgs);
					}
					else{
						alertmsgs = '<div class="lp-reporting-error">'+data.msg+'</div>';
						jQuery('div.lp-top-notification-bar').html(alertmsgs);
					}
					jQuery('div.lp-top-notification-bar').slideDown('slow').delay(2000).slideUp('slow');
					//alert(data.msg);
					
				},
				error: function(jqXHR, textStatus, errorThrown) {
					jQuery('body').removeClass('listingpro-loading');
					console.log(textStatus, errorThrown);
				}
			});
	 
	 e.preventDefault();
 })


 /* lp bar graph print options */

 jQuery(document).on('click', 'div.lp_user_stats_btn, ul li .lp_stats_duratonBtn', function(e){
     $this = jQuery(this);
     if($this.hasClass('active') && ($this.hasClass('lp_user_stats_btn'))){}else{
         jQuery('div.lp_user_stats_btn').removeClass('active');
         jQuery( "#lpgraph" ).empty();
         $duration = jQuery('ul li .lp_stats_duratonBtn.active').data('chartduration');
         $type = $this.data('type');
         $label = $this.data('label');
         jQuery('ul.lp_stats_duration_filter li button').data('label', $label);
         jQuery('body').addClass('listingpro-loading');
         jQuery.ajax({
             type: 'POST',
             dataType: 'json',
             url: single_ajax_object.ajaxurl,
             data: {
                 'action': 'listingpro_show_bar_chart',
                 'type': $label,
                 'duration': $duration,
                 'lpNonce' : jQuery('#lpNonce').val()
             },
             success: function(data){
                 jQuery('body').removeClass('listingpro-loading');
                 jQuery('ul.lp_stats_duration_filter').show();
                 showthischart(data.data, $type, $label);
                 jQuery('.lp_user_stats_btn.active p.lpstatsnumber').text('');
                 jQuery('.lp_user_stats_btn.active p.lpstatsnumber').text(data.counts);
                 jQuery('.lp_user_stats_btn.active').find('.lp_status_duration_counter').text('');
                 jQuery('.lp_user_stats_btn.active').find('.lp_status_duration_counter').text(data.resp);
                 //alert(data.msg);

             },
             error: function(jqXHR, textStatus, errorThrown) {
                 jQuery('body').removeClass('listingpro-loading');
                 console.log(textStatus, errorThrown);
             }
         });
     }
 });

function showthischart($datarray, $type, $label){
    Morris.Bar({
      element: 'lpgraph',
      data : $datarray,
      xkey: 'x',
      ykeys: ['y'],
      labels: [$type]
    });
    if($label=="view"){
        jQuery('div.lpviewchart').addClass('active');
    }else if($label=="leads"){
        jQuery('div.lpviewleads').addClass('active');
    }else if($label=="reviews"){
        jQuery('div.lpviewreviews').addClass('active');
    }
}

/* start for coupon button on checkout page */
jQuery(document).on('click', 'button.coupon-apply-bt', function(){
     var couponcode = jQuery('input[name=coupon-text-field]').val();
     var $price = jQuery('input[name=listing_id]:checked').data('planprice');
     var $listingID = jQuery('input[name=listing_id]:checked').val();
     var $post_title = jQuery('input[name=listing_id]:checked').data('title');
     var $planID = jQuery('input[name=listing_id]:checked').data('planid');
     var $tax =jQuery('input[name=listing_id]:checked').data('taxenable');
     var $taxRate = jQuery('input[name=listing_id]:checked').data('taxrate');

     if(couponcode === ''){}else{
         jQuery('body').addClass('listingpro-loading');
         jQuery.ajax({
             type: 'POST',
             dataType: 'json',
             url: single_ajax_object.ajaxurl,
             data: {
                 'action': 'listingpro_apply_coupon_code',
                 'coupon': couponcode,
                 'listingid': $listingID,
                 'taxrate': $taxRate,
                 'price': $price,
                 'lpNonce' : jQuery('#lpNonce').val()
             },
             success: function(data){
                 jQuery('body').removeClass('listingpro-loading');
                 if(data.status=="success"){
                     $discount = data.discount;
                     $discounttype = data.coupontype;
					 $discountIn = '%';
					 if($discounttype=='on'){
						 /* means it is fixed price coupon */
						 $discountIn = '';
					 }
					 $newprice = data.price;
                     $newprice = parseFloat($newprice).toFixed(2);
                     lp_add_checkout_data_fields_in_form($listingID, $post_title, $planID, $newprice, $tax, $taxRate);
					  if(jQuery('li').hasClass('checkout_discount_val')){}else{
					 jQuery('span.lp-subtotal-p-price').parent().after('<li class="checkout_discount_val"><span class="item-price-total-left lp-subtotal-plan">Discounted</span><span class="item-price-total-right lp-subtotal-p-prasaice">'+$discount+$discountIn+'</span></li>');
					  }
                 }else{
                     ajax_success_popup( data, '' )
                 }

             },
             error: function(jqXHR, textStatus, errorThrown) {
                 jQuery('body').removeClass('listingpro-loading');
                 console.log(textStatus, errorThrown);
             }
         });
     }

 });
 
/* reset tax in database while switching offto discound */
jQuery(document).on('click', 'input[name="lp_checkbox_coupon"]', function(){
	if(jQuery(this).hasClass('active')){}else{
		
		 var couponcode = jQuery('input[name=coupon-text-field]').val();
		 var $price = jQuery('input[name=listing_id]:checked').data('planprice');
		 var $listingID = jQuery('input[name=listing_id]:checked').val();
		 var $post_title = jQuery('input[name=listing_id]:checked').data('title');
		 var $planID = jQuery('input[name=listing_id]:checked').data('planid');
		 var $tax =jQuery('input[name=listing_id]:checked').data('taxenable');
		 var $taxRate = jQuery('input[name=listing_id]:checked').data('taxrate');
		 
		 jQuery.ajax({
             type: 'POST',
             dataType: 'json',
             url: single_ajax_object.ajaxurl,
             data: {
                 'action': 'listingpro_apply_coupon_code',
                 'coupon': couponcode,
                 'notusing': 'true',
                 'listingid': $listingID,
                 'taxrate': $taxRate,
                 'price': $price,
                 'lpNonce' : jQuery('#lpNonce').val()
             },
             success: function(data){
                 jQuery('body').removeClass('listingpro-loading');
                 if(data.status=="success"){
                     $discount = data.discount;
                     $discounttype = data.coupontype;
					 $discountIn = '%';
					 if($discounttype=='on'){
						 /* means it is fixed price coupon */
						 $discountIn = '';
					 }
					 $newprice = data.price;
                     $newprice = parseFloat($newprice).toFixed(2);
                     lp_add_checkout_data_fields_in_form($listingID, $post_title, $planID, $newprice, $tax, $taxRate);
					  if(jQuery('li').hasClass('checkout_discount_val')){}else{
					 jQuery('span.lp-subtotal-p-price').parent().after('<li class="checkout_discount_val"><span class="item-price-total-left lp-subtotal-plan">Discounted</span><span class="item-price-total-right lp-subtotal-p-prasaice">'+$discount+$discountIn+'</span></li>');
					  }
                 }

             },
             error: function(jqXHR, textStatus, errorThrown) {
                 jQuery('body').removeClass('listingpro-loading');
                 console.log(textStatus, errorThrown);
             }
         });
		 
		
	}
     
 });
 
 
 
/* ajax call to reply to leads message */
jQuery(document).on('submit', 'form[name=lp_leadReply]', function(e){
	
	$this = jQuery(this);
	$this.find('.lpthisloading').show();
	var fd = new FormData(this);
	fd.append('action', 'lp_reply_to_lead_msg');
	fd.append('lpNonce', jQuery('#lpNonce').val());
	jQuery.ajax({
            type: 'POST',
            url: single_ajax_object.ajaxurl,
            data:fd,  
			contentType: false,
			processData: false,
            success: function(res){
				$this.find('.lpthisloading').removeClass('fa-spinner fa-spin');
				$this.find('.lpthisloading').addClass('fa-check');
				window.location.href=window.location.href
				$this[0].reset();
            },
			error: function(request, error){
				//alert(error);
				$this.find('.lpthisloading').removeClass('fa-spinner fa-spin');
				$this.find('.lpthisloading').addClass('fa-check');
				window.location.href=window.location.href
			}
        });
	e.preventDefault();
	return false;	
});

/* ajax call read message thread on click */
 jQuery(document).on('click', '.lp-read-messages .lp-read-message-inner', function(e){
     $this = jQuery(this);
     $loaderImg = $this.data('loader');
     $listingid = $this.data('listingid');
     $useremail = $this.data('email');
	 jQuery('.lp-read-messages .lp-read-message-inner').removeClass('active');
	 jQuery('.lp-read-messages .lp-read-message-inner').removeClass('unread');
	 $this.addClass('active');
	 $this.addClass('read');
     if($listingid){
         jQuery('.lpinboxmiddlepart').html('');
         jQuery('.lpinboxrightpart').html('');
         jQuery('.lpinboxmiddlepart').html('<div class="text-center loadercenterclass"><img src="'+$loaderImg+'" width=35 height=35></div>');
         jQuery('.lpinboxrightpart').html('<div class="text-center loadercenterclass"><img src="'+$loaderImg+'" width=35 height=35></div>');
         jQuery.ajax({
             type: 'POST',
             dataType: 'json',
             url: single_ajax_object.ajaxurl,
             data: {
                 'action': 'lp_preview_this_message_thread',
                 'listindid': $listingid,
                 'useremail': $useremail,
                 'lpNonce' : jQuery('#lpNonce').val()
             },
             success: function(data){
                 jQuery('.lpinboxmiddlepart').html('');
                 jQuery('.lpinboxrightpart').html('');
                 jQuery('.lpinboxmiddlepart').html(data.outputcenter);
				 jQuery('.lpinboxrightpart').html(data.outputright);
				 if (data.notify_alert != true) {
					jQuery('.unreadMsgDot').remove();
				}

             },
             error: function(jqXHR, textStatus, errorThrown) {
                 jQuery('.lpinboxmiddlepart').html('');
                 jQuery('.lpinboxrightpart').html('');
                 jQuery('.lpinboxmiddlepart').html(data.outputcenter);
                 jQuery('.lpinboxrightpart').html(data.outputright);
             }
         });
     }



 });


/* ==================for saving id in session for checkout============= */
 
 jQuery(document).on('click', 'a.lp-pay-publish-btn, a.lp-listing-pay-button, input.lp-listing-pay-button', function(){
	 $listingID = jQuery(this).data('lpthisid');
	 jQuery.ajax({
         type: 'POST',
         dataType: 'json',
         url: single_ajax_object.ajaxurl,
         data: {
             'action': 'lp_save_thisid_in_session',
             'listing_id': $listingID,
             'lpNonce' : jQuery('#lpNonce').val()
         },
         success: function(data){
             console.log(data);
         },
         error: function(jqXHR, textStatus, errorThrown) {
             console.log(errorThrown);
         }
     });
 });
	
/* ==================delete converstaion inbox============= */
 
 jQuery(document).on('click', 'button.lp-delte-conv', function(){
	 $this = jQuery(jQuery(this));
	 $emailid = jQuery(this).data('emailid');
	 $listingid = jQuery(this).data('listingid');
	 $this.closest('#lp-ad-click-inner').find('.lpthisloading').show();
	 jQuery.ajax({
         type: 'POST',
         dataType: 'json',
         url: single_ajax_object.ajaxurl,
         data: {
             'action': 'lp_delete_this_conversation',
             'listingid': $listingid,
             'emailid': $emailid,
             'lpNonce' : jQuery('#lpNonce').val()
         },
         success: function(data){
            $this.closest('#lp-ad-click-inner').find('.lpthisloading').removeClass('fa-spinner fa-spin');
			$this.closest('#lp-ad-click-inner').find('.lpthisloading').addClass('fa-check');
			window.location.href=window.location.href
         },
         error: function(jqXHR, textStatus, errorThrown) {
             console.log(errorThrown);
         }
     });
 });


/* ==================submit contact us form============= */
jQuery(document).ready(function($){
    jQuery( '#contactMSGForm' ).on('submit', function(e){
		jQuery('#contactMSGForm #error').hide();
		jQuery('#contactMSGForm #success').hide();
		jQuery('#contactMSGForm .statuss').show();
		e.preventDefault();
		$this = jQuery(this);
		isCaptcha = jQuery(this).data('lp-recaptcha');
		siteKey = jQuery(this).data('lp-recaptcha-sitekey');
		token = '';
		var fd = new FormData(this);
		fd.append('action', 'lp_ajax_contact_submit');
		fd.append('lpNonce', jQuery('#lpNonce').val());
			if ( (isCaptcha == '' || isCaptcha === null) || (siteKey == '' || siteKey === null) ) {
					
						jQuery.ajax({
							type: 'POST',
							url: single_ajax_object.ajaxurl,
							data:fd,
							contentType: false,
							processData: false,
							
							success: function(res){
								jQuery('#contactMSGForm .statuss').hide();
								var res = jQuery.parseJSON(res);
								if(res.status=="error"){
									jQuery('#contactMSGForm #error span p').html('');
									jQuery('#contactMSGForm #error span p').html(res.msg);
									jQuery('#contactMSGForm #error').show();
								}
								else if(res.status=="success"){
									jQuery('#contactMSGForm #success span p').html('');
									jQuery('#contactMSGForm #success span p').html(res.msg);
									jQuery('#contactMSGForm #success').show();
								}
								
							},
							error: function(request, error){
								jQuery('#contactMSGForm .statuss').hide();
								alert(error);
							}
						});
			}else{
						//for recpatcha
						
						grecaptcha.ready(function() {
							grecaptcha.execute(siteKey, {action: 'lp_contact'}).then(function(token) {
								
								fd.append('recaptha-action', 'lp_contact');
								fd.append('token', token);
								
								jQuery.ajax({
									type: 'POST',
									url: single_ajax_object.ajaxurl,
									data:fd,
									contentType: false,
									processData: false,
									
									success: function(res){
										jQuery('#contactMSGForm .statuss').hide();
										var res = jQuery.parseJSON(res);
										if(res.status=="error"){
											jQuery('#contactMSGForm #error span p').html('');
											jQuery('#contactMSGForm #error span p').html(res.msg);
											jQuery('#contactMSGForm #error').show();
										}
										else if(res.status=="success"){
											jQuery('#contactMSGForm #success span p').html('');
											jQuery('#contactMSGForm #success span p').html(res.msg);
											jQuery('#contactMSGForm #success').show();
										}
										
									},
									error: function(request, error){
										jQuery('#contactMSGForm .statuss').hide();
										alert(error);
									}
								});
								
							});
						})
			}
		
	 });
});

/* ===============lp review filter=============== */
 jQuery(document).ready(function($){
	jQuery('#lp_reivew_drop_filter').on('change', function(e){
		e.preventDefault();
		jQuery('.reviews-section').html('');
		jQuery('.review-filter-loader').show();
		jQuery('.lp-listing-reviews .lp-listing-review').remove();
		$this = jQuery(this);
					jQuery.ajax({
						 type: 'POST',
						 dataType: 'json',
						 url: single_ajax_object.ajaxurl,
						 data: {
							 'action': 'lp_show_sorted_reivews',
							 'order_by': $this.val(),
							 'listing_id': jQuery('input[name=post_id]').val(),
                             'lpNonce' : jQuery('#lpNonce').val()
						 },
						 success: function(data){
							jQuery('.review-filter-loader').hide();
							jQuery('.reviews-section').html(data);
							jQuery('.lp-listing-reviews').append(data);
						 },
						 error: function(jqXHR, textStatus, errorThrown) {
							 jQuery('.review-filter-loader').hide();
							 console.log(errorThrown);
						 }
					});
	}); 
 });

/* ===============lp make listing publish with 100% discount=============== */
 function lp_make_this_listing_publish_withdiscount($listing_id){
	 
	 jQuery('body').addClass('listingpro-loading');
					jQuery.ajax({
						 type: 'POST',
						 dataType: 'json',
						 url: single_ajax_object.ajaxurl,
						 data: {
							'action': 'lp_make_listing_published',
							'listing_id': $listing_id,
                            'plan_price': jQuery("#listings_checkout_form input[name=plan_price]").val(),
				            'taxrate': jQuery("#listings_checkout_form input[name=listings_tax_price]").val(),
							'coupon' : jQuery("#listings_checkout_form input[name=coupon-text-field]").val(),
							'plan_id' : jQuery("#listings_checkout_form input[name=plan_id]").val(),
                            'payment_method': jQuery("#listings_checkout_form input[name=plan]:checked").val(),
                            'currency': jQuery("#listings_checkout_form input[name=currency]").val(),
                            'lpNonce' : jQuery('#lpNonce').val()
						 },
						 success: function(data){
							jQuery('body').removeClass('listingpro-loading');
							if(data.status=="success"){
								/* redirect to the listing page */
								document.location.href = data.url;
							}else{
								alert(data.url);
							}
						 },
						 error: function(jqXHR, textStatus, errorThrown) {
							 jQuery('body').removeClass('listingpro-loading');
							 alert(errorThrown);
							 console.log(errorThrown);
						 }
					});
 }
 
 
 /* =================lp save user analytics===================== */
 jQuery(document).on('submit','#lp-user-g-analytics form', function(e){
		e.preventDefault();
		formData = jQuery(this);
		jQuery('#lp-user-g-analytics .analyticsspin').show();
		
		jQuery.ajax({
						 type: 'POST',
						 dataType: 'json',
						 url: single_ajax_object.ajaxurl,
						 data: {
							 'action': 'lp_save_user_analytics',
							 'data': formData.serialize(),
                             'lpNonce' : jQuery('#lpNonce').val()
						 },
						 success: function(data){
							if(data=="success"){
							}else{
								
							}
							jQuery('#lp-user-g-analytics .analyticsspin').hide();
						 },
						 error: function(jqXHR, textStatus, errorThrown) {
							 alert(errorThrown);
							 jQuery('#lp-user-g-analytics .analyticsspin').hide();
						 }
					});
	});

 function claimformvalidation(login, policy) {
     if (login === true) {
         var name = jQuery('#claimform #fullname').val(),
             lname = jQuery('#claimform #lastname').val(),
             phone = jQuery('#claimform #phoneClaim').val(),
             email = jQuery('#claimform #bemail').val(),
             massage = jQuery('#claimform #message').val(),
             checkpandpcheck = true;
         if (policy === true){
             checkpandpcheck = false;
             checkpandpcheck = jQuery('#claimform .lpprivacycheckboxopt').is(':checked');
         }
         if (name != '' && lname != '' && phone != '' && email != '' && massage != '' && checkpandpcheck === true) {
             jQuery('#claimform input[type=submit]').removeAttr('disabled');
         } else {
             jQuery('#claimform input[type=submit]').attr('disabled', 'disabled');
         }
     } else {
         var name = jQuery('#claimform #fullname').val(),
             lname = jQuery('#claimform #lastname').val(),
             phone = jQuery('#claimform #phoneClaim').val(),
             email = jQuery('#claimform #bemail').val(),
             massage = jQuery('#claimform #message').val(),
             newuser = jQuery('#claimform #claim_new_user_email').val(),
             euser = jQuery('#claimform #claim_username').val(),
             epass = jQuery('#claimform #claim_userpass').val(),
             checkpandpcheck = true;
         if (policy === true){
             checkpandpcheck = false;
             checkpandpcheck = jQuery('#claimform .lpprivacycheckboxopt').is(':checked');
         }
         if (jQuery('#lp-signin-on-claim').prop('checked')) {
             if (name != '' && lname != '' && phone != '' && email != '' && massage != '' && euser != '' && epass != '' && checkpandpcheck === true) {
                 jQuery('#claimform input[type=submit]').removeAttr('disabled');
             } else {
                 jQuery('#claimform input[type=submit]').attr('disabled', 'disabled');
             }
         } else {
             if (name != '' && lname != '' && phone != '' && email != '' && massage != '' && newuser != '' && checkpandpcheck === true) {
                 jQuery('#claimform input[type=submit]').removeAttr('disabled');
             } else {
                 jQuery('#claimform input[type=submit]').attr('disabled', 'disabled');
             }
         }
     }
 }
 jQuery(document).ready(function () {
     var claimuserlogin = false,
         ppolicy = false;
     if (jQuery('body').hasClass('logged-in')) {
         claimuserlogin = true;
     }
     if (jQuery('#claimform .lpprivacycheckboxopt').length > 0) {
         ppolicy = true;
     }
     jQuery(document).on('input', '#claimform #fullname,#claimform #lastname,#claimform #phoneClaim,#claimform #bemail,#claimform #message,#claimform #claim_new_user_email,#claimform #claim_username,#claimform #claim_userpass', function () {
         claimformvalidation(claimuserlogin, ppolicy);
     });
     jQuery('#lp-signin-on-claim').click(function () {
         jQuery(this).closest('form').find('input[type=submit]').attr("disabled", "disabled");
         jQuery('#claim_username').val("");
         jQuery('#claim_userpass').val("");
         jQuery('#claim_new_user_email').val("");
     });
 });
