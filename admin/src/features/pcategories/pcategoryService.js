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

const categoryService = {
  getProductCategories,
  createCategory,
};

export default categoryService;
