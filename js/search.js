var led = require('../js/query_db.js')

function search() {
  searchButton = document.getElementById('search').value;
  var RUT = (searchButton);
  query = ["SELECT * FROM Inmovilizado WHERE Rut=?", [RUT]]
  var id = "unico";
  led.zeppelin(query, id);
}
