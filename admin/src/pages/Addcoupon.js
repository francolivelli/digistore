import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  createCoupon,
  getCoupon,
  resetState,
  updateCoupon,
} from "../features/coupons/couponSlice";
import { useLocation, useNavigate } from "react-router-dom";

let schema = Yup.object().shape({
  name: Yup.string().required("Ingresá el nombre del cupón"),
  expiry: Yup.date().required("Ingresá la fecha de caducidad"),
  discount: Yup.number().required("Ingresá el porcentaje de descuento"),
});

const Addcoupon = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  const couponId = location.pathname.split("/")[3];

  const newCoupon = useSelector((state) => state.coupon);

  const {
    isSuccess,
    isError,
    isLoading,
    createdCoupon,
    couponName,
    couponExpiry,
    couponDiscount,
    updatedCoupon,
  } = newCoupon;

  const changeDateFormat = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, "0"); // Asegura dos dígitos en el mes
    const day = String(newDate.getDate()).padStart(2, "0"); // Asegura dos dígitos en el día
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (couponId !== undefined) {
      dispatch(getCoupon(couponId));
    } else {
      dispatch(resetState());
    }
    // eslint-disable-next-line
  }, [couponId]);

  useEffect(() => {
    if (isSuccess && createdCoupon) {
      toast.success("¡Cupón creado!");
    }
    if (isSuccess && updatedCoupon) {
      toast.success("¡Cupón editado!");
      navigate("/admin/coupon-list");
    }
    if (isError) {
      toast.error("Algo salió mal");
    }
    // eslint-disable-next-line
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: couponName || "",
      expiry: changeDateFormat(couponExpiry) || "",
      discount: couponDiscount || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (couponId !== undefined) {
        const data = { id: couponId, couponData: values };
        dispatch(updateCoupon(data));
        dispatch(resetState());
      } else {
        dispatch(createCoupon(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">
        {couponId !== undefined ? "Editar" : "Agregar"} cupón
      </h3>
      <div>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column">
          <CustomInput
            type="text"
            label="Nombre del cupón"
            name="name"
            onCh={formik.handleChange("name")}
            onBl={formik.handleBlur("name")}
            val={formik.values.name}
            id="name"
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <CustomInput
            type="date"
            label="Fecha de caducidad"
            name="expiry"
            onCh={formik.handleChange("expiry")}
            onBl={formik.handleBlur("expiry")}
            val={formik.values.expiry}
            id="expiry"
          />
          <div className="error">
            {formik.touched.expiry && formik.errors.expiry}
          </div>
          <CustomInput
            type="number"
            label="Porcentaje de descuento"
            name="discount"
            onCh={formik.handleChange("discount")}
            onBl={formik.handleBlur("discount")}
            val={formik.values.discount}
            id="discount"
          />
          <div className="error">
            {formik.touched.discount && formik.errors.discount}
          </div>
          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-3"
            style={{ width: "fit-content" }}>
            {couponId !== undefined ? "Editar" : "Agregar"} cupón
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcoupon;
