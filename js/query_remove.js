var tail = require('../js/queryDB_remove.js')

var query;
var id;

exports.Oriley = function(remove) {

  if (removePostrado == true) {
    id = "opcion_postrado";
    query = ["SELECT * FROM Inmovilizado"]
    tail.gunner(query, id, remove);
  }

  if (removeRecordatorio == true) {
    id = "opcion_recordatorio";
    query = ["SELECT * FROM Recordatorio"]
    tail.gunner(query, id, remove);
  }

}
