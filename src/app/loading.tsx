import React from "react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-gray-300 text-center pt-40">
      <span className="loading loading-ring loading-sm text-sky-600"></span>
      <span className="loading loading-ring loading-md text-sky-600"></span>
      <span className="loading loading-ring loading-lg text-sky-600"></span>
    </div>
  );
};

export default LoadingPage;
