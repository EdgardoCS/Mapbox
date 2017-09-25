var hillbilly = require('../js/smsSend.js');
var smsButton = document.getElementById('mapSMS');
var smsArray = [];
var text;
var speakersArray;
var innerArray = [];


exports.build = function(objects) {
  smsButton.onclick = function() {

    var dataArray = mapDraw.getAll();
    if (dataArray.features.length > 0) {
      innerArray = [];

      var ptsWithin = turf.within(objects[2][0].data, dataArray);
      for (i = 0; i < ptsWithin.features.length; i++) {
        speakersArray = ptsWithin.features[i].properties.rut;
        var key = "id";
        innerArray.push({
          [key]: speakersArray
        });
      }
    } else {
      alert("Use la herramienta de dibujo");
    }
    promptWindow(speakersArray);
  }
}

function promptWindow() {
  smalltalk.prompt('Escriba su mensaje a continuación', 'Recuerde no utilizar más de 160 caracteres', '').then(function(value) {
    text = value;
    textLargo = text.length;
    if (textLargo <= 160) {
      var result = innerArray.map(function(el) {
        var o = Object.assign({}, el);
        o.sms = text;
        return o;
      });
      hillbilly.man(result);
    } else {
      smalltalk.alert('Error: Mensaje no enviado', 'Mensaje excede cantidad de caracteres permitido!').then(function() {
      });
    }
  }, function() {
    console.log('close');
  });
};
