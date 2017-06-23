var json1 = require('../js/handle.js');
var arctic = require('../js/tturf.js');

exports.togeojson1 = function(arreglo, id,largo) {
  var gea = makeGeo1(arreglo);
  var gea2 = makeGeo2(arreglo);
  var tipo;
  var fuente;
  var color;
  var color0 = "#cc143f"
  var color1 = "#F4511E"
  var color2 = "#00ACC1"
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
    "type": "symbol",
    "source": fuente,
    "layout": {
          "icon-image": "{icon}-11",
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top"
      },
    /*"paint": {
      "circle-radius": 5,
      "circle-color": color

    }*/
  });
  json1.tohandle([gea, agregar],largo);
  arctic.monkeys(gea2, largo);
  console.log(agregar);
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
