var led = require('../js/queryDb2.js')

var condicion;
var query;
var id;

exports.toquery = function(option, largo) {
  for (j = 0; j < option.length; j++) {
    condicion = option[j];
    if (condicion == 1) {
      id = 1;
      query = ["SELECT * FROM Inmovilizado"]

      led.zeppelin(query, id,largo);
    }

    if (condicion == 1.1) {
      id = 1.1;
      query = ["SELECT * FROM Recordatorio"]
      led.zeppelin(query, id, largo);
    }

  };
};
