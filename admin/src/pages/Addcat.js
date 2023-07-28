import React from "react";
import CustomInput from "../components/CustomInput";

const Addcat = () => {
  return (
    <div>
      <h3 className="mb-4">Crear categoría</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Nombre de la categoría" />
          <button
            type="sumit"
            className="btn btn-success border-0 rounded-3 my-4">
            Crear categoría
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcat;
