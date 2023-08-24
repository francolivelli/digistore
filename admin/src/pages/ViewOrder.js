import React, { useEffect } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getOrderByUser } from "../features/auth/authSlice";

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
    title: "Marca",
    dataIndex: "brand",
  },
  {
    title: "Cantidad",
    dataIndex: "count",
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Monto",
    dataIndex: "amount",
  },
  {
    title: "Acción",
    dataIndex: "action",
  },
];

const ViewOrder = () => {
  const location = useLocation();

  const userId = location.pathname.split("/")[3];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderByUser(userId));
    // eslint-disable-next-line
  }, [userId]);

  const orderState = useSelector((state) => state.auth.orderByUser?.products);

  if (!orderState) {
    return <div>Loading...</div>;
  }

  const data = [];

  for (let i = 0; i < orderState.length; i++) {
    data.push({
      key: i + 1,
      name: orderState[i].product.title,
      brand: orderState[i].product.brand,
      count: orderState[i].count,
      color: orderState[i].product.color,
      amount: orderState[i].product.price * orderState[i].count,
      action: (
        <>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
        </>
      ),
    });
  }

  return (
    <div>
      <h3 className="mb-4 title">Ver pedido</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default ViewOrder;
