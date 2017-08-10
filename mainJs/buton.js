var who = require('../mainJs/query_add.js')
var aqueous = require('../mainJs/symButton.js');

var addPostrado = false;
var addRecordatorio = false;
var removePostrado = false;
var removeRecordatorio = false;

document.getElementById('roundedOne').addEventListener('change', function(e) {
  if (e.target.checked == false) {
    addPostrado = false;
    removePostrado = true;
  } else {
    addPostrado = true;
    removePostrado = false;
  }
});

document.getElementById('roundedTwo').addEventListener('change', function(e) {
  if (e.target.checked == false) {
    addRecordatorio = false;
    removeRecordatorio = true;
  } else {
    addRecordatorio = true;
    removeRecordatorio = false;
  }
});


function viewPrograma() {

  var add = [addPostrado, addRecordatorio];
  var remove = [removePostrado, removeRecordatorio];

  who.areyou(add);
  aqueous.transmission(remove);

}
