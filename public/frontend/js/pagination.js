jQuery(window).load(function() {
    "use strict";
	jQuery(document).on('click', '.lp-filter-pagination ul li a', function(e){
		e.preventDefault();
		jQuery('html, body').animate({scrollTop:0},500);
		var docHeight = jQuery( document ).height();
		jQuery( "body" ).prepend( '<div id="full-overlay"></div>' );
		jQuery('#full-overlay').css('height',docHeight+'px');
		jQuery('#content-grids').html(' ');
		jQuery('.solitaire-infinite-scroll').remove();
		jQuery('.lp-filter-pagination').hide('');
		jQuery('#content-grids').addClass('content-loading');
		var $this = jQuery(this);
		var navURL = $this.attr('href');
		jQuery.ajax({
                    type: "POST",
                    url: navURL,
                    success: function(response){
						
						jQuery('.page-container .content-grids-wraps').find('#content-grids').html('');
                        var $newElements = jQuery(response).find('#content-grids').html();
                        //var $newElements = jQuery(response).html();
						jQuery('.page-container .content-grids-wraps #content-grids').html($newElements);
						jQuery('.lp-filter-pagination').html('');
						jQuery('.lp-filter-pagination').html(jQuery(response).find('.lp-filter-pagination').html());
						jQuery( ".all-list-map" ).trigger('click');
						jQuery('#full-overlay').remove();
						jQuery('.lp-filter-pagination').show('');
						jQuery('#content-grids').removeClass('content-loading');
					}
					});
		});
		
		/* 
		jQuery(document).on('click', '.lp-filter-pagination-ajx ul li a', function(e){
		e.preventDefault();
		var $this = jQuery(this);
		var navURL = $this.attr('href');
		jQuery.ajax({
                    type: "POST",
                    url: navURL,
                    success: function(response){
						
						jQuery('.page-container .content-grids-wraps').find('#content-grids').html('');
                        var $newElements = jQuery(response).find('#content-grids').html();
                        //var $newElements = jQuery(response).html();
						jQuery('.page-container .content-grids-wraps #content-grids').html($newElements);
						jQuery('.lp-filter-pagination-ajx').html('');
						jQuery('.lp-filter-pagination-ajx').html(jQuery(response).find('.lp-filter-pagination').html());
						jQuery( ".all-list-map" ).trigger('click');
					}
					});
		});
		 */
		
		
	});