var led = require('../js/query_db.js')

var query;
var id;

exports.toqueryboolean = function() {
  if (addPostrado == true) {
    id = "opcion_postrado";
    query = ["SELECT * FROM Inmovilizado"]
    led.zeppelin(query, id);
  } else if (removePostrado == true) {
    id = "opcion_postrado";
    query = ["SELECT * FROM Inmovilizado"]
    led.zeppelin(query, id);
  }
}
