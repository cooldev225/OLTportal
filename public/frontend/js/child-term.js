jQuery(window).on('load', function(){
    // if (!jQuery('#lp-submit-form').hasClass("lpeditlistingform")) {
        if(jQuery('#inputCategory').val()){
			
			$haveFeature = jQuery('#inputCategory').find(':selected').data('doajax');
			if($haveFeature){
					$catid = jQuery('#inputCategory').val();
					$listingid = '';
					if ( jQuery( "input[name='lp_post']" ).length ) {
						$listingid = jQuery( "input[name='lp_post']" ).val();
					}
					jQuery('.lp-nested').hide();
					jQuery('#inputCategory').attr("disabled", !0);
					jQuery('#tags-by-cat').html(' ');
					jQuery('label.featuresBycat').remove();
					jQuery('form#lp-submit-form  div.pre-load:first').addClass('loader');
					jQuery('#features-by-cat').html(' ');
					jQuery(".chosen-select").prop('disabled', !0).trigger('chosen:updated');

					jQuery.ajax({
						type: 'POST',
						dataType: 'json',
						url: ajax_term_object.ajaxurl,
						data: {
							'action': 'ajax_term',
							'term_id': $catid,
							'listing_id': $listingid,
						},
						success: function(data) {
							jQuery('#inputCategory').removeAttr("disabled");
							if (data) {
								if (data.hasfeatues == !0) {

									jQuery('.featuresDataContainerOuterSubmit').show();
									jQuery('.labelforfeatures.lp-nested').show();
									jQuery('#tags-by-cat').show()
								}
								if (data.hasfields == !0) {
									jQuery('#features-by-cat').show()
								}
								jQuery('form#lp-submit-form div.pre-load').removeClass('loader');
								jQuery(".chosen-select").prop('disabled', !1).trigger('chosen:updated');
								if (data.tags != null) {
									jQuery('.lpfeatures_fields').prepend('<label for="inputTags" class="featuresBycat">' + data.featuretitle + '</label>');
									jQuery.each(data.tags, function(i, v) {
										var lpchecked = '';
										if (data.lpselectedtags != null) {
											jQuery.each(data.lpselectedtags, function(lk, ls) {
												if (i.trim() == lk) {
													lpchecked = 'checked'
												}
											})
										}
										jQuery('#tags-by-cat').append('<div class="col-md-2 col-sm-4 col-xs-6"><div class="checkbox pad-bottom-10"><input id="check_' + v + '" type="checkbox" name="lp_form_fields_inn[lp_feature][]" value="' + i + '" ' + lpchecked + '><label for="check_' + v + '">' + v + '</label></div></div>')
									})
								}
								jQuery('#features-by-cat').append(data.fields)
							}
						}
					});
			}

        }
	// }
});

jQuery(document).ready(function($) {
    jQuery("#inputCategory").change(function() {

        $this = jQuery(this);
        // jQuery('.featuresDataContainerOuterSubmit').hide();

        jQuery('#tags-by-cat, #features-by-cat').hide();
        
        if ($this.find(':selected').length > 1) {
            jQuery( $this.find(':selected') ).each(function(){
                if( jQuery(this).data('doajax') != '' || jQuery(this).data('doajax') != false ){
                    $haveFeature = jQuery(this).data('doajax');
                }
            });
        }else{
            $haveFeature = $this.find(':selected').data('doajax');
        }

        if($haveFeature){
            var lpchecked   =   '';
            jQuery('.featuresDataContainerOuterSubmit').show();
            jQuery('.lp-nested').hide();
            jQuery('#inputCategory').attr("disabled", !0);
            jQuery('#tags-by-cat').html(' ');
            jQuery('label.featuresBycat').remove();
            jQuery('form#lp-submit-form  div.pre-load:first').addClass('loader');
            jQuery('#features-by-cat').html(' ');
            jQuery(".chosen-select").prop('disabled', !0).trigger('chosen:updated');
            var $catTerms = [];
            var $cTerms = jQuery('form#lp-submit-form #inputCategory').val();
            $catTerms.push($cTerms);
            if (document.getElementById("pre-selected-cat") !== null) {
                var $preSelected = jQuery('#pre-selected-cat').val();
                $catTerms.push($preSelected)
            }

            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                url: ajax_term_object.ajaxurl,
                data: {
                    'action': 'ajax_term',
                    'term_id': jQuery('form#lp-submit-form #inputCategory').val(),
                    'listing_id': jQuery('input[name=lp_post]').val(),
                },
                success: function(data) {
                    jQuery('#inputCategory').removeAttr("disabled");
                    if (data) {
                        if (data.hasfeatues == !0) {
                            jQuery('.labelforfeatures.lp-nested').show();
                            jQuery('#tags-by-cat').show()
                        }
                        if (data.hasfields == !0) {
                            jQuery('#features-by-cat').show()
                        }
                        $('form#lp-submit-form div.pre-load').removeClass('loader');
                        jQuery(".chosen-select").prop('disabled', !1).trigger('chosen:updated');
                        if (data.tags != null) {
                            jQuery('.lpfeatures_fields').prepend('<label for="inputTags" class="featuresBycat">' + data.featuretitle + '</label>');
                            jQuery.each(data.tags, function(i, v) {
                                if (data.lpselectedtags != null) {
                                    jQuery.each(data.lpselectedtags, function(lk, ls) {
                                        if (i.trim() == lk) {
                                            lpchecked = 'checked'
                                        }
                                    })
                                }
                                jQuery('#tags-by-cat').append('<div class="col-md-2 col-sm-4 col-xs-6"><div class="checkbox pad-bottom-10"><input id="check_' + v + '" type="checkbox" name="lp_form_fields_inn[lp_feature][]" value="' + i + '" ' + lpchecked + '><label for="check_' + v + '">' + v + '</label></div></div>')
                            })
                        }
                        if(jQuery('#lp-form-builder-is-enabled').length) {
                            var catsVal =   jQuery('form#lp-submit-form #inputCategory').val();
                            if(typeof catsVal=== 'object') {
                                jQuery.each(catsVal, function (k, v) {
                                    var targetFieldsClass   =   '.lp-form-builder-field-'+v;
                                    jQuery('.lp-form-builder-field').fadeOut(500, function () {
                                        if(jQuery(targetFieldsClass).length){
                                            jQuery(targetFieldsClass).fadeIn();
                                        }
                                    });
                                })
                            } else {
                                var targetFieldsClass   =   '.lp-form-builder-field-'+jQuery('form#lp-submit-form #inputCategory').val();
                                jQuery('.lp-form-builder-field').fadeOut(500, function () {
                                    if(jQuery(targetFieldsClass).length){
                                        jQuery(targetFieldsClass).fadeIn();
                                    }
                                });
                            }
                        } else {
                            jQuery('#features-by-cat').append(data.fields);
                        }
                    }
                }

            });
        } else {
            if(jQuery('.featuresDataContainerOuterSubmit').data('exclusive') == 'no') {
                jQuery('.featuresDataContainerOuterSubmit').hide();
            }
            else if(jQuery('.featuresDataContainerOuterSubmit').data('exclusive') == 'yes'){
                jQuery('.featuresDataContainerOuterSubmit').fadeIn();
            }
            if(jQuery('#lp-form-builder-is-enabled').length) {
                jQuery('.featuresDataContainerOuterSubmit').hide();
                jQuery('.lp-form-builder-field').fadeOut();
            }
        }
    });
    jQuery(".lp-slected-plan-cat").on('click', function() {
        jQuery('.lp_show_hide_plans').removeClass('active');
        jQuery('.lp_show_hide_plans').removeClass('isactive');
        jQuery('.lp_plan_result_section').html('');
        jQuery('.lp_hide_general_plans').html('');
		jQuery('.lpmonthyearswitcher').hide();
        $this = jQuery(this);
		$durationType = '';
		if ( jQuery( ".lpmonthyearswitcher a.switch-fields" ).length ) {
			if(jQuery('.lpmonthyearswitcher a.switch-fields').hasClass('active')){
				$durationType = 'yearly';
			}else{
				$durationType = 'monthly';
			}
		}
        $currentStyle = jQuery('#select_style').data('style');
        jQuery("body").addClass("listingpro-loading");
        jQuery('#cats-selected-plans').html('');
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_term_object.ajaxurl,
            data: {
                'action': 'listingpro_select_plan_by_cat',
                'term_id': $this.val(),
                'currentStyle': $currentStyle,
				'duration_type': $durationType,
            },
            success: function(data) {
                jQuery("body").removeClass("listingpro-loading");
                if (data.plans) {
                    if (data.switcher) {
                        if (data.switcher == "1") {
                            jQuery('.lpmonthyearswitcher').show()
                        }
                    }
					//jQuery('.lp_plan_result_section').html(data.plans);
					jQuery('.lp_plan_result_section[data-style=' + $currentStyle + ']').html(data.plans);
                    jQuery('.lp_plan_result_section').addClass('lp-plan-view-border');
                    var $hiddenField = '<input type="hidden" name="lp_pre_selected_cats" value="' + $this.val() + '" />';
                    jQuery($hiddenField).appendTo(".price-plan-button")
                }
            }
        })
    });
    jQuery(".lp_show_hide_by_duration").on('click', function() {
        $this = jQuery(this);
        $durationType = $this.data('durationtype');
        $catID = jQuery('.lp-slected-plan-cat:checked').val();
        jQuery("body").addClass("listingpro-loading");
        jQuery('#cats-selected-plans').html('');
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_term_object.ajaxurl,
            data: {
                'action': 'filter_pricingplan',
                'term_id': $catID,
                'duration_type': $durationType,
            },
            success: function(data) {
                jQuery("body").removeClass("listingpro-loading");
                if (data.plans) {
                    jQuery('#cats-selected-plans').html(data.plans);
                    var $hiddenField = '<input type="hidden" name="lp_pre_selected_cats" value="' + $this.val() + '" />';
                    jQuery($hiddenField).appendTo(".price-plan-button")
                }
            }
        })
    });
    jQuery('.lp_plans_switcher_btn').on('click', function() {
        $this = jQuery(this);
        jQuery('.lp_cats_on_plan_wrap').css({
            "visibility": "hidden",
            "height": "0px",
            "padding-bottom": "0px"
        });
		
		//$currentVal = jQuery('.lpmonthyearswitcher span.active').html();
		//$duration_type = 'monthly';
        /* if ($currentVal == "Monthly") {
            $duration_type = 'monthly'
        } else if ($currentVal == "Annually") {
            $duration_type = 'yearly'
        } */
		
		$duration_type = '';
		if ( jQuery( ".lpmonthyearswitcher a.switch-fields" ).length ) {
			if(jQuery('.lpmonthyearswitcher a.switch-fields').hasClass('active')){
				$duration_type = 'yearly';
			}else{
				$duration_type = 'monthly';
			}
		}
		
        jQuery('.lp_plans_switcher_btn').removeClass('isactive');
        jQuery('.lp_hide_general_plans').html('');
        jQuery('.lp_hide_general_plans').removeClass('lp-plan-view-border');
        jQuery('.lp_plan_result_section').html('');
        $this.toggleClass('isactive');
        if ($this.hasClass('isactive') && $this.data('val') == 'standard') {
            $currentStyle = jQuery('#select_style').data('style');
            jQuery("body").addClass("listingpro-loading");
            //jQuery('input.lp-slected-plan-cat').prop('checked', !1);
            jQuery('input.lp-slected-plan-cat').prop('checked', false);
			jQuery('label.active-category-radio').removeClass('active-category-radio');
            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                url: ajax_term_object.ajaxurl,
                data: {
                    'action': 'listingpro_select_general_plans',
                    'currentStyle': $currentStyle,
					'duration_type': $duration_type,
                },
                success: function(data) {
                    jQuery("body").removeClass("listingpro-loading");
                    if (data.plans) {
                        jQuery('.lpmonthyearswitcher').show();
                        //jQuery('.lp_plan_result_section').html(data.plans);
                        jQuery('.lp_plan_result_section[data-style=' + $currentStyle + ']').html(data.plans);
                        jQuery('.lp_plan_result_section').addClass('lp-plan-view-border');
                        var $hiddenField = '<input type="hidden" name="lp_pre_selected_cats" value="' + $this.val() + '" />';
                        jQuery($hiddenField).appendTo(".price-plan-button")
                    }
                }
            })
        } else {
            jQuery('.lp_cats_on_plan_wrap').css({
                "visibility": "visible",
                "height": "auto",
                "padding-bottom": "40px"
            });
            jQuery('.lp_plan_result_sectiolp_cats_on_plan_wrapn').html('');
            jQuery('.lp_plan_result_section').removeClass('lp-plan-view-border');
            jQuery('.lpmonthyearswitcher').hide()
        }
    });
    jQuery('ul.switch_month_year li span').on('click', function() {
        jQuery("body").addClass("listingpro-loading");
        $this = jQuery(this);
        jQuery('ul.switch_month_year li span').removeClass('active_switch');
        $this.toggleClass('active_switch');
        $currentVal = $this.html();
        $duration_type = '';
        $currentStyle = jQuery('#select_style').data('style');
        if ($currentVal == "Monthly") {
            $duration_type = 'monthly'
        } else if ($currentVal == "Annually") {
            $duration_type = 'yearly'
        }
        $catID = '';
        $planUsage = '';
        if (jQuery('label').hasClass('active-category-radio')) {
            $catID = jQuery('label.active-category-radio').find('input').val()
        } else {
            $planUsage = 'default'
        }
        jQuery('.lp_hide_general_plans').html('');
        jQuery('.lp_plan_result_section').html('');
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_term_object.ajaxurl,
            data: {
                'action': 'filter_pricingplan',
                'cat_id': $catID,
                'duration_type': $duration_type,
                'currentStyle': $currentStyle,
                'planUsage': $planUsage,
            },
            success: function(data) {
                jQuery("body").removeClass("listingpro-loading");
                if (data) {
                    jQuery('.lp_plan_result_section:first').html(data.plans);
                    var $hiddenField = '<input type="hidden" name="lp_pre_selected_cats" value="' + $this.val() + '" />';
                    jQuery($hiddenField).appendTo(".price-plan-button");
                }
            }
        })
    });
    jQuery('.lp_button_switcher span').on('click', function() {
        jQuery('.lp_hide_general_plans').removeClass('lp-plan-view-border');
        jQuery('.lp_button_switcher span').removeClass('active');
        jQuery(this).toggleClass('active');
        jQuery("body").addClass("listingpro-loading");
        $this = jQuery(this);
        $currentVal = $this.html();
        $duration_type = '';
        $currentStyle = jQuery('#select_style').data('style');
        if ($currentVal == "Monthly") {
            $duration_type = 'monthly';
            jQuery('.switch-fields').removeClass('active')
        } else if ($currentVal == "Annually") {
            $duration_type = 'yearly';
            jQuery('.switch-fields').addClass('active')
        }
        $catID = '';
        $planUsage = '';
        if (jQuery('label').hasClass('active-category-radio')) {
            $catID = jQuery('label.active-category-radio').find('input').val()
        } else {
            $planUsage = 'default'
        }
        jQuery('.lp_hide_general_plans').html('');
        jQuery('.lp_plan_result_section').html('');
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_term_object.ajaxurl,
            data: {
                'action': 'filter_pricingplan',
                'cat_id': $catID,
                'duration_type': $duration_type,
                'currentStyle': $currentStyle,
                'planUsage': $planUsage,
            },
            success: function(data) {
                jQuery("body").removeClass("listingpro-loading");
                if (data) {
                    jQuery('.lp_plan_result_section:first').html(data.plans);
                    var $hiddenField = '<input type="hidden" name="lp_pre_selected_cats" value="' + $this.val() + '" />';
                    jQuery($hiddenField).appendTo(".price-plan-button");
                    jQuery('.lp_plan_result_section').addClass('lp-plan-view-border')
                }
            }
        })
    });
    jQuery('.lp_button_switcher a').on('click', function() {
        jQuery('.lp_hide_general_plans').removeClass('lp-plan-view-border');
        $duration_type = '';
        $currentStyle = jQuery('#select_style').data('style');
        if (jQuery(this).hasClass('active')) {
            jQuery('.lp-monthly-side').addClass('active');
            jQuery('.lp-year-side').removeClass('active');
            $duration_type = 'monthly'
        } else {
            $duration_type = 'yearly';
            jQuery('.lp-year-side').addClass('active');
            jQuery('.lp-monthly-side').removeClass('active')
        }
        jQuery("body").addClass("listingpro-loading");
        $this = jQuery(this);
        $catID = '';
        $planUsage = '';
        if (jQuery('label').hasClass('active-category-radio')) {
            $catID = jQuery('label.active-category-radio').find('input').val()
        } else {
            $planUsage = 'listingonly'
        }
        jQuery('.lp_hide_general_plans').html('');
        jQuery('.lp_plan_result_section').html('');
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_term_object.ajaxurl,
            data: {
                'action': 'filter_pricingplan',
                'cat_id': $catID,
                'duration_type': $duration_type,
                'currentStyle': $currentStyle,
                'planUsage': $planUsage,
            },
            success: function(data) {
                jQuery("body").removeClass("listingpro-loading");
                if (data) {
                    jQuery('.lp_plan_result_section:first').html(data.plans);
                    var $hiddenField = '<input type="hidden" name="lp_pre_selected_cats" value="' + $this.val() + '" />';
                    jQuery($hiddenField).appendTo(".price-plan-button");
                    jQuery('.lp_plan_result_section').addClass('lp-plan-view-border')
                }
            }
        })
    })
})