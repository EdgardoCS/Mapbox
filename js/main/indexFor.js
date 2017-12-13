var end = require('./layerBt.js');
var sms = require('./smsBuild.js');
var sub = require('./zoneInfo.js');
var selection = require('./userInfo.js');

var objects = [];

exports.newFor = function(array) {
  if (array[1].id == "Inmovilizado") {
    objects.splice(0, 0, array);
  }
  if (array[1].id == "Recordatorio") {
    objects.splice(1, 0, array);
  }
  if (array[1].id == "AdultoMayor") {
    objects.splice(2, 0, array);
  }
  if (objects.length == 3) {

    end.endbuton(objects);
    sms.build(objects);
    //sub.subturf(objects);
    selection.toUInfo(objects);
  }
};
