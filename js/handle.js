var deep = require('../js/layers_handle.js')
var arreglo = [];

exports.tohandle = function(handle) {

  arreglo.unshift(handle);
  arreglo.splice(1, 1)
  deep.purple(arreglo);
};
