var json2 = require('../js/handle.js');
exports.togeojson2 = function(arreglo) {
  var gea2 = makeGeo2(arreglo2);
  var agregar2 = ({
    "id": "Recordatorio",
    "source": "markers2",
    "type": "circle",
    "interactive": true,
    'layout': {
      'visibility': 'visible'
    },
    "paint": {
      "circle-radius": 8,
      "circle-color": "#149ba0"
    }
  });
  console.log("2");
  json2.tohandle([gea2,agregar2]);
};

makeGeo2 = function(features) {
  var geo = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    }
  }
  return geo;
};
