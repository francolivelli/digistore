import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Nuestra tienda"} />
      <BreadCrumb title="Nuestra tienda" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Comprar por categorías</h3>
                <div>
                  <ul className="ps-0">
                    <li>Relojes</li>
                    <li>TV</li>
                    <li>Cámaras</li>
                    <li>Laptops</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filtrar por</h3>
                <div>
                  <h5 className="sub-title">Disponibilidad</h5>
                  <div>
                    <div className="form-check ps-0">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" htmlFor="">
                          En stock (1)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" htmlFor="">
                          Sin stock (0)
                        </label>
                      </div>
                    </div>
                  </div>
                  <h5 className="sub-title">Precio</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating ">
                      <input
                        type="email"
                        className="form-control "
                        id="floatingInput"
                        placeholder="Desde"
                        style={{
                          height: "40px",
                        }}
                      />
                      <label
                        htmlFor="floatingInput"
                        style={{
                          padding: 12,
                          textAlign: "center",
                          fontSize: "14px",
                          lineHeight: "16px",
                        }}>
                        Desde
                      </label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control "
                        id="floatingInput"
                        placeholder="Hasta"
                        style={{
                          height: "40px",
                        }}
                      />
                      <label
                        htmlFor="floatingInput"
                        style={{
                          padding: 12,
                          textAlign: "center",
                          fontSize: "14px",
                          lineHeight: "16px",
                        }}>
                        Hasta
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colores</h5>
                  <div>
                    <Color />
                  </div>
                  <h5 className="sub-title">Tamaño</h5>
                  <div>
                    <div className="form-check ps-0">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="color-1"
                        />
                        <label className="form-check-label" htmlFor="color-1">
                          S (2)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="color-2"
                        />
                        <label className="form-check-label" htmlFor="color-2">
                          M (2)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Etiquetas</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      auriculares
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      celular
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      cable
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Producto al azar</h3>
                <div>
                  <div className="random-products d-flex mb-3">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Reloj multifunción</h5>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p>USD 300</p>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Reloj multifunción</h5>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p>USD 300</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p
                      className="mb-0 d-block"
                      style={{ width: "130px", textJustify: "center" }}>
                      Ordenar por:
                    </p>
                    <select name="" id="" className="form-control form-select">
                      <option value="manual">Destacados</option>
                      <option value="best-selling">Más vendidos</option>
                      <option value="title-ascending">
                        Alfabéticamente, A-Z
                      </option>
                      <option value="title-descending">
                        Alfabéticamente, Z-A
                      </option>
                      <option value="price-ascending">
                        Precio, ascendente
                      </option>
                      <option value="price-descending">
                        Precio, descendente
                      </option>
                      <option value="created-ascending">
                        Fecha, más antiguo a más nuevo
                      </option>
                      <option value="created-descending">
                        Fecha, más nuevo a más antiguo
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 productos</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => setGrid(3)}
                        src="images/gr4.svg"
                        alt="grid"
                        className={`d-block img-fluid ${
                          grid === 3 ? "selected" : ""
                        }`}
                      />
                      <img
                        onClick={() => setGrid(4)}
                        src="images/gr3.svg"
                        alt="grid"
                        className={`d-block img-fluid ${
                          grid === 4 ? "selected" : ""
                        }`}
                      />
                      <img
                        onClick={() => setGrid(6)}
                        src="images/gr2.svg"
                        alt="grid"
                        className={`d-block img-fluid ${
                          grid === 6 ? "selected" : ""
                        }`}
                      />
                      <img
                        onClick={() => setGrid(12)}
                        src="images/gr.svg"
                        alt="grid"
                        className={`d-block img-fluid ${
                          grid === 12 ? "selected" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
