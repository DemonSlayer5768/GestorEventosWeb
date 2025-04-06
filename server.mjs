// server.mjs
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3050;
const API_BASE_URL =
  process.env.API_BASE_URL || "https://api.tau.com.mx/dipomex/v1/";
const API_KEY = process.env.APIKEY;

app.use(cors());
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Servidor funcionando con ES Modules");
});

// Ruta dinámica para estados, municipios, colonias
app.get("/api/:tipo", async (req, res) => {
  const { tipo } = req.params;
  const allowed = ["estados", "municipios", "colonias"];

  if (!allowed.includes(tipo)) {
    return res.status(400).json({ error: "Ruta no permitida" });
  }

  const query = new URLSearchParams(req.query).toString();
  const url = `${API_BASE_URL}${tipo}?${query}`;

  try {
    const response = await fetch(url, {
      headers: { APIKEY: API_KEY },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error al consumir la API externa:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
