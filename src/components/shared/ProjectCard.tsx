import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="mt-3">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          {/* <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          /> */}
        </figure>
        <div className="card-body items-center text-center">
          <p>{project.description}</p>
          <div className="card-actions">
            <button className="btn btn-primary uppercase">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
