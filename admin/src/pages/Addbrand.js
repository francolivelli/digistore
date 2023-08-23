import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  createBrand,
  getBrand,
  resetState,
  updateBrand,
} from "../features/brands/brandSlice";
import { useLocation, useNavigate } from "react-router-dom";

let schema = Yup.object().shape({
  title: Yup.string().required("Ingresá el nombre de la marca"),
});

const Addbrand = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  const brandId = location.pathname.split("/")[3];

  const newBrand = useSelector((state) => state.brand);

  const {
    isSuccess,
    isError,
    isLoading,
    createdBrand,
    brandName,
    updatedBrand,
  } = newBrand;

  useEffect(() => {
    if (brandId !== undefined) {
      dispatch(getBrand(brandId));
    } else {
      dispatch(resetState());
    }
    // eslint-disable-next-line
  }, [brandId]);

  useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("¡Marca agregada!");
    }
    if (isSuccess && updatedBrand) {
      toast.success("¡Marca editada!");
      navigate("/admin/brand-list");
    }
    if (isError) {
      toast.error("Algo salió mal");
    }
    // eslint-disable-next-line
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: brandName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (brandId !== undefined) {
        const data = { id: brandId, brandData: values };
        dispatch(updateBrand(data));
        dispatch(resetState());
      } else {
        dispatch(createBrand(values));
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
        {brandId !== undefined ? "Editar" : "Agregar"} marca
      </h3>
      <div>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="d-flex gap-2 flex-column">
          <CustomInput
            type="text"
            label="Nombre de la marca"
            name="title"
            onCh={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-3"
            style={{ width: "fit-content" }}>
            {brandId !== undefined ? "Editar" : "Agregar"} marca
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addbrand;
