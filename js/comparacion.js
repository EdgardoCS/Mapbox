var led = require('../js/queryDb3.js')
var query = [];
exports.tree = function(Id) {
  for (i = 0; i < Id.length; i++) {
    var RUT = Id[i];
    querys = ["SELECT * FROM Inmovilizado WHERE Rut=?", [RUT]]
    var id = 1;
    var largo = 1;
    query.push(querys);
    if (query.length == 110) {
      led.zeppelin(query, id, largo);
    }
  }
};
