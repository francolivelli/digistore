import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBlogCategory,
  getBlogCategories,
  resetState,
} from "../features/bcategories/bcategorySlice";
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

const Blogcatlist = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const [blogCategoryId, setBlogCategoryId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setBlogCategoryId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(resetState());
    dispatch(getBlogCategories());
    // eslint-disable-next-line
  }, []);

  const bCategoryState = useSelector((state) => state.bCategory.bCategories);

  const data = [];

  for (let i = 0; i < bCategoryState.length; i++) {
    data.push({
      key: i + 1,
      title: bCategoryState[i].title,
      action: (
        <>
          <Link
            className="fs-3 text-danger"
            to={`/admin/blog-category/${bCategoryState[i]._id}`}>
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(bCategoryState[i]._id)}>
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const handleDelete = (e) => {
    setOpen(false);
    dispatch(deleteBlogCategory(e));
    setTimeout(() => {
      dispatch(getBlogCategories());
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Categorías de blog</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          handleDelete(blogCategoryId);
        }}
        title="¿Estás seguro de que querés eliminar esta categoría?"
      />
    </div>
  );
};

export default Blogcatlist;
