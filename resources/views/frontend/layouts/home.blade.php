<!doctype html>
<html lang="{{ $lang }}">
<head>
    <meta charset="utf-8">
    <meta name="description" content="Gtubu"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <script src="/frontend/js/lang/{{$lang}}.js"></script>
    <link rel="shortcut icon" href="/images/logo.ico"/>

    <link rel='stylesheet' id='wp-block-library-css'  href='/frontend/css/style.min.css' type='text/css' media='all' />
    <link rel='stylesheet' id='bootstrap-css'  href='/frontend/css/bootstrap.min.css' type='text/css' media='all' />
    <link rel='stylesheet' id='Magnific-Popup-css'  href='/frontend/css/magnific-popup.css' type='text/css' media='all' />
    <link rel='stylesheet' id='popup-component-css'  href='/frontend/css/component.css' type='text/css' media='all' />
    <link rel='stylesheet' id='Font-awesome-css'  href='/frontend/font/font-awesome.min.css' type='text/css' media='all' />
    <link rel='stylesheet' id='Mmenu-css'  href='/frontend/css/jquery.mmenu.all.css' type='text/css' media='all' />
    <link rel='stylesheet' id='MapBox-css'  href='/frontend/css/mapbox.css' type='text/css' media='all' />
    <link rel='stylesheet' id='Chosen-css'  href='/frontend/css/chosen.css' type='text/css' media='all' />
    <link rel='stylesheet' id='bootstrap-datetimepicker-css-css'  href='/frontend/css/bootstrap-datetimepicker.min.css' type='text/css' media='all' />
    <link rel='stylesheet' id='Slick-css-css'  href='/frontend/css/slick.css' type='text/css' media='all' />
    <link rel='stylesheet' id='Slick-theme-css'  href='/frontend/css/slick-theme.css' type='text/css' media='all' />
    <link rel='stylesheet' id='jquery-ui-css'  href='/frontend/css/jquery-ui.css' type='text/css' media='all' />
    <link rel='stylesheet' id='css-prettyphoto-css'  href='/frontend/css/prettyphoto.css' type='text/css' media='all' />
    <link rel='stylesheet' id='icon8-css'  href='/frontend/css/styles.min.css' type='text/css' media='all' />
    <link rel='stylesheet' id='Color-css'  href='/frontend/css/colors.css' type='text/css' media='all' />
    <link rel='stylesheet' id='custom-font-css'  href='/frontend/css/font.css' type='text/css' media='all' />
    <link rel='stylesheet' id='Main-css'  href='/frontend/css/main.css' type='text/css' media='all' />
    <link rel='stylesheet' id='Responsive-css'  href='/frontend/css/responsive.css' type='text/css' media='all' />
    <link rel='stylesheet' id='select2-css'  href='/frontend/css/select2.css' type='text/css' media='all' />
    <link rel='stylesheet' id='dynamiclocation-css'  href='/frontend/css/city-autocomplete.css' type='text/css' media='all' />
    <link rel='stylesheet' id='lp-body-overlay-css'  href='/frontend/css/common.loading.css' type='text/css' media='all' />
    <link rel='stylesheet' id='bootstrapslider-css'  href='/frontend/css/bootstrap-slider.css' type='text/css' media='all' />
    <link rel='stylesheet' id='mourisjs-css'  href='/frontend/css/morris.css' type='text/css' media='all' />
    <link rel='stylesheet' id='listingpro-css'  href='/frontend/css/style.css' type='text/css' media='all' />
    <link rel='stylesheet' id='font-rock-salt-css'  href='https://fonts.googleapis.com/css?family=Rock+Salt' type='text/css' media='all' />
    <link rel='stylesheet' id='font-quicksand-css'  href='https://fonts.googleapis.com/css?family=Quicksand' type='text/css' media='all' />
    <link rel='stylesheet' id='version2-countdown-css'  href='/frontend/css/flipclock.css' type='text/css' media='all' />
    <link rel='stylesheet' id='version2-styles-css'  href='/frontend/css/main-new.css' type='text/css' media='all' />
    <link rel='stylesheet' id='version2-colors-css'  href='/frontend/css/colors-new.css' type='text/css' media='all' />
    <link rel='stylesheet' id='js_composer_front-css'  href='/frontend/css/js_composer.min.css' type='text/css' media='all' />
    <link rel='stylesheet' id='LP_dynamic_php_css-css'  href='/frontend/css/dynamic-css.php.css' type='text/css' media='all' />
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700%7COpen%20Sans:300,400,600,700,800,300italic,400italic,600italic,700italic,800italic&#038;subset=latin&#038;display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700%7COpen%20Sans:300,400,600,700,800,300italic,400italic,600italic,700italic,800italic&#038;subset=latin&#038;display=swap" media="print" onload="this.media='all'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700%7COpen%20Sans:300,400,600,700,800,300italic,400italic,600italic,700italic,800italic&#038;subset=latin&#038;display=swap" /></noscript>
    <link rel='stylesheet' href='/frontend/css/dropzone.basic.css' type='text/css' media='dropzone.basic' />
    <link rel='stylesheet' href='/frontend/css/dropzone.css' type='text/css' media='dropzone' />
    <link rel='stylesheet' href='/frontend/css/custom.css' type='text/css' media='all' />

    <script type="text/javascript">(function(a,d){if(a._nsl===d){a._nsl=[];var c=function(){if(a.jQuery===d)setTimeout(c,33);else{for(var b=0;b<a._nsl.length;b++)a._nsl[b].call(a,a.jQuery);a._nsl={push:function(b){b.call(a,a.jQuery)}}}};c()}})(window);</script>
    <script type='text/javascript' src='/frontend/js/jquery.js' id='jquery-core-js'></script>
    <script type='text/javascript' id='ajax-script-js-extra'>
    /* <![CDATA[ */
    var ajax_login_object = {"ajaxurl":"/login","redirecturl":"/ads","loadingmessage":"<span class=\"alert alert-info\">Please wait...<i class=\"fa fa-spinner fa-spin\"><\/i><\/span>"};
    var ajax_search_term_object = {"ajaxurl":"/listing"};
    /* ]]> */
    </script>
    <script type='text/javascript' src='/frontend/js/login.js' id='ajax-login-script-js'></script>
    <script type='text/javascript' src='/frontend/js/needlogin-ajax.js' id='ajax-login-script-js'></script>
    <script type='text/javascript' src='/frontend/js/checkout.js' id='stripejs-js'></script>
    <script type='text/javascript' src='https://maps.googleapis.com/maps/api/js?key={{config("app.google_map_api")}}&libraries=places' id='mapsjs-js'></script>
    <script type='text/javascript' src='/frontend/js/raphael-min.js' id='raphelmin-js'></script>
    <script type='text/javascript' src='/frontend/js/morris.js' id='morisjs-js'></script>
    
    <script src="/metronic/plugins/custom/tinymce/tinymce.bundle.js"></script>
    <script src="/frontend/js/dropzone.js"></script>
    
    <script type='text/javascript' src='/frontend/js/common.js' id='ajax-term-script-js'></script>
</head>
@inject('dateFormat', 'App\Services\DateService')
@yield('content')
<script type='text/javascript' src='/frontend/js/submit-listing.js' id='listingpro-submit-listing-js'></script>
<script type='text/javascript' src='/frontend/js/auto-places.js' id='lpAutoPlaces-js'></script>
<script type='text/javascript' src='/frontend/js/home-map.js' id='Mapbox-js'></script>
<script type='text/javascript' src='/frontend/js/mapbox.js' id='Mapbox-js'></script>
<script type='text/javascript' src='/frontend/js/leaflet.markercluster.js' id='Mapbox-leaflet-js'></script>
<script type='text/javascript' src='/frontend/js/chosen.jquery.js' id='Chosen-js'></script>
<script type='text/javascript' src='/frontend/js/bootstrap.min.js' id='bootstrap-js'></script>
<script type='text/javascript' src='/frontend/js/jquery.mmenu.min.all.js' id='Mmenu-js'></script>
<script type='text/javascript' src='/frontend/js/jquery.magnific-popup.min.js' id='magnific-popup-js'></script>
<script type='text/javascript' src='/frontend/js/select2.full.min.js' id='select2-js'></script>
<script type='text/javascript' src='/frontend/js/classie.js' id='popup-classie-js'></script>
<script type='text/javascript' src='/frontend/js/modalEffects.js' id='modalEffects-js'></script>
<script type='text/javascript' src='/frontend/js/2co.min.js' id='2checkout-js'></script>
<script type='text/javascript' src='/frontend/js/moment.js' id='bootstrap-moment-js'></script>
<script type='text/javascript' src='/frontend/js/bootstrap-datetimepicker.min.js' id='bootstrap-datetimepicker-js'></script>
<!--[if lt IE 9]>
<script type='text/javascript' src='https://html5shim.googlecode.com/svn/trunk/html5.js' id='html5shim-js'></script>
<![endif]-->
<script type='text/javascript' src='/frontend/js/jquery.nicescroll.min.js' id='nicescroll-js'></script>
<script type='text/javascript' src='/frontend/js/chosen.jquery.min.js' id='chosen-jquery-js'></script>
<script type='text/javascript' src='/frontend/js/jquery-ui.js' id='jquery-ui-js'></script>
<script type='text/javascript' src='/frontend/js/drop-pin.js' id='droppin-js'></script>
<script type='text/javascript' src='/frontend/js/slick.min.js' id='Slick-js'></script>
<script type='text/javascript' src='/frontend/js/jquery.city-autocomplete.js' id='dyn-location-js-js'></script>
<script type='text/javascript' src='/frontend/js/bootstrap-slider.js' id='bootstrapsliderjs-js'></script>
<script type='text/javascript' src='/frontend/js/lp-iconcolor.js' id='lp-icons-colors-js'></script>
<script type='text/javascript' src='/frontend/js/lp-gps.js' id='lp-current-loc-js'></script>
<script type='text/javascript' src='/frontend/js/pricing.js' id='Pricing-js'></script>
<script type='text/javascript' src='/frontend/js/main.js' id='Main-js'></script>
<script type='text/javascript' src='/frontend/js/flipclock.min.js' id='version-countdown-js-js'></script>
<script type='text/javascript' src='/frontend/js/main-new.js' id='Main-Version2-js'></script>
<script type='text/javascript' src='/frontend/js/wp-embed.min.js' id='wp-embed-js'></script>

</html>