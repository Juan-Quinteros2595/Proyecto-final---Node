// model
import { db } from "../config/db.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const productCollection = collection(db, "productos");

export const getAllProducts = async () => {
  try {
    const productList = await getDocs(productCollection);
    const products = [];
    productList.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));

    return products;
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const saveProduct = async (product) => {
  try {
    const newProduct = await addDoc(productCollection, product);
    return newProduct;
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const getProductById = async (id) => {
  try {
    const ref = doc(productCollection, id);
    const snap = await getDoc(ref);
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  } catch (error) {
    throw new Error("Error al obtener producto por ID: " + error.message);
  }
};

export const deleteProductById = async (id) => {
  try {
    const ref = doc(productCollection, id);
    await deleteDoc(ref);
  } catch (error) {
    throw new Error("Error al eliminar producto: " + error.message);
  }
};

export const updateProductById = async (id, updatedData) => {
  try {
    const ref = doc(productCollection, id);
    await updateDoc(ref, updatedData);
    return { id, ...updatedData };
  } catch (error) {
    throw new Error("Error al actualizar producto: " + error.message);
  }
};
