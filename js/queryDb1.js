var led = require('../js/queryDb2.js')

var condicion;
var query;
var id;


exports.toquery = function(rooster) {
  for (j = 0; j < rooster[0].length; j++) {
    condicion = rooster[0][j];

    if (condicion == 1) {
      id = 1;
      query = ["SELECT * FROM Inmovilizado"]
      led.zeppelin(query, id, rooster);
    } else if (condicion == 1.1) {
      id = 1.1;
      query = ["SELECT * FROM Recordatorio"]
      led.zeppelin(query, id, rooster);
    }
  }
  for (j = 0; j < rooster[1].length; j++) {
    condicion = rooster[1][j];

    if (condicion == 1) {
      id = 1;
      query = ["SELECT * FROM Inmovilizado"]
      led.zeppelin(query, id, rooster);
    } else if (condicion == 1.1) {
      id = 1.1;
      query = ["SELECT * FROM Recordatorio"]
      led.zeppelin(query, id, rooster);
    }
  }
};
