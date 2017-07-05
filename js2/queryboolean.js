var led = require('../js2/queryboolean2.js')

var query;
var id;

exports.toqueryboolean = function() {
  if (addPostrado == true) {
    id = "opcion_postrado";
    query = ["SELECT * FROM Inmovilizado"]
    //console.log("Agregar " + id);
    led.zeppelin(query, id);
  } else if (removePostrado == true) {
    id = "opcion_postrado";
    query = ["SELECT * FROM Inmovilizado"]
    //console.log("Eliminar " + id);
    led.zeppelin(query, id);
  }
}
