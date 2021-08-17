/* Main.js contains all main JS  */
/*  Author : CrdioStudio Dev team */

//const { method } = require("lodash");

/*moin 31-03-017 strt*/
jQuery.noConflict();

jQuery(window).on('resize load live', function (){
	jQuery(window).resize( function () {
		
		if (jQuery(window).width() <= 768) {
			jQuery('a.open-map-view').on('click', function(event) {
				event.preventDefault();
				jQuery('.sidemap-container').addClass('open-map');
				jQuery('header').addClass('map-view-content');
			});
			

			jQuery('a.open-img-view').on('click', function(event) {
				event.preventDefault();
				jQuery('.sidemap-container').removeClass('open-map');
				jQuery('header').removeClass('map-view-content');
			});
			
			if(jQuery('#wpadminbar').length > 0) {
				jQuery('html body').css('margin-top','-46px');
			}
		} else {
			jQuery('.sidemap-container').removeClass('open-map');
			if(jQuery('#wpadminbar').length > 0) {
				jQuery('html body').css('margin-top','0px');
			}
			
			jQuery('a.open-map-view').on('click', function(event) {
				event.preventDefault();
				jQuery('.sidemap-container').addClass('open-map');
				jQuery('header').addClass('map-view-content');
			});
			

			jQuery('a.open-img-view').on('click', function(event) {
				event.preventDefault();
				jQuery('.sidemap-container').removeClass('open-map');
				jQuery('header').removeClass('map-view-content');
			});
		}
		if (jQuery(window).width() <= 480) {
			jQuery('#more_filters').hide();
		} else {
			jQuery('#more_filters').show();
		}

	});
});
jQuery(document).ready(function() {
	
	jQuery('.lp_cancel_notic').click(function (e) {

       e.preventDefault();

       jQuery('.lp_notification_wrapper').slideToggle(400);

	})

    jQuery('.claimformtrigger2').click(function(){
        jQuery('header').addClass('lp-head-zindex');
        var divHeight = jQuery('.leftside').height();
        jQuery('.rightside').css('height', divHeight+'px');
    })

    jQuery('.lp-click-zindex').click(function() {
        jQuery('header').removeClass('lp-head-zindex');
    });

    jQuery('.lp-tagline-submit-tagline label input[type="checkbox"]').click(function(event) {
        if(jQuery(this).prop("checked") == true) {
            jQuery(".with-title-cond").fadeIn(700);

        } else if (jQuery(this).prop("checked") == false) {
            jQuery(".with-title-cond").fadeOut(700);

        }
    });

	jQuery('.stickynavbar ul li').each(function (e) {
		var tagetID	=	jQuery(this).find('a').attr('href');
		if( jQuery(tagetID).length == 0 )
		{
			jQuery(this).remove();
		}
    });


	// Search Top margin in map view
	var hh = jQuery('header').outerHeight();
	var ab = jQuery('.absolute');
	ab.css('top', hh);
	
	
	// Touch Behaviorr for Mobile devices
	if (jQuery('.chosen-container').length > 0) {
	  	jQuery('.chosen-container').on('touchstart', function(e) {
			e.stopPropagation(); e.preventDefault();
			// Trigger the mousedown event.
			jQuery(this).trigger('mousedown');
	  	});
	}
	
	jQuery('#see_filter').on('click', function(event) {
		event.preventDefault();
		var filter = jQuery('#more_filters');
		jQuery(this).next('#more_filters').toggleClass('open_filter');
		if(filter.hasClass('open_filter')) {
			jQuery(this).next('#more_filters').slideDown(400);
		}else {
			jQuery(this).next('#more_filters').slideUp(400);
		};
	});
	
	
	
	
});
/*moin 31-03-017 ends*/

/* by zaheer on 30 march */
jQuery(document).ready(function($){
	var loc = jQuery('.ui-widget').data('option');
	var apiType = jQuery('#page').data('ipapi');
	
	var currentlocationswitch = '1';
	
	currentlocationswitch = jQuery('#page').data('lpcurrentloconhome');
	if( currentlocationswitch == "0" ){
		loc = 'locationifoff';
		jQuery('.lp-location-search .ui-widget > i').fadeOut('fast');
	}

	if (loc == 'yes') {
		if( (jQuery('.form-group').is('.lp-location-search') || jQuery('.form-group').is('.lp-location-inner-search')) && (jQuery('body').is('.home') || jQuery('body').is('.app-view-home'))){
			if(apiType==="geo_ip_db"){
				jQuery.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?') 
				 .done (function(location)
				{
					var c_loc = location.city;
					var lp_s_loc = c_loc;
					if (jQuery('#page').data('lpattern') == 'with_region') {
						c_loc = location.city+" "+location.state+", "+location.country_name;
						lp_s_loc = location.city+" "+location.state;
					}
					//jQuery('.lp-home-sear-location').val(location.city);
					//jQuery(".chosen-select").val('').trigger('chosen:updated');
					jQuery("#searchlocation").prop('disabled', true).trigger('chosen:updated');
					jQuery('#searchlocation').find('#def_location').text(c_loc);
					jQuery('#searchlocation').find('#def_location').val(c_loc);
					jQuery('#cities').val(c_loc);
					jQuery('input[name=lp_s_loc]').val(lp_s_loc);
					// jQuery(".select2-selection__rendered").attr("title",location.city).text(location.city);
					jQuery("#searchlocation").prop('disabled', false).trigger('chosen:updated');
					jQuery('.select2-selection__rendered').parent('.select2-selection').addClass('slide-right');
					jQuery('.lp-location-search .ui-widget > i').fadeOut('slow');
				});
			}
			else if(apiType==="ip_api"){
				jQuery.get("https://ipapi.co/json", function(location) {
					var c_loc = location.city;
					var lp_s_loc = c_loc;
					if (jQuery('#page').data('lpattern') == 'with_region') {
						c_loc = location.city+" "+location.region_code+", "+location.country_name;
						lp_s_loc = location.city+" "+location.region_code;
					}
					jQuery("#searchlocation").prop('disabled', true).trigger('chosen:updated');
					jQuery('#searchlocation').find('#def_location').text(c_loc);
					jQuery('#searchlocation').find('#def_location').val(c_loc);
					jQuery('#cities').val(c_loc);
					jQuery('input[name=lp_s_loc]').val(lp_s_loc);
					// jQuery(".select2-selection__rendered").attr("title",location.city).text(location.city);
					jQuery("#searchlocation").prop('disabled', false).trigger('chosen:updated');
					jQuery('.select2-selection__rendered').parent('.select2-selection').addClass('slide-right');
					jQuery('.lp-location-search .ui-widget > i').fadeOut('slow');
				}, "json");
			}
			else{
					lpGetGpsLocName(function (lpgetcurrentcityvalue) {
						lpgpsclocation = lpgetcurrentcityvalue;
						jQuery("#searchlocation").prop('disabled', true).trigger('chosen:updated');
						jQuery('#searchlocation').find('#def_location').text(lpgpsclocation);
						jQuery('#searchlocation').find('#def_location').val(lpgpsclocation);
						jQuery('#cities').val(lpgpsclocation);
						jQuery('input[name=lp_s_loc]').val(lpgpsclocation);
						// jQuery(".select2-selection__rendered").attr("title",lpgpsclocation).text(lpgpsclocation);
						jQuery("#searchlocation").prop('disabled', false).trigger('chosen:updated');
						jQuery('.select2-selection__rendered').parent('.select2-selection').addClass('slide-right');
						jQuery('.lp-location-search .ui-widget > i').fadeOut('slow');
					});
			}
			
		}
	}else if (loc == 'no') {
		jQuery('.lp-location-search .ui-widget > i').on('click', function(event) {
			event.preventDefault();
			jQuery(this).addClass('fa-circle-o-notch fa-spin');
			jQuery(this).removeClass('fa-crosshairs');
			if(jQuery('.form-group').is('.lp-location-search')){
				if(apiType==="geo_ip_db"){
					jQuery.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?')
					 .done (function(location)
					{
						//jQuery('.lp-home-sear-location').val(location.city);
						//jQuery(".chosen-select").val('').trigger('chosen:updated');
						jQuery('.chosen-single').addClass('remove-margin');
						jQuery("#searchlocation").prop('disabled', true).trigger('chosen:updated');
						
						if(location.city==null){
						}
						else{
                            jQuery('#select2-searchlocation-container').text(location.city);
							// jQuery('#searchlocation').find('#def_location').text(location.city);
							jQuery('#searchlocation').find('#def_location').val(location.city);
							jQuery('#cities').val(location.city);
							jQuery('input[name=lp_s_loc]').val(location.city);
							// jQuery(".select2-selection__rendered").attr("title",location.city).text(location.city);
						}
						jQuery("#searchlocation").prop('disabled', false).trigger('chosen:updated');
						jQuery('.select2-selection__rendered').parent('.select2-selection').addClass('slide-right');
						jQuery('.lp-location-search .ui-widget > i').fadeOut('slow');
					});
				}
				else if(apiType==="ip_api"){
					jQuery.get("https://ipapi.co/json", function(location) {
						
						jQuery('.chosen-single').addClass('remove-margin');
						jQuery("#searchlocation").prop('disabled', true).trigger('chosen:updated');
						
						if(location.city==null){
						}
						else{
                            jQuery('#select2-searchlocation-container').text(location.city);
							// jQuery('#searchlocation').find('#def_location').text(location.city);
							jQuery('#searchlocation').find('#def_location').val(location.city);
							jQuery('#cities').val(location.city);
							jQuery('input[name=lp_s_loc]').val(location.city);
						}
						
						// jQuery(".select2-selection__rendered").attr("title",location.city).text(location.city);
						jQuery("#searchlocation").prop('disabled', false).trigger('chosen:updated');
						jQuery('.select2-selection__rendered').parent('.select2-selection').addClass('slide-right');
						jQuery('.lp-location-search .ui-widget > i').fadeOut('slow');
						
					}, "json");
				}
				else{
					
					lpGetGpsLocName(function (lpgetcurrentcityvalue) {
						
						lpgpsclocation = lpgetcurrentcityvalue;
						jQuery('.chosen-single').addClass('remove-margin');
						jQuery("#searchlocation").prop('disabled', true).trigger('chosen:updated');
						
						jQuery('#select2-searchlocation-container').text(lpgpsclocation);
						jQuery('#searchlocation').find('#def_location').val(lpgpsclocation);
						jQuery('#cities').val(lpgpsclocation);
						jQuery('input[name=lp_s_loc]').val(lpgpsclocation);
						
						// jQuery(".select2-selection__rendered").attr("title",lpgpsclocation).text(lpgpsclocation);
						jQuery("#searchlocation").prop('disabled', false).trigger('chosen:updated');
						jQuery('.select2-selection__rendered').parent('.select2-selection').addClass('slide-right');
						jQuery('.lp-location-search .ui-widget > i').fadeOut('slow');
					});
					
				}
			}
		});
	}



jQuery('#lp-new-ad-compaignForm').on('submit', function(e){
	e.preventDefault();
	var $this = jQuery(this);
	$this.data('plans','');
	jQuery('input[name="lpadsoftype[]"]:checked').each(function(){
		$c = jQuery(this);
		$start='';
		if(($c.data('gid')==1||$c.data('gid')==2||$c.data('gid')==3)&&$c.data('times')<24){
			for(var i=0;i<$c.data('days');i++){
				$t=jQuery('#start_'+$c.data('gid')+'_'+i).val();
				$ta=$t.split(' ');
				$ha=$ta[0].split(':');
				$h=eval($ha[0])%12+($ta[1]=='AM'||$ta[1]=='am'?0:12);
				$start+=($start==''?'.':';')+$h+':'+$ha[1];
			}
		}
		$this.data('plans',$this.data('plans')+($this.data('plans')==''?'':',')+$c.data('id')+($start==''?'':$start));
	});
        //console.log($this.data('plans'));
		jQuery.ajax({
			type: 'POST',
			dataType: 'json',
			url: '/v1/api/saveCreditPlanPayment',
			data:{
				'userid' : $this.data('userid'),
				'plans' : $this.data('plans'),
				'amount' : $this.data('amount'),
				'method' : jQuery('input[name="method"]:checked').val(),
				'adid' : jQuery('#adid').val()//$this.data('adid'),
			},
			success: function( res )
			{
				location.reload();
			},
			error: function( err )
			{
			}
		});
		return;
		//
		if($this.data('type')=="adsperclick"){
			totalPrice = jQuery('input[name="ads_price"]').val();
			var spotlight = 0,
				topos = 0,
				sidebar = 0;
			if ($this.find('#spotlightcmp').is(':checked')){
                spotlight = $this.find('#spotlightcmp').data('price');
			}
            if ($this.find('#camp-for-search').is(':checked')){
                topos = $this.find('#camp-for-search').data('price');
            }
            if ($this.find('#for-sidebar-camp').is(':checked')){
                sidebar = $this.find('#for-sidebar-camp').data('price');
            }
            var minbujet = spotlight+topos+sidebar;
            if (totalPrice <= minbujet){
            	e.preventDefault();
            	e.stopPropagation();
            	alert($this.data('string')+' '+minbujet);
            	return false;
			}
		}else{
			totalPrice = jQuery('input[name="ads_price"]').val();
		}
        
        method = jQuery('input[name="method"]:checked').val();
        currency = $this.find('input[name="currency"]').val();
        listing_id = jQuery('input[name=lp_ads_for_listing]').val();
        listing_name = jQuery('input[name=lp_ads_title]').val();
        taxRate = $this.find('input[name="taxprice"]').val();

        if (listing_id==='' || method==='' ) {
            alert(jQuery('input#ad-blank-errorMsg').val());
            e.preventDefault();
        }
        else if(method==='stripe'){
			
            totalPrice = parseFloat(totalPrice)*100;
            totalPrice = parseFloat(totalPrice).toFixed();

            handler.open({
                name: listing_name,
                description: "",
                zipCode: true,
                amount: totalPrice,
                currency: currency
            });
            e.preventDefault();
        }
        else if(method==='2checkout'){
            var packages = [];
            jQuery('input.checked_class[type="checkbox"]:checked').each(function () {
                packages.push($this.data('package'));
            });
            jQuery('#myCCForm #tprice').val(totalPrice);
            jQuery('#myCCForm #listing_id_2check').val(listing_id);
            jQuery('#myCCForm #packages').val(packages);
            jQuery('#myCCForm #taxprice').val($this.find('input[name="taxprice"]').val());
            jQuery("button.lp-2checkout-modal2").trigger('click');
            e.preventDefault();
        }

    });
});
/* end by zaheer on 30 march */
jQuery(window).load(function() {
	jQuery('.lp-suggested-search').on('click', function(event) {
		jQuery("#input-dropdown").niceScroll({
			cursorcolor:"#363F48",
			cursoropacitymax: 1,
			boxzoom:false,
			cursorwidth: "10px",
			cursorborderradius: "0px",
			cursorborder: "0px solid #fff",
			touchbehavior:true,
			preventmultitouchscrolling: false,
			cursordragontouch: true,	
			background: "#f7f7f7",
			horizrailenabled: false,
			autohidemode: false,
			zindex : "999999",
		});
	});
	
	
	// Notices Box Script
	jQuery('.notice a.close').on('click', function(event) {
		event.preventDefault();
		jQuery(this).parent('.notice').fadeOut('slow');
	});

	jQuery('.lp-header-full-width .lp-menu-bar .header-filter, .lp-menu-bar .header-filter.pos-relative.form-group').css('display', 'block');

	var logoH = jQuery('.lp-logo').outerHeight();
	var acHgt = jQuery('.header-right-panel.clearfix');
	var a = parseInt(logoH + 10);
	var b = jQuery('.header-right-panel').height();
	var c = a - b;
	var d = c/2;
	//alert(b);
	acHgt.css({ 'padding-top': d+'px' });

	jQuery('.rating-symbol:nth-child(1)').hover(function() {
		jQuery('.review.angry').css({
			'opacity': '1',
			'visibility': 'visible',
		});
	}, function() {
		jQuery('.review.angry').css({
			'opacity': '0',
			'visibility': 'hidden',
		});
	});
	jQuery('.rating-symbol:nth-child(2)').hover(function() {
		jQuery('.review.cry').css({
			'opacity': '1',
			'visibility': 'visible',
		});
	}, function() {
		jQuery('.review.cry').css({
			'opacity': '0',
			'visibility': 'hidden',
		});
	});
	jQuery('.rating-symbol:nth-child(3)').hover(function() {
		jQuery('.review.sleeping').css({
			'opacity': '1',
			'visibility': 'visible',
		});
	}, function() {
		jQuery('.review.sleeping').css({
			'opacity': '0',
			'visibility': 'hidden',
		});
	});
	jQuery('.rating-symbol:nth-child(4)').hover(function() {
		jQuery('.review.smily').css({
			'opacity': '1',
			'visibility': 'visible',
		});
	}, function() {
		jQuery('.review.smily').css({
			'opacity': '0',
			'visibility': 'hidden',
		});
	});
	jQuery('.rating-symbol:nth-child(5)').hover(function() {
		jQuery('.review.cool').css({
			'opacity': '1',
			'visibility': 'visible',
		});
	}, function() {
		jQuery('.review.cool').css({
			'opacity': '0',
			'visibility': 'hidden',
		});
	});
	
	

	var rtngSym = jQuery('.rating-symbol');
	var rtngTip = jQuery('input.rating-tooltip');
	
	
	jQuery('.rating-symbol:first-of-type').hover(function() {
		jQuery(this).closest('span').addClass('active-stars-wrap');
		jQuery('.active-stars-wrap .rating-symbol:first-of-type .rating-symbol-foreground span').css('color', '#de9147');
	}, function() { jQuery('.active-stars-wrap').removeClass('active-stars-wrap'); });
	jQuery('.rating-symbol:nth-of-type(2)').hover(function() {
        jQuery(this).closest('span').addClass('active-stars-wrap');
		jQuery('.active-stars-wrap .rating-symbol:first-of-type .rating-symbol-foreground span').css('color', '#de9147');
		jQuery('.active-stars-wrap .rating-symbol:nth-of-type(2) .rating-symbol-foreground span').css('color', '#de9147');
	}, function() { jQuery('.active-stars-wrap').removeClass('active-stars-wrap'); });
	jQuery('.rating-symbol:nth-of-type(3)').hover(function() {
        jQuery(this).closest('span').addClass('active-stars-wrap');
		jQuery('.active-stars-wrap .rating-symbol:first-of-type .rating-symbol-foreground span').css('color', '#dec435');
		jQuery('.active-stars-wrap .rating-symbol:nth-of-type(2) .rating-symbol-foreground span').css('color', '#dec435');
		jQuery('.active-stars-wrap .rating-symbol:nth-of-type(3) .rating-symbol-foreground span').css('color', '#dec435');
	}, function() { jQuery('.active-stars-wrap').removeClass('active-stars-wrap'); });
	jQuery('.rating-symbol:nth-of-type(4)').hover(function() {
        jQuery(this).closest('span').addClass('active-stars-wrap');
		jQuery('.active-stars-wrap .rating-symbol:first-of-type .rating-symbol-foreground span').css('color', '#c5de35');
		jQuery('.active-stars-wrap .rating-symbol:nth-of-type(2) .rating-symbol-foreground span').css('color', '#c5de35');
		jQuery('.active-stars-wrap .rating-symbol:nth-of-type(3) .rating-symbol-foreground span').css('color', '#c5de35');
		jQuery('.active-stars-wrap .rating-symbol:nth-of-type(4) .rating-symbol-foreground span').css('color', '#c5de35');
	}, function() { jQuery('.active-stars-wrap').removeClass('active-stars-wrap'); });
	jQuery('.rating-symbol:nth-of-type(5)').hover(function() {
        jQuery(this).closest('span').addClass('active-stars-wrap');
		jQuery('.active-stars-wrap .rating-symbol:first-of-type .rating-symbol-foreground span').css('color', '#73cf42');
		jQuery('.active-stars-wrap .rating-symbol:nth-of-type(2) .rating-symbol-foreground span').css('color', '#73cf42');
		jQuery('.active-stars-wrap .rating-symbol:nth-of-type(3) .rating-symbol-foreground span').css('color', '#73cf42');
		jQuery('.active-stars-wrap .rating-symbol:nth-of-type(4) .rating-symbol-foreground span').css('color', '#73cf42');
		jQuery('.active-stars-wrap .rating-symbol:nth-of-type(5) .rating-symbol-foreground span').css('color', '#73cf42');
	}, function() { jQuery('.active-stars-wrap').removeClass('active-stars-wrap'); });
	
	
	
	rtngSym.on('click', function(event) {
		event.preventDefault();
		var thsVal 	= jQuery('input.rating-tooltip').val();

		//alert(thsVal);
		if (thsVal == 1) {
			jQuery('.review.angry').addClass('visible');
			jQuery('.rating-symbol:first-of-type').addClass('angry');
			jQuery('.rating-symbol').removeClass('cry');
			jQuery('.rating-symbol').removeClass('sleeping');
			jQuery('.rating-symbol').removeClass('smily');
			jQuery('.rating-symbol').removeClass('cool');
		}else{
			jQuery('.review.angry').removeClass('visible');
		};

		if (thsVal == 2) {
			jQuery('.review.cry').addClass('visible');
			jQuery('.rating-symbol:first-of-type').addClass('cry');
			jQuery('.rating-symbol:nth-of-type(2)').addClass('cry');
			jQuery('.rating-symbol').removeClass('angry');
			jQuery('.rating-symbol').removeClass('sleeping');
			jQuery('.rating-symbol').removeClass('smily');
			jQuery('.rating-symbol').removeClass('cool');
		}else{
			jQuery('.review.cry').removeClass('visible');
		};

		if (thsVal == 3) {
			jQuery('.review.sleeping').addClass('visible');
			jQuery('.rating-symbol:first-of-type').addClass('sleeping');
			jQuery('.rating-symbol:nth-of-type(2)').addClass('sleeping');
			jQuery('.rating-symbol:nth-of-type(3)').addClass('sleeping');
			jQuery('.rating-symbol').removeClass('angry');
			jQuery('.rating-symbol').removeClass('cry');
			jQuery('.rating-symbol').removeClass('smily');
			jQuery('.rating-symbol').removeClass('cool');
		}else{
			jQuery('.review.sleeping').removeClass('visible');
		};

		if (thsVal == 4) {
			jQuery('.review.smily').addClass('visible');
			jQuery('.rating-symbol:first-of-type').addClass('smily');
			jQuery('.rating-symbol:nth-of-type(2)').addClass('smily');
			jQuery('.rating-symbol:nth-of-type(3)').addClass('smily');
			jQuery('.rating-symbol:nth-of-type(4)').addClass('smily');
			jQuery('.rating-symbol').removeClass('angry');
			jQuery('.rating-symbol').removeClass('cry');
			jQuery('.rating-symbol').removeClass('sleeping');
			jQuery('.rating-symbol').removeClass('cool');
		}else{
			jQuery('.review.smily').removeClass('visible');
		};

		if (thsVal == 5) {
			jQuery('.review.cool').addClass('visible');
			jQuery('.rating-symbol:first-of-type').addClass('cool');
			jQuery('.rating-symbol:nth-of-type(2)').addClass('cool');
			jQuery('.rating-symbol:nth-of-type(3)').addClass('cool');
			jQuery('.rating-symbol:nth-of-type(4)').addClass('cool');
			jQuery('.rating-symbol:nth-of-type(5)').addClass('cool');
			jQuery('.rating-symbol').removeClass('angry');
			jQuery('.rating-symbol').removeClass('cry');
			jQuery('.rating-symbol').removeClass('sleeping');
			jQuery('.rating-symbol').removeClass('smily');
		}else{
			jQuery('.review.cool').removeClass('visible');
		};
		
		var CheckMultiRatingState	=	jQuery('#rewies_form').data('multi-rating');
		var ratingSumTotal	=	0;
		if( CheckMultiRatingState == 1 )
		{
			var activeRatingLength	=	jQuery('.lp-multi-rating-val').length;
            jQuery('.lp-multi-rating-val').each(function (index) {
                ratingSumTotal += Number(jQuery(this).val());
            })
			var activeRatingClass	=	Math.round(ratingSumTotal/activeRatingLength);

            jQuery('.lp-review-stars').removeClass(function (index, css) {
                return (css.match (/\bactive-rating-avg\S+/g) || []).join(' ');
            });
            jQuery('.lp-review-stars').addClass('active-rating-avg'+activeRatingClass);

            jQuery('.lp-review-stars i.fa:nth-child('+ Number(activeRatingClass+1) +')').removeClass('fa-star-o').addClass('fa-star');
            jQuery('.lp-review-stars i.fa:nth-child('+ Number(activeRatingClass+1) +')').prevAll('.fa-star-o').removeClass('fa-star-o').addClass('fa-star');
            jQuery('.lp-review-stars i.fa:nth-child('+ Number(activeRatingClass+1) +')').nextAll('.fa-star').removeClass('fa-star-o').addClass('fa-star-o');

		}
	});
});
jQuery(document).ready(function(){
	'use-strict';
	// Disable next button
	var checkdInput = jQuery('.checkboxx input.checked_class');
	checkdInput.on('change', function(event) {
		event.preventDefault();
		if (checkdInput.is(':checked')) {
			jQuery('a#lp-next').css('display', 'block');
			jQuery('a#lp-next').removeClass('hide');
			jQuery('span.show').removeClass('show');
			jQuery('.promotional-section > .lp-face.lp-pay-options.lp-dash-sec > span').addClass('hide');
		}else {
			jQuery('a#lp-next').addClass('hide');
			jQuery('.promotional-section > .lp-face.lp-pay-options.lp-dash-sec > span').addClass('show');
		};
	});

	var rdoInput = jQuery('.lp-method-wrap input.radio_checked');
	rdoInput.on('change', function(event) {
		event.preventDefault();
		if (rdoInput.is(':checked')) {
			jQuery('input.lp-next2.promotebtn').css('display', 'block');
			jQuery('input.lp-next2.promotebtn').removeClass('hide');
			jQuery('.promotional-section span.proceed-btn').removeClass('show');
			jQuery('.promotional-section span.proceed-btn').addClass('hide');
		}else {
			jQuery('input.lp-next2.promotebtn').addClass('hide');
			jQuery('.promotional-section span.proceed-btn').addClass('show');
		};
		
	});
	
	//Dashboard promotional script
	jQuery('.promotional-section a.lp-submit-btn').on('click', function(event) {
		event.preventDefault();
		jQuery(this).parent('.promotional-section').slideUp(500);
		jQuery(this).parent('.promotional-section').next('.lp-card > form#ads_promotion').slideDown(1000);
	});

	// Dashboard Left Panel Script
	
	var dash = jQuery('.dashboard-tabs.lp-main-tabs.text-center > ul > li.dropdown > a');
		
	var dashli = jQuery('.dashboard-tabs.lp-main-tabs.text-center > ul > li.dropdown');
		
	var dashul = jQuery('.dashboard-tabs.lp-main-tabs.text-center > ul > li.dropdown > ul');

		
	dash.on('click', function(event) {
			
	event.preventDefault();
			
	if(dashli.hasClass('opened')) {
		
		jQuery( dashli ).removeClass('opened');
			
		jQuery(dashul).removeClass('opened');
				
		jQuery(this).parent('li').addClass('opened');
				
		jQuery(this).next('ul').addClass('opened');
			
	} else {

		//if(dashli.hasClass('dropdown'))
		
		jQuery(dashul).removeClass('opened');
			
		jQuery( dashli ).removeClass('opened');
			
		jQuery(this).parent('li').addClass('opened');
			
		jQuery(this).next('ul').addClass('opened');

		
		};
		
	});

	
	// Review Script
	jQuery('h3#reply-title').on('click', function(event) {
		event.preventDefault();
		var thiss = jQuery(this);
		if (thiss.hasClass('active')) {
			jQuery(this).removeClass('active');
			jQuery(this).next('#rewies_form').slideUp();
			jQuery(this).next('#rewies_formm').slideUp();
		}else{
			jQuery(this).addClass('active');
			jQuery(this).next('#rewies_form').slideDown();
			jQuery(this).next('#rewies_formm').slideDown();
		};
		//jQuery(this).next('#rewies_form').toggleClass('open_review_form');
	});
	jQuery('#clicktoreview').on('click', function(event) {
		event.preventDefault();
		
		var thiss = jQuery('#reply-title');
			thiss.addClass('active');
			thiss.next('#rewies_form').slideDown();	
			thiss.next('#rewies_formm').slideDown();	
			jQuery('html, body').animate({
                scrollTop: jQuery('#reply-title').offset().top
            }, 2000);
	});
	
	jQuery('.leadformtrigger').on('click', function(e){
            e.preventDefault();
            jQuery('.app-view-lead-form').slideToggle(500);

    });
    jQuery('.open-lead-form-app-view').on('click', function(e){
		if(jQuery('.app-view-lead-form')[0]){
			jQuery('.app-view-lead-form').slideToggle(500);
			jQuery('html, body').animate({
				scrollTop: jQuery('.leadformtrigger').offset().top
			}, 2000);
		}

    })
	
	jQuery('#rewies_form input[type=file]').change(function(e) {
		$in = jQuery(this);
		$in.prev().prev().text($in.val());
		
	});
		// listing layout
	//jQuery('.listing-simple').addClass('listing_list_view');
	jQuery('a.grid').on('click', function(event) {
		event.preventDefault();
		jQuery('a.list').removeClass('active');
		jQuery(this).addClass('active');
		jQuery('.listing-simple').removeClass('listing_list_view');
		
        if( jQuery('#list-grid-view-v2').length != 0 && jQuery('#list-grid-view-v2').hasClass('swtch-ll') )
        {
            jQuery('#list-grid-view-v2').attr('data-layout-class', 'grid' );
        }

		if( jQuery('#content-grids').hasClass('v2-toggle') )
		{
			jQuery('.loop-switch-class').removeClass('col-md-12');
			jQuery('.loop-switch-class').addClass('col-md-6');
			jQuery('.lp-listings.active-view').removeClass('list-style');
			jQuery('.lp-listings.active-view').addClass('grid-style');
		}
		else
		{
		jQuery('.post-with-map-container').find('.lp-grid-box-contianer.card1.lp-grid-box-contianer1').removeClass('col-sm-12 list_view');
		jQuery('.post-with-map-container').find('.lp-grid-box-contianer.card1.lp-grid-box-contianer1').addClass('col-md-6 col-sm-12 grid_view2');
		
		// Listing Simple
            if( jQuery('#content-grids').hasClass('listing-with-header-filters-wrap') )
            {
                jQuery('.listing-simple').find('.lp-grid-box-contianer.card1.lp-grid-box-contianer1').removeClass('col-sm-12 list_view');
                jQuery('.listing-simple').find('.lp-grid-box-contianer.card1.lp-grid-box-contianer1').addClass('col-md-6 col-sm-12 grid_view2');
            }
            else
            {
		jQuery('.listing-simple').find('.lp-grid-box-contianer.card1.lp-grid-box-contianer1').removeClass('col-sm-12 list_view');
		jQuery('.listing-simple').find('.lp-grid-box-contianer.card1.lp-grid-box-contianer1').addClass('col-md-4 col-sm-12 grid_view2');
            }

            // Listing Sidebar
            jQuery('.listing-with-sidebar').find('.lp-grid-box-contianer.card1.lp-grid-box-contianer1').removeClass('col-sm-12 list_view');
            jQuery('.listing-with-sidebar').find('.lp-grid-box-contianer.card1.lp-grid-box-contianer1').addClass('col-md-6 col-sm-12 grid_view2');

        }

		// Listing with Map
	});
	jQuery('a.list').on('click', function(event) {
		event.preventDefault();
		jQuery('a.grid').removeClass('active');
		jQuery(this).addClass('active');
		jQuery('.listing-simple').addClass('listing_list_view');
		
        if( jQuery('#list-grid-view-v2').length != 0 && jQuery('#list-grid-view-v2').hasClass('swtch-ll') )
        {
            jQuery('#list-grid-view-v2').attr('data-layout-class', 'list' );
        }

        if( jQuery('#content-grids').hasClass('v2-toggle') )
        {
			jQuery('.loop-switch-class').removeClass('col-md-6');
			jQuery('.loop-switch-class').addClass('col-md-12');
			jQuery('.lp-listings.active-view').addClass('list-style');
			jQuery('.lp-listings.active-view').removeClass('grid-style');
        }
        else
        {
		// Listing with Map
		jQuery('.post-with-map-container').find('.lp-grid-box-contianer.card1.lp-grid-box-contianer1').removeClass('col-md-6 col-sm-6 grid_view2');
		jQuery('.post-with-map-container').find('.lp-grid-box-contianer.card1.lp-grid-box-contianer1').addClass('col-sm-12 list_view');
		
		// Listing Simple
            if( jQuery('#content-grids').hasClass('listing-with-header-filters-wrap') )
            {
                jQuery('.listing-simple').find('.lp-grid-box-contianer.card1.lp-grid-box-contianer1').removeClass('col-md-6 col-sm-6 grid_view2');
                jQuery('.listing-simple').find('.lp-grid-box-contianer.card1.lp-grid-box-contianer1').addClass('col-sm-12 list_view');
            }
            else
            {
		jQuery('.listing-simple').find('.lp-grid-box-contianer.card1.lp-grid-box-contianer1').removeClass('col-md-4 col-sm-6 grid_view2');
		jQuery('.listing-simple').find('.lp-grid-box-contianer.card1.lp-grid-box-contianer1').addClass('col-sm-12 list_view');
            }

            jQuery('.listing-with-sidebar').find('.lp-grid-box-contianer.card1.lp-grid-box-contianer1').removeClass('col-md-6 col-sm-6 grid_view3');
            jQuery('.listing-with-sidebar').find('.lp-grid-box-contianer.card1.lp-grid-box-contianer1').addClass('col-sm-12 list_view');
        }

	});

//============================================ Harry Code ==================================================//
	// Open Hours Script
	jQuery('a.show-all-timings').on('click', function(event) {
		event.preventDefault();
		jQuery(this).toggleClass('opened');
		jQuery(this).next('ul.hidding-timings').slideToggle(400);
	});
	
	// shebi Script
	jQuery( ".detail-page2-tab-content .review-form h3" ).removeAttr( "id" );
	
	jQuery('.listing-app-view .listing-app-view-bar .pricy-form-group #lp-find-near-me-outer ul > li > a').click(function() {
		jQuery(this).toggleClass('margin-right-0 lp-remove-border');
	});
	
	
	
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});

/* from sheibi */
	
if(jQuery('body').hasClass('home') || jQuery('body').hasClass('app-view-home')){
   jQuery('.listing-app-view.home .map-view-list-container2,.listing-app-view.app-view-home .map-view-list-container2').slick({
    centerMode: false,
    centerPadding: '0px',
    infinite: true,
    accesibility: false,
    draggable: true,
    swipe: true,
    touchMove: false,
    autoplaySpeed: 1400,
    speed: 100,
    slidesToShow: 2,
    dots: true, 
    arrows: false
  });
   
    jQuery('.listing-app-view.home .lp-location-slider,.listing-app-view.app-view-home .lp-location-slider').slick({
    centerMode: false,
    centerPadding: '0px',
    infinite: true,
    accesibility: false,
    draggable: true,
    swipe: true,
    touchMove: false,
    autoplaySpeed: 1400,
    speed: 100,
    slidesToShow: 3,
    dots: true,  
    arrows: false
  }); 
  }
  if( jQuery('.listing-category-slider4').length > 0 )
  {
      jQuery('.listing-category-slider4').slick({
          centerMode: false,
          centerPadding: '0px',
          infinite: true,
          accesibility: false,
          draggable: true,
          swipe: true,
          touchMove: false,
          autoplaySpeed: 1400,
          speed: 100,
          slidesToShow: 4,
          dots: false,
          arrows: true,
          responsive: [
              {
                  breakpoint: 768,
                  settings: {
                      arrows: false,
                      centerMode: false,
                      centerPadding: '0px',
                      slidesToShow: 4
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      arrows: false,
                      centerMode: false,
                      centerPadding: '0px',
                      slidesToShow: 1
                  }
              }
          ]
      });
  }


 jQuery('#map-view-icon2').click(function () {
   jQuery("#search-filter-attr-filter").animate({width: "toggle"}, 5);
 });

   jQuery('.listing-app-view .lp-search-toggle .user-menu').click(function(e){
           
    jQuery(".lp-user-menu").toggleClass("main");
    
  });
  
jQuery(document).mouseup(function(e){
	var container = jQuery(".lp-user-menu");
	if (!container.is(e.target) && container.has(e.target).length === 0){
		jQuery('.lp-user-menu').removeClass('main');
	}
});
 jQuery('.lp-detail-page-template-3 #clicktoreview2').on('click', function(event) {
  event.preventDefault(); 
   jQuery(".single-tabber2 ul li").removeClass('active');
   jQuery(".detail-page2-tab-content .tab-content .tab-pane").removeClass('active');
    jQuery('.single-tabber2 ul .lpreviews').addClass('active');
    jQuery('.detail-page2-tab-content .tab-content .lpreviews').addClass('active');
	
	jQuery('html, body').animate({
                scrollTop: jQuery('#review-section').offset().top
            }, 200
		);
    
  
 });
	// end shoaib Script
	
	jQuery('[data-toggle="tooltip"]').tooltip();

	// Open review reply
	jQuery('a.see_more_btn').on('click', function(event) {
		event.preventDefault();
		var $this = jQuery(this);
		if($this.hasClass('closedd')){
			$this.removeClass('closedd');
			$this.addClass('openedd');
			jQuery(this).find('i').removeClass('fa-arrow-down');
			jQuery(this).find('i').addClass('fa-arrow-up');
			
		}
		else{
			$this.removeClass('openedd');
			$this.addClass('closedd');
			jQuery(this).find('i').removeClass('fa-arrow-up');
			jQuery(this).find('i').addClass('fa-arrow-down');
			
		}
		jQuery(this).next('.review-content').slideToggle(200);		
	});
	
	
	jQuery('a.open-reply').on('click', function(event) {
		event.preventDefault();
		var $this = jQuery(this);
		if($this.hasClass('closeddd')){
			$this.removeClass('closeddd');
			$this.addClass('openeddd');
			jQuery(this).find('i').removeClass('fa-arrow-down');
			jQuery(this).find('i').addClass('fa-arrow-up');
			
		}
		else{
			$this.removeClass('openeddd');
			$this.addClass('closeddd');
			jQuery(this).find('i').removeClass('fa-arrow-up');
			jQuery(this).find('i').addClass('fa-arrow-down');
			
		}
		jQuery(this).next('.post_response').slideToggle(200);		
	});

	
	jQuery(document).ready(function(){
		jQuery('select.hours-start2').prop("disabled", true);
		jQuery('select.hours-end2').prop("disabled", true);
		jQuery(".lp-check-doubletime .enable2ndday").change(function() {
			if(this.checked) {
				jQuery('select.hours-start2').prop("disabled", false);
				jQuery('select.hours-end2').prop("disabled", false);
				jQuery('.hours-select.lp-slot2-time').slideToggle(300);
			}
			else{
				jQuery('select.hours-start2').prop("disabled", true);
				jQuery('select.hours-end2').prop("disabled", true);
				jQuery('.hours-select.lp-slot2-time').slideToggle(300);
			}
		});	
	});	
	
	

	// Remove Hours Script
	
	jQuery(document).on('click','a.remove-hours',function(event){
		event.preventDefault();
		jQuery(this).parent('.hours').remove();
	});
	// Toggle Script for Currency area
	jQuery('a.toggle-currencey-area').on('click', function(event) {
		event.preventDefault();
		jQuery(this).next('.currency-area').slideToggle(400);
		jQuery(this).toggleClass('active');
	});
		// Magnific Popup 
	jQuery('.review-img-slider').magnificPopup({
		delegate: 'a',
      	type: 'image',
      	tLoading: 'Loading image #%curr%...',
      	mainClass: 'mfp-img-mobile',
      	gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      	},
      	image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
          		return item.el.attr('title') + '<small>by Listingpro team</small>';
            }
      	}
			

	});
	
	jQuery(document).ready(function(){
		jQuery(".fulldayopen").change(function() {
			if(this.checked) {
				jQuery('select.hours-start').prop("disabled", true);
				jQuery('select.hours-end').prop("disabled", true);
				jQuery('select.hours-start2').prop("disabled", true);
				jQuery('select.hours-end2').prop("disabled", true);
			}
			else{
				jQuery('select.hours-start').prop("disabled", false);
				jQuery('select.hours-end').prop("disabled", false);
				jQuery('select.hours-start2').prop("disabled", false);
				jQuery('select.hours-end2').prop("disabled", false);
			}
		});	
	});
	
	jQuery(document).ready(function() {
		jQuery(".add-more").click(function() {
			jQuery("#lp_feature_panel").slideToggle("slow");
		});
		

		
	});
		var hdrHeight = jQuery('header.header-normal').outerHeight();

		jQuery('.top-section .absolute').css('top', hdrHeight);
		
		/*
	if(jQuery('body').is('.single-listing')){	
		if (jQuery(window).width() >= 768) { 
			// Listing Detail Gallery
			jQuery("a[rel^='prettyPhoto']").prettyPhoto({
				animation_speed:'fast',
				theme:'dark_rounded',
				slideshow:7000,
				autoplay_slideshow: true,
				social_tools: '',
				deeplinking: false,
				show_title: false,
			}); 
		}else{
            jQuery("a[rel^='prettyPhoto']").prettyPhoto({
                animation_speed:'fast',
                theme:'dark_rounded',
                slideshow:7000,
                autoplay_slideshow: true,
                social_tools: '',
                deeplinking: false,
                show_title: false,
            });
        }
	}
*/
	
	


	jQuery('a.onlineform').on('click', function(event) {
		event.preventDefault();
		jQuery(this).next('.booking-form').slideToggle(400);
		jQuery(this).toggleClass('active');
	});

	jQuery('.listing-second-view .ask-question-area > a.ask_question_popup').on('click', function(event) {
		event.preventDefault();
		jQuery(this).next('.faq-form').slideToggle(400);
	});
	
	if(jQuery('body').is('.single-listing')){
		var sliderstyle = jQuery('body').data('sliderstyle');
		
		if(sliderstyle=="style1"){
			var images = jQuery( ".listing-slide" ).data('images-num');
			var center_mode = true;
			if(images > 5 ) {
				images = 5;
				center_mode = true;
			}else {
				center_mode = false;
			}
			// Listing Detail Slider
			jQuery('.listing-slide').slick({
				centerPadding: '10px',
				slidesToShow: images,
				autoplay: true,
				draggable: false,
				autoplaySpeed: 5000,
				centerMode: center_mode,
				focusOnSelect: true,
				arrows: true,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							arrows: false,
							centerMode: false,
							centerPadding: '0px',
							slidesToShow: 5
						}
					},
					{
						breakpoint: 480,
						settings: {
							arrows: true,
							centerMode: false,
							centerPadding: '0px',
							slidesToShow: 1
						}
					}
				]
			});
		}
		else if(sliderstyle=="style2"){
			
			var images = jQuery( ".listing-slide" ).data('images-num');
			//alert(images);
			var center_mode = true;
			var variable = true;
			if(images > 3 ) {
				center_mode = false;
			} else if(images = 3) {
				//jQuery('.listing-slide img').css('height','auto');
				jQuery('.single-page-slider-container').addClass('three-imgs');
				variable = false;
			} else if(images = 2) {
				jQuery('.single-page-slider-container').addClass('new-cls');
			} else if(images = 1) {
				jQuery('.single-page-slider-container').addClass('one-img');
			} else {
				center_mode = false;
				variable = false;
			}
			
			// Listing Detail Slider
			jQuery('.listing-slide').slick({
				slidesToShow: 2,
				autoplay: true,
				draggable: false,
				autoplaySpeed: 5000,
				centerMode: true,
				focusOnSelect: true,
				variableWidth: variable,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							arrows: true,
							centerMode: false,
							centerPadding: '0px',
							//slidesToShow: 5
						}
					},
					{
						breakpoint: 480,
						settings: {
							arrows: true,
							centerMode: false,
							centerPadding: '0px',
							slidesToShow: 1
						}
					}
				]
			});

		} else if(sliderstyle=="style3"){

            var images = jQuery( ".listing-slide" ).data('images-num');
            var slidestoshow = 2;
            if (images == 1) {
                jQuery('.listing-slide img').css('width','100%');
                slidestoshow = 1;
            }else if(images == 2){
                slidestoshow = 2;
            }else if(images == 3){
                slidestoshow = 2;
            }else if(images == 4){
                slidestoshow = 3;
            }else if(images == 6){
                slidestoshow = 4;
            }else if(images == 8){
                slidestoshow = 6;
            }else if(images == 10){
                slidestoshow = 8;
            }else if(images >= 12){
                slidestoshow = 10;
            }

            // Listing Detail Slider
            jQuery('.listing-slide').slick({
                slidesToShow: 2,
                autoplay: true,
                draggable: false,
                autoplaySpeed: 5000,
                centerMode: true,
                focusOnSelect: true,
                variableWidth: true,
                adaptiveHeight: true,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: {
                            slidesToShow: slidestoshow,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: true,
                            centerMode: false,
                            centerPadding: '0px',
                            //slidesToShow: 5
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: true,
                            centerMode: false,
                            centerPadding: '0px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
	}
	
    // Listing Detail Slider
	if( jQuery( '.listing-slide2' ).length	!= 0 )
	{
        jQuery('.listing-slide2').slick({
            slidesToShow: 1,
            autoplay: false,
            draggable: false,
            autoplaySpeed: 5000,
            centerMode: true,
            centerPadding: '0px',
            focusOnSelect: true,
            variableWidth: variable,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: false,
                        centerPadding: '0px',
                        //slidesToShow: 5
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        centerPadding: '0px',
                        slidesToShow: 1
                    }
                }
            ]
        })
	}

	jQuery( ".select2" ).select2();
	
	if(jQuery('body').is('.single-listing')){	
		jQuery('.review-img-slider').slick({
	  	infinite: true,
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
		autoplay: false,
  		autoplaySpeed: 5000,
	  	arrows:true,
	  	dots:false,
	   	responsive: [
			{
		  		breakpoint: 790,
		  		settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 2
		 		}
			},
			{
			  	breakpoint: 480,
			  	settings: {
					slidesToShow: 1
			  	}
			}
	  	]
		});
		/* end  by haroon */
		
		jQuery('.post-slide').slick({
		  infinite: true,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  arrows:false,
		  dots:true,
		   responsive: [
			{
			  breakpoint: 2,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
		});
		
		//Slick One Per Slide Testimonials
		jQuery('.testimonial-slider').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 1000,
			speed: 1000,
			arrows: false,
			slidesToShow: 1
		});
	}
	// Accordion
	var icons = {
		header: "fa fa-plus",
		activeHeader: "fa fa-minus"
	};
		jQuery( "#accordion" ).accordion({
			icons: icons,
			heightStyle: "content",
		});
	jQuery( "#toggle" ).button().on('click',function() {
		if ( jQuery( "#accordion" ).accordion( "option", "icons" ) ) {
			jQuery( "#accordion" ).accordion( "option", "icons", null );
		} else {
			jQuery( "#accordion" ).accordion( "option", "icons", icons );
	}
	});
	// Popup Gallery
	jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	  disableOn: 319,
	  type: 'iframe',
	  iframe: {
	    	markup: '<div class="mfp-iframe-scaler">'+
            		'<div class="mfp-close"></div>'+
            		'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            		'</div>', 
        patterns: {
            youtube: {
	              index: 'youtube.com/', 
	              id: 'v=', 
	              src: '//www.youtube.com/embed/%id%?rel=0&autoplay=1' 
		        }
		     },
		     srcAction: 'iframe_src', 
     },
	  mainClass: 'mfp-fade',
	  removalDelay: 160,
	  preloader: false,
	  fixedContentPos: false
	});
	
	jQuery('.popup-gallery').magnificPopup({
		delegate: '.image-popup',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});
	//Boostrap Rating
	//http://dreyescat.github.io/bootstrap-rating/
	 jQuery('input.check').on('change', function () {
          alert('Rating: ' + jQuery(this).val());
        });
		if(jQuery('body').is('.single-listing')){
        jQuery('#programmatically-set').on('click' , function () {
          jQuery('#programmatically-rating').rating('rate', jQuery('#programmatically-value').val());
        });
        jQuery('#programmatically-get').on('click' , function () {
          alert(jQuery('#programmatically-rating').rating('rate'));
        });
        /*
        jQuery('.rating-tooltip-manual').rating({
          extendSymbol: function () {
            var title;
            jQuery(this).tooltip({
              container: 'body',
              placement: 'bottom',
              trigger: 'manual',
              title: function () {
                return title;
              }
            });
            jQuery(this).on('rating.rateenter', function (e, rate) {
              title = rate;
              jQuery(this).tooltip('show');
            })
            .on('rating.rateleave', function () {
              jQuery(this).tooltip('hide');
            });
          }
        });*/
        jQuery('.rating').each(function () {
          jQuery('<span class="label label-default"></span>')
            .text(jQuery(this).val() || ' ')
            .insertAfter(this);
        });
        jQuery('.rating').on('change', function () {
          jQuery(this).next('.label').text(jQuery(this).val());
        });
		}
	 // Mapbox 
	jQuery(window).load(function(){
		
		if (jQuery(this).width() < 981) {
			jQuery(".claimformtrigger").on('click' , function() {
				if(jQuery('.claimform').hasClass('claimform-open')) {
					jQuery('.claimform').removeClass("claimform-open");
					jQuery('.claimform').hide(); 
				} else { 
					jQuery(this).closest('.post-row').addClass('rowopen');
					jQuery('.claimform').addClass("claimform-open"); 
					jQuery('.claimform').show();
				}
			});
		}
		
		jQuery(window).resize(function () {
			
			if (jQuery(this).width() < 781) {
					jQuery('.mobilemap').removeAttr('id');
					jQuery('.mobilemap').removeClass('md-modal');
					jQuery('.mobilemap').removeClass('md-effect-3');
					jQuery('.mobilelink').removeClass('md-trigger');
					jQuery('.mobile-map-space .md-overlayi').removeClass('md-overlay');
					jQuery('.listing-container-right .md-overlayi').removeClass('md-overlay');
					jQuery(".mobilelink").on('click' , function() {  
						if(jQuery('.mobilemap').hasClass('map-open')) {
							jQuery('.mobilemap').removeClass("map-open"); 
							jQuery('.mobilemap .mapbilemap-content').css({"opacity":"0","margin-top":"-520px"});
							jQuery("a.mobilelink").text("View on map");
						}
						else{   
							jQuery('.mobilemap').addClass("map-open"); 
							jQuery('.mobilemap .mapbilemap-content').css({"opacity":"1","margin-top":"0px"});
							jQuery("a.mobilelink").text("Close map");
						}
				    });
					jQuery(".quickformtrigger").on('click' , function() { 
						if(jQuery('.quickform').hasClass('quickform-open')) {
							jQuery('.quickform').removeClass("quickform-open");
							jQuery('.quickform').slideUp(600); 
							
							}
						else{
							jQuery('.quickform').addClass("quickform-open"); 
							jQuery('.quickform').slideDown(600);
						}
					});
			} else {
					var headertop = jQuery('header').height();
					jQuery('.section-fixed').css('padding-top',headertop+'px');
		
			}
			  
		}).resize();//triggcurrentColorer the event manually when the page is loaded

		jQuery('.listing-sidebar-left .form-inline').fadeTo( 600 , 1);
		jQuery('.post-with-map-container .form-inline').fadeTo( 600 , 1);	
		jQuery('#menu').css('display','block');
		jQuery('.spinner').css("display","none");
		//jQuery('.single-page-slider-container').css("opacity","1");
		
			
/*
 * L.TileLayer is used for standard xyz-numbered tile layers.
 */


L.Google = L.Class.extend({
	includes: L.Mixin.Events,

	options: {
		minZoom: 0,
		maxZoom: 18,
		tileSize: 256,
		subdomains: 'abc',
		errorTileUrl: '',
		attribution: '',
		opacity: 1,
		continuousWorld: false,
		noWrap: false,
		mapOptions: {
			backgroundColor: '#dddddd'
		}
	},

	// Possible types: SATELLITE, ROADMAP, HYBRID, TERRAIN
	initialize: function(type, options) {
		L.Util.setOptions(this, options);

		this._ready = google.maps.Map != undefined;
		if (!this._ready) L.Google.asyncWait.push(this);

		this._type = type || 'SATELLITE';
	},

	onAdd: function(map, insertAtTheBottom) {
		this._map = map;
		this._insertAtTheBottom = insertAtTheBottom;

		// create a container div for tiles
		this._initContainer();
		this._initMapObject();

		// set up events
		map.on('viewreset', this._resetCallback, this);

		this._limitedUpdate = L.Util.limitExecByInterval(this._update, 150, this);
		map.on('move', this._update, this);

		map.on('zoomanim', this._handleZoomAnim, this);

		//20px instead of 1em to avoid a slight overlap with google's attribution
		map._controlCorners['bottomright'].style.marginBottom = "20px";

		this._reset();
		this._update();
	},

	onRemove: function(map) {
		this._map._container.removeChild(this._container);
		//this._container = null;

		this._map.off('viewreset', this._resetCallback, this);

		this._map.off('move', this._update, this);

		this._map.off('zoomanim', this._handleZoomAnim, this);

		map._controlCorners['bottomright'].style.marginBottom = "0em";
		//this._map.off('moveend', this._update, this);
	},

	getAttribution: function() {
		return this.options.attribution;
	},

	setOpacity: function(opacity) {
		this.options.opacity = opacity;
		if (opacity < 1) {
			L.DomUtil.setOpacity(this._container, opacity);
		}
	},

	setElementSize: function(e, size) {
		e.style.width = size.x + "px";
		e.style.height = size.y + "px";
	},

	_initContainer: function() {
		var tilePane = this._map._container,
			first = tilePane.firstChild;

		if (!this._container) {
			this._container = L.DomUtil.create('div', 'leaflet-google-layer leaflet-top leaflet-left');
			this._container.id = "_GMapContainer_" + L.Util.stamp(this);
			this._container.style.zIndex = "auto";
		}

		tilePane.insertBefore(this._container, first);

		this.setOpacity(this.options.opacity);
		this.setElementSize(this._container, this._map.getSize());
	},

	_initMapObject: function() {
		if (!this._ready) return;
		this._google_center = new google.maps.LatLng(0, 0);
		var map = new google.maps.Map(this._container, {
		    center: this._google_center,
		    zoom: 0,
		    tilt: 0,
		    mapTypeId: google.maps.MapTypeId[this._type],
		    disableDefaultUI: false,
		    keyboardShortcuts: false,
		    draggable: false,
		    disableDoubleClickZoom: true,
		    scrollwheel: false,
		    streetViewControl: true,
		    styles: this.options.mapOptions.styles,
		    backgroundColor: this.options.mapOptions.backgroundColor
		});

		var _this = this;
		this._reposition = google.maps.event.addListenerOnce(map, "center_changed",
			function() { _this.onReposition(); });
		this._google = map;

		google.maps.event.addListenerOnce(map, "idle",
			function() { _this._checkZoomLevels(); });
	},

	_checkZoomLevels: function() {
		//setting the zoom level on the Google map may result in a different zoom level than the one requested
		//(it won't go beyond the level for which they have data).
		// verify and make sure the zoom levels on both Leaflet and Google maps are consistent
		if (this._google.getZoom() !== this._map.getZoom()) {
			//zoom levels are out of sync. Set the leaflet zoom level to match the google one
			this._map.setZoom( this._google.getZoom() );
		}
	},

	_resetCallback: function(e) {
		this._reset(e.hard);
	},

	_reset: function(clearOldContainer) {
		this._initContainer();
	},

	_update: function(e) {
		if (!this._google) return;
		this._resize();

		var center = e && e.latlng ? e.latlng : this._map.getCenter();
		var _center = new google.maps.LatLng(center.lat, center.lng);

		this._google.setCenter(_center);
		this._google.setZoom(this._map.getZoom());

		this._checkZoomLevels();
		//this._google.fitBounds(google_bounds);
	},

	_resize: function() {
		var size = this._map.getSize();
		if (this._container.style.width == size.x &&
		    this._container.style.height == size.y)
			return;
		this.setElementSize(this._container, size);
		this.onReposition();
	},


	_handleZoomAnim: function (e) {
		var center = e.center;
		var _center = new google.maps.LatLng(center.lat, center.lng);

		this._google.setCenter(_center);
		this._google.setZoom(e.zoom);
	},


	onReposition: function() {
		if (!this._google) return;
		google.maps.event.trigger(this._google, "resize");
	}
});

L.Google.asyncWait = [];
L.Google.asyncInitialize = function() {
	var i;
	for (i = 0; i < L.Google.asyncWait.length; i++) {
		var o = L.Google.asyncWait[i];
		o._ready = true;
		if (o._container) {
			o._initMapObject();
			o._update();
		}
	}
	L.Google.asyncWait = [];
};



	L.HtmlIcon = L.Icon.extend({
		options: {
			/*
			html: (String) (required)
			iconAnchor: (Point)
			popupAnchor: (Point)
			*/
		},

		initialize: function(options) {
			L.Util.setOptions(this, options);
		},

		createIcon: function() {
			var div = document.createElement('div');
			div.innerHTML = this.options.html;
			if (div.classList)
				div.classList.add('leaflet-marker-icon');
			else
				div.className += ' ' + 'leaflet-marker-icon';
			return div;
		},

		createShadow: function() {
			return null;
		}
	});
		
			
                jQuery( ".all-list-map" ).on('click', function() {
					var defmaplat = jQuery('body').data('defaultmaplat');
					var defmaplong = jQuery('body').data('defaultmaplot');
					jQuery('.map-pop').empty();
					if(jQuery('#map-section').is('.map-container3')) {
						jQuery('.map-pop').html('<div class="mapSidebar" id="map"></div>');
					}else{
						jQuery('.map-pop').html('<div class="listingmap" id="map"></div>');
					}
					var map = null
					$mtoken = jQuery('#page').data("mtoken");	
                    $mtype = jQuery('#page').data("mtype");	
					$mapboxDesign = jQuery('#page').data("mstyle");
					
					if($mtoken != '' && $mtype == 'mapbox'){

                        L.mapbox.accessToken = $mtoken;
                        map = L.mapbox.map('map');
                        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                            maxZoom: 18,
                            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                            id: jQuery('#page').data("mstyle"),
                            accessToken: $mtoken
                        }).addTo(map);
						 
						var markers = new L.MarkerClusterGroup();
						initializeMap(markers);
						if(markers===undefined){}else{
							map.fitBounds(markers.getBounds());
							map.scrollWheelZoom.disable();
						}
					}else{
						
						var map = new L.Map('map', {
							minZoom: 3,							
						}).setView(new L.LatLng(defmaplat, defmaplong), 18);
						if($mtype == 'google'){
                            L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
                                maxZoom: 6,
                                subdomains:['mt0','mt1','mt2','mt3'],
                                noWrap: true,
                            });
                            var googleLayer = new L.Google('ROADMAP');						
                            map.addLayer(googleLayer);
                        }else{
                            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
                        }
						var markers = new L.MarkerClusterGroup();
						initializeMap(markers);
						if(markers===undefined){}else{
							
							map.fitBounds(markers.getBounds(), {padding: [50, 50]});
							
						}							
					}
						
						
						
						
					function initializeMap(markers) {
						markers.clearLayers();
						
						jQuery(".lp-grid-box-contianer").each(function(i){
			
							var LPtitle  = jQuery(this).data("title");
							var LPposturl  = jQuery(this).data("posturl");
							var LPlattitue  = jQuery(this).data("lattitue");
							var LPlongitute  = jQuery(this).data("longitute");
							var LPpostid  = jQuery(this).data("postid");
                            if( jQuery('.v2-map-load').length == 1 )
                            {
                                var LPaddress  = jQuery(this).find('.gaddress').text();
                                var LPimageSrc  = jQuery(this).find('.lp-listing-top-thumb').find('img').attr('src');
								var LPiconSrc  = jQuery(this).find('.cat-icon').find('img').attr('src');
								if (typeof jQuery("body").data('deficon') !== 'undefined'){
                                    LPiconSrc = jQuery("body").data('deficon');
								}
                               
                            }
                            else
                            {
							var LPaddress  = jQuery(this).find('.gaddress').text();
							var LPimageSrc  = jQuery(this).find('.lp-grid-box-thumb').find('img').attr('src');
							var LPiconSrc  = jQuery(this).find('.cat-icon').find('img').attr('src');
								if (typeof jQuery("body").data('deficon') !== 'undefined'){
                                    LPiconSrc = jQuery("body").data('deficon');
								}
                            }
							
							if(LPlattitue != '' && LPlongitute != ''){
								var LPimage = '';
								if(LPimageSrc != ''){
									LPimage = LPimageSrc;
								}
								
								var LPicon = '';
								if(LPiconSrc != ''){
									LPicon = LPiconSrc;
								}
								
								var markerLocation = new L.LatLng(LPlattitue, LPlongitute); // London

								var CustomHtmlIcon = L.HtmlIcon.extend({
									options : {
										html : "<div class='lpmap-icon-shape pin card"+LPpostid+"'><div class='lpmap-icon-contianer'><img src='"+LPicon+"' /></div></div>",
									}
								});

								if (LPimage == 'undefined') {
									LPimage = jQuery(this).find('.lp-grid-box-thumb').find('img').attr('src');
								}

								var customHtmlIcon = new CustomHtmlIcon(); 

								var marker = new L.Marker(markerLocation, {icon: customHtmlIcon}).bindPopup('<div class="map-post"><div class="map-post-thumb"><a href="'+LPposturl+'"><img src="'+LPimage+'" ></a></div><div class="map-post-des"><div class="map-post-title"><h5><a href="'+LPposturl+'">'+LPtitle+'</a></h5></div><div class="map-post-address"><p><i class="fa fa-map-marker"></i> '+LPaddress+'</p></div></div></div>').addTo(map);
								markers.addLayer(marker);
								map.addLayer(markers);
							
							}
							
						});
					};
						
					
				});
				
				jQuery(document).on('click', '.footer-btn-right.map-view-btn, .v2-map-load .v2mapwrap, .listing-app-view-bar .right-icons a, .sidemap-fixed .sidemarpInside', function(e){
					if(jQuery('#map').is('.mapSidebar')) {
						
						var defmaplat = jQuery('body').data('defaultmaplat');
						var defmaplong = jQuery('body').data('defaultmaplot');
					
						jQuery('.map-pop').empty();
						jQuery('.map-pop').html('<div class="mapSidebar" id="map"></div>');
						var map = null
						$mtoken = jQuery('#page').data("mtoken");			
						$mtype = jQuery('#page').data("mtype");			
						$mapboxDesign = jQuery('#page').data("mstyle");					
						
						if($mtoken != '' && $mtype == 'mapbox'){

                            L.mapbox.accessToken = $mtoken;
                            map = L.mapbox.map('map')
                                .setView([defmaplat, defmaplong], 2);
                            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                                maxZoom: 18,
                                id: jQuery('#page').data("mstyle"),
                                accessToken: jQuery('#page').data("mtoken")
                            }).addTo(map);
							 
							var markers = new L.MarkerClusterGroup();
							initializeMap(markers);
							map.fitBounds(markers.getBounds(), {padding: [50, 50]});
							jQuery(document).on('click','.open-map-view', function() { 
							  L.Util.requestAnimFrame(map.invalidateSize,map,!1,map._container);
							});
							
						}else{
							
							var map = new L.Map('map', {
								minZoom: 3,
							}).setView(new L.LatLng(defmaplat, defmaplong), 6);
                            if($mtype == 'google'){
                                L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
                                    maxZoom: 6,
                                    subdomains:['mt0','mt1','mt2','mt3'],
                                    noWrap: true,
                                });
                                var googleLayer = new L.Google('ROADMAP');						
                                map.addLayer(googleLayer);
                            }else{
                                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
                            }
							
							
							var markers = new L.MarkerClusterGroup();
								resmarkers = initializeMap(markers);
								//if(resmarkers!== "undefined"){
								//console.log(resmarkers);
								//if(typeof resmarkers  == 'undefined'){}
								if( resmarkers  === undefined){}
								else{
									map.fitBounds(markers.getBounds(), {padding: [50, 50]});
									map.scrollWheelZoom.enable();
									map.invalidateSize();
									map.dragging.enable();
									jQuery(document).on('click','.open-map-view', function() { 
									  L.Util.requestAnimFrame(map.invalidateSize,map,!1,map._container);
									});
								}
                            
							
						}

                        function initializeMap(markers) {

                            if( jQuery('.lp-grid-box-contianer').length !=0 ){
                                markers.clearLayers();
                                jQuery(".lp-grid-box-contianer").each(function(i){

                                    var LPtitle  = jQuery(this).data("title");
                                    var LPposturl  = jQuery(this).data("posturl");
                                    var LPlattitue  = jQuery(this).data("lattitue");
                                    var LPlongitute  = jQuery(this).data("longitute");
                                    var LPpostid  = jQuery(this).data("postid");
                                    var LPiconSrc = '';

                                    if (jQuery('.v2-map-load').length == 1) {
                                        if (jQuery('.v2-map-load').hasClass('v2_map_load_old')) {
                                            var LPaddress = jQuery(this).find('.gaddress').text();
                                            var LPimageSrc = jQuery(this).find('.lp-grid-box-thumb').find('img').attr('src');
                                            if (typeof jQuery("body").data('deficon') !== 'undefined') {
                                                // your code here
                                                LPiconSrc = jQuery("body").data('deficon');
                                            } else {
                                                LPiconSrc = jQuery(this).find('.cat-icon').find('img').attr('src');
                                            }
                                        } else {
                                            var LPaddress = jQuery(this).find('.lp-listing-location').find('a').text();
                                            var LPimageSrc = jQuery(this).find('.lp-listing-top-thumb').find('img').attr('src');

                                            if (typeof jQuery("body").data('deficon') !== 'undefined') {
                                                // your code here
                                                LPiconSrc = jQuery("body").data('deficon');
                                            } else {
                                                LPiconSrc = jQuery(this).find('.cat-icon').find('img').attr('src');
                                            }
                                        }
                                    } else if (jQuery('.lp-compact-view-outer').length > 0){
                                        var LPaddress  = jQuery(this).find('.lp_list_address').text();
                                        var LPimageSrc  = jQuery(this).find('.lp-listing-top-thumb').find('img').attr('src');
                                        var LPiconSrc  = jQuery(this).find('.cat-icon').find('img').attr('src');
                                        if (typeof jQuery("body").data('deficon') !== 'undefined'){
                                            LPiconSrc = jQuery("body").data('deficon');
                                        }
                                    } else {
                                        var LPaddress = jQuery(this).find('.gaddress').text();
                                        var LPimageSrc = jQuery(this).find('.listing-app-view-new-wrap').find('img').attr('src');
                                        if ( LPimageSrc === undefined){
                                            LPimageSrc = jQuery(this).data('feaimg');
                                        }
                                        if ( LPimageSrc === undefined){
                                            if (jQuery('.lp-grid-box-thumb .show-img').length > 0){
                                                LPimageSrc = jQuery(this).find('.lp-grid-box-thumb .show-img img').attr('src');
                                            }else {
                                                LPimageSrc = jQuery(this).find('.lp-grid-box-thumb .show img').attr('src');
                                            }
                                        }
                                        if (typeof jQuery("body").data('deficon') !== 'undefined') {
                                            // your code here
                                            LPiconSrc = jQuery("body").data('deficon');
                                        } else {
                                            LPiconSrc = jQuery(this).find('.cat-icon').find('img').attr('src');
                                        }
                                    }
                                    if(LPlattitue != '' && LPlongitute != ''){

                                        var LPimage = '';
                                        if(LPimageSrc != ''){
                                            LPimage = LPimageSrc;
                                        }

                                        var LPicon = '';
                                        if(LPiconSrc != ''){
                                            LPicon = LPiconSrc;
                                        }

                                        var markerLocation = new L.LatLng(LPlattitue, LPlongitute); // London

                                        var CustomHtmlIcon = L.HtmlIcon.extend({
                                            options : {
                                                html : "<div class='lpmap-icon-shape pin card"+LPpostid+"'><div class='lpmap-icon-contianer'><img src='"+LPicon+"' /></div></div>",
                                            }
                                        });

                                        var customHtmlIcon = new CustomHtmlIcon();

                                        var marker = new L.Marker(markerLocation, {icon: customHtmlIcon}).bindPopup('<div class="map-post"><div class="map-post-thumb"><a target="_blank" href="'+LPposturl+'"><img src="'+LPimage+'" ></a></div><div class="map-post-des"><div class="map-post-title"><h5><a target="_blank" href="'+LPposturl+'">'+LPtitle+'</a></h5></div><div class="map-post-address"><p><i class="fa fa-map-marker"></i> '+LPaddress+'</p></div></div></div>').addTo(map);
                                        markers.addLayer(marker);
                                        map.addLayer(markers);

                                    }

                                });
                                return true;
                            }
                        }
					
					}
				});
					
		 if(jQuery('#cpmap').is('.contactmap')) {
			 
			 jQuery('#cpmap').empty();
			var map = null;
			 $mtoken = jQuery('#page').data("mtoken");
             $mtype = jQuery('#page').data("mtype");	
				$siteURL = jQuery('#page').data("site-url");
				$lat = jQuery('.cp-lat').data("lat");
				$lan = jQuery('.cp-lan').data("lan");
				if($mtoken != '' && $mtype == 'mapbox'){
                    L.mapbox.accessToken = $mtoken;

                    $mapboxDesign = jQuery('#page').data("mstyle");
                    var map = L.mapbox.map('cpmap')
                        .setView([$lat,$lan], 14);
                    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                        id: jQuery('#page').data("mstyle"),
                        accessToken: jQuery('#page').data("mtoken")
                    }).addTo(map);
                    map.scrollWheelZoom.disable();

                }else{
					
				    var map = new L.Map('cpmap', '').setView(new L.LatLng($lat, $lan), 16);
					if($mtype == 'google'){	
						var googleLayer = new L.Google('ROADMAP');						
						map.addLayer(googleLayer);
                    }else{
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
                    }
						
						map.scrollWheelZoom.disable();
					}
					
					var markers = new L.MarkerClusterGroup();
					var $pinicon = jQuery('#cpmap').data('pinicon');
					if($pinicon===""){
						$pinicon = "<div class='lpmap-icon-shape pin'><div class='lpmap-icon-contianer'><img src='"+$siteURL+"wp-content/themes/listingpro/assets/images/pins/lp-logo.png'  /></div></div>";
					}
					else{
						$pinicon = "<div style='width:50px; height:50px; margin: -50px 0 0 -20px;'><img src='"+$pinicon+"'  /></div>";
					}
					
						var markerLocation = new L.LatLng($lat, $lan); // London

						var CustomHtmlIcon = L.HtmlIcon.extend({
							options : {
								html : $pinicon,
							}
						});

						var customHtmlIcon = new CustomHtmlIcon(); 

						var marker = new L.Marker(markerLocation, {icon: customHtmlIcon}).bindPopup('').addTo(map);
						markers.addLayer(marker);
						
			
			}else if(jQuery('#map').is('.singlebigpost')) {
				jQuery( ".singlebigmaptrigger" ).click(function() {
					
					$mtoken = jQuery('#page').data("mtoken");
					$siteURL = jQuery('#page').data("site-url");
                    $mtype = jQuery('#page').data("mtype");
					$lat = jQuery('.singlebigmaptrigger').data("lat");
					$lan = jQuery('.singlebigmaptrigger').data("lan");
					if($mtoken != '' && $mtype == 'mapbox'){

                        L.mapbox.accessToken = $mtoken;
                        var map = L.mapbox.map('map')
                            .setView([$lat,$lan], 14);
                        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                            id: jQuery('#page').data("mstyle"),
                            accessToken: jQuery('#page').data("mtoken")
                        }).addTo(map);
						
						var markers = new L.MarkerClusterGroup();
						
							var markerLocation = new L.LatLng($lat, $lan); // London

							var CustomHtmlIcon = L.HtmlIcon.extend({
								options : {
									html : "<div class='lpmap-icon-shape pin '><div class='lpmap-icon-contianer'><img src='"+$siteURL+"wp-content/themes/listingpro/assets/images/pins/lp-logo.png'  /></div></div>",
								}
							});

							var customHtmlIcon = new CustomHtmlIcon(); 

							var marker = new L.Marker(markerLocation, {icon: customHtmlIcon}).bindPopup('').addTo(map);
							markers.addLayer(marker);
							map.fitBounds(markers.getBounds());
						
							map.scrollWheelZoom.disable();
							map.invalidateSize();
						
						
					}else{
							var map = new L.Map('map', {center: new L.LatLng($lat,$lan), zoom: 14});
                            if($mtype == 'google'){
                                var googleLayer = new L.Google('ROADMAP');
                                map.addLayer(googleLayer);
                            }else{
                                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
                            }
							var markers = new L.MarkerClusterGroup();						
							var markerLocation = new L.LatLng($lat, $lan); // London
							var CustomHtmlIcon = L.HtmlIcon.extend({
								options : {
									html : "<div class='lpmap-icon-shape pin '><div class='lpmap-icon-contianer'><img src='"+$siteURL+"wp-content/themes/listingpro/assets/images/pins/lp-logo.png'  /></div></div>",
								}
							});

							var customHtmlIcon = new CustomHtmlIcon(); 

							var marker = new L.Marker(markerLocation, {icon: customHtmlIcon}).bindPopup('').addTo(map);
							markers.addLayer(marker);
							map.fitBounds(markers.getBounds());
						
							map.scrollWheelZoom.disable();
							map.invalidateSize();
					}
					
				});
			}

		});
				
		
	// Autocomplete
	
    jQuery.widget( "custom.combobox", {
      _create: function() {
        this.wrapper = jQuery( "<span>" )
          .addClass( "custom-combobox" )
          .insertAfter( this.element );

        this.element.hide();
        this._createAutocomplete();
        this._createShowAllButton();
      },
      _createAutocomplete: function() {
        var selected = this.element.children( ":selected" ),
          value = selected.val() ? selected.text() : "";

        this.input = jQuery( "<input>" )
          .appendTo( this.wrapper )
          .val( value )
          .attr( "title", "" )
          .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left lp-search-input location_input lp-home-locaton-input" )
          .autocomplete({
            delay: 0,
            minLength: 0,
            source: $.proxy( this, "_source" )
          })
		  .tooltip({
            tooltipClass: "ui-state-highlight"
          });

      },

      _createShowAllButton: function() {
        var input = this.input,
          wasOpen = false;

        jQuery( "<a>" )
          .attr( "tabIndex", -1 )
          .attr( "title", "Show All Items" )
          .tooltip()
          .appendTo( this.wrapper )
          .button({
            icons: {
              primary: "ui-icon-triangle-1-s"
            },
            text: false
          })
          .removeClass( "ui-corner-all" )
          .addClass( "custom-combobox-toggle ui-corner-right" )
          .mousedown(function() {
            wasOpen = input.autocomplete( "widget" ).is( ":visible" );
          })
          .on('click' , function() {
            input.focus();

            // Close if already visible
            if ( wasOpen ) {
              return;
            }

            // Pass empty string as value to search for, displaying all results
            input.autocomplete( "search", "" );
          });
      },

      _source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
        response( this.element.children( "option" ).map(function() {
          var text = jQuery( this ).text();
          if ( this.value && ( !request.term || matcher.test(text) ) )
            return {
              label: text,
              value: text,
              option: this
            };
        }) );
      },

      _removeIfInvalid: function( event, ui ) {

        // Selected an item, nothing to do
        if ( ui.item ) {
          return;
        }

        // Search for a match (case-insensitive)
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children( "option" ).each(function() {
          if ( jQuery( this ).text().toLowerCase() === valueLowerCase ) {
            this.selected = valid = true;
            return false;
          }
        });

        // Found a match, nothing to do
        if ( valid ) {
          return;
        }

        // Remove invalid value
        this.input
          .val( "" )
          .attr( "title", value + " didn't match any item" )
          .tooltip( "open" );
        this.element.val( "" );
        this._delay(function() {
          this.input.tooltip( "close" ).attr( "title", "" );
        }, 2500 );
        this.input.autocomplete( "instance" ).term = "";
      },

      _destroy: function() {
        this.wrapper.remove();
        this.element.show();
      }
    });
	
    jQuery( ".comboboxs" ).combobox();
		jQuery( "#toggle" ).on('click' , function(){
		jQuery( ".comboboxs" ).toggle();
    });	
   // jQuery( "#searchcategory" ).combobox();
		jQuery( "#toggle" ).on('click' , function(){
		jQuery( "#searchcategory" ).toggle();
    });	
    jQuery( ".ui-autocomplete" ).autocomplete({
	  appendTo: ".input-group"
	});    
	jQuery('.custom-combobox-input').autocomplete({ minLength: 0 });
	jQuery('.custom-combobox-input').on( "click", function(){
		jQuery(this).autocomplete("search", "");
	});
	
  
	// Location Placeholder
	jQuery(".location_input").attr("placeholder", "Your Location");
	jQuery(".comboboxCategory .location_input").attr("placeholder", "Food");
	jQuery(".postSubmitCat .location_input").attr("placeholder", "Chose one or more than one categories");
	
	
	jQuery(document).on('click', '.md-close', function(){	
		jQuery('.md-modal').modal('hide');
		jQuery('.md-modal').removeClass('md-show');
		jQuery('.modal-backdrop').remove();
	});
	
// Popup Data
jQuery(document).on('click', '.qickpopup', function(){
  var LPtitle  = jQuery(this).closest('.lp-grid-box-contianer').data("title");
  var LPlattitue  = jQuery(this).closest('.lp-grid-box-contianer').data("lattitue");
  var LPlongitute  = jQuery(this).closest('.lp-grid-box-contianer').data("longitute");
  var LPpostID  = jQuery(this).closest('.lp-grid-box-contianer').data("postid");

    var feaImg  =  jQuery(this).closest('.lp-grid-box-contianer').data("feaimg");

    var mapPin	=	jQuery(this).data('mappin');
        jQuery('#listing-preview-popup .md-close').hide();
        var docHeight = jQuery( document ).height();
        jQuery( "body" ).prepend( '<div id="full-overlay"></div>' );
        jQuery('#full-overlay').css('height',docHeight+'px');
        jQuery('#listing-preview-popup .popup-inner-left-padding').html('').css('min-hegiht', '300px');
        if(jQuery('#listing-preview-popup').is('.md-show')) {
        }else{
            jQuery('#listing-preview-popup').modal({
                show: 'true'
            });
            jQuery('#listing-preview-popup').addClass('md-show');
        }
        jQuery.ajax({
            url: ajax_search_term_object.ajaxurl,
            dataType: "json",
            data: {
                'action':'quick_preivew_cb',
                'LPpostID' : LPpostID,
				'lpNonce' : jQuery('#lpNonce').val()
            },
            success:function(data) {
                jQuery('#listing-preview-popup .md-close').show().children('i').css('right', '20px');
                jQuery('#listing-preview-popup .popup-inner-left-padding').html(data);
                var mapinSrc	=	'';


                mapinSrc	=	jQuery(data).find('span.cat-icon').find('img').attr('src');
                if(mapinSrc != '') {
                    mapPin	=	mapinSrc;
                }

                var markers = false;
                $mtoken = jQuery('#page').data("mtoken");
                $siteURL = jQuery('#page').data("site-url");
                $lat = LPlattitue;
                $lan = LPlongitute;
                $mapboxDesign = jQuery('#page').data("mstyle");
                $mtype = jQuery('#page').data("mtype");	
                if($mtoken != '' && $mtype == 'mapbox'){
                    L.mapbox.accessToken = $mtoken;
                    map = L.mapbox.map('quickmap'+LPpostID);
                    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                        id: jQuery('#page').data("mstyle"),
                        accessToken: jQuery('#page').data("mtoken")
                    }).addTo(map);
                }else{
                    
                    var map = new L.Map('quickmap'+LPpostID, {center: new L.LatLng($lat,$lan), zoom: 14});
                    if($mtype == 'google'){
                        var googleLayer = new L.Google('ROADMAP');
                        map.addLayer(googleLayer);
                    }else{
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
                    }
                        
                }
                map.setView([$lat,$lan], 14);
                markers = new L.MarkerClusterGroup();
                var markerLocation = new L.LatLng($lat, $lan); // London
                var CustomHtmlIcon = L.HtmlIcon.extend({
                    options : {
                        html : '<div class="lpmap-icon-shape pin"><div class="lpmap-icon-contianer"><img src="'+ mapPin +'" /></div></div>',
                    }
                });
                var customHtmlIcon = new CustomHtmlIcon();
                var marker = new L.Marker(markerLocation, {icon: customHtmlIcon}).bindPopup('').addTo(map);
                markers.addLayer(marker);
                jQuery('.md-close.widget-map-click').click(function(e){
                    jQuery('#full-overlay').remove();
                });
            },
            error: function(errorThrown){
                //alert('>>>'+errorThrown);
            }
        });
 });
	
	//href Smooth Scroll
	
	// handle links with @href started with '#' only
 	jQuery('.post-meta-right-box a.secondary-btn[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = jQuery(target);

	    jQuery('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	}); 
	var submitlink = jQuery('body').data('submitlink');
	var siteurl = jQuery('#page').data('site-url');
	var sitelogo = jQuery('#page').data('sitelogo');
	
	jQuery('#menu').mmenu({
		navbar: {
			title: ""
		},
		navbars		: {
			height 	: 3,
			content :  [ 
				'<a href="'+siteurl+'" class="userimage"><img class="icon icons8-Contacts" src="'+sitelogo+'" alt="user"></a>',					
			]
		}
	});
	var API = jQuery("#menu").data( "mmenu" );
    jQuery(".lpl-button.md-trigger, .sign-login-wrap .md-trigger,.lpl-button.app-view-popup-style").click(function() {
		API.close();
	});
	//Tags Container 
	jQuery('.chosen-select2').chosen({
		disable_search: true
	});
	jQuery('.chosen-select1').chosen({
		disable_search: true
	});
	jQuery('.chosen-select7').chosen({
		disable_search: true
	});
    jQuery('.chosen-select5').chosen({
        disable_search: true
    });
	// jQuery( ".chosen-select.chosen-select5" ).select2({minimumResultsForSearch: -1});
	
	var $tags = jQuery('#searchtags').chosen(),
		LPnewTags = function() {
                    jQuery('.LPtagsContainer').empty();
                    $tags.find(':selected').each(function(i, obj) {
                        jQuery('<div class="active-tag">' + obj.value + '<div class="remove-tag"><i class="fa fa-times"></i></div></div>').appendTo('.LPtagsContainer').on('click', function() {
                            jQuery(this).remove();
                            jQuery(obj).attr('selected', false);
                            $tags.trigger("chosen:updated");
                            jQuery('.LPtagsContainer input[value="' + obj.value + '"]').remove();
                        });

                        jQuery('<input type="hidden" name="select_tag" value="' + obj.value + '" />').appendTo('.LPtagsContainer');
                    });
                };

            $tags.on('change', LPnewTags);
	
		/* Social Share */
		var social = jQuery('.post-stat li ul.social-icons.post-socials');
		var socialOvrly = jQuery('.reviews.sbutton .md-overlay');

		jQuery('.sbutton a.reviews-quantity').on('click', function(event) { 
			event.preventDefault();
			social.fadeIn(400);

			if(socialOvrly.hasClass('hide')){
				jQuery(socialOvrly).removeClass('hide');
				jQuery(socialOvrly).addClass('show');
			}
			else{
				jQuery(socialOvrly).removeClass('show');
				jQuery(socialOvrly).addClass('hide');
			}
		});

		socialOvrly.on('click', function(event) { 
			event.preventDefault();
			social.fadeOut(400);

			if(socialOvrly.hasClass('show')){
				jQuery(socialOvrly).removeClass('show');
				jQuery(socialOvrly).addClass('hide');
			}
			else{
				jQuery(socialOvrly).removeClass('hide');
				jQuery(socialOvrly).addClass('show');
			}
		});
		
		// Reserwa Popup
		jQuery('a.make-reservation').on('click', function(event) {
			event.preventDefault();
			jQuery('.ifram-reservation').fadeIn(400);
		});
		jQuery('a.close-btn').on('click', function(event) {
			event.preventDefault();
			jQuery('.ifram-reservation').fadeOut(400);
		});

		//Menu Popup
		if ( jQuery(window).width() > 767 ) {
			//Menu Popup
			jQuery('.widget-box a.open-modal, .menu-hotel a.open-modal').on('click', function(event) {
				event.preventDefault();
				jQuery('.hotel-menu').fadeIn(400);
			});
			jQuery('a.close-menu-popup').on('click', function(event) {
				event.preventDefault();
				jQuery('.hotel-menu').fadeOut(400);
			});
		} else if(jQuery(window).width() < 767) {
			//Menu Popup
			jQuery('.widget-box a.open-modal, .menu-hotel a.open-modal').on('click', function(event) {
				event.preventDefault();
				jQuery('.hotel-menu').slideToggle(400);
			});

            jQuery('.listing-app-view .hotel-menu a.close-menu-popup').on('click', function(event) {
                event.preventDefault();
                jQuery('.hotel-menu').slideToggle(400);
            });
		}


		// Resurva Booking Switcher
		jQuery('a.switch-fields').on('click', function(event) {
			event.preventDefault();
			jQuery(this).toggleClass('active');
			jQuery('.hidden-items').fadeToggle(400);
		});

		// Dashboard Notices
		jQuery('a.dismiss').on('click', function(event) {
			event.preventDefault();
			jQuery(this).parent('.panel-dash-dismiss').slideUp(400);
		});
		
		
		
		
		/* Pins Hover */

		jQuery(document).on('mouseenter','.lp-grid-box-contianer',function() {
			var cardID  = jQuery(this).data("postid");
			var	cardclass = '.lpmap-icon-shape.card'+cardID;
			if(jQuery(cardclass).hasClass('cardHighlight')) {
				jQuery(cardclass).removeClass("cardHighlight"); 
			 }
			 else{   
				jQuery(cardclass).addClass("cardHighlight"); 
			 }
		  });
		  jQuery(document).on('mouseleave','.lp-grid-box-contianer',function() {
				var cardID  = jQuery(this).data("postid");
				var	cardclass = '.lpmap-icon-shape.card'+cardID;
				jQuery(cardclass).removeClass("cardHighlight"); 			 
		  });
		  
		  
		  
	 /* Select Category */
	 jQuery('.postsubmitSelect').on('change', function(){
		 jQuery('.feature-fields-error-container').remove();
		jQuery('.featuresDataRow').show();
		var cvalue =	jQuery(this).val() ;
		jQuery('.featuresData').css({'opacity':'0','visibility':'hidden','display':'none'});
		jQuery('.featuresDataContainer').find('.featuresData'+cvalue).css({'opacity':'1','visibility':'visible','display':'block'});
	});
	
});
jQuery(document).on('change', '.btn-file :file', function() {
  var input = jQuery(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
  input.trigger('fileselect', [numFiles, label]);
});
jQuery(document).ready(function(){
	if(jQuery('form').is('#lp-submit-formdf')) {
		var validator = new FormValidator('lp-submit-form', [
		{
			name: 'postTitle',
			display: 'Title',
			rules: 'required'
		}, {
			name: 'category',
			display: 'Category',
			rules: 'required'
		}, {
			name: 'postContent',
			display: 'Description',
			rules: 'required'
		},  {
			name: 'location',
			display: 'Location',
			rules: 'required'
		},  {
			name: 'gAddress',
			display: 'Google Address',
			rules: 'required'
		},{
			name: 'email',
			rules: 'valid_email',
			
		},{
			name: 'username',
			display: 'UserName',
			rules: 'required'
			
		},{
			name: 'policycheck',
			display: 'Terms and Conditions Check',
			rules: 'required'
			
		}], function(errors, evt) {


			var SELECTOR_ERRORS = jQuery('.error_box'),
				SELECTOR_SUCCESS = jQuery('.success_box');

			if (errors.length > 0) {
				SELECTOR_ERRORS.empty();

				for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
					SELECTOR_ERRORS.append(errors[i].message + '<br />');
				}

				SELECTOR_SUCCESS.css({ display: 'none' });
				SELECTOR_ERRORS.fadeIn(200);
			} else {
				SELECTOR_ERRORS.css({ display: 'none' });
				SELECTOR_SUCCESS.fadeIn(200);
			}

			
		});
	}	
});
var image_custom_uploader;
var $thisItem = '';

jQuery(document).on('click','.upload-author-image', function(e) {
	//e.preventDefault();
	return;

	$thisItem = jQuery(this);
	$form = jQuery('#profileupdate');

	//If the uploader object has already been created, reopen the dialog
	if (image_custom_uploader) {
	    image_custom_uploader.open();
	    return;
	}

	//Extend the wp.media object
	image_custom_uploader = wp.media.frames.file_frame = wp.media({
	    title: 'Choose Image',
	    button: {
	        text: 'Choose Image'
	    },
	    multiple: false
	});

	//When a file is selected, grab the URL and set it as the text field's value
	image_custom_uploader.on('select', function() {
	    attachment = image_custom_uploader.state().get('selection').first().toJSON();
	    var url = '';
	    url = attachment['url'];
	    var attachId = '';
	    attachId = attachment['id'];
		
	   jQuery( "img.author-avatar" ).attr({
	        src: url
	    });
	  $form.parent().parent().find( ".criteria-image-url" ).attr({
	        value: url
	    });
	    $form.parent().parent().find( ".criteria-image-id" ).attr({
	        value: attachId
	    });
	});

	//Open the uploader dialog
	image_custom_uploader.open();
});
/* update by zaheer on 25 feb  */									
jQuery(document).ready(function($){
	jQuery('#listings_checkout input[name=listing_id]').on('change', function() {
		jQuery('#listings_checkout input[name=post_id]').val(jQuery(this, '#listings_checkout').val());
	});
	jQuery('#listings_checkout input[name=plan]').on('change', function() {
		jQuery('#listings_checkout input[name=method]').val(jQuery(this, '#listings_checkout').val());
	});
	
	
	jQuery('.lp-promotebtn').on('click', function(){
		var $this = jQuery(this);
		jQuery('#ads_promotion input[name=listing_id]').val($this.data('listingnid'));
		var listtitle = $this.data('listingtitle');
		jQuery('input[name=cur_listing_title]').val(listtitle);
	});
	jQuery('#ads_promotion input[name=plan]').on('change', function() {
	jQuery('#ads_promotion input[name=method]').val(jQuery(this, '#listings_checkout').val());
	});


});
/* by zaheer on 25 feb */
	jQuery('.availableprice_options input').change(function($){
		var $total, taxrate='', taxprice, taxTotal;
		if(jQuery('span').hasClass('pricetax')){
			taxrate = jQuery('span.pricetax').data('taxprice');
		}
		$oldtotal = jQuery('#totalprice').val();
		oldTax = jQuery('input[name="taxprice"]').val();
		if (jQuery(this).is(":checked")){
			var $val = jQuery(this).val();
			$total = parseFloat($val)+parseFloat($oldtotal);
			taxprice = parseFloat((taxrate/100)*$val);
			taxTotal = parseFloat(oldTax)+parseFloat(taxprice);
			$total = $total+taxprice;
			$total = $total.toFixed(2);
			taxTotal = taxTotal.toFixed(2);
			jQuery('#totalprice').val($total);
			jQuery('.pricetotal #price').html($total);
			jQuery('input[name="lp_total_price"]').val($total);
			jQuery('input[name="taxprice"]').val(taxTotal);
		}
		else{
			var $val = jQuery(this).val();
			$total = parseFloat($oldtotal)-parseFloat($val);
			taxprice = parseFloat((taxrate/100)*$val);
			taxTotal = parseFloat(oldTax)-parseFloat(taxprice);
			$total = $total-taxprice;
			$total = $total.toFixed(2);
			taxTotal = taxTotal.toFixed(2);
			if($total>0){
				jQuery('#totalprice').val($total);
				jQuery('.pricetotal #price').html($total);
				jQuery('input[name="lp_total_price"]').val($total);
				jQuery('input[name="taxprice"]').val(taxTotal);
			}
			else{
				$total = 0.00;
				jQuery('#totalprice').val($total);
				jQuery('.pricetotal #price').html($total);
				jQuery('input[name="lp_total_price"]').val($total);
				jQuery('input[name="taxprice"]').val(taxTotal);
			}
			
		}
		
	});
/* update by zaheer on 25 feb  */
jQuery('.lp-front').on('click','.lp-frontBtn' ,function(e) {
	e.preventDefault();
	//jQuery('.lp-front').hide(200);
	jQuery('.lp-front').slideUp(500);
	jQuery('.lp-back1').slideDown(1000);
	//jQuery('.lp-back').show(500);
});
jQuery('.lp-back1').on('click','#lp-back1' ,function(e) {
	e.preventDefault();
	jQuery('.lp-back1').slideUp(500);
	jQuery('.lp-front').slideDown(1000);
});
jQuery('.lp-back1').on('click','#lp-next' ,function(e) {
	e.preventDefault();
	jQuery('.lp-back1').slideUp(500);
	jQuery('.lp-back2').slideDown(1000);
});
jQuery('.lp-back2').on('click','#lp-back2' ,function(e) {
	e.preventDefault();
	jQuery('.lp-back2').slideUp(500);
	jQuery('.lp-back1').slideDown(1000);
});
/* end update by zaheer on 25 feb  */

//dynamic model for invoices by zaheer
jQuery(document).ready(function($){
	
	jQuery('.invoice-section a.showme').click(function(ev){
		var $this = jQuery(this);
		$this.after( '<i class="lp-modal-spinn fa-li fa fa-spinner fa-spin"></i>' );
             ev.preventDefault();
             var rowid = jQuery(this).data('id');
				 reqlink = jQuery(this).data('url');
				 var invoiceFor = '';
				 invoiceFor = jQuery(this).data('lpinvoice');
				 //invoiceFor = 'dddf';
				 
				jQuery.get(reqlink+'?lp_p_id=' + rowid+'&lp_invoice=' + invoiceFor, function(html){
                 jQuery('#modal-invoice .modal-body').html('');
                 jQuery('#modal-invoice .modal-body').html(html);
                 jQuery('#modal-invoice').modal('show', {backdrop: 'static'});
				 $this.next( '.lp-modal-spinn' ).hide('');
				 $this.next( '.lp-modal-spinn' ).remove('');
             });
         });
		
});



/* print preview */
jQuery(function($) { 'use strict';
            jQuery("#modal-invoice").find('.lp-print-list').on('click', function() {
                //jQuery.print("#modal-invoice");
                /* jQuery("#modal-invoice").print({
					noPrintSelector : ".modal-footer",
				}); */
				
				var divToPrint=document.getElementById('modal-invoice');

					  var newWin=window.open('','Print-Window');

					  newWin.document.open();

					  newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

					  newWin.document.close();

					  setTimeout(function(){newWin.close();},10);
								 
				});
});

jQuery(document).ready(function($) {  
    jQuery('.googleAddressbtn').on('click', function(e) {
        var dtype = jQuery(this).data('type');
        if(dtype=="gaddress") {
            if( jQuery(this).hasClass('events-dash') )
            {
                jQuery('.events-map-wrap #inputAddresss').slideUp(300);
                jQuery('.lp-custom-lat').slideUp(300);
                jQuery('.events-map-wrap #inputAddress').slideDown();
                jQuery('.events-map-wrap .googlefulladdress').slideDown(300);
                jQuery('.events-map-wrap #latitude').attr('type', 'hidden');
                jQuery('.events-map-wrap #longitude').attr('type', 'hidden');
                jQuery(this).next('.googleAddressbtn').removeClass('active');
                jQuery(this).addClass('active');
            }
            else
            {
                jQuery('.post-submit #inputAddresss').slideUp(300);
                jQuery('.lp-custom-lat').slideUp(300);
                jQuery('.post-submit #inputAddress').slideDown();
                jQuery('.post-submit .googlefulladdress').slideDown(300);
                jQuery('.post-submit #latitude').attr('type', 'hidden');
                jQuery('.post-submit #longitude').attr('type', 'hidden');
                jQuery(this).next('.googleAddressbtn').removeClass('active');
                jQuery(this).addClass('active');
            }
        } else {
            if( jQuery(this).hasClass('events-dash') )
            {
                jQuery('.events-map-wrap #inputAddress').slideUp();
                jQuery('.events-map-wrap .googlefulladdress').slideUp(300);
                jQuery('.events-map-wrap #inputAddresss').slideDown(300);
                jQuery('.lp-custom-lat').slideDown(300);
                jQuery('.events-map-wrap #latitude').attr('type', 'text');
                jQuery('.events-map-wrap #longitude').attr('type', 'text');
                jQuery(this).prev('.googleAddressbtn').removeClass('active');
                jQuery(this).addClass('active');
            }
            else
            {
                jQuery('.post-submit #inputAddress').slideUp();
                jQuery('.post-submit .googlefulladdress').slideUp(300);
                jQuery('.post-submit #inputAddresss').slideDown(300);
                jQuery('.lp-custom-lat').slideDown(300);
                jQuery('.post-submit #latitude').attr('type', 'text');
                jQuery('.post-submit #longitude').attr('type', 'text');
                jQuery(this).prev('.googleAddressbtn').removeClass('active');
                jQuery(this).addClass('active');
            }
        }
        e.preventDefault();        
    });
});


/* ======27 may mm=========== */
jQuery(document).ready(function($) {
    jQuery('#slide-nav.navbar-inverse').after(jQuery('<div class="inverse" id="navbar-height-col"></div>'));  
    jQuery('#slide-nav.navbar-default').after(jQuery('<div id="navbar-height-col"></div>'));  
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%';
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';
    jQuery("#slide-nav").on("click", toggler, function (e) {
        var selected = $(this).hasClass('slide-active');
        jQuery('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });
        jQuery('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });
        jQuery(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });
        jQuery(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });
        jQuery(this).toggleClass('slide-active', !selected);
        jQuery('#slidemenu').toggleClass('slide-active');
        jQuery('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');
    });
    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';
    jQuery(window).on("resize", function () {
        if (jQuery(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            jQuery(selected).removeClass('slide-active');
        }
    });
	
	jQuery('.lp_price_trigger_checkout input').on('click', function($){
		var taxEnable = jQuery(this).data('taxenable');
		plantitle = jQuery(this).data('title');
		planprice = jQuery(this).data('planprice');
		taxprice = '';
		totalprice = '';
		if(taxEnable=="1"){
			taxrate = jQuery('.lp_price_trigger_checkout input').data('taxrate');
			taxprice = (taxrate/100)*planprice;
			taxprice = taxprice.toFixed(2);
			jQuery('input[name="listings_tax_price"]').attr('value', taxprice);
			totalprice = parseFloat(planprice) + parseFloat(taxprice);
			totalprice = totalprice.toFixed(2);
			jQuery('span#lp_price_plan').text(plantitle);
			jQuery('span#lp_price_plan_price').text(planprice);
			jQuery('span#lp_tax_price').text(taxprice);
			jQuery('span#lp_price_subtotal').text(totalprice);
			jQuery('input#lp_paypal_price').val(totalprice);
			jQuery('.lp_section_inner .lp_billing_total').show(400);
		}
		else{
			totalprice = parseFloat(planprice);
			jQuery('span#lp_price_plan').text(plantitle);
			jQuery('span#lp_price_plan_price').text(planprice);
			jQuery('span#lp_price_subtotal').text(totalprice);
			jQuery('input#lp_paypal_price').val(totalprice);
		}
		
	});
	
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
	
	if(jQuery('.blue-section .check_policy').is('.termpolicy')){
		jQuery("#listingsubmitBTN").prop('disabled',true);
		jQuery("#listingsubmitBTN").addClass('dissablebutton');
		jQuery('.check_policy').on('click', function(){
			if(jQuery('#policycheck').is(':checked')){
				jQuery("#listingsubmitBTN").prop('disabled',false);
				jQuery("#listingsubmitBTN").removeClass('dissablebutton');
			}
			else{
				jQuery("#listingsubmitBTN").prop('disabled',true);
				jQuery("#listingsubmitBTN").addClass('dissablebutton');
			}
		});
	}
	if(jQuery('.white-section .check_policy').is('.termpolicy')){
		jQuery("#listingsubmitBTN").prop('disabled',true);
		jQuery("#listingsubmitBTN").addClass('dissablebutton');
		jQuery('.check_policy').on('click', function(){
			if(jQuery('#policycheck').is(':checked')){
				jQuery("#listingsubmitBTN").prop('disabled',false);
				jQuery("#listingsubmitBTN").removeClass('dissablebutton');
			}
			else{
				jQuery("#listingsubmitBTN").prop('disabled',true);
				jQuery("#listingsubmitBTN").addClass('dissablebutton');
			}
		});
	}
});

jQuery( window ).ready(function() {
	
	if(jQuery('.header-container').hasClass('.lp-vedio-bg')){
		jQuery( '#lp_vedio' ).play();
	}	
	if(jQuery('input').is('.rating-tooltip')){
		
		jQuery('.rating-tooltip').rating({
		  extendSymbol: function (rate) {
			jQuery(this).tooltip({
			  container: 'body',
			  placement: 'bottom',
			  title: 'Rate ' + rate
			});
		  }
		});
	
	}
	
});

jQuery(document).ready(function($){
	
	
	if(jQuery('.lp-home-banner-contianer').is('.lp-home-banner-with-loc')){
		
		var locType = jQuery('.lp_auto_loc_container h1,p.lp-app-view2-des').data('locnmethod'); 
		
		var currentlocationswitch = '1';
		var currentlocationswitch = jQuery('#page').data('lpcurrentloconhome');
		if( currentlocationswitch == "0" ){
			locType = 'locationifoff';
		}
		
		
		var apiType = jQuery('#page').data('ipapi');
		
		if(locType=="withip"){
			if(apiType==="geo_ip_db"){
				$.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?') 
				 .done (function(location)
				 {
					 var locc = location.city;
					 if(locc == null){
						 
					 }else{
						 jQuery('.lp-dyn-city').text(location.city);
					 }
					
				 });
			}
			else if(apiType==="ip_api"){
				jQuery.get("https://ipapi.co/json", function(location) {
					var locc = location.city;
					 if(locc == null){
						 
					 }else{
						 jQuery('.lp-dyn-city').text(location.city);
					 }
				}, "json");
			}
			else{
				lpGetGpsLocName(function (lpgetcurrentcityvalue) {
					lpgpsclocation = lpgetcurrentcityvalue;
					jQuery('.lp-dyn-city').text(lpgpsclocation);
				});
			}
			
		}
		
	}


    if(jQuery('.lp-header-search-tagline').length != 0){


        var locType = jQuery('.lp_auto_loc_container .lp-header-search-tagline').data('locnmethod');
        var currentlocationswitch = '1';
        var currentlocationswitch = jQuery('#page').data('lpcurrentloconhome');
        if( currentlocationswitch == "0" ){
            locType = 'locationifoff';
        }


        var apiType = jQuery('#page').data('ipapi');

        if(locType=="withip"){
            if(apiType==="geo_ip_db"){
                $.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?')
                    .done (function(location)
                    {
                        var locc = location.city;
                        if(locc == null){

                        }else{
                            jQuery('.lp-dyn-city').text(location.city);
                        }

                    });
            }
            else if(apiType==="ip_api"){
                jQuery.get("https://ipapi.co/json", function(location) {
                    var locc = location.city;
                    if(locc == null){

                    }else{
                        jQuery('.lp-dyn-city').text(location.city);
                    }
                }, "json");
            }
            else{
                lpGetGpsLocName(function (lpgetcurrentcityvalue) {
                    lpgpsclocation = lpgetcurrentcityvalue;
                    jQuery('.lp-dyn-city').text(lpgpsclocation);
                });
            }

        }

    }

    // lp-header-search-tagline
	
});
function hexToRGB(hexStr) {
    var col = {};
    col.r = parseInt(hexStr.substr(1,2),16);
    col.g = parseInt(hexStr.substr(3,2),16);
    col.b = parseInt(hexStr.substr(5,2),16);
    return col;
}

/* for recurring stripe */
jQuery(document).ready(function(){
	var plantype = '';
	var recurringtext = '';
	var recurringhtml = '';
	var $thislisting = '';
	var $thisplan = '';
	var $recurringon = '';
	$recurringon = jQuery('form#listings_checkout').data('recurring');
	if($recurringon==="yes"){
		jQuery('#listings_checkout input[type=radio]').on('change', function($){
			if( jQuery('#listings_checkout input[name=listing_id]').is(':checked') && jQuery('#listings_checkout input[name=plan]').is(':checked') ){

				$thislisting = jQuery('#listings_checkout input[name=listing_id]:checked');
				$thisplan = jQuery('#listings_checkout input[name=plan]:checked').val();
				plantype = $thislisting.closest('.lp-user-listings').data('plantype');
				if(plantype==="Pay Per Listing"){
					
					recurringtext = $thislisting.closest('.lp-user-listings').data('recurringtext');
					recurringhtml = '<div class="checkbox"><input type="checkbox" id="listing-recurring-recurrsive" name="lp-recurring-option" value="yes"><label for="listing-recurring-recurrsive">'+recurringtext+'</label></div>';
						if($thisplan==="stripe"){
							jQuery('div.lp-recurring-button-wrap').html( recurringhtml );
						}
						else{
							jQuery('div.lp-recurring-button-wrap').html('');
						}
				}
				else{
					jQuery('div.lp-recurring-button-wrap').html('');
				}
			}
			else{
				jQuery('div.lp-recurring-button-wrap').html('');
			}
			
			
		});
	}
	
	/* for dynamic location */
	if (jQuery('input#cities').length) {
		jQuery('input#cities').cityAutocomplete();
	}
	if (jQuery('input#citiess').length) {
		jQuery('input#citiess').cityAutocomplete();
	}

    jQuery(document).on('click','#citiess', function(e) {
        var target = e.target;
        if (!jQuery(target).is('.help') ) {
            if(jQuery('input#citiess').length){
                var isseleted = jQuery('input#citiess').data('isseleted');
                if(isseleted == false){
                    jQuery('input#citiess').val('');
                }
            }
        }
    });
	
	if (jQuery('input#citiess').length) {
		jQuery('#citiess').on('input', function(){
			jQuery(this).data('isseleted', false);
		});
	}
	
})
/* for recurring stripe */
jQuery(document).ready(function($){
	jQuery('#select-plan-form .select-plan-form input[name=plans-posts]').on('click', function(){
		jQuery("a.lp_change_plan_action").hide('');
		jQuery("div.lp-action-div form").hide('');
	});
});

/* for range slider */
var nearmeunit = jQuery("#lp-find-near-me").data('nearmeunit');
if(jQuery('#distance_range').length != 0)
{
jQuery('#distance_range').bootstrapSlider({
    
    formatter: function(value) {
        return value+' ' + nearmeunit;
    },
    tooltip: 'always'
});
    
}

/* for show click on div radius */
jQuery('li.lp-tooltip-outer').on('click', function(){
	var $this = jQuery(this);
	jQuery('.lp-tooltip-div').removeClass('active');
	$this.find('.lp-tooltip-div').addClass('active');
	
});

/* for hide div on outer click to divs */
jQuery(document).mouseup(function(e) 
{
    var container = jQuery(".lp-tooltip-div");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        jQuery('.lp-tooltip-div').removeClass('active');
    }
	
	var containerr = jQuery(".lp-tooltip-div-hidden");
	if (!containerr.is(e.target) && containerr.has(e.target).length === 0) 
    {
        jQuery('.lp-tooltip-div-hidden').removeClass('active');
    }
	
	var foodmenucontainer = jQuery(".hotel-menu .inner-menu");
	if (!foodmenucontainer.is(e.target) && foodmenucontainer.has(e.target).length === 0) 
    {
		jQuery(".hotel-menu").fadeOut();
	}
	
	
});

jQuery("li.lp-tooltip-outer").hover(function() {
    var $this = jQuery(this);
    jQuery('.lp-tooltip-div').removeClass('active');
    jQuery('.lp-tooltip-div-hidden').removeClass('active');
    $this.find('.lp-tooltip-div').addClass('active');
    if($this.find('a.near-me-btn, a.near-me-btn-style-3').hasClass('active')){
        jQuery('.lp-tooltip-div-hidden').addClass('active');
    }
});

/* for first tab auto active on listing detail page style 2 */
jQuery(document).ready(function($) {
	jQuery('.lp-detail-page-template-3 #reply-title2 ul li').first().addClass('active');
	jQuery('.lp-detail-page-template-3 .detail-page2-tab-content .tab-pane').first().addClass('active');
	
	/* app view search dumm loader */
	jQuery(document).on('click', '.listing-app-view .app-view-filters .close', function(){
		
		var docHeight = jQuery( document ).height();
		jQuery( "body" ).prepend( '<div id="full-overlay"></div>' );
		jQuery('#full-overlay').css('height',docHeight+'px');
		jQuery('#full-overlay').addClass('content-loading');
		var timer = '';
		 function lpcloseloadnow(){
			jQuery('#full-overlay').remove();
			jQuery('#full-overlay').removeClass('content-loading');
			clearTimeout(timer);
		}
		timer = setTimeout(lpcloseloadnow, 2000);
        if (jQuery('div.promoted-listings div.app-view-new-ads-slider').length) {
            jQuery('div.app-view-new-ads-slider').slick({
                arrows: false,
            });
        }
        if (jQuery('div.promoted-listings div.app-view-new-ads-slider').length) {
            jQuery('div.app-view-new-ads-slider').slick({
                arrows: false,
            });
        }
	});
	
	/* multiselect for google location  */
	jQuery(document).on('click','.city-autocomplete .help', function(){
		var $thisSelected = jQuery(this).text();
		var $thisSelecteds = $thisSelected.split(",")[0];
		var $selectLocationData = '<div class="lpsinglelocselected '+$thisSelected+'">'+$thisSelected+'<i class="fa fa-times lp-removethisloc"></i><input type="hidden" name="location[]" value="'+$thisSelecteds+'"></div>';
		jQuery( $selectLocationData ).appendTo( ".lp-selected-locs" );
		
		if(jQuery('div').hasClass('lp-selected-locs')){
			jQuery("input#citiess").val('');
		}
		
	});
	
	jQuery(document).on('click','.lp-removethisloc', function(){
		jQuery(this).closest('.lpsinglelocselected').remove();
	});
	
	jQuery('.top-search-form .lp-search-btn-header .lp-search-btn').on('click', function(){
		var locvals=$.trim($("input#cities").val());
		if(locvals.length>0)
		{}else{
			jQuery('input[name="lp_s_loc"]').val('');
		}
	});
	
	
	/* when google location and user don't select the suggestions and hit enters */
	jQuery('input#cities').on('change', function(){
		jQuery('input[name=lp_s_loc]').val(jQuery(this).val());
	});
	
	jQuery(document).on('click', '.city-autocomplete .help', function(){
		$thisVal = jQuery(this).text();
		substrr = $thisVal.split(",")[0];
		jQuery('input[name=lp_s_loc]').val(substrr);
	})



	/* overlay close on cross click */
	jQuery('.md-close.widget-map-click').on('click', function(e){
		jQuery('#full-overlay').css('height','0px');
	});

	
});


function lpshowsidemap() {
		if(jQuery('#map').is('.mapSidebar')) {
			if( jQuery('.v2-map-load').length == 1 ){
                jQuery( "<div class='v2mapwrap'></div>" ).appendTo( jQuery( ".v2-map-load" ) );
                jQuery( ".v2-map-load .v2mapwrap" ).trigger('click');
			}
			jQuery( "<div class='sidemarpInside'></div>" ).appendTo( jQuery( ".sidemap-fixed" ) );
			jQuery( ".sidemap-fixed .sidemarpInside" ).trigger('click');
		}
}
if (window.attachEvent){
	window.attachEvent('onload', lpshowsidemap);
}
else if (window.addEventListener){
	window.addEventListener('load', lpshowsidemap, false);
}
else {
	document.addEventListener('load', lpshowsidemap, false);
} 

/* for 1.2.7 */
jQuery(document).ready(function($){
	if(jQuery('form#registertmp .check_policyy').is('.termpolicy')){
		jQuery("input#lp-template-registerbtn").prop('disabled',true);
		jQuery('.check_policyy').on('click', function(){
			if(jQuery('#check_policyy').is(':checked')){
				jQuery("input#lp-template-registerbtn").prop('disabled',false);
			}
			else{
				jQuery("input#lp-template-registerbtn").prop('disabled',true);
			}
		});
	}

    jQuery('.lp-qoute-butn a#freeQuoteForm').click(function (e) {
        e.preventDefault();
        jQuery('html, body').animate({
            scrollTop: jQuery('#freeQuoteFormWrap').offset().top
        }, 1000);
    });
	jQuery('.contact-right #contactMSGForm').submit(function(e){
		var uname = jQuery(this).find('input[name=uname]').val();
		var uemail = jQuery(this).find('input[name=uemail]').val();
		var umessage = jQuery(this).find('textarea[name=umessage]').val();
		
		if(uname ==''|| uname==null ){
			jQuery(this).find('input[name=uname]').addClass('lp-required-field');
			e.preventDefault();
		}
		
		
		if(uemail ==''|| uemail==null){
			jQuery(this).find('input[name=uemail]').addClass('lp-required-field');
			e.preventDefault();
		}
		
		if(lpisValidEmailAddress(uemail) ){
		}else{
			jQuery(this).find('input[name=uemail]').addClass('lp-required-field');
			e.preventDefault();
		}
		
		
		if(umessage ==''|| umessage==null ){
			jQuery(this).find('textarea[name=umessage]').addClass('lp-required-field');
			e.preventDefault();
		}
		
		
		
	});
	

	jQuery("input#lp-featuredimage").change(function (){
       lp_change_curerntImgUrl(this);
     });
	 
	/* end preview image*/


    jQuery('.app-view-header .lp-search-toggle .user-menu i, .app-view-popup-style, .event-by-going-wrap .app-view-popup-style').click(function() {
        jQuery('#app-view-login-popup').fadeIn(function () {
            jQuery('#app-view-login-popup').css({
                'top': '20%',
                'transform': 'translateY(0%)',
                'opacity': 1,
                'overflow': 'visible'
            });
        });
    });
    jQuery('.style2-popup-login .md-close').click(function(e){
        jQuery('#app-view-login-popup').fadeOut(function () {
            jQuery('#app-view-login-popup').css({
                'opacity' : 1,
                'display' : 'none'
            });
        });
    });

});

/* preview image on listing edit change url of current image */

function lp_change_curerntImgUrl(input) {
    if (input.files && input.files[0]) {
        jQuery('.submit_new_style-outer .lp-listing-featuredimage label').css({"max-width": "189px"});
        var reader = new FileReader();

        reader.onload = function (e) {
            jQuery('.lpchangeinstantimg').attr('src', e.target.result);
            jQuery('.lpchangeinstantimg').css({"width": "63px", "height": "63px"});
        }

        reader.readAsDataURL(input.files[0]);
    }
}
jQuery(window).scroll(function () {
    //if you hard code, then use console
    //.log to determine when you want the
    //nav bar to stick.

    if (jQuery(window).scrollTop() > 790) {
        jQuery('.profile-sticky-bar').addClass('navbar-fixed');
        jQuery('.profile-sticky-bar').fadeIn(500);
    }
    if (jQuery(window).scrollTop() < 790) {
        jQuery('.profile-sticky-bar').removeClass('navbar-fixed');
        jQuery('.profile-sticky-bar').fadeOut(500);
    }
});
jQuery(document).on('click', '.stickynavbar ul li a', function(e)
{
    e.preventDefault();
    var targetID	=	jQuery(this).attr('href');
    jQuery('html,body').animate(
        {
            scrollTop: jQuery(targetID).offset().top - 125
        },
        500);
});
/* for email address */
function lpisValidEmailAddress(emailAddress) {
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return pattern.test(emailAddress);
}

/* for 1.2.15 */
jQuery(document).ready(function(){
	jQuery('#lp_delete_accountpopup input.lp_assign_data').on('click', function(){
		jQuery('.lp_delte_user_confirm').removeAttr("disabled")
	});

    jQuery('.lp_privacy_policy_Wrap input.lpprivacycheckboxopt').on('click', function(){
        if (jQuery(this).closest('#claimform').hasClass('lp-form-planclaim-st')) {
            var claimuserlogin = false,
                ppolicy = false;
            if (jQuery('body').hasClass('logged-in')) {
                claimuserlogin = true;
            }
            if (jQuery('#claimform .lpprivacycheckboxopt').length > 0) {
                ppolicy = true;
            }
            claimformvalidation(claimuserlogin, ppolicy);
        } else {
            if (jQuery(this).is(':checked')) {
                jQuery(this).closest('form').find('input[type=submit]').removeAttr("disabled");
            } else {
                jQuery(this).closest('form').find('input[type=submit]').attr("disabled", "disabled");
            }
        }
    });
	
	
	
});
/* end for 1.2.15 */


/* for version 2.0 */

jQuery(document).ready(function(){

    /* for claim submit checkout form  */
    jQuery('#claim_payment_checkout').on('submit', function(e) {
        var $this = jQuery(this);
        claimerID = $this.find('input[name=claimerID]').val();
        claimPost = $this.find('input[name=claimPost]').val();
        claimPrice = $this.find('input[name=claimPrice]').val();
        currency = $this.find('input[name=currency]').val();
        claimPrice = parseFloat(claimPrice) * 100;
        claimPrice = parseFloat(claimPrice).toFixed();
        handler.open({
            name: "For Claim",
            description: "",
            zipCode: true,
            amount: claimPrice,
            currency: currency,
        });
        e.preventDefault();
    })

});


/* FOR ADDITIONAL FILTER */
/*-------------------------------------------------------------------------------------------------*/

// More Filter Tooltip

jQuery(document).ready(function() {


    jQuery('.lp_add_more_filter a').on('mouseover', function(){

        jQuery('.lp_more_filter_tooltip_outer').css("visibility","visible");

    });

    jQuery('.lp_add_more_filter a').on('mouseout', function(){

        jQuery('.lp_more_filter_tooltip_outer').css("visibility","hidden");

    });

});



// More Filter Button click and over lay on map

jQuery(document).ready(function(){

    jQuery('.lp_add_more_filter a').click( function(e) {
        e.preventDefault();
        e.stopPropagation();

        jQuery('.outer_all_page_overflow').toggle();

        // Map over lay display block
        if(jQuery('.overlay_on_map_for_filter').is(':hidden')){

            jQuery('.overlay_on_map_for_filter').css('display','block');
        }else{

            jQuery('.overlay_on_map_for_filter').css('display','none');
        }

    });

    jQuery('.outer_all_page_overflow').click( function(e) {
        //e.stopPropagation();
    });

    // Hide on click out side div
    jQuery('body').click( function() {
        //jQuery('.outer_all_page_overflow').hide();
        // Map over lay display none
        jQuery('.overlay_on_map_for_filter').css('display','none');
    });    
    
    jQuery('#filter_cancel_all').on('click', function() {
		 jQuery('.outer_all_page_overflow').slideUp();
		 jQuery('.overlay_on_map_for_filter').css('display','none');
		// Map overlay display none
		
	});

});

jQuery(document).on('click', '#filter_cancel_all', function() {
	 jQuery('.outer_all_page_overflow').slideUp();
	 jQuery('.overlay_on_map_for_filter').css('display','none');
	 jQuery('.outer_all_page_overflow').hide(500);
	// Map overlay display none
	
});




/* **************************For payment checkout script******************************* */

jQuery(document).ready(function(){
    jQuery('#listings_checkout_form input[name=listing_id]').click(function(){
        if( jQuery('#listings_checkout_form input[name=listing_id]').is(':checked') ){
            if( jQuery('#listings_checkout_form input[name=plan]').is(':checked') ){
                //both are checked
                jQuery('.lp_payment_step_next.firstStep').addClass('active');
				lp_make_checkout_step_active('firstStep');
                jQuery('.lp_payment_step_next.firstStep').prop('disabled', false);
            }else{
                jQuery('.lp-checkout-steps .firstStep').removeClass('current');
                jQuery('.lp_payment_step_next.firstStep').removeClass('active');
                jQuery('.lp_payment_step_next.firstStep').prop('disabled', true);
            }
        }

    });


    jQuery('#listings_checkout_form input[name=plan]').click(function(){
        if( jQuery('#listings_checkout_form input[name=plan]').is(':checked') ){
            jQuery('input[name=method]').val(jQuery(this).val());
            if( jQuery('#listings_checkout_form input[name=listing_id]').is(':checked') ){
                //both are checked
				jQuery('.lp_payment_step_next.firstStep').addClass('active');
				lp_make_checkout_step_active('firstStep');
                jQuery('.lp_payment_step_next.firstStep').prop('disabled', false);
            }else{
                jQuery('.lp-checkout-steps .firstStep').removeClass('current');
                jQuery('.lp_payment_step_next.firstStep').removeClass('active');
                jQuery('.lp_payment_step_next.firstStep').prop('disabled', true);
            }
        }
    });


    // add class for change border and background color lisitng section.
    jQuery('.lp-user-listings .radio-danger').click(function() {
        $this = jQuery(this);
        jQuery('.lp-user-listings').removeClass('active-checkout-listing');
        $this.closest('.lp-user-listings').addClass('active-checkout-listing');
    });
	
	/* first step */
    jQuery(document).on('click', 'button.firstStep', function(){
    	if(jQuery('.inactive-payment-mode').length) {
		    jQuery('.inactive-payment-mode').hide();
		}
        jQuery('#listings_checkout_form input[name=listing_id]').not(':checked').closest('.lp-user-listings').css('display', 'none');
        jQuery('#listings_checkout_form input[name=plan]').not(':checked').closest('.lp-method-wrap').css('display', 'none');
        lp_show_mini_subtotal();
        //update values in hidden fields
		lp_reset_mincart_checkout_form_data();
        //display block selected lisiting details.
        lp_show_recurring_switch();
        // display terms and conditions
        jQuery('.lp-new-term-style').css('display', 'block');
		jQuery('button.lp_payment_step_next.secondStep').css("display", "block");
		jQuery(this).addClass('secondStep');
		jQuery(this).removeClass('firstStep');
		if (jQuery(".terms-checkbox-container input[type=checkbox]").length){
			jQuery('.lp_payment_step_next.secondStep').prop('disabled', true);
		}else{
			lp_make_checkout_step_active('secondStep');
		}
		
		

    });
	
	/* checkbox of terms and conditions */
    jQuery(".terms-checkbox-container input[type=checkbox]").on('click', function(){
        if(jQuery(this).is(':checked')) {
            jQuery('.lp_payment_step_next.secondStep').prop('disabled', false);
            lp_make_checkout_step_active('secondStep');
            var urloftermcond = jQuery(".lpcheckouttac").attr('href');
            //window.open(urloftermcond, '_blank');
        }else{
            jQuery('.lp_payment_step_next.secondStep').prop('disabled', true);
            lp_make_checkout_step_passive('secondStep');
        }
    });
	/* second step */
    jQuery(document).on('click','button.lp_payment_step_next.secondStep', function(){
        jQuery('.lp-checkout-steps .firstStep').addClass('completed');
        jQuery('button.lp_payment_step_next.thirdStep').css("display", "block");
        jQuery(this).addClass('thirdStep');
        jQuery(this).removeClass('secondStep');
        $planprice = jQuery('input[name=plan_price]').val();

        if(jQuery('input[name="lp-recurring-option"]').is(':checked')) {
            jQuery(this).prop("type", "submit");
		} else {
            if (parseFloat($planprice) == 0) {
                /* price zero or 100% discount */
                $listings_id = jQuery('input[name=listings_id]').val();
                lp_make_this_listing_publish_withdiscount($listings_id);
            }else{
                jQuery(this).prop("type", "submit");
            }
		}
    });

	/* third step */
    jQuery(document).on('click', 'button.lp_payment_step_next.thirdStep', function(){
        jQuery('.lp-checkout-steps .secondStep').addClass('completed');
    });


    // script on click to open print section print specific div
    jQuery('#print-section-receipt').click(function(){

        var printContents = document.getElementById('printarea').innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        location.reload();

    });

    /* script for coupon switch on checkout page*/
    jQuery('input[name=lp_checkbox_coupon]').on('click', function(){
        jQuery(this).toggleClass('active');
        if(jQuery(this).hasClass('active')){
            lp_make_couponsfields_active();
        }else{
            lp_make_couponsfields_passive();
			/* reset the minicart and checkout form data */
			lp_reset_mincart_checkout_form_data();
			 jQuery('li.checkout_discount_val').remove();
        }
    });
	
	
	
	
	
	
	

    /* script for notification div */
    var $currHeight = jQuery(window).height();
    var $currDivHeight = jQuery('.lp_notification_wrapper').height();
    $currHeight =  $currHeight - $currDivHeight;
    var $currHeight = $currHeight+'px';
    jQuery('.lp_notification_wrapper').css({"top":$currHeight});

    /* script for on resize */
    jQuery( window ).resize(function() {
        var $currHeight = jQuery(window).height();
        var $currDivHeight = jQuery('.lp_notification_wrapper').height();
        $currHeight =  $currHeight - $currDivHeight;
        var $currHeight = $currHeight+'px';
        jQuery('.lp_notification_wrapper').css({"top":$currHeight});
    });
    /* cancel notice */
    
	
	/* new dashborad menu */
	jQuery("#menu-toggle").click(function(e) {
            e.preventDefault();
            if(jQuery(window).width() > 767){
            jQuery("#wrapper").toggleClass("active");
            }
    });

	jQuery('p#reply-title').on('click', function(event) {
		event.preventDefault();
		var thiss = jQuery(this);
		if (thiss.hasClass('active')) {
			jQuery(this).removeClass('active');
			jQuery(this).next('#lp-ad-click-inner').slideUp();
			jQuery(this).next('#lp-ad-click-innerm').slideUp();
		}else{
			jQuery(this).addClass('active');
			jQuery(this).next('#lp-ad-click-inner').slideDown();
			jQuery(this).next('#lp-ad-click-innerm').slideDown();
		};
		//jQuery(this).next('#rewies_form').toggleClass('open_review_form');
	});
	var TargetHeight	=	jQuery('.lp-inbox-outer').height();
	//jQuery('.user-recent-listings-inner .padding-0:last').height(TargetHeight+'px');
	jQuery('.user-recent-listings-inner .padding-0:first').height(TargetHeight+'px');
	var TargetHeight	=	jQuery('.lp-left-panel-height').height(),
	TargetHeight		=	TargetHeight+100;
	
	
	/* for header search new*/
	jQuery('#click-search-view').on('click', function(){
		$this = jQuery(this);
		jQuery('.lp-search-section-header-view').toggleClass('active-section-header-view');
    });
	

	/* see more and see less activiey on user dashboard */
	jQuery('button.lp_see_more_activities').on('click', function(){
		$this = jQuery(this);
		$thisval = $this.text();
		$thisReplace = $this.data('replacetext');
		$this.toggleClass('active');
		jQuery('div.lp_hid_this_activity').slideToggle();
		$this.text($thisReplace);
		$this.data('replacetext', $thisval);
	});
	
	/* invoices preview */
    var foldSettings = {
        easing: 'linear',
        duration: 1000,
        size: 5,
        horizFirst: false,
        /* complete: function () {
            $(this).toggleClass("active");
        } */
    }
    jQuery('a.lp_preview_this_invoice, .lp_right_preview_this_invoice').on('click', function(e){
        var $this = jQuery(this);
        $inoviceno = $this.closest('.lp-listing-outer-container').data('inoviceno');
        $date = $this.closest('.lp-listing-outer-container').data('date');
        $amount = $this.closest('.lp-listing-outer-container').data('amount');
        $amountOnly = $this.closest('.lp-listing-outer-container').data('orprice');
        $tax = $this.closest('.lp-listing-outer-container').data('tax');
        $method = $this.closest('.lp-listing-outer-container').data('method');
        $plan = $this.closest('.lp-listing-outer-container').data('plan');
        $duration = $this.closest('.lp-listing-outer-container').data('duration');
        $status = $this.closest('.lp-listing-outer-container').data('status');
		$listTitle = $this.closest('.lp-listing-outer-container').data('listtitle');
        $fullAmount=$amount;
        if($this.hasClass('lp_preview_this_invoice')){
            jQuery('div.lp_popup_preview_invoice .lppopinvoice').text($inoviceno);
            jQuery('div.lp_popup_preview_invoice .lppopdate').text($date);
            jQuery('div.lp_popup_preview_invoice .lppopsubamount').text($amount);
            jQuery('div.lp_popup_preview_invoice .lppopamount').text($amount);
            jQuery('div.lp_popup_preview_invoice .lppoptaxprice').text($tax);
            jQuery('div.lp_popup_preview_invoice .lppopplanprice').text($amountOnly);
			jQuery('div.lp_popup_preview_invoice .lppoplist').text($listTitle);

            jQuery('#lpinvoiceforpdf .lppopinvoice').text($inoviceno);
            jQuery('#lpinvoiceforpdf .lppopdate').text($date);
            jQuery('#lpinvoiceforpdf .lppopamount').text($amount);
			jQuery('#lpinvoiceforpdf .lllistname').text($listTitle);

            jQuery('#lpinvoiceforpdf .lppopamountqqq').text($tax);
            jQuery('#lpinvoiceforpdf .lppopamountwww').text($fullAmount);

            if($method=="wire"){
                $imgSrc = jQuery('p.lp-pay-with img').data('srcwire');
                jQuery('p.lp-pay-with img').attr('src', $imgSrc);
            }else if($method=="stripe"){
                $imgSrc = jQuery('p.lp-pay-with img').data('srcstripe');
                jQuery('p.lp-pay-with img').attr('src', $imgSrc);
            }else if($method=="paypal"){
                $imgSrc = jQuery('p.lp-pay-with img').data('srcpaypal');
                jQuery('p.lp-pay-with img').attr('src', $imgSrc);
            }else if($method == 'paystack') {
             	$imgSrc = jQuery('p.lp-pay-with img').data('srcpaystack');
            	jQuery('p.lp-pay-with img').attr('src', $imgSrc);
			}else if($method == 'razorpay') {
			    $imgSrc = jQuery('p.lp-pay-with img').data('srcrazorpay');
			    jQuery('p.lp-pay-with img').attr('src', $imgSrc);
            }else if($method == 'payfast') {
                $imgSrc = jQuery('p.lp-pay-with img').data('srcpayfast');
                jQuery('p.lp-pay-with img').attr('src', $imgSrc);
			}
            jQuery('div.lp_popup_preview_invoice .lppopmethod').text($method);
            jQuery('div.lp_popup_preview_invoice .lppopplan').text($plan);
            jQuery('div.lp_popup_preview_invoice .lppopduration').text($duration);

            jQuery('#lpinvoiceforpdf .lppopmethod').text($method);
            jQuery('#lpinvoiceforpdf .lppopplan').text($plan);
            jQuery('#lpinvoiceforpdf .lppopduration').text($duration);


            jQuery( "div.lp_popup_preview_invoice" ).toggle( "fold", foldSettings );
            $this.closest('.lp-listing-outer-container').find('.lp_right_preview_this_invoice input').prop('checked', true);
            e.preventDefault();
        }
        if($this.hasClass('lp_right_preview_this_invoice') || $this.hasClass('lp_preview_this_invoice')){
            jQuery('div.lp_right_preview_invoice .lppopinvoice').text($inoviceno);
            jQuery('div.lp_right_preview_invoice .lppopdate').text($date);
            jQuery('div.lp_right_preview_invoice .lppopamount').text($amount);
            jQuery('div.lp_right_preview_invoice .lppopplanprice').text($amountOnly);
            jQuery('div.lp_right_preview_invoice .lppoptaxprice').text($tax);
            jQuery('div.lp_right_preview_invoice .lppopmethod').text($method);
            jQuery('div.lp_right_preview_invoice .lppopplan').text($plan);
            jQuery('div.lp_right_preview_invoice .lppopduration').text($duration);
            jQuery('div.lp_right_preview_invoice .lppopstatus').text($status);


            jQuery('#lpinvoiceforpdf .lppopinvoice').text($inoviceno);
            jQuery('#lpinvoiceforpdf .lppopdate').text($date);
            jQuery('#lpinvoiceforpdf .lppopamount').text($amountOnly);


            jQuery('#lpinvoiceforpdf .lppopmethod').text($method);
            jQuery('#lpinvoiceforpdf .lppopplan').text($plan);
            jQuery('#lpinvoiceforpdf .lppopduration').text($duration);

        }

        //e.preventDefault();
    });
	
	/* close invoices preview */
	jQuery(document).on('click', '.close_invoice_prev', function(e){
		$this = jQuery(this);
		jQuery( "div.lp_popup_preview_invoice" ).toggle( "fold", foldSettings );
		e.preventDefault();
	});


    jQuery('button.lp-cancle-btn').on('click', function(e){
        e.preventDefault();
        jQuery('.lp-ad-step-two').fadeOut( function () {
            jQuery('.lp_camp_invoice_wrp').fadeIn();
        });
    });

    /* show preview of currnt ad place */
	jQuery('input[name="lpadsoftype[]"]').on('click', function(){
        $this = jQuery(this);
		if($this.prop('checked')&&($this.data('gid')==1||$this.data('gid')==2||$this.data('gid')==3)&&$this.data('times')<24){
			jQuery('.start-time-'+$this.data('gid')).css('display','block');	
		}else{
			jQuery('.start-time-'+$this.data('gid')).css('display','none');	
		}
		jQuery('input[name="lpadsoftype[]"]:checked').each(function(){
			if($this.data('id')!=jQuery(this).data('id')&&$this.data('gid')==jQuery(this).data('gid')){
				jQuery(this).prop('checked',false);
				jQuery('.lpcampain-'+jQuery(this).data('id')).fadeOut();
				return;
			}
			if($this.data('id')!=jQuery(this).data('id')&&$this.data('gid')!=jQuery(this).data('gid')){
				if($this.data('gid')==0&&jQuery(this).data('gid')==4||$this.data('gid')==4&&jQuery(this).data('gid')==0||
				$this.data('gid')==0&&jQuery(this).data('gid')==1||$this.data('gid')==1&&jQuery(this).data('gid')==0||
				$this.data('gid')==0&&jQuery(this).data('gid')==2||$this.data('gid')==2&&jQuery(this).data('gid')==0||
				$this.data('gid')==0&&jQuery(this).data('gid')==3||$this.data('gid')==3&&jQuery(this).data('gid')==0
				){

				}else{
					jQuery(this).prop('checked',false);
					jQuery('.lpcampain-'+jQuery(this).data('id')).fadeOut();
					return;
				}
			}
		});

        lp_make_campaign_paybutton_active();
		if($this.is(":checked")){
			//jQuery('.lpcampain-'+$this.data('id')+' .greencheck').removeClass('graycheck');
			jQuery('.lpcampain-'+$this.data('id')).fadeIn();
        }else{
			//jQuery('.lpcampain-'+$this.data('id')+' .greencheck').addClass('graycheck');
			jQuery('.lpcampain-'+$this.data('id')).fadeOut();
        }
		var total=0;

		jQuery('input[name="lpadsoftype[]"]:checked').each(function(){
			$c = jQuery(this);
			total+=$c.data('price');
		});
		jQuery('.lp-cmp-alltotal h5').text(total);
		jQuery('#lp-new-ad-compaignForm').data('amount',total);
		return;
		//
        $newprice = 0;
		$campType = lp_get_camp_type();
		if($campType=='adsperduration'){
			lp_set_camp_duration_price_in_preview(jQuery('input[name=adsduration_pd]').val());
			
		}else if($campType=='adsperclick'){
			lp_set_camp_budget_price_in_preview(jQuery('input[name=adsprice_pc]').val());
		}
        if($this.is(":checked")){
            if($this.val()=="lp_random_ads"){
                jQuery('.lp-invoices-all-stats li.spotlight span i.fa-check-circle').removeClass('lp-gray-this-ccircle');
				jQuery('.lpcampain-spotlight .greencheck').removeClass('graycheck');
            }
            if($this.val()=="lp_top_in_search_page_ads"){
                jQuery('.lp-invoices-all-stats li.searchpage span i.fa-check-circle').removeClass('lp-gray-this-ccircle');
				jQuery('.lpcampain-topsearch .greencheck').removeClass('graycheck');
            }
            if($this.val()=="lp_detail_page_ads"){
                jQuery('.lp-invoices-all-stats li.detailpage span i.fa-check-circle').removeClass('lp-gray-this-ccircle');
				jQuery('.lpcampain-sidebar .greencheck').removeClass('graycheck');
            }
        }else{
            if($this.val()=="lp_random_ads"){
                jQuery('.lp-invoices-all-stats li.spotlight span i.fa-check-circle').addClass('lp-gray-this-ccircle');
				jQuery('.lpcampain-spotlight .greencheck').addClass('graycheck');
            }
            if($this.val()=="lp_top_in_search_page_ads"){
                jQuery('.lp-invoices-all-stats li.searchpage span i.fa-check-circle').addClass('lp-gray-this-ccircle');
				jQuery('.lpcampain-topsearch .greencheck').addClass('graycheck');
            }
            if($this.val()=="lp_detail_page_ads"){
                jQuery('.lp-invoices-all-stats li.detailpage span i.fa-check-circle').addClass('lp-gray-this-ccircle');
				jQuery('.lpcampain-sidebar .greencheck').addClass('graycheck');
            }
        }
    });

    /* on type in days */
   jQuery(document).on('input',"input[name=adsduration_pd]", function(){
       jQuery(this).val(jQuery(this).val().replace(/[^\d].+/, ""));
        $thisval = jQuery(this).val();
		lp_set_camp_duration_price_in_preview($thisval);
		lp_make_campaign_paybutton_active();
		
		
    });

    jQuery(document).on('click',".lp-view-all-btn", function(){
		//location.reload();
    });


    /* exit preview */
    jQuery('button.lp-exist-preview').on('click',function(){
        jQuery('.lp_campaign_preview').hide(300);
        jQuery('.lp_selected_active_ad').hide(300);
        jQuery('.lp_campaign_invoice_pmethod').show(300);
    });

    /* click on pay now btn */
    jQuery('button.lp_campaign_paynow').on('click', function(){
        //jQuery(this).attr('type', 'submit');
        jQuery('.lp_campaign_preview').hide(300);
        //jQuery('.lp_selected_active_ad').show(300);
        jQuery('.lp_campaign_invoice_pmethod').show(300);
        jQuery(this).addClass('startpayforcampaignsss');
    });
    
	 /* campaign popup code ends */
	 
	 
	
	/* on type on ads price input */
    jQuery("input[name=adsprice_pc]").keyup(function(){
        $thisval = jQuery(this).val();
		lp_set_camp_budget_price_in_preview($thisval);
		lp_make_campaign_paybutton_active();
		
    });
	
	jQuery("input[name=adsduration_pd]").keyup(function(){
        lp_make_campaign_paybutton_active();
    });
	
	
    jQuery('.lp-search-listing-camp').on('change', function () {
        lp_make_campaign_paybutton_active();
    });
	
    jQuery('.lpadspreview').on('click', function () {
        packeg = '';
        jQuery('.lploading').fadeIn();
       clicks =  jQuery(this).attr('data-clicks');
       mode =  jQuery(this).attr('data-mode');
       budget =  jQuery(this).attr('data-budget');
       credit =  jQuery(this).attr('data-credit');
       duration =  jQuery(this).attr('data-duration');
       method =  jQuery(this).attr('data-method');
       currency =  jQuery(this).attr('data-currency');
       transid =  jQuery(this).attr('data-transid');
       packeg =  jQuery(this).attr('data-packeg0');
       packeg1 =  jQuery(this).attr('data-packeg1');
       if(packeg1){
          packeg += packeg1; 
        } 
       packeg2 =  jQuery(this).attr('data-packeg2');
        if(packeg2){
          packeg += packeg2; 
        }         
        if(mode == 'perclick'){
            jQuery('#lp-ad-click-inner').show();
            jQuery('.adsremaining').html(credit);
            jQuery('#lp-ad-click-inner').find('.lp-total-clicks-inner').find('h4').text(clicks);
           }else{
             jQuery('#lp-ad-click-inner').hide();
              jQuery('.adsremaining').html(duration);
        }
       
       jQuery('.lp-ad-all-attached-packages').html(packeg);
       jQuery('.lp-ad-payment-price').html(budget);
       jQuery('.lp-ad-payment-method').html(method);
       jQuery('.adstransid').html(transid);
       
       jQuery('.lploading').fadeOut();
        
       
    });

});


jQuery(document).ready(function() {
    jQuery('.lp-claim-plan-btn').click(function() {
		$sPlanID = jQuery('input[name=plan_id]:checked').val();
		jQuery('input[name=lp_claimed_plan]').val($sPlanID);
        jQuery('.lp-claim-plan-container').addClass('active');
        jQuery('.lp-claim-plans').addClass('active');
    });
});

jQuery(document).ready(function() {
   jQuery('.lp-confi-bottom-bar').click(function() {
       jQuery('.lp_confirmation').slideToggle(700);
       jQuery('.unhidebar-section').slideToggle(700);
   });

   jQuery('.unhidebar-section').click(function() {
       jQuery('.lp_confirmation').slideToggle(700);
       jQuery('.unhidebar-section').slideToggle(700);
   });
   // dashboard search bar click to show
   jQuery('.lp-filter-search-listing').click(function() {
       jQuery('.lp-dash-search-stats-inner').slideToggle(400);
   });
});

// remove class dashboard menu width less then 768
jQuery(window).resize(function(){
	if(jQuery(window).width()<768){
	 jQuery('.lp-dashboard-new').removeClass('active');
	}
});
/* aq on 31-7 */

/*----------------lead form customizer---*/
jQuery(document).ready(function () {
	/*-------Lead form success area remove------*/
	jQuery('.lp-cross-suces-layout').click(function() {
        jQuery('.lp-lead-success-msg-outer').fadeOut('700');
    });
	
    //lead form label color change on radio checked and unchecked
    jQuery('.lp-lead-radio-container input[type=radio]').click(function () {
        jQuery('.lp-lead-radio-container input[type=radio]:not(:checked)').parent().removeClass("active-radio");
        jQuery('.lp-lead-radio-container input[type=radio]:checked').parent().addClass("active-radio");
    });
    //lead form label color change on checkbox checked and unchecked
    jQuery('.lp-lead-check-container input[type=checkbox]').click(function () {
        jQuery('.lp-lead-check-container input[type=checkbox]:not(:checked)').parent().removeClass("active-checkbox");
        jQuery('.lp-lead-check-container input[type=checkbox]:checked').parent().addClass("active-checkbox");
    });  
    // range slide color fill on move
    jQuery('input[type="range"].lp-range-slide').change(function () {
    var val = (jQuery(this).val() - jQuery(this).attr('min')) / (jQuery(this).attr('max') - jQuery(this).attr('min'));
    jQuery(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #b3c0ce), '
                + 'color-stop(' + val + ', #eef2f4)'
                + ')'
                );
    }); 
    // time picker
	if( jQuery('.datetimepicker1').length != 0 )
	{
		var timeFormat	=	'LT';
		if( jQuery('#wp-timeformat').val() == 'H:i' )
		{
			timeFormat	=	'HH:mm';
		}

        jQuery('.datetimepicker1').datetimepicker({
            format: timeFormat,
        });
	}

    // calender picker
	if( jQuery('.datetimepicker2').length != 0 )
	{
        jQuery('.datetimepicker2').datetimepicker({
            format: 'L'
        });
	}

    // calender and time picker
	if( jQuery('.datetimepicker3').length != 0 )
	{
        jQuery('.datetimepicker3').datetimepicker();
	}

	// time picker
	if( jQuery('.datetimepicker4').length != 0 )
	{
        jQuery('.datetimepicker4').datetimepicker({
            format: 'HH',
        });
	}

});
/* on 4auguest by z */
jQuery(document).ready(function(){
    jQuery('#listings_checkout_form').on('submit', function(e){
        var $this = jQuery(this);
        var method = $this.find('input[name="plan"]:checked').val();
        if(method === 'paypal'){
            if(  jQuery('input[name="lp-recurring-option"]:checked').length > 0 && jQuery('input[name="plan_time"]').val() == '' ){
                alert('Sorry! A plan should have a duration for recurring payment');
                return false;
            }
        }
    });

    /* for checkout stripe and 2checkout */
    jQuery('#listings_checkout_form').on('submit', function(e){
        var $this = jQuery(this);

        method = $this.find('input[name="plan"]:checked').val();
        listing_id = $this.find('input[name="listing_id"]:checked').val();
        post_title = $this.find('input[name="listing_id"]:checked').data('title');
        errormsg = jQuery('input[name="errormsg"]').val();
        plan_price = jQuery('span.lp-subtotal-total-price').data('subtotal');
        currency = jQuery('input[name=currency]').val();
        if(method==='stripe'){
            if(  jQuery('input[name="lp-recurring-option"]:checked').length > 0 && jQuery('input[name="plan_time"]').val() == '' ){
                alert('Sorry! A plan should have a duration for recurring payment');
                return false;
            }else{
                plan_price = plan_price*100;
                //jQuery('#stripe-submit').trigger( "click" );
                handler.open({
                    name: post_title,
                    description: "",
                    zipCode: true,
                    amount: plan_price,
                    currency: currency,
                });
                e.preventDefault();
            }
        }
        else if(method==='2checkout'){
            plan_price = jQuery('span.lp-subtotal-total-price').data('subtotal');
            listing_id = $this.find('input[name="listing_id"]:checked').val();
            jQuery('#myCCForm input#tprice').val(plan_price);
            jQuery('#myCCForm input#listing_id').val(listing_id);
            jQuery("button.lp-2checkout-modal").trigger('click');
            e.preventDefault();
        }

    });

 jQuery('.lp_payment_methods_ads .lp-payement-images').on('click', function(e){

        $this = jQuery(this);
		lp_make_campaign_paybutton_active();

    });

    jQuery('button.lp-add-new-btn').on('click', function(){
        jQuery('.lp_camp_invoice_wrp').fadeOut(function () {
            jQuery('.lp-ad-step-two').fadeIn();
        });
    });
    
    jQuery('a.lp-all-camp-bck').on('click', function(e){
		jQuery('.lp-ad-step-two').hide(300);
        jQuery('.lp_camp_invoice_wrp').show(300);
		e.preventDefault();
    });

});
/* on 4auguest by z ends */
/* ends here */
/* =====================for mini sub-total================== */
function lp_show_mini_subtotal(){

    var $tax =jQuery('#listings_checkout_form input[name=listing_id]:checked').data('taxenable');
    var $taxRate = jQuery('#listings_checkout_form input[name=listing_id]:checked').data('taxrate');
    var $method = jQuery('#listings_checkout_form input[name=plan]:checked').val();
    var $price = jQuery('#listings_checkout_form input[name=listing_id]:checked').data('planprice');
    var $orgPrice = $price;
    var $orgPrice = parseFloat($orgPrice).toFixed(2);
    var $planID = jQuery('#listings_checkout_form input[name=listing_id]:checked').data('planid');
    var $planTime = jQuery('#listings_checkout_form input[name=listing_id]:checked').data('plantime');
    var $listingID = jQuery('#listings_checkout_form input[name=listing_id]:checked').val();
    var $lpRecurring = jQuery('#listings_checkout_form .lp-onoff-switch-checkbox .switch-checkbox-label .switch-checkbox-label input:checked').val();
    var $taxPrice = '';
    var $currencyPos = jQuery('#listings_checkout_form').data('currencypos');
    var $currencySym = jQuery('#listings_checkout_form').data('currencysymbol');
    if($tax=="1"){
        $taxPrice = ($taxRate/100)*$price;
        $price = parseFloat($price) + parseFloat($taxPrice);

        $taxPrice = parseFloat($taxPrice).toFixed(2);
    }
    $price = parseFloat($price).toFixed(2);
    jQuery('span.lp-subtotal-plan').text('');
    jQuery('span.lp-subtotal-price').text('');
    jQuery('span.lp-subtotal-taxamount').text('');
    jQuery('span.lp-subtotal-price').text('');
    jQuery('span.lp-subtotal-p-price').text('');
    jQuery('span.lp-subtotal-total-price').text('');
    jQuery('span.lp-subtotal-plan').text(jQuery('#listings_checkout_form input[name=listing_id]:checked').data('title'));
    //setting values in form
    lp_add_checkout_data_fields($listingID, $planID, $price, $lpRecurring, $method, $planTime);
    switch($currencyPos){
        case('left'):
            jQuery('span.lp-subtotal-p-price').text($currencySym+$orgPrice);
            jQuery('span.lp-subtotal-price').text($currencySym+$price);
            jQuery('span.lp-subtotal-taxamount').text($currencySym+$taxPrice);
            jQuery('span.lp-subtotal-total-price').text($currencySym+$price);
            jQuery('span.lp-subtotal-total-price').attr('data-subtotal',$price);
            break;
        case('right'):
            jQuery('span.lp-subtotal-p-price').text($orgPrice+$currencySym);
            jQuery('span.lp-subtotal-price').text($price+$currencySym);
            jQuery('span.lp-subtotal-taxamount').text($taxPrice+$currencySym);
            jQuery('span.lp-subtotal-total-price').text($price+$currencySym);
            jQuery('span.lp-subtotal-total-price').attr('subtotal',$price);
            break;
        default:
            jQuery('span.lp-subtotal-p-price').text($currencySym+$orgPrice);
            jQuery('span.lp-subtotal-price').text($currencySym+$price);
            jQuery('span.lp-subtotal-taxamount').text($currencySym+$taxPrice);
            jQuery('span.lp-subtotal-total-price').text($currencySym+$price);
            jQuery('span.lp-subtotal-total-price').attr('datasubtotal',$price);

    }


    jQuery('.lp-checkout-coupon-outer').css('display', 'block');
    jQuery('.active-checkout-listing').addClass('lp-checkout-wrapper-new-without-radius');
}

/* ====================function for recurring option====================== */

function lp_show_recurring_switch(){
    var $sPlan = jQuery('input[name=plan]:checked').val();
    if($sPlan=="stripe" || $sPlan=="paypal"){
        jQuery('.lp-checkout-recurring-wrap').css('display', 'block');
    }else if($sPlan == "wire" ){
        jQuery('.lp-checkout-recurring-wrap input[name="lp-recurring-option"]').prop("checked", false);
		jQuery('.lp-checkout-recurring-wrap').css('display', 'none');
	}
}

/* ====================function for recurring option====================== */

function lp_add_checkout_data_fields(listingID, planID, price, recurring, method, $planTime) {
    var $tax =jQuery('#listings_checkout_form input[name=listing_id]:checked').data('taxenable');
    jQuery('input[name=post_id]').val(listingID);
    jQuery('input[name=method]').val(method);
    if($tax=='1') {
        jQuery('input[name=listings_tax_price]').val(price);
    }
    jQuery('input[name=prc_plan]').val(planID);
    jQuery('input[name=lprecurring]').val(recurring);
    jQuery('input[name=plan_time]').val($planTime);
}

/* ==================== function to show active fields of coupons============ */
function lp_make_couponsfields_active(){
    jQuery('input.coupon-text-field').prop('disabled', false);
    jQuery('button.coupon-apply-bt').prop('disabled', false);
}

/* ==================== function to show disable fields of coupons============ */
function lp_make_couponsfields_passive(){
    jQuery('input.coupon-text-field').prop('disabled', true);
    jQuery('button.coupon-apply-bt').prop('disabled', true);
}
/* ====================function for adding data in input hidden fields=========*/

function lp_add_checkout_data_fields_in_form(listingID, post_title, planID, price, $tax, $taxRate) {
    jQuery('input[name=plan_price]').val(price);
    jQuery('input[name=post_title]').val(post_title);
    jQuery('input[name=listings_id]').val(listingID);
    jQuery('input[name=post_id]').val(listingID);
    jQuery('input[name=plan_id]').val(planID);
    if($tax){
        taxprice = ($taxRate/100)*price;
        taxprice = taxprice.toFixed(2);
        jQuery('input[name="listings_tax_price"]').val(taxprice);
    }
    lp_update_date_in_mini_cart(price, $tax, $taxRate);
}
/* ====================function for update data in mini cart====================*/
function lp_update_date_in_mini_cart($price, $tax, $taxRate) {

    var $currencyPos = jQuery('#listings_checkout_form').data('currencypos');
    var $currencySym = jQuery('#listings_checkout_form').data('currencysymbol');
    var $orgPrice = $price;
    var $orgPrice = parseFloat($orgPrice).toFixed(2);
    var $taxPrice = '';
    var $currencyPos = jQuery('#listings_checkout_form').data('currencypos');
    var $currencySym = jQuery('#listings_checkout_form').data('currencysymbol');
    if($tax=="1"){
        $taxPrice = ($taxRate/100)*$price;
        $price = parseFloat($price) + parseFloat($taxPrice);
        $price = parseFloat($price).toFixed(2);

        $taxPrice = parseFloat($taxPrice).toFixed(2);
    }

    switch($currencyPos){
        case('left'):
            //jQuery('span.lp-subtotal-p-price').text($currencySym+$orgPrice);
            jQuery('span.lp-subtotal-price').text($currencySym+$price);
            jQuery('span.lp-subtotal-taxamount').text($currencySym+$taxPrice);
            jQuery('span.lp-subtotal-total-price').text($currencySym+$price);
            jQuery('span.lp-subtotal-total-price').attr('data-subtotal',$price);
            break;
        case('right'):
            //jQuery('span.lp-subtotal-p-price').text($orgPrice+$currencySym);
            jQuery('span.lp-subtotal-price').text($price+$currencySym);
            jQuery('span.lp-subtotal-taxamount').text($taxPrice+$currencySym);
            jQuery('span.lp-subtotal-total-price').text($price+$currencySym);
            jQuery('span.lp-subtotal-total-price').attr('data-subtotal',$price);
            break;
        default:
            jQuery('span.lp-subtotal-p-price').text($currencySym+$orgPrice);
            jQuery('span.lp-subtotal-price').text($currencySym+$price);
            jQuery('span.lp-subtotal-taxamount').text($currencySym+$taxPrice);
            jQuery('span.lp-subtotal-total-price').text($currencySym+$price);
            jQuery('span.lp-subtotal-total-price').attr('data-subtotal',$price);

    }
}

/* =====================reset mincart and checkout data  ======================== */
function lp_reset_mincart_checkout_form_data(){
    var $price = jQuery('input[name=listing_id]:checked').data('planprice');
    var $listingID = jQuery('input[name=listing_id]:checked').val();
    var $post_title = jQuery('input[name=listing_id]:checked').data('title');
    var $planID = jQuery('input[name=listing_id]:checked').data('planid');
    var $tax =jQuery('input[name=listing_id]:checked').data('taxenable');
    var $taxRate = jQuery('input[name=listing_id]:checked').data('taxrate');
    lp_add_checkout_data_fields_in_form($listingID, $post_title, $planID, $price, $tax, $taxRate);
}

/* =====================active checkout steps bar  ======================== */
function lp_make_checkout_step_active($stepname){
	jQuery('.lp_payment_steps_area li.'+$stepname+'').addClass('current');
}

/* =====================active checkout steps bar  ======================== */
function lp_make_checkout_step_passive($stepname){
	jQuery('.lp_payment_steps_area li.'+$stepname+'').removeClass('current');
}

/* =====================active checkout steps button on all selections ======================== */
function lp_make_campaign_paybutton_active(){
	//
	var atLeastOnePlaceAd = jQuery('input[name="lpadsoftype[]"]:checked').length > 0;
    var atLeastOneMethodAd = jQuery('input[name="method"]:checked').length > 0;
	var adsterms = jQuery('#lp-campaignTerms:checked').length > 0;
	if( atLeastOnePlaceAd && atLeastOneMethodAd && adsterms){
        jQuery('button.lp_campaign_paynow').attr('disabled', false);
        jQuery('button.lp_campaign_paynow').attr('type', 'submit');
    }else{
        jQuery('button.lp_campaign_paynow').attr('disabled', true);
        jQuery('button.lp_campaign_paynow').attr('type', 'button');
    }
	return;
	//
    var selected_option = jQuery('.lp-search-listing-camp').val();
    var atLeastOnePlaceAd = jQuery('input[name="lpadsoftype[]"]:checked').length > 0;
    var atLeastOneMethodAd = jQuery('input[name="method"]:checked').length > 0;
    var adsterms = jQuery('#lp-campaignTerms:checked').length > 0;
    var adPriceField = 1;
    var adDurationField = 1;
    if(jQuery('input[name="adsduration_pd"]').length > 0){
        adDurationField = jQuery('input[name="adsduration_pd"]').val();
    }
    if(jQuery('input[name="adsprice_pc"]').length > 0){
        adPriceField = jQuery('input[name="adsprice_pc"]').val();
    }
    if( selected_option!='' && selected_option!='0' &&  atLeastOnePlaceAd!='' &&  adsterms!='' &&  adsterms!='0' && atLeastOnePlaceAd!='0' && atLeastOneMethodAd!='' && atLeastOneMethodAd!='0' && adDurationField!='' && adDurationField!='0' && adPriceField!='' && adPriceField!='0' ){
        jQuery('button.lp_campaign_paynow').attr('disabled', false);
        jQuery('button.lp_campaign_paynow').attr('type', 'submit');
    }else{
        jQuery('button.lp_campaign_paynow').attr('disabled', true);
        jQuery('button.lp_campaign_paynow').attr('type', 'button');
    }
}

jQuery(document).on('click', '#lp-campaignTerms', function () {
    lp_make_campaign_paybutton_active();
});

jQuery(document).on('click', '.show-loop-map-popup', function (e) {
    e.preventDefault();
    if(jQuery('#grid-show-popup').is('.md-show')) {
    }else{
        jQuery('#grid-show-popup').modal({
            show: 'true'
        });
        jQuery('#grid-show-popup').addClass('md-show');
    }
    var $this   =   jQuery(this),
        LAT     =   $this.data('lat'),
        LNG     =   $this.data('lng'),
        LPpostID     =   $this.data('lid');

		var data='<div id="quickmap'+LPpostID+'" data-maker-src="/images/classic/lp-logo.png" class="quickmap"></div>';
		jQuery('#grid-show-popup .grid-show-popup').html(data);
            var markerSrc	=	"/images/classic/lp-logo.png";//jQuery('#grid-show-popup .grid-show-popup .quickmap').attr('data-marker-src');
            var markers = false;
            $mtoken = jQuery('#page').data("mtoken");
            $mtype = jQuery('#page').data("mtype");	
            $siteURL = jQuery('#page').data("site-url");
            $lat = LAT;
            $lan = LNG;
            if($mtoken != '' && $mtype == 'mapbox'){
                L.mapbox.accessToken = $mtoken;
                map = L.mapbox.map('quickmap'+LPpostID);
                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                    id: jQuery('#page').data("mstyle"),
                    accessToken: jQuery('#page').data("mtoken")
                }).addTo(map);
            }else{
                var map = new L.Map('quickmap'+LPpostID, {center: new L.LatLng($lat,$lan), zoom: 14});
                if($mtype == 'google'){
                    var googleLayer = new L.Google('ROADMAP');
                    map.addLayer(googleLayer);
                }else{
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
                }
            }
            map.setView([$lat,$lan], 14);
            markers = new L.MarkerClusterGroup();
            var markerLocation = new L.LatLng($lat, $lan); // London
            var CustomHtmlIcon = L.HtmlIcon.extend({
                options : {
                    html : "<div class='lpmap-icon-shape pin '><div class='lpmap-icon-contianer'><img src='"+markerSrc+"'  /></div></div>",
                }
            });
            var customHtmlIcon = new CustomHtmlIcon();
            var marker = new L.Marker(markerLocation, {icon: customHtmlIcon}).bindPopup('').addTo(map);
            markers.addLayer(marker);
            jQuery('.md-close.widget-map-click').click(function(e){
                var loaderImg   =   jQuery('#grid-show-popup .grid-show-popup').data('loader');
                jQuery('#full-overlay').remove();
                jQuery('#grid-show-popup .grid-show-popup').html('<img src="'+ loaderImg +'" />');
            });
return;
    jQuery.ajax({
        url: ajax_search_term_object.ajaxurl,
        data: {
            'action':'show_map_pop_cb',
            'LPpostID' : LPpostID,
            'lpNonce' : jQuery('#lpNonce').val()
        },
        success:function(data) {
            jQuery('#grid-show-popup .grid-show-popup').html(data);
            var markerSrc	=	jQuery('#grid-show-popup .grid-show-popup .quickmap').attr('data-marker-src');
            var markers = false;
            $mtoken = jQuery('#page').data("mtoken");
            $mtype = jQuery('#page').data("mtype");	
            $siteURL = jQuery('#page').data("site-url");
            $lat = LAT;
            $lan = LNG;
            if($mtoken != '' && $mtype == 'mapbox'){
                L.mapbox.accessToken = $mtoken;
                map = L.mapbox.map('quickmap'+LPpostID);
                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                    id: jQuery('#page').data("mstyle"),
                    accessToken: jQuery('#page').data("mtoken")
                }).addTo(map);
            }else{
                var map = new L.Map('quickmap'+LPpostID, {center: new L.LatLng($lat,$lan), zoom: 14});
                if($mtype == 'google'){
                    var googleLayer = new L.Google('ROADMAP');
                    map.addLayer(googleLayer);
                }else{
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
                }
            }
            map.setView([$lat,$lan], 14);
            markers = new L.MarkerClusterGroup();
            var markerLocation = new L.LatLng($lat, $lan); // London
            var CustomHtmlIcon = L.HtmlIcon.extend({
                options : {
                    html : "<div class='lpmap-icon-shape pin '><div class='lpmap-icon-contianer'><img src='"+markerSrc+"'  /></div></div>",
                }
            });
            var customHtmlIcon = new CustomHtmlIcon();
            var marker = new L.Marker(markerLocation, {icon: customHtmlIcon}).bindPopup('').addTo(map);
            markers.addLayer(marker);
            jQuery('.md-close.widget-map-click').click(function(e){
                var loaderImg   =   jQuery('#grid-show-popup .grid-show-popup').data('loader');
                jQuery('#full-overlay').remove();
                jQuery('#grid-show-popup .grid-show-popup').html('<img src="'+ loaderImg +'" />');
            });
            //alert(data.cats_markup);
        },
        error: function(errorThrown){
            alert(errorThrown);
        }
    });
});

jQuery(document).on('click', '.open-multi-rate-box', function (e) {
    e.preventDefault();
    var $this		=	jQuery(this),
        targetBox	=	'#'+$this.data('rate-box');
    jQuery( targetBox ).slideToggle(500);
});

jQuery('button.printthisinvoice').click(function(e){

        var printContents = document.getElementById('listing-invoices-popup').innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        location.reload();
		e.preventDefault();

    });
	
jQuery(document).ready(function(){
	if(jQuery('.lp-user-listings.active-checkout-listing').length){
		jQuery( ".lp-user-listings" ).each(function( index ) {
			if(jQuery(this).hasClass('active-checkout-listing')){}else{
				jQuery(this).remove();
			}
			
		});
	}
	
});

// App view menu in tabs
jQuery(document).ready(function () {
	jQuery('.lp-menu-type-heading').on('click',function () {
		//jQuery('.lp-menu-type-heading').removeClass('active');
		jQuery(this).toggleClass('active');
		jQuery('.active-menu-toggle').slideUp('slow', function(){
			jQuery('.active-menu-toggle').removeClass('active-menu-toggle')
		});
		var getmenutype = '.'+jQuery(this).attr("data-target");
		jQuery(getmenutype).slideToggle('slow');
	});
	jQuery('.lp-appview-group-heading').on('click',function(){
		//jQuery('.lp-appview-group-heading').removeClass('active');
		jQuery(this).toggleClass('active');
		var getmenugroup = '.'+jQuery(this).attr("data-target");
		//jQuery('.lp-appview-menu-items-bygroup').slideUp('slow');
		jQuery(this).next(getmenugroup).slideToggle('slow');
	})
});



jQuery(document).ready(function(){

    //dashboard weekly monthly active
	jQuery('.lp_stats_duration_filter li button').on('click', function(){

		jQuery('.lp_stats_duratonBtn').removeClass('active');

        jQuery(this).addClass('active');

    });


    //If width is less than 640
    if(jQuery(window).width()<641){
        jQuery('#main_icon').on('click', function() {
            jQuery('#main_icon').toggleClass('fa fa-times');
            jQuery('#sidebar').toggle(300);
        });
    }
    

    //New archive style grid switcher
	jQuery('.lp-grid-two').on('click', function(){
		
		
		jQuery('.lp-sidebar-filters-style').removeClass('lp-grid-width1');
		jQuery('.lp-sidebar-filters-style').removeClass('lp-grid-width3');

        jQuery('.lp-sidebar-filters-style').addClass('lp-grid-width2');
		jQuery('.lp-grid-two').addClass('active');
		jQuery('.lp-grid-one').removeClass('active');
		jQuery('.lp-grid-three').removeClass('active');		

    });
	jQuery('.lp-grid-one').on('click', function(){

		jQuery('.lp-sidebar-filters-style').removeClass('lp-grid-width2');
		jQuery('.lp-sidebar-filters-style').removeClass('lp-grid-width3');

        jQuery('.lp-sidebar-filters-style').addClass('lp-grid-width1');
		jQuery('.lp-grid-one').addClass('active');
		jQuery('.lp-grid-two').removeClass('active');
		jQuery('.lp-grid-three').removeClass('active');

    });
	jQuery('.lp-grid-three').on('click', function(){

		jQuery('.lp-sidebar-filters-style').removeClass('lp-grid-width1');
		jQuery('.lp-sidebar-filters-style').removeClass('lp-grid-width2');

        jQuery('.lp-sidebar-filters-style').addClass('lp-grid-width3');
		jQuery('.lp-grid-three').addClass('active');
		jQuery('.lp-grid-two').removeClass('active');
		jQuery('.lp-grid-one').removeClass('active');
    });

    
    
});


jQuery(document).on('click', '.app-view-popup-style', function(){
    jQuery( "body" ).prepend( '<div id="full-overlay-lp"></div>' );
    jQuery("#full-overlay-lp").css({
        "width": "100vw",
        "height": "100vh",
        "position": "fixed",
        "background": "#000000c7",
        "z-index": "3",
    });
    jQuery(".md-close i").click(function(){
        jQuery('#full-overlay-lp').remove();
        jQuery('#app-view-login-popup').fadeOut(function () {
            jQuery('#app-view-login-popup').css({
                'opacity' : 0,
                'display' : 'none'
            });
        });
    });
});

/* ======function to get currency symbol===== */

function lp_get_currency_sysmbol(){
	$code = jQuery('#lp-new-ad-compaignForm').data('camp-currency');
	return $code;
}
/* ======function to get tax percent===== */

function lp_get_tax_percent(){
	$code = jQuery('#lp-new-ad-compaignForm').data('tax-percent');
	return $code;
}

/* ======function to get selected campaigns org price===== */

function lp_get_selected_camp_price(){
	$totalCamPrice = 0;
	jQuery('input[name="lpadsoftype[]"]:checked').each(function() {
						$thisAd = jQuery(this).data('orgprice');
						$totalCamPrice = parseFloat($totalCamPrice) + parseFloat($thisAd);
					});
					//console.log($totalCamPrice);
					return $totalCamPrice;
					
}
/* ======function to get selected campaigns with tax price===== */
function lp_get_selected_camp_withtax_price(){
	$totalCamPrice = 0;
	jQuery('input[name="lpadsoftype[]"]:checked').each(function() {
						$thisAd = jQuery(this).data('price');
						$totalCamPrice = parseFloat($totalCamPrice) + parseFloat($thisAd);
					});
					//console.log($totalCamPrice);
					return $totalCamPrice;
					
}
/* ======function to get tax price of campaigns===== */
function lp_get_selected_camp_onlytax_price(){
	$totalCamPrice = 0;
	jQuery('input[name="lpadsoftype[]"]:checked').each(function() {
						$thisAd = jQuery(this).data('taxprice');
						$totalCamPrice = parseFloat($totalCamPrice) + parseFloat($thisAd);
					});
					//console.log($totalCamPrice);
					return $totalCamPrice;
					
}
/* ======function to set camp duration price in preview===== */
function lp_set_camp_duration_price_in_preview($thisval){
		$daysString = jQuery('.lp-cmp-duration').data('days-text');
		$taxPercent = lp_get_tax_percent();
		$taxtotalPrice = lp_get_selected_camp_onlytax_price();
		$taxtotalPrice = $thisval*$taxtotalPrice;
        $taxtotalPrice = $taxtotalPrice.toFixed(2);
		jQuery('input[name=taxprice]').val($taxtotalPrice);
		jQuery('input[name=ads_days]').val($thisval);
		$thisvalWithDays = $thisval+' '+$daysString;
		jQuery('.lp-cmp-duration h6').text($thisvalWithDays);
		$totalCamPrice = lp_get_selected_camp_price();
		$totalCamPrice = parseFloat($thisval) * parseFloat($totalCamPrice);
		console.log($totalCamPrice);
        $totalCamPrice = $totalCamPrice.toFixed(2);
		jQuery('.lp-cmp-subtotal h6').text(lp_get_currency_sysmbol()+''+$totalCamPrice);
		$totalCamPriceWithTax = lp_get_selected_camp_withtax_price();
		$totalCamPriceWithTax = parseFloat($thisval) * parseFloat($totalCamPriceWithTax);
        $totalCamPriceWithTax = $totalCamPriceWithTax.toFixed(2);		
		console.log($totalCamPriceWithTax);
		jQuery('.lp-cmp-alltotal h5').text(lp_get_currency_sysmbol()+''+$totalCamPriceWithTax);
		jQuery('input[name=ads_price]').val($totalCamPriceWithTax);
		jQuery('.lp-cmp-taxtotal h6').text($taxtotalPrice);
					
}
/* ======function to set camp price in preview===== */
function lp_set_camp_budget_price_in_preview($thisval){
	$taxPercent = lp_get_tax_percent();
		$thisvalWithCurr = lp_get_currency_sysmbol()+''+$thisval;
		jQuery('.lp-cmp-budget h6').text($thisvalWithCurr);
		jQuery('.lp-cmp-subtotal h6').text($thisvalWithCurr);
		$taxPrice = 0;
		if($taxPercent){
			$taxPrice = ($taxPercent/100)*$thisval;
			$taxPrice = $taxPrice.toFixed(2);
			jQuery('input[name=taxprice]').val($taxPrice);
			$taxPriceWithCurr = lp_get_currency_sysmbol()+''+$taxPrice;
			jQuery('.lp-cmp-taxtotal h6').text($taxPriceWithCurr);
			
		}
		
		$totalAmount = parseFloat($thisval) + parseFloat($taxPrice);
		jQuery('input[name=ads_price]').val($totalAmount);
		jQuery('.lp-cmp-alltotal h5').text($totalAmount);
}
/* ======function to set camp type===== */
function lp_get_camp_type(){
	$camptype = jQuery('#lp-new-ad-compaignForm').data('type');
	return $camptype;
}



// Add hours
jQuery(document).on('click', 'button.add-hours', function(event) {
    event.preventDefault();
    var $this = jQuery(this);
    var lp2times = $this.closest('#day-hours-BusinessHours').data('lpenabletwotimes');
    var sorryMsg = jQuery(this).data('sorrymsg');
    var alreadyadded = jQuery(this).data('alreadyadded');
    var error = false;
    var fullday = '';
    var fullhoursclass = '';

    var lpdash = "~";

    if(lp2times=="disable"){

        var weekday = jQuery('select.weekday').val();
        if(jQuery(".fulldayopen").is(":checked")){
            jQuery('.fulldayopen').attr('checked', false);
            jQuery('select.hours-start').prop("disabled", false);
            jQuery('select.hours-end').prop("disabled", false);
            var startVal ='';
            var endVal ='';
            var hrstart ='';
            var hrend ='';
            fullday = $this.data('fullday');
            fullhoursclass = 'fullhours';
            lpdash = "";
        }
        else{
            var startVal = jQuery('select.hours-start').val();
            var endVal = jQuery('select.hours-end').val();
            var hrstart = jQuery('select.hours-start').find('option:selected').val();
            var hrend = jQuery('select.hours-end').find('option:selected').val();

            var startVal_digit = hrstart.replace(':', '');
            var endVal_digit = hrend.replace(':', '');

            if (startVal_digit.indexOf('am') > -1) {
                startVal_digit = startVal_digit.replace('am', '');
            }
            else if (startVal_digit.indexOf('pm') > -1) {
                startVal_digit = startVal_digit.replace('pm', '');
                if (startVal_digit != '1200' && startVal_digit != '1230') {
                    startVal_digit = parseInt(startVal_digit) + 1200;
                }
            }
            if (endVal_digit.indexOf('am') > -1) {
                endVal_digit = endVal_digit.replace('am', '');
                endVal_digit = parseInt(endVal_digit);
                if(endVal_digit >= 1200){
                    endVal_digit = parseInt(endVal_digit) - 1200;
                }

            }
            else if (endVal_digit.indexOf('pm') > -1) {
                endVal_digit = endVal_digit.replace('pm', '');
                endVal_digit = parseInt(endVal_digit) + 1200;
            }

            if(startVal_digit > endVal_digit){
                nextWeekday = jQuery("select.weekday option:selected+option").val();
                if(typeof nextWeekday === "undefined"){
                    nextWeekday = jQuery("select.weekday").find("option:first-child").val();
                }

                weekday = weekday+"~"+nextWeekday;
            }


        }



        if( $this.hasClass('lp-add-hours-st') )
        {
            var remove = '<i class="fa fa-times"></i>';
        }
        else
        {
            var remove  =   jQuery(this).data('remove');
        }
        jQuery('.hours-display .hours').each(function(index, element) {
            var weekdayTExt = jQuery(element).children('.weekday').text();
            if(weekdayTExt == weekday){
                alert(sorryMsg+'! '+weekday+' '+alreadyadded);
                error = true;
            }
        });
        if(error != true){
            jQuery('.hours-display').append("<div class='hours "+fullhoursclass+"'><span class='weekday'>"+ weekday +"</span><span class='start-end fullday'>"+fullday+"</span><span class='start'>"+ hrstart +"</span><span>"+lpdash+"</span><span class='end'>"+ hrend +"</span><a class='remove-hours' href='#'>"+remove+"</a><input name='business_hours["+weekday+"][open]' value='"+startVal+"' type='hidden'><input name='business_hours["+weekday+"][close]' value='"+endVal+"' type='hidden'></div>");
            var current = jQuery('select.weekday').find('option:selected');
            var nextval = current.next();
            current.removeAttr('selected');
            nextval.attr('selected','selected');
            jQuery('select.weekday').trigger('change.select2');
        }
    }
    else{
        var lptwentlyfourisopen = '';
        /* 2times */
        var weekday = jQuery('select.weekday').val();
        var weekday1 = weekday;
        var weekday2 = weekday;

        if(jQuery(".fulldayopen").is(":checked")){

            lptwentlyfourisopen = 'yes';

            jQuery('.fulldayopen').attr('checked', false);
            jQuery('select.hours-start').prop("disabled", false);
            jQuery('select.hours-end').prop("disabled", false);

            jQuery('select.hours-start2').prop("disabled", false);
            jQuery('select.hours-end2').prop("disabled", false);

            var startVal1 ='';
            var endVal1 ='';
            var hrstart1 ='';
            var hrend1 ='';

            var startVal2 ='';
            var endVal2 ='';
            var hrstart2 ='';
            var hrend2 ='';



            fullday = $this.data('fullday');
            fullhoursclass = 'fullhours';

            lpdash = "";
        }
        else{
            var startVal1 = jQuery('select.hours-start').val();
            var endVal1 = jQuery('select.hours-end').val();
            var hrstart1 = jQuery('select.hours-start').find('option:selected').val();
            var hrend1 = jQuery('select.hours-end').find('option:selected').val();

            var startVal1_digit = hrstart1.replace(':', '');
            var endVal1_digit = hrend1.replace(':', '');

            if (startVal1_digit.indexOf('am') > -1) {
                startVal1_digit = startVal1_digit.replace('am', '');
            }
            else if (startVal1_digit.indexOf('pm') > -1) {
                startVal1_digit = startVal1_digit.replace('pm', '');
                if (startVal1_digit != '1200' && startVal1_digit != '1230') {
                    startVal1_digit = parseInt(startVal1_digit) + 1200;
                }
            }
            if (endVal1_digit.indexOf('am') > -1) {
                endVal1_digit = endVal1_digit.replace('am', '');
                endVal1_digit = parseInt(endVal1_digit);
                if( endVal1_digit >= 1200 ){
                    endVal1_digit = parseInt(endVal1_digit) - 1200;
                }
            }
            else if (endVal1_digit.indexOf('pm') > -1) {
                endVal1_digit = endVal1_digit.replace('pm', '');
                endVal1_digit = parseInt(endVal1_digit) + 1200;
            }


            if(startVal1_digit > endVal1_digit){

                nextWeekday = jQuery("select.weekday option:selected+option").val();
                if(typeof nextWeekday === "undefined"){
                    nextWeekday = jQuery("select.weekday").find("option:first-child").val();

                }

                weekday1 = weekday+"~"+nextWeekday;
                jQuery('.hours-display .hours').each(function (e) {
                    var $this	=	jQuery(this);
                    if($this.find('span.weekday:contains("'+weekday1+'")').length > 0) {
                        alert(sorryMsg+'! '+weekday1+' '+alreadyadded);
                        error = true;
                    }
                });

            }


            var startVal2 = jQuery('select.hours-start2').val();
            var endVal2 = jQuery('select.hours-end2').val();
            var hrstart2 = jQuery('select.hours-start2').find('option:selected').text();
            var hrend2 = jQuery('select.hours-end2').find('option:selected').text();

            var startVal2_digit = hrstart2.replace(':', '');
            var endVal2_digit = hrend2.replace(':', '');

            if (startVal2_digit.indexOf('am') > -1) {
                startVal2_digit = startVal2_digit.replace('am', '');
            }
            else if (startVal2_digit.indexOf('pm') > -1) {
                startVal2_digit = startVal2_digit.replace('pm', '');
                if (startVal2_digit != '1200' && startVal2_digit != '1230') {
                    startVal2_digit = parseInt(startVal2_digit) + 1200;
                }
            }
            if (endVal2_digit.indexOf('am') > -1) {
                endVal2_digit = endVal2_digit.replace('am', '');
                endVal2_digit = parseInt(endVal2_digit);
                if( endVal2_digit >= 1200 ){
                    endVal2_digit = parseInt(endVal2_digit) - 1200;
                }
            }
            else if (endVal2_digit.indexOf('pm') > -1) {
                endVal2_digit = endVal2_digit.replace('pm', '');
                endVal2_digit = parseInt(endVal2_digit) + 1200;
            }


            if(startVal2_digit > endVal2_digit){
                nextWeekday = jQuery("select.weekday option:selected+option").val();
                if(typeof nextWeekday === "undefined"){
                    nextWeekday = jQuery("select.weekday").find("option:first-child").val();
                }

                weekday2 = weekday+"~"+nextWeekday;
                jQuery('.hours-display .hours').each(function (e) {
                    var $this	=	jQuery(this);
                    if($this.find('span.weekday:contains("'+weekday2+'")').length > 0) {
                        alert(sorryMsg+'! '+weekday2+' '+alreadyadded);
                        error = true;
                    }
                });
            }
        }
        

        
        if( $this.hasClass('lp-add-hours-st') )
        {
            var remove = '<i class="fa fa-times"></i>';
        }
        else
        {
            var remove  =   jQuery(this).data('remove');
        }

        if(error != true){

            if( (jQuery(".lp-check-doubletime .enable2ndday").is(":checked")) && (lptwentlyfourisopen==="") ){

                jQuery('.hours-display').append("<div class='hours "+fullhoursclass+"'><span class='weekday'>"+ weekday +"</span><span class='start-end fullday'>"+fullday+"</span><span class='start'>"+ hrstart1 +"</span><span>"+lpdash+"</span><span class='end'>"+ hrend1 +"</span><a class='remove-hours' href='#'>"+remove+"</a><br><span class='weekday'>&nbsp;</span><span class='start'>"+ hrstart2 +"</span><span>"+lpdash+"</span><span class='end'>"+ hrend2 +"</span><input name='business_hours["+weekday1+"][open][0]' value='"+startVal1+"' type='hidden'><input name='business_hours["+weekday1+"][close][0]' value='"+endVal1+"' type='hidden'><input name='business_hours["+weekday2+"][open][1]' value='"+startVal2+"' type='hidden'><input name='business_hours["+weekday2+"][close][1]' value='"+endVal2+"' type='hidden'></div>");
            }else{

                jQuery('.hours-display').append("<div class='hours "+fullhoursclass+"'><span class='weekday'>"+ weekday1 +"</span><span class='start-end fullday'>"+fullday+"</span><span class='start'>"+ hrstart1 +"</span><span>"+lpdash+"</span><span class='end'>"+ hrend1 +"</span><a class='remove-hours' href='#'>"+remove+"</a><input name='business_hours["+weekday1+"][open]' value='"+startVal1+"' type='hidden'><input name='business_hours["+weekday1+"][close]' value='"+endVal1+"' type='hidden'></div>");
            }
            var current = jQuery('select.weekday').find('option:selected');
            var nextval = current.next();
            current.removeAttr('selected');
            nextval.attr('selected','selected');
            jQuery('select.weekday').trigger('change.select2');
        }

        /* 2times */
    }
});


jQuery(document).on('click', '.lp-dot-extra-buttons', function(e){
    jQuery(this).find(".lp-user-menu").toggleClass("main");
});


jQuery(document).ready(function () {
    jQuery(".lp-secondary-btn.btn-second-hover.lp-secondary-choose.lp-claim-plan-btn").attr("disabled", true);
	jQuery(".lp-secondary-btn.btn-second-hover.lp-secondary-choose.lp-claim-plan-btn").addClass("LPdisabled");
    if (jQuery('.form-group.lp-claim-form-check-circle input').is(':checked')) {
        jQuery(".lp-secondary-btn.btn-second-hover.lp-secondary-choose.lp-claim-plan-btn").attr("disabled", false);
		jQuery(".lp-secondary-btn.btn-second-hover.lp-secondary-choose.lp-claim-plan-btn").removeClass("LPdisabled");
		
    }else{
        jQuery(".lp-secondary-btn.btn-second-hover.lp-secondary-choose.lp-claim-plan-btn").attr("disabled", true);
		
		jQuery(".lp-secondary-btn.btn-second-hover.lp-secondary-choose.lp-claim-plan-btn").addClass("LPdisabled");
		
    }
    jQuery('.form-group.lp-claim-form-check-circle input').click(function () {
        if (jQuery('.form-group.lp-claim-form-check-circle input').is(':checked')) {
            jQuery(".lp-secondary-btn.btn-second-hover.lp-secondary-choose.lp-claim-plan-btn").attr("disabled", false);
			jQuery(".lp-secondary-btn.btn-second-hover.lp-secondary-choose.lp-claim-plan-btn").removeClass("LPdisabled");
			
			
        }else{
            jQuery(".lp-secondary-btn.btn-second-hover.lp-secondary-choose.lp-claim-plan-btn").attr("disabled", true);
			jQuery(".lp-secondary-btn.btn-second-hover.lp-secondary-choose.lp-claim-plan-btn").addClass("LPdisabled");
        }
    });
});
jQuery("#pop").on("click", function(e) {
   e.preventDefault();
    jQuery('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
   var img_src = jQuery(this).data('imgsrc');
   jQuery('#imagemodal').find('img').attr('src', img_src);
});
jQuery('#my_file').change(function() {
  var i = jQuery(this).prev('label').clone();
  var file = jQuery('#my_file')[0].files[0].name;
  jQuery(this).prev('label').text(file);
});
jQuery(document).ready(function () {
    if(jQuery('.payment-recurring-message').length > 0){
        jQuery(document).on('change', '.lp-checkout-recurring-wrap', function () {
            var checkboxVal = jQuery('.lp-checkout-recurring-wrap input[name="lp-recurring-option"]').is(':checked');
            if ( checkboxVal === false ) {
                jQuery('.payment-recurring-message').fadeOut('slow');
            }
        });
        jQuery('.rec_alert_remove').click(function () {
            jQuery('.payment-recurring-message').fadeOut('slow');
        });
    }
});
jQuery(document).on('click', '.sidebar-filters-map-pop', function (e) {
    if(jQuery('.sidemap-container').hasClass('sidebar-filters-map-full')) {
        jQuery('.sidemap-container').removeClass('sidebar-filters-map-full');
        jQuery(this).text(jQuery(this).attr('data-full-map'));
    } else {
        jQuery('.sidemap-container').addClass('sidebar-filters-map-full');
        jQuery(this).text(jQuery(this).attr('data-close-map'));
    }
});