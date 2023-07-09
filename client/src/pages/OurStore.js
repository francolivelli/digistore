import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";

const OurStore = () => {
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
                    <ul className="colors ps-0 mb-4">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
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
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
