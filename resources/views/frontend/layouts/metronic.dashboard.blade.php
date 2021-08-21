<!doctype html>
<html lang="{{ $lang }}">
<head>
    <meta charset="utf-8">
    <meta name="description" content="MiHUB OLT"/>
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

    <link rel='stylesheet' id='buttons-css'  href='/frontend/css/buttons.min.css' type='text/css' media='all' />
    <link rel='stylesheet' id='mediaelement-css'  href='/frontend/css/mediaelementplayer-legacy.min.css' type='text/css' media='all' />
    <link rel='stylesheet' id='wp-mediaelement-css'  href='/frontend/css/wp-mediaelement.min.css' type='text/css' media='all' />
    <link rel='stylesheet' id='media-views-css'  href='/frontend/css/media-views.min.css' type='text/css' media='all' />
    <link rel='stylesheet' id='imgareaselect-css'  href='/frontend/css/imgareaselect.css' type='text/css' media='all' />
    
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
    var ajax_search_term_object = {"ajaxurl":"/listing"};
    /* ]]> */
    </script>
    <script type='text/javascript' src='/frontend/js/search-ajax.js' id='search-ajax-script-js'></script>
    <script type='text/javascript' src='/frontend/js/checkout.js' id='stripejs-js'></script>
    <script type='text/javascript' src='https://maps.googleapis.com/maps/api/js?key={{config("app.google_map_api")}}&libraries=places' id='mapsjs-js'></script>
    <script type='text/javascript' src='/frontend/js/raphael-min.js' id='raphelmin-js'></script>
    <script type='text/javascript' src='/frontend/js/morris.js' id='morisjs-js'></script>
    <script type='text/javascript' src='/frontend/js/utils.min.js' id='utils-js'></script>
    <script type='text/javascript' src='/frontend/js/moxie.min.js' id='moxiejs-js'></script>
    <script type='text/javascript' src='/frontend/js/plupload.min.js' id='plupload-js'></script>
    <!--[if lt IE 8]>
    <script type='text/javascript' src='/frontend/js/json2.min.js' id='json2-js'></script>
    <![endif]-->
    <script src="/metronic/plugins/custom/tinymce/tinymce.bundle.js"></script>
    <script src="/frontend/js/dropzone.js"></script>

    <script type='text/javascript' src='/frontend/js/frontend.js' id='frontend-js-js'></script>
    <script type='text/javascript' src='/frontend/js/common.js' id='common-script-js'></script>    
</head>
@inject('dateFormat', 'App\Services\DateService')
<body class="page-template page-template-template-dashboard page-template-template-dashboard-php page page-id-96 logged-in admin-bar no-customize-support listing-skeleton-view-grid_view wpb-js-composer js-comp-ver-6.4.1 vc_responsive" data-submitlink="/ads" data-sliderstyle="style2" data-defaultmaplat="0" data-defaultmaplot="-0" data-lpsearchmode="keyword" data-maplistingby="geolocaion" >
	<input type="hidden" id="lpNonce" name="lpNonce" value="11a180ea92" />
    <input type="hidden" name="_wp_http_referer" value="/" />    
    <input type="hidden" id="start_of_weekk" value="1">
	<div id="page" data-detail-page-style="lp_detail_page_styles1" data-lpattern="with_region" data-sitelogo="/images/logo.png" data-site-url="/" data-ipapi="ip_api" data-lpcurrentloconhome="1" data-mtoken="0" data-mtype="openstreet" data-mstyle="mapbox.streets-basic" class="clearfix lp_detail_page_styles1 mm-page mm-slideout">
        <div class="pos-relative header-inner-page-wrap">
            <div class="header-container  3">                    
                <div class="modal fade lp-modal-list" id="modal-invoice">
                    <div class="modal-content">                        
                        <div class="modal-body">Content is loading...</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-white" data-dismiss="modal">Close</button>
                            <a href="#" class="lp-print-list btn-first-hover">Print</a>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="modal-packages" role="dialog">
					<div class="modal-dialog  lp-change-plan-popup">
					  <!-- Modal content-->
					  <div class="modal-content">
						<div class="modal-body">
							<div class="lp-loadingPlans" data-default="Loading..."><p></p></div>
						</div>
					  </div>
					</div>
				</div>
                <!-- ../Login Popup -->
                <div class="md-overlay"></div> <!-- Overlay for Popup -->

                <!-- top notificaton bar -->
                <div class="lp-top-notification-bar"></div>
                <!-- end top notification-bar -->	

                <!-- popup for quick view --->		
                <div class="md-modal md-effect-3" id="listing-preview-popup">
                    <div class="container">
                        <div class="md-content ">
                            <div class="row popup-inner-left-padding ">
                            </div>
                        </div>
                    </div>
                    <a class="md-close widget-map-click"><i class="fa fa-close"></i></a>
                </div>
                <div class="md-overlay content-loading"></div>
                <div class="md-modal md-effect-map-btn" id="grid-show-popup">
                    <div class="container">
                        <div class="md-content ">
                            <div class="row grid-show-popup" data-loader="/images/classic/content-loader.gif">
                                <img src="/images/classic/content-loader.gif" />
                            </div>
                        </div>
                    </div>
                    <a class="md-close widget-map-click"><i class="fa fa-close"></i></a>
                </div>
                <!--hidden google map-->
                <div id="lp-hidden-map" style="width:300px;height:300px;position:absolute;left:-300000px"></div>
                <div class="page-heading listing-page" style=" ">
					<div class="page-heading-inner-container text-center">
						<h1>Dashboard</h1>
						<ul class="breadcrumbs">
                            <li><a href="/">Home</a></li>
                            <li><span>Dashboard</span></li>
                        </ul>
                    </div>
					<div class="page-header-overlay"></div>
				</div>
            </div>
        </div>
        
        <input type="hidden" id="datepicker-lang" value="es_ES">
        <div class="modal fade lp-modal-content-image-outer" id="imagemodal" tabindex="-1" role="dialog">
            <div class="modal-dialog  lp-modal-content-image">
                <div class="modal-content">
                    <div class="modal-body">
                        <span data-dismiss="modal"><i class="fa fa-times" aria-hidden="true"></i></span>
                        <img src="" id="imagepreview" class="imagepreview" >
                    </div>
                </div>
            </div>
        </div>
        <section class="aliceblue">
            <div class="clearfix"></div>
            <div id="wrapper" class="active lp-dashboard-new clearfix lp-dashboard-new-active">		 
                <div id="sidebar-wrapper">
                    <div id="sidebar_menu" class="sidebar-nav">
                        <div class="sidebar-brand clearfix">
                            <a href="/">
                                <img src="/images/logo.png" alt="image" />	
                            </a>							
                            <a id="menu-toggle" href="#">
                                <span id="main_icon" class="glyphicon glyphicon-align-justify"></span>
                            </a>							
						</div>
				    </div>
				    <ul class="sidebar-nav clearfix" id="sidebar"> 
                        <li>
                            <a class="{{Request::is('ads')?'active-dash-menu':''}}" href="/ads"><span class="sub_icon sub_iconfirst"><i class="fa fa-microphone" aria-hidden="true"></i></span> Announcements <span class="sub_icon sub_iconsecond simptip-position-right simptip-movable" data-tooltip="Announcements"> <i class="fa fa-microphone" aria-hidden="true"></i></span></a> 
                        </li>
                        <li>
                            <a class="{{Request::is('credit')?'active-dash-menu':''}}" href="/credit">
                                <span class="sub_icon sub_iconfirst"><i class="fa fa-gift"></i></span> Mi Crédito <span class="sub_icon sub_iconsecond simptip-position-right simptip-movable" data-tooltip="Events"> <i class="fa fa-calendar" aria-hidden="true"></i></span>								   
                            </a>
                        </li>
                        @if(Auth::user()->validate>0)				
                        <li>
                            <a class="{{Request::is('profile')?'active-dash-menu':''}}" href="/profile">
                                <span class="sub_icon sub_iconfirst"><i class="fa fa-user-circle"></i></span> Mi perfil <span class="sub_icon sub_iconsecond simptip-position-right simptip-movable" data-tooltip="Events"> <i class="fa fa-calendar" aria-hidden="true"></i></span>								   
                            </a>
                        </li>
                        @endif
                        <li>
                            <a class="" href="/logout"><span class="sub_icon sub_iconfirst"><i class="fa fa-lock" aria-hidden="true"></i></span> Logout <span class="sub_icon sub_iconsecond simptip-position-right simptip-movable" data-tooltip="Announcements"> <i class="fa fa-microphone" aria-hidden="true"></i></span></a> 
                        </li>
                    </ul>
                </div>			  			
                <div id="page-content-wrapper">
                    <input type="hidden" id="select2-ajax-noresutls" value="No results found">
                    <input type="hidden" id="select2-ajax-tooshort" value="Please enter 3 or more characters">
                    <input type="hidden" id="select2-ajax-searching" value="Searching...">
                    
                    <div class="page-content inset dashboard-content">
                        <div class="lp-user-header clearfix">		
                            @if(Auth::id())				
                            <div class="pull-right lp-section-app-head-area">
                                <div class="lp-user-meta">
                                    <ul class="clearfix">
                                        <li>
                                            <p>{{Auth::user()->friendlyName}}</p>
                                        </li>
                                        <li>
                                            <div class="user-meta-image ">
                                                <a href=""><img src="{{Auth::user()->avatar==null?'/images/default-avatar.png':'/v1/api/downloadFile?path='.Auth::user()->avatar}}"></a>
                                            </div>									
								        </li>
                                        @if(Auth::user()->validate>0)
                                        <li>
                                            <div class="lp-user-header-details lp-dot-extra-buttons">
                                                <a href="javascript:void();"><i class="fa fa-bars" aria-hidden="true"></i></a>
                                                <ul class="lp-user-menu list-style-none">
                                                    <li>
                                                        <a href="/profile"> <i class="fa fa-user-circle"></i> Mi Perfil </a>
                                                    </li>
                                                    <li>
                                                        <a href="/logout">
                                                            <span><i class="fa fa-lock" aria-hidden="true"></i>Logout</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        @endif
                                    </ul>
                                </div>
                            </div>
                            @endif
                            <!--div class="lp-contact-support-outer pull-right">
                                <a target="_blank" href="#" >
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    Contact Support
                                </a>
                            </div>
                            <div class="lp-contact-support-outer pull-right">
                                @if(Auth::id())
                                <a href="/ads"><i class="fa fa-plus"></i>Anunciate</a>
                                @else
                                <a class="app-view-popup-style" data-target="#app-view-login-popup"><i class="fa fa-plus"></i>Anunciate</a>
                                @endif  
                            </div-->	
                        </div>	
                        @yield('content')
                    </div>
                </div>
                <div class="clearfix"></div> 						
		    </div>		
	    </section>
		<!--==================================Section Close=================================-->
	    <div class="md-overlay"></div>
    </div>
    <input type="hidden" id="select2-ajax-noresutls" value="No results found">
    <input type="hidden" id="select2-ajax-tooshort" value="Please enter 3 or more characters">
    <input type="hidden" id="select2-ajax-searching" value="Searching...">
</body>

<script type="text/html" id="tmpl-media-frame">
    <div class="media-frame-title" id="media-frame-title"></div>
    <h2 class="media-frame-menu-heading">Acciones</h2>
    <button type="button" class="button button-link media-frame-menu-toggle" aria-expanded="false">
        Menú<span class="dashicons dashicons-arrow-down" aria-hidden="true"></span>
    </button>
    <div class="media-frame-menu"></div>
    <div class="media-frame-tab-panel">
        <div class="media-frame-router"></div>
        <div class="media-frame-content"></div>
    </div>
    <h2 class="media-frame-actions-heading screen-reader-text">
    Acciones de los medios seleccionados		</h2>
    <div class="media-frame-toolbar"></div>
    <div class="media-frame-uploader"></div>
</script>
<script type="text/html" id="tmpl-media-modal">
    <div tabindex="0" class="media-modal wp-core-ui" role="dialog" aria-labelledby="media-frame-title">
        <# if ( data.hasCloseButton ) { #>
            <button type="button" class="media-modal-close"><span class="media-modal-icon"><span class="screen-reader-text">Cerrar el diálogo</span></span></button>
        <# } #>
        <div class="media-modal-content" role="document"></div>
    </div>
    <div class="media-modal-backdrop"></div>
</script>

<script type="text/html" id="tmpl-uploader-window">
    <div class="uploader-window-content">
        <div class="uploader-editor-title">Arrastra los archivos para subirlos</div>
    </div>
</script>

<script type="text/html" id="tmpl-uploader-editor">
    <div class="uploader-editor-content">
        <div class="uploader-editor-title">Arrastra los archivos para subirlos</div>
    </div>
</script>


<script type="text/html" id="tmpl-media-library-view-switcher">
    <a href="/listing-author/?dashboard=announcements&#038;mode=list" class="view-list">
        <span class="screen-reader-text">Vista de lista</span>
    </a>
    <a href="/listing-author/?dashboard=announcements&#038;mode=grid" class="view-grid current" aria-current="page">
        <span class="screen-reader-text">Vista de cuadrícula</span>
    </a>
</script>

<script type="text/html" id="tmpl-uploader-status">
    <h2>Subiendo</h2>
    <button type="button" class="button-link upload-dismiss-errors"><span class="screen-reader-text">Descartar los errores</span></button>

    <div class="media-progress-bar"><div></div></div>
    <div class="upload-details">
        <span class="upload-count">
            <span class="upload-index"></span> / <span class="upload-total"></span>
        </span>
        <span class="upload-detail-separator">&ndash;</span>
        <span class="upload-filename"></span>
    </div>
    <div class="upload-errors"></div>
</script>

<script type="text/html" id="tmpl-edit-attachment-frame">
    <div class="edit-media-header">
        <button class="left dashicons"<# if ( ! data.hasPrevious ) { #> disabled<# } #>><span class="screen-reader-text">Editar el medio anterior</span></button>
        <button class="right dashicons"<# if ( ! data.hasNext ) { #> disabled<# } #>><span class="screen-reader-text">Editar el siguiente medio</span></button>
        <button type="button" class="media-modal-close"><span class="media-modal-icon"><span class="screen-reader-text">Cerrar el diálogo</span></span></button>
    </div>
    <div class="media-frame-title"></div>
    <div class="media-frame-content"></div>
</script>

<script type="text/html" id="tmpl-media-selection">
    <div class="selection-info">
        <span class="count"></span>
        <# if ( data.editable ) { #>
            <button type="button" class="button-link edit-selection">Editar la selección</button>
        <# } #>
        <# if ( data.clearable ) { #>
            <button type="button" class="button-link clear-selection">Borrar</button>
        <# } #>
    </div>
    <div class="selection-view"></div>
</script>

<script type="text/html" id="tmpl-gallery-settings">
    <h2>Ajustes de la galería</h2>

    <span class="setting">
        <label for="gallery-settings-link-to" class="name">Enlazado a</label>
        <select id="gallery-settings-link-to" class="link-to"
            data-setting="link"
            <# if ( data.userSettings ) { #>
                data-user-setting="urlbutton"
            <# } #>>

            <option value="post" <# if ( ! wp.media.galleryDefaults.link || 'post' === wp.media.galleryDefaults.link ) {
                #>selected="selected"<# }
            #>>
                Página de adjuntos				</option>
            <option value="file" <# if ( 'file' === wp.media.galleryDefaults.link ) { #>selected="selected"<# } #>>
                Archivo de medios				</option>
            <option value="none" <# if ( 'none' === wp.media.galleryDefaults.link ) { #>selected="selected"<# } #>>
                Ninguna				</option>
        </select>
    </span>

    <span class="setting">
        <label for="gallery-settings-columns" class="name select-label-inline">Columnas</label>
        <select id="gallery-settings-columns" class="columns" name="columns"
            data-setting="columns">
                                <option value="1" <#
                    if ( 1 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
                #>>
                    1					</option>
                                <option value="2" <#
                    if ( 2 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
                #>>
                    2					</option>
                                <option value="3" <#
                    if ( 3 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
                #>>
                    3					</option>
                                <option value="4" <#
                    if ( 4 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
                #>>
                    4					</option>
                                <option value="5" <#
                    if ( 5 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
                #>>
                    5					</option>
                                <option value="6" <#
                    if ( 6 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
                #>>
                    6					</option>
                                <option value="7" <#
                    if ( 7 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
                #>>
                    7					</option>
                                <option value="8" <#
                    if ( 8 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
                #>>
                    8					</option>
                                <option value="9" <#
                    if ( 9 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
                #>>
                    9					</option>
                        </select>
    </span>

    <span class="setting">
        <input type="checkbox" id="gallery-settings-random-order" data-setting="_orderbyRandom" />
        <label for="gallery-settings-random-order" class="checkbox-label-inline">Orden aleatorio</label>
    </span>

    <span class="setting size">
        <label for="gallery-settings-size" class="name">Tamaño</label>
        <select id="gallery-settings-size" class="size" name="size"
            data-setting="size"
            <# if ( data.userSettings ) { #>
                data-user-setting="imgsize"
            <# } #>
            >
                                <option value="thumbnail">
                    Miniatura					</option>
                                <option value="medium">
                    Medio					</option>
                                <option value="large">
                    Grande					</option>
                                <option value="full">
                    Tamaño completo					</option>
                        </select>
    </span>
</script>

<script type="text/html" id="tmpl-playlist-settings">
    <h2>Ajustes de la lista de reproducción</h2>

    <# var emptyModel = _.isEmpty( data.model ),
        isVideo = 'video' === data.controller.get('library').props.get('type'); #>

    <span class="setting">
        <input type="checkbox" id="playlist-settings-show-list" data-setting="tracklist" <# if ( emptyModel ) { #>
            checked="checked"
        <# } #> />
        <label for="playlist-settings-show-list" class="checkbox-label-inline">
            <# if ( isVideo ) { #>
            Mostrar la lista de vídeos				<# } else { #>
            Mostrar la lista de reproducción				<# } #>
        </label>
    </span>

    <# if ( ! isVideo ) { #>
    <span class="setting">
        <input type="checkbox" id="playlist-settings-show-artist" data-setting="artists" <# if ( emptyModel ) { #>
            checked="checked"
        <# } #> />
        <label for="playlist-settings-show-artist" class="checkbox-label-inline">
            Mostrar el nombre del artista en la lista de pistas			</label>
    </span>
    <# } #>

    <span class="setting">
        <input type="checkbox" id="playlist-settings-show-images" data-setting="images" <# if ( emptyModel ) { #>
            checked="checked"
        <# } #> />
        <label for="playlist-settings-show-images" class="checkbox-label-inline">
            Mostrar las imágenes			</label>
    </span>
</script>

<script type="text/html" id="tmpl-embed-link-settings">
    <span class="setting link-text">
        <label for="embed-link-settings-link-text" class="name">Texto del enlace</label>
        <input type="text" id="embed-link-settings-link-text" class="alignment" data-setting="linkText" />
    </span>
    <div class="embed-container" style="display: none;">
        <div class="embed-preview"></div>
    </div>
</script>

<script type='text/javascript' id='listingpro-submit-listing-js-extra'>
    /* <![CDATA[ */
    var ajax_listingpro_submit_object = {"ajaxurl":"http:\/\/localhost\/wp-admin\/admin-ajax.php"};
    /* ]]> */
</script>
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
<script type='text/javascript' src='/frontend/js/pagination.js' id='pagination-js'></script>
<!--[if lt IE 9]>
<script type='text/javascript' src='https://html5shim.googlecode.com/svn/trunk/html5.js' id='html5shim-js'></script>
<![endif]-->
<script type='text/javascript' src='/frontend/js/jquery.nicescroll.min.js' id='nicescroll-js'></script>
<script type='text/javascript' src='/frontend/js/chosen.jquery.min.js' id='chosen-jquery-js'></script>
<script type='text/javascript' src='/frontend/js/jquery-ui.js' id='jquery-ui-js'></script>
<script type='text/javascript' src='/frontend/js/bootstrap-rating.js' id='bootstrap-rating-js'></script>
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

<script type='text/javascript' src='/frontend/js/underscore.min.js' id='underscore-js'></script>
<script type='text/javascript' src='/frontend/js/shortcode.min.js' id='shortcode-js'></script>
<script type='text/javascript' src='/frontend/js/backbone.min.js' id='backbone-js'></script>
<script type='text/javascript' id='wp-util-js-extra'>
/* <![CDATA[ */
var _wpUtilSettings = {"ajax":{"url":"\/wp-admin\/admin-ajax.php"}};
/* ]]> */
</script>
<script type='text/javascript' src='/frontend/js/wp-util.min.js' id='wp-util-js'></script>
<script type='text/javascript' src='/frontend/js/wp-backbone.min.js' id='wp-backbone-js'></script>
<script type='text/javascript' id='media-models-js-extra'>
/* <![CDATA[ */
var _wpMediaModelsL10n = {"settings":{"ajaxurl":"\/wp-admin\/admin-ajax.php","post":{"id":0}}};
/* ]]> */
</script>
<script type='text/javascript' src='/frontend/js/media-models.min.js' id='media-models-js'></script>
<script type='text/javascript' id='wp-plupload-js-extra'>
/* <![CDATA[ */
var pluploadL10n = {"queue_limit_exceeded":"Has intentado poner en cola demasiados archivos.","file_exceeds_size_limit":"El tama\u00f1o del archivo %s excede el tama\u00f1o permitido en este sitio.","zero_byte_file":"Este archivo est\u00e1 vac\u00edo. Por favor, prueba con otro.","invalid_filetype":"Lo siento, este tipo de archivo no est\u00e1 permitido por motivos de seguridad.","not_an_image":"Este archivo no es una imagen. Por favor, prueba con otro.","image_memory_exceeded":"Memoria excedida. Por favor, prueba con otro archivo m\u00e1s peque\u00f1o.","image_dimensions_exceeded":"Supera el tama\u00f1o permitido. Por favor, prueba con otro.","default_error":"Ha habido un error en la subida. Por favor, int\u00e9ntalo m\u00e1s tarde.","missing_upload_url":"Ha habido un error de configuraci\u00f3n. Por favor, contacta con el  administrador del servidor.","upload_limit_exceeded":"Solo puedes subir 1 archivo.","http_error":"Respuesta inesperada del servidor. El archivo puede haber sido subido correctamente. Comprueba la biblioteca de medios o recarga la p\u00e1gina.","http_error_image":"El posproceso de la imagen ha fallado probablemente porque el servidor est\u00e1 ocupado o no tiene suficientes recursos. Puede ayudar el subir una imagen m\u00e1s peque\u00f1a. El tama\u00f1o m\u00e1ximo sugerido es de 2500 p\u00edxeles.","upload_failed":"Subida fallida.","big_upload_failed":"Por favor, intenta subir este archivo a trav\u00e9s del %1$snavegador%2$s.","big_upload_queued":"%s excede el tama\u00f1o m\u00e1ximo de subida del cargador de m\u00faltiples archivos del navegador.","io_error":"Error de entrada\/salida.","security_error":"Error de seguridad.","file_cancelled":"Archivo cancelado.","upload_stopped":"Subida detenida.","dismiss":"Descartar","crunching":"Calculando\u2026","deleted":"movidos a la papelera.","error_uploading":"Ha habido un error al subir \u00ab%s\u00bb","unsupported_image":"Esta imagen no se puede mostrar en un navegador web. Antes de subirla, para un mejor resultado, convi\u00e9rtela a JPEG."};
var _wpPluploadSettings = {"defaults":{"file_data_name":"async-upload","url":"\/wp-admin\/async-upload.php","filters":{"max_file_size":"4194304000b","mime_types":[{"extensions":"jpg,jpeg,jpe,gif,png,bmp,tiff,tif,ico,heic,asf,asx,wmv,wmx,wm,avi,divx,flv,mov,qt,mpeg,mpg,mpe,mp4,m4v,ogv,webm,mkv,3gp,3gpp,3g2,3gp2,txt,asc,c,cc,h,srt,csv,tsv,ics,rtx,css,htm,html,vtt,dfxp,mp3,m4a,m4b,aac,ra,ram,wav,ogg,oga,flac,mid,midi,wma,wax,mka,rtf,js,pdf,class,tar,zip,gz,gzip,rar,7z,psd,xcf,doc,pot,pps,ppt,wri,xla,xls,xlt,xlw,mdb,mpp,docx,docm,dotx,dotm,xlsx,xlsm,xlsb,xltx,xltm,xlam,pptx,pptm,ppsx,ppsm,potx,potm,ppam,sldx,sldm,onetoc,onetoc2,onetmp,onepkg,oxps,xps,odt,odp,ods,odg,odc,odb,odf,wp,wpd,key,numbers,pages,redux"}]},"heic_upload_error":true,"multipart_params":{"action":"upload-attachment","_wpnonce":"a31c368ea8"}},"browser":{"mobile":false,"supported":true},"limitExceeded":false};
/* ]]> */
</script>
<script type='text/javascript' src='/frontend/js/wp-plupload.min.js' id='wp-plupload-js'></script>
<script type='text/javascript' src='/frontend/js/core.min.js' id='jquery-ui-core-js'></script>
<script type='text/javascript' src='/frontend/js/widget.min.js' id='jquery-ui-widget-js'></script>
<script type='text/javascript' src='/frontend/js/mouse.min.js' id='jquery-ui-mouse-js'></script>
<script type='text/javascript' src='/frontend/js/sortable.min.js' id='jquery-ui-sortable-js'></script>
<script type='text/javascript' id='mediaelement-core-js-before'>
    var mejsL10n = {"language":"es","strings":{"mejs.download-file":"Descargar archivo","mejs.install-flash":"Est\u00e1s usando un navegador que no tiene Flash activo o instalado. Por favor, activa el componente del reproductor Flash o descarga la \u00faltima versi\u00f3n desde https:\/\/get.adobe.com\/flashplayer\/","mejs.fullscreen":"Pantalla completa","mejs.play":"Reproducir","mejs.pause":"Pausa","mejs.time-slider":"Control de tiempo","mejs.time-help-text":"Usa las teclas de direcci\u00f3n izquierda\/derecha para avanzar un segundo y las flechas arriba\/abajo para avanzar diez segundos.","mejs.live-broadcast":"Transmisi\u00f3n en vivo","mejs.volume-help-text":"Utiliza las teclas de flecha arriba\/abajo para aumentar o disminuir el volumen.","mejs.unmute":"Activar el sonido","mejs.mute":"Silenciar","mejs.volume-slider":"Control de volumen","mejs.video-player":"Reproductor de v\u00eddeo","mejs.audio-player":"Reproductor de audio","mejs.captions-subtitles":"Pies de foto \/ Subt\u00edtulos","mejs.captions-chapters":"Cap\u00edtulos","mejs.none":"Ninguna","mejs.afrikaans":"Afrik\u00e1ans","mejs.albanian":"Albano","mejs.arabic":"\u00c1rabe","mejs.belarusian":"Bielorruso","mejs.bulgarian":"B\u00falgaro","mejs.catalan":"Catal\u00e1n","mejs.chinese":"Chino","mejs.chinese-simplified":"Chino (Simplificado)","mejs.chinese-traditional":"Chino (Tradicional)","mejs.croatian":"Croata","mejs.czech":"Checo","mejs.danish":"Dan\u00e9s","mejs.dutch":"Holand\u00e9s","mejs.english":"Ingl\u00e9s","mejs.estonian":"Estonio","mejs.filipino":"Filipino","mejs.finnish":"Fin\u00e9s","mejs.french":"Franc\u00e9s","mejs.galician":"Gallego","mejs.german":"Alem\u00e1n","mejs.greek":"Griego","mejs.haitian-creole":"Creole haitiano","mejs.hebrew":"Hebreo","mejs.hindi":"Indio","mejs.hungarian":"H\u00fangaro","mejs.icelandic":"Island\u00e9s","mejs.indonesian":"Indonesio","mejs.irish":"Irland\u00e9s","mejs.italian":"Italiano","mejs.japanese":"Japon\u00e9s","mejs.korean":"Coreano","mejs.latvian":"Let\u00f3n","mejs.lithuanian":"Lituano","mejs.macedonian":"Macedonio","mejs.malay":"Malayo","mejs.maltese":"Malt\u00e9s","mejs.norwegian":"Noruego","mejs.persian":"Persa","mejs.polish":"Polaco","mejs.portuguese":"Portugu\u00e9s","mejs.romanian":"Rumano","mejs.russian":"Ruso","mejs.serbian":"Serbio","mejs.slovak":"Eslovaco","mejs.slovenian":"Esloveno","mejs.spanish":"Espa\u00f1ol","mejs.swahili":"Swahili","mejs.swedish":"Sueco","mejs.tagalog":"Tagalo","mejs.thai":"Tailand\u00e9s","mejs.turkish":"Turco","mejs.ukrainian":"Ukraniano","mejs.vietnamese":"Vietnamita","mejs.welsh":"Gal\u00e9s","mejs.yiddish":"Yiddish"}};
</script>
<script type='text/javascript' src='/frontend/js/mediaelement-and-player.min.js' id='mediaelement-core-js'></script>
<script type='text/javascript' src='/frontend/js/mediaelement-migrate.min.js' id='mediaelement-migrate-js'></script>
<script type='text/javascript' id='mediaelement-js-extra'>
/* <![CDATA[ */
var _wpmejsSettings = {"pluginPath":"\/wp-includes\/js\/mediaelement\/","classPrefix":"mejs-","stretching":"responsive"};
/* ]]> */
</script>
<script type='text/javascript' src='/frontend/js/wp-mediaelement.min.js' id='wp-mediaelement-js'></script>
<script type='text/javascript' id='wp-api-request-js-extra'>
/* <![CDATA[ */
var wpApiSettings = {"root":"http:\/\/localhost\/wp-json\/","nonce":"9083fccf66","versionString":"wp\/v2\/"};
/* ]]> */
</script>
<script type='text/javascript' src='/frontend/js/api-request.min.js' id='wp-api-request-js'></script>
<script type='text/javascript' src='/frontend/js/wp-polyfill.min.js' id='wp-polyfill-js'></script>
<script type='text/javascript' id='wp-polyfill-js-after'>
( 'fetch' in window ) || document.write( '<script src="/frontend/js/wp-polyfill-fetch.min.js"></scr' + 'ipt>' );
( document.contains ) || document.write( '<script src="/frontend/js/wp-polyfill-node-contains.min.js"></scr' + 'ipt>' );
( window.DOMRect ) || document.write( '<script src="/frontend/js/wp-polyfill-dom-rect.min.js"></scr' + 'ipt>' );
( window.URL && window.URL.prototype && window.URLSearchParams ) || document.write( '<script src="/frontend/js/wp-polyfill-url.min.js"></scr' + 'ipt>' );
( window.FormData && window.FormData.prototype.keys ) || document.write( '<script src="/frontend/js/wp-polyfill-formdata.min.js"></scr' + 'ipt>' );
( Element.prototype.matches && Element.prototype.closest ) || document.write( '<script src="/frontend/js/wp-polyfill-element-closest.min.js"></scr' + 'ipt>' );
</script>
<script type='text/javascript' src='/frontend/js/dom-ready.min.js' id='wp-dom-ready-js'></script>
<script type='text/javascript' src='/frontend/js/i18n.min.js' id='wp-i18n-js'></script>
<script type='text/javascript' id='wp-a11y-js-translations'>
( function( domain, translations ) {
	var localeData = translations.locale_data[ domain ] || translations.locale_data.messages;
	localeData[""].domain = domain;
	wp.i18n.setLocaleData( localeData, domain );
} )( "default", {"translation-revision-date":"2021-05-12 12:43:41+0000","generator":"GlotPress\/3.0.0-alpha.2","domain":"messages","locale_data":{"messages":{"":{"domain":"messages","plural-forms":"nplurals=2; plural=n != 1;","lang":"es"},"Notifications":["Avisos"]}},"comment":{"reference":"wp-includes\/js\/dist\/a11y.js"}} );
</script>
<script type='text/javascript' src='/frontend/js/a11y.min.js' id='wp-a11y-js'></script>
<script type='text/javascript' src='/frontend/js/clipboard.min.js' id='clipboard-js'></script>
<script type='text/javascript' id='media-views-js-extra'>
/* <![CDATA[ */
var _wpMediaViewsL10n = {"mediaFrameDefaultTitle":"Medios","url":"URL","addMedia":"A\u00f1adir medios","search":"Buscar","select":"Seleccionar","cancel":"Cancelar","update":"Actualizar","replace":"Reemplazar","remove":"Eliminar","back":"Volver","selected":"%d seleccionados","dragInfo":"Arrastra y suelta para reordenar los archivos de medios.","uploadFilesTitle":"Subir archivos","uploadImagesTitle":"Subir im\u00e1genes","mediaLibraryTitle":"Biblioteca de medios","insertMediaTitle":"A\u00f1adir medios","createNewGallery":"Crea una nueva galer\u00eda","createNewPlaylist":"Crear una nueva lista de reproducci\u00f3n","createNewVideoPlaylist":"Crear una nueva lista de reproducci\u00f3n de v\u00eddeo","returnToLibrary":"\u2190 Return to library","allMediaItems":"Todos los medios","allDates":"Todas las fechas","noItemsFound":"No se han encontrado elementos.","insertIntoPost":"Insertar en la entrada","unattached":"Sin adjuntar","mine":"M\u00edos","trash":"Papelera","uploadedToThisPost":"Subido a esta entrada","warnDelete":"Est\u00e1s a punto de borrar permanentemente este elemento de tu sitio.\nEsta acci\u00f3n es irreversible.\n\u00abCancelar\u00bb para parar, \u00abAceptar\u00bb para borrar.","warnBulkDelete":"Est\u00e1s a punto de borrar permanentemente estos elementos de tu sitio.\nEsta acci\u00f3n es irreversible.\n\u00abCancelar\u00bb para parar, \u00abAceptar\u00bb para borrar.","warnBulkTrash":"Est\u00e1s a punto de enviar a la papelera estos elementos.\n  \u00abCancelar\u00bb para parar, \u00abAceptar\u00bb para borrar.","bulkSelect":"Selecci\u00f3n en lotes","trashSelected":"Mover a la papelera","restoreSelected":"Restaurar de la papelera","deletePermanently":"Borrar permanentemente","apply":"Aplicar","filterByDate":"Filtrar por fecha","filterByType":"Filtrar por tipo","searchLabel":"Buscar","searchMediaLabel":"Buscar medios","searchMediaPlaceholder":"Buscar medios...","mediaFound":"N\u00famero de elementos de medios encontrados: %d","mediaFoundHasMoreResults":"N\u00famero de elementos de medios mostrados: %d. Haz scroll en la p\u00e1gina para ver m\u00e1s resultados.","noMedia":"No se han encontrado archivos de medios.","noMediaTryNewSearch":"No se han encontrado elementos de medios. Prueba con una b\u00fasqueda diferente.","attachmentDetails":"Detalles del adjunto","insertFromUrlTitle":"Insertar desde una URL","setFeaturedImageTitle":"Imagen destacada","setFeaturedImage":"Establecer la imagen destacada","createGalleryTitle":"Crear una galer\u00eda","editGalleryTitle":"Editar galer\u00eda","cancelGalleryTitle":"\u2190 Cancelar la galer\u00eda","insertGallery":"Insertar galer\u00eda","updateGallery":"Actualizar la galer\u00eda","addToGallery":"A\u00f1adir a la galer\u00eda","addToGalleryTitle":"A\u00f1adir a la galer\u00eda","reverseOrder":"Orden inverso","imageDetailsTitle":"Detalles de la imagen","imageReplaceTitle":"Reemplazar la imagen","imageDetailsCancel":"Cancelar la edici\u00f3n","editImage":"Editar la imagen","chooseImage":"Elige la imagen","selectAndCrop":"Seleccionar y recortar","skipCropping":"Omitir el recorte","cropImage":"Recortar la imagen","cropYourImage":"Recorta tu imagen","cropping":"Recortando\u2026","suggestedDimensions":"Dimensiones de imagen sugeridas: %1$s por %2$s p\u00edxeles.","cropError":"Se ha producido un error recortando la imagen.","audioDetailsTitle":"Detalles del audio","audioReplaceTitle":"Reemplazar el audio","audioAddSourceTitle":"A\u00f1adir el origen del audio","audioDetailsCancel":"Cancelar la edici\u00f3n","videoDetailsTitle":"Detalles del v\u00eddeo","videoReplaceTitle":"Reemplazar el v\u00eddeo","videoAddSourceTitle":"A\u00f1adir el origen del v\u00eddeo","videoDetailsCancel":"Cancelar la edici\u00f3n","videoSelectPosterImageTitle":"Seleccionar la imagen del p\u00f3ster","videoAddTrackTitle":"A\u00f1adir subt\u00edtulos","playlistDragInfo":"Arrastrar y soltar para reordenar las pistas.","createPlaylistTitle":"Crear una lista de reproducci\u00f3n de audio","editPlaylistTitle":"Editar la lista de reproducci\u00f3n de audio","cancelPlaylistTitle":"\u2190 Cancelar la lista de reproducci\u00f3n de audio","insertPlaylist":"Insertar la lista de reproducci\u00f3n de audio","updatePlaylist":"Actualizar la lista de reproducci\u00f3n de audio","addToPlaylist":"A\u00f1adir a la lista de reproducci\u00f3n de audio","addToPlaylistTitle":"A\u00f1adir a la lista de reproducci\u00f3n de audio","videoPlaylistDragInfo":"Arrastrar y soltar para reordenar los v\u00eddeos.","createVideoPlaylistTitle":"Crear una lista de reproducci\u00f3n de v\u00eddeo","editVideoPlaylistTitle":"Editar la lista de reproducci\u00f3n de v\u00eddeo","cancelVideoPlaylistTitle":"\u2190 Cancelar la lista de reproducci\u00f3n de v\u00eddeo","insertVideoPlaylist":"Insertar la lista de reproducci\u00f3n de v\u00eddeo","updateVideoPlaylist":"Actualizar la lista de reproducci\u00f3n de v\u00eddeo","addToVideoPlaylist":"A\u00f1adir a lista de reproducci\u00f3n de v\u00eddeo","addToVideoPlaylistTitle":"A\u00f1adir a lista de reproducci\u00f3n de v\u00eddeo","filterAttachments":"Filtrar los medios","attachmentsList":"Lista de medios","settings":{"tabs":[],"tabUrl":"http:\/\/localhost\/wp-admin\/media-upload.php?chromeless=1","mimeTypes":{"image":"Im\u00e1genes","audio":"Audio","video":"V\u00eddeo","application\/msword,application\/vnd.openxmlformats-officedocument.wordprocessingml.document,application\/vnd.ms-word.document.macroEnabled.12,application\/vnd.ms-word.template.macroEnabled.12,application\/vnd.oasis.opendocument.text,application\/vnd.apple.pages,application\/pdf,application\/vnd.ms-xpsdocument,application\/oxps,application\/rtf,application\/wordperfect,application\/octet-stream":"Documentos","application\/vnd.apple.numbers,application\/vnd.oasis.opendocument.spreadsheet,application\/vnd.ms-excel,application\/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application\/vnd.ms-excel.sheet.macroEnabled.12,application\/vnd.ms-excel.sheet.binary.macroEnabled.12":"Hojas de c\u00e1lculo","application\/x-gzip,application\/rar,application\/x-tar,application\/zip,application\/x-7z-compressed":"Archivos"},"captions":true,"nonce":{"sendToEditor":"c2cde7728e"},"post":{"id":0},"defaultProps":{"link":"none","align":"","size":""},"attachmentCounts":{"audio":1,"video":1},"oEmbedProxyUrl":"http:\/\/localhost\/wp-json\/oembed\/1.0\/proxy","embedExts":["mp3","ogg","flac","m4a","wav","mp4","m4v","webm","ogv","flv"],"embedMimes":{"mp3":"audio\/mpeg","ogg":"audio\/ogg","flac":"audio\/flac","m4a":"audio\/mpeg","wav":"audio\/wav","mp4":"video\/mp4","m4v":"video\/mp4","webm":"video\/webm","ogv":"video\/ogg","flv":"video\/x-flv"},"contentWidth":900,"months":[{"year":"2021","month":"5","text":"mayo 2021"},{"year":"2021","month":"3","text":"marzo 2021"},{"year":"2021","month":"1","text":"enero 2021"},{"year":"2020","month":"1","text":"enero 2020"}],"mediaTrash":0}};
/* ]]> */
</script>
<script type='text/javascript' id='media-views-js-translations'>
( function( domain, translations ) {
	var localeData = translations.locale_data[ domain ] || translations.locale_data.messages;
	localeData[""].domain = domain;
	wp.i18n.setLocaleData( localeData, domain );
} )( "default", {"translation-revision-date":"2021-05-12 12:43:41+0000","generator":"GlotPress\/3.0.0-alpha.2","domain":"messages","locale_data":{"messages":{"":{"domain":"messages","plural-forms":"nplurals=2; plural=n != 1;","lang":"es"},"The file URL has been copied to your clipboard":["La URL del archivo ha sido copiada a tu portapapeles"],"%s item selected":["%s elemento seleccionado","%s elementos seleccionados"]}},"comment":{"reference":"wp-includes\/js\/media-views.js"}} );
</script>
<script type='text/javascript' src='/frontend/js/media-views.min.js' id='media-views-js'></script>
<script type='text/javascript' id='media-editor-js-translations'>
( function( domain, translations ) {
	var localeData = translations.locale_data[ domain ] || translations.locale_data.messages;
	localeData[""].domain = domain;
	wp.i18n.setLocaleData( localeData, domain );
} )( "default", {"translation-revision-date":"2021-05-12 12:43:41+0000","generator":"GlotPress\/3.0.0-alpha.2","domain":"messages","locale_data":{"messages":{"":{"domain":"messages","plural-forms":"nplurals=2; plural=n != 1;","lang":"es"},"Could not set that as the thumbnail image. Try a different attachment.":["No se ha podido establecer como imagen de miniatura. Prueba con otro adjunto."]}},"comment":{"reference":"wp-includes\/js\/media-editor.js"}} );
</script>
<script type='text/javascript' src='/frontend/js/media-editor.min.js' id='media-editor-js'></script>
<script type='text/javascript' src='/frontend/js/media-audiovideo.min.js' id='media-audiovideo-js'></script>
<script type='text/javascript' src='/frontend/js/wp-embed.min.js' id='wp-embed-js'></script>
<script type='text/javascript' src='/frontend/js/jspdf.min.js' id='lp-pdflib-js'></script>
<script type='text/javascript' src='/frontend/js/pdf-function.js' id='lp-pdffunc-js'></script>
<script>
jQuery(document).ready(function(){
    var geocoder =  new google.maps.Geocoder();
    geocoder.geocode( { 'address': 'mexico'}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            // /alert("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng()); 
          } else {
            //alert("Something got wrong " + status);
          }
        });
    });
</script>
</html>