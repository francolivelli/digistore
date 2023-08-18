import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/products/productSlice";
import brandReducer from "../features/brands/brandSlice";
import pCategoryReducer from "../features/pcategories/pcategorySlice";
import blogReducer from "../features/blogs/blogSlice";
import bCategoryReducer from "../features/bcategories/bcategorySlice";
import colorReducer from "../features/colors/colorSlice";
import enquiryReducer from "../features/enquiries/enquirySlice";
import uploadReducer from "../features/upload/uploadSlice";
import couponReducer from "../features/coupons/couponSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    pCategory: pCategoryReducer,
    blog: blogReducer,
    bCategory: bCategoryReducer,
    color: colorReducer,
    enquiry: enquiryReducer,
    upload: uploadReducer,
    coupon: couponReducer,
  },
});
