import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Addproduct = () => {
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    setDesc(e);
  };

  return (
    <div>
      <h3 className="mb-4">Agregar producto</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Nombre del producto" />
          <div className="mb-3">
            <ReactQuill
              theme="snow"
              value={desc}
              onChange={(e) => handleDesc(e)}
            />
          </div>
          <CustomInput type="number" label="Precio" />
          <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Seleccionar marca</option>
          </select>
          <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Seleccionar categoría</option>
          </select>
          <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Seleccionar color</option>
          </select>
          <CustomInput type="number" label="Precio" />
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Haz clic o arrastra el archivo a esta área para cargarlo
            </p>
            <p className="ant-upload-hint">
              Compatible con una carga única o masiva. Está estrictamente
              prohibido cargar datos de la empresa u otros archivos prohibidos.
            </p>
          </Dragger>
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
