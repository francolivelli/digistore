import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title={"Carrito"} />
      <BreadCrumb title="Carrito" />
      <section className="cart-wrapper home-wrapper-2 py-5 px-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header pb-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Producto</h4>
                <h4 className="cart-col-2">Precio</h4>
                <h4 className="cart-col-3">Cantidad</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img src={watch} className="img-fluid" alt="product" />
                  </div>
                  <div className="w-75">
                    <p>Lorem.</p>
                    <p>Size: Lorem.</p>
                    <p>Color: Lorem.</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">USD 100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      id=""
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">USD 100</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2">
               <div className="d-flex justify-content-between align-items-baseline">
               <Link to="/store" className="button">Seguir comprando</Link>
               <div className="d-flex flex-column align-items-end">
                <h4>Subtotal: USD 100</h4>
                <p>Impuestos y envío calculados al finalizar la compra</p>
                <Link to="/checkout" className="button">Realizar pedido</Link>
               </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
