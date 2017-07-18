function viewclearAll() {

  LayersArray = ["cerroAlegre", "cerroMiraflores", "cerroCarcel", "cerroPanteon", "cerroLaLoma", "cerroJimenez", "cerroSanJuandeDios", "cerroYungay", "cerroBellavista", "cerroFlorida", "cerroMariposas", "cerroMonjas", "territorio", "sector18", "sector27", "18A", "18B", "18C", "27A", "27B", "27C"];
  //LayersArray = ["cerroAlegre", "cerroMiraflores", "cerroCarcel", "cerroPanteon", "cerroLaLoma", "cerroJimenez", "cerroSanJuandeDios", "cerroYungay", "cerroBellavista", "cerroFlorida", "cerroMariposas", "cerroMonjas", "territorio", "sector18", "sector27", "18A", "18B", "18C", "27A", "27B", "27C", "Busqueda", "Postrado", "Inmovilizado"];
  //SourceArray = ["markers0", "markers1", "markers2"];
  for (i = 0; i < LayersArray.length; i++) {
    if (map.getLayer(LayersArray[i])) {
      map.removeLayer(LayersArray[i]);
    }
  }
  /*
  for (i = 0; i < SourceArray.length; i++) {
    if (map.getSource(SourceArray[i])) {
      map.removeSource(SourceArray[i]);
    }
  }
  */
}
