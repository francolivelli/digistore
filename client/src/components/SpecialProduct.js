import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-around">
          <div>
            <img src="images/watch.jpg" className="img-fluid" alt="" />
          </div>
          <div className="special-product-content">
            <h6 className="brand">Havells</h6>
            <h5 className="title">Samsung Galaxy Note 18</h5>
            <ReactStars
              count={5}
              value={3}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">USD 100</span> &nbsp;{" "}
              <strike>USD 200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 </b>días
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>;
                <span className="badge rounded-circle p-3 bg-danger">1</span>;
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Productos: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"></div>
              </div>
            </div>
            <Link className="button">Agregar al carrito</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
