import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/base_url";

const getProductCategories = async () => {
  const response = await axios.get(`${base_url}categories/`);

  return response.data;
};

const createCategory = async (category) => {
  const response = await axios.post(`${base_url}categories/`, category, config);

  return response.data;
};

const getCategory = async (id) => {
  const response = await axios.get(`${base_url}categories/${id}`, config);

  return response.data;
};

const updateCategory = async (category) => {
  const response = await axios.put(
    `${base_url}categories/${category.id}`,
    { title: category.categoryData.title },
    config
  );

  return response.data;
};

const deleteCategory = async (id) => {
  const response = await axios.delete(`${base_url}categories/${id}`, config);

  return response.data;
};

const categoryService = {
  getProductCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};

export default categoryService;
