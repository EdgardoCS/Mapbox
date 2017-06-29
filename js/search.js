var led = require('../js/queryDb2.js')

function search() {
  searchButton = document.getElementById('search').value;
  var RUT = (searchButton);
  query = ["SELECT * FROM Inmovilizado WHERE Rut=?", [RUT]]
  var id = "unico";
  var opcion = [1];
  var negative = [0,1];
  var rooster = [opcion, negative];
  led.zeppelin(query, id, rooster);
}
