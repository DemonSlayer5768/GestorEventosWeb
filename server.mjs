import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3050;

app.use(cors());
app.use(express.json());

const API_BASE_URL = "https://api.tau.com.mx/dipomex/v1/";
const API_KEY = process.env.APIKEY;

// 🔹 Ruta raíz para comprobar que el servidor funciona
app.get("/", (res) => {
  res.send("Servidor funcionando con ES Modules");
});

// 🔹 Endpoint dinámico para estados, municipios y colonias
app.get("/api/:tipo", async (req, res) => {
  const { tipo } = req.params; // 'estados', 'municipios' o 'colonias'
  const query = new URLSearchParams(req.query).toString(); // Permite pasar parámetros dinámicos
  const url = `${API_BASE_URL}${tipo}?${query}`;

  try {
    const response = await fetch(url, {
      headers: { APIKEY: API_KEY },
    });

    if (!response.ok) {
      throw new Error(`Error en la API: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
