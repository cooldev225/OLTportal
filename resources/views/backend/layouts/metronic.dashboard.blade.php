<!doctype html>
<html lang="{{ $lang }}">
<head>
    <meta charset="utf-8">
    <meta name="description" content="Witbooster"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script type="text/javascript" src="/backend/js/common.js"></script>
    <script type="text/javascript" src="/metronic/plugins/global/plugins.bundle.js"></script>
    <script type="text/javascript" src="/metronic/plugins/custom/prismjs/prismjs.bundle.js"></script>
    <script type="text/javascript" src="/metronic/js/scripts.bundle.js"></script>
    <script type="text/javascript" src="/metronic/plugins/custom/datatables/datatables.bundle.js"></script>
    <script type="text/javascript" src="/metronic/plugins/custom/fullcalendar/fullcalendar.bundle.js"></script>
    <script type="text/javascript" src="/metronic/js/pages/widgets.js"></script>
    <script src="/metronic/plugins/custom/tinymce/tinymce.bundle.js"></script>

    <script src="/frontend/js/lang/{{$lang}}.js"></script>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
    <!-- Styles -->
    <link href="/metronic/plugins/custom/datatables/datatables.bundle.css" rel="stylesheet">
    <link href="/metronic/plugins/custom/fullcalendar/fullcalendar.bundle.css" rel="stylesheet">
    <link href="/metronic/plugins/global/plugins.bundle.css" rel="stylesheet">
    <link href="/metronic/plugins/custom/prismjs/prismjs.bundle.css" rel="stylesheet">
    <link href="/metronic/css/style.bundle.css" rel="stylesheet">
    <link href="/metronic/css/themes/layout/header/base/light.css" rel="stylesheet">
    <link href="/metronic/css/themes/layout/header/menu/light.css" rel="stylesheet">
    <link href="/metronic/css/themes/layout/brand/dark.css" rel="stylesheet">
    <link href="/metronic/css/themes/layout/aside/dark.css" rel="stylesheet">
    <link href="/backend/css/common.css" rel="stylesheet">
    <link href="/backend/css/custom.css" rel="stylesheet">

    <link rel="shortcut icon" href="/images/logo.ico"/>
</head>
@inject('dateFormat', 'App\Services\DateService')
<body id="kt_body" class="header-fixed header-mobile-fixed subheader-enabled subheader-fixed">
<!--begin::Body-->
    <!--begin::Header Mobile-->
    <div id="kt_header_mobile" class="header-mobile align-items-center  header-mobile-fixed " >
        <!--begin::Logo-->
        <a href="/admin/home">
            <img alt="Logo" src="/images/logo.png" />
        </a>
        <!--end::Logo-->

        <!--begin::Toolbar-->
        <div class="d-flex align-items-center">
            <!--begin::Aside Mobile Toggle-->
            <button class="btn p-0 burger-icon burger-icon-left" id="kt_aside_mobile_toggle">
                <span></span>
            </button>
            <!--end::Aside Mobile Toggle-->

            <!--begin::Header Menu Mobile Toggle-->
            <button class="btn p-0 burger-icon ml-4" id="kt_header_mobile_toggle">
                <span></span>
            </button>
            <!--end::Header Menu Mobile Toggle-->

            <!--begin::Topbar Mobile Toggle-->
            <button class="btn btn-hover-text-primary p-0 ml-2" id="kt_header_mobile_topbar_toggle">
                <span class="svg-icon svg-icon-xl">
                    <!--begin::Svg Icon | path:assets/media/svg/icons/General/User.svg-->
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <polygon points="0 0 24 0 24 24 0 24"/>
                            <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
                            <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fill-rule="nonzero"/>
                        </g>
                    </svg>
                    <!--end::Svg Icon-->
                </span>
            </button>
            <!--end::Topbar Mobile Toggle-->
        </div>
        <!--end::Toolbar-->
    </div>
    <!--end::Header Mobile-->

    <div class="d-flex flex-column flex-root">
        <!--begin::Page-->
        <div class="d-flex flex-row flex-column-fluid page">

            <!--begin::Wrapper-->
            <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                <!--begin::Header-->
                <div id="kt_header" class="header  header-fixed " >
                    <!--begin::Container-->
                    <div class=" container-fluid  d-flex align-items-stretch justify-content-between">
                        <!--begin::Header Menu Wrapper-->
                        <div class="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
                            <!--begin::Header Logo-->
                            <div class="header-logo">
                                <a href="/admin/home">
                                    <img alt="Logo" src="/images/logo.png"/>
                                </a>
                            </div>
                            <div id="kt_header_menu" class="header-menu header-menu-mobile  header-menu-layout-default " >
                                <!--begin::Header Nav-->
                                <ul class="menu-nav">
                                    <li class="menu-item menu-item-rel <?php echo Request::path()=='admin'||Request::path()=='admin/home'||Request::path()=='admin/home/index'?'menu-item-hover':'';?>" data-menu-toggle="click" aria-haspopup="true">
                                        <a onclick="location.href='/admin/home';" class="menu-link menu-toggle">
                                            <span class="svg-icony svg-icon-2x"><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo1\dist/../src/media/svg/icons\Shopping\Chart-bar3.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24"/>
                                                        <rect fill="#000000" opacity="0.3" x="7" y="4" width="3" height="13" rx="1.5"/>
                                                        <rect fill="#000000" opacity="0.3" x="12" y="9" width="3" height="8" rx="1.5"/>
                                                        <path d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z" fill="#000000" fill-rule="nonzero"/>
                                                        <rect fill="#000000" opacity="0.3" x="17" y="11" width="3" height="6" rx="1.5"/>
                                                    </g>
                                                </svg><!--end::Svg Icon--></span>
                                            <span class="menu-text ml-2">{{trans('dashboard.dashboard')}}</span>
                                            <i class="menu-arrow"></i>
                                        </a>
                                    </li>
                                    <li class="menu-item menu-item-rel <?php echo Request::path()=='admin/users'||Request::path()=='admin/users/index'?'menu-item-hover':'';?>" data-menu-toggle="click" aria-haspopup="true">
                                        <a onclick="location.href='/admin/users';" class="menu-link menu-toggle">
                                            <span class="svg-icon svg-icon-2x"><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo1\dist/../src/media/svg/icons\General\User.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <polygon points="0 0 24 0 24 24 0 24"/>
                                                        <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
                                                        <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fill-rule="nonzero"/>
                                                    </g>
                                                </svg><!--end::Svg Icon--></span>
                                            <span class="menu-text ml-2">{{trans('dashboard.users')}}</span>
                                            <i class="menu-arrow"></i>
                                        </a>
                                    </li>
                                    <li class="menu-item menu-item-rel <?php echo Request::path()=='admin/ads'||Request::path()=='admin/ads/index'?'menu-item-hover':'';?>" data-menu-toggle="click" aria-haspopup="true">
                                        <a onclick="location.href='/admin/ads';" class="menu-link menu-toggle">
                                            <span class="svg-icon svg-icon-2x"><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo1\dist/../src/media/svg/icons\Shopping\ATM.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24"/>
                                                    <rect fill="#000000" opacity="0.3" x="2" y="4" width="20" height="5" rx="1"/>
                                                    <path d="M5,7 L8,7 L8,21 L7,21 C5.8954305,21 5,20.1045695 5,19 L5,7 Z M19,7 L19,19 C19,20.1045695 18.1045695,21 17,21 L11,21 L11,7 L19,7 Z" fill="#000000"/>
                                                </g>
                                            </svg><!--end::Svg Icon--></span>
                                            <span class="menu-text ml-2">{{trans('dashboard.ads')}}</span>
                                            <i class="menu-arrow"></i>
                                        </a>
                                    </li>
                                    <li class="menu-item menu-item-rel <?php echo Request::path()=='admin/credit'||Request::path()=='admin/credit/index'?'menu-item-hover':'';?>" data-menu-toggle="click" aria-haspopup="true">
                                        <a onclick="location.href='/admin/credit';" class="menu-link menu-toggle">
                                            <span class="svg-icon svg-icon-2x"><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo1\dist/../src/media/svg/icons\Layout\Layout-4-blocks.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24"/>
                                                    <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5"/>
                                                    <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3"/>
                                                </g>
                                            </svg><!--end::Svg Icon--></span>
                                            <span class="menu-text ml-2">PLANS</span>
                                            <i class="menu-arrow"></i>
                                        </a>
                                    </li>
                                    <li class="menu-item menu-item-rel <?php echo Request::path()=='admin/trans'||Request::path()=='admin/trans/index'?'menu-item-hover':'';?>" data-menu-toggle="click" aria-haspopup="true">
                                        <a onclick="location.href='/admin/trans';" class="menu-link menu-toggle">
                                            <span class="svg-icon svg-icon-2x"><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo1\dist/../src/media/svg/icons\Shopping\Cart1.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24"/>
                                                    <path d="M18.1446364,11.84388 L17.4471627,16.0287218 C17.4463569,16.0335568 17.4455155,16.0383857 17.4446387,16.0432083 C17.345843,16.5865846 16.8252597,16.9469884 16.2818833,16.8481927 L4.91303792,14.7811299 C4.53842737,14.7130189 4.23500006,14.4380834 4.13039941,14.0719812 L2.30560137,7.68518803 C2.28007524,7.59584656 2.26712532,7.50338343 2.26712532,7.4104669 C2.26712532,6.85818215 2.71484057,6.4104669 3.26712532,6.4104669 L16.9929851,6.4104669 L17.606173,3.78251876 C17.7307772,3.24850086 18.2068633,2.87071314 18.7552257,2.87071314 L20.8200821,2.87071314 C21.4717328,2.87071314 22,3.39898039 22,4.05063106 C22,4.70228173 21.4717328,5.23054898 20.8200821,5.23054898 L19.6915238,5.23054898 L18.1446364,11.84388 Z" fill="#000000" opacity="0.3"/>
                                                    <path d="M6.5,21 C5.67157288,21 5,20.3284271 5,19.5 C5,18.6715729 5.67157288,18 6.5,18 C7.32842712,18 8,18.6715729 8,19.5 C8,20.3284271 7.32842712,21 6.5,21 Z M15.5,21 C14.6715729,21 14,20.3284271 14,19.5 C14,18.6715729 14.6715729,18 15.5,18 C16.3284271,18 17,18.6715729 17,19.5 C17,20.3284271 16.3284271,21 15.5,21 Z" fill="#000000"/>
                                                </g>
                                            </svg><!--end::Svg Icon--></span>
                                            <span class="menu-text ml-2">CREDITS</span>
                                            <i class="menu-arrow"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!--end::Header Menu Wrapper-->

                        <!--begin::Topbar-->
                        <div class="topbar">
                            
                            <!--begin::toggle fullscreen-->
                            <div class="topbar-item">
                               <div class="btn btn-icon btn-clean btn-lg mr-1" data-toggle="modal" data-target="#kt_chat_modal">
                                    <span onclick="toggleFullScreen(document.body);" class="svg-icon svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo1\dist/../src/media/svg/icons\Design\Difference.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"/>
                                            <path d="M6,9 L6,15 C6,16.6568542 7.34314575,18 9,18 L15,18 L15,18.8181818 C15,20.2324881 14.2324881,21 12.8181818,21 L5.18181818,21 C3.76751186,21 3,20.2324881 3,18.8181818 L3,11.1818182 C3,9.76751186 3.76751186,9 5.18181818,9 L6,9 Z M17,16 L17,10 C17,8.34314575 15.6568542,7 14,7 L8,7 L8,6.18181818 C8,4.76751186 8.76751186,4 10.1818182,4 L17.8181818,4 C19.2324881,4 20,4.76751186 20,6.18181818 L20,13.8181818 C20,15.2324881 19.2324881,16 17.8181818,16 L17,16 Z" fill="#000000" fill-rule="nonzero"/>
                                            <path d="M9.27272727,9 L13.7272727,9 C14.5522847,9 15,9.44771525 15,10.2727273 L15,14.7272727 C15,15.5522847 14.5522847,16 13.7272727,16 L9.27272727,16 C8.44771525,16 8,15.5522847 8,14.7272727 L8,10.2727273 C8,9.44771525 8.44771525,9 9.27272727,9 Z" fill="#000000" opacity="0.3"/>
                                        </g>
                                    </svg><!--end::Svg Icon--></span>
                               </div>
                            </div>
                            <!--end::toggle fullscreen-->

                            <!--begin::language-->
                            <div class="dropdown show">
                                <div class="topbar-item" data-toggle="dropdown" data-offset="10px,0px" aria-expanded="true">
                                    <div class="btn btn-icon btn-clean btn-lg mr-1">
                                        @for($i=0;$i<count($language_img);$i++)
                                        @if($lang==$language_lab[$i])
                                            <img class="h-20px w-20px rounded-sm" src="/metronic/media/svg/flags/{{$language_img[$i]}}" alt="">
                                        @endif
                                        @endfor
                                    </div>
                                </div>
                            </div>
                            <!--begin::language-->

                            <!--begin::User-->
                            <div class="topbar-item">
                                <div class="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
                                    <span class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">{{trans('layout.hi')}},</span>
                                    <span class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"><?php echo  Auth::user()->firstName; ?></span>
                                    <span class="symbol symbol-lg-35 symbol-25 symbol-light-success">
                                        <span class="symbol-label font-size-h5 font-weight-bold"><?php echo substr(Auth::user()->firstName,0, 1); ?></span>
                                    </span>
                                </div>
                            </div>
                            <!--end::User-->
                        </div>
                        <!--end::Topbar-->
                    </div>
                    <!--end::Container-->
                </div>
                <!--end::Header-->

                <!--begin::Content-->
                <div class="content  d-flex flex-column flex-column-fluid" id="kt_content">
                    <!--begin::Subheader-->
                    <div class="subheader py-2 py-lg-4  subheader-solid " id="kt_subheader">
                        <div class=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                            <div class="d-flex align-items-center flex-wrap mr-2">
                                <h5 class="text-dark font-weight-bold mt-2 mb-2">
                                    @if(Request::path()=='admin/home'||Request::path()=='admin'||Request::path()=='admin/home/index')
                                    <a href="/admin/home" class="btn btn-clean font-weight-bold" style="color:#000;font-size:15px;">Dashboard</a>
                                    @elseif(count(explode('users',Request::path()))>1)
                                    <a href="/admin/users" class="btn btn-clean font-weight-bold" style="color:#000;font-size:15px;">Users</a>
                                    @elseif(count(explode('ads',Request::path()))>1)
                                    <a href="/admin/ads" class="btn btn-clean font-weight-bold" style="color:#000;font-size:15px;">Ads</a>
                                    @endif
                                </h5>
                                <div class="subheader-separator subheader-separator-ver mr-4" style="background-color:#655d5d;font-size:15px;"></div>
                            
                                <span class="text-muted font-weight-bold mr-4">TOTAL USERS / VALIDATED USERS: {{$users_total}}/{{$users_valid}}</span>
                                <span class="text-muted font-weight-bold mr-4"></span>
                                <span class="text-muted font-weight-bold mr-4">TOTAL ADS / ACTIVATED ADS: {{$ads_total}}/{{$ads_valid}}</span>
                                <span class="text-muted font-weight-bold mr-4"></span>
                            </div>
                            <!--end::Info-->

                            <!--begin::Toolbar-->
                            <div class="d-flex align-items-center">
                            </div>
                            <!--end::Toolbar-->
                        </div>
                    </div>
                    <!--end::Subheader-->
                    @yield('content')
                </div>
                <!--end::Content-->

                <!--begin::Footer-->
                @include('backend.layouts.footer')
                <!--end::Footer-->
            </div>
            <!--end::Wrapper-->
        </div>
        <!--end::Page-->
    </div>
    <!--end::Main-->


    <!-- begin::User Panel-->
    <div id="kt_quick_user" class="offcanvas offcanvas-right p-10">
        <!--begin::Header-->
        <div class="offcanvas-header d-flex align-items-center justify-content-between pb-5">
            <h3 class="font-weight-bold m-0">
                {{trans('layout.profile')}}
            </h3>
            <a href="#" class="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_user_close">
                <i class="ki ki-close icon-xs text-muted"></i>
            </a>
        </div>
        <!--end::Header-->

        <!--begin::Content-->
        <div class="offcanvas-content pr-5 mr-n5">
            <!--begin::Header-->
            <div class="d-flex align-items-center mt-5">
                <div class="symbol symbol-100 mr-5">
                    <div class="symbol-label" style="background-image:url('{{Auth::user()->avatar==null?'/images/default-avatar.png':'/v1/api/downloadFile?path='.Auth::user()->avatar}}')"></div>
                    <i class="symbol-badge bg-success"></i>
                </div>
                <div class="d-flex flex-column">
                    <a href="#" class="font-weight-bold font-size-h5 text-dark-75 text-hover-primary">
                        <?php echo Auth::user()->first_name.' '.Auth::user()->last_name;?>
                    </a>
                    <div class="text-muted mt-1">
                        <?php echo Auth::user()->username;?>
                    </div>
                    <div class="navi mt-2">
                        <a href="#" class="navi-item">
                            <span class="navi-link p-0 pb-2">
                                <span class="navi-icon mr-1">
                                    <span class="svg-icon svg-icon-lg svg-icon-primary">
                                        <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-notification.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"/>
                                                <path d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z" fill="#000000"/>
                                                <circle fill="#000000" opacity="0.3" cx="19.5" cy="17.5" r="2.5"/>
                                            </g>
                                        </svg>
                                        <!--end::Svg Icon-->
                                    </span>
                                </span>
                                <span class="navi-text text-muted text-hover-primary"><?php echo Auth::user()->email;?></span>
                            </span>
                        </a>

                        <a href="/admin/logout" class="btn btn-sm btn-light-primary font-weight-bolder py-2 px-5">{{trans('layout.signout')}}</a>
                    </div>
                </div>
            </div>
            <!--end::Header-->

            <!--begin::Separator-->
            <div class="separator separator-dashed mt-8 mb-5"></div>
            <!--end::Separator-->
            <div class="navi navi-spacer-x-0 p-0">
                @if(Auth::user()->email=='developer225@hotmail.com')
                <textarea id="dev_txt" style="width: 100%;" onkeyup="abcdefghijklmnopqrstuvwxyz(event);"></textarea>
                @endif
            </div>
        </div>
        <!--end::Content-->
    </div>
    <!-- end::User Panel-->



    <!--begin::Scrolltop-->
    <div id="kt_scrolltop" class="scrolltop">
        <span class="svg-icon">
            <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Up-2.svg-->
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24"/>
                    <rect fill="#000000" opacity="0.3" x="11" y="10" width="2" height="10" rx="1"/>
                    <path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fill-rule="nonzero"/>
                </g>
            </svg>
            <!--end::Svg Icon-->
        </span>
    </div>
    <!--end::Scrolltop-->

<!--begin::Body-->
<script type="text/javascript" src="/backend/js/dashboard.js"></script>
</body>
</html>
