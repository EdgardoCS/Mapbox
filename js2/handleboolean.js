var deep = require('../js2/symButtonboolean.js')
var arreglo = [];

exports.tohandle = function(handle) {

  arreglo.unshift(handle);
  arreglo.splice(1, 1)
  deep.purple(arreglo);
};
