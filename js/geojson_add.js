var lets = require('../js/symButton.js');
var televators = [];
//var arctic = require('../js3/tturfboolean.js');

exports.rats = function(arreglo, id, add) {
  var gea = makeGeo1(arreglo);
  var gea2 = makeGeo2(arreglo);
  var tipo;
  var fuente;
  var color;
  var color0 = "#cc143f"
  var color1 = "#F4511E"
  var color2 = "#a0149d"
  var tipo0 = "Busqueda"
  var tipo1 = "Postrado"
  var tipo2 = "Recordatorio"
  var fuente0 = "markers0"
  var fuente1 = "markers1"
  var fuente2 = "markers2"


  if (id == "unico") {
    tipo = tipo0;
    fuente = fuente0;
    color = color0;
  }
  if (id == "opcion_postrado") {
    tipo = tipo1;
    fuente = fuente1;
    color = color1;
  }
  if (id == "opcion_recordatorio") {
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
      "circle-radius": 5,
      "circle-color": color

    }
  });
  televators = [gea,agregar]
//  console.log(televators);
  lets.dance(televators, add);

  //arctic.monkeys(gea2);
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
