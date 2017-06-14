var json1 = require('../js/handle.js');
exports.togeojson1 = function(arreglo, id) {
  //console.log(id);
  var gea = makeGeo1(arreglo);
  var tipo;
  var fuente;
  var color;
  var color1 = "#a06115"
  var color2 = "#149ba0"
  var tipo1= "Recordatorio"
  var tipo2= "Usuario"
  var fuente1= "markers1"
  var fuente2= "markers2"

  if (id == 1) {
    tipo= tipo1;
    fuente=fuente1;
    color = color1;
  }
  if (id==1.1) {
    tipo= tipo2;
    fuente=fuente2;
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
  //console.log(gea);
  //console.log(agregar);
  json1.tohandle([gea, agregar]);
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
