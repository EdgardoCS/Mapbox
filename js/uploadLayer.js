fs = require('fs')
var really = require('../js/editLayer.js');
fs.readFile('./geojson/data.geojson', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  really.real(data);
});
