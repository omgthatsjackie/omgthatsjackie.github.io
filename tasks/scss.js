const {src, dest} = require('gulp');
const clean = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));

const isProduction = process.env.NODE_ENV === 'production';

const styles = () => {
  return src('src/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(clean(isProduction ? {level: 1} : {level: 0}))
    .pipe(dest('src/css'));
}

module.exports = styles;