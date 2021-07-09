const {watch, series} = require('gulp');

const styles = require('./tasks/scss.js');
const clean = require('./tasks/clean.js')

const watcher = () => {
  watch('src/scss/*.scss', {ignoreInitial: false}, styles);
}

exports.default = styles;
exports.watch = watcher;