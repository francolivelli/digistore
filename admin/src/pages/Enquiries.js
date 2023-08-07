import React, { useEffect } from "react";
import { Table } from "antd";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getEnquiries } from "../features/enquiries/enquirySlice";

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
  const dispatch = useDispatch();

  useEffect(() => {
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
          <select name="" className="form-control form-select" id="">
            <option value="">Cambiar estado</option>
          </select>
        </>
      ),
      action: (
        <>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
        </>
      ),
    });
  }

  return (
    <div>
      <h3 className="mb-4 title">Consultas</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Enquiries;
