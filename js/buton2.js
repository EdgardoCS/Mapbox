var jbuton= require('../js/queryDb1.js')
var opcion=[];
document.getElementById('roundedOne').addEventListener('change', function(e) {
  var opcion1 = e.target.value;
  if (e.target.checked) {
    opcion.push(opcion1);
  } else {
    console.log("OFF");
    opcion.splice()
  }
});
document.getElementById('roundedTwo').addEventListener('change', function(e) {
    var opcion2 = e.target.value;
    if (e.target.checked) {
      opcion.push(opcion2);
    } else {
      console.log("OFF");
    }
});
/*
*/
function view() {
  var largo=opcion.length;
  jbuton.toquery(opcion,largo);
}
