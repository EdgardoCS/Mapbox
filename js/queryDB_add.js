var boomtown = require('../js/geojson_add.js');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/mydb.db');

var Nombre;
var Rut;
var Direccion;
var Sector;
var Jefe_Equipo_Cabecera;
var Latitude;
var Longitude;
/*
 */

exports.zeppelin = function(query, id, add) {

  db.all(query[0], query[1], function(err, row) {

    if (row != null) {
      var arreglo = [];

      if (row.length == 1) {
        for (i = 0; i < row.length; i++) {

          setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].Jefe_Equipo_Cabecera, row[i].Latitude, row[i].Longitude);
          arreglo[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].Jefe_Equipo_Cabecera, row[i].Latitude, row[i].Longitude);
        }
        boomtown.rats(arreglo, id, add);
      }

      if (row.length > 1) {
        for (i = 0; i < row.length; i++) {

          setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].Jefe_Equipo_Cabecera, row[i].Latitude, row[i].Longitude);
          arreglo[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].Jefe_Equipo_Cabecera, row[i].Latitude, row[i].Longitude);
        }

        boomtown.rats(arreglo, id, add);
      }

      if (row.length < 1) {
        console.log("Rut No Encontrado");
      }
    } else {
      console.log("Error: Celda Vacía");
    }
  });

};

setFeatures = function(Rut, Nombre, Direccion, Sector, Jefe_Equipo_Cabecera, Longitude, Latitude) {

  var pointFeatures;

  pointFeatures = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [Latitude, Longitude]
    },
    "properties": {
      "title": "Adulto Mayor",
      "description": "<strong>Adulto Mayor</strong></p>" + "Nombre: " + Nombre + " " + "Sector: " + Sector + " " + "Jefe Equipo: " + Jefe_Equipo_Cabecera + "<a href=\"http://geropolis.uv.cl/\">Geropolis</a>",
      "address": "Direccion: " + [Direccion],
    }
  }
  return pointFeatures;
};
