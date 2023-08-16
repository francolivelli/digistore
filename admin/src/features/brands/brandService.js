import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/base_url";

const getBrands = async () => {
  const response = await axios.get(`${base_url}brands/`);

  return response.data;
};

const createBrand = async (brand) => {
  const response = await axios.post(`${base_url}brands/`, brand, config);

  return response.data;
};

const brandService = {
  getBrands,
  createBrand,
};

export default brandService;
