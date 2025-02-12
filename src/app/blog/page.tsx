import BlogCard from "@/components/shared/BlogCard";
import React from "react";

const BlogPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  console.log(blogs);
  return (
    <div>
      <h1 className="text-4xl text-sky-500 font-semibold text-center">
        Welcome To My Blog Page
      </h1>
      <div className="grid grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
