var led = require('../js/queryDB_add.js')

var query;
var id;

exports.areyou = function(add) {

  if (addPostrado == true) {
    id = "opcion_postrado";
    query = ["SELECT * FROM Inmovilizado"]
    led.zeppelin(query, id, add);
  }
  if (addRecordatorio == true) {
    id = "opcion_recordatorio";
    query = ["SELECT * FROM Recordatorio"]
    led.zeppelin(query, id, add);

  }

}
