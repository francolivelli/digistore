import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteEnquiry,
  getEnquiries,
  resetState,
  updateEnquiry,
} from "../features/enquiries/enquirySlice";
import CustomModal from "../components/CustomModal";

const columns = [
  {
    title: "#",
    dataIndex: "key",
  },
  {
    title: "Nombre",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Teléfono",
    dataIndex: "mobile",
  },
  {
    title: "Estado",
    dataIndex: "status",
  },
  {
    title: "Acción",
    dataIndex: "action",
  },
];

const Enquiries = () => {
  const [open, setOpen] = useState(false);

  const [enquiryId, setEnquiryId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setEnquiryId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
    dispatch(getEnquiries());
  }, [dispatch]);

  const enquiryState = useSelector((state) => state.enquiry.enquiries);

  const data = [];

  for (let i = 0; i < enquiryState.length; i++) {
    data.push({
      key: i + 1,
      name: enquiryState[i].name,
      email: enquiryState[i].email,
      mobile: enquiryState[i].mobile,
      status: (
        <>
          <select
            name=""
            defaultValue={
              enquiryState[i].status ? enquiryState[i].status : "Enviado"
            }
            className="form-control form-select custom-select"
            onChange={(e) =>
              setEnquiryStatus(e.target.value, enquiryState[i]._id)
            }>
            <option value="Enviado">Enviado</option>
            <option value="Contactado">Contactado</option>
            <option value="En progreso">En progreso</option>
            <option value="Resuelto">Resuelto</option>
          </select>
        </>
      ),
      action: (
        <>
          <Link
            className="ms-3 fs-3 text-danger"
            to={`/admin/enquiries/${enquiryState[i]._id}`}>
            <AiOutlineEye />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(enquiryState[i]._id)}>
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const setEnquiryStatus = (e, i) => {
    const data = { id: i, enquiryData: e };
    dispatch(updateEnquiry(data));
  };

  const handleDelete = (e) => {
    setOpen(false);
    dispatch(deleteEnquiry(e));
    setTimeout(() => {
      dispatch(getEnquiries());
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Consultas</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          handleDelete(enquiryId);
        }}
        title="¿Estás seguro de que querés eliminar esta consulta?"
      />
    </div>
  );
};

export default Enquiries;
