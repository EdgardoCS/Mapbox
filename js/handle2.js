var deep = require('../js/symButton2.js')
var arreglo = [];
exports.tohandle = function(handle,largo) {
  arreglo.push(handle);
  if (arreglo.length == largo) {
    deep.purple(arreglo,largo);
  }
};
