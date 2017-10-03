var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCoh4P70mtvYiX3S_A4hgqmIXtRIbpghNk'
});
var LatLang = require('../geocodingJs/database2.js');
exports.togeocoding = function(Rut, Nombre, Direccion, db) {

  var Nombre;
  var Rut;
  var Direccion;
  var Latitud;
  var Longitud;
  var geocoder = new google.maps.Geocoder();

  googleMapsClient.geocode({
      address: Direccion
    },
    function(err, response) {
      if (!err) {

        Latitud = response.json.results[0].geometry.location.lat;
        Longitud = response.json.results[0].geometry.location.lng;

        LatLang.todatabase2(Rut,Latitud, Longitud, db);
      } else {
        console.log(err);
      }
    }
  );
};
