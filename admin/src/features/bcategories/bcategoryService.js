import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/base_url";

const getBlogCategories = async () => {
  const response = await axios.get(`${base_url}blog-categories/`);

  return response.data;
};

const createBlogCategory = async (blogCategory) => {
  const response = await axios.post(`${base_url}blog-categories/`, blogCategory, config);

  return response.data;
};

const blogCategoryService = {
  getBlogCategories,
  createBlogCategory
};

export default blogCategoryService;
