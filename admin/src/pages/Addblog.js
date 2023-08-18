import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/upload/uploadSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getBlogCategories } from "../features/bcategories/bcategorySlice";
import { createBlog, resetState } from "../features/blogs/blogSlice";

let schema = Yup.object().shape({
  title: Yup.string().required("Ingresá un título para el blog"),
  description: Yup.string().required("Ingresá una descripción"),
  category: Yup.string().required("Ingresá el texto"),
});

const Addblog = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBlogCategories());
    // eslint-disable-next-line
  }, []);

  const imgState = useSelector((state) => state.upload.images);
  const bCatState = useSelector((state) => state.bCategory.bCategories);
  const newBlog = useSelector((state) => state.blog);

  const { isSuccess, isError, isLoading, createdBlog } = newBlog;

  useEffect(() => {
    if (isSuccess && createdBlog) {
      toast.success("Blog creado!");
    }
    if (isError) {
      toast.error("Algo salió mal");
    }
  }, [isSuccess, isError, isLoading, createdBlog]);

  const img = [];

  imgState.forEach((i) => {
    img.push({ public_id: i.public_id, url: i.url });
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createBlog(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState())
        navigate("/admin/blog-list");
      }, 3000);
    },
  });

  useEffect(() => {
    formik.values.images = img;
    // eslint-disable-next-line
  }, [img]);

  return (
    <div>
      <h3 className="mb-4 title">Crear blog</h3>
      <div>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="d-flex gap-2 flex-column">
          <CustomInput
            type="text"
            label="Título del blog"
            name="title"
            onCh={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <div style={{ marginBottom: "0px" }}>
            <select
              name="category"
              onChange={formik.handleChange("category")}
              onBlur={formik.handleBlur("category")}
              value={formik.values.category}
              className="form-control py-3"
              id=""
              style={{ paddingLeft: "0.75rem" }}>
              <option value="">Seleccionar categoría</option>
              {bCatState.map((i, j) => {
                return (
                  <option key={j} value={i.title}>
                    {i.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>
          <ReactQuill
            theme="snow"
            name="description"
            onChange={formik.handleChange("description")}
            value={formik.values.description}
          />
          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>
          <div className="bg-white border-1 p-5 text-center">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p className="mb-0">
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="show-images d-flex flex-wrap mt-3 gap-3">
            {imgState?.map((i, j) => {
              return (
                <div className="position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(delImg(i.public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}></button>
                  <img src={i.url} alt="" height={200} width="auto" />
                </div>
              );
            })}
          </div>
          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-4"
            style={{ width: "fit-content" }}>
            Crear blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblog;
