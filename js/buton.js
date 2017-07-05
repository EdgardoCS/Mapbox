var jbuton = require('../js/queryDb1.js')

var opcion = [];
var negative = [];
var flag1;
var flag2;
var flag3 = 0;

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

var isrunning = 0;

function viewPaciente() {
  isrunning = 1;
  var rooster = [opcion, negative];

  if (flag1 == 0 && flag3 == 0 && opcion.length == 1 && isrunning == 1) {
    isrunning = 0;
    //console.log("here 1");
    jbuton.toquery(rooster);
  }
  if (flag1 == 1 && flag3 == 0 && negative.length == 1 && isrunning == 1) {
    isrunning = 0;
    //console.log("here 2");
    jbuton.toquery(rooster);
  }
  if (flag2 == 0 && flag3 == 0 && opcion.length == 1 && isrunning == 1) {
    isrunning = 0;
    //console.log("here 3");
    jbuton.toquery(rooster);
  }
  if (flag2 == 1 && flag3 == 0 && negative.length == 1 && isrunning == 1) {
    isrunning = 0;
    //console.log("here 4");
    jbuton.toquery(rooster);
  }
  if (flag1 == 0 && flag2 == 0 && opcion.length == 2 && isrunning == 1) {
    isrunning = 0;
    flag3 = 1;
    //console.log("here 5");
    jbuton.toquery(rooster);
  }
  if (flag1 == 1 && flag2 == 1 && negative.length == 2 && isrunning == 1) {
    isrunning = 0;
    negative = [];
    flag3 = 0;
    //console.log("here 6");
    jbuton.toquery(rooster);
  }
  if (flag1 == 1 && flag2 == 0 && flag3 == 1 && negative.length == 1 && isrunning == 1) {
    isrunning = 0;
    flag3 = 0;
    opcion = [];
    //console.log("here 7");
    rooster = [opcion, negative];
    jbuton.toquery(rooster);
  }
  if (flag1 == 0 && flag2 == 1 && flag3 == 1 && negative.length == 1 && isrunning == 1) {
    isrunning = 0;
    flag3 = 0;
    opcion = [];
    //console.log("here 8");
    rooster = [opcion, negative];
    jbuton.toquery(rooster);
  }
}
