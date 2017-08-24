var smsButton = document.getElementById('mapSMS');
var smsArray = [];
var innerArray = [];
var text;

exports.mayor = function(gea2) {

  smsArray.push(gea2);
  if (smsArray.length == 1) {

    smsButton.onclick = function() {

      var dataArray = mapDraw.getAll();
      if (dataArray.features.length > 0) {
        for (i = 0; i < smsArray.length; i++) {
          var ptsWithin = turf.within(smsArray[i], dataArray);

          for (i = 0; i < ptsWithin.features.length; i++) {
            var speakersArray = ptsWithin.features[i].properties.rut;
            var key = "id";
            innerArray.push({
              [key]: speakersArray
            });
          }
          promptWindow();
        }
      } else {
        alert("Use la herramienta de dibujo");
      }
    }
  }
  if (smsArray.length > 1) {
    smsArray.splice(0, 2);
  }
}

function promptWindow() {
  smalltalk.prompt('Escriba su mensaje a continuación', 'Recuerde no utilizar más de 160 caracteres',).then(function(value) {
    text = value;
    var result = innerArray.map(function(el) {
      var o = Object.assign({}, el);
      o.sms = text;
      return o;
    })
    console.log(result);
  }, function() {
    console.log('close');
  })
};
