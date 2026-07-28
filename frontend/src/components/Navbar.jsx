import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md h-16 px-6 flex items-center justify-between">

      <div>

        <h1 className="text-2xl font-bold text-blue-600">
          HealthSphere AI
        </h1>

        <p className="text-sm text-gray-500">
          Enterprise Healthcare Management System
        </p>

      </div>

      <div className="flex items-center gap-6">

        <div className="text-right">

          <h3 className="font-semibold">
            Admin
          </h3>

          <p className="text-sm text-gray-500">
            Hospital Administrator
          </p>

        </div>

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          A
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </header>
  );
};

export default Navbar;