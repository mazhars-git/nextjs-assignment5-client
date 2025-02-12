"use client";
import Image from "next/image";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl mt-3">
      <figure>
        {/* <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" /> */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{blog.title}</h2>
        <p>{blog.description}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-info uppercase">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
