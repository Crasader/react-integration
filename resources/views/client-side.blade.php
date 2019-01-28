<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Ervinne Sodusta</title>

        <!-- Legacy Styles -->
        <link href="{{ asset('legacy/inspinia/css/bootstrap.min.css') }}" rel="stylesheet">
        <link href="{{ asset('legacy/inspinia/font-awesome/css/font-awesome.css') }}" rel="stylesheet">
        <link href="{{ asset('legacy/inspinia/css/animate.css') }}" rel="stylesheet">
        <link href="{{ asset('legacy/inspinia/css/style.css') }}" rel="stylesheet">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body class="top-navigation pace-done">
        <div id="wrapper">
            <div id="page-wrapper" class="gray-bg">
                <div class="wrapper wrapper-content animated fadeInRight">
                    <div id="app">
                        {{-- This will automatically be filled up by react --}}
                    </div>
                </div>
            </div>
        </div>

        <script src="{{ mix('js/page-ssr.js') }}"></script>

        <!-- Legacy Scripts -->
        <script src="{{ asset('legacy/inspinia/js/jquery-2.1.1.js') }}"></script>
        <script src="{{ asset('legacy/inspinia/js/bootstrap.js') }}"></script>
        <script src="{{ asset('legacy/inspinia/js/plugins/metisMenu/jquery.metisMenu.js') }}"></script>
        <script src="{{ asset('legacy/inspinia/js/plugins/slimscroll/jquery.slimscroll.min.js') }}"></script>
    </body>
</html>
