var deep = require('../js/symButton.js')
var arreglo = [];

exports.tohandle = function(handle, rooster) {

  arreglo.unshift(handle);
  arreglo.splice(1, 1)
  deep.purple(arreglo, rooster);

};
