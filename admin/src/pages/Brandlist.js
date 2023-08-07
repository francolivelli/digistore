import React, { useEffect } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brands/brandSlice";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "#",
    dataIndex: "key",
  },
  {
    title: "Nombre",
    dataIndex: "title",
    sorter: (a, b) => a.title.localeCompare(b.title),
  },
  {
    title: "Acción",
    dataIndex: "action",
  },
];

const Brandlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const brandState = useSelector((state) => state.brand.brands);

  const data = [];

  for (let i = 0; i < brandState.length; i++) {
    data.push({
      key: i + 1,
      title: brandState[i].title,
      action: (
        <>
          {" "}
          <Link className="fs-3 text-danger" to="/">
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
      <h3 className="mb-4 title">Marcas</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Brandlist;
