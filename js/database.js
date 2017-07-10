var data = require('../js/geocoding.js');
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./db/mydb.db');
db.all("SELECT * FROM Inmovilizado_MENA", function(err, row) {
  if (row == null) {
    console.log("Error: Celda Vacía");
  } else {
    for (i = 90; i <110 ; i++) {
      data.togeocoding(row[i].Rut, row[i].Nombre, row[i].Direccion, db);
    }
  }
});
