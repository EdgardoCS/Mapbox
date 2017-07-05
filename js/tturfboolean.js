var calcButton = document.getElementById('draw');
var fiveofive = [];
var inner = [];

exports.monkeys = function(gea2) {

  fiveofive.push(gea2);
  if (fiveofive.length == 1) {

    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];

    calcButton.onclick = function() {

      var data = draw.getAll();
      if (data.features.length > 0) {
        for (i = 0; i < fiveofive.length; i++) {
          var ptsWithin = turf.within(fiveofive[i], data);
          modal.style.display = "block";

          for (i = 0; i < ptsWithin.features.length; i++) {
            var speakers = ptsWithin.features[i].properties.description + "&nbsp" + ptsWithin.features[i].properties.address + "<br>" + "<hr>";
            inner.push(speakers);
          }
          document.getElementById('viewValue').innerHTML = inner
          inner = [];
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
  if (fiveofive.length > 1) {
    fiveofive.splice(0, 2);
  }
}
