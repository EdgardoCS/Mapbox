var flag = 0;
document.getElementById('INM').addEventListener('change', function(e) {

  if (e.target.checked) {
    flag = 1;
    var toggleableLayerIds = ['Inmovilizado'];

    for (var i = 0; i < toggleableLayerIds.length; i++) {
      var id = toggleableLayerIds[i];
      var link = document.createElement('input');
      link.href = '#';
      link.className = 'active';
      link.textContent = id;
      console.log("IN");
      console.log(link);

      link.onclick = function(e) {
        console.log(clickedLayer);
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();
        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
          map.setLayoutProperty(clickedLayer, 'visibility', 'none');
          this.className = '';
        } else {
          this.className = 'active';
          map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
      };
      var layers = document.getElementById('map-overlay-inner');
      console.log(layers);
      layers.appendChild(link);
    }

  } else {
    flag = 0;
    console.log("OUT");
  }
});
/*
 */
