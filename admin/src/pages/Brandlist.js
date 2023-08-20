import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBrand,
  getBrands,
  resetState,
} from "../features/brands/brandSlice";
import { Link } from "react-router-dom";
import CustomModal from "../components/CustomModal";

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
  const [open, setOpen] = useState(false);

  const [brandId, setBrandId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setBrandId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
    dispatch(getBrands());
    // eslint-disable-next-line
  }, []);

  const brandState = useSelector((state) => state.brand.brands);

  const data = [];

  for (let i = 0; i < brandState.length; i++) {
    data.push({
      key: i + 1,
      title: brandState[i].title,
      action: (
        <>
          <Link
            className="fs-3 text-danger"
            to={`/admin/brand/${brandState[i]._id}`}>
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(brandState[i]._id)}>
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const handleDelete = (e) => {
    setOpen(false);
    dispatch(deleteBrand(e));
    setTimeout(() => {
      dispatch(getBrands());
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Marcas</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          handleDelete(brandId);
        }}
        title="¿Estás seguro de que querés eliminar esta marca?"
      />
    </div>
  );
};

export default Brandlist;
