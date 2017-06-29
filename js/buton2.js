var jbuton = require('../js/queryDb1.js')
var jerase = require('../js/delButton.js')

var opcion = [];
var negative = [];
document.getElementById('roundedOne').addEventListener('change', function(e) {
  var opcion1 = e.target.value;
  if (e.target.checked) {
    opcion.push(opcion1);
  } else {
    console.log("OFF")
    opcion.splice(opcion[1], 1);
    negative.push(opcion1);
  }
});
document.getElementById('roundedTwo').addEventListener('change', function(e) {
  var opcion2 = e.target.value;
  if (e.target.checked) {
    opcion.push(opcion2);
  } else {
    console.log("OFF");
    opcion.splice(opcion[1], 2);
    negative.push(opcion2);
  }
});
function view() {
  var largo = opcion.length;
  jbuton.toquery(opcion,largo);
  jerase.tosym(negative,largo);
}
/*
*/
