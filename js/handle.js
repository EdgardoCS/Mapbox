var deep = require('../js/symButton.js')
var arreglo = [];
exports.tohandle = function(handle) {
  arreglo.push(handle);
  if (arreglo.length == largo) {
    deep.purple(arreglo,largo);
  }
};
