import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen my-2">
      <div className="flex justify-between">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-slate-200 rounded-xl ml-3">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
