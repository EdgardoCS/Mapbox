var draw1 = require('../js/geojson1.js');
var sqlite3 = require('sqlite3').verbose();

var Nombre;
var Rut;
var Direccion;
var Latitude;
var Longitude;
var arreglo1 = [];
var query;
var id;
var db = new sqlite3.Database('./db/mydb.db');

exports.toquery = function(option) {
  for (i = 0; i < 2; i++) {
    var casius = option[i];

    if (casius == 1) {
      query = ["SELECT * FROM Users3"]
      id = casius;
    }
    if (query[1] == undefined) {
      //console.log(query[1]);
      console.log("imhere1");
      console.log(id);
      db.all(query[0], function(err, row) {
        if (row == null) {
          console.log("Error: Celda Vacía");
        } else {
          for (i = 0; i < row.length; i++) {

            setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Latitude, row[i].Longitude);
            arreglo1[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Latitude, row[i].Longitude);;
          }
          console.log(arreglo);
          draw1.togeojson1(arreglo, id);
        }
      });
      db.close();
    }
    if (casius == 1.1) {
      var RUT = "3147628-3"
      query = ["SELECT * FROM Users3 WHERE Rut=?", [RUT]]
      id = casius;
    }
    if (query.length == 2) {
      console.log("imhere2");
      console.log(id);
      db.all(query[0], query[1], function(err, row) {
        if (row == null) {
          console.log("Error: Celda Vacía");
        } else {
          for (i = 0; i < row.length; i++) {

            setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Latitude, row[i].Longitude);
            arreglo1[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Latitude, row[i].Longitude);;
          }
          draw1.togeojson1(arreglo1, id);
          console.log(arreglo);
        }
      });
      db.close();
    };

  }
};
/*
 */
setFeatures = function(Rut, Nombre, Direccion, Longitude, Latitude) {
  var pointFeatures;

  pointFeatures = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [Latitude, Longitude]
    },
    "properties": {
      "title": "Adulto Mayor",
      "description": "<strong>Adulto Mayor</strong><p>" + [Rut] + "<br>" + [Nombre] + "<br>" + [Direccion],
      "address": [Direccion]
    }
  }
  return pointFeatures;
};

/*
if (option==1){
  var RUT="3147628-3"
  query=["SELECT * FROM Users3 WHERE Rut=?",[RUT]]
  query1=["SELECT * FROM Users3",["3147628-3"]]
}
*/
