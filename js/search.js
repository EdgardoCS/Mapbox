function search() {
  searchButton = document.getElementById('search').value;
  var RUT = (searchButton);

  db.all("SELECT * FROM Actualizado WHERE Rut=?", [RUT], function(err, row) {
    celda = row.length;
    if (row != null) {

      var searchArray = [];
      if (celda = 1) {
        for (i = 0; i < celda; i++) {
          searchArray[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].Jefe_Equipo_Cabecera, row[i].Latitude, row[i].Longitude, row[i].Programa);
        }
        searchLayer = makeLayer(searchArray);
        searchSource = makeGeo(searchArray);
        var busqueda = [searchSource, searchLayer];
        map.addSource(busqueda[1].source, busqueda[0]);
        map.addLayer(busqueda[1]);
      }
      if (row.length < 1) {
        console.log("Rut No Encontrado");
      }
    } else {
      console.log("Error: Celda Vacía");
    }
  });
}

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
