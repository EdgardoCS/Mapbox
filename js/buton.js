var nextTo = require('../js/symButon.js');
var prev = require('../js/tturf.js');
var addTo = require('../js/smsBuild.js');
var black = require('../js/tturfSub.js');

var addPostrado = false;
var addRecordatorio = false;
var removePostrado = false;
var removeRecordatorio = false;
var addAM = false;
var removeAM = false;

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
document.getElementById('roundedThree').addEventListener('change', function(e) {
  if (e.target.checked == false) {
    addAM = false;
    removeAM = true;
  } else {
    addAM = true;
    removeAM = false;
  }
});

function viewPrograma() {

  var add = [addPostrado, addRecordatorio, addAM];
  var remove = [removePostrado, removeRecordatorio, removeAM];

  nextTo.symButonADD(add);
  prev.ToTurf(add);
  addTo.toSms(add);
  black.bird(add); 
}
