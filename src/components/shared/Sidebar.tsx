import Link from "next/link";
import { FaBlogger } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdDashboardCustomize } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="bg-sky-400 min-h-screen p-4 rounded-xl">
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <MdDashboardCustomize className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/allProjects"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <GrProjects className="h-5 w-5" />
            <span>Manage Projects</span>
          </Link>
        </li>
        <li>
          <Link
            href="/allBlogs"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaBlogger className="h-5 w-5" />
            <span>Manage Blogs</span>
          </Link>
        </li>
      </ul>

      <ul className="menu bg-base-200 rounded-box w-56">
        <li>
          <details open>
            <summary>
              <FaBlogger className="h-5 w-5" />
              Manage Blogs
            </summary>
            <ul>
              <li>
                <a>Create Blog</a>
              </li>
              <li>
                <a>All Blogs</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
