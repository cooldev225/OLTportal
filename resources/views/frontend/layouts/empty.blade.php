<!doctype html>
<html class="loading" lang="{{ $lang }}" data-textdirection="ltr">
<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui">
    <meta name="description" content="OLT,olt">
    <meta name="keywords" content="OLT,olt">
    <meta name="author" content="DongLong Cui">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- BEGIN: Vendor CSS-->
    <link rel="stylesheet" type="text/css" href="/vuexy/app-assets/vendors/css/vendors.min.css">
    <!-- END: Vendor CSS-->

    <!-- BEGIN: Theme CSS-->
    <link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/bootstrap-extended.css">
    <link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/colors.css">
    <link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/components.css">
    <link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/themes/dark-layout.css">
    <link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/themes/bordered-layout.css">
    <link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/themes/semi-dark-layout.css">

    <!-- BEGIN: Page CSS-->
    <link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/core/menu/menu-types/vertical-menu.css">
    <!-- END: Page CSS-->
    
    <!-- BEGIN: Vendor JS-->
    <script src="/vuexy/app-assets/vendors/js/vendors.min.js"></script>
    <!-- BEGIN Vendor JS-->
    
    <script src="/frontend/js/lang/{{$lang}}.js"></script>
    <!-- Styles -->
    <link rel="shortcut icon" href="/images/logo.ico"/>
</head>
<!-- END: Head-->
@inject('dateFormat', 'App\Services\DateService')
<!-- BEGIN: Body-->
<body class="vertical-layout vertical-menu-modern blank-page navbar-floating footer-static  " data-open="click" data-menu="vertical-menu-modern" data-col="blank-page">
    <!-- BEGIN: Content-->
    <div class="app-content content ">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                @yield('content')
            </div>
        </div>
    </div>
    <!-- END: Content-->

    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="/vuexy/assets/css/style.css">
    <!-- END: Custom CSS-->

    <!-- BEGIN: Theme JS-->
    <script src="/vuexy/app-assets/js/core/app-menu.js"></script>
    <script src="/vuexy/app-assets/js/core/app.js"></script>
    <!-- END: Theme JS-->

    <script>
        $(window).on('load', function() {
            if (feather) {
                feather.replace({
                    width: 14,
                    height: 14
                });
            }
        })
    </script>
</body>
<!-- END: Body-->
</html>