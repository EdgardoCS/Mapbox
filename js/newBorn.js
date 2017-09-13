var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/mydb.db');
var next = require('../js/newFor.js');

var Nombre;
var Rut;
var Direccion;
var Sector;
var Jefe_Equipo_Cabecera;
var Latitude;
var Longitude;
var Programa;
var nuevo = [];
var inmovilizadoLayer;
var inmovilizadoSource;
var recordatorioLayer;
var recordatorioSource;
var adultoLayer;
var adultoSource;


db.all("SELECT * FROM Inmovilizado", function(err, row) {
  celda = row.length;
  if (row != null) {
    var inmovilizadoArray = [];
    if (celda > 1) {
      for (i = 0; i < celda; i++) {
        inmovilizadoArray[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].Jefe_Equipo_Cabecera, row[i].Latitude, row[i].Longitude, row[i].Programa);
      }
    }
  }
  inmovilizadoLayer = makeLayer(inmovilizadoArray);
  inmovilizadoSource = makeGeo(inmovilizadoArray);
  var inmovilizado = [inmovilizadoSource, inmovilizadoLayer];
  next.newFor(inmovilizado);
  
});

db.all("SELECT * FROM Recordatorio", function(err, row) {
  celda = row.length;
  if (row != null) {
    var recordatorioArray = [];
    if (celda > 1) {
      for (i = 0; i < celda; i++) {
        recordatorioArray[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].Jefe_Equipo_Cabecera, row[i].Latitude, row[i].Longitude, row[i].Programa);
      }
    }
  }
  recordatorioLayer = makeLayer(recordatorioArray);
  recordatorioSource = makeGeo(recordatorioArray);
  var recordatorio = [recordatorioSource, recordatorioLayer];
  next.newFor(recordatorio);

});
db.all("SELECT * FROM Actualizado", function(err, row) {
  celda = row.length;
  if (row != null) {
    var amArray = [];
    if (celda > 1) {
      for (i = 0; i < celda; i++) {
        amArray[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].Jefe_Equipo_Cabecera, row[i].Latitude, row[i].Longitude, row[i].Programa);
      }
    }
  }
  adultoLayer = makeLayer(amArray);
  adultoSource = makeGeo(amArray);
  var adulto = [adultoSource, adultoLayer];
  next.newFor(adulto);
});

setFeatures = function(Rut, Nombre, Direccion, Sector, Jefe_Equipo_Cabecera, Longitude, Latitude, Programa) {
  var pointFeatures;

  pointFeatures = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [Latitude, Longitude]
    },
    "properties": {
      "title": "Adulto Mayor",
      "description": "Programa: " + Programa + " " + "/ Nombre: " + Nombre + " " + "/ Sector: " + Sector,
      "address": "Direccion: " + [Direccion],
      "rut": Rut,
      "programa": Programa,
    }
  }
  return pointFeatures;
};

makeLayer = function(features) {
  var id;
  var color;
  var fuente;
  if (features[0].properties.programa == "Inmovilizado") {
    color = "#F4511E"
    id = "Inmovilizado"
    fuente = "inmovilizadoMarkers"
  }
  if (features[0].properties.programa == "Recordatorio") {
    color = "#A0149D"
    id = "Recordatorio"
    fuente = "recordatorioMarkers"
  }
  if (features[0].properties.programa == "Adulto Mayor") {
    color = "#87ad2e"
    id = "AdultoMayor"
    fuente = "adultoMarkers"
  }
  var geoLayer = {
    "id": id,
    "type": "circle",
    "source": fuente,
    "layout": {
      'visibility': 'visible'
    },
    "paint": {
      "circle-radius": 5,
      "circle-color": color
    },
  }
  return geoLayer;
};
makeGeo = function(features) {
  var geo = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    }
  }
  return geo;
}