import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = {
    width: 500,
    height: 500,
    zoomWidth: 500,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
    zoomStyle: { zoom: 1 },
  };

  const [orderedProduct, setOrderedProduct] = useState(true);

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title={"Dynamic product name"} />
      <BreadCrumb title="Dynamic product name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2 px-4">
        <div className="row">
          <div className="col-6 my-4">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-30 justify-content-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom py-3">
                <h3 className="title">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p className="price">USD 100</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    value={3}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 2 reseñas )</p>
                </div>
                <a className="review-btn" href="#review">
                  Escribir una reseña
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                  <h3 className="product-heading">Tipo:</h3>
                  <p className="product-data">Reloj</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Marca:</h3>
                  <p className="product-data">Havells</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Categoría:</h3>
                  <p className="product-data">Reloj</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Etiquetas:</h3>
                  <p className="product-data">reloj</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Disponibilidad:</h3>
                  <p className="product-data">En stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Tamaño:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column">
                  <h3 className="product-heading">Color:</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mb-4">
                  <h3 className="product-heading">Cantidad:</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <button className="button border-0">
                      Agregar al carrito
                    </button>
                    <button to="/signup" className="button signup">
                      Comprar ahora
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 my-2">
                  <div>
                    <a href="a">
                      <TbGitCompare className="fs-5 me-2 mb-1" /> Comparar
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <AiOutlineHeart className="fs-5 me-2 mb-1" /> Agregar a la
                      lista de deseos
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column gap-10 mt-4 mb-3">
                <h3 className="product-heading">Envío y devolución:</h3>
                <p className="product-data">
                  Envío gratuito y devoluciones disponibles en todos los
                  productos a destinos de Argentina dentro de
                  <b> 5 a 10 días hábiles</b>.
                </p>
              </div>
              <div className="d-flex align-items-center gap-10">
                <h3 className="product-heading ">Compartir:</h3>
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    copyToClipboard(
                      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    );
                  }}>
                  Copiar link del producto
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper home-wrapper-2 px-4">
        <div className="row">
          <div className="col-12 ">
            <h4>Descripción</h4>
            <p className="description-inner-wrapper">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique, distinctio? Quibusdam est ut, distinctio officiis
              deserunt consectetur officia unde a, nostrum cum voluptas dolore
              tempore numquam! Quas repellendus rerum accusantium!
            </p>
          </div>
        </div>
      </Container>
      <Container id="review" class1="reviews-wrapper py-5 home-wrapper-2 px-4">
        <div className="row">
          <div className="col-12 ">
            <h4>Reseñas</h4>
            <div className="review-inner-wrapper">
              <div className="review-head ">
                <div className="d-flex flex-column">
                  <h6 className="mb-2">Opiniones de los usuarios</h6>
                  <div className="d-flex justify-content-between alig-items-end">
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Basado en 2 reseñas</p>
                    </div>
                    {orderedProduct && (
                      <div>
                        <a
                          className="text-dark text-decoration-underline"
                          href="a">
                          Escribir una reseña
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="review-form py-4">
                <h6>Escribir una reseña</h6>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      value={3}
                      edit={true}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Mensaje"></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Enviar reseña</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Usuario</h6>
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facilis temporibus praesentium esse ullam exercitationem,
                    animi fugit distinctio ducimus odit atque necessitatibus at
                    quibusdam expedita nesciunt? Qui voluptatum incidunt impedit
                    aliquid!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper home-wrapper-2 pb-5 px-4">
        <div className="row">
          <div className="col-12 ">
            <h3 className="section-heading">Los más buscados</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
