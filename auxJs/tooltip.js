var is = require('../auxJs/dead.js');
map.getCanvas().style.cursor = 'pointer';
map.on('click', 'Busqueda', function(e) {
  var location;
  location = e.features[0].geometry.coordinates;
  rut = e.features[0].properties.rut
  now_dead = e.features[0].properties.fallecido

  if (now_dead == "si") {
    console.log("Paciente Fallecido");
  } else {
    is.dead(rut);
  }
});
