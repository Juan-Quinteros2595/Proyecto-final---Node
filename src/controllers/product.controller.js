// controller
import productService from "../services/product.service.js";
const getProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    res.status(200).json({ message: "Lista de productos", payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};
const createProduct = async (req, res) => {
  try {
    const { nombre, precio, disponible } = req.body;
    // validar campos
    const newProduct = {
      nombre,
      precio: +precio,
      disponible: disponible || false,
    };

    await productService.createProduct(newProduct);
    res
      .status(200)
      .json({ message: "Lista de productos", payload: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getById(id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json({ message: "Producto encontrado", payload: product });
  } catch (error) {
    res.status(500).json({ message: "Error interno", error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);
    res.status(200).json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error interno", error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedProduct = await productService.updateProduct(id, updatedData);
    res
      .status(200)
      .json({ message: "Producto actualizado", payload: updatedProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar", error: error.message });
  }
};

export default {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
