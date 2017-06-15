var calcButton = document.getElementById('calculate');
exports.monkeys = function(gea2) {
calcButton.onclick = function() {
  var data = draw.getAll();
  if (data.features.length > 0) {
    console.log("HERE");
    var ptsWithin = turf.within(gea2, data);
    console.log(ptsWithin);
  }
  else {
      alert("Use la herramienta de dibujo");
  }
};
}
