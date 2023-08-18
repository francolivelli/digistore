import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useFormik } from "formik";
import { createCoupon, resetState } from "../features/coupons/couponSlice";

let schema = Yup.object().shape({
  name: Yup.string().required("Ingresá el nombre del cupón"),
  expiry: Yup.date().required("Ingresá la fecha de caducidad"),
  discount: Yup.number().required("Ingresá el porcentaje de descuento"),
});

const Addcoupon = () => {
  const dispatch = useDispatch();

  const newCoupon = useSelector((state) => state.coupon);

  const { isSuccess, isError, isLoading, createdCoupon } = newCoupon;

  useEffect(() => {
    if (isSuccess && createdCoupon) {
      toast.success("Cupón creado!");
    }
    if (isError) {
      toast.error("Algo salió mal");
    }
  }, [isSuccess, isError, isLoading, createdCoupon]);

  const formik = useFormik({
    initialValues: {
      name: "",
      expiry: "",
      discount: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createCoupon(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">Agregar cupón</h3>
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
            className="btn btn-success border-0 rounded-3 my-4"
            style={{ width: "fit-content" }}>
            Agregar cupón
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcoupon;
