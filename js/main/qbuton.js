var nextTo = require(path.resolve('js/submain', './stackLayer.js'));
var nextUInfo = require(path.resolve('js/submain', './userInfo.js'));
var nextZInfo = require(path.resolve('js/submain', './zoneInfo.js'));
var nextsms = require(path.resolve('js/submain', './smsBuild.js'));

var addPostrado = false;
var addRecordatorio = false;
var removePostrado = false;
var removeRecordatorio = false;
var addAM = false;
var removeAM = false;

document.getElementById('One').addEventListener('change', function(e) {
  if (e.target.checked == false) {
    addPostrado = false;
    removePostrado = true;
  } else {
    addPostrado = true;
    removePostrado = false;
  }
});

document.getElementById('Two').addEventListener('change', function(e) {
  if (e.target.checked == false) {
    addRecordatorio = false;
    removeRecordatorio = true;
  } else {
    addRecordatorio = true;
    removeRecordatorio = false;
  }
});
document.getElementById('Three').addEventListener('change', function(e) {
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
  nextsms.alowsms(add);
}
