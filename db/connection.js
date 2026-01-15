const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.db", (err) => {
  if (err) console.error(err);
  else console.log("🗄️ Banco conectado");
});


module.exports = db;
