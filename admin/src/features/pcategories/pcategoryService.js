import axios from "axios";
import { base_url } from "../../utils/base_url";

const getProductCategories = async () => {
  const response = await axios.get(`${base_url}categories/`);

  return response.data;
};

const categoryService = {
  getProductCategories,
};

export default categoryService;
