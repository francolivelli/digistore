import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  getCategories,
  resetState,
} from "../features/pcategories/pcategorySlice";
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

const Categorylist = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const [categoryId, setCategoryId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setCategoryId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategories());
    // eslint-disable-next-line
  }, []);

  const pCategoryState = useSelector((state) => state.pCategory.pCategories);

  const data = [];

  for (let i = 0; i < pCategoryState.length; i++) {
    data.push({
      key: i + 1,
      title: pCategoryState[i].title,
      action: (
        <>
          <Link
            className="fs-3 text-danger"
            to={`/admin/category/${pCategoryState[i]._id}`}>
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(pCategoryState[i]._id)}>
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const handleDelete = (e) => {
    setOpen(false);
    dispatch(deleteCategory(e));
    setTimeout(() => {
      dispatch(getCategories());
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Categorías de producto</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          handleDelete(categoryId);
        }}
        title="¿Estás seguro de que querés eliminar esta categoría?"
      />
    </div>
  );
};

export default Categorylist;
