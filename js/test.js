var show = require('../js/queryDb.js');
var LayerId1 = ['Inmovilizado'];
var LayerId2 = ['Recordatorio'];
var Inmovilizado = 0;
var Recordatorio = 0;

var id1 = LayerId1;
var id2 = LayerId2;

var link1 = document.createElement('a1');
link1.href = '#';
link1.className = 'active';
link1.textContent = id1;
link1.onclick = function(e) {

  show.db();
  var clickedLayer1 = this.textContent;
console.log("click");
};
/*
var layers1 = document.getElementById('menuIn');
layers1.appendChild(link1);


var link2 = document.createElement('a2');
link2.href = '#';
link2.className = 'active';
link2.textContent = id2;
link2.onclick = function(e) {

  var Recordatorio = 1;
  show.db(Recordatorio);
  var clickedLayer2 = this.textContent;

};
var layers2 = document.getElementById('menuRc');
layers2.appendChild(link1);
*/
