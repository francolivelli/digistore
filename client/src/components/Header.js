import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Container from "./Container";

const Header = () => {
  return (
    <>
      <Container class1="header-top-strip py-3">
        <div className="row">
          <div className="col-6">
            <p className="text-white mb-0">
              Envío gratis en compras mayores a USD 20 y devoluciones gratuitas
            </p>
          </div>
          <div className="col-6">
            <p className="text-end text-white mb-0">
              Línea directa:{" "}
              <a className="text-white" href="tel:+54 1100000000">
                +54 1100000000
              </a>
            </p>
          </div>
        </div>
      </Container>
      <Container class1="header-upper py-3">
        <div className="row align-items-center">
          <div className="col-2">
            <h2>
              <Link to="/" className="text-white">
                Digistore.
              </Link>
            </h2>
          </div>
          <div className="col-5">
            <div className="input-group">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Buscá tu producto..."
                aria-label="Buscá tu producto..."
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className="fs-6" />
              </span>
            </div>
          </div>
          <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
              <div>
                <Link
                  to="/compare-product"
                  className="d-flex align-items-center gap-10 text-white">
                  <img src="/images/compare.svg" alt="compare" />
                  <p className="mb-0">
                    Comparar <br /> Productos
                  </p>
                </Link>
              </div>
              <div>
                <Link
                  to="/wishlist"
                  className="d-flex align-items-center gap-10 text-white">
                  <img src="/images/wishlist.svg" alt="wishlist" />
                  <p className="mb-0">
                    Lista <br /> de Deseos
                  </p>
                </Link>
              </div>
              <div>
                <Link
                  to="/login"
                  className="d-flex align-items-center gap-10 text-white">
                  <img src="/images/user.svg" alt="login" />
                  <p className="mb-0">
                    Iniciar <br /> Sesión
                  </p>
                </Link>
              </div>
              <div>
                <Link
                  to="/cart"
                  className="d-flex align-items-center gap-10 text-white">
                  <img src="/images/cart.svg" alt="cart" />
                  <div className="d-flex flex-column gap-10">
                    <span className="badge bg-white text-dark">0</span>
                    <p className="mb-0">$ 500</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="header-bottom py-3">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-30">
              <div>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <img src="images/menu.svg" alt="menu" />
                    <span className="me-5 d-inline-block"> Ver Categorías</span>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                    <li>
                      <Link className="dropdown-item text-white" to="">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-15">
                  <NavLink to="/">Inicio</NavLink>
                  <NavLink to="/store">Nuestra tienda</NavLink>
                  <NavLink to="/blogs">Blogs</NavLink>
                  <NavLink to="/contact">Contacto</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
