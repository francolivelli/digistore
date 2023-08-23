import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBlog, getBlogs, resetState } from "../features/blogs/blogSlice";
import CustomModal from "../components/CustomModal";

const columns = [
  {
    title: "#",
    dataIndex: "key",
  },
  {
    title: "Título",
    dataIndex: "title",
    sorter: (a, b) => a.title.localeCompare(b.title),
  },
  {
    title: "Categoría",
    dataIndex: "category",
    sorter: (a, b) => a.category.localeCompare(b.category),
  },
  {
    title: "Acción",
    dataIndex: "action",
  },
];

const Bloglist = () => {
  const [open, setOpen] = useState(false);

  const [blogId, setBlogId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setBlogId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
    dispatch(getBlogs());
    // eslint-disable-next-line
  }, []);

  const blogState = useSelector((state) => state.blog.blogs);

  const data = [];

  for (let i = 0; i < blogState.length; i++) {
    data.push({
      key: i + 1,
      title: blogState[i].title,
      category: blogState[i].category,
      action: (
        <>
          <Link
            className="fs-3 text-danger"
            to={`/admin/blog/${blogState[i]._id}`}>
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(blogState[i]._id)}>
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const handleDelete = (e) => {
    setOpen(false);
    dispatch(deleteBlog(e));
    setTimeout(() => {
      dispatch(getBlogs());
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Blogs</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          handleDelete(blogId);
        }}
        title="¿Estás seguro de que querés eliminar este blog?"
      />
    </div>
  );
};

export default Bloglist;
