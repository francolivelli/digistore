import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/customers/customerSlice";

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
];

const Customers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const state = useSelector((state) => state.customer.customers);

  const data = [];
  for (let i = 0; i < state.length; i++) {
    if (state[i].role !== "admin") {
      data.push({
        key: i + 1,
        name: `${state[i].firstname} ${state[i].lastname}`,
        email: state[i].email,
        mobile: state[i].mobile,
      });
    }
  }

  return (
    <div>
      <h3 className="mb-4 title">Clientes</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Customers;
