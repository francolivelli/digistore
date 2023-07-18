import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="py-5"
      style={{
        background: "#001529",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h4 className="text-center">Iniciar sesión</h4>
        <p className="text-center" style={{ fontSize: "15px" }}>
          Iniciá sesión para continuar.
        </p>
        <form action="">
          <CustomInput type="text" label="Email" i_id="email" />
          <CustomInput type="password" label="Contraseña" i_id="pass" />
          <Link
            to="/admin"
            className="border-0 px-3 py-2 text-white w-100 text-center text-decoration-none fs-6 rounded"
            style={{ background: "#001529" }}
            type="submit">
            Iniciar sesión
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
