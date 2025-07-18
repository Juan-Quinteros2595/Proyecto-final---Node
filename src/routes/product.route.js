import { Router } from "express";
import productController from "../controllers/product.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

//protegidas con autenticación
router.get("/", authMiddleware, productController.getProducts);
router.get("/:id", authMiddleware, productController.getProductById);
router.post("/", authMiddleware, productController.createProduct);
router.delete("/:id", authMiddleware, productController.deleteProduct);
router.put("/:id", authMiddleware, productController.updateProduct);

export default router;
