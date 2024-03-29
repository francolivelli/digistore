import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import ViewEnquiries from "./pages/ViewEnquiries";
import Bloglist from "./pages/Bloglist";
import Blogcatlist from "./pages/Blogcatlist";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Colorlist from "./pages/Colorlist";
import Categorylist from "./pages/Categorylist";
import Brandlist from "./pages/Brandlist";
import Productlist from "./pages/Productlist";
import Addblog from "./pages/Addblog";
import Addblogcat from "./pages/Addblogcat";
import Addcolor from "./pages/Addcolor";
import Addcat from "./pages/Addcat";
import Addbrand from "./pages/Addbrand";
import Addproduct from "./pages/Addproduct";
import Couponlist from "./pages/Couponlist";
import Addcoupon from "./pages/Addcoupon";
import ViewOrder from "./pages/ViewOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="enquiries/:id" element={<ViewEnquiries />} />
          <Route path="blog" element={<Addblog />} />
          <Route path="blog-list" element={<Bloglist />} />
          <Route path="blog/:id" element={<Addblog />} />
          <Route path="blog-category" element={<Addblogcat />} />
          <Route path="blog-category-list" element={<Blogcatlist />} />
          <Route path="blog-category/:id" element={<Addblogcat />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<ViewOrder />} />
          <Route path="customers" element={<Customers />} />
          <Route path="color" element={<Addcolor />} />
          <Route path="color-list" element={<Colorlist />} />
          <Route path="color/:id" element={<Addcolor />} />
          <Route path="category" element={<Addcat />} />
          <Route path="category-list" element={<Categorylist />} />
          <Route path="category/:id" element={<Addcat />} />
          <Route path="brand" element={<Addbrand />} />
          <Route path="brand-list" element={<Brandlist />} />
          <Route path="brand/:id" element={<Addbrand />} />
          <Route path="product" element={<Addproduct />} />
          <Route path="product-list" element={<Productlist />} />
          <Route path="product/:id" element={<Addproduct />} />
          <Route path="coupon" element={<Addcoupon />} />
          <Route path="coupon-list" element={<Couponlist />} />
          <Route path="coupon/:id" element={<Addcoupon />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
