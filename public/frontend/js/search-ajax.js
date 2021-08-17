jQuery(document).ready(function($) {
    if(jQuery('ul.list-st-img li').hasClass('lp-listing-phone')){
        var $country = '';
        var $city = '';
        var $zip = '';
        $.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?') 
         .done (function(location){
             $country = location.country_name;
             $city = location.city;
             $zip = location.postal;
         });
         
        jQuery('ul.list-st-img li.lp-listing-phone a, .widget-social-icons li a.phone-link').on('click', function(){
            
            var $lpID = '';
            var $this = jQuery(this);
            $lpID = $this.data('lpid');
            
            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                url: ajax_search_term_object.ajaxurl,
                data: { 
                    'action': 'listingpro_phone_clicked',
                    'lp-id':$lpID,
                    'lp-country':$country,
                    'lp-city':$city,
                    'lp-zip':$zip,
                    'lpNonce' : jQuery('#lpNonce').val()
                    },
                success: function(data){
                    
                }
            });
        });
    }
    jQuery('.search-filter a').on('click',function(){ 
        jQuery('select#searchcategory').trigger('change');
    });
    /* on 11th may */
    if( (jQuery('ul.list-st-img li').hasClass('lp-user-web') || (jQuery('.widget-social-icons li').hasClass('lp-user-web') ) ) ){
        var $country = '';
        var $city = '';
        var $zip = '';
        $.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?') 
         .done (function(location){
             $country = location.country_name;
             $city = location.city;
             $zip = location.postal;
         });
         
        jQuery('ul.list-st-img li.lp-user-web a, .widget-social-icons li.lp-user-web').on('click', function(){
            
            var $lpID = '';
            var $this = jQuery(this);
            $lpID = $this.data('lpid');
            
            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                url: ajax_search_term_object.ajaxurl,
                data: { 
                    'action': 'listingpro_website_visit',
                    'lp-id':$lpID,
                    'lp-country':$country,
                    'lp-city':$city,
                    'lp-zip':$zip,
                    'lpNonce' : jQuery('#lpNonce').val()
                    },
                success: function(data){
                    
                }
            });
        });
    }
    /* end on 11th may */
    
    jQuery('input.lp-search-btn, .lp-search-bar-right .lp-search-icon').on('click', function(e){
        if( jQuery('.lp-left-filter').length!= 0 )
        {
            var parentWrap  =   jQuery(this).closest('.lp-search-btn-header');
            parentWrap.find('.icons8-search').removeClass('icons8-search');
            parentWrap.find('.lp-search-btn').css('cssText', 'background-image:url() !important; color: transparent');
            var loaderImg   =   parentWrap.find('img.searchloading');
            loaderImg.addClass('test');
            if(loaderImg.hasClass('loader-inner-header')){
                loaderImg.css({
                    'top': '15px',
                    'left': '90%',
                    'width': 'auto',
                    'height': 'auto',
                    'margin-left': '0px'
                });
            }

            loaderImg.css('display', 'block');
        }
        else
        {
            //when click search button
            jQuery(this).removeClass('icons8-search');
            jQuery(this).closest('form').submit();
            jQuery(this).next('i').removeClass('icons8-search');
            //jQuery(this).css('color', 'transparent');
            jQuery(this).css('cssText', 'background-image:url() !important; color: transparent');
            if(jQuery('img.searchloading').hasClass('loader-inner-header')){
                jQuery('img.loader-inner-header').css({
                    'top': '15px',
                    'left': '90%',
                    'width': 'auto',
                    'height': 'auto',
                    'margin-left': '0px'
                });
            }            
            jQuery('img.searchloading').css('display', 'block');
        }
    });
    
    jQuery('#skeyword-filter').keyup(function (e) {
        jQuery('form i.cross-search-q').css('display', 'block');
    })
    jQuery('form i.cross-search-q').on('click', function(){
        jQuery("form i.cross-search-q").css("display","none");
        jQuery('form .lp-suggested-search').val('');
        //jQuery("img.loadinerSearch").css("display","block");
        var qString = '';
        return;
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_search_term_object.ajaxurl,
            data: { 
                'action': 'listingpro_suggested_search', 
                'tagID': qString,
                'lpNonce' : jQuery('#lpNonce').val()
                },
            success: function(data){
                if(data){
                    jQuery("#input-dropdown ul").empty();
                    var resArray = [];
                    if(data.suggestions.cats){
                                        jQuery.each(data.suggestions.cats, function(i,v) {
                            
                                            resArray.push(v);
                                        
                                        });
                                    
                                }
                    jQuery('img.loadinerSearch').css('display','none');
                    jQuery("#input-dropdown ul").append(resArray);
                    myDropDown.css('display', 'block');
                }
            }
        });
                    
    });
    
    var inputField = jQuery('.dropdown_fields');
    var inputTagField = jQuery('#lp_s_tag');
    var inputCatField = jQuery('#lp_s_cat');
    var myDropDown = jQuery("#input-dropdown");
    var myDropDown1 = jQuery("#input-dropdown ul li");
    var myDropOption = jQuery('#input-dropdown > option');
    var html = jQuery('html');
    var select = jQuery('.dropdown_fields, #input-dropdown > option');
    var lps_tag = jQuery('.lp-s-tag');
    var lps_cat = jQuery('.lp-s-cat');

    var length = myDropOption.length;
    inputField.on('click', function(event) {
        //event.preventDefault();
        myDropDown.attr('size', length);
        myDropDown.css('display', 'block');
        if( jQuery('.lp-home-banner-contianer-inner').length )
        {
            if( jQuery('.lp-home-banner-contianer-inner').hasClass('app-view2-header-animate') )
            {
                jQuery('.listing-app-view.listing-app-view-new .app-view-header .lp-home-banner-contianer').addClass('home-banner-animated');
                jQuery('.listing-app-view.listing-app-view-new section').hide();
                jQuery('.listing-app-view.listing-app-view-new .app-view2-banner-cat-slider').hide();
            }
        }
        
    });
    
    //myDropDown1.on('click', function(event) {
        jQuery(document).on('click', '#input-dropdown ul li', function(event) {
        
            myDropDown.attr('size', 0);
            var dropValue =  jQuery(this).text();
            dropValue =  dropValue.trim();
            var tagVal =  jQuery(this).data('tagid');
            var catVal =  jQuery(this).data('catid');
            var moreVal =  jQuery(this).data('moreval');
            if(jQuery(this).hasClass('lp-wrap-title')){
                inputField.val('');
                jQuery(".lp-search-btn").prop('disabled', true);
            }else{
                inputField.val(dropValue);
            }
        
            inputTagField.val(tagVal);
            inputCatField.val(catVal);
            if( tagVal==null && catVal==null && moreVal!=null){
                inputField.val(moreVal);
            }
            jQuery("form i.cross-search-q").css("display","block");
            myDropDown.css('display', 'none');

            if( jQuery('.lp-home-banner-contianer-inner').length )
            {
                if( jQuery('.lp-home-banner-contianer-inner').hasClass('app-view2-header-animate') )
                {
                    if(jQuery('#searchlocation').length){
                        if(jQuery('#searchlocation').hasClass('select2')) {
                            jQuery('#searchlocation').select2("open");
                        } else {
                            jQuery('#searchlocation').trigger("chosen:open");
                        }
                    }

                    event.stopPropagation();
                }
            }
        
        });

    html.on('click', function(event) {
        //event.preventDefault();
        myDropDown.attr('size', 0);
         myDropDown.css('display', 'none');
    });

    select.on('click', function(event) {
        event.stopPropagation();
    });
    
    var resArray = [];
    var newResArray = [];
    var bufferedResArray = [];
    var prevQString = '?';
    
    //inputField.on('input', function(){
        
    function trimAttributes(node) {
        jQuery.each(node.attributes, function() {
            var attrName = this.name;
            var attrValue = this.value;
            // remove attribute name start with "on", possible unsafe,
            // for example: onload, onerror...
            //
            // remvoe attribute value start with "javascript:" pseudo protocol, possible unsafe,
            // for example href="javascript:alert(1)"
            if (attrName.indexOf('on') == 0 || attrValue.indexOf('javascript:') == 0) {
                jQuery(node).removeAttr(attrName);
            }
        });
    }
 
    function sanitize(html) {
           var output = jQuery($.parseHTML('<div>' + html + '</div>', null, false));
           output.find('*').each(function() {
            trimAttributes(this);
           });
           return output.html();
    }
    //inputField.bind('change paste keyup', function(){
    /* ***************************************************** */
    var timer;
    inputField.on('keyup', function(){
        clearInterval(timer);
        timer = setTimeout(function() {
            var $this = inputField;
            var qString = $this.val();
            var count = $this.val().length;
            lpsearchmode = jQuery('body').data('lpsearchmode');
            noresultMSG = $this.data('noresult');
            jQuery("#input-dropdown ul").empty();
            jQuery("#input-dropdown ul li").remove();
            prevQuery = $this.data('prev-value');
            $this.data( "prev-value", qString.length );
            return;
            //if(count>1){
            jQuery.ajax({
                type: "POST",
                    dataType: 'json',
                    url: ajax_search_term_object.ajaxurl,
                    data: { 
                        'action': 'listingpro_suggested_search', 
                        'tagID': qString,
                        'lpNonce' : jQuery('#lpNonce').val()
                        },
                beforeSend: function(){
                    jQuery("form i.cross-search-q").css("display","none");
                    jQuery("img.loadinerSearch").css("display","block");
                },
                    success: function(data){
                    console.log(data);
                            //console.log(data.suggestions);
                            /* ajax response start */
                        if(data){
                                    resArray = [];
                                if(data.suggestions.tag|| data.suggestions.tagsncats || data.suggestions.cats || data.suggestions.titles){
                                        
                                        if(data.suggestions.tag){
                                                jQuery.each(data.suggestions.tag, function(i,v) {
                                                    resArray.push(v);
                                                });
                                            
                                        }
                                        
                                        if(data.suggestions.tagsncats){
                                                jQuery.each(data.suggestions.tagsncats, function(i,v) {
                                                    resArray.push(v);
                                                });
                                        
                                        }
                                        
                                            
                                        if(data.suggestions.cats){
                                            jQuery.each(data.suggestions.cats, function(i,v) {
                                                    
                                                    resArray.push(v);
                                                
                                                });
                                                
                                            if(data.suggestions.tag==null && data.suggestions.tagsncats==null && data.suggestions.titles==null ){
                                                resArray = resArray;
                                            }
                                            else{
                                            }
                                                    
                                                
                                            
                                        }
                                        
                                        if(data.suggestions.titles){
                                            jQuery.each(data.suggestions.titles, function(i,v) {        
                                                
                                                    resArray.push(v);
                                                
                                            });
                                            
                                        }
                                    
                                }
                                else{
                                        if(data.suggestions.more){
                                            jQuery.each(data.suggestions.more, function(i,v) {
                                                resArray.push(v);
                                            });
                                        
                                    }
                                }
                                
                                prevQString = data.tagID;
                                
                                jQuery('img.loadinerSearch').css('display','none');
                                if(jQuery('form #select').val() == ''){
                                    jQuery("form i.cross-search-q").css("display","none");
                                }
                                else{
                                    jQuery("form i.cross-search-q").css("display","block");
                                }
                                
                                    //jQuery.each( resArray, function( key, value ) {

                                    myDropDown.css('display', 'none');
                                    jQuery("#input-dropdown ul").empty();
                                    
                                        jQuery("#input-dropdown ul").append(resArray);
                                    myDropDown.css('display', 'block');
                                    $this.data( "prev-value", qString.length );
                                    //});


                                }
                            /* ajax response ends */

                },
                complete: function(){
                    // Handle the complete event
                    jQuery("form i.cross-search-q").css("display","block");
                    jQuery("img.loadinerSearch").css("display","none");
                }
            });
            //}
        }, 700);
    });

    /* ******************************************************** */

    if (jQuery("#lp_search_loc").val() == '' && jQuery('#cities').val() != '') {
        jQuery("#lp_search_loc").val(jQuery('#cities').val());
    } 
                                        
});/* for version 2.0 *//* ===============================2nd================================== */
jQuery(document).on('change', '.lp_extrafields_select', function(event) {
    $this = jQuery(this);
    $selectedFields = [];
    jQuery('.lp_extrafields_select :checked').each(function(i, selectedElement) {
        keyValuePair = {};
        keyValuePair[jQuery(selectedElement).data('key')] = jQuery(selectedElement).val();
        $selectedFields.push(keyValuePair);
    });

    
    var new_design_v2            =    false;
        var new_header_filters        =    false;
        var listStyle   =   '';

       if( jQuery('#list-grid-view-v2').length != 0 )
       {
           if( jQuery('#list-grid-view-v2').hasClass( 'header-style-v2' ) )
           {
               var new_header_filters    =    true;
            }
           if( jQuery('#list-grid-view-v2').hasClass('list_view_v2') || jQuery('#list-grid-view-v2').hasClass('grid_view_v2') )
           {
                listStyle           =   get_list_style();
               new_design_v2    =    true;
            }
       }

        if( new_header_filters == true )
        {
        get_filters_before_send();
        var averageRate         =   get_filter_RRV( '.filter-in-header .rated-filter.header-filter-wrap' ),
               mostRewvied         =   get_filter_RRV( '.filter-in-header .reviewed-filter.header-filter-wrap' ),
               mostViewed          =   get_filter_RRV( '.filter-in-header .viewed-filter.header-filter-wrap' ),
            inexpensive         =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-one' ),
            moderate            =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-two' ),
            pricey              =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-three' ),
            ultra               =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-four' ),
            listing_openTime    =   get_open_now_val( '#filter-in-header .open-now-filter' ),           
            listStyle           =   get_list_style(),
            skeyword            =   jQuery('input#skeyword-filter').val();
            if( jQuery('#searchlocation').length != 0 )
                {
                seracLoc            =   jQuery("#searchlocation").val();
                }else if( jQuery('#lp_search_loc').length != 0 ){
                seracLoc            =   jQuery("#lp_search_loc").val();
                }

    }
    else
    {
    
        var docHeight = jQuery(document).height();
        jQuery("body").prepend('<div id="full-overlay"></div>');
        jQuery('#full-overlay').css('height', docHeight + 'px');
        event.preventDefault();
        jQuery(this).toggleClass('active');
        jQuery('.lp-filter-pagination').hide();
        jQuery('#content-grids').html(' ');
        jQuery('.lp-filter-pagination-ajx').remove();
        //jQuery('#content-grids').addClass('content-loading');
        add_listing_skeletons();
        jQuery('.map-view-list-container').remove();
        var inexpensive = '';
        moderate = '';
        pricey = '';
        ultra = '';
        averageRate = '';
        mostRewvied = '';
        listing_openTime = '';
        mostViewed = '';
        inexpensive = jQuery('.currency-signs #one').find('.active').data('price');
        moderate = jQuery('.currency-signs #two').find('.active').data('price');
        pricey = jQuery('.currency-signs #three').find('.active').data('price');
        ultra = jQuery('.currency-signs #four').find('.active').data('price');
        if (jQuery('.search-filter-attr input[type="checkbox"]#listingRate').hasClass('active')) {
            averageRate = jQuery('.search-filter-attr input[type="checkbox"]#listingReviewed').val();
                                    }
        if (jQuery('.search-filter-attr input[type="checkbox"]#listingRate').hasClass('active')) {
            mostRewvied = jQuery('.search-filter-attr input[type="checkbox"]#listingReviewed').val();
                                }
        if (jQuery('.search-filter-attr input[type="checkbox"]#mostviewed').hasClass('active')) {
            mostviewed = jQuery('.search-filter-attr input[type="checkbox"]#mostviewed').val();
            }
        if (jQuery('.search-filter-attr input[type="checkbox"].listing_openTime').hasClass('active')) {
            listing_openTime = jQuery('.search-filter-attr input[type="checkbox"].listing_openTime').val();
                    }
        if (jQuery(this).hasClass('active')) {
            jQuery(this).parent('label').children('.app-filter-loader').addClass('app-filter-loader-active').show().html('<i class="fa fa-spinner" aria-hidden="true"></i>');
                }else{
            jQuery(this).parent('label').children('.app-filter-loader').hide().html('<i class="fa fa-spinner" aria-hidden="true"></i>');
                    }
    }
    var tags_name = [];
    tags_name = jQuery('.tags-area input[type=checkbox]:checked').map(function() {
        return jQuery(this).val();
    }).get();
    if (tags_name.length > 0) {} else{
            if (jQuery('#check_featuretax').length > 0) {
                tags_name.push(jQuery('#check_featuretax').val());
            }
        }
    skeyword = jQuery('input#lp_current_query').val();
    
    
    if( listStyle == null && jQuery('#list-grid-view-v2').length != 0 )
    {
        listStyle   =   jQuery('#list-grid-view-v2').data('layout-class');
    }
    
    seracLoc = jQuery("#lp_search_loc").val();
    if(check_if_loc_disabled_fornearme()){
        seracLoc = '';
    }
    
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajax_search_term_object.ajaxurl,
        data: {
            'action': 'ajax_search_tags',
            'formfields': $selectedFields,
            'inexpensive': inexpensive,
            'moderate': moderate,
            'pricey': pricey,
            'ultra': ultra,
            'averageRate': averageRate,
            'mostRewvied': mostRewvied,
            'mostviewed': mostViewed,
            'listing_openTime': listing_openTime,
            'lpstag': jQuery("#lpstag").val(),
            'tag_name': tags_name,
            'cat_id': jQuery("#searchform select#searchcategory").val(),
            'loc_id': seracLoc,
            'list_style': listStyle,
            'skeyword': skeyword,
            'lpNonce' : jQuery('#lpNonce').val()
        },
        success: function(data) {
            jQuery('.app-filter-loader-active').html('<i class="fa fa-check-circle" aria-hidden="true"></i>');
            jQuery('#full-overlay').remove();
            if (data) {
                listing_update(data, new_design_v2, listStyle);
                lp_append_distance_div();
                remove_listing_skeletons();
                if (jQuery('.grid').hasClass('active')) {
                    jQuery('.grid').trigger('click');
                }
                else if(jQuery('.list').hasClass('active')){
                    jQuery('.list').trigger('click');
                }
            }
}
    });
});/* end for version 2.0 */
/* end js for search by zaheer */



jQuery(document).ready(function($){
    
    jQuery(".lp-search-cats-filter-dropdown").on('click', function(){
        jQuery('.lp-tooltip-div').css({
            'opacity': '0',
            'visibility': 'hidden',
            'top': 'auto',
            'z-index': '0'
        });
    });


    jQuery("select#searchcategory").change(function() {
        $thiscat = jQuery(this);

        return;
        jQuery('.tags-area').remove();
        jQuery('.lp-filter-pagination-ajx').remove();
        jQuery(".chosen-select").val('').trigger('chosen:updated');
        jQuery("#searchtags").prop('disabled', true).trigger('chosen:updated');
        jQuery(".outer_all_page_overflow").html('');
        jQuery(".lp-head-withfilter4").html('');
        jQuery(".lp_extrafields_select").html('');

        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_search_term_object.ajaxurl,
            data: {
                'action': 'ajax_search_term',
                'term_id': $thiscat.val(),
                'lpNonce' : jQuery('#lpNonce').val()
            },
            success: function(data){
                if(data){
                    jQuery(".search-row .form-inline").after( data.html );
                    jQuery(".header-more-filters.form-inline").prepend( data.html );
                    jQuery(".lp-features-filter").css( 'opacity','1' );
                    //jQuery(".header-more-filters .lp-features-filter").html( data.htmlfilter );
                    
                    jQuery(".lp-head-withfilter4").html(data.htmlfilter);
                    jQuery(".outer_all_page_overflow").html(data.htmlfilter);
                    
                    jQuery(".lp-additional-appview-filter-new").html(data.htmlfilter);
                    //alert(data.htmlfilter);
                    //jQuery(".lp-features-filter").eq(1).html(data.htmlfilter);
                    //jQuery(".header-container.4 .lp-features-filter").eq(1).html('1');
                    //jQuery(".header-container.4 .lp-features-filter").eq(2).html('3');
                    //jQuery(".lp-features-filter").html(data.htmlfilter);

                }
            }
        });
    });


    jQuery(".header-container.4 select#searchcategory").change(function() {
        var $this       =   jQuery(this),
            thisVal     =   $this.val(),
            catsWrap    =   jQuery('.lp-child-cats-tax'),
            catsPos     =   jQuery('.lp-section.listing-style4').attr('data-childcat'),
            catsShow    =   jQuery('.lp-section.listing-style4').attr('data-childcatshow');

        catsWrap.html('');
        catsWrap.css('height', '0px');
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_search_term_object.ajaxurl,
            data: {
                'action': 'ajax_search_child_cats',
                'parent_id': thisVal,
                'lpNonce' : jQuery('#lpNonce').val()
            },
            success: function(data){
                if( data.term_name == null )
                {
                    data.term_name  =   'All Categories';
                }
                jQuery('.lp-header-search.archive-search h4.lp-title').find('em').text(data.term_name);
                if( data.status == 'found' && catsShow != 'hide' )
                {
                    catsWrap.css('height', '132px');
                    if( jQuery('.lp-child-cats-tax').length > 0 )
                    {
                        catsWrap.html(data.child_cats);
                    }
                    else
                    {
                        if(catsPos == 'fullwidth') {
                            jQuery('.listing-simple').closest('.col-md-8').before('<div class="lp-child-cats-tax">'+ data.child_cats +'</div>');
                        } else {
                            jQuery('.listing-simple').before('<div class="lp-child-cats-tax">'+ data.child_cats +'</div>');
                        }

                    }

                    var chilCatsLoc =   jQuery( '.lp-child-cats-tax-slider' ).data('child-loc'),
                        childCatNum =   3;

                    jQuery('.lp-child-cats-tax').addClass('style-'+chilCatsLoc);
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
            }
        });

    });

    jQuery("select#searchcategory, #filter-in-header #category-select, .lp-header-search-form #category-select, .lp-header-search-form #searchlocation").change(function() {
        if(jQuery('body.home').length ==0 )
        {
            $selectedFields = [];
            jQuery('.lp_extrafields_select :checked').each(function(i, selectedElement) {
                keyValuePair = {};
                keyValuePair[jQuery(selectedElement).data('key')] = jQuery(selectedElement).val();
                $selectedFields.push(keyValuePair);
            });
            var listStyle;
            var $thiscat = jQuery('select#searchcategory');
            var new_design_v2            =    false;
            var new_header_filters        =    false;
            var listStyle   =   '';
            var inexpensive='';
                moderate = '';
                pricey = '';
                ultra = '';
                averageRate = '';
                mostRewvied = '';
                listing_openTime = '';
                mostViewed = '';
                seracLoc    =   '';

            if( jQuery('#list-grid-view-v2').length != 0 )
            {
                if( jQuery('#list-grid-view-v2').hasClass( 'header-style-v2' ) )
                {
                    var new_header_filters    =    true;
                }
                if( jQuery('#list-grid-view-v2').hasClass('list_view_v2') || jQuery('#list-grid-view-v2').hasClass('grid_view_v2') )
                {
                    listStyle           =   get_list_style();
                    new_design_v2    =    true;
                }
            }

            if( new_header_filters == true )
            {
                get_filters_before_send();
                var averageRate         =   get_filter_RRV( '#filter-in-header .rated-filter.header-filter-wrap' ),
                    mostRewvied         =   get_filter_RRV( '#filter-in-header .reviewed-filter.header-filter-wrap' ),
                    mostViewed          =   get_filter_RRV( '#filter-in-header .viewed-filter.header-filter-wrap' ),
                    inexpensive         =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-one' ),
                    moderate            =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-two' ),
                    pricey              =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-three' ),
                    ultra               =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-four' ),
                    listing_openTime    =   get_open_now_val( '#filter-in-header .open-now-filter' ),
                    listStyle           =   get_list_style(),
                    skeyword            =   jQuery('input#skeyword-filter').val();
                if( jQuery("#searchlocation").length != 0 ){
                    seracLoc =  jQuery("#searchlocation").val();
                }else if( jQuery('#lp_search_loc').length != 0 ){
                    seracLoc =  jQuery("#lp_search_loc").val();
                }

            }
            else
            {
                var docHeight = jQuery( document ).height();
                jQuery( "body" ).prepend( '<div id="full-overlay"></div>' );
                jQuery('#full-overlay').css('height',docHeight+'px');
                jQuery('#content-grids').html(' ');
                jQuery('.lp-filter-pagination-ajx').remove();
                //jQuery('#content-grids').addClass('content-loading');
                add_listing_skeletons();
                jQuery('.map-view-list-container').remove();
                jQuery('.lp-filter-pagination').hide();               


                inexpensive = jQuery('.currency-signs #one').find('.active').data('price');
                moderate = jQuery('.currency-signs #two').find('.active').data('price');
                pricey = jQuery('.currency-signs #three').find('.active').data('price');
                ultra = jQuery('.currency-signs #four').find('.active').data('price');

                mostViewed = jQuery('.search-filters li#mostviewed').find('.active').data('value');
                averageRate = jQuery('.search-filters li#listingRate').find('.active').data('value');
                mostRewvied = jQuery('.search-filters li#listingReviewed').find('.active').data('value');
                listing_openTime = jQuery('.search-filters li.listing_openTime').find('.active').data('time');
                seracLoc    =    jQuery("#lp_search_loc").val();
                skeyword = jQuery('input#lp_current_query').val();


            }
            var tags_name = [];
            tags_name = jQuery('.tags-area input[type=checkbox]:checked').map(function(){
                return jQuery(this).val();
            }).get();

            if(tags_name.length > 0){
            }else{
                if (jQuery('#check_featuretax').length > 0) {
                    tags_name.push(jQuery('#check_featuretax').val());
                }
            }


            var clatval = jQuery('#searchform input[name=clat]').val();
            var clongval = jQuery('#searchform input[name=clong]').val();

            if(clatval && clongval){
            }else{
                clatval =  jQuery("#pac-input").attr( 'data-lat' );
                clongval = jQuery("#pac-input").attr( 'data-lng' );
            }

            if(check_if_loc_disabled_fornearme()){
                seracLoc = '';
            }

            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                url: ajax_search_term_object.ajaxurl,
                data: {
                    'action': 'ajax_search_tags',
                    'formfields': $selectedFields,
                    'lpstag': jQuery("#lpstag").val(),
                    'cat_id': $thiscat.val(),
                    'loc_id': seracLoc,
                    'inexpensive':inexpensive,
                    'moderate':moderate,
                    'pricey':pricey,
                    'ultra':ultra,
                    'averageRate':averageRate,
                    'mostRewvied':mostRewvied,
                    'mostviewed':mostViewed,
                    'listing_openTime':listing_openTime,
                    'tag_name':tags_name,
                    'list_style': listStyle,
                    'skeyword': skeyword,
                    'clat': clatval,
                    'clong': clongval,
                    'my_bounds_ne_lat'  : jQuery("#pac-input").attr( 'data-ne-lat' ),
                    'my_bounds_ne_lng'  : jQuery("#pac-input").attr( 'data-ne-lng' ),
                    'my_bounds_sw_lat'  : jQuery("#pac-input").attr( 'data-sw-lat' ),
                    'my_bounds_sw_lng'  : jQuery("#pac-input").attr( 'data-sw-lng' ),
                    'data_zoom'     : jQuery( '#pac-input' ).attr( 'data-zoom'),
                    'distance_range'    : jQuery("#distance_range").val(),
                    'lpNonce' : jQuery('#lpNonce').val()
                },
                success: function(data){
                    jQuery('#full-overlay').remove();
                    if(data){
                        listing_update(data, new_design_v2, listStyle);
                        lp_append_distance_div();
                        remove_listing_skeletons();
                        if (jQuery('.grid').hasClass('active')) {
                            jQuery('.grid').trigger('click');
                        }
                        else if(jQuery('.list').hasClass('active')){
                            jQuery('.list').trigger('click');
                        }
                    }
                }
            });
        }
    });
    
    
    
    
    
    
    /* ========================== auto location by google filter by z======================== */
    jQuery(document).on('click','body.search .city-autocomplete .help, body.archive .city-autocomplete .help', function() {

        $selectedFields = [];
        jQuery('.lp_extrafields_select :checked').each(function(i, selectedElement) {
            keyValuePair = {};
            keyValuePair[jQuery(selectedElement).data('key')] = jQuery(selectedElement).val();
            $selectedFields.push(keyValuePair);
        });
        var $thiscat = jQuery('select#searchcategory');
        var new_design_v2            =    false;
        var new_header_filters        =    false;
        var listStyle   =   '';

       if( jQuery('#list-grid-view-v2').length != 0 )
       {
           if( jQuery('#list-grid-view-v2').hasClass( 'header-style-v2' ) )
           {
               var new_header_filters    =    true;
            }
           if( jQuery('#list-grid-view-v2').hasClass('list_view_v2') || jQuery('#list-grid-view-v2').hasClass('grid_view_v2') )
           {
                listStyle           =   get_list_style();
               new_design_v2    =    true;
            }
       }

        if( new_header_filters == true )
        {
            get_filters_before_send();
            var averageRate         =   get_filter_RRV( '#filter-in-header .rated-filter.header-filter-wrap' ),
                mostRewvied         =   get_filter_RRV( '#filter-in-header .reviewed-filter.header-filter-wrap' ),
                mostViewed          =   get_filter_RRV( '#filter-in-header .viewed-filter.header-filter-wrap' ),
                inexpensive         =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-one' ),
                moderate            =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-two' ),
                pricey              =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-three' ),
                ultra               =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-four' ),
                listing_openTime    =   get_open_now_val( '#filter-in-header .open-now-filter' ),               
                listStyle           =   get_list_style(),
                skeyword            =   jQuery('input#skeyword-filter').val();
                
                if( jQuery('#searchlocation').length != 0 )
                {
                seracLoc            =   jQuery("#searchlocation").val();
                }else if( jQuery('#lp_search_loc').length != 0 ){
                seracLoc            =   jQuery("#lp_search_loc").val();
                }

        }
        else
        {
        var docHeight = jQuery( document ).height();
        jQuery( "body" ).prepend( '<div id="full-overlay"></div>' );
        jQuery('#full-overlay').css('height',docHeight+'px');
        jQuery('#content-grids').html(' ');
        jQuery('.lp-filter-pagination-ajx').remove();
        //jQuery('#content-grids').addClass('content-loading');
            add_listing_skeletons();
        jQuery('.map-view-list-container').remove();
        jQuery('.lp-filter-pagination').hide();
        
        var inexpensive='';
        moderate = '';
        pricey = '';
        ultra = '';
        averageRate = '';
        mostRewvied = '';
        listing_openTime = '';
        mostViewed = '';
        seracLoc    =   '';
        

        inexpensive = jQuery('.currency-signs #one').find('.active').data('price');
        moderate = jQuery('.currency-signs #two').find('.active').data('price');
        pricey = jQuery('.currency-signs #three').find('.active').data('price');
        ultra = jQuery('.currency-signs #four').find('.active').data('price');
        
        mostViewed = jQuery('.search-filters li#mostviewed').find('.active').data('value');
        averageRate = jQuery('.search-filters li#listingRate').find('.active').data('value');
        mostRewvied = jQuery('.search-filters li#listingReviewed').find('.active').data('value');
        listing_openTime = jQuery('.search-filters li.listing_openTime').find('.active').data('time');
        seracLoc    =    jQuery("#lp_search_loc").val();
            skeyword = jQuery('input#lp_current_query').val();
            

        }
        var tags_name = [];
        tags_name = jQuery('.tags-area input[type=checkbox]:checked').map(function(){
          return jQuery(this).val();
        }).get();
        
        if(tags_name.length > 0){
        }else{
            if (jQuery('#check_featuretax').length > 0) {
                tags_name.push(jQuery('#check_featuretax').val());
            }
        }

        
        var clatval = jQuery('#searchform input[name=clat]').val();
        var clongval = jQuery('#searchform input[name=clong]').val();
        
        if(clatval && clongval){
        }else{
            clatval =  jQuery("#pac-input").attr( 'data-lat' );
            clongval = jQuery("#pac-input").attr( 'data-lng' );
        }
        
        if(check_if_loc_disabled_fornearme()){
            seracLoc = '';
        }
        
            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                url: ajax_search_term_object.ajaxurl,
                data: { 
                    'action': 'ajax_search_tags',
                    'formfields': $selectedFields,                  
                    'lpstag': jQuery("#lpstag").val(), 
                    'cat_id': $thiscat.val(),
                    'loc_id': seracLoc,
                    'inexpensive':inexpensive,
                    'moderate':moderate,
                    'pricey':pricey,
                    'ultra':ultra,
                    'averageRate':averageRate,
                    'mostRewvied':mostRewvied,
                    'mostviewed':mostViewed,
                    'listing_openTime':listing_openTime,
                    'tag_name':tags_name,
                    'list_style': listStyle,
                    'skeyword': skeyword,
                    'clat': clatval,
                    'clong': clongval,
                    'my_bounds_ne_lat'  : jQuery("#pac-input").attr( 'data-ne-lat' ),
                    'my_bounds_ne_lng'  : jQuery("#pac-input").attr( 'data-ne-lng' ),
                    'my_bounds_sw_lat'  : jQuery("#pac-input").attr( 'data-sw-lat' ),
                    'my_bounds_sw_lng'  : jQuery("#pac-input").attr( 'data-sw-lng' ),
                    'data_zoom'     : jQuery( '#pac-input' ).attr( 'data-zoom'),
                    'distance_range'    : jQuery("#distance_range").val(),
                    'lpNonce' : jQuery('#lpNonce').val()
                    },
                success: function(data){
                    jQuery('#full-overlay').remove();
                    if(data){
                        listing_update(data, new_design_v2, listStyle);
                        lp_append_distance_div();
                        remove_listing_skeletons();
                        if (jQuery('.grid').hasClass('active')) {
                            jQuery('.grid').trigger('click');
                        }
                        else if(jQuery('.list').hasClass('active')){
                            jQuery('.list').trigger('click');
                        }
                    }
                }
            });
    });
    
    
    
    
    
    
    

    jQuery(document).on('change','.tags-area input[type=checkbox]',function(e){
        
        $selectedFields = [];
        jQuery('.lp_extrafields_select :checked').each(function(i, selectedElement) {
            keyValuePair = {};
            keyValuePair[jQuery(selectedElement).data('key')] = jQuery(selectedElement).val();
            $selectedFields.push(keyValuePair);
        });
        var skeyword    =    '';
        var new_design_v2            =    false;
        var new_header_filters        =    false;
        var listStyle   =   '';

       if( jQuery('#list-grid-view-v2').length != 0 )
       {
           if( jQuery('#list-grid-view-v2').hasClass( 'header-style-v2' ) )
           {
               var new_header_filters    =    true;
            }
           if( jQuery('#list-grid-view-v2').hasClass('list_view_v2') || jQuery('#list-grid-view-v2').hasClass('grid_view_v2') )
           {
                listStyle           =   get_list_style();
               new_design_v2    =    true;
            }
       }

        if( new_header_filters == true )
        {
            get_filters_before_send();
            var averageRate         =   get_filter_RRV( '#filter-in-header .rated-filter.header-filter-wrap' ),
                mostRewvied         =   get_filter_RRV( '#filter-in-header .reviewed-filter.header-filter-wrap' ),
                mostViewed          =   get_filter_RRV( '#filter-in-header .viewed-filter.header-filter-wrap' ),
                inexpensive         =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-one' ),
                moderate            =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-two' ),
                pricey              =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-three' ),
                ultra               =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-four' ),
                listing_openTime    =   get_open_now_val( '#filter-in-header .open-now-filter' ),
                listStyle           =   get_list_style();
                if( jQuery('#searchlocation').length != 0 )
                {
                seracLoc            =   jQuery("#searchlocation").val();
                }else if( jQuery('#lp_search_loc').length != 0 ){
                seracLoc            =   jQuery("#lp_search_loc").val();
                }
        }else {
        var docHeight = jQuery( document ).height();
        jQuery( "body" ).prepend( '<div id="full-overlay"></div>' );
        jQuery('#full-overlay').css('height',docHeight+'px');
        var tags_name = [];
        tags_name = jQuery('.tags-area input[type=checkbox]:checked').map(function(){
          return jQuery(this).val();
        }).get();
        
        if(tags_name.length > 0){
        }else{
            if (jQuery('#check_featuretax').length > 0) {
                tags_name.push(jQuery('#check_featuretax').val());
            }
        }
        
        jQuery('.lp-filter-pagination').hide();
        
        
        jQuery('#content-grids').html(' ');
        jQuery('.lp-filter-pagination-ajx').remove();
        //jQuery('#content-grids').addClass('content-loading');
        add_listing_skeletons();
        jQuery('.map-view-list-container').remove();
        
        var inexpensive='';
        moderate = '';
        pricey = '';
        ultra = '';
        averageRate = '';
        mostRewvied = '';
        listing_openTime = '';
        mostViewed = '';
        
        inexpensive = jQuery('.currency-signs #one').find('.active').data('price');
        moderate = jQuery('.currency-signs #two').find('.active').data('price');
        pricey = jQuery('.currency-signs #three').find('.active').data('price');
        ultra = jQuery('.currency-signs #four').find('.active').data('price');
        
        mostViewed = jQuery('.search-filters li#mostviewed').find('.active').data('value');
        averageRate = jQuery('.search-filters li#listingRate').find('.active').data('value');
        mostRewvied = jQuery('.search-filters li#listingReviewed').find('.active').data('value');
        listing_openTime = jQuery('.search-filters li.listing_openTime').find('.active').data('time');
        
        skeyword = jQuery('input#lp_current_query').val();
        seracLoc    = jQuery("#lp_search_loc").val();
        }
        var clatval = jQuery('#searchform input[name=clat]').val();
        var clongval = jQuery('#searchform input[name=clong]').val();
        
        if(clatval && clongval){
        }else{
            clatval =  jQuery("#pac-input").attr( 'data-lat' );
            clongval = jQuery("#pac-input").attr( 'data-lng' );
        }
        var tags_name = [];
        tags_name = jQuery('.tags-area input[type=checkbox]:checked').map(function(){
            return jQuery(this).val();
        }).get();
        
        if(check_if_loc_disabled_fornearme()){
            seracLoc = '';
        }
            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                url: ajax_search_term_object.ajaxurl,
                data: { 
                    'action': 'ajax_search_tags',
                    'formfields': $selectedFields,                  
                    'lpstag': jQuery("#lpstag").val(), 
                    'cat_id': jQuery("#searchform select#searchcategory").val(),
                    'loc_id': seracLoc,
                    'inexpensive':inexpensive,
                    'moderate':moderate,
                    'pricey':pricey,
                    'ultra':ultra,
                    'averageRate':averageRate,
                    'mostRewvied':mostRewvied,
                    'mostviewed':mostViewed,
                    'listing_openTime':listing_openTime,                    
                    'tag_name':tags_name,                   
                    'list_style': listStyle, 
                    'skeyword': skeyword, 
                    'clat': clatval, 
                    'clong': clongval,
                    'my_bounds_ne_lat'  : jQuery("#pac-input").attr( 'data-ne-lat' ),
                    'my_bounds_ne_lng'  : jQuery("#pac-input").attr( 'data-ne-lng' ),
                    'my_bounds_sw_lat'  : jQuery("#pac-input").attr( 'data-sw-lat' ),
                    'my_bounds_sw_lng'  : jQuery("#pac-input").attr( 'data-sw-lng' ),
                    'data_zoom'     : jQuery( '#pac-input' ).attr( 'data-zoom'),
                    'distance_range'    : jQuery("#distance_range").val(),
                    'lpNonce' : jQuery('#lpNonce').val()
                    },
                success: function(data){
                    jQuery('#full-overlay').remove();
                    if(data){
                        listing_update(data, new_design_v2, listStyle);
                        lp_append_distance_div();
                        remove_listing_skeletons();
                        if (jQuery('.grid').hasClass('active')) {
                            jQuery('.grid').trigger('click');
                        }
                        else if(jQuery('.list').hasClass('active')){
                            jQuery('.list').trigger('click');
                        }
                    }
                }
            });
            e.preventDefault();
    });


    /* =========================================================== */
    jQuery(".sortbyfilter a,ul.priceRangeFilter li a,.listing_openTime a, .keyword-ajax,li.lp-search-best-matches").on('click', function(event) {
        event.preventDefault();
        
        
        var $this = jQuery(this);
        var new_design_v2            =    false;
        var new_header_filters        =    false;
        var listStyle   =   '';

       if( jQuery('#list-grid-view-v2').length != 0 )
       {
           if( jQuery('#list-grid-view-v2').hasClass( 'header-style-v2' ) )
           {
               var new_header_filters    =    true;
            }
           if( jQuery('#list-grid-view-v2').hasClass('list_view_v2') || jQuery('#list-grid-view-v2').hasClass('grid_view_v2') )
           {
                listStyle           =   get_list_style();
               new_design_v2    =    true;
            }
       }

        if( new_header_filters == true )
        {
            get_filters_before_send();
            var coupons             =   get_filter_RRV( '.filter-in-header .coupons-filter.header-filter-wrap' ),
                listStyle           =   get_list_style(),
                skeyword            =   jQuery('input#skeyword-filter').val();
                if( jQuery('#searchlocation').length != 0 )
                {
                seracLoc            =   jQuery("#searchlocation").val();
                }else if( jQuery('#lp_search_loc').length != 0 ){
                seracLoc            =   jQuery("#lp_search_loc").val();
                }

        }
        else
        {

        var docHeight = jQuery( document ).height();
        jQuery( "body" ).prepend( '<div id="full-overlay"></div>' );
        jQuery('#full-overlay').css('height',docHeight+'px');
        event.preventDefault();
        jQuery('.lp-filter-pagination').hide();
        jQuery('.lp-filter-pagination-ajx').remove();
        jQuery('#content-grids').html(' ');
        //jQuery('#content-grids').addClass('content-loading');
        jQuery('.map-view-list-container').remove();
        add_listing_skeletons();
    
            
            skeyword = jQuery('input#lp_current_query').val();
            seracLoc =  jQuery("#lp_search_loc").val();
        }

        var tags_name = [];
        tags_name = jQuery('.tags-area input[type=checkbox]:checked').map(function(){
          return jQuery(this).val();
        }).get();
        
        if(tags_name.length > 0){
        }else{
            if (jQuery('#check_featuretax').length > 0) {
                tags_name.push(jQuery('#check_featuretax').val());
            }
        }
        

        var clatval = jQuery('#searchform input[name=clat]').val();
        var clongval = jQuery('#searchform input[name=clong]').val();
        
        if(clatval && clongval){
        }else{
            clatval =  jQuery("#pac-input").attr( 'data-lat' );
            clongval = jQuery("#pac-input").attr( 'data-lng' );
        }
        
        if(check_if_loc_disabled_fornearme()){
            seracLoc = '';
        }
        
            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                url: ajax_search_term_object.ajaxurl,
                data: { 
                    'action': 'ajax_search_tags',
                    'formfields': get_extra_filter(),
                    'inexpensive':get_filter_RRV2(this,'inexpensive'),
                    'moderate':get_filter_RRV2(this,'moderate'),
                    'pricey':get_filter_RRV2(this,'pricey'),
                    'ultra':get_filter_RRV2(this,'ultra_high_end'),
                    'averageRate':get_filter_RRV2(this,'listing_rate'),
                    'mostRewvied':get_filter_RRV2(this,'listing_reviewed'),
                    'coupons':coupons,
                    'mostviewed':get_filter_RRV2(this,'mostviewed'),
                    'listing_openTime':get_filter_RRV2(this,'OpenClose'),
                    'lpstag': jQuery("#lpstag").val(),
                    'tag_name':tags_name,
                    'cat_id': jQuery("#searchform select#searchcategory").val(), 
                    'loc_id': seracLoc,
                    'list_style': listStyle, 
                    'skeyword': skeyword, 
                    'clat': clatval, 
                    'clong': clongval,
                    'my_bounds_ne_lat'  : jQuery("#pac-input").attr( 'data-ne-lat' ),
                    'my_bounds_ne_lng'  : jQuery("#pac-input").attr( 'data-ne-lng' ),
                    'my_bounds_sw_lat'  : jQuery("#pac-input").attr( 'data-sw-lat' ),
                    'my_bounds_sw_lng'  : jQuery("#pac-input").attr( 'data-sw-lng' ),
                    'data_zoom'     : jQuery( '#pac-input' ).attr( 'data-zoom'),
                    'distance_range'    : jQuery("#distance_range").val(),
                    'lpNonce' : jQuery('#lpNonce').val()
                    },
                success: function(data) {
                    jQuery('#full-overlay').remove();
                    if(data){

                        listing_update(data, new_design_v2, listStyle);
                        lp_append_distance_div();
                        remove_listing_skeletons();
                        if (jQuery('.grid').hasClass('active')) {
                            jQuery('.grid').trigger('click');
                        }
                        else if(jQuery('.list').hasClass('active')){
                            jQuery('.list').trigger('click');
                        }
                    }
                  } 
            });
    });
    
    
    function get_extra_filter()
    {
        $selectedFields = [];
        jQuery('.lp_extrafields_select :checked').each(function(i, selectedElement) {
            keyValuePair = {};
            keyValuePair[jQuery(selectedElement).data('key')] = jQuery(selectedElement).val();
            $selectedFields.push(keyValuePair);
        });
        return $selectedFields;
    }
    
    
    function get_filter_RRV2(selecter,SortType)
    {
        activeVal = '';
        /* Best match filter */
         var attrBest = jQuery(selecter).attr('data-best');
        if (typeof attrBest !== typeof undefined && attrBest !== false) {
            if('OpenClose' == SortType ){       
               jQuery('.listing_openTime').find('a').toggleClass('active');                                
                if(jQuery('.listing_openTime a').hasClass("active")){
                    jQuery('.listing_openTime a').attr('data-time', 'open');
                    listing_openTime = 'open';

                }
                else{
                    jQuery('.listing_openTime a').attr('data-time', 'close');
                    listing_openTime = 'close';
                }
            }
            if('listing_rate' == SortType){
                jQuery(selecter).find('a').toggleClass('active');  
                var bestMatch = jQuery(selecter).find('a');
                if(bestMatch.hasClass('active')){
                    jQuery('li.sortbyfilter').find('a').removeClass('active');
                    jQuery('li#listingRate').find('a').addClass('active');
                }else{
                    jQuery('li#listingRate').find('a').removeClass('active');
                }
                
            }
        }
        
        /* SOrting filter */
        var attrSort = jQuery(selecter).attr('data-value');       
        if (typeof attrSort !== typeof undefined && attrSort !== false) {
            if ('listing_rate' == SortType) {
                jQuery('li.sortbyfilter').find('a').removeClass('active');
                jQuery(selecter).toggleClass('active');
            }
        }
        var activeSortVal   =   jQuery('li.sortbyfilter').find('.active').data('value');
        if(activeSortVal == SortType){
           activeVal = activeSortVal;
        }
        
        /* Pricing range filter */
         var attrPrice = jQuery(selecter).attr('data-price');
        if (typeof attrPrice !== typeof undefined && attrPrice !== false) {
            if ('inexpensive' == SortType ) {
                jQuery(selecter).toggleClass('active');
            }
        }
        if ('inexpensive' == SortType || 'moderate' == SortType || 'pricey' == SortType || 'ultra_high_end' == SortType ) {
            inexpensive = jQuery('ul.priceRangeFilter #one').find('.active').data('price');
            moderate = jQuery('ul.priceRangeFilter #two').find('.active').data('price');
            pricey = jQuery('ul.priceRangeFilter #three').find('.active').data('price');
            ultra = jQuery('ul.priceRangeFilter #four').find('.active').data('price');
            if(inexpensive == SortType){
               activeVal = inexpensive;
            }else if(moderate == SortType){
               activeVal = moderate;      
            }else if(pricey == SortType){
               activeVal = pricey;      
            }else if(ultra == SortType){
               activeVal = ultra;      
            }
        }
        /* Open CLose filter */
        listing_openTime = jQuery('.listing_openTime').find('.active').data('time');
         var attrtime = jQuery(selecter).attr('data-time');
        if (typeof attrtime !== typeof undefined && attrtime !== false && 'OpenClose' == SortType) {
            jQuery(selecter).toggleClass('active');           
            if(jQuery(selecter).hasClass("active")){
                jQuery(selecter).parent('label').children('.app-filter-loader').addClass('app-filter-loader-active').show().html('<i class="fa fa-spinner" aria-hidden="true"></i>');
                jQuery(selecter).attr('data-time', 'open');
                listing_openTime = 'open';

            }
            else{
                jQuery(selecter).parent('label').children('.app-filter-loader').hide().html('<i class="fa fa-spinner" aria-hidden="true"></i>');
                jQuery(selecter).attr('data-time', 'close');
                listing_openTime = 'close';
            }
        }
        if('OpenClose' == SortType){
           activeVal = listing_openTime;
        }      

        return  activeVal;
        
    }
    
    
    
    /* ===============================for best match by  z============================ */
    /* ===============================for best match by  z============================ */
    jQuery("#filter-in-header .best-match-filter").on('click', function(event) {
        var $this = jQuery( this );
       $selectedFields = [];
        jQuery('.lp_extrafields_select :checked').each(function(i, selectedElement) {
            keyValuePair = {};
            keyValuePair[jQuery(selectedElement).data('key')] = jQuery(selectedElement).val();
            $selectedFields.push(keyValuePair);
        });
        $this.toggleClass('active');
        var new_design_v2            =    false;
        var new_header_filters        =    false;
        var listStyle   =   '';

       if( jQuery('#list-grid-view-v2').length != 0 )
       {
           if( jQuery('#list-grid-view-v2').hasClass( 'header-style-v2' ) )
           {
               var new_header_filters    =    true;
            }
           if( jQuery('#list-grid-view-v2').hasClass('list_view_v2') || jQuery('#list-grid-view-v2').hasClass('grid_view_v2') )
           {
                listStyle           =   get_list_style();
               new_design_v2    =    true;
            }
       }

        if( new_header_filters == true )
        {
            get_filters_before_send();

            if($this.hasClass('active')){
                jQuery('.rated-filter.header-filter-wrap').addClass("active");
                jQuery('.reviewed-filter.header-filter-wrap').addClass("active");
                jQuery('.viewed-filter.header-filter-wrap').addClass("active");
                jQuery('.open-now-filter').addClass('active');
            }
            else{
                jQuery('.rated-filter.header-filter-wrap').removeClass("active");
                jQuery('.reviewed-filter.header-filter-wrap').removeClass("active");
                jQuery('.viewed-filter.header-filter-wrap').removeClass("active");
                jQuery('.open-now-filter').removeClass('active');
            }

            var averageRate         =   get_filter_RRV( '.filter-in-header .rated-filter.header-filter-wrap' ),
               mostRewvied         =   get_filter_RRV( '.filter-in-header .reviewed-filter.header-filter-wrap' ),
               mostViewed          =   get_filter_RRV( '.filter-in-header .viewed-filter.header-filter-wrap' ),
                inexpensive         =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-one' ),
                moderate            =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-two' ),
                pricey              =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-three' ),
                ultra               =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-four' ),
                listing_openTime    =   get_open_now_val( '#filter-in-header .open-now-filter' ),
                skeyword            =   jQuery('input#skeyword-filter').val();
                if( jQuery('#searchlocation').length != 0 )
                {
                seracLoc            =   jQuery("#searchlocation").val();
                }else if( jQuery('#lp_search_loc').length != 0 ){
                seracLoc            =   jQuery("#lp_search_loc").val();
                }
        }
        else
        {
            var docHeight = jQuery( document ).height();
            jQuery( "body" ).prepend( '<div id="full-overlay"></div>' );
            jQuery('#full-overlay').css('height',docHeight+'px');
            event.preventDefault();
            jQuery('.lp-filter-pagination').hide();
            jQuery('#content-grids').html(' ');
            jQuery('.lp-filter-pagination-ajx').remove();
            //jQuery('#content-grids').addClass('content-loading');
            add_listing_skeletons();
            jQuery('.map-view-list-container').remove();
            var inexpensive='';
            moderate = '';
            pricey = '';
            ultra = '';
            averageRate = '';
            mostRewvied = '';
            listing_openTime = '';
            mostViewed = '';


            inexpensive = jQuery('.currency-signs #one').find('.active').data('price');
            moderate = jQuery('.currency-signs #two').find('.active').data('price');
            pricey = jQuery('.currency-signs #three').find('.active').data('price');
            ultra = jQuery('.currency-signs #four').find('.active').data('price');

            $this.find('a').toggleClass('active');
            if($this.find('a').hasClass('active')){
                jQuery('.search-filters li#mostviewed a').addClass("active");
                jQuery('.search-filters li#listingRate a').addClass("active");
                jQuery('.search-filters li#listingReviewed a').addClass("active");
                jQuery('.search-filters li.listing_openTime a').addClass("active");
                jQuery('.search-filters li.listing_openTime').find('.active').data('value', 'open');
            }
            else{
                jQuery('.search-filters li#mostviewed a').removeClass("active");
                jQuery('.search-filters li#listingRate a').removeClass("active");
                jQuery('.search-filters li#listingReviewed a').removeClass("active");

                jQuery('.search-filters li.listing_openTime a').removeClass("active");
                jQuery('.search-filters li.listing_openTime a').data('value', 'close');
            }



            mostViewed = jQuery('.search-filters li#mostviewed').find('.active').data('value');
            averageRate = jQuery('.search-filters li#listingRate').find('.active').data('value');
            mostRewvied = jQuery('.search-filters li#listingReviewed').find('.active').data('value');
            listing_openTime = jQuery('.search-filters li.listing_openTime').find('.active').data('time');

            
            skeyword = jQuery('input#lp_current_query').val();
            seracLoc            =   jQuery("#lp_search_loc").val();
        }

        var tags_name = [];
        tags_name = jQuery('.tags-area input[type=checkbox]:checked').map(function(){
            return jQuery(this).val();
        }).get();

        if(tags_name.length > 0){
        }else{
            if (jQuery('#check_featuretax').length > 0) {
                tags_name.push(jQuery('#check_featuretax').val());
            }
        }


        var clatval = jQuery('#searchform input[name=clat]').val();
        var clongval = jQuery('#searchform input[name=clong]').val();

        if(clatval && clongval){
        }else{
            clatval =  jQuery("#pac-input").attr( 'data-lat' );
            clongval = jQuery("#pac-input").attr( 'data-lng' );
        }

        
        if( listStyle == null && jQuery('#list-grid-view-v2').length != 0 )
        {
            listStyle   =   jQuery('#list-grid-view-v2').data('layout-class');
        }
        
        if(check_if_loc_disabled_fornearme()){
            seracLoc = '';
        }
        
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_search_term_object.ajaxurl,
            data: {
                'action': 'ajax_search_tags',
                'formfields': $selectedFields,
                'inexpensive':inexpensive,
                'moderate':moderate,
                'pricey':pricey,
                'ultra':ultra,
                'averageRate':averageRate,
                'mostRewvied':mostRewvied,
                'listing_openTime':listing_openTime,
                'mostviewed':mostViewed,
                'lpstag': jQuery("#lpstag").val(),
                'tag_name':tags_name,
                'cat_id': jQuery("#searchform select#searchcategory").val(),
                'loc_id': seracLoc,
                'list_style': listStyle,
                'skeyword': skeyword,
                'clat': clatval,
                'clong': clongval,
                'my_bounds_ne_lat'  : jQuery("#pac-input").attr( 'data-ne-lat' ),
                'my_bounds_ne_lng'  : jQuery("#pac-input").attr( 'data-ne-lng' ),
                'my_bounds_sw_lat'  : jQuery("#pac-input").attr( 'data-sw-lat' ),
                'my_bounds_sw_lng'  : jQuery("#pac-input").attr( 'data-sw-lng' ),
                'data_zoom'     : jQuery( '#pac-input' ).attr( 'data-zoom'),
                'distance_range'    : jQuery("#distance_range").val(),
                'lpNonce' : jQuery('#lpNonce').val()
            },
            success: function(data) {
                jQuery('#full-overlay').remove();
                if(data){
                    listing_update(data , new_design_v2, listStyle);
                    lp_append_distance_div();
                    remove_listing_skeletons();
                    if (jQuery('.grid').hasClass('active')) {
                        jQuery('.grid').trigger('click');
                    }
                    else if(jQuery('.list').hasClass('active')){
                        jQuery('.list').trigger('click');
                    }
                }
            }
        });
    });
    
    
    jQuery(document).on('click', '.app-view-filters .currency-signs.search-filter-attr li a', function(event) {
        event.preventDefault();

        var $this   =   jQuery(this);
        jQuery(this).toggleClass('active');
        get_app_view_before_send();

        if( jQuery(this).hasClass('active') ){
            jQuery(this).parent('label').children('.app-filter-loader').addClass('app-filter-loader-active').show().html('<i class="fa fa-spinner" aria-hidden="true"></i>');
        }
        else
        {
            jQuery(this).parent('label').children('.app-filter-loader').hide().html('<i class="fa fa-spinner" aria-hidden="true"></i>');
        }
        var tags_name = [];
        tags_name = jQuery('.tags-area input[type=checkbox]:checked').map(function(){
            return jQuery(this).val();
        }).get();

        if(tags_name.length > 0){
        }else{
            if (jQuery('#check_featuretax').length > 0) {
                tags_name.push(jQuery('#check_featuretax').val());
            }
        }

        skeyword = jQuery('input#lp_current_query').val();

        seracLoc = jQuery("#lp_search_loc").val();
        if(check_if_loc_disabled_fornearme()){
            seracLoc = '';
        }
        listStyle   =   '';
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_search_term_object.ajaxurl,
            data: {
                'action': 'ajax_search_tags',
                'formfields': get_extra_filter(),
                'inexpensive':get_app_view_filter_val('.currency-signs.search-filter-attr li a#one', 'inexpensive', 'price_range'),
                'moderate':get_app_view_filter_val('.currency-signs.search-filter-attr li a#two', 'moderate', 'price_range'),
                'pricey':get_app_view_filter_val('.currency-signs.search-filter-attr li a#three', 'pricey', 'price_range'),
                'ultra':get_app_view_filter_val('.currency-signs.search-filter-attr li a#four', 'ultra_high_end', 'price_range'),
                'averageRate':get_app_view_filter_val('#listingRate', 'listing_rate'),
                'mostRewvied':get_app_view_filter_val('#listingReviewed', 'listing_reviewed'),
                'coupons':get_app_view_filter_val('#listingCoupons', 'coupons'),
                'mostviewed':get_app_view_filter_val('#mostviewed', 'mostviewed'),
                'listing_openTime':get_app_view_filter_val('.listing_openTime', 'open'),
                'lpstag': jQuery("#lpstag").val(),
                'tag_name':tags_name,
                'cat_id': jQuery("#searchform select#searchcategory").val(),
                'loc_id': seracLoc,
                'list_style': listStyle,
                'skeyword': skeyword,
                'lpNonce' : jQuery('#lpNonce').val()
            },
            success: function(data) {
                jQuery('.app-filter-loader-active').html('<i class="fa fa-check-circle" aria-hidden="true"></i>');
                jQuery('#full-overlay').remove();
                if(data){
                    listing_update(data);
                    lp_append_distance_div();
                    remove_listing_skeletons();
                    if (jQuery('.grid').hasClass('active')) {
                        jQuery('.grid').trigger('click');
                    }
                    else if(jQuery('.list').hasClass('active')){
                        jQuery('.list').trigger('click');
                    }
                }
            }
        });
    });
    jQuery(document).on('change', '.search-filter-attr input[type="checkbox"].listing_openTime, .search-filter-attr input[type="checkbox"]#bestmatch, .search-filter-attr input[type="checkbox"]#listingCoupons,.search-filter-attr input[type="checkbox"]#listingRate, .search-filter-attr input[type="checkbox"]#listingReviewed, .search-filter-attr input[type="checkbox"]#mostviewed', function(event) {

        event.preventDefault();
        var $this   =   jQuery(this);
        best_match_filter_toggle($this);
        get_app_view_before_send();

        if( jQuery(this).hasClass('active') ){
            jQuery(this).parent('label').children('.app-filter-loader').addClass('app-filter-loader-active').show().html('<i class="fa fa-spinner" aria-hidden="true"></i>');
        }
        else
        {
            jQuery(this).parent('label').children('.app-filter-loader').hide().html('<i class="fa fa-spinner" aria-hidden="true"></i>');
        }
        var tags_name = [];
        tags_name = jQuery('.tags-area input[type=checkbox]:checked').map(function(){
            return jQuery(this).val();
        }).get();

        if(tags_name.length > 0){
        }else{
            if (jQuery('#check_featuretax').length > 0) {
                tags_name.push(jQuery('#check_featuretax').val());
            }
        }

        skeyword = jQuery('input#lp_current_query').val();
        
        seracLoc = jQuery("#lp_search_loc").val();
        if(check_if_loc_disabled_fornearme()){
            seracLoc = '';
        }
        listStyle   =   '';
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_search_term_object.ajaxurl,
            data: {
                'action': 'ajax_search_tags',
                'formfields': get_extra_filter(),
                'inexpensive':get_app_view_filter_val('.currency-signs.search-filter-attr li a#one', 'inexpensive', 'price_range'),
                'moderate':get_app_view_filter_val('.currency-signs.search-filter-attr li a#two', 'moderate', 'price_range'),
                'pricey':get_app_view_filter_val('.currency-signs.search-filter-attr li a#three', 'pricey', 'price_range'),
                'ultra':get_app_view_filter_val('.currency-signs.search-filter-attr li a#four', 'ultra_high_end', 'price_range'),
                'averageRate':get_app_view_filter_val('#listingRate', 'listing_rate'),
                'mostRewvied':get_app_view_filter_val('#listingReviewed', 'listing_reviewed'),
                'coupons':get_app_view_filter_val('#listingCoupons', 'coupons'),
                'mostviewed':get_app_view_filter_val('#mostviewed', 'mostviewed'),
                'listing_openTime':get_app_view_filter_val('.listing_openTime', 'open'),
                'lpstag': jQuery("#lpstag").val(),
                'tag_name':tags_name,
                'cat_id': jQuery("#searchform select#searchcategory").val(),
                'loc_id': seracLoc,
                'list_style': listStyle,
                'skeyword': skeyword,
                'lpNonce' : jQuery('#lpNonce').val()
            },
            success: function(data) {
                jQuery('.app-filter-loader-active').html('<i class="fa fa-check-circle" aria-hidden="true"></i>');
                jQuery('#full-overlay').remove();
                if(data){
                    listing_update(data);
                    lp_append_distance_div();
                    remove_listing_skeletons();
                    if (jQuery('.grid').hasClass('active')) {
                        jQuery('.grid').trigger('click');
                    }
                    else if(jQuery('.list').hasClass('active')){
                        jQuery('.list').trigger('click');
                    }
                }
            }
        });
    });
    function best_match_filter_toggle(selector) {
        if(selector.is('#bestmatch')){
            if(selector.is(':checked')) {
                jQuery('.search-filter-attr input[type="checkbox"].listing_openTime').prop('checked', true);
                jQuery('.search-filter-attr input[type="checkbox"]#listingRate').prop('checked', true);
            } else {
                jQuery('.search-filter-attr input[type="checkbox"].listing_openTime').prop('checked', false);
                jQuery('.search-filter-attr input[type="checkbox"]#listingRate').prop('checked', false);
            }
        }
    }
    function get_app_view_filter_val(selector, filter_val, filterType) {
        if(selector == '.listing_openTime') {
            var $return =   'close';
        } else {
            var $return =   '';
        }
        if(filterType == 'price_range') {
            if(jQuery(selector).hasClass('active')) {
                jQuery(selector).addClass('myclass');
                $return =   filter_val;
            }
        } else {
            if(jQuery(selector).is(':checked')) {
                $return =   filter_val;
            }
        }
        return $return;
    }
    function get_app_view_before_send() {
        var docHeight = jQuery( document ).height();
        jQuery( "body" ).prepend( '<div id="full-overlay"></div>' );
        jQuery('#full-overlay').css('height',docHeight+'px');
        event.preventDefault();

        jQuery(this).toggleClass('active');
        jQuery('.lp-filter-pagination').hide();
        jQuery('#content-grids').html(' ');
        jQuery('.lp-filter-pagination-ajx').remove();
        jQuery('#content-grids').addClass('content-loading');
        jQuery('.map-view-list-container').remove();
    }
    
    /* =========================================================== */
jQuery(document).on('click', '.lp-filter-pagination-ajx ul li span.haspaglink', function(event){
        
        $selectedFields = [];
        jQuery('.lp_extrafields_select :checked').each(function(i, selectedElement) {
            keyValuePair = {};
            keyValuePair[jQuery(selectedElement).data('key')] = jQuery(selectedElement).val();
            $selectedFields.push(keyValuePair);
        });
        jQuery('#lp-pages-in-cats').hide(200);
        var seracLoc    =   '';
        var $this = jQuery(this);
        var new_design_v2            =    false;
        var new_header_filters        =    false;
        var listStyle   =   '';

       if( jQuery('#list-grid-view-v2').length != 0 )
       {
           if( jQuery('#list-grid-view-v2').hasClass( 'header-style-v2' ) )
           {
               var new_header_filters    =    true;
            }
           if( jQuery('#list-grid-view-v2').hasClass('list_view_v2') || jQuery('#list-grid-view-v2').hasClass('grid_view_v2') )
           {
                listStyle           =   get_list_style();
               new_design_v2    =    true;
            }
       }

        if( new_header_filters == true )
        {
            
       
            get_filters_before_send();
            var averageRate         =   get_filter_RRV( '.filter-in-header .rated-filter.header-filter-wrap' ),
               mostRewvied         =   get_filter_RRV( '.filter-in-header .reviewed-filter.header-filter-wrap' ),
               mostViewed          =   get_filter_RRV( '.filter-in-header .viewed-filter.header-filter-wrap' ),
                inexpensive         =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-one' ),
                moderate            =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-two' ),
                pricey              =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-three' ),
                ultra               =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-four' ),
                listing_openTime    =   get_open_now_val( '#filter-in-header .open-now-filter' ),
                listStyle           =   get_list_style(),
                skeyword            =   $this.data('skeyword');
                if( jQuery('#searchlocation').length != 0 )
                {
                seracLoc            =   jQuery("#searchlocation").val();
                }else if( jQuery('#lp_search_loc').length != 0 ){
                seracLoc            =   jQuery("#lp_search_loc").val();
                }
            jQuery('html, body').animate({scrollTop:0},500);
        }
        else
        {

            
        
        jQuery('.lp-filter-pagination-ajx ul li span').removeClass('active');
        var docHeight = jQuery( document ).height();
        jQuery('html, body').animate({scrollTop:0},500);
        jQuery( "body" ).prepend( '<div id="full-overlay"></div>' );
        jQuery('#full-overlay').css('height',docHeight+'px');
        event.preventDefault();
        jQuery(this).toggleClass('active');
        
        jQuery('#content-grids').html(' ');
        jQuery('.lp-filter-pagination-ajx').remove();
        //jQuery('#content-grids').addClass('content-loading');
        add_listing_skeletons();
        jQuery('.map-view-list-container').remove();
        var inexpensive='';
        moderate = '';
        pricey = '';
        ultra = '';
        averageRate = '';
        mostRewvied = '';
        listing_openTime = '';
        mostViewed = '';
        seracLoc = '';


            if( jQuery('#searchlocation').length != 0 )
            {
                seracLoc            =   jQuery("#searchlocation").val();
            }else if( jQuery('#lp_search_loc').length != 0 ){
                seracLoc            =   jQuery("#lp_search_loc").val();
            }

        inexpensive = jQuery('.currency-signs #one').find('.active').data('price');
        moderate = jQuery('.currency-signs #two').find('.active').data('price');
        pricey = jQuery('.currency-signs #three').find('.active').data('price');
        ultra = jQuery('.currency-signs #four').find('.active').data('price');
        
        mostViewed = jQuery('.search-filters li#mostviewed').find('.active').data('value');
        averageRate = jQuery('.search-filters li#listingRate').find('.active').data('value');
        mostRewvied = jQuery('.search-filters li#listingReviewed').find('.active').data('value');
        listing_openTime = jQuery('.search-filters li.listing_openTime').find('.active').data('time');
        
        
        skeyword = jQuery('input#lp_current_query').val();
        
        }
        pageno = jQuery(this).data('pageurl');
        var tags_name = [];
        tags_name = jQuery('.tags-area input[type=checkbox]:checked').map(function(){
          return jQuery(this).val();
        }).get();
        
        if(tags_name.length > 0)
        {
        }
        else{
            if (jQuery('#check_featuretax').length > 0) {
                tags_name.push(jQuery('#check_featuretax').val());
            }
        }

        var clatval = jQuery('#searchform input[name=clat]').val();
        var clongval = jQuery('#searchform input[name=clong]').val();
        
        if(clatval && clongval){
        }else{
            clatval =  jQuery("#pac-input").attr( 'data-lat' );
            clongval = jQuery("#pac-input").attr( 'data-lng' );
        }
        
        if(check_if_loc_disabled_fornearme()){
            seracLoc = '';
        }
    if (jQuery('body').hasClass('listing-app-view-new')) {
        mostViewed = jQuery('.search-filter-attr #mostviewed:checked').val();
        averageRate = jQuery('.search-filter-attr #listingRate:checked').val();
        mostRewvied = jQuery('.search-filter-attr #listingReviewed:checked').val();
        listing_openTime = jQuery('.search-filter-attr .listing_openTime:checked').data('value');
    }
            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                url: ajax_search_term_object.ajaxurl,
                data: { 
                    'action': 'ajax_search_tags',
                    'formfields': $selectedFields,
                    'inexpensive':inexpensive,
                    'moderate':moderate,
                    'pricey':pricey,
                    'ultra':ultra,
                    'averageRate':averageRate,
                    'mostRewvied':mostRewvied,
                    'mostviewed':mostViewed,
                    'listing_openTime':listing_openTime,
                    'lpstag': jQuery("#lpstag").val(),
                    'tag_name':tags_name,
                    'cat_id': jQuery("#searchform select#searchcategory").val(), 
                    'loc_id': seracLoc,
                    'list_style': listStyle, 
                    'pageno': pageno,
                    'skeyword': skeyword,
                    'clat': clatval,
                    'clong': clongval,
                    'my_bounds_ne_lat'  : jQuery("#pac-input").attr( 'data-ne-lat' ),
                    'my_bounds_ne_lng'  : jQuery("#pac-input").attr( 'data-ne-lng' ),
                    'my_bounds_sw_lat'  : jQuery("#pac-input").attr( 'data-sw-lat' ),
                    'my_bounds_sw_lng'  : jQuery("#pac-input").attr( 'data-sw-lng' ),
                    'data_zoom'     : jQuery( '#pac-input' ).attr( 'data-zoom'),
                    'distance_range'    : jQuery("#distance_range").val(),
                    'lpNonce' : jQuery('#lpNonce').val()
                    },
                success: function(data) {
                    $this.addClass('active');
                    jQuery('#full-overlay').remove();
                    if(data){
                        remove_listing_skeletons();
                        listing_update(data, new_design_v2, listStyle);
                        lp_append_distance_div();
                        if (jQuery('.grid').hasClass('active')) {
                            jQuery('.grid').trigger('click');
                        }
                        else if(jQuery('.list').hasClass('active')){
                            jQuery('.list').trigger('click');
                        }
                        if (jQuery('div.promoted-listings div.app-view-new-ads-slider').length) {
                            jQuery('div.app-view-new-ads-slider').slick({
                                arrows: false,
                            });
                        }
                    }
                  } 
            });
    });

    jQuery(document).on('click', '#filter-in-header .sort-filter-inner .rated-filter, #filter-in-header .sort-filter-inner .reviewed-filter, #filter-in-header .sort-filter-inner .viewed-filter', function (e)
    {
        $selectedFields = [];
        jQuery('.lp_extrafields_select :checked').each(function(i, selectedElement) {
            keyValuePair = {};
            keyValuePair[jQuery(selectedElement).data('key')] = jQuery(selectedElement).val();
            $selectedFields.push(keyValuePair);
        });

        get_filters_before_send();
        jQuery(this).toggleClass('active');

        var new_design_v2   =   false;
        var listStyle   =   '';
        if( jQuery('#list-grid-view-v2').length != 0 )
        {
            new_design_v2   =   true;
        }

        var averageRate         =   get_filter_RRV( '.rated-filter.header-filter-wrap' ),
            mostRewvied         =   get_filter_RRV( '.reviewed-filter.header-filter-wrap' ),
            mostViewed          =   get_filter_RRV( '.viewed-filter.header-filter-wrap' ),
            inexpensive         =   get_price_range_vals( '.price-filter ul li#one' ),
            moderate            =   get_price_range_vals( '.price-filter ul li#two' ),
            pricey              =   get_price_range_vals( '.price-filter ul li#three' ),
            ultra               =   get_price_range_vals( '.price-filter ul li#four' ),
            listing_openTime    =   get_open_now_val( '.open-now-filter' ),
            listStyle           =   get_list_style(),
            skeyword            =   jQuery('input#skeyword-filter').val();
            if( jQuery('#searchlocation').length != 0 )
                {
                seracLoc            =   jQuery("#searchlocation").val();
                }else if( jQuery('#lp_search_loc').length != 0 ){
                seracLoc            =   jQuery("#lp_search_loc").val();
                }


        var tags_name = [];
        tags_name = jQuery('.tags-area input[type=checkbox]:checked').map(function(){
            return jQuery(this).val();
        }).get();
        skeyword = jQuery('input#lp_current_query').val();
        var clatval = jQuery('#searchform input[name=clat]').val();
        var clongval = jQuery('#searchform input[name=clong]').val();

        if(clatval && clongval){
        }else{
            clatval =  jQuery("#pac-input").attr( 'data-lat' );
            clongval = jQuery("#pac-input").attr( 'data-lng' );
        }
        
        if(check_if_loc_disabled_fornearme()){
            seracLoc = '';
        }
        
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_search_term_object.ajaxurl,
            data: {
                'action': 'ajax_search_tags',
                'formfields': $selectedFields,
                'inexpensive':inexpensive,
                'moderate':moderate,
                'pricey':pricey,
                'ultra':ultra,
                'averageRate':averageRate,
                'mostRewvied':mostRewvied,
                'mostviewed':mostViewed,
                'listing_openTime':listing_openTime,
                'tag_name':tags_name,
                'cat_id': jQuery("#category-select").val(),
                'loc_id': seracLoc,
                'list_style': listStyle,
                'skeyword': skeyword,
                'clat': clatval,
                'clong': clongval,
                'my_bounds_ne_lat'  : jQuery("#pac-input").attr( 'data-ne-lat' ),
                'my_bounds_ne_lng'  : jQuery("#pac-input").attr( 'data-ne-lng' ),
                'my_bounds_sw_lat'  : jQuery("#pac-input").attr( 'data-sw-lat' ),
                'my_bounds_sw_lng'  : jQuery("#pac-input").attr( 'data-sw-lng' ),
                'data_zoom'     : jQuery( '#pac-input' ).attr( 'data-zoom'),
                'distance_range'    : jQuery("#distance_range").val(),
                'lpNonce' : jQuery('#lpNonce').val()
            },
            success: function(data) {
                jQuery('#full-overlay').remove();
                if(data){
                    listing_update(data, new_design_v2, listStyle);
                    lp_append_distance_div();
                    remove_listing_skeletons();
                    if (jQuery('.grid').hasClass('active')) {
                        jQuery('.grid').trigger('click');
                    }
                    else if(jQuery('.list').hasClass('active')){
                        jQuery('.list').trigger('click');
                    }
                }
            }
        });

    })

        /* =======================Open now========================= */
    jQuery(document).on('click','input[type="checkbox"].listing_openTime',function(event) {


        var new_design_v2   =   false;
        var listStyle   =   '';
        
        if( jQuery('#list-grid-view-v2').length != 0 )
        {
            if( jQuery('#list-grid-view-v2').hasClass('list_view_v2') || jQuery('#list-grid-view-v2').hasClass('grid_view_v2') )
            {
                new_design_v2   =   true;
                listStyle           =   get_list_style();
            }
        }
        var docHeight = jQuery( document ).height();
        jQuery( "body" ).prepend( '<div id="full-overlay"></div>' );
        jQuery('#full-overlay').css('height',docHeight+'px');
        jQuery('.lp-filter-pagination').hide();
        jQuery('#content-grids').html(' ');
        jQuery('.lp-filter-pagination-ajx').remove();
        //jQuery('#content-grids').addClass('content-loading');
        add_listing_skeletons();
        jQuery('.map-view-list-container').remove();


        var inexpensive='';
        moderate = '';
        pricey = '';
        ultra = '';
        averageRate = '';
        mostRewvied = '';
        coupons    =    '';
        var listing_openTime = '';
        mostViewed = '';
        
        inexpensive = jQuery('.currency-signs #one').find('.active').data('price');
        moderate = jQuery('.currency-signs #two').find('.active').data('price');
        pricey = jQuery('.currency-signs #three').find('.active').data('price');
        ultra = jQuery('.currency-signs #four').find('.active').data('price');
        
        if( !jQuery('body').hasClass('listing-app-view') )
        {
            mostViewed = jQuery('.search-filters li#mostviewed').find('.active').data('value');
            averageRate = jQuery('.search-filters li#listingRate').find('.active').data('value');
            mostRewvied = jQuery('.search-filters li#listingReviewed').find('.active').data('value');
            listing_openTime = jQuery('.search-filters li.listing_openTime').find('.active').data('time');
            coupons = jQuery('.search-filters li.listing_coupons').find('a.active').data('value');
           if( jQuery('.search-filters li.listing_coupons a.active').length > 0 )
           {
               coupons    =    'coupons';
            }
            event.preventDefault();
        }
        else
        {
            if( jQuery( '.search-filter-attr input[type="checkbox"]#listingRate' ).hasClass('active') )
            {
                averageRate = jQuery( '.search-filter-attr input[type="checkbox"]#listingReviewed' ).val();
            }
            if( jQuery( '.search-filter-attr input[type="checkbox"]#listingRate' ).hasClass('active') )
            {
                mostRewvied = jQuery( '.search-filter-attr input[type="checkbox"]#listingReviewed' ).val();
            }
        }

        jQuery(this).toggleClass('active');
        if(jQuery(this).hasClass("active")){
            jQuery(this).parent('label').children('.app-filter-loader').addClass('app-filter-loader-active').show().html('<i class="fa fa-spinner" aria-hidden="true"></i>');
            jQuery(this).attr('data-value', 'open');
            listing_openTime = 'open';

        }
        else{
            jQuery(this).parent('label').children('.app-filter-loader').hide().html('<i class="fa fa-spinner" aria-hidden="true"></i>');
            jQuery(this).attr('data-value', 'close');
            listing_openTime = 'close';
        }
        //listing_openTime = jQuery(this).data('value');

        var tags_name = [];
        tags_name = jQuery('.tags-area input[type=checkbox]:checked').map(function(){
          return jQuery(this).val();
        }).get();
        
        if(tags_name.length > 0){
        }else{
            if (jQuery('#check_featuretax').length > 0) {
                tags_name.push(jQuery('#check_featuretax').val());
            }
        }
        
        skeyword = jQuery('input#lp_current_query').val();
        
        if(skeyword){}else{
            skeyword = jQuery('input#lp_current_query').val();
        }
        
        var clatval = jQuery('#searchform input[name=clat]').val();
        var clongval = jQuery('#searchform input[name=clong]').val();
        
        if(clatval && clongval){
        }else{
            clatval =  jQuery("#pac-input").attr( 'data-lat' );
            clongval = jQuery("#pac-input").attr( 'data-lng' );
        }
        
        seracLoc = jQuery("#lp_search_loc").val();
        if(check_if_loc_disabled_fornearme()){
            seracLoc = '';
        }

            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                url: ajax_search_term_object.ajaxurl,
                data: { 
                    'action': 'ajax_search_tags', 
                    'inexpensive':inexpensive,
                    'moderate':moderate,
                    'pricey':pricey,
                    'ultra':ultra,
                    'averageRate':averageRate,
                    'mostRewvied':mostRewvied,
                    'coupons':coupons,
                    'mostviewed':mostViewed,
                    'listing_openTime':listing_openTime,
                    'lpstag': jQuery("#lpstag").val(),
                    'tag_name':tags_name,
                    'cat_id': jQuery("#searchform select#searchcategory").val(), 
                    'loc_id': seracLoc,
                    'list_style': listStyle, 
                    'skeyword': skeyword,
                    'clat': clatval, 
                    'clong': clongval,
                    'my_bounds_ne_lat'  : jQuery("#pac-input").attr( 'data-ne-lat' ),
                    'my_bounds_ne_lng'  : jQuery("#pac-input").attr( 'data-ne-lng' ),
                    'my_bounds_sw_lat'  : jQuery("#pac-input").attr( 'data-sw-lat' ),
                    'my_bounds_sw_lng'  : jQuery("#pac-input").attr( 'data-sw-lng' ),
                    'data_zoom'     : jQuery( '#pac-input' ).attr( 'data-zoom'),
                    'distance_range'    : jQuery("#distance_range").val(),
                    'lpNonce' : jQuery('#lpNonce').val()
                    },
                success: function(data) {
                    jQuery('.app-filter-loader-active').html('<i class="fa fa-check-circle" aria-hidden="true"></i>');
                    jQuery('#full-overlay').remove();                   
                    if(data){

                        remove_listing_skeletons();
                        listing_update(data , new_design_v2, listStyle)
                        lp_append_distance_div();
                        if(data.opentime!=''){
                            var timevalue = ''; 
                            timevalue = data.opentime;
                            /* if(timevalue=='open'){
                                jQuery('#content-grids .lp-grid-box-contianer .grid-closed:contains("Closed Now")') .closest( ".lp-grid-box-contianer" ).css('display','none');
                            }
                            if(timevalue=='close'){
                                jQuery('#content-grids .lp-grid-box-contianer .grid-closed:contains("Closed Now")') .closest( ".lp-grid-box-contianer" ).css('display','block');
                            } */
                            if (jQuery('.grid').hasClass('active')) {
                                jQuery('.grid').trigger('click');
                            }
                            else if(jQuery('.list').hasClass('active')){
                                jQuery('.list').trigger('click');
                            }
                        }
                    }
                    
                  }
            });
            
    });
    
    /* =======================Open now========================= */
    jQuery(document).on('click','input[type="checkbox"]#listing_openTime',function(event)
    {
        $selectedFields = [];
        jQuery('.lp_extrafields_select :checked').each(function(i, selectedElement) {
            keyValuePair = {};
            keyValuePair[jQuery(selectedElement).data('key')] = jQuery(selectedElement).val();
            $selectedFields.push(keyValuePair);
        });
         jQuery(this).toggleClass('active');
        var new_design_v2            =    false;
        var new_header_filters        =    false;
        var listStyle   =   '';

       if( jQuery('#list-grid-view-v2').length != 0 )
       {
           if( jQuery('#list-grid-view-v2').hasClass( 'header-style-v2' ) )
           {
               var new_header_filters    =    true;
            }
           if( jQuery('#list-grid-view-v2').hasClass('list_view_v2') || jQuery('#list-grid-view-v2').hasClass('grid_view_v2') )
           {
                listStyle           =   get_list_style();
               new_design_v2    =    true;
            }
       }

        if( new_header_filters == true )
        {
       
            get_filters_before_send();
            var averageRate         =   get_filter_RRV( '.filter-in-header .rated-filter.header-filter-wrap' ),
               mostRewvied         =   get_filter_RRV( '.filter-in-header .reviewed-filter.header-filter-wrap' ),
               mostViewed          =   get_filter_RRV( '.filter-in-header .viewed-filter.header-filter-wrap' ),
                inexpensive         =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-one' ),
                moderate            =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-two' ),
                pricey              =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-three' ),
                ultra               =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-four' ),
                listing_openTime    =   get_open_now_val( '#filter-in-header .open-now-filter' ),
                listStyle           =   get_list_style(),
                skeyword            =   jQuery('input#skeyword-filter').val();
                if( jQuery('#searchlocation').length != 0 )
                {
                seracLoc            =   jQuery("#searchlocation").val();
                }else if( jQuery('#lp_search_loc').length != 0 ){
                seracLoc            =   jQuery("#lp_search_loc").val();
                }
        }
        else
        {
        var docHeight = jQuery( document ).height();
        jQuery( "body" ).prepend( '<div id="full-overlay"></div>' );
        jQuery('#full-overlay').css('height',docHeight+'px');
            event.preventDefault();
        jQuery('.lp-filter-pagination').hide();
        jQuery('#content-grids').html(' ');
        jQuery('.lp-filter-pagination-ajx').remove();
        //jQuery('#content-grids').addClass('content-loading');
        add_listing_skeletons();
        jQuery('.map-view-list-container').remove();
        var inexpensive='';
        moderate = '';
        pricey = '';
        ultra = '';
        averageRate = '';
        mostRewvied = '';
        var listing_openTime = '';
        mostViewed = '';
        
        inexpensive = jQuery('.currency-signs #one').find('.active').data('price');
        moderate = jQuery('.currency-signs #two').find('.active').data('price');
        pricey = jQuery('.currency-signs #three').find('.active').data('price');
        ultra = jQuery('.currency-signs #four').find('.active').data('price');
        
        if( !jQuery('body').hasClass('listing-app-view') )
        {
            mostViewed = jQuery('.search-filters li#mostviewed').find('.active').data('value');
            averageRate = jQuery('.search-filters li#listingRate').find('.active').data('value');
            mostRewvied = jQuery('.search-filters li#listingReviewed').find('.active').data('value');
            listing_openTime = jQuery('.search-filters li.listing_openTime').find('.active').data('time');
        }
        else
        {
            if( jQuery( '.search-filter-attr input[type="checkbox"]#listingRate' ).hasClass('active') )
            {
                averageRate = jQuery( '.search-filter-attr input[type="checkbox"]#listingReviewed' ).val();
            }
            if( jQuery( '.search-filter-attr input[type="checkbox"]#listingRate' ).hasClass('active') )
            {
                mostRewvied = jQuery( '.search-filter-attr input[type="checkbox"]#listingReviewed' ).val();
            }
        }

        if(jQuery(this).hasClass("active")){
            jQuery(this).parent('label').children('.app-filter-loader').addClass('app-filter-loader-active').show().html('<i class="fa fa-spinner" aria-hidden="true"></i>');
            jQuery(this).attr('data-value', 'open');
            listing_openTime = 'open';

        }
        else{
            jQuery(this).parent('label').children('.app-filter-loader').hide().html('<i class="fa fa-spinner" aria-hidden="true"></i>');
            jQuery(this).attr('data-value', 'close');
            listing_openTime = 'close';         
        }
            
            skeyword = jQuery('input#lp_current_query').val();
            skeyword = jQuery('input#lp_current_query').val();
            seracLoc            =   jQuery("#lp_search_loc").val();
        }

        var tags_name = [];
        tags_name = jQuery('.tags-area input[type=checkbox]:checked').map(function(){
          return jQuery(this).val();
        }).get();
        
        if(tags_name.length > 0){
        }else{
            if (jQuery('#check_featuretax').length > 0) {
                tags_name.push(jQuery('#check_featuretax').val());
            }
        }

        


        
        var clatval = jQuery('#searchform input[name=clat]').val();
        var clongval = jQuery('#searchform input[name=clong]').val();
        
        if(clatval && clongval){
        }else{
            clatval =  jQuery("#pac-input").attr( 'data-lat' );
            clongval = jQuery("#pac-input").attr( 'data-lng' );
        }
        
        if(check_if_loc_disabled_fornearme()){
            seracLoc = '';
        }

            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                url: ajax_search_term_object.ajaxurl,
                data: { 
                    'action': 'ajax_search_tags',
                    'formfields': $selectedFields,
                    'inexpensive':inexpensive,
                    'moderate':moderate,
                    'pricey':pricey,
                    'ultra':ultra,
                    'averageRate':averageRate,
                    'mostRewvied':mostRewvied,
                    'mostviewed':mostViewed,
                    'listing_openTime':listing_openTime,
                    'lpstag': jQuery("#lpstag").val(),
                    'tag_name':tags_name,
                    'cat_id': jQuery("#searchform select#searchcategory").val(), 
                    'loc_id': seracLoc,
                    'list_style': listStyle, 
                    'skeyword': skeyword,
                    'clat': clatval, 
                    'clong': clongval,
                    'my_bounds_ne_lat'  : jQuery("#pac-input").attr( 'data-ne-lat' ),
                    'my_bounds_ne_lng'  : jQuery("#pac-input").attr( 'data-ne-lng' ),
                    'my_bounds_sw_lat'  : jQuery("#pac-input").attr( 'data-sw-lat' ),
                    'my_bounds_sw_lng'  : jQuery("#pac-input").attr( 'data-sw-lng' ),
                    'data_zoom'     : jQuery( '#pac-input' ).attr( 'data-zoom'),
                    'distance_range'    : jQuery("#distance_range").val(),
                    'lpNonce' : jQuery('#lpNonce').val()
                    },
                success: function(data) {
                    jQuery('.app-filter-loader-active').html('<i class="fa fa-check-circle" aria-hidden="true"></i>');
                    jQuery('#full-overlay').remove();
                    if(data){
                        remove_listing_skeletons();
                        listing_update(data, new_design_v2, listStyle);
                        lp_append_distance_div();
                        if(data.opentime!=''){
                            var timevalue = ''; 
                            timevalue = data.opentime;
                            /* if(timevalue=='open'){
                                jQuery('#content-grids .lp-grid-box-contianer .grid-closed:contains("Closed Now")') .closest( ".lp-grid-box-contianer" ).css('display','none');
                            }
                            if(timevalue=='close'){
                                jQuery('#content-grids .lp-grid-box-contianer .grid-closed:contains("Closed Now")') .closest( ".lp-grid-box-contianer" ).css('display','block');
                            } */
                            if (jQuery('.grid').hasClass('active')) {
                                jQuery('.grid').trigger('click');
                            }
                            else if(jQuery('.list').hasClass('active')){
                                jQuery('.list').trigger('click');
                            }
                        }
                    }
                  } 
            });
            
    });
    /* =====by zaheer on 13 march====== */
    
    jQuery(document).on('click', '.add-to-fav',function(e) {
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
                    'action': 'listingpro_add_favorite', 
                    'post-id': val, 
                    'type': type,
                    'lpNonce' : jQuery('#lpNonce').val()
                    },
                success: function(data) {
                    if(data){
                        if(data.active == 'yes'){
                            $this.removeClass('add-to-fav');
                            $this.addClass('remove-fav');
                            $this.find('i').removeClass('fa-spin fa-spinner');
                            if(data.type == 'grids' || data.type == 'list'){
                            var successText = $this.data('success-text');
                            $this.find('span').text(successText);
                            //alert($this.find('i'));
                            $this.find('.fa').removeClass('fa-bookmark-o');
                            $this.find('.fa').addClass('fa-bookmark');
                            }else{
                                var successText =$this.data('success-text');
                                $this.find('span').text(successText);
                                $this.find('i').removeClass('fa-bookmark-o');
                                $this.find('i').addClass('fa-bookmark');
                            }               
                        }               
                    }
                  } 
            });
    });
    
    
    jQuery(document).on('click', '.remove-fav', function(e) {
            e.preventDefault() 
            var val = jQuery(this).data('post-id');
            jQuery(this).find('i').removeClass('fa-close');
            jQuery(this).find('i').addClass('fa-spinner fa-spin');
            $this = jQuery(this);
                jQuery.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: ajax_search_term_object.ajaxurl,
                    data: { 
                        'action': 'listingpro_remove_favorite', 
                        'post-id': val,
                        'lpNonce' : jQuery('#lpNonce').val()
                        },
                    success: function(data) {
                        if(data){
                            if(data.remove == 'yes'){
                                $this.removeClass('remove-fav');
                                $this.find('span').text(data.remove_text);
                                $this.addClass('add-to-fav');
                                $this.find('.fa').removeClass('fa-spinner fa-spin');
                                $this.find('.fa').addClass('fa-bookmark-o');
                                 if( jQuery('.page-template-template-favourites').length != 0 )
                                {
                                $this.closest( ".lp-grid-box-contianer" ).fadeOut();
                                $this.closest( ".lp-listing-outer-container" ).fadeOut();
                                }
                            }
                        }
                      }
                });         
            
    });
    


});

/* for near me locations */
jQuery(document).ready(function($){
    jQuery('#lp-find-near-me a.near-me-btn, #lp-find-near-me a.near-me-btn-style-3, .lp-header-search-filters .near-me-filter').on('click', function(event){
            $this = jQuery(this);
            $selectedFields = [];
            jQuery('.lp_extrafields_select :checked').each(function(i, selectedElement) {
                keyValuePair = {};
                keyValuePair[jQuery(selectedElement).data('key')] = jQuery(selectedElement).val();
                $selectedFields.push(keyValuePair);
            });
            event.preventDefault();
            var docHeight = jQuery( document ).height();
            
            var clatval = '';
            var clongval ='';
            
            var inexpensive='';
                moderate = '';
                pricey = '';
                ultra = '';
                averageRate = '';
                mostRewvied = '';
                listing_openTime = '';
                mostViewed = '';
            
            
            if ( $this.hasClass( "active" ) ){
                showPositionResults('', '');
                jQuery('.lp-tooltip-div-hidden').removeClass('active');
            }else{
                getLocation();
            }
            
            function getLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition, showError);
                } else { 
                    x.innerHTML = "Geolocation is not supported by this browser.";
                }
            }


            function showPosition(position) {
                var clat = position.coords.latitude;
                var clong = position.coords.longitude;
                jQuery('.lp-tooltip-div-hidden').addClass('active');
                showPositionResults(clat, clong);
            }
            
            function showError(error) {
                //showPositionResults('', '');
                alert('Sorry! nearme will not work untill you share your location');
            }
            
            
            function showPositionResults(clat, clong) {
                $this.toggleClass( "active" );
                jQuery('#searchform input[name=clat]').val(clat);
                    jQuery('#searchform input[name=clong]').val(clong);
                    clatval= clat;
                    clongval = clong;
                
                
               var new_design_v2            =    false;
                var new_header_filters        =    false;
                var listStyle   =   '';

               if( jQuery('#list-grid-view-v2').length != 0 )
               {
                   if( jQuery('#list-grid-view-v2').hasClass( 'header-style-v2' ) )
                   {
                       var new_header_filters    =    true;
                    }
                   if( jQuery('#list-grid-view-v2').hasClass('list_view_v2') || jQuery('#list-grid-view-v2').hasClass('grid_view_v2') )
                   {
                        listStyle           =   get_list_style();
                       new_design_v2    =    true;
                    }
               }

                if( new_header_filters == true )
                {
                    get_filters_before_send();
                    var averageRate         =   get_filter_RRV( '.filter-in-header .rated-filter.header-filter-wrap' ),
               mostRewvied         =   get_filter_RRV( '.filter-in-header .reviewed-filter.header-filter-wrap' ),
               mostViewed          =   get_filter_RRV( '.filter-in-header .viewed-filter.header-filter-wrap' ),
                        inexpensive         =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-one' ),
                        moderate            =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-two' ),
                        pricey              =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-three' ),
                        ultra               =   get_price_range_vals( '#filter-in-header .price-filter ul li#n-four' ),
                        listing_openTime    =   get_open_now_val( '#filter-in-header .open-now-filter' ),
                        listStyle           =   get_list_style(),
                        skeyword            =   jQuery('input#skeyword-filter').val();
                        if( jQuery('#searchlocation').length != 0 )
                        {
                        seracLoc            =   jQuery("#searchlocation").val();
                        }else if( jQuery('#lp_search_loc').length != 0 ){
                        seracLoc            =   jQuery("#lp_search_loc").val();
                        }
                }
                else
                {
                jQuery( "body" ).prepend( '<div id="full-overlay"></div>' );
                jQuery('#full-overlay').css('height',docHeight+'px');
                
                jQuery('.lp-filter-pagination').hide();
                jQuery('.lp-filter-pagination-ajx').remove();
                jQuery('#content-grids').html(' ');
                //jQuery('#content-grids').addClass('content-loading');
                add_listing_skeletons();
                jQuery('.map-view-list-container').remove();

                inexpensive = jQuery('.currency-signs #one').find('.active').data('price');
                moderate = jQuery('.currency-signs #two').find('.active').data('price');
                pricey = jQuery('.currency-signs #three').find('.active').data('price');
                ultra = jQuery('.currency-signs #four').find('.active').data('price');
                
                mostViewed = jQuery('.search-filters li#mostviewed').find('.active').data('value');
                averageRate = jQuery('.search-filters li#listingRate').find('.active').data('value');
                mostRewvied = jQuery('.search-filters li.listingReviewed').find('.active').data('value');
               listing_openTime = jQuery('.search-filters li#listing_openTime, .search-filters li.listing_openTime').find('.active').data('time');
                    
                skeyword = jQuery('input#lp_current_query').val();
                seracLoc            =   jQuery("#lp_search_loc").val();
                }

                var tags_name = [];
                tags_name = jQuery('.tags-area input[type=checkbox]:checked').map(function(){
                  return jQuery(this).val();
                }).get();


                seracLoc = jQuery("#lp_search_loc").val();
                if(check_if_loc_disabled_fornearme()){
                    seracLoc = '';
                }

                jQuery.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: ajax_search_term_object.ajaxurl,
                    data: { 
                        'action': 'ajax_search_tags',
                        'formfields': $selectedFields,
                        'lpstag': jQuery("#lpstag").val(), 
                        'cat_id': jQuery("#searchform select#searchcategory").val(),
                        'loc_id': seracLoc,
                        'inexpensive':inexpensive,
                        'moderate':moderate,
                        'pricey':pricey,
                        'ultra':ultra,
                        'averageRate':averageRate,
                        'mostRewvied':mostRewvied,
                        'mostviewed':mostViewed,
                        'listing_openTime':listing_openTime,                    
                        'tag_name':tags_name,                   
                        'list_style': listStyle, 
                        'skeyword': skeyword, 
                        'clat': clatval, 
                        'clong': clongval,
                        'my_bounds_ne_lat'  : jQuery("#pac-input").attr( 'data-ne-lat' ),
                        'my_bounds_ne_lng'  : jQuery("#pac-input").attr( 'data-ne-lng' ),
                        'my_bounds_sw_lat'  : jQuery("#pac-input").attr( 'data-sw-lat' ),
                        'my_bounds_sw_lng'  : jQuery("#pac-input").attr( 'data-sw-lng' ),
                        'data_zoom'     : jQuery( '#pac-input' ).attr( 'data-zoom'),
                        'distance_range'    : jQuery("#distance_range").val(),
                        'lpNonce' : jQuery('#lpNonce').val()
                        },
                    success: function(data){
                        jQuery('#full-overlay').remove();
                        if(data){
                            remove_listing_skeletons();
                            listing_update(data, new_design_v2, listStyle);
                            lp_append_distance_div();
                            if (jQuery('.grid').hasClass('active')) {
                                jQuery('.grid').trigger('click');
                            }
                            else if(jQuery('.list').hasClass('active')){
                                jQuery('.list').trigger('click');
                            }
                        }
                    }
                });
            
            }
        
    });

});

function lp_append_distance_div(){
    if(jQuery(document).find('.lp-nearby-dist-data').length!=0){
        jQuery(document).find(".lp-nearby-dist-data").each(function(){
            var $this = jQuery(this);
            disdata = $this.data('lpnearbydist');
            $this.next('.lp-grid-box-contianer').find('.lp-grid-box-bottom .pull-left').after('<div class="lp-nearest-distance">'+disdata+'</div>');
            $this.next('.lp-grid-box-contianer').find('.lp-grid-box-bottom-app-view .pull-left').after('<div class="lp-nearest-distance">'+disdata+'</div>');
            $this.next('.lp-grid-box-contianer.grid_view6').find('.lp-grid-box-thumb').append('<div class="lp-nearest-distance">'+disdata+'</div>');
            $this.next('.lp-grid-box-contianer').find('.grid-style-container .lp-listing-top,.list-style-cotainer .lp-listing-top').append('<div class="lp-nearest-distance">'+disdata+'</div>');
        });
    }
}


function decode_utf8(utf8String) {
    if (typeof utf8String != 'string') throw new TypeError('parameter ‘utf8String’ is not a string');
    // note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
    const unicodeString = utf8String.replace(
        /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,  // 3-byte chars
        function(c) {  // (note parentheses for precedence)
            var cc = ((c.charCodeAt(0)&0x0f)<<12) | ((c.charCodeAt(1)&0x3f)<<6) | ( c.charCodeAt(2)&0x3f);
            return String.fromCharCode(cc); }
    ).replace(
        /[\u00c0-\u00df][\u0080-\u00bf]/g,                 // 2-byte chars
        function(c) {  // (note parentheses for precedence)
            var cc = (c.charCodeAt(0)&0x1f)<<6 | c.charCodeAt(1)&0x3f;
            return String.fromCharCode(cc); }
    );
    return unicodeString;
}

                function listing_update(data , new_design_v2, listStyle){
                    //for search dynamic titles
                    if(data.searchtitles != ''){
                        //console.log(data.searchtitles);
                        $countKeys = Object.keys(data.searchtitles).length;

                        jQuery('span.dyn_titles').remove();
                        if($countKeys==3){
                            //only single term
                            if(data.searchtitles['category']){
                                document.title = data.searchtitles['category']+' - '+data.searchtitles['website'];
                                if(jQuery('.lp-header-search.archive-search h4.lp-title').length) {
                                    jQuery('.lp-header-search.archive-search h4.lp-title').html('Results For <strong class="term-name">'+ data.searchtitles['category'] +'</strong> Listings');
                                } else {
                                    var rstring = jQuery('.lp-title h3').data('rstring');
                                    var lstring = jQuery('.lp-title h3').find('.lstring').text();
                                    if(jQuery('body').hasClass('search')) {
                                        jQuery('.lp-title h3').html(rstring+'<span class="dename"></span><span class="font-bold lstring"> '+lstring+'</span>');
                                    } else {
                                        jQuery('.lp-title h3').find('.font-bold.term-name').text(data.searchtitles['category']);
                                    }
                                }

                            }
                            if(data.searchtitles['location']){
                                document.title = data.searchtitles['location']+' - '+data.searchtitles['website'];
                                if(jQuery('.lp-header-search.archive-search h4.lp-title').length) {
                                    jQuery('.lp-header-search.archive-search h4.lp-title').html('Results In <strong class="term-name">'+ data.searchtitles['location'] +'</strong> Listings');
                                } else {
                                    jQuery('.lp-title h3').html('Results In <span class="font-bold term-name">'+ data.searchtitles['location'] +'</span>');
                                }
                            }

                        }
                        if($countKeys==5){
                            //cat and loc both terms
                            document.title = data.searchtitles['category'] +' ' +data.searchtitles['in']+' '+data.searchtitles['location']+' - '+data.searchtitles['website'];

                            if(jQuery('.lp-header-search.archive-search h4.lp-title').length) {
                                jQuery('.lp-header-search.archive-search h4.lp-title').html('Results For <strong class="term-name">'+ data.searchtitles['category'] +'</strong> ' +data.searchtitles['in']+' <em>'+ data.searchtitles['location'] +'</em>');
                            } else {
                                var rstring = jQuery('.lp-title h3').data('rstring');
                                var lstring = jQuery('.lp-title h3').find('.lstring').text();
                                jQuery('.lp-title h3').html(rstring+'<span class="font-bold lstring"> '+lstring+'</span><span class="dename"> '+data.searchtitles['in']+' '+data.searchtitles['location']+'</span>');
                            }


                        }

                    }
                    jQuery('.outer_all_page_overflow').slideUp();
                    var pars = decode_utf8(data.html);
                    if( new_design_v2 == true )
                    {
                        if( listStyle == 'list' )
                        {
                            listStyle   =   'list-style';
                        }
                        if( listStyle == 'grid' )
                        {
                            listStyle   =   'grid-style';
                        }
                        var parsHtml    =   '<div class="lp-listings '+ listStyle +' active-view"> ' +
                            '<div class="search-filter-response"><div class="lp-listings-inner-wrap">' +
                            pars +
                            '<div class="clearfix"></div>' +
                            '</div> ' +
                            '</div>' +
                            '</div>';

                        jQuery('#content-grids').hide();
                        jQuery('#content-grids').html(parsHtml);
                        
                        if( listStyle == 'grid-style' ){

                           if( jQuery('.lp-sidebar').length != 0 || jQuery('.sidemap-fixed').length != 0 )

                           {

                               jQuery('.lp-listings-inner-wrap .loop-switch-class').removeClass('col-md-12').addClass('col-md-6');

                            }

                            else

                            {

                               jQuery('.lp-listings-inner-wrap .loop-switch-class').removeClass('col-md-12').addClass('col-md-4');

                            }                        
                        }

                        if( listStyle == 'list-style' ){

                           jQuery('.lp-listings-inner-wrap .loop-switch-class').removeClass('col-md-6').addClass('col-md-12');

                        }
                        
                        jQuery('.loop-switch-class:last').find('.lp-listing').addClass('last');

                        //jQuery('#listing_found').html('<p>'+data.found+' '+data.foundtext+'</p>');
                        jQuery('#content-grids').fadeIn('slow');
                        remove_listing_skeletons();
                        //jQuery('#content-grids').removeClass('content-loading');
                        jQuery('.listing-app-view #content-grids').removeClass('content-loading');
                        if( jQuery('.lp-countdown').length != 0 ){
                            jQuery('.lp-countdown').each(function (i, obj) {
                                var selector    =   '#'+jQuery(this).attr('id');
                                init_countdown(selector);
                            })
                        }
                    }
                    else
                    {
                        jQuery('#content-grids').hide();
                        jQuery('#content-grids').html(pars); 
                        
                        //jQuery('#listing_found').html('<p>'+data.found+' '+data.foundtext+'</p>');    
                        jQuery('#content-grids').fadeIn('slow');    
                        remove_listing_skeletons();
                        //jQuery('#content-grids').removeClass('content-loading');      
                        jQuery('.listing-app-view #content-grids').removeClass('content-loading');
                    }


                    var taxonomy = jQuery('section.taxonomy').attr('id');
                    
                        if(taxonomy == 'location'){
                            if(data.cat != ''){
                                var CatName = data.cat;
                                CatName = CatName.replace('&amp;', '&');
                                jQuery('.filter-top-section .lp-title span.term-name').html(CatName+' Listings <span style="font-weight:normal;"> In </span>');
                                jQuery('.filter-top-section .lp-title span.font-bold:last-child').text(data.city);
                                //window.history.pushState("Details", "Title", 'location/'+data.cat);   
                            }
                            
                        }else if(taxonomy == 'listing-category'){
    
                            if(data.cat != ''){
                                var CatName = data.cat;
                                CatName = CatName.replace('&amp;', '&');
                                jQuery('.filter-top-section .lp-title span.term-name').text(CatName);
                                //window.history.pushState("Details", "Title", 'location/'+data.cat);   
                            }else{
                                CatName = '';
                                jQuery('.filter-top-section .lp-title span.term-name').text(CatName);
                            }
                            
                        }else if(taxonomy == 'features'){
                            jQuery('.showbread').show();
                            jQuery('.fst-term').html(data.tags);
                            if(data.keyword != ''){
                                jQuery('.s-term').html(',&nbsp;keyword&nbsp;"'+data.keyword+'"');
                            }else{
                                jQuery('.s-term').html(' ');
                            }
                            if(data.city != ''){
                                if(data.cat != ''){                                 
                                    jQuery('.sec-term').html('&amp;&nbsp;'+data.city);
                                }else{
                                    jQuery('.sec-term').html(data.city);
                                }
                            }else{
                                jQuery('.sec-term').html(' ');
                            }
                            if(data.tags != ''){
                                jQuery('.tag-term').html(',&nbsp;tagged&nbsp;('+data.tags+')');
                            }
                            if(data.tags == null){
                                jQuery('.tag-term').html('');
                            }
                        }
                        
                        
                        else if(taxonomy == 'keyword'){
                            jQuery('.showbread').show();
                            jQuery('.fst-term').html(data.cat);
                            if(data.keyword != ''){
                                jQuery('.s-term').html(',&nbsp;keyword&nbsp;"'+data.keyword+'"');
                            }else{
                                jQuery('.s-term').html(' ');
                            }
                            if(data.city != ''){
                                if(data.cat != ''){                                 
                                    jQuery('.sec-term').html('&amp;&nbsp;'+data.city);
                                }else{
                                    jQuery('.sec-term').html(data.city);
                                }
                            }else{
                                jQuery('.sec-term').html(' ');
                            }
                            
                            if(data.tags != ''){
                                jQuery('.tag-term').html(',&nbsp;tagged&nbsp;('+data.tags+')');
                            }
                            if(data.tags == null){
                                jQuery('.tag-term').html('');
                            }
                        }else{
                            if(data.cat != ''){
                                var CatName = data.cat;
                                CatName = CatName.replace('&amp;', '&');
                                jQuery('.filter-top-section .lp-title span.term-name').text(CatName);
                                //window.history.pushState("Details", "Title", 'location/'+data.cat);   
                            }
                        }

                if (jQuery(this).width() > 781) {

                    jQuery(".all-list-map").trigger('click');

                }

                if( data.found > 0 && jQuery(window).width() < 781  ) {


                    jQuery(".listing-app-view-bar .right-icons .map-view-icon").trigger('click');

                    jQuery(".open-app-view").trigger('click');
                    //jQuery( ".qickpopup" ).trigger('click');

                }
                

                

                jQuery(".v2-map-load .v2mapwrap").trigger('click');
                
                
                     
                    
            }
            
/* for find near me filter */

/* radiou filter code starts */
jQuery(document).ready(function() {
    
    jQuery(document).on('click', '#distance_range_div', function(){
            jQuery( '#pac-input' ).attr( 'data-zoom', '' );
            listingproc_update_results();
    });

    jQuery(document).on('input', '#distance_range_div .slider', function(){
            jQuery( '#pac-input' ).attr( 'data-zoom', '' );
            listingproc_update_results();
    });

});


function listingproc_update_results() {
    $selectedFields = [];
    jQuery('.lp_extrafields_select :checked').each(function(i, selectedElement) {
        keyValuePair = {};
        keyValuePair[jQuery(selectedElement).data('key')] = jQuery(selectedElement).val();
        $selectedFields.push(keyValuePair);
    });
    
       var new_design_v2    =    false;
       var listStyle    =   '';
       if( jQuery('#list-grid-view-v2').length != 0 )
       {
           if( jQuery('#list-grid-view-v2').hasClass('list_view_v2') || jQuery('#list-grid-view-v2').hasClass('grid_view_v2') )
           {
               new_design_v2    =    true;
               listStyle           =   get_list_style();
           }

       }
    var docHeight = jQuery( document ).height();
    jQuery( "body" ).prepend( '<div id="full-overlay"></div>' );
    jQuery('#full-overlay').css('height',docHeight+'px');
    jQuery('#content-grids').html(' ');
    jQuery('.solitaire-infinite-scroll').remove();
    //jQuery('#content-grids').addClass('content-loading');
    add_listing_skeletons();
    jQuery('.map-view-list-container').remove();
    jQuery('.lp-filter-pagination-ajx').remove();
    var inexpensive='';
    moderate = '';
    pricey = '';
    ultra = '';
    averageRate = '';
    mostRewvied = '';
    listing_openTime = '';
    mostViewed = '';

    inexpensive = jQuery('.currency-signs #one').find('.active').data('price');
    moderate = jQuery('.currency-signs #two').find('.active').data('price');
    pricey = jQuery('.currency-signs #three').find('.active').data('price');
    ultra = jQuery('.currency-signs #four').find('.active').data('price');
    
    skeyword = jQuery('input#lp_current_query').val();
    
    averageRate = jQuery('.search-filters li#listingRate').find('.active').data('value');
    mostRewvied = jQuery('.search-filters li#listingReviewed').find('.active').data('value');
    listing_openTime = jQuery('.search-filters li.listing_openTime').find('.active').data('time');
    
    var clatval = jQuery('#searchform input[name=clat]').val();
    var clongval = jQuery('#searchform input[name=clong]').val();

    if(clatval && clongval){
    }else{
        clatval =  jQuery("#pac-input").attr( 'data-lat' );
        clongval = jQuery("#pac-input").attr( 'data-lng' );
    }

    var tags_name = [];
    tags_name = jQuery('.tags-area input[type=checkbox]:checked').map(function(){
        return jQuery(this).val();
    }).get();
    
    if(tags_name.length > 0){
    }else{
            if (jQuery('#check_featuretax').length > 0) {
                tags_name.push(jQuery('#check_featuretax').val());
            }
        }
    
    seracLoc = jQuery("#lp_search_loc").val();
    if(check_if_loc_disabled_fornearme()){
        seracLoc = '';
    }
    
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajax_search_term_object.ajaxurl,
        data: {
            'action': 'ajax_search_tags',
            'formfields': $selectedFields,
            'lpstag': jQuery("#lpstag").val(),
            'cat_id': jQuery("#searchform select#searchcategory").val(),
            'loc_id': seracLoc,
            'sloc_address' : jQuery("#pac-input").val(),
            'clat'  : clatval,
            'clong'     : clongval,
            'my_bounds_ne_lat'  : jQuery("#pac-input").attr( 'data-ne-lat' ),
            'my_bounds_ne_lng'  : jQuery("#pac-input").attr( 'data-ne-lng' ),
            'my_bounds_sw_lat'  : jQuery("#pac-input").attr( 'data-sw-lat' ),
            'my_bounds_sw_lng'  : jQuery("#pac-input").attr( 'data-sw-lng' ),
            'data_zoom'     : jQuery( '#pac-input' ).attr( 'data-zoom'),
            'distance_range'    : jQuery("#distance_range").val(),
            'skeyword': skeyword,
            'inexpensive':inexpensive,
            'moderate':moderate,
            'pricey':pricey,
            'ultra':ultra,
            'averageRate':averageRate,
            'mostRewvied':mostRewvied,
            'listing_openTime':listing_openTime,
            'tag_name':tags_name,
            'list_style': listStyle,
            'lpNonce' : jQuery('#lpNonce').val()
        },
        success: function(data){
            jQuery('#full-overlay').remove();
            if(data){
                listing_update(data, new_design_v2, listStyle);
                lp_append_distance_div();
                remove_listing_skeletons();
                if (jQuery('.grid').hasClass('active')) {
                    jQuery('.grid').trigger('click');
                }
                else if(jQuery('.list').hasClass('active')){
                    jQuery('.list').trigger('click');
                }
            }
        }
    });
}


function initialize() {
    if( jQuery('#pac-input').length ){
        var input = document.getElementById('pac-input');
        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.addListener('place_changed', function () {
            var place = autocomplete.getPlace();

            jQuery( '#pac-input' ).attr( 'data-zoom', '' );

            var loc_lat     = place.geometry.location.lat();
            var loc_lng     = place.geometry.location.lng();

            jQuery( '#pac-input' ).attr( 'data-lat', loc_lat );
            jQuery( '#pac-input' ).attr( 'data-lng', loc_lng );

            jQuery( '#pac-input' ).attr( 'data-center-lat', place.geometry.viewport.getCenter().lat() );
            jQuery( '#pac-input' ).attr( 'data-center-lng', place.geometry.viewport.getCenter().lng() );

            jQuery( '#pac-input' ).attr( 'data-ne-lat', place.geometry.viewport.getNorthEast().lat() );
            jQuery( '#pac-input' ).attr( 'data-ne-lng', place.geometry.viewport.getNorthEast().lng() );
            jQuery( '#pac-input' ).attr( 'data-sw-lat', place.geometry.viewport.getSouthWest().lat() );
            jQuery( '#pac-input' ).attr( 'data-sw-lng', place.geometry.viewport.getSouthWest().lng() );

            listingproc_update_results();
        });
    }
}


function listingproc_get_radius( center_lat, center_lng, ne_lat, ne_lng ){

    // r = radius of the earth in statute miles
    var r = 6371.0;

    // Convert lat or lng from decimal degrees into radians (divide by 57.2958)
    var lat1 = center_lat / 57.2958;
    var lon1 = center_lng / 57.2958;
    var lat2 = ne_lat / 57.2958;
    var lon2 = ne_lng / 57.2958;

    // distance = circle radius from center to Northeast corner of bounds
    return r * Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1));

}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( initMap );
    }
}// getLocation


function initMap( position ) {
    var geocoder = new google.maps.Geocoder();
    geocodeLatLng( geocoder, position.coords.latitude, position.coords.longitude );
}// initMap


function geocodeLatLng( geocoder, lat, lng ) {
    var latlng      = {lat : lat, lng : lng};
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[1]) {

                jQuery( '#pac-input' ).attr( 'data-zoom', '' );

                jQuery( '#pac-input' ).val( results[1].formatted_address );
                jQuery( '#pac-input' ).attr( 'data-lat', lat );
                jQuery( '#pac-input' ).attr( 'data-lng', lng );
                listingproc_update_results();
      }
    }
  });
}// geocodeLatLng


function listingproc_update_markers( map ){
    map.on( 'zoomend dragend', function(){

        var bounds  = map.getBounds();
        window.bounds   = bounds;

        console.log(window.bounds);

        //jQuery( '#pac-input' ).val('');

        jQuery( '#pac-input' ).attr( 'data-zoom', 'yes' );

        jQuery( '#pac-input' ).attr( 'data-ne-lat', bounds._northEast.lat );
        jQuery( '#pac-input' ).attr( 'data-ne-lng', bounds._northEast.lng );
        jQuery( '#pac-input' ).attr( 'data-sw-lat', bounds._southWest.lat );
        jQuery( '#pac-input' ).attr( 'data-sw-lng', bounds._southWest.lng );

        listingproc_update_results();
    });
}// listingproc_update_markers


var hasOwnProperty = Object.prototype.hasOwnProperty;
function listingproc_isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}// listingproc_isEmpty

/* radiou filter code ends */

/* new radius code  */
jQuery(document).ready(function($){
    jQuery('.lp-radus-filter-wrap li.lp-tooltip-outer .lp-distancesearchbtn').on('click', function(){
        $this = jQuery(this);
        $this.toggleClass('active');
        if($this.hasClass('active')){
            if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(showPositionn);
            } else { 
                alert("Geolocation is not supported by this browser.");
            }
            function showPositionn(position) {
                var loc_lat = position.coords.latitude;
                var loc_lng = position.coords.longitude;
                
                var myLatlng = new google.maps.LatLng(loc_lat, loc_lng);
                var mapProp = {
                    center: myLatlng,
                    zoom: 8,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(document.getElementById("lp-hidden-map"), mapProp);
                var viewportBox;
                google.maps.event.addListener(map, 'idle', function(event) {
                    var bounds = map.getBounds();
                    var ne = bounds.getNorthEast();
                    var sw = bounds.getSouthWest();
                    
                    var viewportPoints = [
                        ne, new google.maps.LatLng(ne.lat(), sw.lng()),
                        sw, new google.maps.LatLng(sw.lat(), ne.lng()), ne
                    ];
                    if (viewportBox) {
                        viewportBox.setPath(viewportPoints);
                    } else {
                        viewportBox = new google.maps.Polyline({
                            path: viewportPoints,
                            strokeColor: '#FF0000',
                            strokeOpacity: 1.0,
                            strokeWeight: 4 
                        });
                        viewportBox.setMap(map);
                    };

                    
                    var geocoder = geocoder = new google.maps.Geocoder();
                    var faddress;
                    geocoder.geocode({ 'latLng': myLatlng }, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[1]) {
                                faddress = results[1].formatted_address;
                                
                                jQuery( '#pac-input' ).val(faddress );
                                
                                jQuery( '#pac-input' ).attr( 'data-lat', loc_lat );
                                jQuery( '#pac-input' ).attr( 'data-lng', loc_lng );

                                jQuery( '#pac-input' ).attr( 'data-ne-lat', ne.lat() );
                                jQuery( '#pac-input' ).attr( 'data-ne-lng', ne.lng() );
                                jQuery( '#pac-input' ).attr( 'data-sw-lat', sw.lat() );
                                jQuery( '#pac-input' ).attr( 'data-sw-lng', sw.lng() );

                                listingproc_update_results();
                            }
                        }
                    });
                });
                
            }
        }else{
            jQuery( '#pac-input' ).val('' );
                            
            jQuery( '#pac-input' ).attr( 'data-lat', '' );
            jQuery( '#pac-input' ).attr( 'data-lng', '' );

            jQuery( '#pac-input' ).attr( 'data-center-lat', '' );
            jQuery( '#pac-input' ).attr( 'data-center-lng', '' );

            jQuery( '#pac-input' ).attr( 'data-ne-lat', '' );
            jQuery( '#pac-input' ).attr( 'data-ne-lng', '' );
            jQuery( '#pac-input' ).attr( 'data-sw-lat', '' );
            jQuery( '#pac-input' ).attr( 'data-sw-lng', '' );
            jQuery( '#distance_range' ).val( '');

            listingproc_update_results();
        }

    });
    
    /* for search on inner pages */
    jQuery('input.lp-suggested-search').on('input', function(){
        jQuery('input#lp_s_cat').val('');
        jQuery('input#lp_s_tag').val('');
    });
});
/* end new radius code  */




function get_list_style()
{
    var returnval = 'list';
    if( jQuery('.lp-listings.grid-style').hasClass('active-view') )
    {
        returnval   =   'grid';
    }
    return returnval;
}

function get_filters_before_send()
{
    var docHeight = jQuery( document ).height();
    jQuery( "body" ).prepend( '<div id="full-overlay"></div>' );
    jQuery('#full-overlay').css('height',docHeight+'px');
    jQuery('.lp-filter-pagination').hide();
    if( jQuery('.search-filter-response').length != 0 )
    {
        jQuery('.search-filter-response').html(' ');
        //jQuery('.search-filter-response').addClass('content-loading');
        add_listing_skeletons();
    }
    else
    {
        jQuery('#content-grids').html(' ');
        //jQuery('#content-grids').addClass('content-loading');
        add_listing_skeletons();
    }


    jQuery('.lp-filter-pagination-ajx').remove();
    jQuery('.map-view-list-container').remove();

}

function add_listing_skeletons(){
    var $listStyle           =   get_list_style();
    if(jQuery('body').hasClass('listing-skeleton-view-list_view')){
        jQuery('#content-grids').addClass('content-loading-listing-skeleton-view-list_view');
    }else if(jQuery('body').hasClass('listing-skeleton-view-grid_view')){
        jQuery('#content-grids').addClass('content-loading-listing-skeleton-view-grid_view');
    }else if(jQuery('body').hasClass('listing-skeleton-view-grid_view2')){
        jQuery('#content-grids').addClass('content-loading-listing-skeleton-view-grid_view2');
    }else if(jQuery('body').hasClass('listing-skeleton-view-grid_view3')){
        jQuery('#content-grids').addClass('content-loading-listing-skeleton-view-grid_view3');
    }else if(jQuery('body').hasClass('listing-skeleton-view-grid_view_v2')){
        jQuery('#content-grids').addClass('content-loading-listing-skeleton-view-grid_view_v2');
    }else if(jQuery('body').hasClass('listing-skeleton-view-grid_view_v3')){
        jQuery('#content-grids').addClass('content-loading-listing-skeleton-view-grid_view_v3');
    }else if(jQuery('body').hasClass('listing-skeleton-view-list_view_v2')){
        if($listStyle == 'list') {
            jQuery('#content-grids').addClass('content-loading-listing-skeleton-view-list_view_v2');
        }else{
            jQuery('#content-grids').addClass('content-loading-listing-skeleton-view-grid_view_v2');
        }
    }else if(jQuery('body').hasClass('listing-skeleton-view-lp-list-view-compact')){
        jQuery('#content-grids').addClass('content-loading-listing-skeleton-view-lp-list-view-compact');
    }
}

function remove_listing_skeletons(){
    var $listStyle           =   get_list_style();
    if(jQuery('body').hasClass('listing-skeleton-view-list_view')){
        jQuery('#content-grids').removeClass('content-loading-listing-skeleton-view-list_view');
    }else if(jQuery('body').hasClass('listing-skeleton-view-grid_view')){
        jQuery('#content-grids').removeClass('content-loading-listing-skeleton-view-grid_view');
    }else if(jQuery('body').hasClass('listing-skeleton-view-grid_view2')){
        jQuery('#content-grids').removeClass('content-loading-listing-skeleton-view-grid_view2');
    }else if(jQuery('body').hasClass('listing-skeleton-view-grid_view3')){
        jQuery('#content-grids').removeClass('content-loading-listing-skeleton-view-grid_view3');
    }else if(jQuery('body').hasClass('listing-skeleton-view-grid_view_v2')){
        jQuery('#content-grids').removeClass('content-loading-listing-skeleton-view-grid_view_v2');
    }else if(jQuery('body').hasClass('listing-skeleton-view-grid_view_v3')){
        jQuery('#content-grids').removeClass('content-loading-listing-skeleton-view-grid_view_v3');
    }else if(jQuery('body').hasClass('listing-skeleton-view-list_view_v2')){
        if($listStyle == 'list') {
            jQuery('#content-grids').removeClass('content-loading-listing-skeleton-view-list_view_v2');
        }else{
            jQuery('#content-grids').removeClass('content-loading-listing-skeleton-view-grid_view_v2');
        }
    }else if(jQuery('body').hasClass('listing-skeleton-view-lp-list-view-compact')){
        jQuery('#content-grids').removeClass('content-loading-listing-skeleton-view-lp-list-view-compact');
    }
}

function get_filter_RRV( selector )
{
    var $this   =   jQuery( selector );
    if( $this.hasClass('active') )
    {
        return  $this.data('value');
    }
    else
    {
        jQuery('ul#select-lp-more-filter li').find('a').removeClass('active');
        return  '';
    }
}

function get_open_now_val( selector )
{
    var $this       =   jQuery( selector ),
        returnval   =   '';

    if( $this.hasClass('active') )
    {
        returnval = 'open';
    }

    return returnval;
}

function get_price_range_vals( selector )
{
    var $this   =   jQuery( selector );
    if( $this.hasClass('active') )
    {
        return  $this.data('price');
    }
    else
    {
        return  '';
    }
}

jQuery(document).ready(function(){
    jQuery('.outer_filter_show_result_cancel #filter_result').on('click', function(){
        jQuery('.outer_all_page_overflow').hide(300);
    });
});

/* for excluding location if on from theme option */
function check_if_loc_disabled_fornearme(){
    if( jQuery('body').data('locdisablefilter')=='yes' ){
        if(jQuery('.near-me-btn').hasClass('active')){
            return true;
        }else{
            return false;
        }
        
    }else{
        return false;
    }
}

jQuery(document).on('click', '.lp-open-search-btn-icon', function(event) {
        var myDropDown = jQuery("#input-dropdown");
        myDropDown.attr('size', length);
        myDropDown.css('display', 'block');
        myDropDown.css('overflow-y', 'hidden');
        if( jQuery('.lp-home-banner-contianer-inner').length )
        {
            if( jQuery('.lp-home-banner-contianer-inner').hasClass('app-view2-header-animate') )
            {
                jQuery('.listing-app-view.listing-app-view-new .app-view-header .lp-home-banner-contianer').addClass('home-banner-animated');
                jQuery('.listing-app-view.listing-app-view-new section').hide();
                jQuery('.listing-app-view.listing-app-view-new .app-view2-banner-cat-slider').hide();
            }
        }
        myDropDown.niceScroll({
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