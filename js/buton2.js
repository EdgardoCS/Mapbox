
var jbuton = require('../js/queryDb1.js')

var opcion = [];
var negative = [];
var flag1;
var flag2;

document.getElementById('roundedOne').addEventListener('change', function(e) {
  var opcion1 = e.target.value;
  if (e.target.checked == false) {
    negative.push(opcion1);
    opcion.splice(0, 1);
    flag1 = 1;
  }
  if (e.target.checked == true) {
    opcion.push(opcion1);
    negative.splice(0, 1);
    flag1 = 0;
  }
});

document.getElementById('roundedTwo').addEventListener('change', function(e) {
  var opcion2 = e.target.value;
  if (e.target.checked == false) {
    negative.push(opcion2);
    opcion.splice(0, 1);
    flag2 = 1;
  }
  if (e.target.checked == true) {
    opcion.push(opcion2);
    negative.splice(0, 1);
    flag2 = 0;
  }
});

function view() {

  var rooster = [opcion, negative];

  if (flag1 == 1 && flag2 == 1 && negative.length == 2) {
    negative = [];
    jbuton.toquery(rooster);

  }
  else {
    jbuton.toquery(rooster);
  }
}

/*
console.log(opcion);
console.log(negative);
console.log(flag1);
console.log(flag2);
 */

 
