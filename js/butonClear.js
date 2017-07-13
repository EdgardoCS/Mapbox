function viewclearAll() {
  LayersArray = ["cerros","territorio", "sector18", "sector27", "18A", "18B", "18C", "27A", "27B", "27C", "Busqueda", "Postrado", "Busqueda"];
  for (i = 0; i < LayersArray.length; i++) {
    if (map.getLayer(LayersArray[i])) {
      map.removeLayer(LayersArray[i]);
    }
  }
}
