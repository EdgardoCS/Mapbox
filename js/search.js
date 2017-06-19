var led = require('../js/queryDb2.js')

function search() {
  searchButton = document.getElementById('search').value;
  var RUT = (searchButton);
  query = ["SELECT * FROM Inmovilizado WHERE Rut=?", [RUT]]
  var id = "unico";
  var largo = 1;
  led.zeppelin(query, id, largo);
}
