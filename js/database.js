var data = require('../js/geocoding.js');
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./db/mydb.db');
db.all("SELECT * FROM Inmovilizado", function(err, row) {
  if (row == null) {
    console.log("Error: Celda Vacía");
  } else {
    for (i = 86; i < 87; i++) {
      data.togeocoding(row[i].Rut, row[i].Nombre, row[i].Direccion, db);
    }
  }
});