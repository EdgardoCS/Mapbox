var end = require('./stackLayer.js');
var sms = require('./smsBuild.js');
var sub = require('./zoneInfo.js');
var selection = require('./userInfo.js');

var objects = [];
var condicion = 3;

exports.newFor = function(array) {

  if (array.id == "Inmovilizado") {
    objects.splice(0, 0, array);
  }
  if (array.id == "Recordatorio") {
    objects.splice(1, 0, array);
  }
  if (array.id == "AdultoMayor") {
    objects.splice(2, 0, array);
  }

  if (objects.length == condicion) {

    end.endbuton(objects);
    sms.build(objects[2]);
    sub.subturf(objects);
    selection.toUInfo(objects);
  }

};
