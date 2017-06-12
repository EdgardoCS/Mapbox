var draw2 = require('../js/geojson2.js');
var sqlite3 = require('sqlite3').verbose();

var Nombre;
var Rut;
var Direccion;
var Latitude;
var Longitude;
var arreglo2=[];

var db = new sqlite3.Database('./db/mydb.db');

db.all("SELECT * FROM Inmovilizado", function(err, row) {
  if (row == null) {
    console.log("Error: Celda Vacía");
  } else {
    for (i = 0; i < row.length; i++) {

      setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Latitude, row[i].Longitude);
      arreglo2[i]=setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Latitude, row[i].Longitude);;
    }
    draw2.togeojson2(arreglo2);
  }
});
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
