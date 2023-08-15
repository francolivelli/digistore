import React, { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brands/brandSlice";
import { getCategories } from "../features/pcategories/pcategorySlice";
import { getColors } from "../features/colors/colorSlice";
import { Select } from "antd";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/upload/uploadSlice";
import { createProducts } from "../features/products/productSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

let schema = Yup.object().shape({
  title: Yup.string().required("Ingresá un nombre para el producto"),
  description: Yup.string().required("Ingresá una descripción"),
  price: Yup.number().required("Ingresá un precio"),
  brand: Yup.string().required("Ingresá una marca"),
  category: Yup.string().required("Ingresá una categoría"),
  tags: Yup.string().required("Ingresá una etiqueta"),
  color: Yup.array()
    .min(1, "Ingresá al menos un color")
    .required("Ingresá un color"),
  quantity: Yup.number().required("Ingresá una cantidad"),
});

const Addproduct = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [color, setColor] = useState([]);

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
    // eslint-disable-next-line
  }, []);

  const brandState = useSelector((state) => state.brand.brands);
  const categoryState = useSelector((state) => state.pCategory.pCategories);
  const colorState = useSelector((state) => state.color.colors);
  const imgState = useSelector((state) => state.upload.images);
  const newProduct = useSelector((state) => state.product);

  const { isSuccess, isError, isLoading, createdProduct } = newProduct;

  useEffect(() => {
    if(isSuccess && createdProduct){
      toast.success("¡Producto agregado!");
    }
    if(isError){
      toast.error("Algo salió mal");
    }
  }, [isSuccess, isError, isLoading]);

  const coloropt = [];
  const img = [];

  colorState.forEach((i) => {
    coloropt.push({
      label: i.title,
      value: i._id,
    });
  });

  imgState.forEach((i) => {
    img.push({ public_id: i.public_id, url: i.url });
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      tags: "",
      color: "",
      quantity: "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createProducts(values));
      formik.resetForm();
      setColor(null);
      setTimeout(() => {
        navigate("/admin/product-list");
      }, 3000);
    },
  });

  useEffect(() => {
    formik.values.color = color ? color : " ";
    formik.values.images = img;
    // eslint-disable-next-line
  }, [color, img]);

  const handleColors = (e) => {
    setColor(e);
  };

  return (
    <div>
      <h3 className="mb-4 title">Agregar producto</h3>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-2 flex-column">
          <CustomInput
            type="text"
            label="Nombre del producto"
            name="title"
            onCh={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <div>
            <ReactQuill
              theme="snow"
              name="description"
              onChange={formik.handleChange("description")}
              value={formik.values.description}
            />
          </div>
          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>
          <div className="input-top">
            <CustomInput
              type="number"
              label="Precio"
              name="price"
              onCh={formik.handleChange("price")}
              onBl={formik.handleBlur("price")}
              val={formik.values.price}
            />
          </div>
          <div className="error">
            {formik.touched.price && formik.errors.price}
          </div>
          <div style={{ marginBottom: "0px" }}>
            <select
              name="brand"
              onChange={formik.handleChange("brand")}
              onBlur={formik.handleBlur("brand")}
              value={formik.values.brand}
              className="form-control py-3"
              style={{ paddingLeft: "0.75rem" }}
              id="">
              <option value="">Seleccionar marca</option>
              {brandState.map((i, j) => {
                return (
                  <option key={j} value={i.title}>
                    {i.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="error">
            {formik.touched.brand && formik.errors.brand}
          </div>
          <select
            name="category"
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            value={formik.values.category}
            className="form-control py-3"
            style={{ paddingLeft: "0.75rem" }}
            id="">
            <option value="">Seleccionar categoría</option>
            {categoryState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>
          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>
          <select
            name="tags"
            onChange={formik.handleChange("tags")}
            onBlur={formik.handleBlur("tags")}
            value={formik.values.tags}
            className="form-control py-3"
            style={{ paddingLeft: "0.75rem" }}
            id="">
            <option value="" disabled>
              Seleccionar categoría
            </option>
            <option value="destacado">Destacado</option>
            <option value="popular">Popular</option>
            <option value="especial">Especial</option>
          </select>
          <div className="error">
            {formik.touched.tags && formik.errors.tags}
          </div>
          <Select
            mode="multiple"
            allowClear
            className="w-100 form-control py-3"
            placeholder="Seleccionar colores"
            defaultValue={color}
            onChange={(i) => handleColors(i)}
            options={coloropt}
            showSearch={false}
          />
          <div className="error">
            {formik.touched.color && formik.errors.color}
          </div>
          <div style={{ marginTop: -15 }}>
            <CustomInput
              type="number"
              label="Cantidad"
              name="quantity"
              onCh={formik.handleChange("quantity")}
              onBl={formik.handleBlur("quantity")}
              val={formik.values.quantity}
            />
          </div>
          <div className="error">
            {formik.touched.quantity && formik.errors.quantity}
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
          <div className="show-images d-flex flex-wrap gap-3">
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
            type="sumit"
            className="btn btn-success border-0 rounded-3 my-4">
            Agregar producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
