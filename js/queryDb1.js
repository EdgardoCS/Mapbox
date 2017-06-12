var draw1 = require('../js/geojson1.js');
var sqlite3 = require('sqlite3').verbose();

var Nombre;
var Rut;
var Direccion;
var Latitude;
var Longitude;
var arreglo1=[];

var db = new sqlite3.Database('./db/mydb.db');


db.all("SELECT * FROM Users3", function(err, row) {
  if (row == null) {
    console.log("Error: Celda Vacía");
  } else {
    for (i = 0; i < row.length; i++) {
      setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Latitude, row[i].Longitude);
      arreglo1[i]=setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Latitude, row[i].Longitude);;
    }
    draw1.togeojson1(arreglo1);
  }
});
db.close();
/*
*/
setFeatures = function(Rut, Nombre, Direccion, Longitude,Latitude) {
  var pointFeatures;

  pointFeatures = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [Latitude,Longitude]
    },
    "properties": {
      "title": "Adulto Mayor",
      "description": "<strong>Adulto Mayor</strong><p>"+ [Rut]+"<br>"+[Nombre]+"<br>"+[Direccion],
      "address": [Direccion]
    }
  }
  return pointFeatures;
};
