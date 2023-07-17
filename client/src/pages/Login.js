import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title={"Iniciar sesión"} />
      <BreadCrumb title="Iniciar sesión" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Iniciar sesión</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                />
                <div>
                  <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                  <div className="mt-3 d-flex justify-content-around gap-15 align-items-center">
                    <button className="button border-0">Iniciar sesión</button>
                    <Link to="/signup" className="button signup">
                      Registrarse
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
