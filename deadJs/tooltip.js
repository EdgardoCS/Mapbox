var power = require('../auxJs/dead.js');

map.getCanvas().style.cursor = 'pointer';

map.on('click', 'Busqueda', function(e) {
  var location;
  location = e.features[0].geometry.coordinates;
  rut = e.features[0].properties.rut
  now_dead = e.features[0].properties.estado

  promptEdit(rut);

});

function promptEdit() {
  smalltalk.prompt('Herramienta de Edicion', 'Estado de usuario: Activa, Inactiva, Fallecida', '').then(function(value) {
    estado = value;
    textLargo = estado.length;
    if (textLargo < 10) {
      power.slave(rut, estado);
    } else {
      smalltalk.alert('Exceso en cantidad de caracteres permitido!', 'Introduzca una de las opciones: Activa, Inactiva, Fallecida').then(function() {});
    }
  }, function() {
    console.log('close');
  });
};
