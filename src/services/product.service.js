// services
import {
  getAllProducts,
  saveProduct,
  getProductById,
  deleteProductById,
  updateProductById,
} from "../models/product.model.js";

const getAll = async () => await getAllProducts();

const getById = async (id) => await getProductById(id);

const createProduct = async (product) => await saveProduct(product);

const deleteProduct = async (id) => await deleteProductById(id);

const updateProduct = async (id, data) => await updateProductById(id, data);

export default { getAll, getById, createProduct, deleteProduct, updateProduct };
