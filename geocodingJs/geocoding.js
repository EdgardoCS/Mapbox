var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDnTbD1lqBzgLvyQxNWvpYjbRRoqcro0YI'
});
var LatLang = require('../geocodingJs/database2.js');
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

        LatLang.todatabase2(Rut,Latitude, Longitude, db);
      } else {
        console.log(err);
      }
    }
  );
};
