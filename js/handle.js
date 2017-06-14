var deep = require('../js/symButton.js')
var arreglo = [];
exports.tohandle = function(handle) {
  arreglo.push(handle);
  if (arreglo.length == 2) {
    deep.purple(arreglo);
  }
};
