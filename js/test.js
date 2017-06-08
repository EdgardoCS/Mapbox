var show= require('../js/database3.js');
var toggleableLayer = [ 'Inmovilizado' ];

  var id=toggleableLayer;
  var link1 = document.createElement('a');
  link1.href= '#';
  link1.className= 'active';
  link1.textContent = id;

  link1.onclick = function(e){
  show.db();
    var clickedLayer = this.textContent;
  };
  var layers = document.getElementById('menu');
  layers.appendChild(link1);
