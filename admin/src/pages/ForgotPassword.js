import React from 'react'
import CustomInput from '../components/CustomInput'

const ForgotPassword = () => {
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
        <h4 className="text-center title">Recuperar contraseña</h4>
        <p className="text-center" style={{ fontSize: "15px" }}>Te enviaremos un link a tu correo electrónico para recuperes tu contraseña.</p>
        <form action="">
          <CustomInput type="text" label="Email" i_id="email" />
          <button
            className="border-0 px-3 py-2 text-white w-100 fs-6 rounded"
            style={{ background: "#001529" }}
            type="submit">
            Enviar link
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword