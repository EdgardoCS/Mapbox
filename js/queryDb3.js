var draw = require('../js/geojson2.js');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/mydb.db');

var Nombre;
var Rut;
var Direccion;
var Latitude;
var Longitude;
var arreglo=[];

exports.zeppelin = function(query, id, largo) {
  for (i = 0; i < query.length; i++) {

    db.all(query[i][0], query[i][1], function(err, row) {
      if (row != null) {

        var arreglo1 = [];
        if (row.length == 1) {
          for (i = 0; i < row.length; i++) {

            setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Latitude, row[i].Longitude);
            arreglo1[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Latitude, row[i].Longitude);;
            arreglo.push(arreglo1[i]);
          }
          if (arreglo.length == largo) {
            draw.togeojson1(arreglo, id, largo);
          }
        }
        if (row.length > 1) {
          for (i = 0; i < row.length; i++) {

            setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Latitude, row[i].Longitude);
            arreglo[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Latitude, row[i].Longitude);;
          }
          draw.togeojson1(arreglo, id, largo);
        }
        if (row.length < 1) {
         console.log("Rut No Encontrado");
        }
      } else {
        console.log("Error: Celda Vacía");
      }
    });
  }
};


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
      "description": "<strong>Adulto Mayor</strong></p>" + Nombre,
      //"description": "<strong>Adulto Mayor</strong></p>" + Nombre+ "<br>" + Direccion,
      "address": [Direccion],
    }
  }
  return pointFeatures;
};
/*
 */
