import React from "react";

const projectById = ({ params }) => {
  const { projectId } = params;
  return (
    <div>
      <h1>This is single project page</h1>
    </div>
  );
};

export default projectById;
