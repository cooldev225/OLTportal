<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="description" content="Login page Auras"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{$page_title}} | {{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script type="text/javascript" src="/backend/js/common.js"></script>
    <script type="text/javascript" src="/metronic/plugins/global/plugins.bundle.js"></script>
    <script type="text/javascript" src="/metronic/plugins/custom/prismjs/prismjs.bundle.js"></script>
    <script type="text/javascript" src="/metronic/js/scripts.bundle.js"></script>
    <script type="text/javascript" src="/metronic/plugins/custom/fullcalendar/fullcalendar.bundle.js"></script>
    <script type="text/javascript" src="/metronic/js/pages/widgets.js"></script>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
    <!-- Styles -->
    <link href="/metronic/plugins/custom/fullcalendar/fullcalendar.bundle.css" rel="stylesheet">
    <link href="/metronic/plugins/global/plugins.bundle.css" rel="stylesheet">
    <link href="/metronic/plugins/custom/prismjs/prismjs.bundle.css" rel="stylesheet">
    <link href="/metronic/css/style.bundle.css" rel="stylesheet">
    <link href="/metronic/css/themes/layout/header/base/light.css" rel="stylesheet">
    <link href="/metronic/css/themes/layout/header/menu/light.css" rel="stylesheet">
    <link href="/metronic/css/themes/layout/brand/dark.css" rel="stylesheet">
    <link href="/metronic/css/themes/layout/aside/dark.css" rel="stylesheet">

    <link rel="shortcut icon" href="/images/logo.ico"/>
</head>
<body>
    @yield('content')
</body>
</html>