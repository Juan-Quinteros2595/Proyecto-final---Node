import { Router } from "express";
import productController from "../controllers/product.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js"; // Este lo vas a crear

const router = Router();

// Todas protegidas con autenticación
router.get("/", authMiddleware, productController.getProducts);
router.get("/:id", authMiddleware, productController.getProductById); // Falta crearlo
router.post("/", authMiddleware, productController.createProduct);
router.delete("/:id", authMiddleware, productController.deleteProduct);
router.put("/:id", authMiddleware, productController.updateProduct); // Falta crearlo

export default router;
