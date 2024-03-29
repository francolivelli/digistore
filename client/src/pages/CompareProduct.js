import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Comparar productos"} />
      <BreadCrumb title="Comparar productos" />
      <Container class1="compare-product-wrapper home-wrapper-2 py-5 px-3">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Lorem ipsum dolor sit amet consectetur.
                </h5>
                <h6 className="price mt-3 mb-3">USD 100</h6>
                <div>
                  <div className="product-detail ">
                    <h5>Marca:</h5>
                    <p>Havells</p>
                  </div>
                  <div className="product-detail ">
                    <h5>Tipo:</h5>
                    <p>Reloj</p>
                  </div>
                  <div className="product-detail ">
                    <h5>Disponibilidad:</h5>
                    <p>En stock</p>
                  </div>
                  <div className="product-detail ">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail ">
                    <h5>Tamaño:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
