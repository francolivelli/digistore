import React from "react";
import CustomInput from "../components/CustomInput";

const Addcolor = () => {
  return (
    <div>
      <h3 className="mb-4 title">Agregar color</h3>
      <div>
        <form action="">
          <CustomInput type="color" label="Color" />
          <button
            type="sumit"
            className="btn btn-success border-0 rounded-3 my-4">
            Agregar color
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcolor;
