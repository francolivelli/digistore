import React from 'react'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
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
        <h4 className="text-center" >Cambiar contraseña</h4>
        <p className="text-center" style={{ fontSize: "15px" }} >Por favor, ingresá tu nueva contraseña.</p>
        <form action="">
          <CustomInput type="password" label="Nueva contraseña" i_id="pass" />
          <CustomInput type="password" label="Confirmar contraseña" i_id="confirmpass" />
          <button
            className="border-0 px-3 py-2 text-white w-100 fs-6 rounded"
            style={{ background: "#001529" }}
            type="submit">
            Cambiar contraseña
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword