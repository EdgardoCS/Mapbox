exports.todatabase2 = function(Rut,Latitude, Longitude, db) {
  db.run("UPDATE Actualizado SET Latitude =?,Longitude=? WHERE Rut = ?", [Latitude, Longitude,Rut]);
  console.log("success");
};
