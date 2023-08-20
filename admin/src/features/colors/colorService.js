import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/base_url";

const getColors = async () => {
  const response = await axios.get(`${base_url}colors/`);

  return response.data;
};

const createColor = async (color) => {
  const response = await axios.post(`${base_url}colors/`, color, config);

  return response.data;
};

const getColor = async (id) => {
  const response = await axios.get(`${base_url}colors/${id}`, config);

  return response.data;
};

const updateColor = async (color) => {
  const response = await axios.put(
    `${base_url}colors/${color.id}`,
    { title: color.colorData.title },
    config
  );

  return response.data;
};

const deleteColor = async (id) => {
  const response = await axios.delete(`${base_url}colors/${id}`, config);

  return response.data;
};

const colorService = {
  getColors,
  createColor,
  getColor,
  updateColor,
  deleteColor,
};

export default colorService;
