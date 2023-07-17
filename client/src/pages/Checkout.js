import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper">
        <div className="row">
          <div className="col-7 home-wrapper py-5 px-5">
            <div className="checkout-left-data">
              <h3 className="website-name">Digistore</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark total-price">
                      Carrito
                    </Link>
                  </li>
                  &nbsp; &gt;
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page">
                    Información
                  </li>
                  &nbsp; &gt;
                  <li className="breadcrumb-item total-price active">Envío</li>
                  &nbsp; &gt;
                  <li className="breadcrumb-item total-price active">Pago</li>
                </ol>
              </nav>
              <h4 className="title total">Información de contacto</h4>
              <p className="user-details total">
                Juan Perez (juanperez@gmail.com)
              </p>
              <h4 className="mb-3">Domicilio de envío</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between">
                <div className="w-100">
                  <select name="" id="" className="form-control form-select">
                    <option value="" selected disabled>
                      Seleccionar país
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Domicilio"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Piso, departamento, etc. (opcional)"
                    className="form-control"
                  />
                </div>
                <div className="row">
                  <div className="col-4">
                    <input
                      type="text"
                      placeholder="Ciudad"
                      className="form-control"
                    />
                  </div>
                  <div className="col-4">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Provincia/estado
                      </option>
                    </select>
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      placeholder="Código postal"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" /> Volver al carrito
                    </Link>
                    <Link to="/cart" className="button">
                      Continuar
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5 home-wrapper-2 py-5 px-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 align-items-center justify-content-between">
                <div className="w-75 mb-2 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "-5px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute">
                      1
                    </span>
                    <img src={watch} className="img-fluid" alt="producto" />
                  </div>
                  <div>
                    <h5 className="total-price">Lorem, ipsum.</h5>
                    <p className="total-price">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="flex-grow-1 d-flex justify-content-end">
                  <p className="total-price">USD 100</p>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">USD 18</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Envío</p>
                <p className="mb-0 total-price">USD 1000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">USD 1000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
