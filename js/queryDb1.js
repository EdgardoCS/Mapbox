var led = require('../js/queryDb2.js')

var condicion;
var query;
var id;

exports.toquery = function(option, largo) {
  for (j = 0; j < option.length; j++) {
    condicion = option[j];
    if (condicion == 1) {
      id = 1;
      query = ["SELECT * FROM Inmovilizado"]

      led.zeppelin(query, id);
    }

    if (condicion == 1.1) {
      id = 1.1;
      //var RUT = "3147628-3";
      //query = ["SELECT * FROM Users3 WHERE Rut=?", [RUT]]
      query = ["SELECT * FROM Recordatorio"]
      led.zeppelin(query, id, largo);
    }

  }; //for//
}; //exports//

/*
 */

setFeatures = function(Rut, Nombre, Direccion, Longitude, Latitude) {
  var pointFeatures;

  pointFeatures = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [Latitude, Longitude]
    },
    "properties": {
      "title": "Adulto Mayor",
      //"description": "<strong>Adulto Mayor</strong><p>" + [Rut] + "<br>" + [Nombre] + "<br>" + [Direccion],
      "description": "<strong>Adulto Mayor</strong><p>" + [Nombre],
      "address": [Direccion]
    }
  }
  return pointFeatures;
};
