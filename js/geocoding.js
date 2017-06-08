var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAaAbGGpJ9-9W-ppnL-cSYVN9IvIrzyjR8'
});
var LatLang = require('../js/database2.js');
exports.togeocoding = function(Rut, Nombre, Direccion, db) {

  var Nombre;
  var Rut;
  var Direccion;
  var Latitude;
  var Longitude;
  var geocoder = new google.maps.Geocoder();

  googleMapsClient.geocode({
      address: Direccion
    },
    function(err, response) {
      if (!err) {

        Latitude = response.json.results[0].geometry.location.lat;
        Longitude = response.json.results[0].geometry.location.lng;
        LatLang.todatabase2(Rut,Longitude, Latitude, db);
      } else {
        console.log(err);
      }
    }
  );
};
