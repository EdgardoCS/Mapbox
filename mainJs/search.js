var led = require('../mainJs/queryDB_add.js')

function search() {
  searchButton = document.getElementById('search').value;
  var RUT = (searchButton);
  query = ["SELECT * FROM Inmovilizado WHERE Rut=?", [RUT]]
  var id = "unico";
  var add = [];
  led.zeppelin(query, id, add);
}
