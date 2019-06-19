const mix = require('laravel-mix');

const path = require('path');

mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
