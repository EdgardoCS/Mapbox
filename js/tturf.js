var calcButton = document.getElementById('mapDraw');
var fiveofive = [];
var inner = [];
var inmTotal = 0;
var recTotal = 0;
var amTotal = 0;
var mostrar = [];

exports.toturf = function(objects) {
  exports.ToTurf = function(add) {
    var modal = document.getElementById('turfModal');
    var span = document.getElementsByClassName("close")[0];

    var objetoLargo = objects.length;
    calcButton.onclick = function() {
      var data = mapDraw.getAll();
      if (data.features.length > 0) {

        for (i = 0; i < objetoLargo; i++) {

          var ptsWithin = turf.within(objects[i][0].data, data);

          if (add[i] == true) {
            mostrar.unshift(ptsWithin);

            for (j = 0; j < ptsWithin.features.length; j++) {

              if (mostrar[0].features[j].properties.programa == "Inmovilizado") {
                inmTotal = inmTotal + 1;
              }
              if (mostrar[0].features[j].properties.programa == "Recordatorio") {
                recTotal = recTotal + 1;
              }
              if (mostrar[0].features[j].properties.programa == "Adulto Mayor") {
                amTotal = amTotal + 1;
              }

              modal.style.display = "block";
              var speakers = mostrar[0].features[j].properties.description + "<hr>";
              inner.unshift(speakers);
              document.getElementById('viewValue').innerHTML = inner.join('')
              document.getElementById("viewQuantities").innerHTML = "Inmovilizado: " + inmTotal + " Recordatorio: " + recTotal + " Actualizado: " + amTotal;
            }
            mostrar = [];
          }
        }
      } else {
        alert("Use la herramienta de dibujo");
      }
      span.onclick = function() {
        modal.style.display = "none";
        inner = [];
      }
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
          inner = [];
        }
      }
    }
  }
}
