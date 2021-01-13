const {src, dest, parallel,} = require('gulp');
const concat = require('gulp-concat')
const less = require('gulp-less')
const autoprefixer = require('gulp-autoprefixer')

function styles (){
    src(['./src/styles/less/*.less'])
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(autoprefixer())
    .pipe(dest('./dest/styles/css'))
} 


function images () {
    src('./src/styles/images/*.png')
    .pipe(dest('./dest/styles/images/'))
}

function html(){
    src('./src/index.html')
    .pipe(dest('./dest/'))
    
}
function fonts (){
    src('./src/styles/fonts/*.{css, svg,ttf,woff,woff2}')
    .pipe(dest('./dest/styles/fonts/'))

}

exports.styles = styles;
exports.images = images
exports.html = html;
exports.fonts = fonts;




exports.default  = parallel(  styles,images,html, fonts )