import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  let schema = Yup.object().shape({
    email: Yup.string()
      .email("Ingresá un email válido")
      .required("Ingresá un email"),
    password: Yup.string().required("Ingresá la contraseña"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const authState = useSelector((state) => state);

  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  useEffect(() => {
    if (isSuccess) {
      navigate("admin");
    } else {
      navigate("");
    }
  }, [user, isError, isSuccess, isLoading, navigate]);

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
        <h4 className="text-center title">Iniciar sesión</h4>
        <p className="text-center" style={{ fontSize: "15px" }}>
          Iniciá sesión para continuar.
        </p>
        <div className="error text-center">
          {message.message === "Rejected" ? "No sos administrador." : ""}
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="email"
            label="Email"
            i_id="email"
            val={formik.values.email}
            onCh={formik.handleChange("email")}
          />
          <div className="error">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <CustomInput
            type="password"
            name="password"
            label="Contraseña"
            i_id="pass"
            val={formik.values.password}
            onCh={formik.handleChange("password")}
          />
          <div className="error">
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="mt-3 mb-3 text-end" style={{ fontSize: "14px" }}>
            <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
          </div>
          <button
            to="/admin"
            className="border-0 px-3 py-2 text-white w-100 text-center text-decoration-none fs-6 rounded"
            style={{ background: "#001529" }}
            type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
