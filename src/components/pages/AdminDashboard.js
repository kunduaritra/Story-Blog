import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faUser,
  faChartBar,
  faSignOutAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../utils/AuthContext";
import ThemeContext from "../utils/ThemeContext";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const authCntx = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);
  const logoutHandler = () => {
    authCntx.logout();
    navigate("/");
  };

  return (
    <div
      className={`${
        isDark ? "bg-dark" : "bg-secondary"
      } min-v-screen flex flex-col`}
    >
      {/* Header */}
      <header className="admin-header bg-white p-4 shadow-md flex justify-between items-center">
        <h2 className="admin-heading text-xl font-bold">অ্যাডমিন ড্যাশবোর্ড</h2>
        <button
          onClick={logoutHandler}
          className="logout-link text-blue-600 hover:underline"
        >
          <FontAwesomeIcon icon={faSignOutAlt} /> লগআউট
        </button>
      </header>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Side Navigation */}
        <div className="w-full md:w-1/4 list-none bg-slate-200 p-6">
          <li className="mb-2 hover:text-red-700 hover:font-bold">
            <Link to="admin/add-new-story">
              <FontAwesomeIcon icon={faPlus} /> নতুন গল্প
            </Link>
          </li>
          <li className="mb-2 hover:text-red-700 hover:font-bold">
            <Link to="admin/posts">
              <FontAwesomeIcon icon={faPen} /> গল্প পরিচালনা
            </Link>
          </li>
          <li className="mb-2 hover:text-red-700 hover:font-bold">
            <Link to="/announcements">
              <FontAwesomeIcon icon={faUser} /> Manage Announcements (Soon)
            </Link>
          </li>
          <li className="mb-2 hover:text-red-700 hover:font-bold">
            <Link to="/analytics">
              <FontAwesomeIcon icon={faChartBar} /> View Analytics (Soon)
            </Link>
          </li>
        </div>
        {/* Main Content */}
        <div className="w-full md:flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
