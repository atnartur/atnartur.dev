const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const hb = require('gulp-hb');
const livereload = require('gulp-livereload');
const rename = require("gulp-rename");
const handler = require('serve-handler');
const http = require('http');

const isProd = process.env.NODE_ENV === 'production';

function styles() {
    const sassOptions = {
        outputStyle: isProd ? 'compressed' : null
    };
    return gulp.src('./src/styles/main.scss')
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'))
        .pipe(livereload());
}

function templates() {
    return gulp
        .src('./src/templates/*.hbs')
        .pipe(hb()
            .partials('./src/templates/partials/**/*.hbs')
            .helpers('./src/templates/helpers/*.js')
            .data('./src/data/**/*.{js,yml}')
        )
        .pipe(rename(path => path.extname = ".html"))
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());
}

function copy() {
    return gulp.src('src/images/**/*').pipe(gulp.dest('dist/images/'));
}

const defaultTask = gulp.parallel(styles, templates, copy);
exports.default = defaultTask
exports.watch = function () {
    const server = http.createServer((request, response) =>
        handler(request, response, {public: 'dist/'})
    )
    server.listen(3000, () => console.log('Running at http://localhost:3000'));

    defaultTask();
    livereload.listen();
    gulp.watch('./src/styles/**/*.scss', {}, styles);
    gulp.watch('./src/templates/**/*', {}, templates);
    gulp.watch('./src/images/**/*', {}, copy);
}
