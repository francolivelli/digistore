import React, { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import {
  delImg,
  resetImgState,
  uploadImg,
} from "../features/upload/uploadSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getBlogCategories } from "../features/bcategories/bcategorySlice";
import {
  createBlog,
  getBlog,
  resetState,
  updateBlog,
} from "../features/blogs/blogSlice";
import { useLocation, useNavigate } from "react-router-dom";

let schema = Yup.object().shape({
  title: Yup.string().required("Ingresá un título para el blog"),
  description: Yup.string().required("Ingresá una descripción"),
  category: Yup.string().required("Ingresá el texto"),
});

const Addblog = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  const blogId = location.pathname.split("/")[3];

  const imgState = useSelector((state) => state.upload.images);
  const bCatState = useSelector((state) => state.bCategory.bCategories);

  const [showImg, setShowImg] = useState(true);

  const newBlog = useSelector((state) => state.blog);

  const {
    isSuccess,
    isError,
    isLoading,
    createdBlog,
    updatedBlog,
    blogName,
    blogDescription,
    blogCategory,
    blogImages,
  } = newBlog;

  useEffect(() => {
    if (blogId !== undefined) {
      dispatch(getBlog(blogId));
    } else {
      dispatch(resetState());
    }
    // eslint-disable-next-line
  }, [blogId]);

  useEffect(() => {
    dispatch(resetState());
    dispatch(getBlogCategories());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isSuccess && createdBlog) {
      toast.success("Blog creado!");
    }
    if (isSuccess && updatedBlog) {
      toast.success("¡Blog editado!");
      navigate("/admin/blog-list");
    }
    if (isError) {
      toast.error("Algo salió mal");
    }
    // eslint-disable-next-line
  }, [isSuccess, isError, isLoading]);

  useEffect(() => {
    const updatedImages = imgState.map((i) => ({
      public_id: i.public_id,
      url: i.url,
    }));
    formik.setFieldValue("images", updatedImages);
    // eslint-disable-next-line
  }, [imgState]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogName || "",
      description: blogDescription || "",
      category: blogCategory || "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (blogId !== undefined) {
        const data = { id: blogId, blogData: values };
        dispatch(updateBlog(data));
        dispatch(resetState());
      } else {
        dispatch(createBlog(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
          dispatch(resetImgState());
        }, 300);
      }
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">
        {blogId !== undefined ? "Editar" : "Agregar"} blog
      </h3>
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
          <div
            className="bg-white border-1 text-center rounded-3"
            onClick={() => setShowImg(false)}>
            <Dropzone
              onDrop={(acceptedFiles) => {
                dispatch(uploadImg(acceptedFiles));
              }}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div
                    {...getRootProps()}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100px",
                      cursor: "pointer",
                    }}>
                    <input {...getInputProps()} />
                    <p className="mb-0">
                      Arrastrá los archivos aquí, o hacé click para
                      seleccionarlos
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="show-images d-flex flex-wrap mt-3 gap-3">
            {showImg && blogImages
              ? blogImages.map((i, j) => {
                  return (
                    <div className="position-relative" key={j}>
                      <button
                        type="button"
                        onClick={() => {
                          setShowImg(false);
                          dispatch(delImg(i.public_id));
                        }}
                        className="btn-close position-absolute"
                        style={{ top: "10px", right: "10px" }}></button>
                      <img src={i.url} alt="" height={200} width="auto" />
                    </div>
                  );
                })
              : null}
            {imgState?.map((i, j) => {
              return (
                <div className="position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(delImg(i.public_id));
                    }}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}></button>
                  <img src={i.url} alt="" height={200} width="auto" />
                </div>
              );
            })}
          </div>
          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-3"
            style={{ width: "fit-content" }}>
            {blogId !== undefined ? "Editar" : "Agregar"} blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblog;
