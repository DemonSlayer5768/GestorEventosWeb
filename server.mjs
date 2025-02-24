import express from "express";
import cors from "cors";

const app = express();
const PORT = 3050;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando con ES Modules");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
