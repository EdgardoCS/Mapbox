var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/new.db');

var Rut;

var inmovilizadoLayer;
var inmovilizadoSource;
var recordatorioLayer;
var recordatorioSource;
var adultoLayer;
var adultoSource;
var inmovilizado;
var recordatorio;
var adulto;

var poblacion = [];

db.all("SELECT * FROM Inmovilizado", function(err, row) {
  celda = row.length;
  if (row != null) {
    var inmovilizadoArray = [];
    if (celda > 1) {
      for (i = 0; i < celda; i++) {
        inmovilizadoArray[i] = setFeatures(row[i].Rut);
      }
    }
  }
  inmovilizado = makeGeo(inmovilizadoArray);

});

db.all("SELECT * FROM Recordatorio", function(err, row) {
  celda = row.length;
  if (row != null) {
    var recordatorioArray = [];
    if (celda > 1) {
      for (i = 0; i < celda; i++) {
        recordatorioArray[i] = setFeatures(row[i].Rut);
      }
    }
  }
  recordatorio = makeGeo(recordatorioArray)

});

db.all("SELECT * FROM Users", function(err, row) {
  celda = row.length;
  if (row != null) {
    var amArray = [];
    if (celda > 1) {
      for (i = 0; i < celda; i++) {
        amArray[i] = setFeatures(row[i].Rut);
      }
    }
  }
  adulto = makeGeo(amArray);

});


setFeatures = function(Rut) {
  var features = {
    "type": "Feature",
    "geometry": {
      "type": "Point"
    },
    "properties": {
      "title": "Adulto Mayor",
      "rut": Rut,
    }
  }
  return features;
};
makeGeo = function(features) {
  var geo = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    },
  }
  return geo;
}
