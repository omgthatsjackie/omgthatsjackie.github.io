const del = require('del');

const clean = () => {
  return del('build/');
}

module.exports = clean;