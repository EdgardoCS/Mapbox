var jbuton = require('../js/queryDb1.js')

var opcion = [];
var negative = [];
document.getElementById('roundedOne').addEventListener('change', function(e) {
  var opcion1 = e.target.value;
  if (e.target.checked == false) {
    negative.push(opcion1);
    opcion.splice(0, 1);
  } else {
    opcion.push(opcion1);
    negative.splice(0, 1);
  }
});

document.getElementById('roundedTwo').addEventListener('change', function(e) {
  var opcion2 = e.target.value;
  if (e.target.checked == false) {
    negative.push(opcion2);
    opcion.splice(0, 1);
  } else {
    opcion.push(opcion2);
    negative.splice(0, 1);
  }
});

function view() {
  var rooster = [opcion, negative];
  jbuton.toquery(rooster);
}
/*
 */
