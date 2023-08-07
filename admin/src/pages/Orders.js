import React, { useEffect } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../features/auth/authSlice";

const columns = [
  {
    title: "#",
    dataIndex: "key",
  },
  {
    title: "Nombre",
    dataIndex: "name",
  },
  {
    title: "Productos",
    dataIndex: "product",
  },
  {
    title: "Monto",
    dataIndex: "amount",
  },
  {
    title: "Fecha",
    dataIndex: "date",
  },
  {
    title: "Acción",
    dataIndex: "action",
  },
];

const Orders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const orderState = useSelector((state) => state.auth.orders);

  const data = [];

  for (let i = 0; i < orderState.length; i++) {
    data.push({
      key: i + 1,
      name:
        orderState[i].orderby.firstname + " " + orderState[i].orderby.lastname,
      product: orderState[i].products.map((i, j) => {
        return (
          <p key={j} className="mb-1">
            {i.product.title}
          </p>
        );
      }),
      amount: orderState[i].paymentIntent.amount,
      date: new Date(orderState[i].createdAt).toLocaleString(),
      action: (
        <>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <BiEdit />
          </Link>
        </>
      ),
    });
  }

  return (
    <div>
      <h3 className="mb-4 title">Órdenes</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Orders;
