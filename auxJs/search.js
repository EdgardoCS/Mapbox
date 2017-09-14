var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/mydb.db');

function search() {
  searchButton = document.getElementById('search').value;
  var RUT = (searchButton);

  db.all("SELECT * FROM Test WHERE Rut=?", [RUT], function(err, row) {
    celda = row.length;
    if (row != null) {

      var searchArray = [];
      if (celda = 1) {
        for (i = 0; i < celda; i++) {
          searchArray[i] = setSearchFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].Latitude, row[i].Longitude, row[i].Programa, row[i].Fallecido);
        }
        searchLayer = makeSearchLayer(searchArray);
        searchSource = makeSearchGeo(searchArray);

        var busqueda = [searchSource, searchLayer];
        if (busqueda[0].data.features[0].properties.fallecido == "si") {
          console.log("Paciente Fallecido");
        } else {
          map.addSource(busqueda[1].source, busqueda[0]);
          map.addLayer(busqueda[1]);
        }
      }
      if (celda < 1) {
        console.log("Rut No Encontrado");
      }
    } else {
      console.log("Error: Celda Vacía");
    }
  });
}

setSearchFeatures = function(Rut, Nombre, Direccion, Sector, Longitude, Latitude, Programa, Fallecido) {
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
      "fallecido": Fallecido
    }
  }
  return pointFeatures;
};

makeSearchLayer = function(features) {

  var geoLayer = {
    "id": "Busqueda",
    "type": "circle",
    "source": "searchMarkers",
    "layout": {
      'visibility': 'visible'
    },
    "paint": {
      "circle-radius": 5,
      "circle-color": "#161412"
    },
  }
  return geoLayer;
};
makeSearchGeo = function(features) {
  var geo = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    }
  }
  return geo;
}
