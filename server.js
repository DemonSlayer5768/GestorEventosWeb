//server.js ruta: /server.js

import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Montar las rutas
app.use("/routes/auth", authRouter);

const PORT = process.env.PORT || 3305;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
