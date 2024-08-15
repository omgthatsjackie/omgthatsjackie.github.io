const {watch, series} = require('gulp');

const styles = require('./tasks/scss');
const clean = require('./tasks/clean');

const watcher = () => {
  watch('src/scss/*.scss', {ignoreInitial: false}, styles);
}

exports.default = styles;
exports.watch = watcher;
