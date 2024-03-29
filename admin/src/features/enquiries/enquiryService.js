import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/base_url";

const getEnquiries = async () => {
  const response = await axios.get(`${base_url}enquiries/`);

  return response.data;
};

const getEnquiry = async (id) => {
  const response = await axios.get(`${base_url}enquiries/${id}`, config);

  return response.data;
};

const updateEnquiry = async (enquiry) => {
  const response = await axios.put(
    `${base_url}enquiries/${enquiry.id}`,
    {
      status: enquiry.enquiryData,
    },
    config
  );

  return response.data;
};

const deleteEnquiry = async (id) => {
  const response = await axios.delete(`${base_url}enquiries/${id}`, config);

  return response.data;
};

const enquiryService = {
  getEnquiries,
  getEnquiry,
  updateEnquiry,
  deleteEnquiry,
};

export default enquiryService;
