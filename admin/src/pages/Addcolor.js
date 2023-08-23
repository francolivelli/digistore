import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  createColor,
  getColor,
  resetState,
  updateColor,
} from "../features/colors/colorSlice";
import { useLocation, useNavigate } from "react-router-dom";

let schema = Yup.object().shape({
  title: Yup.string().required("Ingresá un color"),
});

const Addcolor = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  const colorId = location.pathname.split("/")[3];

  const newColor = useSelector((state) => state.color);

  const {
    isSuccess,
    isError,
    isLoading,
    createdColor,
    colorName,
    updatedColor,
  } = newColor;

  useEffect(() => {
    if (colorId !== undefined) {
      dispatch(getColor(colorId));
    } else {
      dispatch(resetState());
    }
    // eslint-disable-next-line
  }, [colorId]);

  useEffect(() => {
    if (isSuccess && createdColor) {
      toast.success("¡Color agregado!");
    }
    if (isSuccess && updatedColor) {
      toast.success("¡Color editado!");
      navigate("/admin/color-list");
    }
    if (isError) {
      toast.error("Algo salió mal");
    }
    // eslint-disable-next-line
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: colorName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (colorId !== undefined) {
        const data = { id: colorId, colorData: values };
        dispatch(updateColor(data));
        dispatch(resetState());
      } else {
        dispatch(createColor(values));
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
        {colorId !== undefined ? "Editar" : "Agregar"} color
      </h3>
      <div>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="d-flex gap-2 flex-column">
          <CustomInput
            type="color"
            label="Color"
            name="title"
            onCh={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
            id="color"
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-3"
            style={{ width: "fit-content" }}>
            {colorId !== undefined ? "Editar" : "Agregar"} color
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcolor;
