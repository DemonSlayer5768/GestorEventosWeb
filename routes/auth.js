//auth.js ruta: routes\auth.js

import express from "express";
import bcrypt from "bcrypt";
import ConexionDB from "../db/ConexionDB"; // Importa el pool de la base de datos

const router = express.Router();

// Ruta para iniciar sesión
router.post("/SignIn", async (req, res) => {
  const { username, password } = req.body;

  try {
    const [results] = await ConexionDB.query(
      "SELECT nombre, corre, contraseña FROM usuarios WHERE username = ? OR email = ?",
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
