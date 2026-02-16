import { useState, type ChangeEvent } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import CustomInput from "../components/common/CustomInput";
import coconutBottleHome from "../assets/images/coconutBottleHome.png";

function AdminSignUpPage() {
  const navigate = useNavigate();
  const [isUserRegistration, setIsUserRegistration] = useState({
    userName: "",
    email: "",
    password: "",
    role: "admin",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIsUserRegistration((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const registerUserOnclick = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/signup`,
        isUserRegistration,
      );
      console.log(res);
      toast.success("Admin signup successful!");
      navigate("/login");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Admin signup failed!");
    }
  };

  return (
    <div className="flex h-screen bg-green-50 font-source-serif">
      <Toaster />
      {/* Left Side Illustration */}
      <div className="hidden lg:flex flex-1 items-center justify-center">
        <div className="max-w-md text-center">
          <img
            className="w-full"
            src={coconutBottleHome}
            alt="Pranivaa Coconut Bottle"
          />
        </div>
      </div>

      {/* Right Side Signup Form */}
      <div className="flex w-full items-center justify-center bg-white lg:w-1/2">
        <div className="w-full max-w-md p-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-800 font-alexana">Admin Registration</h1>
            <p className="mt-2 text-sm text-gray-600">
              Create an administrator account.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <CustomInput
              label="User Name"
              name="userName"
              value={isUserRegistration.userName}
              onChange={handleOnChange}
            />
            <CustomInput
              label="Email"
              name="email"
              value={isUserRegistration.email}
              onChange={handleOnChange}
              type="email"
            />
            <CustomInput
              label="Password"
              name="password"
              value={isUserRegistration.password}
              onChange={handleOnChange}
              type="password"
            />
          </div>

          <button
            onClick={registerUserOnclick}
            className="mt-8 w-full rounded-md bg-green-700 px-4 py-2 text-white hover:bg-green-800 focus:ring-2 focus:ring-green-900 focus:outline-none"
          >
            Create Admin Account
          </button>

          <div className="mt-4 text-center text-sm">
            <Link
              to="/login"
              className="font-medium text-green-700 hover:underline"
            >
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminSignUpPage;
