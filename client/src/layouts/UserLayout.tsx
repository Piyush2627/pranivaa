import { Outlet, Link } from "react-router-dom";
import TopNavBar from "../components/common/TopNavBar";

const UserLayout = () => {
  return (
    <div>
      <TopNavBar />
      <div className="p-4">
        <nav className="bg-gray-800 p-4 text-white">
          <ul className="flex space-x-4">
            <li>
              <Link to="/user/dashboard" className="hover:underline">Dashboard</Link>
            </li>
            <li>
              <Link to="/user/profile" className="hover:underline">Profile</Link>
            </li>
            <li>
              <Link to="/user/settings" className="hover:underline">Settings</Link>
            </li>
          </ul>
        </nav>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
