var json1 = require('../js/handle.js');
var arctic = require('../js/tturf.js');

exports.togeojson1 = function(arreglo, id,largo) {
  var gea = makeGeo1(arreglo);
  var gea2 = makeGeo2(arreglo);
  var tipo;
  var fuente;
  var color;
  var color0 = "#cc143f"
  var color1 = "#a06115"
  var color2 = "#149ba0"
  var tipo0 = "Busqueda"
  var tipo1 = "Recordatorio"
  var tipo2 = "Usuario"
  var fuente0 = "markers0"
  var fuente1 = "markers1"
  var fuente2 = "markers2"


  if (id == "unico") {
    tipo = tipo0;
    fuente = fuente0;
    color = color0;
  }
  if (id == 1) {
    tipo = tipo1;
    fuente = fuente1;
    color = color1;
  }
  if (id == 1.1) {
    tipo = tipo2;
    fuente = fuente2;
    color = color2;
  }

  var agregar = ({
    "id": tipo,
    "source": fuente,
    "type": "circle",
    "interactive": true,
    'layout': {
      'visibility': 'visible'
    },
    "paint": {
      "circle-radius": 8,
      "circle-color": color
    }
  });
  json1.tohandle([gea, agregar],largo);
  arctic.monkeys(gea2, largo);
};
makeGeo1 = function(features) {
  var geo = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    }
  }
  return geo;
};
makeGeo2 = function(features) {
  var geo2 = {
    "type": "FeatureCollection",
    "features": features
  }
  return geo2;
};
