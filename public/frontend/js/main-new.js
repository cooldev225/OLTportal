jQuery.noConflict();

setTimeout(function() {
    if( jQuery('body').hasClass('home') )
    {
        var currentTOP  =   jQuery('.header-container header').height();
        jQuery( '.lp-header-search-wrap' ).css('top', '-'+currentTOP+'px');
    }



    jQuery(".lp-header-search .lp-header-search-form form, .lp-header-search .lp-header-search-cats ul").show()

}, 600);

jQuery(function(){
    var sidebarHeight   =   jQuery('.sidebar-top0').height(),
        DesHeight       =   sidebarHeight-200,
        topHeader       =   jQuery('.lp-listing-top-title-header').height(),
        minHeight       =   jQuery('.min-height-class').height(),
        desHeightT      =   topHeader+minHeight,
        minHeightT      =   sidebarHeight-DesHeight;

    if( DesHeight >= sidebarHeight )

    {

        jQuery('.min-height-class').css('min-height', minHeightT);

    }

    else
    {
        minHeightT  =   sidebarHeight-topHeader+140;
        jQuery('.min-height-class').css('min-height', minHeightT);

    }
});
jQuery(document).ready(function (e) {
    if(jQuery('.list').hasClass('active')){
        jQuery('.list').trigger('click');
    }
    if(jQuery('.lp-listing-top-title-header').length) {
        var top_title_header_height =   jQuery('.lp-listing-top-title-header').height();
        jQuery('.sidebar-top0').css('top', '-'+parseInt(top_title_header_height+40)+'px');
    }

    if(jQuery('#menu-placeholder-image').length){
        var menu_placeholder_image  =   jQuery('#menu-placeholder-image').val();
        var menu_chili_image  =   jQuery('#menu-chili-image').val();

        if (menu_placeholder_image != '') {
            jQuery('.lp-listing-menu-top').css('background', 'url(' + menu_placeholder_image + ')');
        }
        jQuery('.lp-listing-menuu-slide').each(function(index){
            var $thisSlide      =   jQuery(this),
                targetImg       =   $thisSlide.find('img'),
                topImgSrc       =   '';
            jQuery(targetImg).each(function (imgIndex) {
                var loopImg     =   jQuery(this),
                    targetSrc   =   loopImg.attr('src');

                if(targetSrc != menu_placeholder_image && targetSrc != menu_chili_image) {
                    topImgSrc   =   targetSrc;

                    return;
                }
            });
            if (topImgSrc != '') {
                $thisSlide.find('.lp-listing-menu-top').css('background', 'url(' + topImgSrc + ')');
            }
        });
    }
    
    if(jQuery('#datepicker-lang').length) {
        var datepicker_lang =   jQuery('#datepicker-lang').val();
        jQuery.datepicker.regional[datepicker_lang];
    }

    if(jQuery('.loop-grid-clearfix').length > 0){
        jQuery('.loop-grid-clearfix:nth-child(4)').after('<div class="clearfix"></div>');
    }

	jQuery('.claimformtrigger2').click(function () {
        jQuery('.planclaim-page-popup').show();
    })

jQuery('.lp-review-form-top-multi .lp-review-stars i').click(function (e) {
        if( jQuery('.lp-review-stars').hasClass('do-not-proceed') )
        {

        }
        else
        {
            e.preventDefault();
            jQuery('.lp-review-form-bottom').slideDown(500);
            var ratingNum   =   jQuery(this).data('rating'),
                colorCode   =   '#de9147';

            jQuery(this).closest('.lp-review-stars').addClass('do-not-proceed active-rating-avg'+ratingNum);
            jQuery(this).removeClass('fa-star-o').addClass('fa-star');

            jQuery(this).prevAll('.fa-star-o').removeClass('fa-star-o').addClass('fa-star');
            jQuery(this).nextAll('.fa-star').removeClass('fa-star-o').addClass('fa-star-o');

            if( ratingNum == 2 ) {
                colorCode   =   '#de9147';
            } else if ( ratingNum == 3 || ratingNum == 4 ) {
                colorCode   =   '#c5de35';
            } else if ( ratingNum == 5 ) {
                colorCode   =   '#73cf42';
            }

            jQuery('.lp-multi-rating-ui-wrap > .padding-left-0').each(function () {
                jQuery(this).find('.lp-multi-rating-val').val(ratingNum);
                jQuery(this).find('span:first').each(function () {

                    jQuery(this).addClass('active-stars-wrap');
                    jQuery(this).find('.rating-symbol').each(function (index) {

                        if( index < ratingNum )
                        {
                            jQuery(this).find('.rating-symbol-foreground span').css('color', colorCode);
                            jQuery(this).find('.rating-symbol-foreground span').addClass('fa fa-star fa-2x');
                            jQuery(this).find('.rating-symbol-foreground').css('width', 'auto');
                        }
                    });
                });
            });
        }

    });

    jQuery('.manage-group-types').click(function (e) {
        e.preventDefault();
        window.location.replace(jQuery(this).data('url')) ;
    });

    jQuery('.show-more-event-content').click(function (e) {

        var showMore    =   jQuery(this).data('more'),

            showLess    =   jQuery(this).data('less');
        if( jQuery(this).hasClass('expanded') )
        {
            jQuery('.lp-evnt-content-container p').css('height', '31px');
            jQuery(this).text(showMore);
            jQuery(this).removeClass('expanded');
        }
        else
        {
            jQuery('.lp-evnt-content-container p').height('auto');
            jQuery(this).addClass('expanded');
            jQuery(this).text(showLess);
        }
    });

    jQuery( ".header-cat-menu" ).hover(
        function() {
            jQuery( this ).find('#menu-category').addClass( "show-cat-nav" );
        }, function() {
            jQuery( this ).find('#menu-category').removeClass( "show-cat-nav" );
        }
    );
    
if (jQuery('#lp-submit-form').length != 0) {
        
    var lp_custom_title = '';
        if (jQuery('#lp_custom_title').length != 0) {
            lp_custom_title = jQuery('#lp_custom_title').offset().top;
        }
        var inputAddress = '';
        if (jQuery('#inputAddress').length != 0) {
            inputAddress = jQuery('#inputAddress').offset().top;
        }
        var inputTagline = '';
        if (jQuery('#lptagline').length != 0) {
            inputTagline = jQuery('#lptagline').offset().top;
        }
        var inputCity = '';
        if (jQuery('#inputCity').length != 0) {
            inputCity = jQuery('#inputCity').offset().top;
        }
         if (jQuery('#citiess').length != 0) {
            inputCity = jQuery('#citiess').offset().top;
        }
        var inputPhone = '';
        if (jQuery('#inputPhone').length != 0) {
            inputPhone = jQuery('label[for="inputPhone"]').offset().top;
        }
        var inputWhatsapp = '';
        if (jQuery('#inputWhatsapp').length != 0) {
            inputWhatsapp = jQuery('label[for="inputWhatsapp"]').offset().top;
        }
        var inputWebsite = '';
        if (jQuery('#inputWebsite').length != 0) {
            inputWebsite = jQuery('#inputWebsite').offset().top;
        }
        var inputCategory = '';
        if (jQuery('label[for="inputCategory"]').length != 0) {
            inputCategory = jQuery('label[for="inputCategory"]').offset().top;
        }
        var price_status = '';
        if (jQuery('label[for="price_status"]').length != 0) {
            price_status = jQuery('label[for="price_status"]').offset().top;
        }
        var bussinTop = '';
        if (jQuery('.bussin-top').length != 0) {
            bussinTop = jQuery('.bussin-top').offset().top;
        }
        var socialMedia = '';
        if (jQuery('#socialMedia').length != 0) {
            socialMedia = jQuery('#socialMedia').offset().top;
        }
        if (jQuery('#get_media').length != 0) {
            socialMedia = jQuery('#get_media').offset().top;
        }
        var get_media_url = '';
        if (jQuery('#get_media_url').length != 0) {
            get_media_url = jQuery('#get_media_url').offset().top;
        }
        var inpuFaqsLp = '';
        if (jQuery('label[for="inpuFaqsLp"]').length != 0) {
            inpuFaqsLp = jQuery('label[for="inpuFaqsLp"]').offset().top;
        }
        var descTop = '';
        if (jQuery('.description-tip').length != 0) {
            descTop = jQuery('.description-tip').offset().top;
        }
        if (jQuery('label[for="inputDescription"]').length != 0) {
            descTop = jQuery('label[for="inputDescription"]').offset().top;
        }
        var postVideo = '';
        if (jQuery('#postVideo').length != 0) {
            postVideo = jQuery('#postVideo').offset().top;
        }
        var gallTop = '';
        if (jQuery('.lp-img-gall-upload-section').length != 0) {
            var gallTop = jQuery('.lp-img-gall-upload-section').offset().top;
        }
        var bLogoTop = '';
        if (jQuery('.b-logo-img-label').length != 0) {
            var bLogoTop = jQuery('.b-logo-img-label').offset().top;
        }
        var featTop = '';
        if (jQuery('.featured-img-label').length != 0) {
            featTop = jQuery('.featured-img-label').offset().top;
        }
        var quicktags = '';
        if (jQuery('#inputtagsquicktip').length > 0) {
            quicktags = jQuery('#inputtagsquicktip').offset().top;
        }
        if (jQuery('#inputTags').length > 0) {
            quicktags = jQuery('#inputTags').offset().top;
        }
        jQuery(window).scroll(function (e) {
            /*if (inputTagline < 400 ) {
                inputTagline = inputTagline+400;
            }*/
            var scrollPos = jQuery(window).scrollTop()+400;
            if ( scrollPos > lp_custom_title ) {
                    jQuery('.quick-tip-inner').html(jQuery('#lptitle').data('quick-tip'));
            }
            /*if (scrollPos > inputTagline) {
                jQuery('.quick-tip-inner').html(jQuery('#lptagline').data('quick-tip'));
            }*/
            if (scrollPos > inputAddress) {
                jQuery('.quick-tip-inner').html(jQuery('#inputAddress').data('quick-tip'));
            }
            if (scrollPos > inputCity) {
                if (jQuery('#inputCity').length!=0) {
                    jQuery('.quick-tip-inner').html(jQuery('#inputCity').data('quick-tip'));
                }
                else{
                    jQuery('.quick-tip-inner').html(jQuery('#citiess').data('quick-tip'));
                }
            }
            if (scrollPos > inputPhone) {
                jQuery('.quick-tip-inner').html(jQuery('#inputPhone').data('quick-tip'));
            }
            if (scrollPos > inputWebsite) {
                jQuery('.quick-tip-inner').html(jQuery('#inputWebsite').data('quick-tip'));
            }
            if (scrollPos > inputWhatsapp) {
                jQuery('.quick-tip-inner').html(jQuery('#inputWhatsapp').data('quick-tip'));
            }
            if (scrollPos > inputCategory) {
                jQuery('.quick-tip-inner').html(jQuery('#inputCategory').data('quick-tip'));
            }
            if (scrollPos > price_status) {
                jQuery('.quick-tip-inner').html(jQuery('#price_status').data('quick-tip'));
            }
            if (scrollPos > bussinTop) {
                jQuery('.quick-tip-inner').html(jQuery('.bussin-top').data('quick-tip'));
            }
            if (scrollPos > socialMedia) {
                if (jQuery('#socialMedia').length != 0) {
                    jQuery('.quick-tip-inner').html(jQuery('#socialMedia').data('quick-tip'));
                }
                else{
                    jQuery('.quick-tip-inner').html(jQuery('#get_media').data('quick-tip'));
                }
            }
            if (scrollPos > inpuFaqsLp) {
                if (jQuery('#inpuFaqsLp').data('quick-tip')) {
                    jQuery('.quick-tip-inner').html(jQuery('#inpuFaqsLp').data('quick-tip'));
                } else {
                    jQuery('.quick-tip-inner').html(jQuery('#inpuFaqsLp1').data('quick-tip'));
                }
            }
            if (scrollPos > descTop) {
                if (jQuery('.description-tip').length > 0) {
                    jQuery('.quick-tip-inner').html(jQuery('.description-tip').data('quick-tip'));
                } else {
                    jQuery('.quick-tip-inner').html(jQuery('label[for="inputDescription"]').data('quick-tip'));
                }
            }
            if (scrollPos > quicktags) {
                if (jQuery('#inputTags').length > 0) {
                    jQuery('.quick-tip-inner').html(jQuery('#inputTags').data('quick-tip'));
                }
                else{
                    jQuery('.quick-tip-inner').html(jQuery('#inputtagsquicktip').data('quick-tip'));
                }
            }
            if (scrollPos > postVideo) {
                jQuery('.quick-tip-inner').html(jQuery('#postVideo').data('quick-tip'));
            }
            if (scrollPos > gallTop) {
                jQuery('.quick-tip-inner').html(jQuery('.lp-img-gall-upload-section').data('quick-tip'));
            }
            if (scrollPos > bLogoTop) {
                jQuery('.quick-tip-inner').html(jQuery('.b-logo-img-label').data('quick-tip'));
            }
            if (scrollPos > featTop) {
                jQuery('.quick-tip-inner').html(jQuery('.featured-img-label').data('quick-tip'));
            }
        });

        jQuery('#lp-submit-form input, #lp-submit-form textarea').on('focus', function (e) {

            var quickTip = jQuery(this).data('quick-tip');

            jQuery('.quick-tip-inner').html(quickTip);

        });

    jQuery('#price_status').on('chosen:showing_dropdown', function () {
        var quickTip = jQuery(this).data('quick-tip');
        jQuery('.quick-tip-inner').html(quickTip);
    });

    jQuery('.b-logo-img-label, .featured-img-label, .lplistgallery').on('click', function(){
        var quickTip = jQuery(this).data('quick-tip');
        jQuery('.quick-tip-inner').html(quickTip);
    });
        jQuery('select.select2').on('select2:open', function (e) {

            var quickTip = jQuery(this).data('quick-tip');

            jQuery('.quick-tip-inner').html(quickTip);

        });

    }

    if( jQuery('.page-style2-sidebar').length!= 0 )

    {

        var scrollState =   '';

        var offset = jQuery('.page-style2-sidebar').offset().top-50;

        jQuery(window).scroll(function (event) {

            var scroll = jQuery(window).scrollTop();

            if( offset >= scroll )

            {

                jQuery('.page-style2-sidebar').css({

                    'position':'static',

                    'width': 'auto'

                });

                jQuery('.page-style2-sidebar').removeClass('style2-sidebar-fixed');
                scrollState =   'scrolled';
            }
            else
            {
                var topMAr  =   10;
                if( jQuery('.page-style2-sidebar').hasClass('logged-in') )
                {
                    topMAr  =   50;
                }
                if( scrollState == 'scrolled' )
                {

                    // jQuery('.page-style2-sidebar').css({

                    //     'position':'fixed',

                    //     'top' : topMAr+'px',

                    //     'width': '338px'

                    // });

                    // jQuery('.page-style2-sidebar').css({
                    //
                    //     'position':'fixed',
                    //
                    //     'top' : 0,
                    //
                    //     'width': '338px'
                    //
                    // }).animate({
                    //
                    //     top: -150
                    //
                    // }, 250, function () {
                    //
                    //     jQuery('.page-style2-sidebar').animate({
                    //
                    //         top: 200
                    //
                    //     }, 250, function () {
                    //
                    //         jQuery('.page-style2-sidebar').animate({
                    //
                    //             top: -100
                    //
                    //         }, 300, function () {
                    //
                    //             jQuery('.page-style2-sidebar').animate({
                    //
                    //                 top: 100
                    //
                    //             }, 300, function () {
                    //
                    //                 jQuery('.page-style2-sidebar').animate({
                    //
                    //                     top: -50
                    //
                    //                 }, 350, function () {
                    //
                    //                     jQuery('.page-style2-sidebar').animate({
                    //
                    //                         top: topMAr
                    //
                    //                     }, 400)
                    //
                    //                 })
                    //
                    //             })
                    //
                    //         });
                    //
                    //     })
                    //
                    // })

                    jQuery('.page-style2-sidebar').addClass('style2-sidebar-fixed testClass');
                    scrollState =   '';
                }

            }

        });

    }
    var firstDay = jQuery('#start_of_weekk').val();
    if(jQuery('#event-date-s').length) {
        var dateTodayy = new Date();
        jQuery('#event-date-s').datepicker({
            firstDay: firstDay,
            minDate: dateTodayy,
            dateFormat: 'mm/dd/yy',
            onSelect: function(dateText, inst) {
                // Get the selected date
                var inDate = new Date(jQuery(this).val());
                // Set the minimum date for the check out option to the selected date
                jQuery("#event-date-e").datepicker('option', 'minDate',inDate);
            }
        });
        jQuery('#event-date-e').datepicker({
            firstDay: firstDay,
            minDate: dateTodayy,
            dateFormat: 'mm/dd/yy'
        });
    }

    var dateToday = new Date();
    jQuery('.discount-date').datepicker({
        firstDay: firstDay,
        minDate: dateToday,
        dateFormat: 'mm/dd/yy'
    });


    jQuery('.mobile-toggle-filters').click(function (e) {

        e.preventDefault();

        jQuery('.filters-wrap-for-mobile').slideToggle(500);

    });



    jQuery('#lp-review-listing').on('select2:select', function (e) {

        var reviewStyle =   jQuery('#reviews-nav-li').data('style'),
            listID      =   jQuery('#lp-review-listing option:selected').val(),
            authorID    =   jQuery('.lp-author-nav').data('author');

        jQuery('#reviews').find('.author-inner-content-wrap').addClass('content-loading');
        jQuery.ajax({
            type: 'POST',
            url: ajax_search_term_object.ajaxurl,
            data: {
                'action': 'author_review_tab_cb',
                'reviewStyle': reviewStyle,
                'listID' : listID,
                'authorID': authorID,
                'lpNonce' : jQuery('#lpNonce').val()
            },

            success: function(data)
            {
                jQuery('#reviews').find('.author-inner-content-wrap').removeClass('content-loading');
                jQuery('#reviews').find('.author-inner-content-wrap').html(data);

                //$this.addClass('data-available');

            }

        });

    })

    jQuery('.lp-author-nav li a').click(function (e) {

        e.preventDefault();

        var $this   =   jQuery(this),
            targetID    =   $this.attr('href'),
            authorID    =   jQuery('.lp-author-nav').data('author'),
            tabType     =   '',
            reviewStyle =   '',
            listingLayout   =   '';


        if( targetID == '#reviews' )
        {
            tabType =   'reviews';
            var reviewStyle =   $this.data('style');
        }
        else if( targetID == '#photos' )
        {
            tabType =   'photos';
        }
        else if( targetID == '#aboutme' )
        {
            tabType =   'aboutme';
        }
        else if( targetID == '#contact' )
        {
            tabType =   'contact';
        }
        else if ( targetID == '#mylistings' )
        {
            tabType =   'mylistings';
            listingLayout   =   $this.data('listing-layout');
        }

        jQuery('.lp-author-nav li a.active').removeClass('active');
        $this.addClass('active');

        jQuery('.author-tab-content .active').removeClass('active').hide();
        jQuery(targetID).addClass('active').show();

        if( $this.hasClass( 'data-available' ) )
        {
            return false;
        }
        else
        {
            jQuery(targetID).find('.author-inner-content-wrap').addClass('content-loading');

            jQuery.ajax({
                type: 'POST',
                url: ajax_search_term_object.ajaxurl,
                data: {
                    'action': 'author_archive_tabs_cb',
                    'tabType': tabType,
                    'reviewStyle': reviewStyle,
                    'authorID': authorID,
                    'listingLayout' : listingLayout,
                    'lpNonce' : jQuery('#lpNonce').val()
                },
                success: function(data) {
                    jQuery(targetID).find('.author-inner-content-wrap').removeClass('content-loading');
                    jQuery(targetID).find('.author-inner-content-wrap').html(data);
                    $this.addClass('data-available');
                    jQuery('.author-contact-wrap').find('.lp-review-btn').attr('disabled', 'disabled');
                    jQuery('.author-contact-wrap input, .author-contact-wrap textarea').keyup(function () {
                        var name = jQuery('.author-contact-wrap input#name7').val();
                        var email = jQuery('.author-contact-wrap input#email7').val();
                        var phone = jQuery('.author-contact-wrap input#phone7').val();
                        var message = jQuery('.author-contact-wrap textarea#message7').val();
                        if (name.length > 0 && email.length > 0 && phone.length > 0 && message.length > 0) {
                            jQuery('.author-contact-wrap').find('.lp-review-btn').removeAttr('disabled');
                        } else {
                            jQuery('.author-contact-wrap').find('.lp-review-btn').attr('disabled', 'disabled');
                        }
                    });
                    jQuery('.author-contact-wrap .lp-review-btn').click(function (event) {
                        event.preventDefault();
                        var $this = jQuery(this),
                            name = jQuery('.author-contact-wrap input#name7').val(),
                            email = jQuery('.author-contact-wrap input#email7').val(),
                            phone = jQuery('.author-contact-wrap input#phone7').val(),
                            message = jQuery('.author-contact-wrap textarea#message7').val(),
                            target_user_mail = jQuery('.mail_target_author').val();
                        jQuery('.author-contact-wrap').find('.lp-review-btn').attr('disabled', 'disabled');
                        jQuery('.author-contact-wrap').find('.lp-review-btn').closest('.form-group').find('.lp-search-icon').removeClass('fa-send');
                        jQuery('.author-contact-wrap').find('.lp-review-btn').closest('.form-group').find('.lp-search-icon').addClass('fa-spinner fa-spin');
                        jQuery('.author-contact-wrap input, .author-contact-wrap textarea').attr('disabled', 'disabled');
                        jQuery.ajax({
                            type: 'POST',
                            url: ajax_search_term_object.ajaxurl,
                            data: {
                                'action': 'send_author_mail',
                                'field-name': name,
                                'field-email': email,
                                'field-phone': phone,
                                'field-message': message,
                                'data-userMail': target_user_mail,
                                'lpNonce': jQuery('#lpNonce').val()
                            },
                            success: function (data) {
                                jQuery('.author-contact-wrap').find('.lp-review-btn').closest('.form-group').find('.lp-search-icon').addClass('fa-check');
                                jQuery('.author-contact-wrap').find('.lp-review-btn').closest('.form-group').find('.lp-search-icon').removeClass('fa-spinner fa-spin');
                                setTimeout(function () {
                                    jQuery('.author-contact-wrap').find('.lp-review-btn').removeAttr('disabled');
                                    jQuery('.author-contact-wrap input, .author-contact-wrap textarea').removeAttr('disabled');
                                    jQuery('.author-contact-wrap input#name7').val('');
                                    jQuery('.author-contact-wrap input#email7').val('');
                                    jQuery('.author-contact-wrap input#phone7').val('');
                                    jQuery('.author-contact-wrap textarea#message7').val('');
                                    jQuery('.author-contact-wrap').find('.lp-review-btn').closest('.form-group').find('.lp-search-icon').addClass('fa-send');
                                    jQuery('.author-contact-wrap').find('.lp-review-btn').closest('.form-group').find('.lp-search-icon').removeClass('fa-check');
                                }, 2000);
                            },
                        });
                        return false;
                    });
                }
            });
        }
    });



    jQuery('.author-inner-content-wrap .lp-pagination span').click(function (e) {

        var $this   =   jQuery(this);
        var pageNum =   jQuery(this).data('pageurl');

        jQuery('span.current').removeClass('current');
        jQuery('#content-grids').html('').addClass('content-loading');



        jQuery.ajax({
            type: 'POST',
            url: ajax_search_term_object.ajaxurl,
            data: {
                'action': 'author_archive_listings_cb',
                'pageNum': pageNum,
                'lpNonce' : jQuery('#lpNonce').val()

            },
            success: function(data)
            {
                $this.addClass('current');
                jQuery('#content-grids').removeClass('content-loading').html(data);
            }
        });



    });

    jQuery('.lp-header-nav-btn button').click(function (e) {

        if( jQuery('.lp-header-nav-btn').hasClass('active-can-menu') )

        {

            jQuery('.lp-header-nav-btn').removeClass('active-can-menu');

            jQuery('#menu-categories-menu').css('opacity', '0');

            jQuery('#menu-categories-menu').css('transform', 'scale(0)');

        }

        else

        {

            jQuery('#menu-categories-menu').css('opacity', '1');

            jQuery('#menu-categories-menu').css('transform', 'scale(1)');

            jQuery('.lp-header-nav-btn').addClass('active-can-menu');

        }

    });





    jQuery( '.browse-imgs' ).click(function (e) {

        e.preventDefault();
        jQuery('#filer_input2').trigger('click');

    });



    jQuery('.search-filter-response .loop-switch-class').last().find('.lp-listing').addClass('last');

    jQuery('.lp-author-listings-wrap .loop-switch-class').last().find('.lp-listing').addClass('last');

    jQuery('.lp-listing-announcement .announcement-wrap').last().addClass('last');



    jQuery('.lp-review-form-top-multi .lp-listing-stars, .lp-review-images .browse-imgs, .lp-review-form-top-multi .lp-review-stars').click(function(e){
        if( jQuery('.lp-review-form-bottom').hasClass('review-form-opened') )
       {  }
       else
       {
           jQuery('.lp-review-form-bottom').slideDown(500);
           jQuery('.lp-review-form-bottom').addClass('review-form-opened');
       }   
                                                                                 
    });

    // jQuery('.lp-listing-stars').click(function(e){

    //     jQuery('.lp-review-form-bottom').slideToggle(500);

    // })

    var topWidgetWrap       =   jQuery('.lp-widget-inner-wrap').first();

    var lastWidgetWrap      =   jQuery('.lp-widget-inner-wrap').last();



    if( topWidgetWrap.hasClass('lp-listing-timings') )

    {

        topWidgetWrap.find('.lp-today-timing').addClass('top-border-radius');

    }

    else

    {

        topWidgetWrap.addClass('top-border-radius');

    }

    if( lastWidgetWrap.hasClass('lp-listing-timings') )

    {

        lastWidgetWrap.find('.lp-today-timing').addClass('bottom-border-radius');

    }

    else if( lastWidgetWrap.hasClass('singlemap') )

    {

        jQuery('.lp-widget-social-links').addClass('bottom-border-radius');

    }

    else

    {

        lastWidgetWrap.addClass('bottom-border-radius');

    }

    // if( jQuery('.dis-code-copy-pop').length != 0 )
    //
    // {
    //     jQuery('.dis-code-copy-pop').each(function (e) {
    //
    //         var minusBottom =   0;
    //         if( jQuery(this).hasClass('extra-bottom') )
    //         {
    //             minusBottom =   49;
    //         }
    //         var $this       =   jQuery(this),
    //             popHeight   =   $this.height()-minusBottom;
    //
    //
    //         $this.css('bottom', '-'+popHeight+'px');
    //
    //         $this.attr('bottom', popHeight);
    //     });
    //
    // }

    

    jQuery('.lp-dis-code-copy span').click(function (e)

    {

        var targetCodeEL    =   jQuery(this).data('target-code'),

            targetCodeELC   =   '.'+targetCodeEL;



        var copyCode    =   jQuery( targetCodeELC).find('strong.copycode').text();



        jQuery( targetCodeELC).find('input.codtopcopy').val(copyCode).select();

        document.execCommand("copy");

        jQuery(this).html('<i class="fa fa-files-o" aria-hidden="true"></i> copied').delay(1000).show(500, function(e)

        {

            jQuery(targetCodeELC).fadeOut();

            jQuery('.code-overlay').fadeOut();

        });



    });



    jQuery('.close-copy-code').click(function (e)

    {

        e.preventDefault();

        var targetCodeEL    =   jQuery(this).data('target-code'),

            targetCodeELC   =   '.'+targetCodeEL;



        jQuery(targetCodeELC).fadeOut();

        jQuery('.code-overlay').fadeOut();

    });



    jQuery('.more-filters').click(function(e)

    {

        jQuery('.lp-header-search-filters .lp-features-filter').toggleClass( 'add-border' );

        jQuery('.more-filters-container').slideToggle();
        
    })



    function toggleIcon(e)

    {



        jQuery(e.target)

            .prev('.faq-heading')

            .find(".more-less")

            .toggleClass('glyphicon-plus glyphicon-minus');





    }

    // jQuery('.faq-heading a').on('click',function(e){

    //     jQuery( '.collapse.in.faq-answer' ).collapse('hide');

    // });

    slickINIT();

    if( jQuery('.listing-slider').length != 0 )

    {

        jQuery('.listing-slider').slick({

            infinite: true,

            slidesToShow: 3,

            slidesToScroll: 3,

            prevArrow:"<i class=\"fa fa-angle-right arrow-left\" aria-hidden=\"true\"></i>",

            nextArrow:"<i class=\"fa fa-angle-left arrow-right\" aria-hidden=\"true\"></i>",

            responsive: [

                {

                    breakpoint: 768,

                    settings: {

                        slidesToShow: 1,

                        slidesToScroll: 1,

                        infinite: true

                    }

                }

            ]

        });

        jQuery('.lp-listings .listing-slider').show();

    }



    // slickINIT();

    // jQuery('.single-tabber2 ul li a').click(function (e) {
    //
    //     var menuCheck   =   jQuery(this).attr('href');
    //     if( menuCheck == '#menu_tab' )
    //     {
    //         slickINIT();
    //     }
    //
    // });



    if( jQuery('.lp-child-cats-tax-slider').length != 0 )

    {

        var chilCatsLoc =   jQuery( '.lp-child-cats-tax-slider' ).data('child-loc'),

            childCatNum =   3;

        if( chilCatsLoc == 'fullwidth' )

        {

            childCatNum =   5;

        }

        if( jQuery('.lp-child-cats-tax-wrap').length > childCatNum )
        {
            jQuery('.lp-child-cats-tax-slider').slick({

                infinite: true,

                slidesToShow: childCatNum,

                slidesToScroll: 1,

                prevArrow:"<i class=\"fa fa-angle-right arrow-left\" aria-hidden=\"true\"></i>",

                nextArrow:"<i class=\"fa fa-angle-left arrow-right\" aria-hidden=\"true\"></i>"

            });
        }        

    }
    
    if( jQuery('.events-sidebar-wrap').length )
    {
        var eventsNum   =   jQuery('.events-sidebar-wrap').data('num');

        if( eventsNum > 1 )
        {
            jQuery('.events-sidebar-wrap').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow:"<i class=\"fa fa-angle-right arrow-left\" aria-hidden=\"true\"></i>",
                nextArrow:"<i class=\"fa fa-angle-left arrow-right\" aria-hidden=\"true\"></i>",
                adaptiveHeight: true
            });
        }
    }
    if( jQuery('.events-content-area-wrap').length )
    {
        var eventsNum   =   jQuery('.events-content-area-wrap').data('num');

        if( eventsNum > 2 )
        {
            jQuery('.events-content-area-wrap').slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                prevArrow:"<i class=\"fa fa-angle-right arrow-left\" aria-hidden=\"true\"></i>",
                nextArrow:"<i class=\"fa fa-angle-left arrow-right\" aria-hidden=\"true\"></i>"
            });
        }
    }
    if( jQuery('.events-element-content-area-wrap').length )
    {
        var eventsNum   =   jQuery('.events-element-content-area-wrap').data('num');

        if( eventsNum > 3 )
        {
            jQuery('.events-content-area-wrap').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow:"<i class=\"fa fa-angle-right arrow-left\" aria-hidden=\"true\"></i>",
                nextArrow:"<i class=\"fa fa-angle-left arrow-right\" aria-hidden=\"true\"></i>"
            });
        }
    }
    
    if( jQuery('.app-view-new-ads-slider').length )
    {
        jQuery('.app-view-new-ads-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true
        });
    }
    if( jQuery('.app-view2-banner-cat-slider').length )
    {
        jQuery('.app-view2-banner-cat-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
        });
    }
    if( jQuery('.app-view2-location-container').length )
    {
        jQuery('.app-view2-location-container').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false
        });
    }

    if( jQuery('.lp-locations-slider') .length != 0 && jQuery('.lp-locations-slider .lp-location-box').length > 6 )

    {
        jQuery('.lp-locations-slider').slick({

            infinite: true,

            slidesToShow: 6,

            slidesToScroll: 1,

            nextArrow:"<i class=\"fa fa-angle-right arrow-left\" aria-hidden=\"true\"></i>",

            prevArrow:"<i class=\"fa fa-angle-left arrow-right\" aria-hidden=\"true\"></i>",
			responsive: [

                   {
                       breakpoint: 480,
                       settings: {
                           arrows: true,
                           centerMode: false,
                           centerPadding: '0px',
                           slidesToShow: 2
                       }
                   }
               ]

        });

    }
    jQuery('.sort-by-filter').hover(function (e)

    {

        e.preventDefault();



        if( jQuery( this ).hasClass('active-tooltip-filter') )

        {

            return false;

        }

        jQuery('.active-tooltip-filter').find('.sort-filter-inner').fadeOut(200);

        jQuery('.active-tooltip-filter').removeClass('active-tooltip-filter');

        jQuery(this).addClass('active-tooltip-filter');

        jQuery(this).find('.sort-filter-inner').fadeIn(200);

    })

    jQuery('body').click(function(e){



        if(e.target.id == "header-rated-filter" || e.target.id == "header-reviewed-filter" || e.target.id == "header-viewed-filter" )

            return;

        if(jQuery('.sort-filter-inner').is(":visible"))

        {

            jQuery('.sort-filter-inner').fadeOut(200);

        }

        jQuery('.active-tooltip-filter').removeClass('active-tooltip-filter');

    });

    // jQuery('.listing-toggle-btn').click(function(e)

    // {

    //     e.preventDefault();

    //     if( !jQuery(this).hasClass('active') )

    //     {

    //         var targetView  =   jQuery(this).data('view');

    //         jQuery('.listing-toggle-btn').removeClass('active');

    //         jQuery(this).addClass('active');

    //

    //

    //         if( targetView == 'grid-style' )

    //         {

    //             jQuery('.loop-switch-class').removeClass('col-md-12');

    //             jQuery('.loop-switch-class').addClass('col-md-6');

    //             jQuery('.lp-listings.active-view').removeClass('list-style');

    //             jQuery('.lp-listings.active-view').addClass('grid-style');

    //         }

    //         if( targetView == 'list-style' )

    //         {

    //             jQuery('.loop-switch-class').removeClass('col-md-6');

    //             jQuery('.loop-switch-class').addClass('col-md-12');

    //             jQuery('.lp-listings.active-view').addClass('list-style');

    //             jQuery('.lp-listings.active-view').removeClass('grid-style');

    //

    //         }

    //

    //     }

    //

    // });

    jQuery('.listing-view-layout ul li a').click(function (e) {

       e.preventDefault();

       var $this   =   jQuery(this),

           targetView  =   '';

       if($this.hasClass('list'))

       {

           targetView  =   'list-style';

       }

       if($this.hasClass('grid'))

       {

           targetView  =   'grid-style';

       }

       if( targetView == 'grid-style' )

       {

           jQuery('.loop-switch-class').removeClass('col-md-12');

           jQuery('.loop-switch-class').addClass('col-md-6');
           jQuery('.loop-switch-class.listing-style-1').removeClass('col-md-6');
           jQuery('.loop-switch-class.listing-style-1').addClass('col-md-4');

           jQuery('.lp-listings.active-view').removeClass('list-style');

           jQuery('.lp-listings.active-view').addClass('grid-style');

       }

       if( targetView == 'list-style' )

       {
            
           jQuery('.loop-switch-class').removeClass('col-md-6');
             jQuery('.loop-switch-class.listing-style-1').removeClass('col-md-4');

           jQuery('.loop-switch-class').addClass('col-md-12');

           jQuery('.lp-listings.active-view').addClass('list-style');

           jQuery('.lp-listings.active-view').removeClass('grid-style');



       }



   });



    if( jQuery('.lp-listing-slider').length != 0 )

    {

        var totalSlides     =   jQuery('.lp-listing-slider').attr('data-totalSlides'),

            slidesToShow    =   3;

        if( totalSlides == 1 )

        {

            slidesToShow    =   1;

        }

        if( totalSlides ==  2 )

        {

            slidesToShow    =   2;

        }

        jQuery('.lp-listing-slider').slick({

            infinite: true,

            slidesToShow: slidesToShow,

            slidesToScroll: 1,

            prevArrow: "<i class=\"fa fa-angle-right arrow-left\" aria-hidden=\"true\"></i>",

            nextArrow: "<i class=\"fa fa-angle-left arrow-right\" aria-hidden=\"true\"></i>",
			responsive: [
                   {
                       breakpoint: 480,
                       settings: {
                           arrows: true,
                           centerMode: false,
                           centerPadding: '0px',
                           slidesToShow: 2
                       }
                   }
               ]

        });



        jQuery('.lp-listing-slider').show();

    }

    if( jQuery('.listing-review-slider').length != 0 )

    {
        var totalSlieds =   jQuery( '.listing-review-slider' ).attr('data-review-thumbs');
        jQuery('.listing-review-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: "<i class=\"fa fa-angle-right arrow-left\" aria-hidden=\"true\"></i>",
            nextArrow: "<i class=\"fa fa-angle-left arrow-right\" aria-hidden=\"true\"></i>"

        });
    }


    jQuery( '.btn-link-field-toggle' ).click( function (e)

    {

        var dataTargetLink  =   jQuery(this).data('target-link');



        jQuery( '.btn-link-target' ).slideToggle(300);

        jQuery( this ).toggleClass( 'link-active' );



        var targetSwitch    =   'input#'+dataTargetLink;

        jQuery(targetSwitch).val('');

    });



    jQuery('.review-form-toggle, .lp-listing-review-form h2').click(function(e)
    {
        e.preventDefault();
        jQuery('.lp-listing-review-form .lp-form-opener').hide();

        jQuery('.lp-listing-review-form').find( 'i.fa-chevron-down, i.fa-chevron-up' ).toggleClass('fa-chevron-down fa-chevron-up');
        jQuery('.lp-review-form-bottom').slideToggle(500);
        jQuery('html,body').animate(

            {

                scrollTop: jQuery(".lp-listing-review-form").offset().top -100

            },

            'slow');

    });

    jQuery('.lp-see-menu-btn').click(function (e) {

        e.preventDefault();

        jQuery('html,body').animate(

            {

                scrollTop: jQuery(".lp-listing-menuu-wrap").offset().top - 120

            },

            'slow');

    })



    jQuery('.toggle-all-days').click(function(e)
    {
        e.preventDefault();
        var leftColHeight   =   jQuery('.min-height-class').height(),
            timingsIH       =   jQuery('.lp-listing-timings').height();

        jQuery('.lp-today-timing.all-days-timings').slideToggle(200).toggleClass('days-opened');
        var lessText = jQuery(this).data('contract');
        var moreText    =   jQuery(this).data('expand');
        setTimeout(function(){
            var isOpened    =   jQuery('.lp-today-timing.all-days-timings').is('.days-opened');

            if( isOpened === true ) {
                var timingsOH           =   jQuery('.lp-listing-timings').height(),
                    leftColHeightN      =   leftColHeight+timingsOH;
                jQuery('.min-height-class').css('min-height', leftColHeightN+'px');
                jQuery('.toggle-all-days').html('<i class="fa fa-minus" aria-hidden="true"></i> ' + lessText);
            }
            else
            {
                var leftColHeightN      =   leftColHeight-timingsIH;
                jQuery('.min-height-class').css('min-height', leftColHeightN+'px');
                jQuery('.toggle-all-days').html('<i class="fa fa-plus" aria-hidden="true"></i> '+moreText);
            }
        }, 150);

    });

    
    jQuery('.toggle-all-days2').click(function(e)
    {
        e.preventDefault();
        var leftColHeight   =   jQuery('.min-height-class').height(),
            timingsIH       =   jQuery('.lp-listing-timings').height();
        jQuery('.lp-today-timing.all-days-timings').slideToggle(200).toggleClass('days-opened');
        setTimeout(function(){
            var isOpened    =   jQuery('.lp-today-timing.all-days-timings').is('.days-opened');
            if( isOpened === true ) {
                var timingsOH           =   jQuery('.lp-listing-timings').height(),
                    leftColHeightN      =   leftColHeight+timingsOH;
                jQuery('.min-height-class').css('min-height', leftColHeightN+'px');
            }
            else
            {
                var leftColHeightN      =   leftColHeight-timingsIH;
                jQuery('.min-height-class').css('min-height', leftColHeightN+'px');
            }
        }, 150);
    });
    
    jQuery('.toggle-additional-details').click(function(e)
    {
        e.preventDefault();
        jQuery('.additional-detail-hidden').slideToggle(200).toggleClass('details-opened');

        var lessText    =   jQuery(this).data('contract');
        var moreText    =   jQuery(this).data('expand');

        var leftColHeight       =   jQuery('.min-height-class').height(),
            additoinalIH        =   jQuery('.lp-listing-additional-details').height();

        setTimeout(function(){
            var isOpened    =   jQuery('.additional-detail-hidden').is('.details-opened');
            if( isOpened === true )
            {
                var additoinalOH    =   jQuery('.lp-listing-additional-details').height(),
                    leftColHeightN  =   (leftColHeight+additoinalOH)-360;

                jQuery('.min-height-class').css('min-height', leftColHeightN+'px');
                jQuery('.toggle-additional-details').html('<i class="fa fa-minus" aria-hidden="true"></i> '+lessText);
            }
            else
            {
                var leftColHeightN      =   (leftColHeight-additoinalIH)+360;
                jQuery('.min-height-class').css('min-height', leftColHeightN+'px');

                jQuery('.toggle-additional-details').html('<i class="fa fa-plus" aria-hidden="true"></i> '+moreText);
            }
        }, 150);

    });



    jQuery('.lp-listing-faqs').on('hidden.bs.collapse', toggleIcon);

    jQuery('.lp-listing-faqs').on('shown.bs.collapse', toggleIcon);



    jQuery(document).on('click', '.add-to-fav-v2',function(e)

    {

        e.preventDefault()

        $this = jQuery(this);

        $this.find('i').addClass('fa-spin fa-spinner');

        var val = jQuery(this).data('post-id');

        var type = jQuery(this).data('post-type');



        jQuery.ajax({

            type: 'POST',

            dataType: 'json',

            url: ajax_search_term_object.ajaxurl,

            data: {

                'action': 'listingpro_add_favorite_v2',

                'post-id': val,

                'type': type,
                'lpNonce' : jQuery('#lpNonce').val()

            },

            success: function(data)

            {

                if(data){

                    if(data.active == 'yes'){

                        $this.find('i').removeClass('fa-spin fa-spinner');

                        if(data.type == 'grid' || data.type == 'list')

                        {

                            $this.find('i').removeClass('fa-heart-o');

                            $this.find('i').addClass('fa-heart');

                        }

                        else

                        {

                            var successText =$this.data('success-text');

                            $this.find('span').text(successText);

                            $this.html('<i class="fa fa-bookmark" aria-hidden="true"></i> '+data.text);

                        }

                        $this.removeClass('add-to-fav-v2');

                        $this.addClass('remove-fav-v2');

                    }

                }

            }

        });

    });



    jQuery(document).on('click', '.remove-fav-v2', function(e)

    {

        e.preventDefault();

        var val = jQuery(this).data('post-id');

        var type = jQuery(this).data('post-type');

        jQuery(this).find('i').removeClass('fa-close');

        jQuery(this).find('i').addClass('fa-spinner fa-spin');



        $this = jQuery(this);

        jQuery.ajax({

            type: 'POST',

            dataType: 'json',

            url: ajax_search_term_object.ajaxurl,

            data: {

                'action': 'listingpro_remove_favorite_v2',

                'post-id': val,

                'type' : type,
                'lpNonce' : jQuery('#lpNonce').val()

            },

            success: function(data)

            {

                if(data){

                    if(data.remove == 'yes')

                    {
                        $this.find('i').removeClass('fa-spin fa-spinner');

                        if(data.type == 'grid' || data.type == 'list')

                        {
                            $this.find('i').addClass('fa-heart-o');
                        }

                        else

                        {
                            $this.html('<i class="fa fa-bookmark-o" aria-hidden="true"></i> '+data.text);
                        }
						 if( jQuery('.page-template-template-favourites').length != 0 )
						{
						$this.closest( ".lp-grid-box-contianer" ).fadeOut();
						}
                        $this.removeClass('remove-fav-v2');

                        $this.addClass('add-to-fav-v2');

                    }

                }

            }

        });



    });



    /* Social Share */

    var social = jQuery('.lp-listing-action-btns ul li div.social-icons.post-socials');

    var socialOvrly = jQuery('.lp-listing-action-btns ul li .md-overlay');



    jQuery('.lp-single-sharing').on('click', function(event)

    {

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



    socialOvrly.on('click', function(event)

    {



        event.preventDefault();

        social.hide();



        if(socialOvrly.hasClass('show')){

            jQuery(socialOvrly).removeClass('show');

            jQuery(socialOvrly).addClass('hide');

        }

        else{

            jQuery(socialOvrly).removeClass('hide');

            jQuery(socialOvrly).addClass('show');

        }

    });



    jQuery(document).on('click' , '.lp-review-right-bottom .review-reaction, .lp-activity-description .review-reaction',function(e)

    {
        e.preventDefault();
        if(jQuery(this).hasClass('active-now')) { return false; }
        reviewID = '';

        ajaxResErr = '';

        var $this = jQuery(this);

        $this.addClass('active-now');

        reviewID = $this.data('id'),

            currentVal = $this.data('score'),

            restype = $this.data('restype');



        $this.find('span.react-count').html('<i class="fa fa-spinner fa-spin"></i>');

        jQuery.ajax({

            type: 'POST',

            dataType: 'json',

            url: ajax_review_object.ajaxurl,

            data:{

                action:'lp_reviews_interests',

                interest : currentVal,

                restype : restype,

                id : reviewID,
                'lpNonce' : jQuery('#lpNonce').val()

            },



            success: function(res){



                if(res.errors=="no"){

                    ajaxResErr = 'no';

                    var newscore = res.newScore;

                    $this.data('score', newscore);

                    $this.find('span.react-count').html(newscore);

                    $this.find('span.react-msg').text(res.statuss).fadeIn(500).delay(2000).fadeOut(500);



                    if(restype=='interesting'){

                        $this.css({'background-color': '#417cdf',

                            'color': '#fff'});

                        $this.find('span.react-count').css({'color': '#fff'});

                    }

                    else if(restype=='lol'){

                        $this.css({'background-color': '#ff8e29',

                            'color': '#fff'});

                        $this.find('span.react-count').css({'color': '#fff'});

                    }

                    else if(restype=='love'){

                        $this.css({'background-color': '#ff2357',

                            'color': '#fff'});

                        $this.find('span.react-count').css({'color': '#fff'});

                    }

                    currentVal = false;

                } else{

                    ajaxResErr = 'yes';

                    var newscore = res.newScore;

                    $this.find('span.react-count').text(newscore);

                    $this.find('span.react-msg').text(res.statuss).fadeIn(500).delay(2000).fadeOut(500);

                }

                $this.removeClass('active-now');

            },

            error: function(request, error){

                alert(error);

            }

        });



        e.preventDefault();

    });

    jQuery(document).on('click', '#add-menu-image_btn', function (e) {
        e.preventDefault();
        var $this = jQuery(this);
        var userID = $this.data('uid'),
            img_Url = jQuery(this).closest('.add-menu_image').find('#selected_image_menu_url').val(),
            selected_list_Id = jQuery('#add_image_menu').val();

        if ((selected_list_Id == '0') || (img_Url == '')) {
            $this.closest('.add-menu_image').append('<p class="add_img_menu_error">Something Went Wrong</p>');
            return false;
        }
        jQuery('#add-menu-img-spinner').show();
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_search_term_object.ajaxurl,
            data: {
                'action': 'add_image_menu',
                'userID': userID,
                'img_Url': img_Url,
                'selected_list_Id': selected_list_Id,
                'lpNonce' : jQuery('#lpNonce').val()
            },
            success: function (res) {
                jQuery('.add_img_menu_error').remove();
                $this.closest('.ordering-service-wrap').find('ul.listing_append_img_menu').append('<li class="clearfix"><a class="pull-left online_ordring_list_title" target="_blank" href="' + res.selected_list_Link + '">' + res.selected_list_Title + '</a><span data-uid="' + userID + '" data-target="' + selected_list_Id + '" class="pull-right del_img_menu"><i class="fa fa-trash fa-spinner"></i></span></li>');
                jQuery('.add-new-service_img_menu .jFiler-input-choose-btn').text('Browse File');
                jQuery('#add-menu-img-spinner').hide();
                $this.closest('.add-menu_image').find('#selected_image_menu_url').val('');
                $this.closest('.add-menu_image').find('#selected_image_menu_url').text('Select Listing');
                jQuery('#add_image_menu').val('');
                jQuery('.no-img_menu').hide();
            },

            error: function (err) {
                alert(err);
                jQuery('#add-menu-img-spinner').hide();
            }
        });
    });
    jQuery(document).on('click', '.add-menu_image .jFiler-input-choose-btn', function () {
        jQuery('#selected_image_menu_url').val('');
    });
    jQuery(document).on('click', '.del_img_menu', function (e) {
        e.preventDefault();
        var $this = jQuery(this);
        var userID = $this.data('uid'),
            target = $this.data('target');
        $this.find('i.fa-spinner').removeClass('fa-trash');
        $this.find('i.fa-spinner').addClass('fa-spin');
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_search_term_object.ajaxurl,
            data: {
                'action': 'del_add_image_menu',
                'userID': userID,
                'target': target,
                'lpNonce' : jQuery('#lpNonce').val()
            },
            success: function (res) {
                console.log(res);
                $this.closest("li").remove();
                // jQuery('#add-menu-img-spinner').hide();
            },

            error: function (err) {
                alert(err);
                // jQuery('#add-menu-img-spinner').hide();
            }
        });
    });


    
jQuery(document).on('click', '.lp-edit-menu', function (e) {

    e.preventDefault();

    var $this       =   jQuery(this),
        userID      =   $this.data('uid'),
        LID      =   $this.data('lid'),
        menuID  =   $this.data('menuid'),
        mTitle  =   jQuery('#menu-title-'+menuID).val(),
        mDetail  =   jQuery('#menu-detail-'+menuID).val(),
        mOldPrice  =   jQuery('#menu-old-price-'+menuID).val(),
        mNewPrice  =   jQuery('#menu-new-price-'+menuID).val(),
        mQuoteT  =   jQuery('#menu-quote-text-'+menuID).val(),
        mQuoteL  =   jQuery('#menu-quote-link-'+menuID).val(),
        mLink  =   jQuery('#menu-link-'+menuID).val(),
        mGroup  =   jQuery('#menu-group-'+menuID).val(),
        mType  =   jQuery('#menu-type-'+menuID).val(),
        mImage      =   jQuery('.edit-upload-'+menuID+' .frontend-input').val(),
        multipleImage = jQuery('.upload-field.dashboard-upload-field.edit-upload-'+menuID).data('multiple');


    if(jQuery('.frontend-input-multiple').length > 0 && multipleImage === true){
        mImage      =   jQuery('.edit-upload-'+menuID+' .frontend-input-multiple').val();
    }
            popularItem  =   '';

            if( jQuery('.menu_Popular_Item-'+menuID).is(':checked') )
            {
                popularItem = 'mItemPopularTrue';
            }
            else
            {
                popularItem = 'mItemPopularfalse';
            }
            var spiceLVL = jQuery('.menuSpice-control-'+menuID+' option:selected').data('level');
            if ( spiceLVL == '1' ) {
                spiceLVL    =   'spicelvl1';
            }else if ( spiceLVL == '2' ) {
                spiceLVL    =   'spicelvl2';
            }else if ( spiceLVL == '3') {
                spiceLVL    =   'spicelvl3';
            }else if ( spiceLVL == '4') {
                spiceLVL    =   'spicelvl4';
            }else{
                spiceLVL    =   'spicelvlunset';
            }

    $this.append('<i class="fa fa-spin fa-spinner"></i>');

    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajax_search_term_object.ajaxurl,
        data: {
            'action': 'add_menu_cb',
            'user_id': userID,
            'LID' : LID,
            'menuID' : menuID,
            'mTitle': mTitle,
            'mDetail': mDetail,
            'mOldPrice': mOldPrice,
            'mNewPrice': mNewPrice,
            'mQuoteT': mQuoteT,
            'mQuoteL': mQuoteL,
            'mLink': mLink,
            'mImage': mImage,
            'mType' : mType,
            'mGroup' : mGroup,
            'popularItem' : popularItem,
            'spiceLVL' : spiceLVL,
            'menuUp': 'yes',
            'lpNonce' : jQuery('#lpNonce').val()
        },
        success: function (res) {
            var menu_id = $this.data('menuid');
            // alert(menu_id);
            // ajax_success_popup( res, $this );
            console.log(res);
            jQuery('.active-update-formm').slideUp();
            $this.find('i').remove();
            jQuery('#menu-update-'+menuID).closest('.lp-menu-close-outer').find('.lp-menu-closed').find('h4.lp-right-side-title').html('<span>Item Name</span><br>'+mTitle);
            jQuery('#menu-update-'+menuID).closest('.lp-menu-close-outer').find('.lp-menu-closed').find('.col-md-2.price').html('<span>Price</span><br>'+mOldPrice);
        },

        error: function (err) {
            alert(err);
            $this.find('i').remove();
        }
    });
});
if (jQuery('#selected_image_menu_url').length != 0) {
    jQuery(document).on('click', function (e) {
        var jqhiddeninputfeild = jQuery('#selected_image_menu_url').val();
        var jqtriggerforcheck = jQuery('#selected_image_menu_url').hasClass('.frontend-input-multiple');
        if (jqtriggerforcheck = true) {
            var asd = jQuery('.add-new-service_img_menu .jFiler-input-choose-btn').text();
            if (jqhiddeninputfeild != '') {
                var lastFive = jqhiddeninputfeild.substr(jqhiddeninputfeild.length - 13);
                var finalcom = '...' + lastFive;
                if (asd != finalcom) {
                    var string = finalcom.substr(0, 15);
                    jQuery('.add-new-service_img_menu .jFiler-input-choose-btn').text(string);
                    return false;
                }
            }
        }
    });
}

    jQuery(function (){
        jQuery(document).on('change', '.coupons-fields-switch input[type="checkbox"]', function (e) {
            var targetID = jQuery(this).data('target');
            if (targetID == 'quote-button') {
                if (jQuery(this).is(':checked')) {
                    jQuery('#menu-old-price').val('');
                    jQuery('#menu-new-price').val('');
                    jQuery('#menu-quote-text').val('');
                    jQuery('#menu-quote-link').val('');
                }
            }
        });
    });
    jQuery(document).on('click', '#lp-save-menu', function (e) {
        e.preventDefault();
        var $this   =   jQuery(this),
            userID  =   $this.data('uid'),
            mTitle  =   jQuery('#menu-title').val(),
            mDetail  =   jQuery('#menu-detail').val(),
            mOldPrice  =   jQuery('#menu-old-price').val(),
            mNewPrice  =   jQuery('#menu-new-price').val(),
            mQuoteT  =   jQuery('#menu-quote-text').val(),
            mQuoteL  =   jQuery('#menu-quote-link').val(),
            mListing  =   jQuery('#menu-listing').val(),
            mLink  =   jQuery('#menu-link').val(),
            mImage  =   jQuery('.new-file-upload .frontend-input').val(),
            mType  =   jQuery('#lp-menus .panel-heading li.active').text(),
            mGroup  =   jQuery('#menu-group').val(),
            orderP  =   '',
            orderU  =   '',
            calcPrice  =   '',
            popularItem  =   '';

        if( jQuery('.menu_Popular_Item').is(':checked') )
        {
            popularItem = 'mItemPopularTrue';
        }
        else
        {
            popularItem = 'mItemPopularfalse';
        }

        if( jQuery('.menu_Popular_Item').is(':checked') )
        {
            popularItem = 'mItemPopularTrue';
        }
        else
        {
            popularItem = 'mItemPopularfalse';
        }
        var spiceLVL = jQuery('.menuSpice-control option:selected').data('level');
        if ( spiceLVL == '1' ) {
            spiceLVL    =   'spicelvl1';
        }else if ( spiceLVL == '2' ) {
            spiceLVL    =   'spicelvl2';
        }else if ( spiceLVL == '3') {
            spiceLVL    =   'spicelvl3';
        }else if ( spiceLVL == '4') {
            spiceLVL    =   'spicelvl4';
        }else{
            spiceLVL    =   'spicelvlunset';
        }

        if (mNewPrice.length > 0){
            calcPrice   =   mNewPrice;
        }else{
            calcPrice   =   mOldPrice;
        }
        if( mImage == '' && jQuery('.new-file-upload .frontend-input-multiple').length != 0 )
        {
            mImage  =   jQuery('.new-file-upload .frontend-input-multiple').val();
        }

        if( mListing == '' || mListing == null || mListing == 0 )
        {
            jQuery('#select2-menu-listing-container').addClass('error');
        }
        else
        {
            jQuery('#select2-menu-listing-container').removeClass('error');
        }
        if( mTitle == '' )
        {
            jQuery('#menu-title').addClass('error');
        }
        else
        {
            jQuery('#menu-title').removeClass('error');
        }
        if( mType == '' || mType == 0 || mType == null )
        {
            jQuery('select#menu-type').next('.select2-container').addClass('error');
        }
        else
        {
            jQuery('select#menu-type').next('.select2-container').removeClass('error');
        }
        if( mGroup == '' || mGroup == 0 || mGroup == null )
        {
            jQuery('select#menu-group').next('.select2-container').addClass('error');
        }
        else
        {
            jQuery('select#menu-group').next('.select2-container').removeClass('error');
        }
        if( mTitle == '' || ( mType == '' && mType == 0 || mType == null ) || ( mGroup == '' && mGroup == 0 || mGroup == null ) || mListing == '' || mListing == null || mListing == 0  )
        {
            var dataError   =   [];
            dataError.status    =   'error';
            dataError.msg    =   jQuery('.lp-notifaction-area').data('error-msg');
            ajax_success_popup( dataError, $this );
            return false;
        }
        var QpriceTog = false;
        if( jQuery('.coupons-fields-switch input[type="checkbox"]').is(':checked') ){
            QpriceTog = true;
        }
        $this.append('<i class="fa fa-spin fa-spinner"></i>');
        $this.attr('disabled', 'disabled');
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_search_term_object.ajaxurl,
            data:{
                'action': 'add_menu_cb',
                'user_id' : userID,
                'mTitle' : mTitle,
                'mDetail' : mDetail,
                'mOldPrice' : mOldPrice,
                'mNewPrice' : mNewPrice,
                'mQuoteT' : mQuoteT,
                'mQuoteL' : mQuoteL,
                'mListing' : mListing,
                'mLink' : mLink,
                'mImage' : mImage,
                'mType' : mType,
                'mGroup' : mGroup,
                'orderP' : orderP,
                'orderU' : orderU,
                'popularItem' : popularItem,
                'spiceLVL'  :   spiceLVL,
                'showQute'  : QpriceTog,
                'lpNonce' : jQuery('#lpNonce').val()
            },
            success: function( res )
            {
                jQuery('.lp-menu-close-outer').prepend('<input type="hidden" id="lp-showQOrP" value="'+QpriceTog+'">');
                var menuLength  =   parseInt(res.menu_after_update[mType][mGroup].length-1);
                jQuery('#menu-group').val(null).trigger('change');
                var  type_rep  =   mType.replace(/ /g,'-');
                var  grp_rep  =   mGroup[0].replace(/ /g,'-');
                var  listid  =   mListing;
                var  menu_id  =  type_rep+'_'+grp_rep+'_'+menuLength+'_'+listid;
                var regmQuoteT = '';
                var mQuoteLinK = '';
                var $menu_price_check = '';
                if (jQuery('#lp-showQOrP').val() == 'true') {
                    regmQuoteT = '<div class="col-sm-6">' +
                        '<label class="lp-dashboard-top-label" for="menu-quote-text-' + menu_id + '">Quote Text</label>' +
                        '<input id="menu-quote-text-' + menu_id + '"     type="text"   class="form-control lp-dashboard-text-field"    value="' + mQuoteT + '"    placeholder="Ex: Quote">' +
                        '</div>';
                    mQuoteLinK = '<div class="col-sm-6">' +
                        '<label class="lp-dashboard-top-label" for="menu-quote-link-' + menu_id + '">Quote Link</label>' +
                        '<input id="menu-quote-link-' + menu_id + '"           type="text"          class="form-control lp-dashboard-text-field"            value="' + mQuoteL + '"              placeholder="Ex: hht://yourweb.com/page">' +
                        '</div>';
                }
                if (jQuery('#lp-showQOrP').val() == 'false') {
                    $menu_price_check = '<div class="menu-price-wrap">' +
                        '<div class="col-sm-2 padding-left-0">' +
                        '<label class="lp-dashboard-top-label" for="menu-old-price-' + menu_id + '">Reg. Price</label>' +
                        '<input name="menu-old-price-' + menu_id + '"  id="menu-old-price-' + menu_id + '"  type="text" class="form-control lp-dashboard-text-field" placeholder="Ex: $10" value="' + mOldPrice + '">' +
                        '</div>' +
                        '<div class="col-sm-2 padding-left-0">' +
                        '<label class="lp-dashboard-top-label" for="menu-new-price-' + menu_id + '">Sale Price</label>' +
                        '<input id="menu-new-price-' + menu_id + '"  name="menu-new-price-' + menu_id + '"  type="text"  class="form-control lp-dashboard-text-field"  placeholder="Ex: $10"  value="' + mNewPrice + '">' +
                        '</div>' +
                        '</div>';
                }
                var checkedpoP = '';
                if (popularItem == 'mItemPopularTrue') {
                    checkedpoP = 'checked';
                }
                var selected_spicelvl1 = '';
                var selected_spicelvl2 = '';
                var selected_spicelvl3 = '';
                var selected_spicelvl4 = '';

                if (spiceLVL == 'spicelvl1') {
                    selected_spicelvl1 = 'selected';
                } else if (spiceLVL == 'spicelvl2') {
                    selected_spicelvl2 = 'selected';
                } else if (spiceLVL == 'spicelvl3') {
                    selected_spicelvl3 = 'selected';
                } else if (spiceLVL == 'spicelvl4') {
                    selected_spicelvl4 = 'selected';
                }
                var imagedivvar = '';
                if ( mImage != '' ) {
                    imagedivvar = '<div class="menu-edit-img-wrap gal-img-count-single">' +
                    '<span data-src="'+mImage+'" data-target="dis-old-img-'+menu_id+'" class="remove-menu-img"><i class="fa fa-close"></i></span>' +
                    '<img class="gal-img-count-single lp-uploaded-img event-old-img-'+menu_id+'" src="'+mImage+'" alt="">' +
                    '</div>' ;
                }

                var html    =   '<div class="lp-menu-close-outer">' +
                    '<div class="lp-menu-closed clearfix ">' +
                    '<div class="row">' +
                    '<div class="col-md-6"><i class="fa fa-check-circle fa-check-circle2" aria-hidden="true"></i><h4 class="lp-right-side-title"><span>Item Name</span><br>'+ mTitle +'</h4></div>' +
                    '<div class="col-md-2"><span>Group</span><br>'+ mGroup +'</div>' +
                    '<div class="col-md-2 price"><span>Price</span><br>'+ calcPrice +'</div>' +
                    '<div class="col-md-2"><span class="lp-dot-extra-buttons"><i class="fa fa-ellipsis-v" aria-hidden="true"></i>' +
                    '<ul class="lp-user-menu list-style-none">' +
                    '<li><a class="edit-menu-item" data-menuID="'+menu_id+'" data-uid="'+ userID +'" href=""><i class="fa fa-pencil" aria-hidden="true"></i><span>Edit</span></a></li>' +
                    '<li><a href="" class="menu-del del-this" data-LID="'+mListing+'" data-targetid="'+menu_id+'" data-uid="'+ userID +'"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></a></li>' +
                    '</ul>' +
                    '</span></div>' +
                    '</div>' +
                    '</div>' +
                    '<div id="menu-update-'+menu_id+'" class="lp-menu-form-outer background-white" style="display: none">' +
                    '<div class="lp-menu-form-inner">' +
                    '<form class="row">' +
                    '<input value="'+mType+'" type="hidden" id="menu-type-'+menu_id+'" name="menu-type-'+menu_id+'">' +
                    '<input type="hidden" value="'+mGroup+'" id="menu-group-'+menu_id+'" name="menu-group-'+menu_id+'">' +
                    '<div class="col-sm-12 margin-top-10">' +
                    '<div class="lp-menu-form-feilds">' +
                    '<div class="row clearfix">' +
                    '<div class="col-md-12">' +
                    '<div class="row">' +
                    '<div class="margin-bottom-10 col-md-8">' +
                    '<label class="lp-dashboard-top-label" for="menu-title-'+menu_id+'">Menu Item</label>' +
                    '<input name="menu-title-'+menu_id+'"  id="menu-title-'+menu_id+'"  type="text"  class="form-control lp-dashboard-text-field" placeholder="Ex: Roasted Chicken" value="'+ mTitle +'">' +
                    '</div>' + $menu_price_check +
                    '<div class="menu-quote-wrap clearfix margin-bottom-20">' +
                    regmQuoteT +
                    mQuoteLinK +
                    '</div>' +
                    '</div>' +
                    '<div class="margin-bottom-30">' +
                    '<label class="lp-dashboard-top-label" for="menu-detail-'+menu_id+'">Short Description</label>' +
                    '<textarea name="menu-detail-'+menu_id+'" id="menu-detail-'+menu_id+'" type="text" class="form-control lp-dashboard-des-field" rows="3" placeholder="Ex: Roasted Chicken">'+mDetail+'</textarea>' +
                    '</div>' +
                    '</div>' +


                    '<div class="lp-invoices-all-stats-on-off clearfix margin-bottom-10 Popular_item_container">' +
                    '<label class="switch">' +
                    '<input '+checkedpoP+' value="Yes" class="form-control switch-checkbox menu_Popular_Item-'+menu_id+'" type="checkbox" name="lp_form_fields_inn[235]">' +
                    '<div class="slider round"></div>' +
                    '</label>' +
                    '<span class="margin-left-10" style="font-size: 16px!important;font-weight: normal!important;">Popular Item</span>' +
                    '</div>' +
                    '<div class="clearfix margin-bottom-10 menuSpice-control_containter">' +
                    '<select style="width: 100%!important;margin-left: 0;" id="menuSpice-control" class="form-control menuSpice-control-'+menu_id+'">' +
                    '<option>Spice Level</option>' +


                    '<option data-level="1" '+selected_spicelvl1+' >🌶</option>' +
                    '<option data-level="2" '+selected_spicelvl2+' >🌶🌶</option>' +
                    '<option data-level="3" '+selected_spicelvl3+' >🌶🌶🌶</option>' +

                    '</select>' +
                    '</div>' +

                    '<div class="col-md-12">' +
                    '<div class="jFiler-input-dragDrop pos-relative event-featured-image-wrap-dash">' +
                    '<div class="upload-field dashboard-upload-field edit-upload-'+menu_id+'">' +
                    '<input class="frontend-input-multiple" type="hidden" id="dis-old-img-'+menu_id+'" value="'+mImage+'">' +
                    '<input type="hidden" class="frontend-input" name="frontend_input"><label><a class="jFiler-input-choose-btn blue">Browse File</a><input class="frontend-button" type="button" value="" style="position: relative; z-index: 1;"> </label><div class="clearfix"></div><img class="frontend-image" alt="">    ' +
                    '<div class= "menu-edit-imgs-wrap" >' +
                    imagedivvar +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +

                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="clearfix"></div>' +
                    '<div class="lp-menu-save-btns clearfix col-md-12 margin-bottom-20">' +
                    '<button class="lp-cancle-btn cancel-update-menu">Cancel</button>' +
                    '<button data-LID="'+mListing+'" data-menuID="'+menu_id+'"  data-uid="'+userID+'"  class="lp-save-btn lp-edit-menu">save</button>' +
                    '</div>' +
                    '</form>' +
                    '</div>' +
                    '</div>' +
                    '<div>';
                jQuery('.panel-body.lp-panel-body-outer.lp-menu-panel-body-outer .tab-content.lp-tab-content-outer .tab-pane.fade.in.active').append( html );
                $this.find('i.fa.fa-spin.fa-spinner').remove();
                $this.removeAttr('disabled');


                jQuery('.menu-edit-imgs-wrap .frontend-input-multiple').val('');
                $this.closest('#menu-form-toggle').find('.lp-menu-close-outer.lp-menu-open').slideUp();
                $this.attr('id', 'lp-save-menu-reopen');
                jQuery('#menu-title').val('');
                jQuery('#menu-detail').val('');
                jQuery('#menu-old-price').val('');
                jQuery('#menu-new-price').val('');
                jQuery('#menu-quote-text').val('');
                jQuery('#menu-quote-link').val('');
                jQuery('#menu-link').val('');
                jQuery('.new-file-upload .frontend-input').val('');
                jQuery('.new-file-upload .frontend-image').hide('slow');
            },
            error: function( err )
            {
                console.log( err );
                $this.find('i').remove();
                $this.removeAttr('disabled');
                var dataError   =   [];
                dataError.status    =   'error';
                dataError.msg    =   jQuery('.lp-notifaction-area').data('error-msg');
                ajax_success_popup( dataError, $this );
            }
        });
    });

    
    
    var targetPlanMetaKey   =   'menu';
    if( jQuery('.select2-ajax').length != 0 )
    {
        targetPlanMetaKey   =   jQuery('.select2-ajax').data('metakey');

        var noResultsText   =   jQuery('#select2-ajax-noresutls').val(),
            inputShortText  =   jQuery('#select2-ajax-tooshort').val(),
            searchingText   =   jQuery('#select2-ajax-searching').val();
    }

    jQuery('.select2-ajax').select2({
        ajax: {
            url: ajax_search_term_object.ajaxurl,
            dataType: 'json',
            type:'GET',
            data: function (params) {
                return {
                    q: params.term, // search query
                    targetPlanMetaKey: targetPlanMetaKey,
                    action: 'select2_ajax_dashbaord_listing' // AJAX action for admin-ajax.php
                };
            },
            processResults: function( data ) {
                var options = [];
                var disabled_opts   =   false;
                if ( data ) {

                    // data is the array of arrays, and each of them contains ID and the Label of the option
                    jQuery.each( data, function( index, text ) { // do not forget that "index" is just auto incremented value
                        var disabled_opts   =   false;
                        if( text[2] == 'yes' )
                        {
                            disabled_opts   =   true;
                        }
                        options.push( { id: text[0], text: text[1], disabled:disabled_opts } );
                    });

                }
                return {
                    results: options
                };
            },
            cache: true
        },
        minimumInputLength: 3,
        language: {
            inputTooShort: function () {
                return inputShortText;
            },
            noResults: function () {
                return noResultsText;
            },
            searching: function () {
                return searchingText;
            }
        }
    });
	
	
	/* for campaigns */
	jQuery('.lp-search-listing-camp').select2({
        ajax: {
            url: ajax_search_term_object.ajaxurl,
            dataType: 'json',
            type:'GET',
            data: function (params) {
                return {
                    q: params.term, // search query
                    action: 'select2_ajax_dashbaord_listing_camp' // AJAX action for admin-ajax.php
                };
                console.log(params);
            },
            processResults: function( data ) {
                var options = [];
                if ( data ) {

                    // data is the array of arrays, and each of them contains ID and the Label of the option
                    jQuery.each( data, function( index, text ) { // do not forget that "index" is just auto incremented value
                        options.push( { id: text[0], text: text[1]  } );
                    });

                }
                return {
                    results: options
                };
            },
            cache: true
        },
        minimumInputLength: 3
    });
	/* end for camp */

    var uniqueMetaKey   =   'event_id';
    var planmetakey     =   'events';
    if( jQuery('.select2-ajax-unique').length != 0 )
    {
        uniqueMetaKey   =   jQuery('.select2-ajax-unique').data('metakey');
        planmetakey     =   jQuery('.select2-ajax-unique').data('planmetakey');

        var noResultsText   =   jQuery('#select2-ajax-noresutls').val(),
            inputShortText  =   jQuery('#select2-ajax-tooshort').val(),
            searchingText   =   jQuery('#select2-ajax-searching').val();
    }

    jQuery('.select2-ajax-unique').select2({
        ajax: {
            url: ajax_search_term_object.ajaxurl,
            dataType: 'json',
            type:'GET',
            data: function (params) {
                return {
                    q: params.term, // search query
                    uniqueMetaKey: uniqueMetaKey,
                    planmetakey: planmetakey,
                    action: 'select2_ajax_dashbaord_listing_unique' // AJAX action for admin-ajax.php
                };
            },
            processResults: function( data ) {
                var options = [];
                if ( data ) {

                    // data is the array of arrays, and each of them contains ID and the Label of the option
                    jQuery.each( data, function( index, text ) { // do not forget that "index" is just auto incremented value
                        var disabled_opts   =   false;
                        if( text[2] == 'yes' )
                        {
                            disabled_opts   =   true;
                        }

                        options.push( { id: text[0], text: text[1], disabled:disabled_opts } );
                    });

                }
                return {
                    results: options
                };
            },
            cache: true
        },
        minimumInputLength: 3,
        language: {
            inputTooShort: function () {
                return inputShortText;
            },
            noResults: function () {
                return noResultsText;
            },
            searching: function () {
                return searchingText;
            }
        }
    });

    


    jQuery('#ann-style').on('change', function (e) {

        var $this   =   jQuery(this),

            $thisDes    =   $this.find(':selected').attr('data-des'),

            $thisTI     =   $this.find(':selected').attr('data-title'),

            $thisIC     =   $this.find(':selected').attr('data-icon'),

            $thisBT     =   $this.find(':selected').text(),

            $thisST     =   $this.find(':selected').attr('data-st');



        jQuery('.announcement-wrap span').text($thisDes);

        jQuery('#announcements-message').val($thisDes);

        jQuery('.announcement-wrap a').text($thisBT);

        jQuery('.announcement-wrap strong').text($thisTI);

        jQuery('#announcements-btn-text').val($thisBT);

        jQuery('#announcements-title').val($thisTI);

        jQuery('.announcement-wrap i').removeClass();

        jQuery('.announcement-wrap i').addClass($thisIC);





        jQuery('.field-desc strong').text($thisDes.length);





    })

    jQuery('.ann-style-wrap span').click(function (e) {

        var $this   =   jQuery(this),

            $thisWrap   =   $this.closest('.ann-style-wrap'),

            $thislabel  =   $this.closest('label'),

            $thisDes    =   $this.data('des'),

            $thisBT     =   $this.data('bt');





        $thisWrap.find('input[name="ann-style"]:checked').removeAttr('checked');

        $thisWrap.find('.ann-style-val').val($thislabel.find('input').val());

        $thislabel.find('input').attr('checked', true);



        jQuery('.announcement-wrap span, #announcements-message').text($thisDes);

        jQuery('.announcement-wrap a').text($thisBT);

        jQuery('#announcements-btn-text').val($thisBT);





    });



    jQuery(document).on('click', '#lp-save-dis', function(e)
    {
        e.preventDefault();

        var $this   =   jQuery(this),
            userID  =   $this.data('uid'),
            disHea  =   jQuery('#dis-heading').val(),
            disCod  =   jQuery('#dis-code').val(),
            disExpE  =   jQuery('#dis-expiry-e').val(),
            disExpS  =   jQuery('#dis-expiry-s').val(),
            disTimeE    =   jQuery('#dis-time-e').val(),
            disTimeS    =   jQuery('#dis-time-s').val(),
            disBT   =   jQuery('#dis-btn-text').val(),
            disBL   =   jQuery('#dis-btn-link').val(),
            disLI   =   jQuery('#dis-listing').val(),
            disImg   =   jQuery('.new-file-upload .frontend-input').val(),
            disOff   =   jQuery('#dis-off').val(),
            disDes   =   jQuery('#dis-description').val();


        if( disLI == 0 || disLI == '' || disLI == null )
        {
            jQuery('#select2-dis-listing-container').addClass('error');
        }
        else
        {
            jQuery('#select2-dis-listing-container').removeClass('error');
        }
        if( disHea == '' )
        {
            jQuery('#dis-heading').addClass('error');
        }
        else
        {
            jQuery('#dis-heading').removeClass('error');
        }

        if( disLI == 0 || disLI == '' || disLI == null || disHea == '' )
        {
			var dataError   =   [];
		   dataError.status    =   'error';
		   dataError.msg    =   jQuery('.lp-notifaction-area').data('error-msg');
		   ajax_success_popup( dataError, $this );
            $this.find('i').removeClass('fa-spin fa-spinner');
            return false;
        }
        if( $this.hasClass('processing-dis') )
        {}
        else
        {
            $this.addClass('processing-dis');
            $this.append('<i class="fa fa-spin fa-spinner"></i>');
            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                url: ajax_search_term_object.ajaxurl,
                data:{
                    'action': 'add_discount_cb',
                    'user_id' : userID,
                    'disHea' : disHea,
                    'disCod' : disCod,
                    'disExpE' : disExpE,
                    'disExpS' : disExpS,
                    'disTimeE': disTimeE,
                    'disTimeS': disTimeS,
                    'disBT' : disBT,
                    'disBL' : disBL,
                    'disLI' : disLI,
                    'disDes' : disDes,
                    'disOff' : disOff,
                    'disImg' : disImg,
                    'disSta' : 'active',
                    'lpNonce' : jQuery('#lpNonce').val()
                },
                success: function( res )
                {
                   ajax_success_popup( res, $this );
                },

                error: function( err )
                {
                    alert( err );
                    $this.find('i').remove();
                }
            });
        }
    });

    jQuery(document).on('click', '#lp-save-offer', function(e)
    {

        e.preventDefault();



        var $this   =   jQuery(this),

            userID  =   $this.data('uid'),

            offerTitle  =   jQuery('#offer-title').val(),

            offerDes  =   jQuery('#offer-description').val(),

            offerExp  =   jQuery('#offer-expriry').val(),

            offerBT  =   jQuery('#offer-btn-text').val(),

            offerBL  =   jQuery('#offer-btn-link').val(),

            offerImg  =   jQuery('#frontend-input').val(),

            offerLI  =   jQuery('#offer-listing').val();



        if( !jQuery('.btn-link-field-toggle').hasClass('link-active') )

        {

            offerBL =   '';

        }



        $this.append('<i class="fa fa-spin fa-spinner"></i>');



        if( offerLI == null || offerLI == '' || offerTitle == '' || offerExp == '' )

        {

            jQuery('.ann-err-msg').fadeIn(500).delay(1500).fadeOut(500);

            $this.find('i').remove();

            return false;

        }



        jQuery.ajax({

            type: 'POST',

            dataType: 'json',

            url: ajax_search_term_object.ajaxurl,

            data:{

                'action': 'add_offer_cb',

                'user_id' : userID,

                'offerTitle' : offerTitle,

                'offerDes' : offerDes,

                'offerExp' : offerExp,

                'offerBT' : offerBT,

                'offerBL' : offerBL,

                'offerLI' : offerLI,

                'offerImg' : offerImg,
                'lpNonce' : jQuery('#lpNonce').val()

            },

            success: function( res )

            {

                console.log( res );

                $this.find('i').removeClass('fa-spin fa-spinner');

                $this.find('i').addClass('fa fa-check');
                console.log('new 2810');
                location.reload();

            },

            error: function( err )

            {

                alert( err );

                $this.find('i').remove();

            }

        });

    });

    jQuery(document).on('click', '.del-this', function(e)
    {
        e.preventDefault();
        jQuery('.remove-active').removeClass('remove-active');
        jQuery(this).addClass('remove-active');
        jQuery('#dashboard-delete-modal').modal('show');
        jQuery('.modal-backdrop').hide();
    });

    jQuery(document).on('click', '.dashboard-confirm-del-btn', function (e) {
        var $this       =   jQuery('.remove-active');
        if( $this.hasClass('del-all-menu') )
        {
            var lid     =   $this.data('lid'),
                user_id =   $this.data('uid');



            jQuery(this).append('<i class="fa fa-spin fa-spinner" style="margin-left: 5px;"></i>');

            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                url: ajax_search_term_object.ajaxurl,
                data:{
                    'action': 'del_all_menu_cb',
                    'user_id' : user_id,
                    'lid' : lid,
                    'lpNonce' : jQuery('#lpNonce').val()
                },
                success: function( res )
                {
                    if( res.status == 'success' )
                    {
                        console.log('new 2863');
                        location.reload();
                    }
                    $this.find('i').removeClass('fa-spin fa-spinner').addClass('fa-trash-o');
                },
                error: function( err )
                {
                    console.log( err );
                    $this.find('i').removeClass('fa-spin fa-spinner').addClass('fa-trash-o');
                }
            });
        }
        else
        {
            var targetID    =   $this.data('targetid'),
                userID      =   $this.data('uid'),
                delType     =   '',
                delIDS      =   '',
                dellAll     =   '';

            if( $this.hasClass('dis-del') )
            {
                delType =   'dis';
            }
            if( $this.hasClass('event-del') )
            {
                delType =   'event';
            }
            if( $this.hasClass('ann-del') )
            {
                delType =   'ann';
            }
            if( $this.hasClass('offer-del') )
            {
                delType     =   'offer';
                delIDS      =   $this.data('del-ids');
            }
            if( $this.hasClass('menu-del') )
            {
                delType =   'menu';
                delIDS  =   $this.data('lid');
            }
            if( $this.hasClass('del-type') )
            {
                delType =   'type';
                dellAll =   jQuery('input[name="delete-group-type"]:checked').val();
            }
            if( $this.hasClass('del-group') )
            {
                delType =   'group';
                dellAll =   jQuery('input[name="delete-group-type"]:checked').val();
            }
            jQuery(this).append('<i class="fa fa-spin fa-spinner" style="margin-left: 5px;"></i>');
            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                url: ajax_search_term_object.ajaxurl,
                data:{
                    'action': 'del_ann_dis_menu_cb',
                    'user_id' : userID,
                    'delType' : delType,
                    'targetID' : targetID,
                    'delIDS' : delIDS,
                    'dellAll' : dellAll,
                    'lpNonce' : jQuery('#lpNonce').val()
                },
                success: function( res )
                {
                    if( res.status == 'success' )
                    {
                        if(delType == 'menu') {
                            jQuery('.menu-del[data-targetid="'+targetID+'"]').closest('.lp-menu-close-outer').remove();
                            jQuery('#dashboard-delete-modal').modal('hide');
                            jQuery('.dashboard-confirm-del-btn').find('i').remove();
                        } else {
                            jQuery('#dashboard-delete-modal').modal('hide');
                            console.log('new 2939');
                            location.reload();
                        }

                    }
                    $this.find('i').removeClass('fa-spin fa-spinner').addClass('fa-trash-o');
                },
                error: function( err )
                {
                    console.log( err );
                    $this.find('i').removeClass('fa-spin fa-spinner').addClass('fa-trash-o');
                }
            });
        }
    });
    jQuery(document).on('click', 'a.event-edit, a.menu-edit, a.ann-edit, a.dis-edit, a.offer-edit', function(e)
    {
        e.preventDefault();
        var $this       =   jQuery(this),
            targetID    =   $this.data('targetid'),
            updateWrap  =   '#update-wrap-'+targetID;

        if( jQuery('.active-update-form').length != 0 )
        {
            jQuery('.active-update-form').slideUp(500, function (e) {
                jQuery('.active-update-form').removeClass('active-ann-form');
                jQuery(updateWrap).slideToggle('500', function (e) {
                    jQuery(updateWrap).addClass('active-update-form');
                    jQuery('.cancel-update').click(function(e)
                    {
                        e.preventDefault();
                        jQuery('.active-update-form').slideUp(500, function (e) {
                            jQuery('.active-update-form').removeClass('active-update-form');
                        })
                    })
                });
            });
        }
        else
        {
            jQuery(updateWrap).slideToggle('500', function (e) {
                jQuery(updateWrap).addClass('active-update-form');
                jQuery('.cancel-update').click(function(e)
                {
                    e.preventDefault();
                    jQuery('.active-update-form').slideUp(500, function (e) {
                        jQuery('.active-update-form').removeClass('active-update-form');
                    })
                })
            });
        }
    });
    jQuery(document).on( 'click', '.edit-menu-item', function (e) {
        e.preventDefault();
        var $this       =   jQuery(this),
            targetID    =   $this.data('menuid'),
            updateWrap  =   '#menu-update-'+targetID;

        if( jQuery('.active-update-formm').length != 0 )
        {
            jQuery('.active-update-formm').slideUp(500, function (e) {
                jQuery('.active-update-formm').removeClass('active-ann-form');
                jQuery(updateWrap).slideToggle('500', function (e) {
                    jQuery(updateWrap).addClass('active-update-formm');
                    jQuery('.cancel-update-menu').click(function(e)
                    {
                        e.preventDefault();
                        jQuery('.active-update-formm').slideUp(500, function (e) {
                            jQuery('.active-update-formm').removeClass('active-update-formm');
                        })
                    })
                });
            });
        }
        else
        {
            jQuery(updateWrap).slideToggle('500', function (e) {
                jQuery(updateWrap).addClass('active-update-formm');
                jQuery('.cancel-update-menu').click(function(e)
                {
                    e.preventDefault();
                    jQuery('.active-update-formm').slideUp(500, function (e) {
                        jQuery('.active-update-formm').removeClass('active-update-formm');
                    })
                })
            });
        }
    } );

    if( jQuery('.lp-countdown').length != 0 )
    {
        jQuery('.lp-countdown').each(function (i, obj) {
            var selector    =   '#'+jQuery(this).attr('id');
            init_countdown(selector);
        });
    }
});

jQuery(document).on('change', '#discount_displayin', function (e) {

    e.preventDefault();

    var $this   =   jQuery(this),

        thisval =   $this.val(),

        userID  =   $this.data('udi');



    jQuery($this).after('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>');

    jQuery.ajax({

        type: 'POST',

        dataType: 'json',

        url: ajax_search_term_object.ajaxurl,

        data:{

            'action': 'discount_display_area',

            'userID' : userID,

            'thisval' : thisval,
            'lpNonce' : jQuery('#lpNonce').val()

        },

        success: function( res )

        {

            jQuery('#discount_displayin').next('i').remove();

        },

        error: function( err )

        {

            alert( err );

            $this.find('i').remove();

        }

    });

})

jQuery(document).on('change', '#event_displayin', function (e) {

    e.preventDefault();

    var $this   =   jQuery(this),

        thisval =   $this.val(),

        userID  =   $this.data('udi');

    jQuery($this).after('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>');

    jQuery.ajax({

        type: 'POST',

        dataType: 'json',

        url: ajax_search_term_object.ajaxurl,

        data:{

            'action': 'event_display_area',

            'userID' : userID,

            'thisval' : thisval,
            'lpNonce' : jQuery('#lpNonce').val()

        },

        success: function( res )

        {

            jQuery('#event_displayin').next('i').remove();

        },

        error: function( err )

        {

            alert( err );

            $this.find('i').remove();

        }

    });

});


jQuery(document).on('click', '.lp-edit-offer', function(e)

{

    e.preventDefault();
    
    var $this   =   jQuery(this),

        userID  =   $this.data('uid'),

        offerID       =   $this.data('offerid'),

        offerTitle  =   jQuery('#offer-title-'+offerID).val(),

        offerDes  =   jQuery('#offer-description-'+offerID).val(),

        offerExp  =   jQuery('#offer-expriry-'+offerID).val(),

        offerBT  =   jQuery('#offer-btn-text-'+offerID).val(),

        offerBL  =   jQuery('#offer-btn-link-'+offerID).val(),

        offerLI  =   jQuery('#offer-listing-'+offerID).val();



    if( !jQuery('.btn-link-field-toggle').hasClass('link-active') )

    {

        offerBL =   '';

    }





    $this.append('<i class="fa fa-spin fa-spinner"></i>');



    if( offerLI == null || offerLI == '' || offerTitle == '' || offerExp == '' )

    {

        jQuery('.ann-err-msg').fadeIn(500).delay(1500).fadeOut(500);

        $this.find('i').remove();

        return false;

    }





    jQuery.ajax({

        type: 'POST',

        dataType: 'json',

        url: ajax_search_term_object.ajaxurl,

        data:{

            'action': 'add_offer_cb',

            'user_id' : userID,

            'offerTitle' : offerTitle,

            'offerDes' : offerDes,

            'offerExp' : offerExp,

            'offerBT' : offerBT,

            'offerBL' : offerBL,

            'offerLI' : offerLI,

            'offerUP' : 'yes',

            'offerID' : offerID,
            'lpNonce' : jQuery('#lpNonce').val()

        },

        success: function( res )

        {

            // console.log(res);

            $this.find('i').removeClass('fa-spin fa-spinner');

            $this.find('i').addClass('fa fa-check');
            console.log('new 3246');
            location.reload();

        },

        error: function( err )

        {

            alert( err );

            $this.find('i').remove();

        }

    });

});



jQuery(document).on('click', '.lp-edit-dis', function (e)

{
    e.preventDefault();
    var $this       =   jQuery(this),

        disID       =   $this.data('disid'),
        userID      =   $this.data('uid'),
        disHea      =   jQuery('#dis-heading-'+disID).val(),
        disCod      =   jQuery('#dis-code-'+disID).val(),
        disExpE     =   jQuery('#dis-expiry-e-'+disID).val(),
        disExpS     =   jQuery('#dis-expiry-s-'+disID).val(),
        disTimeE    =   jQuery('#dis-time-e-'+disID).val(),
        disTimeS    =   jQuery('#dis-time-s-'+disID).val(),
        disBT       =   jQuery('#dis-btn-text-'+disID).val(),
        disBL       =   jQuery('#dis-btn-link-'+disID).val(),
        disLI       =   $this.data('listid'),
        disOff      =   jQuery('#dis-off-'+disID).val(),
		disImg      =   jQuery('.edit-upload-'+disID+' .frontend-input').val();
        disDes      =   jQuery('#dis-description-'+disID).val();

    $this.append('<i class="fa fa-spin fa-spinner"></i>');
    if( disLI == 0 || disLI == '' )
    {
        jQuery('.ann-err-msg').fadeIn(500).delay(1500).fadeOut(500);
        $this.find('i').remove();
        return false;
    }
	if( disImg == '' )
   {
       disImg  =   jQuery('#dis-old-img-'+disID).val();
   }
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajax_search_term_object.ajaxurl,
        data:{
            'action': 'add_discount_cb',
            'user_id' : userID,
            'disID' : disID,
            'disHea' : disHea,
            'disCod' : disCod,
            'disExpE' : disExpE,
            'disExpS' : disExpS,
            'disTimeE': disTimeE,
            'disTimeS': disTimeS,
            'disBT' : disBT,
            'disBL' : disBL,
            'disLI' : disLI,
            'disDes' : disDes,
            'disOff' : disOff,
			'disImg' : disImg,
            'disUp' : 'yes',
            'lpNonce' : jQuery('#lpNonce').val()
        },
        success: function( res )
        {
            ajax_success_popup( res, $this );
        },
        error: function( err )
        {
            // alert( err );
            // $this.find('i').remove();
        }
    });
});



jQuery(document).on('click', '.lp-edit-announcements', function (e)
{
    e.preventDefault();
    var $this       =   jQuery(this),
        annID       =   $this.data('annid'),
        userID      =   $this.data('uid'),
        annMsg  =   jQuery('#announcements-message-'+annID).val(),
        annBT   =   jQuery('#announcements-btn-text-'+annID).val(),
        annBL   =   jQuery('#announcements-btn-link-'+annID).val(),
        annSt   =   jQuery('#ann-style-val-'+annID).val(),
        annTI   =   jQuery('#announcements-title-'+annID).val(),
        annIC   =   jQuery('#announcements-icon-'+annID).val(),
        annLI   =   jQuery(this).data('lid');

    $this.append('<i class="fa fa-spin fa-spinner"></i>');
    if( annLI == 0 || annLI == '' || annMsg == '' )
    {
        jQuery('.ann-err-msg-'+annID).fadeIn(500).delay(1500).fadeOut(500);
        $this.find('i').remove();
        return false;
    }

    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajax_search_term_object.ajaxurl,
        data:{
            'action': 'add_announcements_cb',
            'user_id' : userID,
            'annMsg' : annMsg,
            'annSt' : annSt,
            'annBT' : annBT,
            'annBL' : annBL,
            'annLI' : annLI,
            'annTI' : annTI,
            'annIC' : annIC,
            'annUP' : 'yes',
            'annID' : annID,
            'lpNonce' : jQuery('#lpNonce').val()
        },

        success: function( res )
        {
            ajax_success_popup( res, $this );

        },

        error: function( err )
        {

        }
    });
});

function init_countdown( selector )
{
    var $this   =   jQuery(selector);
    if( !$this.length ) return false;

    var clock;
    var daysLabel  =   jQuery(selector).data('label-days'),
        hoursLabel   =   jQuery(selector).data('label-hours'),
        minsLabel   =   jQuery(selector).data('label-mints'),
        cHour        =   jQuery(selector).data('hour'),
        cMinute        =   jQuery(selector).data('minute'),
        cDay        =   jQuery(selector).data('day'),
        cMonth      =   jQuery(selector).data('month'),
        cYear       =   jQuery(selector).data('year');

    FlipClock.Lang.Custom = { days: daysLabel, hours: hoursLabel, minutes: minsLabel };

    var startDate = new Date(cYear, cMonth, cDay, cHour , cMinute); //year, month, day
    var now = Math.floor(Date.now()/1000); //Current timestamp in seconds
    var clockStart = startDate.getTime()/1000 - now; //What to set the clock at when page loads
    var numDays = Math.floor(clockStart / 86400);

    var minDigits   =   6;
    if( numDays > 99 )
    {
        minDigits   =   7;
    }

    clock = jQuery(selector).FlipClock({
        clockFace: 'DailyCounter',
        autoStart: true,
        showSeconds: false,
        language: 'Custom',
        minimumDigits: minDigits
    });

    clock.setTime(clockStart);
    clock.setCountdown(true);
}

jQuery(document).on( 'mouseleave', '#menu-categories-menu', function (e) {

    jQuery('.lp-header-nav-btn').removeClass('active-can-menu');

    jQuery('#menu-categories-menu').css('opacity', '0');

    jQuery('#menu-categories-menu').css('transform', 'scale(0)');

});

jQuery(document).on( 'click', '.lp-ann-btn', function (e) {

    e.preventDefault();

    if(jQuery(this).hasClass('lp-no-review-btn')) {

    } else {
        var targetANN   =   '#'+jQuery(this).attr('data-ann');
        jQuery(targetANN).show();

        jQuery(targetANN).find('.lp-listing-announcement').fadeIn();
        jQuery(targetANN).find('.lp-listing-announcement').addClass('active-ann');

        jQuery('.code-overlay').fadeIn();
    }
});




jQuery(document).on( 'click', '.close-ann', function (e) {

    e.preventDefault();

    jQuery('.active-ann').fadeOut();
    jQuery('.active-ann').removeClass('active-ann');
    jQuery('.code-overlay').fadeOut();
    jQuery('.lp-listing-announcements').fadeOut();
});



jQuery(document).on('click', '.lp-coupon-btn', function(e){

    e.preventDefault();



    var targetCOUP   =   '#'+jQuery(this).data('coupon');



    jQuery(targetCOUP).fadeIn();

    jQuery(targetCOUP).addClass('active-coupon');



    jQuery('.code-overlay').fadeIn();



});

jQuery(document).on('click', '.close-coupon', function (e) {

    e.preventDefault();



    jQuery('.active-coupon').fadeOut();

    jQuery('.active-coupon').removeClass('active-coupon');

    jQuery('.code-overlay').fadeOut();

});



jQuery(document).on('shown.bs.tab', 'a[href="#menu_tab"]', function (e) {
    //slickINIT();
    jQuery('.lp-listing-menuu-slider').slick('refresh');
});





jQuery(document).on( 'click', '.ann-toggle-btn', function (e) {

    e.preventDefault();
    var $this   =   jQuery(this),
        status  =   $this.attr('data-status'),
        annID   =   $this.data('annid'),
        userID  =   $this.data('uid');

    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajax_search_term_object.ajaxurl,
        data:{
            'action': 'add_announcements_cb',
            'user_id' : userID,
            'status' : status,
            'annID' : annID,
            'annUP' : 'on-off',
            'lpNonce' : jQuery('#lpNonce').val()
        },

        success: function( res )
        {
            if( res.status == 0 )
            {
                status  =   'inactive';
            }
            else if ( res.status == 1 )
            {
                status  =   'active';
            }
            $this.attr('data-status', status);
        },
        error: function( err )
        {
            $this.find('i').remove();
        }
    });

});



jQuery(document).on('keyup', '#announcements-message', function (e) {

    var thisText    =   jQuery(this).val();

    jQuery('.ann-preivew-wrap .announcement-wrap span').text(thisText);



    jQuery('.field-desc strong').text(thisText.length);

});

jQuery(document).on('keyup', '#announcements-title', function (e) {

    var thisText    =   jQuery(this).val();

    jQuery('.ann-preivew-wrap .announcement-wrap strong').text(thisText);

});

jQuery(document).on('keyup', '#announcements-btn-text', function (e) {

    var thisText    =   jQuery(this).val();

    jQuery('.ann-preivew-wrap .announcement-wrap .announcement-btn').text(thisText);



});

jQuery(document).on('focusout', '#announcements-icon', function (e) {

    var thisText    =   jQuery(this).val();
	if( thisText == '' ) { return false; }

    if (thisText.match("^fa"))

    {

        jQuery('.announcement-wrap img').hide();

        jQuery('.announcement-wrap i').show();

        jQuery(this).attr('icon-type', 'fa-icon');

        jQuery('.announcement-wrap i').removeClass().addClass('fa '+thisText);

    }

    else

    {

        jQuery('.announcement-wrap i').hide()

        jQuery('.announcement-wrap img').show();

        jQuery('.announcement-wrap img').attr('src', thisText);

        jQuery(this).attr('icon-type', 'img-icon');

    }



});





function  slickINIT() {

    if( jQuery('.lp-listing-menuu-slider').length != 0 )
    {
        jQuery('.lp-listing-menuu-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            nextArrow: "<i class=\"fa fa-angle-right arrow-left\" aria-hidden=\"true\"></i>",
            prevArrow: "<i class=\"fa fa-angle-left arrow-right\" aria-hidden=\"true\"></i>"
        });

    }

}
jQuery(document).on('change', '.coupons-fields-switch input[type="checkbox"]', function (e) {
    e.preventDefault();
    var targetID    =   jQuery(this).data('target');
    if( targetID == 'coupon-external' )
    {
        if( jQuery(this).is(':checked') )
        {
            jQuery('#btn-url-switch').slideDown(500);
            //jQuery('#dis-code').closest('.lp-coupon-box-row').slideUp(500);
        }
        else
        {
            jQuery('#btn-url-switch').slideUp(500);
            //jQuery('#dis-code').closest('.lp-coupon-box-row').slideDown(500);
        }

    }else if(targetID == 'quote-button'){
        if( jQuery(this).is(':checked') )
        {
            jQuery('.menu-price-wrap').slideUp(500, function () {
                jQuery('.menu-quote-wrap').slideDown(500);
            });
        }
        else
        {
            jQuery('.menu-quote-wrap').slideUp(500, function () {
                jQuery('.menu-price-wrap').slideDown(500);
            });
        }
    }
    else if(targetID == 'coupon-end'){
        if( jQuery(this).is(':checked') )
        {
            jQuery('.lp-cpn-end-container').slideDown(500);
        }
        else
        {
            jQuery('.lp-cpn-end-container').slideUp(500);
        }
    }
    else
    {
        jQuery('#'+targetID+'-switch').slideToggle(500, function () {
            if( !jQuery('#date-switch').is(':visible') && !jQuery('#time-switch').is(':visible') )
            {
                jQuery('.empty-row-check').slideToggle();
            }
        });
    }

});


jQuery(document).on('click', '.del-all-menu', function (e) {
    e.preventDefault();

    jQuery(this).addClass('remove-active');
    jQuery('#dashboard-delete-modal').modal('show');
    jQuery('.modal-backdrop').hide();


});

jQuery(document).on('click', '#lp-save-events', function(e){
    e.preventDefault();
    var $this   =   jQuery(this),
        eTitle  =   jQuery('#event-title').val(),
        eDesc   =   jQuery('#event-description').val(),
        eDate   =   jQuery('#event-date-s').val(),
        eDateE  =   jQuery('#event-date-e').val(),
        eTime   =   jQuery('#event-time').val(),
        eTimeE  =   jQuery('#event-time-e').val(),
        eLoc    =   '',
        eLat    =   jQuery('#lp-events-form #latitude').val(),
        eLon    =   jQuery('#lp-events-form #longitude').val(),
        eTUrl   =   jQuery('#event-tickets-data').val(),
        eLID    =   jQuery('#event-listing').val(),
        eImg    =   jQuery('.new-file-upload .frontend-input').val(),
        eUID    =   $this.data('uid'),
        eUtils  =    '';
    if( jQuery('.events-map-wrap a[data-type="gaddresscustom"]').hasClass('active'))
    {
        eLoc    =   jQuery('#lp-events-form input[name="gAddresscustom"]').val();
    }
    else
    {
        eLoc    =   jQuery('#lp-events-form input[name="gAddress"]').val();
    }
    jQuery('.coupons-fields-switch').find('.switch-checkbox').each(function () {
        var CheckboxX       =   jQuery(this),
            target          =   CheckboxX.data('target'),
            targetVal       =   ''
        if( CheckboxX.is(':checked') )
        {
            targetVal   =   'yes';
        }
        else
        {
            targetVal   =   'no';
        }
        eUtils  +=   target+'|'+targetVal+'*';
    });
    if( eLID == '' || eLID == 0 || eLID == null )
    {
        if(jQuery('#event-listing').length) {
            jQuery('#event-listing').addClass('error');
        } else {
            jQuery('#select2-event-listing-container').addClass('error');
        }
    }
    else
    {
        if(jQuery('#event-listing').length) {
            jQuery('#event-listing').removeClass('error');
        } else {
            jQuery('#select2-event-listing-container').removeClass('error');
        }

    }
    if( eTitle == '' )
    {
        jQuery('#event-title').addClass('error');
    }
    else
    {
        jQuery('#event-title').removeClass('error');
    }


    if( eDate == '' ){
        jQuery('#event-date-s').addClass('error');
    }
    else
    {
        jQuery('#event-date-s').removeClass('error');
    }
    if( eTime == '' ){
        jQuery('#event-time').addClass('error');
    }
    else
    {
        jQuery('#event-time').removeClass('error');
    }
    if( eLID == '' || eLID == 0 || eLID == null || eTitle == '' || eTime == '' || eDate == '' )
    {
        var dataError   =   [];
        dataError.status    =   'error';
        dataError.msg    =   jQuery('.lp-notifaction-area').data('error-msg');
        ajax_success_popup( dataError, $this );
        return false;
    }
    if( jQuery('a[data-type="gaddress"]').hasClass('active') )
    {
        if( eLoc == '' ){
            jQuery('#lp-events-form input[name="gAddresscustom"]').addClass('error');

            var dataError   =   [];
            dataError.status    =   'error';
            dataError.msg    =   jQuery('.lp-notifaction-area').data('error-msg');
            ajax_success_popup( dataError, $this );
            return false;
        }
        else
        {
            jQuery('#lp-events-form input[name="gAddresscustom"]').removeClass('error');
        }
    } else {
        if( eLat == '' || eLon == '' || eLoc == '' ) {

            jQuery('#event-location').addClass('error');

            var dataError   =   [];
            dataError.status    =   'error';
            dataError.msg    =   jQuery('.lp-notifaction-area').data('error-msg');
            ajax_success_popup( dataError, $this );
            return false;
        }
    }

    $this.append('<i class="fa fa-spin fa-spinner"></i>');
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajax_search_term_object.ajaxurl,
        data:{
            'action': 'add_events_cb',
            'eTitle' : eTitle,
            'eDesc' : eDesc,
            'eDate' : eDate,
            'eDateE' : eDateE,
            'eTime' : eTime,
            'eTimeE' : eTimeE,
            'eLoc' : eLoc,
            'eLat' : eLat,
            'eLon' : eLon,
            'eTUrl' : eTUrl,
            'eLID' : eLID,
            'eUID' : eUID,
            'eImg' : eImg,
            'eUtils' : eUtils,
            'lpNonce' : jQuery('#lpNonce').val()
        },
        success: function( res )
        {
            ajax_success_popup( res, $this );
        },
        error: function( err )
        {
            console.log( err );
        }
    });
});

//lp-save-events


jQuery(document).on('click', '.lp-save-events', function(e){
    e.preventDefault();
    var $this   =   jQuery(this),
        eID     =   $this.data('eid'),
        eTitle  =   jQuery('#event-title-'+eID).val(),
        eDesc   =   jQuery('#event-description-'+eID).val(),
        eDate   =   jQuery('#event-date-s-'+eID).val(),
        eDateE   =   jQuery('#event-date-e-'+eID).val(),
        eTime   =   jQuery('#event-time-'+eID).val(),
        eTimeE   =   jQuery('#event-time-e-'+eID).val(),
        eLoc    =   jQuery('#event-location-'+eID).val(),
        eLat    =   $this.closest('.lp-coupons-form-inner').find('.latitude').val(),
        eLong    =  $this.closest('.lp-coupons-form-inner').find('.longitude').val(),
        eTUrl   =   jQuery('#event-tickets-data-'+eID).val(),
        eImg    =   jQuery('.edit-upload-'+eID+' .frontend-input').val(),
        eUID    =   $this.data('uid');


    if( eTitle == '' )
    {
        jQuery('#event-title').addClass('error');
    }
    else
    {
        jQuery('#event-title').removeClass('error');
    }
    if( eTitle == '' )
    {
        return false;
    }
    if( eImg == '' )
    {
        eImg    =   jQuery('#event-old-img-'+eID).val();
    }
    $this.append('<i class="fa fa-spin fa-spinner"></i>');
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajax_search_term_object.ajaxurl,
        data:{
            'action': 'add_events_cb',
            'eTitle' : eTitle,
            'eDesc' : eDesc,
            'eDate' : eDate,
            'eDateE' : eDateE,
            'eTime' : eTime,
            'eTimeE' : eTimeE,
            'eLoc' : eLoc,
            'eLat' : eLat,
            'eLon' : eLong,
            'eTUrl' : eTUrl,
            'eUID' : eUID,
            'eID' : eID,
            'eImg' : eImg,
            'eUp' : 'yes',
            'lpNonce' : jQuery('#lpNonce').val()
        },
        success: function( res )
        {
            ajax_success_popup( res, $this );
        },
        error: function( err )
        {
            console.log( err );
        }
    });
});

jQuery(document).on( 'click', '.attend-event', function (e) {
    e.preventDefault();
    var $this       =   jQuery(this),
        eID         =   $this.data('event'),
        eUID        =   $this.data('uid'),
        notGoing    =   '',
        goingText   =   jQuery('.going-text').val(),
        nGoingText  =   jQuery('.not-going-text').val();

    if( $this.hasClass('processing') )
    {

    }
    else
    {
        if( $this.hasClass('not-going') )
        {
            notGoing    =   'yes';
        }
        else
        {

        }
        if( $this.hasClass('from-lpec') )
        {
            $this.find('i').removeClass('fa-plus').addClass('fa-spinner fa-spin');
        }
        else
        {
            $this.append('<i class="fa fa-spinner fa-spin"></i>');
        }

        $this.addClass('processing');

        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_search_term_object.ajaxurl,
            data: {
                'action': 'event_attending_cb',
                'eID': eID,
                'eUID': eUID,
                'notGoing': notGoing,
                'lpNonce' : jQuery('#lpNonce').val()
            },
            success: function (res) {
                if( $this.hasClass('from-lpec') )
                {
                    jQuery('#lpec-attendee-count-'+eID).text(parseInt(res.total_attending));
                }
                else
                {
                    jQuery('.total-going').text(res.total_attending);
                    $this.find('i').removeClass('fa-spin fa-spinner').addClass('fa-check');
                }

                $this.removeClass('processing');
                if( notGoing == 'yes' )
                {
                    $this.removeClass('not-going');
                    if( $this.hasClass('from-lpec') )
                    {
                        jQuery('ul#lpec-attendees-avatar-'+eID).find('li#lpec-attendee-avatar-'+eUID+'-'+eID).remove();
                        $this.find('i').removeClass('fa-spin fa-spinner').addClass('fa-plus');
                    }
                    else
                    {
                        $this.text(goingText);
                    }

                }else
                {
                    $this.addClass('not-going');
                    if( $this.hasClass('from-lpec') )
                    {
                        jQuery('ul#lpec-attendees-avatar-'+eID).prepend(res.attendee_avatar);
                        $this.find('i').removeClass('fa-spin fa-spinner').addClass('fa-times');
                    }
                    else
                    {
                        $this.text(nGoingText);
                    }
                }

            },
            error: function (err) {
                console.log(err);
            }
        });
    }
});



jQuery(document).on('click', '.cancel-add-menu', function (e) {
    e.preventDefault();
    jQuery('#lp-save-menu').attr('id', 'lp-save-menu-reopen');
    jQuery('.lp-menu-close-outer.lp-menu-open').slideUp();
});
jQuery(document).on('click', '#lp-save-menu-reopen', function (e) {
    e.preventDefault();
    jQuery(this).attr('id', 'lp-save-menu');
    jQuery('.lp-menu-close-outer.lp-menu-open').slideDown();
});

jQuery(document).on('click', '.lp-notifi-icons', function (e) {
    e.preventDefault();
    jQuery(this).closest('.active-wrap').removeClass('active-wrap');
});
jQuery(document).ready(function () {
    jQuery('#fill-o-bot-check').on('change', function(e){
       if( jQuery(this).is(':checked') )
       {
            jQuery('#lptitle').attr('type', 'hidden');
           jQuery('.lptitle').addClass('fill-o-bot-active');
            jQuery('#lptitle').attr('name', '');
            jQuery('#lptitleGoogle').attr('name', 'postTitle');
            jQuery('#lptitleGoogle').attr('type', 'text');
       }
       else
       {
            jQuery('#lptitleGoogle').attr('type','hidden');
           jQuery('.lptitle').removeClass('fill-o-bot-active');
            jQuery('#lptitle').attr('name', 'postTitle');
            jQuery('#lptitle').attr('type', 'text');
            jQuery('#lptitleGoogle').attr('name', '');
            
       }
   });

});
jQuery('html').click(function (e) {
   if(jQuery('.lp-multi-star-wrap').is(":visible") && e.target.className != 'open-multi-rate-box' ) {
       if(jQuery('.lp-multi-star-wrap').hasClass('lp-multi-start-wrap-edit-review')) {

       } else {
           jQuery('.lp-multi-star-wrap').slideUp();
       }
   }
});
jQuery(document).ready(function () {
    jQuery('#fill-o-bot-check').on('change', function(e){
        if( jQuery(this).is(':checked') )
        {
            jQuery('#lptitle').attr('type', 'hidden');
            jQuery('#lptitle').removeClass('lp-required-field');
            jQuery('.lptitle').addClass('fill-o-bot-active');
            jQuery('#lptitle').attr('name', '');
            jQuery('#lptitleGoogle').attr('name', 'postTitle');
            jQuery('#lptitleGoogle').attr('type', 'text');
            jQuery('#lptitleGoogle').addClass('lp-required-field');
        }
        else
        {
            jQuery('#lptitleGoogle').attr('type','hidden');
            jQuery('.lptitle').removeClass('fill-o-bot-active');
            jQuery('#lptitleGoogle').removeClass('lp-required-field');
            jQuery('#lptitle').attr('name', 'postTitle');
            jQuery('#lptitle').attr('type', 'text');
            jQuery('#lptitleGoogle').attr('name', '');
            jQuery('#lptitle').addClass('lp-required-field');
        }
    });
});

jQuery(document).on('keyup', '#menu-type-new, #menu-group-new', function()

{
    var typeGroupText   =   jQuery(this).val(),
        errMsg          =   jQuery(this).data('err'),
        re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;

    var isSplChar = re.test(typeGroupText);
    if(isSplChar)

    {
        var no_spl_char = typeGroupText.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

        jQuery(this).val(no_spl_char);
        jQuery(this).after('<p>'+ errMsg +'</p>');
    }

});
//Event detail page view more and less more
jQuery(document).ready(function() {
    jQuery('.lp-event-view-less').click(function(e){
        e.preventDefault();
        var lessText = jQuery(this).data('contract');
        var moreText    =   jQuery(this).data('expand');
        if(jQuery(this).hasClass('event-shown')){
            jQuery(this).removeClass('event-shown');
            jQuery(this).html(moreText);
            jQuery('.lp-attende-extra').removeClass('active');
        }else{
            jQuery(this).addClass('event-shown');
            jQuery('.lp-attende-extra').addClass('active');
            jQuery(this).html(lessText);
        }

    });

    /* for event gaddress */

    function initializeEventAddr() {
        if( jQuery('.event-addr').length > 0 )
        {
            jQuery('.event-addr').each(function(index){
                var input = document.getElementById(jQuery(this).attr('id'));
                var autocomplete = new google.maps.places.Autocomplete(input);
                google.maps.event.addListener(autocomplete, 'place_changed', function () {
                    var place = autocomplete.getPlace();
                    var lat = place.geometry.location.lat();
                    var lon =  place.geometry.location.lng();
                    jQuery('input.latitude').val(lat);
                    jQuery('input.longitude').val(lon);
                });
            });
        }

    }
    google.maps.event.addDomListener(window, 'load', initializeEventAddr);

    /* gaddress ends */
});

jQuery(document).on('click', 'span.remove-menu-img', function (e) {
    e.preventDefault();
    var targetID    =   jQuery(this).data('target'),
        targetSrc   =   jQuery(this).data('src')+',',
        targetImgs  =   jQuery('.active-upload').find('.frontend-input-multiple').val();    if( targetImgs == undefined )
    {
        targetImgs  =   jQuery('#'+targetID).val();
    }    targetImgs  =   targetImgs.replace( targetSrc, '' );
    jQuery(this).closest('.menu-edit-img-wrap').remove();
    jQuery('input#'+targetID).val(targetImgs);
});

jQuery(document).on('click', '.select2-results ul li', function(e){
    jQuery('.lp-pp-noa-tip').fadeIn();
});

jQuery('.select2-ajax-unique').on('select2:select', function (e) {
    jQuery('.lp-pp-noa-tip').fadeOut();
});

jQuery('.select2-ajax').on('select2:select', function (e) {
   jQuery('.lp-pp-noa-tip').fadeOut();
});


jQuery(document).on('click', '.remove-event-img', function (e) {
    e.preventDefault();
    var $this   =   jQuery(this);
    if( $this.hasClass('remove-eei') )
    {
        var targetID    =   $this.data('targetid');
        $this.closest('.removeable-image').find('.frontend-image').attr('src', '');
        $this.closest('.removeable-image').find('.frontend-image').hide();
        $this.closest('.removeable-image').find('.lp-uploaded-img').attr('src', '');
        $this.closest('.removeable-image').find('.frontend-input').val('');
        jQuery('#event-old-img-'+targetID).val('');
        $this.remove();
    }
    else
    {
        $this.closest('.removeable-image').find('.frontend-image').attr('src', '');
        $this.closest('.removeable-image').find('.frontend-image').hide();
        $this.closest('.removeable-image').find('.frontend-input').val('');
        $this.remove();
    }
});


jQuery(document).on('click', '.lp-copy-code', function (e)
{
    e.preventDefault();
    var $this           =   jQuery(this);
    var targetCodeEL    =   jQuery(this).data('target-code'),
        thisHtml        =   jQuery(this).data('html'),
        targetCodeELC   =   '.'+targetCodeEL;
    if( $this.hasClass('close-copy-pop') ){
        /*SAUD*/
        $this.closest('.lp-discount-widget').find(targetCodeELC).animate({
            bottom: '-'+ jQuery(targetCodeELC).height() +'px'
        }, 500, function (e) {
            $this.html(thisHtml);
            $this.removeClass('close-copy-pop');
        });
    }
    else
    {
        var bottomPlus  =   0;
        if( $this.hasClass('lp-discount-btn') )
        {
            bottomPlus  =   49;
        }

        var parent_class = '.coupons-bottom-content-wrap';

        if (jQuery(parent_class).length > 0) {
            parent_class = '.coupons-bottom-content-wrap';
        }else {
            parent_class = '.lp-deal';
            if (jQuery(parent_class).length > 0) {
                parent_class = '.lp-deal';
            }else{
                parent_class = '.lp-discount-widget';
            }
        }

        if (jQuery(parent_class).length < 1) {
            parent_class = '.lp-listing-offer';
        }

        $this.closest(parent_class).find(targetCodeELC).animate({
            bottom: bottomPlus + 'px'
        }, 500, function (e) {
            if ($this.hasClass('lp-discount-btn')) {
                $this.addClass('close-copy-pop');
                $this.html('<span><i class="fa fa-times"></i></span>');
            }
        });
    }
});
jQuery(document).on('click', '.close-right-icon', function (e) {
    e.preventDefault();
    var $this  =   jQuery(this),
        target =   '.'+$this.data('target');

    jQuery(target).animate({
        bottom: '-'+jQuery(target).height()+'px'
    });
});
jQuery(document).on('click', '.copy-now', function (e) {

    e.preventDefault();
    var targetCodeEL    =   jQuery(this).data('target-code'),
        targetCodeELC   =   '#'+targetCodeEL;

    jQuery(targetCodeELC).find('input[type="text"]').select();
    document.execCommand("copy");
    jQuery(targetCodeELC).find('.dis-code-copy-pop-inner-cell').find('p:first-child').text(jQuery('.copy-now').data('coppied-label'));
});


jQuery(document).on('click', '.lp-pagination.author-reviews-pagination span', function (e) {
    e.preventDefault();
    var paginNo     =   jQuery(this).data('pageurl');

    jQuery('.reviews-pagin-wrap').hide();
    jQuery('.reviews-pagin-wrap.reviews-pagin-wrap-'+paginNo).show();
});
jQuery(document).on('click', '.lp-filter-pagination-ajx ul li span.author-haspaglink', function (e) {
    e.preventDefault();
    var pageNo	=	jQuery(this).data('pageurl'),
        authorID    =   jQuery('.lp-author-nav').data('author'),
        authorPagin =   'yes',
        listingLayout   =   jQuery('#mylistings').data('listing-layout');

    jQuery('.lp-filter-pagination-ajx ul li span').removeClass('current');
    jQuery(this).addClass('current');

    jQuery('#mylistings').find('.author-inner-content-wrap').addClass('content-loading');
    jQuery('#mylistings #content-grids').remove();

    jQuery.ajax({
        type: 'POST',
        url: ajax_search_term_object.ajaxurl,
        data: {
            'action': 'author_archive_tabs_cb',
            'pageNo': pageNo,
            'authorID':authorID,
            'authorPagin' : authorPagin,
            'listingLayout':listingLayout,
            'lpNonce' : jQuery('#lpNonce').val()
        },
        success: function(data) {
            jQuery('#mylistings').find('.author-inner-content-wrap').removeClass('content-loading');
            jQuery('#mylistings').find('.author-inner-content-wrap').html(data);
            console.log(data);
        }
    });
});

jQuery(document).ready(function(){
    if( jQuery('.featuresDataContainer.lp-check-custom-wrapp').length > 0)
    {
        jQuery('.featuresDataContainerOuterSubmit').show();
        jQuery('.featuresDataContainer.lp-check-custom-wrapp').show();
    }
});
jQuery(document).ready(function(){
    jQuery('.lp-review-form-top .lp-listing-stars').click(function (e) {
        e.preventDefault();
        if( jQuery(this).hasClass('do-not-proceed') )
        {}
        else
        {
            jQuery(this).addClass( 'do-not-proceed' );
            jQuery('.lp-review-form-bottom').slideToggle(500);
            jQuery('html,body').animate( {
             scrollTop: jQuery(".lp-listing-review-form").offset().top -100
          },'slow');
        }
    });
 });   
// for events
jQuery(document).on('change', '#toggle-attendees-check', function () {
    if( jQuery(this).is(':checked') )
    {
        jQuery('.attendee-checkbox').attr('checked', 'checked');
    }
    else
    {
        jQuery('.attendee-checkbox').removeAttr('checked');
    }
});
jQuery(document).on('click', '.download-attendees', function (e) {
    e.preventDefault();
});
jQuery(document).on('click', '#lp-send-message', function(e){
    e.preventDefault();
    var $this       =   jQuery(this),
        msgError    =   jQuery('#event-msg-error').val(),
        msgSuccess  =   jQuery('#event-msg-success').val(),
        uid         =   $this.data('uid'),
        msgContent  =   jQuery('.attendeesmessage').val(),
        attendees   =   jQuery(".attendee-checkbox:checked").map(function(){
            return jQuery(this).val();
        }).get();

    var responseData    =   [];

    if( msgContent == '' || attendees == '' )
    {
        responseData.status =   'error';
        responseData.msg    =   msgError;
        ajax_success_popup( responseData, $this );
        return false;
    }


    if( $this.hasClass('processing') )
    {

    }
    else
    {
        $this.append('<i class="fa fa-spinner fa-spin"></i>');
        $this.addClass('processing');
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_search_term_object.ajaxurl,
            data: {
                'action': 'send_attendees_msg',
                'msgContent': msgContent,
                'attendees': attendees,
                'uid': uid,
                'lpNonce' : jQuery('#lpNonce').val()
            },
            success: function (res) {
                responseData.status =   'success';
                responseData.msg    =   msgSuccess;
                ajax_success_popup( responseData, $this );
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
});
jQuery(document).on('click', '.open-send-msg-form, .cancel-send-mas-atten', function (e) {
    e.preventDefault();
    jQuery('#notification-form').slideToggle('fast', function () {
        jQuery("html, body").animate({ scrollTop:  jQuery('#notification-form').offset().top }, 1000);
    });
});

jQuery(document).on('click', '.attendees-pagination span', function (e) {
    e.preventDefault();
    var $this   =   jQuery(this),
        pageNo  =   $this.data('pageurl'),
        targetC =   '.attendees-pagin-wrap-'+pageNo;

    if( jQuery(this).hasClass( 'current' ) )
    {
        return false;
    }
    jQuery('.attendees-pagination span.current').removeClass('current');
    $this.addClass('current');
    jQuery('.current-pagin-wrap').fadeOut(500, function () {
        jQuery('.current-pagin-wrap').removeClass('current-pagin-wrap');
        jQuery(targetC).fadeIn(500, function () {
            jQuery(targetC).addClass('current-pagin-wrap');
        })
    });
});

jQuery(document).on('click', '.listing-tabs-element li a', function (e) {
    e.preventDefault();
    var $this       =   jQuery(this),
        taxonomy    =   $this.attr('data-tax'),
        term        =   $this.attr('data-term'),
        numPost     =   $this.attr('data-num'),
        layout     =   $this.attr('data-layout'),
        list     =   $this.attr('data-list'),
        grid     =   $this.attr('data-grid');


    jQuery('.listing-tabs-element li.active').removeClass('active');
    $this.closest( 'li' ).addClass('active');
    jQuery('#listing-tabs-inner-container').html();
    jQuery('#listing-tabs-inner-container').closest('.wpb_wrapper').find('.listingcampaings').remove();
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajax_search_term_object.ajaxurl,
        data: {
            'action': 'listing_tabs_get_listings',
            'taxonomy': taxonomy,
            'term': term,
            'numPost': numPost,
            'layout': layout,
            'list': list,
            'grid': grid,
            'lpNonce' : jQuery('#lpNonce').val()
        },
        success: function (res) {
            jQuery('#listing-tabs-inner-container').html(res);
            jQuery('#listing-tabs-inner-container').find('.listingcampaings').remove();
            
            jQuery('#listing-tabs-inner-container').find('.app-view-new-ads-slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            });
            
        },
        error: function (err) {
            console.log(err);
        }
    });

})

//for events calander
jQuery(document).on('click', '.calender-header-switcher ul li', function(){
    var $this   =   jQuery(this);

    jQuery('.calender-header-switcher ul li.active').removeClass('active');
    $this.addClass('active');

    var calanderType    =   'event-calender-list-view';
    if( jQuery('.calender-type-wrap').length > 0 )
    {
        calanderType    =   jQuery('.calender-type-wrap').data('ctype');
    }

    getCalanderMapView( calanderType, $this );

});
jQuery(document).on('click', '.close-active-box', function (e) {
    e.preventDefault();
    jQuery('.current-active-box').removeClass('current-active-box');
    jQuery('.active-event-for-map').removeClass('active-event-for-map');
    jQuery('.caew-box').removeClass('caew-box').fadeOut(500);
    jQuery('.event-calander-classic2').fadeOut(500);
    jQuery('.calender-header-switcher ul li').removeClass('active');
    jQuery('.calender-header-switcher ul li.show-calader-list').addClass('active');
    jQuery('.calender-type-wrap').attr('data-activetoggle', 'calander');
    if(jQuery('.event-calander-classic2').length) {
        jQuery('.event-by-day-wrap').fadeOut();
    }
});
jQuery(document).on('click', '.week-day-date-box.has-events', function (e) {
    e.preventDefault();

    var $this       =   jQuery(this),
        ewtTarget   =   $this.data('ewt'),
        targetDate  =   $this.data('todaytime'),
        targetDateA =   targetDate.split('-');

    jQuery('.current-active-box').removeClass('current-active-box');
    if( $this.hasClass('current-active-box') )
    {
        $this.removeClass('current-active-box');
        jQuery('.active-event-for-map').removeClass('active-event-for-map');
        jQuery('.caew-box').removeClass('caew-box').fadeOut(500);
        jQuery('.event-calander-classic2').fadeOut(500);
        return false;
    }
    else
    {
        $this.addClass('current-active-box');
    }
    if( jQuery('.modern-calender-inner-left').length > 0 )
    {
        if( jQuery('.events-by-day-wrap.caew-box').length > 0 )
        {
            if( jQuery('.calender-type-wrap').attr('data-activetoggle') == 'map' )
            {
                jQuery('.active-event-for-map').removeClass('active-event-for-map');
                jQuery('.events-by-day-wrap[data-ebdt="'+ ewtTarget +'"]').addClass('caew-box active-event-for-map');
                jQuery('.calender-header-switcher ul li.show-calander-map').trigger('click');
            }
            else
            {
                jQuery('.active-event-for-map').removeClass('active-event-for-map');
                jQuery('.caew-box').removeClass('caew-box').fadeOut(500, function () {
                    jQuery('.events-by-day-wrap[data-ebdt="'+ ewtTarget +'"]').addClass('caew-box active-event-for-map').fadeIn();
                });
            }
        }
        else
        {
            jQuery('.events-by-day-wrap[data-ebdt="'+ ewtTarget +'"]').addClass('caew-box active-event-for-map').fadeIn();
        }
        jQuery('.calender-header-moderen-date2 .today-event-date-container p').html(targetDateA[1]+ ' ' + targetDateA[0] +'<span>'+ targetDateA[2] +'</span>');
    }
    else
    {
        if( jQuery('.event-calander-classic2').length > 0 )
        {
            showClassic2CalEvents(ewtTarget, targetDate);
        }
        else
        {
            showClassicCalEvents(ewtTarget);
        }
    }

});
jQuery(document).on('click', '.get-npm', function (e) {
    e.preventDefault();
    if( jQuery(this).hasClass('disabled') )
    {
        return false;
    }
    var $this           =   jQuery(this),
        targetDate      =   $this.data('npmnum'),
        currentCMN      =   jQuery('.cc-month').data('cmn'),
        cTypClass       =   jQuery('.calender-type-wrap').data('ctype'),
        cTypee          =   'classic',
        targetAction    =   'nm',
        currentMN       =   '',
        currentYN       =   '',
        per_page        =   '';

    if( jQuery('#event_per_page').length > 0 )
    {
        per_page    =   jQuery('#event_per_page').val();
    }
    if( cTypee == 'classic' && jQuery('#ec_classic2_check').length > 0 )
    {
        cTypee  =   jQuery('#ec_classic2_check').val();
    }
    if( cTypClass == 'event-calender-modern' )
    {
        cTypee   =   'modern';
    }
    if( cTypClass == 'event-calender-list-view' )
    {
        cTypee  =   'list'
    }
    if( cTypClass == 'event-calender-classic-weekly' )
    {
        cTypee  =   'weekly';
    }
    if (currentCMN.indexOf(',') > -1)
    {
        var currentCMNArr   =   currentCMN.split(','),
            currentMN       =   currentCMNArr[0],
            currentYN       =   currentCMNArr[1];
    }

    if( $this.hasClass( 'btn-pm' ) )
    {
        targetAction    =   'pm';
    }

    if (targetDate.indexOf(',') > -1)
    {
        var targetDateArr   =   targetDate.split(','),
            targetDateM     =   targetDateArr[0],
            targetDateY     =   targetDateArr[1];


        jQuery('.'+cTypClass).fadeOut(500, function () {
            jQuery('.event-spinner').fadeIn();
        });

        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_search_term_object.ajaxurl,
            data: {
                'action': 'get_event_calender_data',
                'targetDateM': targetDateM,
                'targetDateY': targetDateY,
                'targetAction' : targetAction,
                'currentMN' : currentMN,
                'currentYN' : currentYN,
                'cTypee' : cTypee,
                'per_page' : per_page,
                'lpNonce' : jQuery('#lpNonce').val()
            },
            success: function (res) {
                if( res.status == 'success' )
                {
                    jQuery('.prev-mon-markup').html(res.prev_mon_markup);
                    jQuery('.next-mon-markup').html(res.next_mon_markup);
                    jQuery('.curr-mon-markup').html(res.curr_mon_markup);

                    if( cTypee == 'weekly' )
                    {
                        jQuery('.event-calender-weekly').html(res.calender_markup);
                        jQuery('.event-calender-weekly').addClass('events-after-ajax');

                        var weekFirstDate   =   jQuery('.week-days-wrap.active-week .lp-week-days-wrape-inner-container .week-day-box:first .week-day-date').text();
                        var weekLastDate    =   jQuery('.week-days-wrap.active-week .lp-week-days-wrape-inner-container .week-day-box:last .week-day-date').text();

                        if( weekFirstDate == '' )
                        {
                            weekFirstDate   =   '1';
                        }
                        if( weekLastDate == '' )
                        {
                            weekLastDate    =   '31';
                        }
                        getActiveWeekEvents(weekFirstDate, weekLastDate);
                    }
                    else
                    {
                        jQuery('.event-calender-monthly').html(res.calender_markup);
                        if(cTypee == 'modern') {
                            if(jQuery('.month-dates-wrap .week-day-date-box.has-events').length) {
                                var target_first_event  =   jQuery('.month-dates-wrap .week-day-date-box.has-events:first').attr('data-ewt'),
                                    target_daytime      =   jQuery('.month-dates-wrap .week-day-date-box.has-events:first').attr('data-todaytime');
                            } else {
                                var target_first_event  =   jQuery('.month-dates-wrap .week-day-date-box.has-no-events:first').attr('data-ewt'),
                                    target_daytime      =   jQuery('.month-dates-wrap .week-day-date-box.has-no-events:first').attr('data-todaytime');
                            }
                            var target_daytime_arr  =   target_daytime.split('-');
                            var target_day_markup   =   target_daytime_arr[1]+' '+target_daytime_arr[0]+' <span>'+target_daytime_arr[2]+'</span>';
                            jQuery('.events-by-day-wrap[data-ebdt='+target_first_event+']').addClass('caew-box active-event-for-map').fadeIn();
                            jQuery('.today-event-date-container p').html(target_day_markup);
                        }

                    }
                    jQuery('.event-spinner').fadeOut(500, function () {
                        jQuery('.'+cTypClass).fadeIn();
                    });
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
});
jQuery(document).on('click', '.event-pager ul li span', function (e) {
    var $this   =   jQuery(this),
        pageNo  =   $this.data('pageno');

    if( $this.hasClass('current') )
    {
        return false;
    }
    jQuery('.event-pager ul li .current').removeClass('current');
    $this.addClass('current');
    jQuery('.list-calendar-pager-wrap.current-event-page-active').fadeOut(500, function () {

        jQuery('.list-calendar-pager-wrap.current-event-page-active').removeClass('current-event-page-active');
        jQuery('.list-calendar-pager-wrap .active-event-for-map').removeClass('active-event-for-map');

        if( jQuery('.calender-type-wrap').attr('data-activetoggle') == 'map' )
        {
            jQuery('.list-calendar-pager-wrap:eq( '+ pageNo +' )').addClass('current-event-page-active');
            jQuery('.current-event-page-active .events-by-day-wrap').addClass('active-event-for-map');
            jQuery('.calender-header-switcher ul li.show-calander-map').trigger('click');
        }
        else
        {
            jQuery('.list-calendar-pager-wrap:eq( '+ pageNo +' )').fadeIn(500, function(){
                jQuery('.list-calendar-pager-wrap:eq( '+ pageNo +' )').addClass('current-event-page-active');
                jQuery('.current-event-page-active .events-by-day-wrap').addClass('active-event-for-map');
            });
        }

    });
});
jQuery(document).on('click', '.event-npw', function(){
    var $this       =   jQuery(this),
        targetWeek  =   $this.data('targetweek');

    var maxWeeks    =   jQuery('.event-calender-weekly .week-days-wrap').length;

    if( targetWeek > 0 && targetWeek <= maxWeeks )
    {
        jQuery('.week-days-wrap.active-week').removeClass('active-week');

        jQuery('.week-days-wrap').hide();
        jQuery('.event-week-'+targetWeek).show();
        jQuery('.week-days-wrap.event-week-'+targetWeek).addClass('active-week');

        var weekFirstDate   =   jQuery('.week-days-wrap.active-week .lp-week-days-wrape-inner-container .week-day-box:first .week-day-date').text();
        var weekLastDate    =   jQuery('.week-days-wrap.active-week .lp-week-days-wrape-inner-container .week-day-box:last .week-day-date').text();

        if( weekFirstDate == '' )
        {
            weekFirstDate   =   '1';
        }
        if( weekLastDate == '' )
        {
            weekLastDate    =   '31';
        }
        getActiveWeekEvents(weekFirstDate, weekLastDate);
    }
});
jQuery(document).on('click', '.week-days-wrap .week-day-box.has-events', function () {

    var $this   =   jQuery(this),
        targetE =   $this.data('ewt');

    jQuery('.events-for-day:visible').slideUp('fast', function () {
        jQuery('.'+targetE).slideDown('fast');
    });

});
jQuery(document).ready(function () {
    jQuery('.active-week').removeClass('active-week');
    jQuery('.week-day-box.has-events:first').closest('.week-days-wrap').addClass('active-week');

    var weekFirstDate   =   jQuery('.week-days-wrap.active-week .lp-week-days-wrape-inner-container .week-day-box:first .week-day-date').text();
    var weekLastDate    =   jQuery('.week-days-wrap.active-week .lp-week-days-wrape-inner-container .week-day-box:last .week-day-date').text();

    getActiveWeekEvents(weekFirstDate, weekLastDate);

    if( jQuery('.event-calender-modern').length > 0 )
    {
        jQuery('.week-day-date-box.has-events:first').trigger('click');
    }

});

function showClassicCalEvents(ewtTarget)
{
    jQuery('.event-calender-classic-map').empty();
    if( jQuery('.events-by-day-wrap.caew-box').length > 0 )
    {
        jQuery('.active-event-for-map').removeClass('active-event-for-map');
        jQuery('.caew-box').removeClass('caew-box').fadeOut(500, function () {
            jQuery('.events-by-day-wrap[data-ebdt="'+ ewtTarget +'"]').addClass('caew-box').fadeIn();
            jQuery('.events-by-day-wrap[data-ebdt="'+ ewtTarget +'"]').find('.event-by-day-wrap').addClass('active-event-for-map');
            if( jQuery('.calender-type-wrap').attr('data-activetoggle') == 'map' )
            {
                jQuery('.active-event-for-map').hide();
                jQuery('.calender-header-switcher ul li.show-calander-map.show-calander-map-'+ewtTarget).trigger('click');
            }
            else
            {
                jQuery('.calender-header-switcher ul li.show-calader-list').addClass('active');
                jQuery('.active-event-for-map').show();
            }
        });
    }
    else
    {
        jQuery('.active-event-for-map').removeClass('active-event-for-map');
        jQuery('.events-by-day-wrap[data-ebdt="'+ ewtTarget +'"]').addClass('caew-box').fadeIn();
        jQuery('.events-by-day-wrap[data-ebdt="'+ ewtTarget +'"]').find('.event-by-day-wrap').addClass('active-event-for-map');
        if( jQuery('.calender-type-wrap').attr('data-activetoggle') != 'map' ){
            jQuery('.events-by-day-wrap[data-ebdt="'+ ewtTarget +'"]').find('.event-by-day-wrap').fadeIn();
        }
    }
}

function showClassic2CalEvents(ewtTarget, targetDate)
{

    var TargetDate  =   targetDate.split('-');

    jQuery('.event-calander-classic2 .today-event-date-container span').text(TargetDate[1]+' '+TargetDate[0]);
    jQuery('.event-calender-classic-map').empty();
    jQuery('.active-event-for-map').hide().removeClass('active-event-for-map');
    jQuery('.event-calander-classic2').fadeIn(500);
    if( jQuery('.calender-type-wrap').attr('data-activetoggle') == 'map' )
    {
        jQuery('.event-calander-classic2 .event-by-day-wrap[data-ebdt="'+ ewtTarget +'"]').addClass('active-event-for-map');
        jQuery('.event-calander-classic2 .calender-header-switcher .show-calander-map').trigger('click');
    }
    else
    {
        jQuery('.event-calander-classic2 .event-by-day-wrap[data-ebdt="'+ ewtTarget +'"]').addClass('active-event-for-map').fadeIn();
    }
}
function getActiveWeekEvents(weekFirstDate, weekLastDate)
{
    jQuery('.event-calender-weekly .event-by-day-wrap-inner.events-for-day').each(function () {
        var $this       =   jQuery(this),
            targetDate  =   $this.data('targetdate');
        $this.removeClass('active-event-for-map');
        $this.fadeOut(500);

        if( targetDate >= weekFirstDate && targetDate <= weekLastDate )
        {
            $this.addClass('active-event-for-map');
            if(
                jQuery('.calender-type-wrap').attr('data-activetoggle') == 'calander' ||
                jQuery('.calender-type-wrap').attr('data-activetoggle') == undefined
            )
            {
                $this.fadeIn(500);
            }
        }
    });
    if( jQuery('.calender-type-wrap').attr('data-activetoggle') == 'map' )
    {
        jQuery('.calender-header-switcher ul li.show-calander-map').trigger('click');
    }
}
function getCalanderMapView( cType, $this )
{
    var mapWrapTartget  =   '.event-calender-weekly-map',
        eventWrapTarget =   '.event-by-day-wrap-inner',
        mapContainer    =   'map';

    if( cType == 'event-calender-list-view' )
    {
        mapWrapTartget  =   '.event-calander-list-map';
        eventWrapTarget =   '.current-event-page-active';
    }
    if( cType == 'event-calender-modern' )
    {
        mapWrapTartget  =   '.event-calander-moder-map';
        eventWrapTarget =   '.events-by-day-wrap.active-event-for-map';
    }
    if( cType == 'event-calender-classic' )
    {
        eventWrapTarget =   '.event-by-day-wrap.active-event-for-map';
        if( jQuery('.event-calander-classic2').length == 0 )
        {
            var mapDate =   $this.data('targetdate');
            mapWrapTartget  =   '.event-calender-classic-map.classic-map-'+mapDate;
        }
        else
        {
            mapWrapTartget  =   '.event-calender-classic-map';
        }
    }

    if( $this.hasClass('show-calander-map') )
    {
        jQuery('div[data-ctype="'+ cType +'"]').attr('data-activetoggle', 'map');
        jQuery(eventWrapTarget).fadeOut(500, function () {
            jQuery(mapWrapTartget).empty();
            jQuery(mapWrapTartget).html('<div id="map" class="event-calander-map"></div>');
            jQuery(mapWrapTartget).fadeIn();
            loadCalanderMap(mapContainer);
        });
    }
    if( $this.hasClass('show-calader-list') )
    {
        jQuery('div[data-ctype="'+ cType +'"]').attr('data-activetoggle', 'calander');
        jQuery(mapWrapTartget).fadeOut(500, function () {
            if( cType == 'event-calender-classic-weekly' )
            {
                var weekFirstDate   =   jQuery('.week-days-wrap.active-week .lp-week-days-wrape-inner-container .week-day-box:first .week-day-date').text();
                var weekLastDate    =   jQuery('.week-days-wrap.active-week .lp-week-days-wrape-inner-container .week-day-box:last .week-day-date').text();
                getActiveWeekEvents(weekFirstDate, weekLastDate);
            }
            if( cType == 'event-calender-list-view' || cType == 'event-calender-modern' || cType == 'event-calender-classic' )
            {
                jQuery(eventWrapTarget).fadeIn(500);
            }

        });
    }
}
function loadCalanderMap(mapContainer)
{
    var defmaplat = jQuery('body').data('defaultmaplat');
    var defmaplong = jQuery('body').data('defaultmaplot');

    var map = null
    $mtoken = jQuery('#page').data("mtoken");
    $mtype = jQuery('#page').data("mtype");
    $mapboxDesign = jQuery('#page').data("mstyle");

    if($mtoken != '' && $mtype == 'mapbox'){

        L.mapbox.accessToken = $mtoken;
        map = L.mapbox.map(mapContainer);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            id: jQuery('#page').data("mstyle"),
            accessToken: jQuery('#page').data("mtoken")
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
                maxZoom: 18,
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
        if( jQuery('.active-event-for-map').length > 0)
        {
            jQuery('.active-event-for-map').each(function () {
                var LPtitle  = jQuery(this).data("title"),
                    siteURL     = jQuery('#page').data("site-url");
                    LPposturl  = jQuery(this).data("posturl"),
                    LPlattitue  = jQuery(this).data("lattitue"),
                    LPlongitute  = jQuery(this).data("longitute"),
                    LPpostid  = jQuery(this).data("postid"),
                    LPimageSrc  = jQuery(this).find('.event-img').find('img').attr('src'),
                    LPaddress   =   jQuery(this).data('address');

                if(LPlattitue != '' && LPlongitute != '')
                {
                    var LPimage = '';
                    if(LPimageSrc != ''){
                        LPimage = LPimageSrc;
                    }

                    var markerLocation = new L.LatLng(LPlattitue, LPlongitute); // London

                    var CustomHtmlIcon = L.HtmlIcon.extend({
                        options : {
                            html : "<div class='lpmap-icon-shape pin card"+LPpostid+"'><div class='lpmap-icon-contianer'><img src='"+siteURL+"/wp-content/themes/listingpro/assets/images/pins/lp-logo.png' /></div></div>",
                        }
                    });

                    var customHtmlIcon = new CustomHtmlIcon();
                    var marker = new L.Marker(markerLocation, {icon: customHtmlIcon}).bindPopup('<div class="map-post"><div class="map-post-thumb"><a href="'+LPposturl+'"><img src="'+LPimage+'" ></a></div><div class="map-post-des"><div class="map-post-title"><h5><a href="'+LPposturl+'">'+LPtitle+'</a></h5></div><div class="map-post-address"><p><i class="fa fa-map-marker"></i> '+LPaddress+'</p></div></div></div>').addTo(map);

                    markers.addLayer(marker);
                    map.addLayer(markers);
                }
            });

        }
        else
        {
            alert('no listing foound');
        }

    }
}
jQuery(document).on('click', '.event-tickets-list-dash i', function (e) {
    var $this           =   jQuery(this),
        $thisWrap       =   $this.closest('.event-tickets-list-dash'),
        currentUrls     =   $thisWrap.find('input[type="hidden"]').val(),
        ticketPlatform  =   $this.attr('data-ticket-platform'),
        ticketUrl       =   $this.attr('data-ticket-url'),
        newUrls         =   '';
    if (currentUrls.indexOf(',') > -1)
    {
        if( currentUrls.indexOf(','+ticketPlatform) > -1 )
        {
            var findStr =   ','+ticketPlatform+'|'+ticketUrl;
        }
        else
        {
            var findStr =   ticketPlatform+'|'+ticketUrl;
        }
        newUrls =   currentUrls.replace( findStr, '' );
    }
    else
    {
        var findStr =   ticketPlatform+'|'+ticketUrl;
        newUrls =   currentUrls.replace( findStr, '' );
    }
    $thisWrap.find('input[type="hidden"]').val(newUrls);
    jQuery(this).closest('li').remove();
});

jQuery(document).on('click', '#add-event-ticket-platform', function(e){
    var thisWrap        =   jQuery(this).closest('.lp-coupon-box-row'),
        ticketPlatform  =   thisWrap.find('.event-tickets-platforms').val(),
        ticketUrl       =   thisWrap.find('.event-ticket-url').val(),
        currentUrls     =   thisWrap.find('input[type="hidden"]').val();
    if( ticketUrl == '' )
    {
        thisWrap.find('.event-ticket-url').addClass('error');
        return false;
    }
    else
    {
        thisWrap.find('.event-ticket-url').removeClass('error');
    }
    if( ticketPlatform == '' )
    {
        thisWrap.find('.event-tickets-platforms').addClass('error');
        return false;
    }
    else
    {
        thisWrap.find('.event-tickets-platforms').removeClass('error');
    }
    var embedMarkup =   '<li><strong>'+ ticketPlatform +'</strong> '+ ticketUrl +' <i class="fa fa-times" data-ticket-platform="'+ ticketPlatform +'" data-ticket-url="'+ ticketUrl +'"></i></li>';
    thisWrap.find('.event-tickets-list-dash ul').append( embedMarkup );
    
    if( currentUrls == '' )
    {
        thisWrap.find('input[type="hidden"]').val(ticketPlatform+'|'+ticketUrl);
    }
    else
    {
        thisWrap.find('input[type="hidden"]').val(currentUrls+','+ticketPlatform+'|'+ticketUrl);
    }
});

jQuery(document).on('click', '#add-new-service', function (e) {
    var $this       =   jQuery(this),
        uid         =   $this.attr('data-uid'),
        $thisWrap   =   $this.closest( '.ordering-service-wrap' ),
        serviceVal  =   $thisWrap.find('select').val(),
        serviceUrl  =   $thisWrap.find('input#service_url').val();
    if( $thisWrap.find('li:contains("'+ serviceVal +'")') .length )
    {
        $thisWrap.find('li:contains("'+ serviceVal +'")').css('color', 'red');
        return false;
    }
    if (jQuery('#service_url').val().length < 1){
        jQuery('.form-group.menu_online_order_url').addClass('with_error');
        return false;
    }else {
        jQuery('.form-group.menu_online_order_url').removeClass('with_error');
        if(/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(jQuery("#service_url").val())){
                    jQuery('.form-group.menu_online_order_url').removeClass('with_error');

        } else {
            jQuery('.form-group.menu_online_order_url').addClass('with_error');
            return false;

        }
    }

    jQuery('#add-new-service-spinner').fadeIn();
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajax_search_term_object.ajaxurl,
        data:{
            'action': 'add_menu_service_cb',
            'serviceVal' : serviceVal,
            'serviceUrl': serviceUrl,
            'user_id' : uid,
            'lpNonce' : jQuery('#lpNonce').val()
        },
        success: function( res )
        {
            jQuery('.form-group.menu_online_order_url').removeClass('with_error');
            if( res.status == 'success' )
            {
                jQuery('#add-new-service-spinner').fadeOut();
                $thisWrap.find('li.no-services').remove();
                $thisWrap.find('ul').append(res.msg);
            }
            console.log(res);
        },
        error: function( err )
        {
            alert( err );
            $this.find('i').remove();
        }
    });
});
jQuery(document).on('click', '#add-new-type', function (e) {
    e.preventDefault();
    var $this        =   jQuery(this),
        $thisWrap    =   $this.closest('#manage-types-content'),
        newType      =   $thisWrap.find('input[type="text"]').val(),
        uid          =   $this.data('uid');
    if( newType == '' )
    {
        $thisWrap.find('input[type="text"]').addClass('error');
        return false;
    }
    else
    {
        $thisWrap.find('input[type="text"]').removeClass('error');
        $this.addClass('processing');
    }
    if( $thisWrap.find('li:contains("'+ newType +'")') .length )
    {
        $thisWrap.find('li:contains("'+ newType +'")').css('color', 'red');
        return false;
    }
    jQuery('#add-new-type-spinner').fadeIn();
    $this.hide();
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajax_search_term_object.ajaxurl,
        data:{
            'action': 'add_menu_type_cb',
            'user_id' : uid,
            'type' : newType,
            'lpNonce' : jQuery('#lpNonce').val()
        },
        success: function( res )
        {
            jQuery('#add-new-type-spinner').fadeOut();
            $this.removeClass('processing');
            $this.show();
            $thisWrap.find('input[type="text"]').val('');
            jQuery('.lp-menu-step-one .panel-heading .nav-tabs li.active').removeClass('active');
            jQuery('.lp-menu-step-one .panel-body .tab-content .tab-pane.active').removeClass('in active');
            var embed_markup    =   '<li>'+ newType +' <span class="del-group-type del-type del-this" data-uid="'+ uid +'" data-targetid="'+ res.data_index +'"><i class="fa fa-trash"></i></span></li>';
            var embed_tab       =   '<li class="active"><a href="#type-'+ newType +'" data-toggle="tab">'+ newType +'</a></li>';
            var embed_tab_cn    =   '<div class="tab-pane fade in active" id="type-'+ newType +'"></div>';
            $thisWrap.find('ul').append(embed_markup);
            jQuery('.lp-menu-step-one .panel-heading .nav-tabs').append(embed_tab);
            jQuery('.lp-menu-step-one .panel-body .tab-content').append(embed_tab_cn);
        },
        error: function( err )
        {
            alert( err );
            $this.find('i').remove();
            $this.show();
        }
    });
});
jQuery(document).on('click', '#add-new-group', function (e) {
    e.preventDefault();
    var $this        =   jQuery(this),
        $thisWrap    =   $this.closest('#manage-groups-content'),
        newGroup     =   $thisWrap.find('input[type="text"]').val(),
        uid          =   $this.data('uid');
    if( newGroup == '' )
    {
        $thisWrap.find('input[type="text"]').addClass('error');
        return false;
    }
    else
    {
        $thisWrap.find('input[type="text"]').removeClass('error');
        $this.addClass('processing');
    }
    if( $thisWrap.find('li:contains("'+ newGroup +'")') .length )
    {
        $thisWrap.find('li:contains("'+ newGroup +'")').css('color', 'red');
        return false;
    }
    jQuery('#add-new-group-spinner').fadeIn();
    $this.hide();
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajax_search_term_object.ajaxurl,
        data:{
            'action': 'add_menu_group_cb',
            'user_id' : uid,
            'group' : newGroup,
            'lpNonce' : jQuery('#lpNonce').val()
        },
        success: function( res )
        {
            jQuery('#add-new-group-spinner').fadeOut();
            $this.removeClass('processing');
            $this.show();
            $thisWrap.find('input[type="text"]').val('');
            var embed_markup    =   '<li>'+ newGroup +' <span class="del-group-type del-group del-this" data-uid="'+ uid +'" data-targetid="'+ res.data_index +'"><i class="fa fa-trash"></i></span></li>';
            $thisWrap.find('ul').append(embed_markup);
            var optData = {
                id: newGroup,
                text: newGroup
            };
            var newOption = new Option(optData.text, optData.id, false, false);
            jQuery('#menu-group').append(newOption).trigger('change');
            var currentGroups   =   jQuery('#menu-group').val();
            if( currentGroups == null )
            {
                jQuery('#menu-group').val(group).trigger('change');
            }
            else
            {
                currentGroups.push(group);
                jQuery('#menu-group').val(currentGroups).trigger('change');
            }
        },
        error: function( err )
        {
            $this.show();
            alert( err );
            $this.find('i').remove();
        }
    });
});
jQuery(document).on('click', '.manange-typs-groups-tabs li', function (e) {
    e.preventDefault();
    jQuery('.manange-typs-groups-tabs li.active').removeClass('active');
    jQuery(this).addClass('active');

    var targetID =   jQuery(this).attr('id');

    if( targetID == 'manage-types-tab' )
    {
        jQuery('#manage-groups-content').removeClass('active-content');
        jQuery('#manage-types-content').addClass('active-content');
    }
    else
    {
        jQuery('#manage-types-content').removeClass('active-content');
        jQuery('#manage-groups-content').addClass('active-content');
    }
});
jQuery('#menu-group').on('select2:select', function (e) {
    jQuery('#menu-form-toggle').slideDown();
});
function myFuction(el) {
    jQuery(el).find('.show-number').css('display', 'none');
    jQuery(el).find('.grind-number').css('display', 'inline-block');
}
jQuery(document).on('click', '.listing-app-view-new-discount', function(){
    var $this   =   jQuery(this),
        target  =   $this.closest('.app-view2-first-recent');

    jQuery('.app-view2-first-recent').find('.popover_overlay.active_popover_overlay').removeClass('active_popover_overlay');

    if( $this.hasClass('current-active-pop')) {
        $this.removeClass('current-active-pop')
    } else {
        $this.addClass('current-active-pop');
        target.find('.popover_overlay').addClass('active_popover_overlay');
    }
});


/* ******************  SHOW ALL MENUS OF SELECTED LISTING  ******************* */
jQuery(document).on('change','#lp-menus #menu-listing', function() {

    var selectedListingID = jQuery(this).find(":selected").val();


    jQuery.ajax({
        dataType:'html',
        url: ajax_search_term_object.ajaxurl,
        data:{
            'action':'listingpro_dashboard_menu_of_listing',
            'selectedListingID' : selectedListingID,
            'lpNonce' : jQuery('#lpNonce').val()
        },
        success:function (res) {
            jQuery('.lp-compaignForm-leftside .lp-menu-panel-body-outer').html(res);
        },
        error:function (err) {
            console.log(err);
        },
    });

});

/* ******************  DELETE ALL MENUS OF LISTING  ******************* */
jQuery(document).on('click', '.del-this-menu', function(e)
{
    e.preventDefault();
    jQuery('.remove-active-menu').removeClass('remove-active-menu');
    jQuery(this).addClass('remove-active-menu');
    jQuery('#dashboard-delete-modal3').modal('show');
    jQuery('.modal-backdrop').hide();
});
jQuery(document).on('click', '.dashboard-confirm-del-menu-btn', function (e) {
    var $this       =   jQuery('.remove-active-menu'),
        lid         =   $this.data('targetid'),
        user_id     =   $this.data('uid');

    jQuery(this).append('<i class="fa fa-spin fa-spinner" style="margin-left: 5px;"></i>');

    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajax_search_term_object.ajaxurl,
        data:{
            'action': 'del_assigned_menu_to_listing',
            'user_id' : user_id,
            'lid' : lid,
            'lpNonce' : jQuery('#lpNonce').val()
        },
        success: function( res )
        {
            if( res.status == 'success' )
            {
                console.log('new 5382');
                location.reload();
            }
            $this.find('i').removeClass('fa-spin fa-spinner').addClass('fa-trash-o');
        },
        error: function( err )
        {
            console.log( err );
            $this.find('i').removeClass('fa-spin fa-spinner').addClass('fa-trash-o');
        }
    });
});
jQuery(document).on('click', '.open-edit-this-menu', function (e) {
    e.preventDefault();
    var targetID        =   jQuery(this).data('targetid'),
        listingTitle    =   jQuery(this).data('targettitle');

    jQuery('.panel.with-nav-tabs.panel-default.lp-dashboard-tabs').fadeOut("slow", function () {
        jQuery('div.tab-pane.fade.in.active.clearfix.lp-dashboard-menu-container').fadeIn("fast", function () {
            jQuery('div.panel.with-nav-tabs.panel-default.lp-dashboard-tabs.lp-left-panel-height.lp-left-panel-height-outer').fadeIn("fast");
        });
    });

    if(jQuery('#menu-listing').hasClass('select2-ajax')) {
        if (jQuery('#menu-listing').find("option[value='" + targetID + "']").length) {
            jQuery('#menu-listing').val(targetID).trigger('change');
        } else {
            var newOption = new Option(listingTitle, targetID, true, true);
            jQuery('#menu-listing').append(newOption).trigger('change');
        }
    } else {
        jQuery('#menu-listing').val(targetID);
        jQuery('#menu-listing').trigger('change');
    }

});

jQuery(document).on('click', '.discount-bar', function (e) {
    var $this       =   jQuery(this),
        thisWrap    =   $this.closest('.lp-listing-bottom-right');

    $this.toggleClass('active-discount-bar');

    if($this.hasClass('active-discount-bar')){
        $this.find('i.pull-right').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    } else {
        $this.find('i.pull-right').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }


    thisWrap.find('.coupons-bottom-content-wrap').slideToggle(function () {
        $this.closest('.lp-listing-bottom-right').toggleClass('active');
    });
});

jQuery(document).on('click', '.del-order-service', function (e) {
   var $this    =   jQuery(this),
       uid      =   $this.attr('data-uid'),
       target   =   $this.attr('data-target');

   if($this.hasClass('active-ajax')){

   } else {
       $this.addClass('active-ajax');
       $this.find('i').removeClass('fa-trash').addClass('fa-spinner fa-spin');

       jQuery.ajax({
           type: 'POST',
           dataType: 'json',
           url: ajax_search_term_object.ajaxurl,
           data:{
               'action': 'del_ordering_service',
               'uid' : uid,
               'target' : target,
               'lpNonce' : jQuery('#lpNonce').val()
           },
           success: function( res )
           {
               if( res.status == 'success' )
               {
                   $this.closest('li').remove();
               }
           },
           error: function( err )
           {
               console.log( err );
               $this.find('i').removeClass('fa-spin fa-spinner').addClass('fa-trash-o');
           }
       });
   }
});
jQuery(document).on('click', '.delete-my-review', function (e) {
    e.preventDefault();
    var $this       =   jQuery(this),
        reviewID    =   $this.attr('data-reviewid');

    if($this.hasClass('active-ajax')) {

    } else {
        $this.addClass('active-ajax');
        $this.append('<i class="fa fa-spinner fa-spin" style="margin-left: 5px;"></i>');

        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_search_term_object.ajaxurl,
            data:{
                'action': 'delete_own_review',
                'reviewID' : reviewID,
                'lpNonce' : jQuery('#lpNonce').val()
            },
            success: function( res )
            {
                console.log('new 5495');
                location.reload();
            },
            error: function( err )
            {
                console.log( err );
                $this.find('i').removeClass('fa-spin fa-spinner').addClass('fa-trash-o');
            }
        });
    }

});
jQuery(document).ready(function () {
    jQuery('.lp-ad-location-image').click(function (e) {
        e.preventDefault();
        var img_src = jQuery(this).find('img').data('model_img_src_ad');
        jQuery('#ad_preview').find('#imgsrc').attr('src', img_src);
    });
});
jQuery(document).on('click', '.app-view2-show-search', function(e){
    e.preventDefault();
    var inputField = jQuery('.dropdown_fields');
    inputField.trigger('click');
});

var noResultsText   =   jQuery('#select2-ajax-noresutls').val(),
    inputShortText  =   jQuery('#select2-ajax-tooshort').val(),
    searchingText   =   jQuery('#select2-ajax-searching').val();
var annDropzone=null;
Dropzone.autoDiscover = false;
jQuery(document).ready(function () {
    if(jQuery('.dropzone').length)annDropzone = new Dropzone("div#dropzoneForm", {
        url: "/v1/api/attachFile",
        paramName: "file",
        maxFilesize: 200, // MB
        addRemoveLinks: false,
        thumbnailWidth: 294,
        thumbnailHeight: 294,
        autoProcessQueue: true,
        dictDefaultMessage: '<strong>Drop attach files here or click to upload. </strong></br> (File will be safe.)',
        init: function () {
            this.on("processing", function(file) {
                
            });
            this.on("uploadprogress", function(file, progress, bytesSent) {
                
            });
            this.on("thumbnail", function(file, dataUrl) {

            });
            this.on("success", function(file) {
                
            });
            this.on("sending", function (file, xhr, formData) {
                formData.append("_token", jQuery('meta[name="csrf-token"]').attr('content'));
                formData.append('kind',0);
                formData.append('id',jQuery('#edit_id').val());
            });
            this.on("success", function(file,res) {
                res=JSON.parse(res);
                var radio=document.createElement('input');
                radio.setAttribute('type','radio');
                radio.setAttribute('name','discovery_file');
                radio.setAttribute('class','discovery-file');
                radio.setAttribute('data-id',res.id);
                radio.setAttribute('onchange','selectDiscoverImage('+res.id+');');
                file.previewTemplate.appendChild(radio);
                var div=document.createElement('div');
                div.setAttribute('class','portada');
                div.setAttribute('id',res.id);
                if(!res.flag)div.setAttribute('style','display:none;');
                div.innerHTML = 'Portada';
                file.previewTemplate.appendChild(div);
                if(res.flag)radio.setAttribute('checked',true);
            });
            this.on("complete", function (file) {
                if (this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) {
                    
                }
            });
            this.on('error', function(file, errorMessage) {
                
            });
            this.on('removedfile', function(file) {
                
            });
        }
    });
    jQuery('#announcement-dropzone-btn').on('click',function(e){
        annDropzone.processQueue();
        e.preventDefault();
    });
    /*
    jQuery('#edit_state').select2({
        ajax: {
            url: '/v1/api/getStatesInCountry',
            dataType: 'json',
            type:'POST',
            data: function (params) {
                return {
                    q: params.term,
                    country_id: jQuery('#edit_national').val()
                };
            },
            processResults: function( data ) {
                var options = [];
                var disabled_opts   =   false;
                if ( data ) {
                    jQuery.each( data, function( index, text ) {
                        var disabled_opts   =   false;
                        options.push( { id: text.id, text: text.name, disabled:disabled_opts } );
                    });

                }
                return {
                    results: options
                };
            },
            cache: true
        },
        minimumInputLength: 3,
        language: {
            inputTooShort: function () {
                return inputShortText;
            },
            noResults: function () {
                return noResultsText;
            },
            searching: function () {
                return searchingText;
            }
        }
    });
    */
    jQuery('#edit_category').select2({placeholder: "Elige categoría"});
    jQuery('#edit_city').select2({placeholder: "Elige Ciudad"});
    jQuery('#edit_state').select2({placeholder: "Elige Estado"});
    jQuery.ajax({
        url: '/v1/api/getStatesInCountry',
        dataType: 'json',
        type:'POST',
        data: {
            country_id: jQuery('#edit_national').val()
        },
        success: function( data ) {
            var $el=jQuery("#edit_state");
            $el.empty();
            $el.append(jQuery("<option></option>").attr("value", 0).text('Elige Estado'));
            if ( data.length ) {
                for(var i=0;i<data.length;i++){
                    $el.append(jQuery("<option></option>").attr("value", data[i].id).text(data[i].name));
                }
            }

            if(jQuery('#edit_state_selected').val()>0){
                jQuery("#edit_state").val(jQuery('#edit_state_selected').val());
                jQuery("#edit_state").trigger('change');
                $val=jQuery("#edit_description").html();
                jQuery('#edit_description').html(unescape($val));
            }
        }
    });
    jQuery("#edit_state").on('change',function(){
        editStateChanged();
    });
    //editStateChanged();
    tinymce.init({
        selector: '#edit_description',
        entity_encoding : "raw",
        menubar: false,
        toolbar_item_size: "small",
        statusbar: false,
        toolbar: [
            'styleselect fontselect fontsizeselect | blockquote subscript superscript',
            'bold italic strikethrough forecolor backcolor | alignleft aligncenter alignright alignjustify bullist numlist outdent indent',
            'undo redo | cut copy paste | print preview'//image
        ],//blockquote subscript superscript |//| cut copy paste
        plugins : 'advlist autolink link image lists charmap print preview',// font',
        //images_upload_url: '/uploadFile',
        //images_upload_base_path: '/some/basepath',
        //images_upload_credentials: true,
        images_upload_handler: function (blobInfo, success, failure) {
            var xhr, formData;
            xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            xhr.open('POST', '/v1/api/uploadFile');
            xhr.onload = function() {
                var json;    
                if (xhr.status != 200) {
                    failure('HTTP Error: ' + xhr.status);
                    return;
                }
                json = JSON.parse(xhr.responseText);
                if (!json || typeof json.location != 'string') {
                    failure('Invalid JSON: ' + xhr.responseText);
                    return;
                }
                success(json.location);
            };
            formData = new FormData();
            formData.append('file', blobInfo.blob(), blobInfo.filename());
            xhr.setRequestHeader('X-CSRF-Token',jQuery('meta[name="csrf-token"]').attr('content'));
            xhr.send(formData);
        }
    });
    jQuery('textarea[name="detail_description"]').each(function(){
        $this=jQuery(this);
        $this.val(unescape($this.val()));
    });
    tinymce.init({
        selector: 'textarea[name="detail_description"]',
        entity_encoding : "raw",
        menubar: false,
        toolbar: false,
        toolbar_item_size: "small",
        statusbar: false,
        readonly :1
    });
    jQuery('#ad-announcement-btn').on( 'click', function (e) {
        e.preventDefault();
        var $this   =   jQuery(this),
            userID  =   $this.data('uid'),
            title   =   jQuery('#edit_title').val(),
            category=   jQuery('#edit_category').val(),
            state   =   jQuery('#edit_state').val(),
            city    =   jQuery('#edit_city').val(),
            street  =   jQuery('#edit_street').val(),
            description=escape(tinyMCE.activeEditor.getContent());
        if( title==null || title=='' )
        {
            jQuery('#edit_title').addClass('error');
            jQuery('#edit_title').focus();
        }else{
            jQuery('#edit_title').removeClass('error');
        }
        if( category==null || category=='' || category==0 )
        {
            jQuery('#select2-edit_category-container').addClass('error');
        }else{
            jQuery('#select2-edit_category-container').removeClass('error');
        }
        if( state==null || state=='' || state==0 )
        {
            jQuery('#select2-edit_state-container').addClass('error');
        }else{
            jQuery('#select2-edit_state-container').removeClass('error');
        }
        if( city==null || city=='' || city==0 )
        {
            jQuery('#select2-edit_city-container').addClass('error');
        }else{
            jQuery('#select2-edit_city-container').removeClass('error');
        }
        if( description==null || description=='' )
        {
            jQuery('.tox.tox-tinymce').addClass('error');
            jQuery('.tox.tox-tinymce').focus();
        } 
        if( title==null || title=='' || category==null || 
            category=='' || state==null || state=='' || 
            city==null || city=='' || category==0 || state==0 || city==0 || 
            description==null || description=='' )
        {
            var dataError   =   [];
            dataError.status    =   'error';
            //dataError.msg    =   jQuery('.lp-notifaction-area').data('error-msg');
            //ajax_success_popup( dataError, $this );
            //$this.find('i').remove();
            return false;
        }
        if( $this.hasClass('processing-ann') )
        {}
        else
        {
            $this.append('<i class="fa fa-spin fa-spinner"></i>');
            $this.addClass('processing-ann'); 
            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                headers: {
                    'X-CSRF-Token': jQuery('meta[name="csrf-token"]').attr('content')
                },
                url: '/v1/api/postingAds',
                data:{
                    'id':jQuery('#edit_id').val(),
                    'userid' : userID,
                    'title' : title,
                    'category' : category,
                    'state' : state,
                    'city' : city,
                    'street' : street,
                    'description' : description
                },
                success: function( res )
                {
                    //ajax_success_popup( res, $this);
                    if(res.msg=='double_title'){
                        $this.removeClass('processing-ann');
                        res.msg='El título que escribiste no es válido.';
                        jQuery('#edit_title').addClass('error');
                        jQuery('#edit_title').focus();
                        ajax_success_popup( res, $this );
                        return;
                    }
                    var targetForm  = '#'+$this.data('form')+'-form-toggle';
                    var targetFormEnd  =   targetForm+'-end';
                    jQuery('#edit_id').val(res.id);
                    jQuery( targetForm ).fadeOut( "fast", function() {
                        jQuery(targetFormEnd).fadeIn("fast", function () {
                            jQuery( ".lp-blank-section" ).fadeOut();
                            $this.removeClass('processing-ann'); 
                        });
                    });
                    $this.removeClass('processing-ann');
                }, 
                error: function( err )
                {
                    $this.find('i').remove();
                }
            });
        } 
    });
    
    jQuery('#ad-announcement-btn-end').on( 'click', function (e) {
        e.preventDefault();
        var $this   =   jQuery(this),
            emailable   =   jQuery('#edit_emailable').is(":checked");
            callable=   jQuery('#edit_callable').is(":checked");
            whatsable   =   jQuery('#edit_whatsable').is(":checked");
            accept    =   jQuery('#edit_accept').is(":checked");
            agree  =   jQuery('#edit_agree').is(":checked");
        if( !accept )
        {
            jQuery('#edit_accept').parent().addClass('error');
            jQuery('#edit_accept').focus();
        }else{
            jQuery('#edit_accept').parent().removeClass('error');
        }
        if( !agree )
        {
            jQuery('#edit_agree').parent().addClass('error');
            jQuery('#edit_agree').focus();
        }else{
            jQuery('#edit_agree').parent().removeClass('error');
        }
        if( !accept || !agree )return;
        if( $this.hasClass('processing-ann') )
        {}
        else
        {
            annDropzone.processQueue();
            $this.append('<i class="fa fa-spin fa-spinner"></i>');
            $this.addClass('processing-ann'); 
            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                headers: {
                    'X-CSRF-Token': jQuery('meta[name="csrf-token"]').attr('content')
                },
                url: '/v1/api/postingAds',
                data:{
                    'id':jQuery('#edit_id').val(),
                    'emailable' : emailable,
                    'callable' : callable,
                    'whatsable' : whatsable,
                },
                success: function( res )
                {
                   var data=[];
                   data.status='success';
                   data.reload=false;
                   data.msg="Gracias por tu publicación. le enviaremos un mensaje.";
                   //ajax_success_popup( data, $this);
                   var targetForm  = '#'+$this.data('form')+'-form-toggle';
                   var targetFormEnd=targetForm+'-end';
                    jQuery( targetFormEnd ).fadeOut( "fast", function() {
                        if(!res.is_update){
                            jQuery( ".alert-ann-verification-message" ).fadeIn("slow",function(){
                                jQuery( "#announcements-table" ).fadeOut("fast",function(){});
                            });
                        }else{
                            jQuery( "#announcements-table" ).fadeIn("fast",function(){});
                        }
                    });
                    jQuery(window).scrollTop(0);
                    $this.removeClass('processing-ann');
                }, 
                error: function( err )
                {
                    $this.find('i').remove();
                }
            });
        } 
    });
    jQuery('.add-new-open-form').click(function (e) {
        e.preventDefault();
        var targetForm  =   '#'+jQuery(this).data('form')+'-form-toggle';
        jQuery( 'div.panel.with-nav-tabs.panel-default.lp-dashboard-tabs.col-md-11' ).fadeOut( "fast", function() {
            jQuery(targetForm).fadeIn("fast", function () {
                jQuery( ".lp-blank-section" ).fadeOut();
            });
        });
    });
    jQuery(document).on('click', '.cancel-ad-new-btn', function (e) {
        e.preventDefault();
        var targetForm = '#'+jQuery(this).data('cancel')+'-form-toggle';
        jQuery( targetForm ).fadeOut( "fast", function() {
            if (jQuery('body').find('div.panel.with-nav-tabs.panel-default.lp-dashboard-tabs.col-md-11')) {
                jQuery( ".lp-blank-section" ).fadeIn();
            }
            jQuery('div.panel.with-nav-tabs.panel-default.lp-dashboard-tabs.col-md-11').fadeIn();
        });
    });
    
    
    jQuery(document).on('click', '.menu-add-new', function (e) {
        jQuery('.panel.with-nav-tabs.panel-default.lp-dashboard-tabs').fadeOut("slow", function () {
            jQuery('div.tab-pane.fade.in.active.clearfix.lp-dashboard-menu-container').fadeIn("fast", function () {
                jQuery('div.panel.with-nav-tabs.panel-default.lp-dashboard-tabs.col-md-12.lp-left-panel-height.lp-left-panel-height-outer.padding-bottom0').fadeIn("fast");
            });
        });
    });
    
    jQuery(document).on('click', '.lp-view-all-btn', function (e) {
        e.preventDefault();
        if(jQuery(this).hasClass('all-with-refresh')) {
            console.log('new 5806');
            location.reload();
        } else {
            jQuery('div.panel.with-nav-tabs.panel-default.lp-dashboard-tabs.col-md-12').fadeOut("fast", function () {
                jQuery('div.tab-pane.fade.in.active.clearfix.lp-dashboard-menu-container').fadeOut("fast", function () {
                    jQuery('.panel.with-nav-tabs.panel-default.lp-dashboard-tabs').fadeIn("Slow");
                });
            });
        }    
    });

    jQuery('#kyc_upload_file').on('change',function(){
        if (jQuery(this)[0].files && jQuery(this)[0].files[0]) {
            var FR = new FileReader();
            FR.addEventListener("load", function (e) {
                jQuery("#preview_img").attr('src', e.target.result);
            });
            FR.readAsDataURL(jQuery(this)[0].files[0]);
        }
    });

    //alert('Hello, My skype is live:.cid.e607ae54919717f0  email is developer225@hotmail.com also i hope you will not say email or skype in workana because it is a violation of policy in there. thanks');
    //var dates=new Array('Oct 7, 2009', 'Nov 10, 2009', 'Jan 10, 2009', 'Oct 22, 2009', 'Jan 10, 2008', 'Oct 22, 2010');
    //console.log(dates);
    //console.log(sortDate(dates));
});
function sortDate(dates){
    var len=dates.length;
    var timezones=new Array(len);
    var res=new Array(len);
    for(var i=0;i<len-1;i++){
        timezones[i]=getDateObjectFromText(dates[i]).getTime();
        for(var j=i+1;j<len;j++){
            if(!i)timezones[j]=getDateObjectFromText(dates[j]).getTime();
            if(timezones[i]<timezones[j]){
                var t=dates[i];
                dates[i]=dates[j];
                dates[j]=t;
                t=timezones[i];
                timezones[i]=timezones[j];
                timezones[j]=t;
            }
        }
    }
    return dates;
}
function getDateObjectFromText(d){
    var months="Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(',');
    var dstr='';
    for(var j=0;j<months.length;j++){
        if(d.indexOf(months[j])>-1){
            dstr=(d.replace(months[j],j+','));
            break;
        }
    }
    var darr=dstr.split(',');
    return new Date(darr[2],darr[0],darr[1],0,0,0);
}
function uploadKYCphoto(){
    if(jQuery("#preview_img").attr('src')==''){
        alert('upload your photo');
        return;
    }
    var fd = new FormData();
    fd.append('id',jQuery("#kyc_upload_btn").data('ann'));
    fd.append('userid',jQuery("#kyc_upload_btn").data('uid'));
    fd.append('file',jQuery('#kyc_upload_file')[0].files[0]);
    jQuery.ajax({
        url: '/v1/api/uploadkyc',
        dataType: 'json',
        type:'POST',
        contentType: false,
        processData: false,
        data:fd,
        success: function( data ) {
            alert('Su fotografía se encuentra en revisión, espere nuestra respuesta de confirmación, si no le llega el correo no olvide buscar en su bandeja de correo no deseado.');
            location.href='/home';
        }
    });
}
function editStateChanged(){
    jQuery.ajax({
        url: '/v1/api/getCitiesInState',
        dataType: 'json',
        type:'POST',
        data: {
            state_id: jQuery('#edit_state').val()
        },
        success: function( data ) {
            var $el=jQuery("#edit_city");
            $el.empty();
            $el.append(jQuery("<option></option>").attr("value", 0).text('Elige Ciudad'));
            if ( data.length ) {
                for(var i=0;i<data.length;i++){
                    $el.append(jQuery("<option></option>").attr("value", data[i].id).text(data[i].name));
                }
            }

            if(jQuery('#edit_city_selected').val()>0){
                jQuery("#edit_city").val(jQuery('#edit_city_selected').val());
                jQuery("#edit_city").trigger('change');
            }
        }
    });
}
function ajax_success_popup( res, $this )
{
   if( res.status == 'success' )
   {
       if($this != ''){
           $this.find('i').removeClass('fa-spin fa-spinner').addClass('fa-check');
        }
       jQuery('.lp-notifaction-area').find('h4').text(res.msg);
       jQuery('.lp-notifaction-area').removeClass('lp-notifaction-error').addClass('lp-notifaction-success');
       jQuery('.lp-notifaction-area').addClass('active-wrap');

       if(res.reload==undefined||res.reload==null||res.reload==false){
        console.log('new 5851');    
        location.reload();
       }
       
   }
   if ( res.status == 'error' )
   {
        if($this != ''){
           $this.find('i').remove();
        }       
       jQuery('.lp-notifaction-area').find('h4').text(res.msg);
       jQuery('.lp-notifaction-area').removeClass('lp-notifaction-success').addClass('lp-notifaction-error');
       jQuery('.lp-notifaction-area').addClass('active-wrap');
   }
}
jQuery(document).on('change', '.on-off-ann', function (e) {
    e.preventDefault();
    var $this   =   jQuery(this),
        annID   =   $this.data('annid'),
        active   =  $this.is(":checked");
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/v1/api/activeAd',
        data:{
            'id' : annID,
            'active' : active
        },

        success: function( res )
        {
            
        },
        error: function( err )
        {
            $this.find('i').remove();
        }
    });
});
jQuery(document).on('click', '.ann-delete', function (e) {
    e.preventDefault();
    var $this   =   jQuery(this),
        annID   =   $this.data('annid');
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/admin/v1/api/deleteAd',
        data:{
            'id' : annID
        },

        success: function( res )
        {
            location.href='/ads';
        },
        error: function( err )
        {
            $this.find('i').remove();
        }
    });
});
function selectDiscoverImage(id){
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/v1/api/setDiscoveryImage',
        data:{
            'id' : id,
        },
        success: function( res )
        {
            jQuery('.dz-preview.dz-processing.dz-image-preview.dz-success.dz-complete .portada').fadeOut();
            jQuery('.dz-preview.dz-processing.dz-image-preview.dz-success.dz-complete #'+id).fadeIn();
        },
        error: function( err )
        {
            
        }
    });
}
jQuery(document).on('change', '#searchcategory', function(event) {
    listingSearchAction();
});
jQuery(document).on('click', '.sortbyviews a', function(event) {
    jQuery('.sortbyviews a').addClass('active');
    listingSearchAction();
});
function listingSearchAction(){
    var cat=jQuery('#searchcategory').val();
    var sort='';
    if(jQuery('.sortbyviews a').hasClass('active'))sort='views';
    location.href='/listing?cat='+jQuery('#searchcategory').val()+'&sort='+sort;
}