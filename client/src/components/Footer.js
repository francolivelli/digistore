import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Conocé nuestras novedades</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Ingresá tu correo electrónico"
                  aria-label="Ingresá tu correo electrónico"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Registrar
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contactanos</h4>
              <div>
                <address className="text-white fs-6">
                  P. Sherman, <br />
                  42 Wallaby Way, <br />
                  Sidney
                </address>
                <a
                  href="tel:+54 1100000000"
                  className="mt-3 d-block mb-1 text-white">
                  +54 1100000000
                </a>
                <a
                  href="mailto:digistore@digistore.com"
                  className="mt-2 d-block mb-0 text-white">
                  digistore@digistore.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer">
                    <BsLinkedin className="text-white fs-4" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer">
                    <BsInstagram className="text-white fs-4" />
                  </a>
                  <a
                    href="https://www.github.com"
                    target="_blank"
                    rel="noreferrer">
                    <BsGithub className="text-white fs-4" />
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noreferrer">
                    <BsYoutube className="text-white fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Información</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="privacy-policy" className="text-white py-2 mb-1">
                  Política de privacidad
                </Link>
                <Link to="refund-policy" className="text-white py-2 mb-1">
                  Política de reembolso
                </Link>
                <Link to="shipping-policy" className="text-white py-2 mb-1">
                  Política de envíos
                </Link>
                <Link
                  to="terms-and-conditions"
                  className="text-white py-2 mb-1">
                  Términos y condiciones
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Cuenta</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Sobre nosotros</Link>
                <Link className="text-white py-2 mb-1">
                  Preguntas frecuentes
                </Link>
                <Link className="text-white py-2 mb-1">Contacto</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Enlaces rápidos</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Auriculares</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Relojes</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Digistore
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
