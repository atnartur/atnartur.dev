import fs from 'fs';
import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sassCompiler from 'sass';
import livereload from 'gulp-livereload';
import rename from 'gulp-rename';
import handler from 'serve-handler';
import http from 'http';
import githubPages from 'gulp-gh-pages';
import {nunjucksCompile as nunjucks} from 'gulp-nunjucks';
import ruData from './data/ru.js';
import enData from './data/en.js';

const sass = gulpSass(sassCompiler);

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
                nunjucks({
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
    return gulp.src('src/images/**/*', {encoding: false}).pipe(gulp.dest('dist/images/'));
}

function createCnameFile(callback) {
    fs.writeFile('dist/CNAME', 'atnartur.dev', callback);
}

const defaultTask = gulp.series(styles, templates, copy, createCnameFile);
export default defaultTask;

export function watch() {
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

export function deploy () {
    return gulp.src('./dist/**/*').pipe(githubPages());
}
