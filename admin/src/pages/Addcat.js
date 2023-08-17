import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useFormik } from "formik";
import { createCategory } from "../features/pcategories/pcategorySlice";

let schema = Yup.object().shape({
  title: Yup.string().required("Ingresá el nombre de la categoría"),
});

const Addcat = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const newCat = useSelector((state) => state.pCategory);

  const { isSuccess, isError, isLoading, createdCategory } = newCat;

  useEffect(() => {
    if (isSuccess && createdCategory) {
      toast.success("¡Categoría agregada!");
    }
    if (isError) {
      toast.error("Algo salió mal");
    }
  }, [isSuccess, isError, isLoading, createdCategory]);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createCategory(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/category-list");
      }, 3000);
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">Crear categoría</h3>
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
            Crear categoría
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcat;
