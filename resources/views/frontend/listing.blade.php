@extends('frontend.layouts.home')
@inject('dateFormat', 'App\Services\DateService')
@section('content')
<body class="search search-no-results listing-skeleton-view-grid_view wpb-js-composer js-comp-ver-6.4.1 vc_responsive" data-submitlink="/listing" data-sliderstyle="style2" data-defaultmaplat="0" data-defaultmaplot="-0" data-lpsearchmode="keyword" data-maplistingby="geolocaion" >
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
        <section class="page-container clearfix section-fixed listing-with-map pos-relative taxonomy" id="">
            <div class="sidemap-container pull-right sidemap-fixed">
				<div class="overlay_on_map_for_filter"></div>
				<div class="map-pop map-container3" id="map-section">
					<div id='map' class="mapSidebar"></div>
				</div>
				<a href="#" class="open-img-view"><i class="fa fa-file-image-o"></i></a>
			</div>
			<div class="all-list-map"></div>
			<div class=" pull-left post-with-map-container-right">
				<div class="post-with-map-container pull-left">				
					<!-- archive adsense space before filter -->
					<div class="margin-bottom-20 margin-top-30">
                        <div class="row listing-style-3">
                            <div class="col-md-12 search-row margin-top-subtract-35">
                                <form autocomplete="off" class="clearfix" method="post" enctype="multipart/form-data" id="searchform">
                                    <div class="filter-top-section pos-relative row">
                                        <div class="lp-title col-md-10 col-sm-10">
                                            <h3 class="test" data-rstring='Results For <span class="font-bold term-name"></span>'>
                                                <span class="dename"></span>
                                                <span class="font-bold lstring">Announcements</span>
                                            </h3>
                                        </div>
                                        <div class="pull-right margin-right-0 col-md-2 col-sm-2 clearfix">
                                            <div class="listing-view-layout">
                                                <ul>
                                                    <li><a class="grid active" href="#"><i class="fa fa-th-large"></i></a></li>
                                                    <li><a class="list " href="#"><i class="fa fa-list-ul"></i></a></li>
                                                    <li><a href="#" class="open-map-view"><i class="fa fa-map-o"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-inline lp-filter-inner" id="pop">
                                        <a href="#" class="open-map-view"><i class="fa fa-map-o"></i></a>
                                        <a id="see_filter">See Filters</a>
                                        <div class="more-filter lp-filter-inner-wrapper" id="more_filters" style="display: block !important;">
                                            <div class="more-filter-left-col col-md-9 col-xs-9 pull-left">
                                                <div class="row">
                                                    <div class="clearfix lp-show-on-mobile"></div>
                                                    <div class="search-filters form-group padding-right-0">
                                                        <ul>
                                                            <li class="lp-tooltip-outer">
                                                                <a class="btn default"><i class="fa fa-sort" aria-hidden="true"></i>Ordenar Por</a>
                                                                <div class="lp-tooltip-div">
                                                                    <div class="lp-tooltip-arrow"></div>
                                                                    <div class="lp-tool-tip-content clearfix">
                                                                        <div class="sortbyrated-outer">
                                                                            <div class="border-dropdown sortbyrated">
                                                                                <ul class="comboboxCategory clearfix" id="select-lp-more-filter">
                                                                                    <li id="mostviewed" class="sortbyfilter sortbyviews">
                                                                                        <a href="/listing?sort=views" data-value="mostviewed" class="{{$sort=='views'?'active':''}}">Mas Visto</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <!-- end shebi-->
                                                </div>
                                            </div>
                                            <div class="more-filter-right-col col-md-3 col-xs-3 pull-right">
                                                <div class="row">
                                                    <div class="form-group pull-right margin-right-0 lp-search-cats-filter-dropdown">
                                                        <div class="input-group border-dropdown">
                                                            <div class="input-group-addon lp-border"><i class="fa fa-list"></i></div>
                                                            <select class="comboboxCategory chosen-select2 tag-select-four" name="searchcategory" id="searchcategory">
                                                                <option value="">All Categories</option>
                                                                @for($i=0;$i<count($categories);$i++)
                                                                <option {{$categories[$i]['id']==$category?'selected':''}} value="{{$categories[$i]['id']}}">{{$categories[$i]['name']}}</option>
                                                                @endfor
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" name="lp_search_loc" id="lp_search_loc" value="" />                                            
                                    <input type="submit" style="display:none;">
                                    <input type="hidden" name="clat">
                                    <input type="hidden" name="clong">
                                </form>
                                <div class="lp-s-hidden-ara hide">
                                    <input type="hidden" id="lp_current_query" value="">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="LPtagsContainer "></div>
                            </div>
                        </div>
                    </div>
                    <div class="content-grids-wraps">
                        @if(count($announcements)==0)
                        <div class="clearfix lp-list-page-grid " id="content-grids" >
                            <div class="promoted-listings">
                                <div class="md-overlay"></div>
                            </div>
                            <div class="text-center margin-top-80 margin-bottom-80">
                                <h2>No Results</h2>
                                <p>Lo sentimos! No hay anuncios con ese criterio.</p>
                                <p>Try changing your search filters or<a href="/?select=&#038;lp_s_loc=ssss&#038;lp_s_tag=&#038;lp_s_cat=&#038;s=home&#038;post_type=listing">Reset Filter</a>
                                </p>
                            </div>									
                            <div class="md-overlay"></div>
                        </div>
                        @else
                        @foreach($announcements as $ann)
                        <div data-feaimg="data:image/png;base64,{{$ann->DiscoveryImage()}}" 
                            class="col-md-6  lp-grid-box-contianer grid_view_s1 grid_view2 card1 lp-grid-box-contianer1 col-sm-12" 
                            data-title="Sasha Milf" data-postid="{{$ann['id']}}" 
                            data-lattitue="25.6758768" data-longitute="-100.3011193" 
                            data-posturl="/listing/{{$ann['id']}}" 
                            data-lppinurl="/images/classic/pin.png">
                            <div class="lp-grid-box">
                                <div class="lp-grid-box-thumb-container">
                                    <div class="lp-grid-box-thumb">
                                        <div class="show-img">
                                            <a href="/listing/{{$ann['id']}}">
                                                <img src="data:image/png;base64,{{$ann->DiscoveryImage()}}" alt="image" style="width: calc(100% + 22px)!important;margin-left: -11px;margin-top: -8px;"/>
                                            </a>
                                        </div>
                                        <div class="hide-img listingpro-list-thumb">
                                            <a href="/listing/{{$ann['id']}}">
                                                <img src="data:image/png;base64,{{$ann->DiscoveryImage()}}" style="max-width: unset;width: calc(100% + 22px)!important;margin-left: -11px;margin-top: -8px;"/>
                                            </a>
                                        </div>
							   	    </div>
                                    <div class="lp-grid-box-quick">
                                        <ul class="lp-post-quick-links">
                                            <li style="display:none;">
                                                <a href="#" data-post-type="grids" data-post-id="{{$ann['id']}}" 
                                                data-success-text="Saved" class="status-btn add-to-fav lp-add-to-fav">
                                                    <i class="fa fa-bookmark-o"></i> <span>Save</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="icon-quick-eye md-trigger qickpopup-" 
                                                data-mappin="/images/classic/pin.png" data-modal="modal-{{$ann['id']}}"><!--<i class="fa fa-eye"></i> Preview--> .</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="lp-grid-desc-container lp-border clearfix">
                                    <div class="lp-grid-box-description ">
                                        <div class="lp-grid-box-left pull-left">
                                            <h4 class="lp-h4">                                            
                                                <a href="/listing/{{$ann['id']}}"><span class="listing-pro" style="display:block!important;">Ad</span>{{$ann['title']}}</a>
                                            </h4>
                                            <ul>
                                                <li>
												    <!--<span class="rate lp-rate-good">5.0<sup>/ 5</sup></span>-->
                                                    <span>{{$ann->views}}	Views</span>
                                                </li>
                                                <li class="middle">
                                					<span class="element-price-range list-style-none"></span>
                                                </li>
											    <li>
                                                    <a href="/listing?cat={{$ann->category}}">{{$ann->category_name->name}}</a>
                                                </li>
										    </ul>
                                            <div class="review">
                                                <div class="review-post">
                                                    <div class="reviewer-thumb">
                                                        <img src="{{$ann->user->avatar==null?'/images/default-avatar.png':'/v1/api/downloadFile?path='.$ann->user->avatar}}" alt="image">
                                                    </div>
                                                    <div class="reviewer-details">
                                                        <p>{{$ann->user->ac_about}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
									    <div class="lp-grid-box-right pull-right">
                                        </div>
								    </div>
                                    <!--
                                    <div class="lp-grid-box-bottom">
										<div class="pull-left">
											<div class="show">
												<span class="cat-icon">
                                                    <img class="icon icons8-mapMarkerGrey" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAC8UlEQVRoge1aS3HDMBA1BEMIhEAwhEAohEIIgx3tk8+FYAiGEAiBYAjpoZKyTmx9Ym2cQ9+MZ3qIpf2+/bhN849nEFFLQGeMOTMwArgwMDEwub8HtpYI6PaWdRFE1LK15IS+ZT/WEhEd9pZ/UQEAF2PMmYCO+v5IRK17DgBOxpiz885MoX2VAAYh0Eh9f8x+v++PbO2PNAARtZoyrwlxdda8bon52VnAVGKMTSCiVoTGWCPGnXfHoIy2Z2Q4aYSCVwbApea5T3C0+hdOClaT3jbGnGufHy7x7KRZB4joIELsUP2C4A1gqH74AwKbWfujcfiVgVsOqxBRy8zfDAwALu7dITdcnPdvDEybBZcAcMpNQgK6p4InHgCXnNAMlMz8VUOHpmnuYZWyKAGdqPKjqO4HACepYEoZQSz1wktQ7mlVCVlf/nqoRVZzLU0ybJxRbgyMW+UP8ALGWMTlhC+SUWr29SLmYZU8CYkeUyTDax4+52IMqKOIrx8RS+coWyqkz6cXRF5GCK0I9dZWhPr+WL1dCe16hAp9EcsJrZxEVkn2wDTM32u/EZU/ebE3TCzZA3nUpN+cOuKmxWuBgNHGU9SRetOjYJmotUU4zCq4X0rIiTIVgiUsmA2RnMlkfpj4lp4pJVzJfcUQCb+aJxJ+JeSoe2JgNMacc+YYUVzrd9rM/PW2Nr7QaEWQ3K85U88GOK2dl0pr/XiH87zq3B7Cy9qr1h2hg1Y0VtM0d69UpUWHQPNKy40ZfKHScH1Oe18NWhwviqn+gs5DTHnVqPit3vCYeaXCrla0QO/zhofcOm455y3bxZQANepKbjesChkSr7wvq7h63UhBroBK39UgjZchls5FiT+j23d93EkhWDYz8XdP8BhKBJPdwW4JvoZZiEX2umI/PH3s9/bUXvejQ+oRfP+o+bSoEMuH5H54dzzUhjCqijlc55OaBuRaiIBOfjfRmGNUIfMleGjPf9XYApEvNwaGj8+LNQiW+vzk/hT8Ak0IUQVkeTWPAAAAAElFTkSuQmCC" alt="mapMarkerGrey">
                                                </span>
                                                <a href="http://localhost/location/monterrey/">
                                                    Monterrey
                                                </a>
                                            </div>
                                            <div class="hide">
                                                <span class="cat-icon">
                                                    <img class="icon icons8-mapMarkerGrey" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAC8UlEQVRoge1aS3HDMBA1BEMIhEAwhEAohEIIgx3tk8+FYAiGEAiBYAjpoZKyTmx9Ym2cQ9+MZ3qIpf2+/bhN849nEFFLQGeMOTMwArgwMDEwub8HtpYI6PaWdRFE1LK15IS+ZT/WEhEd9pZ/UQEAF2PMmYCO+v5IRK17DgBOxpiz885MoX2VAAYh0Eh9f8x+v++PbO2PNAARtZoyrwlxdda8bon52VnAVGKMTSCiVoTGWCPGnXfHoIy2Z2Q4aYSCVwbApea5T3C0+hdOClaT3jbGnGufHy7x7KRZB4joIELsUP2C4A1gqH74AwKbWfujcfiVgVsOqxBRy8zfDAwALu7dITdcnPdvDEybBZcAcMpNQgK6p4InHgCXnNAMlMz8VUOHpmnuYZWyKAGdqPKjqO4HACepYEoZQSz1wktQ7mlVCVlf/nqoRVZzLU0ybJxRbgyMW+UP8ALGWMTlhC+SUWr29SLmYZU8CYkeUyTDax4+52IMqKOIrx8RS+coWyqkz6cXRF5GCK0I9dZWhPr+WL1dCe16hAp9EcsJrZxEVkn2wDTM32u/EZU/ebE3TCzZA3nUpN+cOuKmxWuBgNHGU9SRetOjYJmotUU4zCq4X0rIiTIVgiUsmA2RnMlkfpj4lp4pJVzJfcUQCb+aJxJ+JeSoe2JgNMacc+YYUVzrd9rM/PW2Nr7QaEWQ3K85U88GOK2dl0pr/XiH87zq3B7Cy9qr1h2hg1Y0VtM0d69UpUWHQPNKy40ZfKHScH1Oe18NWhwviqn+gs5DTHnVqPit3vCYeaXCrla0QO/zhofcOm455y3bxZQANepKbjesChkSr7wvq7h63UhBroBK39UgjZchls5FiT+j23d93EkhWDYz8XdP8BhKBJPdwW4JvoZZiEX2umI/PH3s9/bUXvejQ+oRfP+o+bSoEMuH5H54dzzUhjCqijlc55OaBuRaiIBOfjfRmGNUIfMleGjPf9XYApEvNwaGj8+LNQiW+vzk/hT8Ak0IUQVkeTWPAAAAAElFTkSuQmCC" alt="mapMarkerGrey">													</span>
                                                <span class="text gaddress">Albino Espinosa, Monterrey cen...</span>
                                            </div>
                                        </div>
                                        <div class="pull-right">
                                            <a class="status-btn"><span class="grid-closed status-red li-listing-clock-outer">Day Off!</span> 
                                            </a>
                                        </div>
                                        <div class="clearfix"></div>
									</div>
                                    -->
                                </div>
                            </div>
                        </div>
                        @endforeach
                        @endif
                    </div>
                    <div id="lp-pages-in-cats"></div>
                    <div class="lp-pagination pagination lp-filter-pagination-ajx"></div>
                </div>
                <input type="hidden" id="lp_current_query" value="">
            </div>
        </section>
    </div>
</body>
<script type="text/javascript" src="/frontend/js/pagination.js" id="pagination-js"></script>
@endsection
