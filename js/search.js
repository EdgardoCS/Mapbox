function search() {
  searchButton = document.getElementById('search').value;
  var RUT = (searchButton);

  db.all("SELECT * FROM Users WHERE Rut=?", [RUT], function(err, row) {
    celda = row.length;
    if (row != null) {

      var searchArray = [];
      if (celda = 1) {
        for (i = 0; i < celda; i++) {
          searchArray[i] = setSearchFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].SubSector, row[i].Latitud, row[i].Longitud, row[i].Programa, row[i].Jefe_Equipo, row[i].Estado, row[i].Observaciones);
        }
        searchLayer = makeSearchLayer(searchArray);
        searchSource = makeSearchGeo(searchArray);

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

setFeatures = function(Rut, Nombre, Direccion, Sector, SubSector, Longitud, Latitud, Programa, Jefe_Equipo, Estado, Observaciones) {
  var pointFeatures;

  pointFeatures = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [Latitud, Longitud]
    },
    "properties": {
      "title": "Adulto Mayor",
      "description": "Programa: " + Programa + " " + "/ Nombre: " + Nombre + " " + "/ SubSector: " + SubSector,
      "address": "Direccion: " + [Direccion],
      "rut": Rut,
      "programa": Programa,
      "Estado": Estado,
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
