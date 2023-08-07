import React, { useEffect } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../features/pcategories/pcategorySlice";
import { Link } from "react-router-dom";
import { getBlogs } from "../features/blogs/blogSlice";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const blogState = useSelector((state) => state.blog.blogs);

  const data = [];

  for (let i = 0; i < blogState.length; i++) {
    data.push({
      key: i + 1,
      title: blogState[i].title,
      category: blogState[i].category,
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
      <h3 className="mb-4 title">Blogs</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Bloglist;
