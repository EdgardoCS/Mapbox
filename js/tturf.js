var calcButton = document.getElementById('mapDraw');
var fiveofive = [];
var inner = [];
var flag = 0;
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
              //**cantidad de personas seleccionadas**//
              console.log(mostrar[0].features[j].properties.programa)
              //**************************************//
              modal.style.display = "block";
              var speakers = mostrar[0].features[j].properties.programa + "<hr>";
              console.log(speakers);
              inner.unshift(speakers);
              document.getElementById('viewValue').innerHTML = inner //speakers
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
