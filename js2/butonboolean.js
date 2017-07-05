var jbuton = require('../js2/queryboolean.js')

var addPostrado;
var addRecordatorio;
var removePostrado;
var removeRecordatorio;

document.getElementById('roundedOne').addEventListener('change', function(e) {
  if (e.target.checked == false) {

    addPostrado = false;
    removePostrado = true;
  }
  if (e.target.checked == true) {

    addPostrado = true;
    removePostrado = false;
  }
});
/*
document.getElementById('roundedTwo').addEventListener('change', function(e) {
  if (e.target.checked == false) {

    addRecordatorio = false;
    removeRecordatorio = true;
  }
  if (e.target.checked == true) {

    addRecordatorio = true;
    removeRecordatorio = false;
  }
  });
*/
var add = [];
var remove = [];

function viewPaciente() {
  if (addPostrado == true) {
    jbuton.toqueryboolean(addPostrado);
  } else if (removePostrado == true) {
    jbuton.toqueryboolean(removePostrado);
  }
}
