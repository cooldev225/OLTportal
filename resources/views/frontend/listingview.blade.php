@extends('frontend.layouts.home')
@inject('dateFormat', 'App\Services\DateService')
@section('content')
<body class="listing-detail-view listing-template-default single single-listing postid-184 logged-in admin-bar theme-listingpro woocommerce-js listing-skeleton-view-grid_view wpb-js-composer js-comp-ver-6.4.1 vc_responsive customize-support" data-submitlink="/listing" data-sliderstyle="style2" data-defaultmaplat="0" data-defaultmaplot="-0" data-lpsearchmode="keyword" data-maplistingby="geolocaion" >
	<input type="hidden" id="lpNonce" name="lpNonce" value="11a180ea92" />
    <input type="hidden" name="_wp_http_referer" value="/" />    
    <input type="hidden" id="start_of_weekk" value="1">
	<div id="page" data-detail-page-style="lp_detail_page_styles1" data-lpattern="with_region" data-sitelogo="/images/logo.png" data-site-url="/" data-ipapi="ip_api" data-lpcurrentloconhome="1" data-mtoken="0" data-mtype="openstreet" data-mstyle="mapbox.streets-basic" class="clearfix lp_detail_page_styles1 mm-page mm-slideout">
        <div class="pos-relative header-inner-page-wrap No">
            <div class="header-container 3">                    
                <header class="header-without-topbar header-fixed pos-relative lp-header-full-width">
                    <div class="lp-header-overlay"></div>
                    <div id="menu" class="small-screen">
                        @if(Auth::id())
                        <a href="/ads" class="lpl-button lpl-add-listing-loggedout">Anunciate</a>
                        @else
                        <a class="lpl-button lpl-add-listing-loggedout app-view-popup-style" data-target="#app-view-login-popup">Anunciate</a>
                        <a class="lpl-button lp-right-15 app-view-popup-style" data-target="#app-view-login-popup">Sign In</a>
                        @endif                        
                    </div>
                    <div class="lp-menu-bar header-bg-color-class">
                        <div class="fullwidth-header">
                            <div class="row">
                                <div class="col-md-2 col-xs-6 lp-logo-container">
                                    <div class="lp-logo">
                                        <a href="/">
                                            <img src="/images/logo.png" alt="image"/>
                                        </a>
                                    </div>
                                </div>
                                <div class="header-right-panel clearfix col-md-10 col-sm-10 col-xs-12">
                                    <div class="header-filter pos-relative form-group margin-bottom-0 col-md-6 ">
                                        @include('frontend.layouts.schtopfrm')   
                                    </div>
                                    <div class="col-xs-6 mobile-nav-icon">
                                        <a href="#menu" class="nav-icon">
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </a>
                                    </div>
                                    <div class="col-md-6 col-xs-12 lp-menu-container clearfix pull-right">
                                        <div class="pull-right">
                                            @if(!Auth::id())
                                            <div class="lp-joinus-icon">
                                                <div class="lp-join-now">
                                                    <span>
                                                        <img class="icon icons8-contacts" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADNElEQVRoge2ZLWhbURTHn3iig8IiIiomIgqrqJiomJgIrCKiomKig4iKioiKioiJiEJExURFRGEbRERMVERkENhE5BgTGUxEVERkUBERURFR8Zu45+5durzk3feRm7H8IRB455z3u9/3nOd5a6317wjYAcrAOdAEroAqcAhsuOabK8AHKsBX5qsP7LrmnSlgE+gasCMZhRpwDJwCDeBGnk+Bt8COa/Y/AjaAn0YDDgA/xNYH3j8YoUaY/VIlPQvwHdiKYO8De0AdGItvcxms86AKwL38rOe9bAoTacyzLBijglQE4jpBjHOJ8TFNNluItkAcJ4ixKzGGKaJZQ/QEopgwDgApYcUC0NtpIWEc5w3R227shQrkVqEhn4ThdYIYTyXGrzTZbCH04fYmQYznEqOfJpstRFUg3qUQ4zJNNluIA4H4nCDGtcQop8lmC1ESiElM/7zcCgD20+azAdE33lpMfx+4kBjttPlsQAYCETu/AIoSo5cmmy1E4vmNylcgwX0tsVDpLMAQqMbwr4mv88XuAx0BuYnhr6/wXVwnV8Aj4IcAvbDweyk+37LksxKqUgJQt/Cpi89VlmxWMnaeCZCLYJ8zplVxCYjRRZCbdObNd1lXOiFzt+WGieC6ohuTn2GTMxoBsOeCda5Qta2pATkGTlAFioL8HxnPR66ZQ2WcCQPCpbNKdzn6IhFcAPOow7ItozBGnRUVYHulG0JQDZkusNvSdqxSydTzPA9VOdTTaWGCBLSMKeh+wcsoNI0pBXARwa9m2N9LjOVWGlHnwCuCO5aGaROUT4/m+O8bdq0HndAFjsjyGwqq6n5GUHgGdTpfAttiUzeeNVBnS15+JbHVqolPAVUInxjPxqhS6sJbgm0jysCt8aIB6pvH5gzbU+COcE2Bs5COqhDUynRH/WUbpwE+6oONVh84jOC3I6PTkd4dy/86EbJJ1Ce6vvHe1qxOs2mIXgd3wEnsQPHfXzZGt0ecnIUgBR0ia8CFUAfoUFjsslDgCcHiK2XEaMOj04QpNgVzgg84X7LDs5MxzaMvfuCDtVPGQu2GAC0bJ3OrXTXdRm1EbmEo93ocd2TXWut/1W9KptrZf/2YyAAAAABJRU5ErkJggg==" alt="contacts">            
                                                    </span>
                                                    <a class="app-view-popup-style" data-target="#app-view-login-popup">Sign In</a>
                                                </div>
                                            </div>
                                            @endif
                                            <div class="pull-right lp-add-listing-btn">
                                                <ul>
                                                    <li>
                                                        @if(Auth::id())
                                                        <a href="/ads"><i class="fa fa-plus"></i>Anunciate</a>
                                                        @else
                                                        <a class="app-view-popup-style" data-target="#app-view-login-popup"><i class="fa fa-plus"></i>Anunciate</a>
                                                        @endif                                                    
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="pull-right padding-right-10">
                                            <div class="lp-menu menu"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- ../menu-bar -->
                </header>
                <!--==================================Header Close=================================--><!-- Login Popup style2 -->
                @include('frontend.layouts.login') 
                <!-- Login Popup -->								
                <div class="app-view-popup-style" data-target="#app-view-login-popup">
                    <!--ajax based content-->
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
            </div>
        </div>
        <section class="aliceblue listing-second-view">
            <div class="post-meta-info">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="post-meta-left-box">
                                <ul class="breadcrumbs">
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="/listing?cat={{$announcement->category}}">{{$announcement->category_name->name}}</a></li>
                                    <li><span>{{$announcement->title}}</span></li>
                                </ul>
                                <h1>{{$announcement->title}}<span class="claimed"><i class="fa fa-check"></i> Verified</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-white-area">
                <div class="container single-inner-container single_listing">
                    <div class="row">
                        <div class="col-md-8 col-sm-8 col-xs-12">
                            <div class="post-row margin-bottom-30">
                                <div class="post-detail-content">
                                    <textarea class="form-control lp-dashboard-des-field"   
                                                name="edit_description"
                                                id="edit_description" 
                                                placeholder="">{{$announcement==null?'':$announcement->description}}</textarea>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="widget-box">
                                <div class="sidebar-post">
                                    <div class="widget-box map-area">
                                        <div class="widget-bg-color post-author-box lp-border-radius-5">
                                            <div class="widget-header margin-bottom-25 hideonmobile">
                                                <ul class="post-stat">
                                                    <li>
                                                        <a class="md-trigger parimary-link singlebigmaptrigger" data-lat="25.6929895" data-lan="-100.1712571" data-modal="modal-4">
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="widget-content ">
                                                <div class="widget-map pos-relative">
                                                    <div id="singlepostmap" class="singlemap leaflet-container leaflet-fade-anim" data-pinicon="http://studio.listingprowp.com/wp-content/themes/listingpro/assets/images/pins/pin.png" tabindex="0" style="position: relative;"><div class="leaflet-map-pane" style="transform: translate3d(0px, 0px, 0px);"><div class="leaflet-tile-pane"><div class="leaflet-layer"><div class="leaflet-tile-container" style=""></div><div class="leaflet-tile-container leaflet-zoom-animated" style=""><img class="leaflet-tile leaflet-tile-loaded" src="https://b.tile.openstreetmap.org/18/58129/111702.png" style="height: 256px; width: 256px; left: 47px; top: -18px;"><img class="leaflet-tile leaflet-tile-loaded" src="https://a.tile.openstreetmap.org/18/58128/111702.png" style="height: 256px; width: 256px; left: -209px; top: -18px;"><img class="leaflet-tile leaflet-tile-loaded" src="https://c.tile.openstreetmap.org/18/58130/111702.png" style="height: 256px; width: 256px; left: 303px; top: -18px;"></div></div></div><div class="leaflet-objects-pane"><div class="leaflet-shadow-pane"></div><div class="leaflet-overlay-pane"></div><div class="leaflet-marker-pane"><div class="leaflet-marker-icon leaflet-zoom-animated leaflet-clickable" tabindex="0" style="transform: translate3d(179px, 90px, 0px); z-index: 90;"><div class="lpmap-icon-shape pin "><div class="lpmap-icon-contianer"><img src="http://studio.listingprowp.com/wp-content/themes/listingpro/assets/images/pins/pin.png"></div></div></div></div><div class="leaflet-popup-pane"></div></div></div><div class="leaflet-control-container"><div class="leaflet-top leaflet-left"><div class="leaflet-control-zoom leaflet-bar leaflet-control"><a class="leaflet-control-zoom-in leaflet-disabled" href="#" title="Zoom in">+</a><a class="leaflet-control-zoom-out" href="#" title="Zoom out">-</a></div></div><div class="leaflet-top leaflet-right"></div><div class="leaflet-bottom leaflet-left"></div><div class="leaflet-bottom leaflet-right"><div class="leaflet-control-attribution leaflet-control"><a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a></div></div></div></div>
                                                    <div class="get-directions">
                                                        <a href="https://www.google.com/maps?daddr=25.6929895,-100.1712571" target="_blank">
                                                            <span class="phone-icon">
                                                                <i class="fa fa-map-o"></i>
                                                            </span>
                                                            <span class="phone-number ">
                                                                Dirección 												</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="listing-detail-infos margin-top-20 clearfix">
                                            <ul class="list-style-none list-st-img clearfix">
                                                <li class="lp-details-address">
                                                    <a>
                                                        <span class="cat-icon">
                                                            <img class="icon icons8-mapMarkerGrey" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAC8UlEQVRoge1aS3HDMBA1BEMIhEAwhEAohEIIgx3tk8+FYAiGEAiBYAjpoZKyTmx9Ym2cQ9+MZ3qIpf2+/bhN849nEFFLQGeMOTMwArgwMDEwub8HtpYI6PaWdRFE1LK15IS+ZT/WEhEd9pZ/UQEAF2PMmYCO+v5IRK17DgBOxpiz885MoX2VAAYh0Eh9f8x+v++PbO2PNAARtZoyrwlxdda8bon52VnAVGKMTSCiVoTGWCPGnXfHoIy2Z2Q4aYSCVwbApea5T3C0+hdOClaT3jbGnGufHy7x7KRZB4joIELsUP2C4A1gqH74AwKbWfujcfiVgVsOqxBRy8zfDAwALu7dITdcnPdvDEybBZcAcMpNQgK6p4InHgCXnNAMlMz8VUOHpmnuYZWyKAGdqPKjqO4HACepYEoZQSz1wktQ7mlVCVlf/nqoRVZzLU0ybJxRbgyMW+UP8ALGWMTlhC+SUWr29SLmYZU8CYkeUyTDax4+52IMqKOIrx8RS+coWyqkz6cXRF5GCK0I9dZWhPr+WL1dCe16hAp9EcsJrZxEVkn2wDTM32u/EZU/ebE3TCzZA3nUpN+cOuKmxWuBgNHGU9SRetOjYJmotUU4zCq4X0rIiTIVgiUsmA2RnMlkfpj4lp4pJVzJfcUQCb+aJxJ+JeSoe2JgNMacc+YYUVzrd9rM/PW2Nr7QaEWQ3K85U88GOK2dl0pr/XiH87zq3B7Cy9qr1h2hg1Y0VtM0d69UpUWHQPNKy40ZfKHScH1Oe18NWhwviqn+gs5DTHnVqPit3vCYeaXCrla0QO/zhofcOm455y3bxZQANepKbjesChkSr7wvq7h63UhBroBK39UgjZchls5FiT+j23d93EkhWDYz8XdP8BhKBJPdwW4JvoZZiEX2umI/PH3s9/bUXvejQ+oRfP+o+bSoEMuH5H54dzzUhjCqijlc55OaBuRaiIBOfjfRmGNUIfMleGjPf9XYApEvNwaGj8+LNQiW+vzk/hT8Ak0IUQVkeTWPAAAAAElFTkSuQmCC" alt="mapMarkerGrey">												<!-- <i class="fa fa-map-marker"></i> -->
                                                        </span>
                                                        <span>Carr. Libre Monterrey - Reynosa 1340, Valle Soleado, 67114 Guadalupe, N.L.</span>
                                                    </a>
                                                </li>
                                                <li class="lp-listing-phone">
                                                    <a data-lpid="{{$announcement->id}}" href="tel:{{$announcement->user->mobile_phone}}">
                                                        <span class="cat-icon">
                                                            <img class="icon icons8-phone" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEbElEQVRoQ81a4XnUMAy1vEC7QekEwASUCWgnoEzQY4FE9gLQCWgnoJ2AMgF0AtoJgAUivpdPyefzJU6cC5fcv/Z8iZ71JD3JJpP4MPO5iJTGmFfGmCcicsx8k/rNUt9R14uZ+VhEPhljLuPviegtMz8sZXDfe3eAKIhv8IKI/LXWMjN/ZuaNgoNnXjPznzWB2QLCzDAeIOCRR2vtJTP/bAwuiuInEb00xtw55y5WCaQDxFm868z8QkR+AQARXTDz3VrA1B5RA3+oJ26ttZs+6hRFwUSEBPCHiE7XQjGKYuLee38+tMsNxUTk2nu/GVp/iO+pKIrPRHSlMbFDp56shliCB0GxVWQxKssSnH+Ra1BAsVVkMQAR7KxzrrOmpGixJoqBWtjREw3cpxw+a6ZbBcUA5IGI3kxNpyHFnHOnORsx51oAqdPpPhmooecUr84FBum3yUBPU3ZU0/fvqXE2GxA8KIiT7FTaaDAR+e69P5vLsNzn1JkqoNet935H8fY9VL2B9H2cm75zDR1a30gUiMSaHjk8DzZgUW/UdgfK9oaI3ovIKK9EAjKbkkM7nPt9CyQyDP1GK9+7HlqW5VdjDDrIUcBzDctdv1XNg5rw4Jx7m4iNUGtBAWcV0lwjx6yPG6vjqqpQ6Y+I6CM6wx7ROGrdGAPmWtPV6oIuoA36DVCsc7d1MIF1q1DAnUKxKIo7InpnjElSLGqyEPDJuJpr97ue0ztFqaoK/fmJiDjvPfcZURRFne2MMVgPMIsMJXqlOzOf6SAiSR0UxaqqIDwxlFgMTLIHiaiTipfFwQw2U0G8JHcbdUjpeLSEZwaBRNRJzrOgpJVmAAO6YWR0kJgZBIIgj3b7xjn3IVUsAzAHi5lRQBRMu9upYhmvPRTNRgNRAy9F5IsWwQ+pyXxEs9GeAZUx1cmtSVlAJoBBAkBxbVIzwHcWTVUKV8aYpjmDVML6UZP/bCATwISpGbIHCaA1TusVRrB93SUGiDiXSSaNSUAmgoFBUABGRNhae6uHSHVHqkcYmDnXB0lBDcOfg96ZDCQXTIdxbeKDDLLW4gxma9c1ziCBQE18er2zF5ApYEAljZsjEbnXyX+ynxnjnb2BxGBEZOO9v04p3SmZacg7swCJwRhjkkVzHznf553ZgDRgqqoCjyFRkHaRPmeXKLF38J5ZgfRUdaTb/9LTbx1t7OPmhN4KC+FO7Zjzne3cec6Hhs9S1YzUiZa5rh3eezfn+4Jx7ePs1IoNjYIT0h5xszfVwlNoqIX/DkTjpq0dmM6od5Ipeih96xkmjsvrAeFBgCgYaK6Watp4YXaWNXmJTqFxqaE+wD0YkGaHoXI1RZ/o/wAOonAU3cqyRBuBduLZWvuqSe8HBxJ4Z6MXDxqMqDvXfbK9444MPNF6cxEggXeQpnH0V6ti/cAzdyLyYK19hKdU6uO2UnPRZwsEfrcokAAQusLLqqrgpYZyO/GulxrOu2i4CiBR/cFsANdI0GjhIgOmnc/wkl656pQ8/wC3pFkyvejV7AAAAABJRU5ErkJggg==" alt="phone">												<!-- <i class="fa fa-mobile"></i> -->
                                                        </span>
                                                        <span>{{$announcement->user->mobile_phone}}</span>
                                                    </a>
                                                </li>
                                                <li class="lp-listing-phone-whatsapp">
                                                    <a href="https://api.whatsapp.com/send?phone=+{{$announcement->user->mobile_phone}}&amp;text=Hi, Contacting for you listing" target="_blank">
                                                        <span class="cat-icon">
                                                            <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                                        </span>
                                                        <span>
                                                            Call on Whatsapp
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="widget-box widget-social">
                                                <div class="widget-content clearfix">
                                                    <ul class="list-style-none list-st-img">
                                                        <li class="lp-fb">
                                                            <a href="#" class="padding-left-0" target="_blank">
                                                                <img class="icon icons8-fb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACcUlEQVRoge2a3bWqMBCFKYESLMESKMESLIES7GBW9h6eKcESKIESLIESvA8mOXCOQIKC8S5mrbwYycyXmSSTnywbESELqArJFmQH8v6h0pFsoVqTPI3Z+xegqo4grx80fLKQbEXkMAkB4Ox63/aCCFlIVR2De+LNIiIHkidjzAWqNw8FlE8/AFD6P6nWIpJvbHOQQFVGYUTk0PNEeBx+SIQsHMwgWkA21hPyQfuixHtG9ZZlWZaRPLkfUg2nMfFjBjhnUK2/zRtOjDEXG2LXzK4TXzE2fouPJrLz7pmdmxMUEcl/QOzo39QAsrBh0fjM4dGhV6jWAMrQtcvbvyWI7cHwrMHNSCmBSFUdXRiTbF2vi0huy4HkCUDpJ6AAuzYH6XmiCZnmkwSxiegdZBe6ViUJ4uZ7Y8wl9JskQVxYPVurRCQ3xlzG9j0BbW8IMrFWDbLZJ2W27YRAHnVksSTX2zq0RnW8qn8HiVUwF+9zq/tcDvgtIF2ontVBlnzrtrIk22A9KYL4gxDVOlhPkiARu9a0QSYygVE9KQ/2kF3rN4DMzlj97/cFcZGyyLqotneQJcoi66La3kGWKIusi2p7B1miLLIuqu0dZImyyLqotv8nkC40QXtZWWTdnPSuFe6bXPSsBuIuRVVvfhMTc5wZK2uB9K7Ur4PL0NfMnVC4AogNq2YQTS681roQXQPEHYzbJx2PE0r7YOCxK1vhuca7QezY6EB2QhbDBodPON7qmXeBiEhuD727yXHdhyHZGmMuf4gXyCsgIpILWQAo/RAgOwDl5KG3VNWx90FyhWQbFf4AzlCtB0+LPlPc1XUD4DzmhX+QRYQ6YahpGwAAAABJRU5ErkJggg==" alt="fb">
                                                            </a>
                                                        </li>
                                                        <li class="lp-tw">
                                                            <a href="#" class="padding-left-0" target="_blank">
                                                                <!-- <i class="fa fa-twitter"></i> -->
                                                                <img class="icon icons8-tw" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADSElEQVRoge1Zy5GDMAxNCZSQElJCSqCElEAJ6UDjJ3OmBEqghJRACZSQPSAbYf5gkj3kzexhJ9jW90mWL5cffvjhh7NBRAkzpwAyY8wTwIOY79+WazWI+c7MLzC/J/4aY8xzaQ8wl6OKU57fYG1BRMkpChAlsJa0wKJQCWsJ1hZaQWZ+UZ7f9HpmTntGsLYYHATmSn6sYysjRqqdAgCyqTMoz29ellYeEuGb0HNa0XZx66q3WhxNGSJKlBAVEV3XrAOQhYIH3qDhIudya4vYnpE932Aut66lPL95IiC6grnUYQXmqhde7gNmTvX/sLYeuG8DmDn1YXDAKOLVMvCQj55OEYlf7XZlyfcSi0zB5wWQ7VVC9qFRJdpwS7sPJYZDq+kNQhZZgiTtG8zNESUul45ujTFPMXAzaiCXF2OCBozzhrW0JmFVslZHFRnZcyHZgceqTSR55743xjwnDzymRDMZqgAea5hFiloRximsJQCZ9qgyzqH8UPvVS8Z2Ag4SfnZjIOuFXOAtx/l7iWJKkUX5vFc0na0AMd/F+tWoUmNtxA6sUkTYgHQF3nsgEV2lq30YY55rPbwEZ5i5g5MxSzLzK4YAMSBVfTlavCeCmO8Vmy9C1aT5SPHxLQzjQuOsln4rfKuzlG+qgkcrXjHh+qxFBtR5cqRJPAubSoMvdBvp92y4/FhNProoxuL+GPCtyZZWJ7gpVv8h2V2HsJlBxZXd/Xhlt3sGFFttv61OjmsiNX9bEJaFbYunbmMfzptD3rhcgpZFWvNv5IrzxqHu+dtUrJjq2CRHpnouTz5a7YU5m2i9nnScbsPXJ5irZ8BIV+R24zy/BQxWEvP9LKXQzddep+TlyOAhapsfzAKGM93YQDjti1Bbgilic9odiIgSAI8gxKIceKoSRJRIbqQym9Lj/EZalsPx2+sgWpq97t4M7SNLzcyviTeI3itSjCRXDz7xGHEQ853Va8isNWbiycip8efMPPjs2TxkpGp2mrcRxHw3xjyDHKtOYaaJUaif725xPRElE8K3U5qIRpoFgGzy1VVCDtYWfqgnU8aZHGsJ4kvNZ3vBasOunCGBUWKAtfVXhZ+DG4XqcSiADEBGzPd/KfQPPxzDHz/jPqGXuPfUAAAAAElFTkSuQmCC" alt="tw">
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</body>
<script type="text/javascript" src="/frontend/js/pagination.js" id="pagination-js"></script>
<script>
tinymce.init({
    selector: '#edit_description',
    entity_encoding : "raw",
    menubar: false,
    statusbar: false,
    toolbar: false,
    plugins : 'advlist autolink link image lists charmap print preview',// font',
});
jQuery(document).ready(function () {
    $this=jQuery('#edit_description');
    $this.val(unescape($this.val()).replace('v1/api/downloadFile','/v1/api/downloadFile'));
});
</script>
@endsection
