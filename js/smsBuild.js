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

      var ptsWithin = turf.within(objects[1][0].data, dataArray);
      console.log(ptsWithin);
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
    var result = innerArray.map(function(el) {
      var o = Object.assign({}, el);
      o.sms = text;
      return o;
    });
    hillbilly.man(result);
  }, function() {
    console.log('close');
  });
};
