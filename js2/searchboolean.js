var led = require('../js2/queryboolean2.js')

function search() {
  searchButton = document.getElementById('search').value;
  var RUT = (searchButton);
  query = ["SELECT * FROM Inmovilizado WHERE Rut=?", [RUT]]
  var id = "unico";
  led.zeppelin(query, id);
}
