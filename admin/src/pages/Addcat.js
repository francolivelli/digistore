import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  createCategory,
  getCategory,
  resetState,
  updateCategory,
} from "../features/pcategories/pcategorySlice";
import { useLocation, useNavigate } from "react-router-dom";

let schema = Yup.object().shape({
  title: Yup.string().required("Ingresá el nombre de la categoría"),
});

const Addcat = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  const categoryId = location.pathname.split("/")[3];

  const newCat = useSelector((state) => state.pCategory);

  const {
    isSuccess,
    isError,
    isLoading,
    createdCategory,
    categoryName,
    updatedCategory,
  } = newCat;

  useEffect(() => {
    if (categoryId !== undefined) {
      dispatch(getCategory(categoryId));
    } else {
      dispatch(resetState());
    }
    // eslint-disable-next-line
  }, [categoryId]);

  useEffect(() => {
    if (isSuccess && createdCategory) {
      toast.success("¡Categoría agregada!");
    }
    if (isSuccess && updatedCategory) {
      toast.success("¡Categoría editada!");
      navigate("/admin/category-list");
    }
    if (isError) {
      toast.error("Algo salió mal");
    }
    // eslint-disable-next-line
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: categoryName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (categoryId !== undefined) {
        const data = { id: categoryId, categoryData: values };
        dispatch(updateCategory(data));
        dispatch(resetState());
      } else {
        dispatch(createCategory(values));
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
        {categoryId !== undefined ? "Editar" : "Agregar"} categoría
      </h3>
      <div>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="d-flex gap-2 flex-column">
          <CustomInput
            type="text"
            label="Nombre de la categoría"
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
            {categoryId !== undefined ? "Editar" : "Agregar"} categoría
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcat;
