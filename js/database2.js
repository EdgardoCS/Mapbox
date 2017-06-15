exports.todatabase2 = function(Rut,Longitude, Latitude, db) {
  db.run("UPDATE Recordatorio SET Longitude=?,Latitude =? WHERE Rut = ?", [Longitude, Latitude,Rut]);
  console.log("success");
};
