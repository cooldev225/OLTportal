/*--------------------------------- Price plan Hide and show features----------------------------------*/

jQuery(document).ready(function(){
	
	
	jQuery(document).on('click', '.lp-hide-show-price-features', function() {
    var $this = jQuery(this);
    jQuery('.lp-hide-show-price-features').text('View All Features');

    if(false == jQuery(this).next().is(':visible')) { //hide current tab when click on other tab
        //jQuery('.lp-price-list').slideUp(700);
        jQuery(".lp-hide-show-price-features").removeClass('expanded');

      }
      
      $this.toggleClass('MoreDetails');

    if($this.hasClass('MoreDetails')){
      $this.text('Hide All Features');

      //jQuery(this).closest('.section-lp-price-list').find('.lp-price-list').slideDown(700);
      jQuery(".lp-price-list").fadeIn('400');

    }else {
       
     //jQuery(this).closest('.section-lp-price-list').find('.lp-price-list').slideUp(700);
    
     $this.text('View All Features');
     
      jQuery(".lp-price-list").fadeOut('400');
    
    }

  });
});


/*-------------------Selected Radio Button ----------------*/
jQuery(document).ready(function () {
    jQuery('.lp-price-cats-with-icon li input[type=radio]').click(function () {
        jQuery('.lp-price-cats-with-icon li input[type=radio]:not(:checked)').parent().removeClass("active-category-radio");
        jQuery('.lp-price-cats-with-icon li input[type=radio]:checked').parent().addClass("active-category-radio");
    });    
});


jQuery(document).ready(function () {
    jQuery('.lp-price-cats-with-icon-v2 li input[type=radio]').click(function () {
        jQuery('.lp-price-cats-with-icon-v2 li input[type=radio]:not(:checked)').parent().removeClass("active-category-radio-v2");
        jQuery('.lp-price-cats-with-icon-v2 li input[type=radio]:checked').parent().addClass("active-category-radio-v2");
    });    
});

// Horizontal view 1 pricing version
jQuery(document).ready(function () {
    jQuery(document).on('click', '.horizontal_view_list li input[type=radio]', function(){
    	
        jQuery('.horizontal_view_list li input[type=radio]:not(:checked)').parent('label').removeClass("price_plan_active_disable");
        jQuery('.horizontal_view_list li input[type=radio]:checked').parent('label').addClass("price_plan_active_disable");
		
		// Add class for show horizontial view with the reference of this class    
        jQuery('.lp_hori_view_plan_left_section').removeClass('horizontal_choose_button');
    	jQuery(this).closest('.lp_hori_view_plan_left_section').addClass('horizontal_choose_button');
    	// add class for horizontial plan height 
    	jQuery(this).closest('.lp-horizontial-specific').addClass('lp-horizontial-specific-height');
    	
    });
    // remove class for horizontial plan height
    jQuery(document).on('click', '.lp-standerd-exlusiv button', function(event) {
    	jQuery('.lp-horizontial-specific').removeClass('lp-horizontial-specific-height');
    });
	jQuery(document).on('click', '.lp_button_switcher span', function(event) {
     jQuery('.lp-horizontial-specific').removeClass('lp-horizontial-specific-height');
   });

    jQuery('.horizontal_view_list li:nth(0) input[type=radio]').trigger('click').parent('label').addClass("price_plan_active_disable");
});



/*----------------slider for pricing plan category-----------------*/

jQuery(document).ready(function(){

  var x =  jQuery('.lp_category_list_slide').children();

	for (i = 0; i < x.length ; i += 1) {
		x.slice(i,i+1).wrapAll('<div class="'+ i +'"></div>');
	}
  if( jQuery('.lp_category_list_slide').length != 0 )
  {
      jQuery('.lp_category_list_slide').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          prevNext: true,
          arrows: true,
          dots: false,
          responsive: [
              {
                  breakpoint: 768,
                  settings: {
                      arrows: true,
                      infinite: false,
                      slidesToShow: 4,
                      slidesToScroll: 1
                  }
              },
              {
                  breakpoint: 481,
                  settings: {
                      arrows: true,
                      infinite: false,
                      slidesToShow: 3,
                      slidesToScroll: 1
                  }
              },

              {
                  breakpoint: 390,
                  settings: {
                      arrows: true,
                      infinite: false,
                      slidesToShow: 2,
                      slidesToScroll: 1
                  }
              }
          ]
      });
  }

});


/*--------------- Slider For pricing plan packages--------------*/


/*jQuery(document).ready(function(){
  jQuery('.slider_pricing_Plan').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
  arrows: true,
  fade: true,
  dots: true,
  arrows:true
  });
});*/


/*----------Drop down Category list for pricing plan-------------------*/

jQuery(document).ready(function() {
	//jQuery("#category_dropdown").select2({minimumResultsForSearch: -1});

	jQuery('#category_dropdown').on('select2:select', function (e) {

		$this = jQuery(this);
			jQuery("body").addClass("listingpro-loading");
			jQuery('#cats-selected-plans').html('');
			var templatestyle = jQuery(this).closest('#select_style').data('style');

			jQuery.ajax({
						type: 'POST',
						dataType: 'json',
						url: ajax_term_object.ajaxurl,
						data: { 
							'action': 'listingpro_select_plan_by_cat', 
							'term_id': $this.val(), 
							'templatestyle': templatestyle,
							},
						success: function(data){
							jQuery("body").removeClass("listingpro-loading");
							if(data.plans){
								jQuery('#cats-selected-plans').html(data.plans);
								var $hiddenField = '<input type="hidden" name="lp_pre_selected_cats" value="'+$this.val()+'" />';
								jQuery( $hiddenField ).appendTo( ".price-plan-button" );
							}
						}
			});
	});

});


// Pricing Plan tool tip 

jQuery(document).ready(function() {


	jQuery('.tooltip_price_features span').on('mouseover', function(){
	var $this = jQuery(this);
	$this.closest('.tooltip_price_features').find('.lp_tooltip_text').css("visibility","visible");

	});

	jQuery('.tooltip_price_features span').on('mouseout', function(){
	var $this = jQuery(this);
	$this.closest('.tooltip_price_features').find('.lp_tooltip_text').css("visibility","hidden");

	});

});

// Pricing Plan tool tip  for ajax response

jQuery(document).ready(function() {

	jQuery(document).on('mouseover', '.tooltip_price_features span', function(){
	var $this = jQuery(this);
	$this.closest('.tooltip_price_features').find('.lp_tooltip_text').css("visibility","visible");

	});

	jQuery(document).on('mouseout', '.tooltip_price_features span', function(){
	var $this = jQuery(this);
	$this.closest('.tooltip_price_features').find('.lp_tooltip_text').css("visibility","hidden");

	});
});

