import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">1 de julio de 2023</p>
        <h5 className="title">Lorem ipsum dolor sit.</h5>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          pariatur nobis voluptatem sapiente expedita mollitia!
        </p>
        <Link to="/blog/:id" className="button">
          Seguir leyendo
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
