var nextTo = require('../../js/main/layerBt.js');
var nextUInfo = require('../../js/main/userInfo.js');
var nextZInfo = require('../../js/main/zoneInfo.js');

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

  nextTo.option(add);
  nextUInfo.useri(add);
  nextZInfo.zonei(add);
}
