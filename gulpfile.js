const fs = require('fs');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const livereload = require('gulp-livereload');
const rename = require("gulp-rename");
const handler = require('serve-handler');
const http = require('http');
const deploy = require('gulp-gh-pages');
const nunjucks = require('gulp-nunjucks');
const ruData = require('./data/ru.js');
const enData = require('./data/en.js');

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

function genericTemplate(langData, resultFile) {
    return () => {
        return gulp
            .src('./src/templates/index.njk')
            .pipe(
                nunjucks.compile({
                    ...langData.default,
                    year: (new Date()).getFullYear(),
                    isProd
                })
            )
            .pipe(rename(resultFile))
            .pipe(gulp.dest('./dist'))
            .pipe(livereload());
    }
}

const templatesRu = genericTemplate(ruData, 'ru.html');
const templatesEn = genericTemplate(enData, 'index.html');
const templates = gulp.parallel(templatesEn, templatesRu);

function copy() {
    return gulp.src('src/images/**/*').pipe(gulp.dest('dist/images/'));
}

function createCnameFile(callback) {
    fs.writeFile('dist/CNAME', 'atnartur.dev', callback);
}

const defaultTask = gulp.parallel(styles, templates, copy, createCnameFile);
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

exports.deploy = function () {
    return gulp.src('./dist/**/*').pipe(deploy());
}
