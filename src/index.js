import express from "express";
import { join, __dirname } from "./utils/index.js";
import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js";
import "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
app.use(cors());

//settings
dotenv.config(); // Carga variables desde .env
const app = express();
app.set("PORT", 5000);

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use("/api/products", productRoutes);
app.use("/auth", authRoutes);

// Ruta 404 - no encontrada
app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Manejador general de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

// Iniciar servidor
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
