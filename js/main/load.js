var sqlite3 = require('sqlite3').verbose();

const dbPath = path.resolve('src/db', 'new.db')
var db = new sqlite3.Database(dbPath);

var next = require(path.resolve('js/submain', './indice.js'));

var Nombre;
var Rut;
var Direccion;
var Sector;
var SubSector;
var Longitud;
var Latitud;
var Programa;
var Jefe_Equipo;
var Estado;
var Observaciones;
var Telefono1;
var Telefono2;
var Validado;

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
    var inmovilizadoLive = [];
    if (celda > 1) {
      for (i = 0; i < celda; i++) {
        inmovilizadoArray[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].SubSector, row[i].Latitud, row[i].Longitud, row[i].Programa, row[i].Jefe_Equipo, row[i].Estado, row[i].Observaciones, row[i].Telefono1, row[i].Telefono2, row[i].Validado);
        if (inmovilizadoArray[i].properties.status != "Fallecida") {
          inmovilizadoArray.slice(i);
          inmovilizadoLive.push(inmovilizadoArray[i])
        }

      }
    }
  }
  inmovilizadoLayer = makeGeo(inmovilizadoLive);
  inmovilizadoSource = makeLayer(inmovilizadoLayer);
  next.newFor(inmovilizadoSource);

});

db.all("SELECT * FROM Recordatorio", function(err, row) {
  celda = row.length;
  if (row != null) {
    var recordatorioArray = [];
    var recordatorioLive = [];
    if (celda > 1) {
      for (i = 0; i < celda; i++) {
        recordatorioArray[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].SubSector, row[i].Latitud, row[i].Longitud, row[i].Programa, row[i].Jefe_Equipo, row[i].Estado, row[i].Observaciones, row[i].Telefono1, row[i].Telefono2, row[i].Validado);

        if (recordatorioArray[i].properties.status != "Fallecida") {
          recordatorioArray.slice(i);
          recordatorioLive.push(recordatorioArray[i])
        }

      }
    }
  }
  recordatorioLayer = makeGeo(recordatorioLive);
  recordatorioSource = makeLayer(recordatorioLayer);
  next.newFor(recordatorioSource);

});

db.all("SELECT * FROM Users", function(err, row) {
  celda = row.length;
  if (row != null) {
    var amArray = [];
    var amLive = [];
    if (celda > 1) {
      for (i = 0; i < celda; i++) {
        amArray[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].SubSector, row[i].Latitud, row[i].Longitud, row[i].Programa, row[i].Jefe_Equipo, row[i].Estado, row[i].Observaciones, row[i].Telefono1, row[i].Telefono2, row[i].Validado);

        if (amArray[i].properties.status != "Fallecida") {
          amArray.slice(i);
          amLive.push(amArray[i])
        }

      }
    }
  }
  adultoLayer = makeGeo(amLive);
  adultoSource = makeLayer(adultoLayer);
  // console.log(adultoLayer);
  next.newFor(adultoSource);

});

setFeatures = function(Rut, Nombre, Direccion, Sector, SubSector, Longitud, Latitud, Programa, Jefe_Equipo, Estado, Observaciones, Telefono1, Telefono2, Validado) {
  var pointFeatures;

  pointFeatures = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [Latitud, Longitud]
    },
    "properties": {
      "title": "Adulto Mayor",
      "rut": Rut,
      "description": "Programa: " + Programa + " " + "/ Nombre: " + Nombre + " " + "/ Direccion: " + Direccion,
      "address": "Direccion: " + [Direccion],
      "status": Estado,
      "program": Programa,
      "observations": Observaciones,
      "contact": "Telefono1: " + Telefono1 + " Telefono2: " + Telefono2,
      "valid": Validado,
    }
  }
  return pointFeatures;
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

makeLayer = function(features) {
  var id;
  var color;
  var fuente;

  if (features.data.features[0].properties.program == "Inmovilizado") {
    color = "#F4511E"
    id = "Inmovilizado"
    fuente = "inmovilizadoMarkers"
  }
  if (features.data.features[0].properties.program == "Recordatorio") {
    color = "#A0149D"
    id = "Recordatorio"
    fuente = "recordatorioMarkers"
  }
  if (features.data.features[0].properties.program == "Adulto Mayor") {
    color = "#ff0000"
    id = "AdultoMayor"
    fuente = "adultoMarkers"
  }
  var geoLayer = {
    "id": id,
    "type": "circle",
    "source": features,
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
