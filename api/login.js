import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import pool from "../server/db";

// Ruta para iniciar sesión
router.post("/SingIn", async (req, res) => {
  const { username, password } = req.body;

  try {
    const [results] = await pool.query(
      "SELECT nombre, correro, contraseña FROM usuarios WHERE nombre = ? OR email = ?",
      [username, username]
    );

    if (results.length === 0) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.status(200).json({ message: "Login exitoso", user });
    } else {
      res.status(401).json({ message: "Contraseña incorrecta" });
    }
  } catch (err) {
    console.error("Error en la base de datos:", err);
    res.status(500).json({ message: "Error en la base de datos" });
  }
});

module.exports = router;
