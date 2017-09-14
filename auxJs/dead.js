exports.dead = function(rut) {
  db.run("UPDATE Test SET Fallecido=? WHERE Rut = ?", ["si", rut]);
  console.log("base de datos actualizada"); 
}
