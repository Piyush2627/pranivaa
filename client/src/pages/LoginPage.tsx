import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { UserType } from "../types/index.types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import coconutBottleHome from "../assets/images/coconutBottleHome.png";

interface DecodedToken {
  role: string;
  exp: number;
}

function LoginPage() {
  const navigate = useNavigate();
  const [isLoginInput, setIsLoginInput] = useState<UserType>({
    email: "",
    password: "",
    userName: "demo",
    role: "",
  });
  const [error, setError] = useState("");

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/loginUser`,
        isLoginInput,
      );
      return response.data.data;
    },
    onSuccess: (data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);

        // Decode token for safety (optional)
        const decodedToken = jwtDecode<DecodedToken>(data.token);
        const userRole = decodedToken.role;

        if (userRole === "admin") {
          navigate("/admin/dashboard");
        } else if (userRole === "user") {
          navigate("/user/dashboard");
        }
      } else {
        setError("No token received");
      }
    },
    onError: (err: any) => {
      setError(err.response?.data?.message || "Login failed");
    },
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIsLoginInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="font-source-serif flex h-screen bg-green-50">
      {/* Left Side Illustration */}
      <div className="hidden flex-1 items-center justify-center lg:flex">
        <div className="max-w-md text-center">
          <img
            className="w-full"
            src={coconutBottleHome}
            alt="Pranivaa Coconut Bottle"
          />
        </div>
      </div>

      {/* Right Side Login Form */}
      <div className="flex w-full items-center justify-center bg-white lg:w-1/2">
        <div className="w-full max-w-md p-6">
          <h1 className="font-alexana mb-2 text-center text-4xl font-bold text-green-800">
            Welcome Back
          </h1>
          <p className="mb-6 text-center text-sm text-gray-500">
            Sign in to continue to your account.
          </p>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={isLoginInput.email}
              onChange={handleOnChange}
              name="email"
              className="mt-1 w-full rounded-md border p-2 focus:ring-2 focus:ring-green-700 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={isLoginInput.password}
              onChange={handleOnChange}
              name="password"
              className="mt-1 w-full rounded-md border p-2 focus:ring-2 focus:ring-green-700 focus:outline-none"
            />
          </div>

          {error && <div className="mb-4 text-sm text-red-500">{error}</div>}

          <button
            onClick={() => mutation.mutate()}
            disabled={mutation.isPending}
            className="w-full rounded-md bg-green-700 p-2 text-white transition duration-300 hover:bg-green-800 focus:ring-2 focus:ring-green-900 focus:outline-none"
          >
            {mutation.isPending ? "Logging in..." : "Login"}
          </button>

          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-green-700 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
