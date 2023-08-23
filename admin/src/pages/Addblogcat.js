import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  createBlogCategory,
  getBlogCategory,
  resetState,
  updateBlogCategory,
} from "../features/bcategories/bcategorySlice";
import { useLocation, useNavigate } from "react-router-dom";

let schema = Yup.object().shape({
  title: Yup.string().required("Ingresá el nombre de la categoría"),
});

const Addblogcat = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  const bCategoryId = location.pathname.split("/")[3];

  const newCat = useSelector((state) => state.bCategory);

  const {
    isSuccess,
    isError,
    isLoading,
    createdBCategory,
    bCategoryName,
    updatedBCategory,
  } = newCat;

  useEffect(() => {
    if (bCategoryId !== undefined) {
      dispatch(getBlogCategory(bCategoryId));
    } else {
      dispatch(resetState());
    }
    // eslint-disable-next-line
  }, [bCategoryId]);

  useEffect(() => {
    if (isSuccess && createdBCategory) {
      toast.success("¡Categoría agregada!");
    }
    if (isSuccess && updatedBCategory) {
      toast.success("¡Categoría editada!");
      navigate("/admin/blog-category-list");
    }
    if (isError) {
      toast.error("Algo salió mal");
    }
    // eslint-disable-next-line
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: bCategoryName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (bCategoryId !== undefined) {
        const data = { id: bCategoryId, blogCategoryData: values };
        dispatch(updateBlogCategory(data));
        dispatch(resetState());
      } else {
        dispatch(createBlogCategory(values));
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
        {bCategoryId !== undefined ? "Editar" : "Agregar"} categoría
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
            className="btn btn-success border-0 rounded-3 my-4"
            style={{ width: "fit-content" }}>
            {bCategoryId !== undefined ? "Editar" : "Agregar"} categoría
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblogcat;
