import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/base_url";

const getProducts = async () => {
  const response = await axios.get(`${base_url}products/`);

  return response.data;
};

const createProduct = async (product) => {
  const response = await axios.post(`${base_url}products/`, product, config);

  return response.data;
};

const getProduct = async (id) => {
  const response = await axios.get(`${base_url}products/${id}`, config);

  return response.data;
};

const updateProduct = async (product) => {
  const response = await axios.put(
    `${base_url}products/${product.id}`,
    {
      title: product.productData.title,
      description: product.productData.description,
      category: product.productData.category,
      images: product.productData.images,
    },
    config
  );

  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(`${base_url}products/${id}`, config);

  return response.data;
};

const productService = {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};

export default productService;
