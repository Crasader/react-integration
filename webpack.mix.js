const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.options({
    hmrOptions: {
        host: '192.168.13.23',
        port: 8080
    },
    //
});

mix.setResourceRoot('resource/react');
mix.react('resources/react/app.js', 'public/js')
    .react('resources/react/page-ssr.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
