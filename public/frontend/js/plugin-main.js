jQuery(function() {
    var tabs = jQuery("#tabs").tabs();
    jQuery('#tabsbtn').click(function() {
        var ul = tabs.find("ul");
        var list = Number(ul.find("li").length) + 1;
        var place1 = jQuery('#tabs-1').find('input').attr('placeholder');
        var place2 = jQuery('#tabs-1').find('textarea').attr('placeholder');
        var FAQMain = jQuery('div#tabs').data('faqtitle');
        var FaqTItle = jQuery('.faq-btns').find('li').children('a').data('faq-text');
        var FaqTItle = FaqTItle.replace(/[^A-Za-z]+/g, '');
        jQuery("<li><a href='#tab" + list + "'>" + FaqTItle + " " + list + "</a></li>").appendTo(ul);
        if( jQuery(this).hasClass('style2-tabsbtn') )
        {
            var content = "<div class='col-md-2'><label for='faq-" + list + "'>" + FAQMain + " " + list + "</label></div><div class='col-md-10'> <div class='form-group'><input type='text' class='form-control' name='faq[" + list + "]' id='faq-" + list + "' placeholder='" + place1 + "'></div><div class='form-group'><textarea class='form-control' name='faqans[" + list + "]' rows='8' id='faq-ans-" + list + "' placeholder='" + place2 + "'></textarea></div></div>";
        }
        else
        {
            var content = "<div class='form-group'><label for='faq-" + list + "'>" + FAQMain + " " + list + "</label><input type='text' class='form-control' name='faq[" + list + "]' id='faq-" + list + "' placeholder='" + place1 + "'></div><div class='form-group'><textarea class='form-control' name='faqans[" + list + "]' rows='8' id='faq-ans-" + list + "' placeholder='" + place2 + "'></textarea></div>";
        }
        if( jQuery(this).hasClass('style2-tabsbtn') )
        {
            if (jQuery('#lp-submit-form').hasClass('lpeditlistingform')) {
                jQuery("<div id='tab" + list + "'>" + content + "</div>").appendTo(tabs);
            }else{
                var location = jQuery(tabs).find('.appendother');
                jQuery("<div id='tab" + list + "'>" + content + "</div>").appendTo(location);
            }
        }
        else
        {
            var location = jQuery(tabs).find('.appendother');
            jQuery("<div id='tab" + list + "'>" + content + "</div>").appendTo(location);
        }
        tabs.tabs("refresh")
    });

    jQuery(".jFiler-input-dragDrop").click(function() {
        jQuery("#filer_input").click()
    });
    
    jQuery(document).on('click', '.jFiler-item-trash-action', function() {
		$this = jQuery(this);
		
		if($this.hasClass('lpsavedcrossgall')){
			$selectedImagesCount1 = jQuery('.lplistgallery').attr('data-savedgallerysize');
			$selectedImagesCount1 = $selectedImagesCount1-1;
			jQuery('.lplistgallery').attr('data-savedgallerysize', $selectedImagesCount1);
			jQuery('.filediv').attr('data-savedgallerysize', $selectedImagesCount1);
			
			
			$selectedImagesWeight = jQuery('.lplistgallery').attr('data-savedgallweight');
            $selectedImagesWeight = parseFloat($selectedImagesWeight);
			$selectedImagesWeight = $selectedImagesWeight.toFixed(3);
			$thisweight = $this.closest('.filediv').attr('data-savedgallweight');
            $thisweight = parseFloat($thisweight)
			$thisweight = $thisweight.toFixed(3);            
			$selectedImagesWeight = $selectedImagesWeight - $thisweight;
			jQuery('.lplistgallery').attr('data-savedgallweight', $selectedImagesWeight);
			
		}
		
        jQuery(this).parent().find('.jFiler-item-container').fadeOut();
        jQuery(this).closest('ul.jFiler-items-grid').fadeOut();
        jQuery(this).fadeOut();
        jQuery(this).next('input').attr('name', 'listImg_remove[]');
        jQuery(this).parent().parent().parent().remove();
    });
    
    jQuery(document).on('change', 'input#already-account', function (e) {
        var $this = jQuery(this);
        $this.attr('disabled', 'disabled');
        if (jQuery(this).is(':checked')) {
            jQuery('.lp-submit-no-account').fadeOut(500, function (e) {
                jQuery('.lp-submit-have-account').fadeIn(500, function () {
                    $this.removeAttr('disabled');
                });
            });
        } else {
            jQuery('.lp-submit-have-account').fadeOut(500, function (e) {
                jQuery('.lp-submit-no-account').fadeIn(500, function () {
                    $this.removeAttr('disabled');
                });
            });
        }
    });
})
jQuery(document).on('click','#add-new-social-url', function (e) {
    var get_media_url   =   jQuery('#get_media_url').val(),
        get_media       =   jQuery('#get_media').val();
	if( get_media_url == '' )
   {
       jQuery('#get_media_url').addClass('error');
   }
   else
   {
       jQuery('#get_media_url').removeClass('error');
   }
   if( get_media == 'Please Select' )
   {
       jQuery('#select2-get_media-container').addClass('error');
   }
   else
   {
       jQuery('#select2-get_media-container').removeClass('error');
   }
   if( get_media_url == '' || get_media == 'Please Select' )
   {
       return false;
   }
    if( get_media == 'Twitter' ) {
        jQuery('#inputTwitter').val(get_media_url);}
    if( get_media == 'Facebook' ) {jQuery('#inputFacebook').val(get_media_url);}
    if( get_media == 'LinkedIn' ) {jQuery('#inputLinkedIn').val(get_media_url);}
    if( get_media == 'Youtube' ) {jQuery('#inputYoutube').val(get_media_url);}
    if( get_media == 'Instagram' ) {jQuery('#inputInstagram').val(get_media_url);}

    if( jQuery('.social-row-'+get_media.replace(' ', '-') ).length != 0 )
    {
        jQuery('.social-row-'+get_media.replace(' ', '-') ).find('span').text(get_media_url);
    }
    else
    {
        var content =   '<div class="social-row social-row-'+ get_media.replace( ' ', '-' ) +'"><label>'+ get_media +'</label><span>'+ get_media_url +'</span><a class="remove-social-type" data-social="'+ get_media +'"><i class="fa fa-times"></i></a></div>';
        jQuery('.style2-social-list-section').append(content);
    }

    jQuery('#get_media_url').val('');
    jQuery('#get_media').val('');

});

jQuery(document).on('click', '.remove-social-type', function (e) {
    e.preventDefault();
    var targetType  =   jQuery(this).data('social');

    if( targetType == 'Twitter' ){ jQuery('#inputTwitter').val(''); }
    if( targetType == 'Facebook' ){ jQuery('#inputFacebook').val('');  }
    if( targetType == 'LinkedIn' ){ jQuery('#inputLinkedIn').val(''); }
    if( targetType == 'Youtube' ){ jQuery('#inputYoutube').val(''); }
    if( targetType == 'Instagram' ){ jQuery('#inputInstagram').val(''); }
    jQuery('.social-row-'+targetType).remove();

});