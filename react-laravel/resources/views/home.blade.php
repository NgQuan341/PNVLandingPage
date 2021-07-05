<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{asset('./assets/css/Home.css')}}">
        <link rel="stylesheet" href="{{asset('./assets/css/nicepage.css')}}">
        <title>Laravel</title>
    </head>
    <body>
       <div id="root"></div>
       <script src="{{asset('./js/app.js')}}"></script>
       <script src="{{asset('./assets/js/jquery.js')}}"></script>
       <script src="{{asset('./assets/js/nicepage.js')}}"></script>
    </body>
</html>
