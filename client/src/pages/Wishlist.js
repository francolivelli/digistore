import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Lista de deseos"} />
      <BreadCrumb title="Lista de deseos" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5 px-3">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="wishlist-details">
                <h5 className="title">
                  Lorem ipsum dolor sit amet consectetur.
                </h5>
                <h6 className="price">USD 100</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
