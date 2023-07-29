import React from "react";
import CustomInput from "../components/CustomInput";

const Addbrand = () => {
  return (
    <div>
      <h3 className="mb-4 title">Agregar marca</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Nombre de la marca" />
          <button
            type="sumit"
            className="btn btn-success border-0 rounded-3 my-4">
            Agregar marca
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addbrand;
