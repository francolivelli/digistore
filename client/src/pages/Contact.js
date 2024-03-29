import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Contact = () => {
  return (
    <>
      <Meta title={"Contacto"} />
      <BreadCrumb title="Contacto" />
      <Container class1="contact-wrapper home-wrapper-2 py-5 px-3">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1418.83083114569!2d-58.35346007438571!3d-34.60759948542555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3351f97fbdf97%3A0xc0a4d539dc2254f!2sReserva%20Ecol%C3%B3gica%20Costanera%20Sur!5e0!3m2!1sen!2sar!4v1689192329495!5m2!1sen!2sar"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"></iframe>
          </div>
          <div
            className="col-12 mt-5
            ">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contacto</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput type="text" name="name" placeholder="Nombre" />
                  <CustomInput type="email" name="email" placeholder="Email" />
                  <CustomInput
                    type="tel"
                    name="telephone"
                    placeholder="Teléfono"
                  />
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Mensaje"></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Enviar</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">
                  Mantenete en contacto con nosotros
                </h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        P. Sherman, 42 Wallaby Way, Sidney
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+54 1100000000">+54 1100000000</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:digistore@digistore.com">
                        digistore@digistore.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Lunes - Viernes 09:00 - 19:00</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
