import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getEnquiry,
  resetState,
  updateEnquiry,
} from "../features/enquiries/enquirySlice";
import { BiArrowBack } from "react-icons/bi";

const ViewEnquiries = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const enquiryId = location.pathname.split("/")[3];

  const enquiryState = useSelector((state) => state.enquiry);

  const {
    enquiryName,
    enquiryMobile,
    enquiryEmail,
    enquiryComment,
    enquiryStatus,
  } = enquiryState;

  useEffect(() => {
    dispatch(getEnquiry(enquiryId));
    // eslint-disable-next-line
  }, [enquiryId]);

  const goBack = () => {
    navigate(-1);
  };

  const setEnquiryStatus = (e, i) => {
    const data = { id: i, enquiryData: e };
    dispatch(updateEnquiry(data));
    dispatch(resetState());
    setTimeout(() => {
      dispatch(getEnquiry(enquiryId));
    }, 100);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-0">
        <h3 className="mb-4 title">Ver consulta</h3>
        <button
          className="bg-transparent border-0 fs-6 mb-2 d-flex align-items-center gap-1"
          onClick={goBack}>
          <BiArrowBack className="fs-6" /> Volver
        </button>
      </div>
      <div className="bg-white d-flex  gap-4 p-4 flex-column rounded-3">
        <div className="d-flex align-items-center gap-3">
          <h5 className="mb-1">Nombre:</h5>
          <p className="mb-0">{enquiryName}</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h5 className="mb-1">Teléfono:</h5>
          <p className="mb-0">
            <a href={`tel:+54${enquiryMobile}`}>{enquiryMobile}</a>
          </p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h5 className="mb-1">Email:</h5>
          <p className="mb-0">
            <a href={`mailto:${enquiryEmail}}`}>{enquiryEmail}</a>
          </p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h5 className="mb-1">Mensaje:</h5>
          <p className="mb-0">{enquiryComment}</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h5 className="mb-1">Estado:</h5>
          <p className="mb-0">{enquiryStatus}</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h5 className="mb-0">Cambiar estado:</h5>
          <div>
            <select
              name=""
              defaultValue={enquiryStatus ? enquiryStatus : "Enviado"}
              className="form-control form-select custom-select"
              onChange={(e) => setEnquiryStatus(e.target.value, enquiryId)}>
              <option value="Enviado">Enviado</option>
              <option value="Contactado">Contactado</option>
              <option value="En progreso">En progreso</option>
              <option value="Resuelto">Resuelto</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEnquiries;
