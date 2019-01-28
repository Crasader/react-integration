const mix = require('laravel-mix');

mix.webpackConfig({
    output: {
        publicPath: "http://192.168.13.23:8080/"
    },
    devServer: {
        hot: true, // this enables hot reload
        inline: true, // use inline method for hmr
        contentBase: path.join(__dirname, "public"),
        https: true, //true
        port: 8080,
        headers: { "Access-Control-Allow-Origin": "*" },
        watchOptions: {
            exclude: [/bower_components/, /node_modules/]
        }
    },
    node: {
        fs: "empty",
        module: "empty"
    },
});

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
mix.react('resources/react/app.js', 'public/js')
    .react('resources/react/page-ssr.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
