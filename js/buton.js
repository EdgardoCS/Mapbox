var jbuton = require('../js/query_option.js')

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

var add = [];
var remove = [];

function viewPaciente() {
  if (addPostrado == true) {
    jbuton.toqueryboolean(addPostrado);
  } else if (removePostrado == true) {
    jbuton.toqueryboolean(removePostrado);
  }
}
