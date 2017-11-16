var end = require('../js/symButon.js');
var sms = require('../js/smsBuild.js');
var sub = require('../js/tturfSub.js');
var selection = require('../js/tturf.js');


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
    end.symButon(objects);
    sms.build(objects);
    selection.toturf(objects);
    sub.subturf(objects);

  }
};
