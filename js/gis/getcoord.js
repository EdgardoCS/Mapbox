var utm = require('utm');

var UTMcoor;
var _l;
var lcr = [];
var exoplanet = [];
var voyage = [];
var voyage34 = [];

var easting = [];
var northing = [];
var zoneN = 19;
var zoneL = "H";
var northern;


exports.drifting = function(incoming) {
  exoplanet = incoming.features;
  _l = exoplanet.length;

  for (i = 0; i < _l; i++) {
    voyage[i] = exoplanet[i].geometry.coordinates[0].length;
    voyage34[i] = exoplanet[i].geometry.coordinates[0];

  }

  console.log(voyage34);
  // console.log(voyage34[0][0]);

  // for (i = 0; i < _l; i++) {
  // lcr = voyage[i]
  // for (j = 0; j < lcr; j++) {
  // easting[j] = voyage34[i][j];
  // }
  // }
  // console.log(lcr);
  // console.log(easting);
}
