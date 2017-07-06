var draw = require('../js2/geojsonboolean.js');
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

exports.zeppelin = function(query, id) {

  db.all(query[0], query[1], function(err, row) {

    if (row != null) {

      var arreglo = [];
      if (row.length == 1) {
        for (i = 0; i < row.length; i++) {

          setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].Jefe_Equipo_Cabecera, row[i].Latitude, row[i].Longitude);
          arreglo[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].Jefe_Equipo_Cabecera, row[i].Latitude, row[i].Longitude);
        }
        draw.togeojson1(arreglo, id);
      }
      if (row.length > 1) {
        for (i = 0; i < row.length; i++) {

          setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].Jefe_Equipo_Cabecera, row[i].Latitude, row[i].Longitude);
          arreglo[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].Jefe_Equipo_Cabecera, row[i].Latitude, row[i].Longitude);
        }
        draw.togeojson1(arreglo, id);
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
      "description": "<strong>Adulto Mayor</strong></p>" +"Nombre: "+ Nombre + " "+ "Sector: "+Sector+ " " + "Jefe Equipo: "+ Jefe_Equipo_Cabecera ,
      "address": "Direccion: "+[Direccion]
    }
  }
  return pointFeatures;
};
