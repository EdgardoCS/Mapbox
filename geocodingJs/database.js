var data = require('../geocodingJs/geocoding.js');
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./db/mydb.db');
db.all("SELECT * FROM Actualizado", function(err, row) {
  if (row == null) {
    console.log("Error: Celda Vacía");
  } else {
    for (i = 4901; i < 5000; i++) {
      data.togeocoding(row[i].Rut, row[i].Nombre, row[i].Direccion, db);
    }
  }
});
