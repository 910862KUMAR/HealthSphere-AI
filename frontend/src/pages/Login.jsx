import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import AuthLayout from "../layouts/AuthLayout";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";

import authService from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Login = () => {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({

    email: "",
    password: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {
const response = await authService.login(formData);

login(response);

toast.success("Login Successful");

navigate("/dashboard");

    } catch (error) {

      toast.error(

        error.response?.data?.message ||

        "Invalid Email or Password"

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <AuthLayout>

      <h2 className="text-3xl font-bold text-center mb-2">

        Welcome Back

      </h2>

      <p className="text-center text-gray-500 mb-8">

        Sign in to continue to HealthSphere AI

      </p>

      <form onSubmit={handleSubmit}>

        <AuthInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <AuthInput
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="flex justify-between items-center mb-6">

          <label className="flex items-center gap-2 text-sm">

            <input type="checkbox" />

            Remember Me

          </label>

          <Link
            to="/forgot-password"
            className="text-blue-700 hover:underline text-sm"
          >

            Forgot Password?

          </Link>

        </div>

        <AuthButton
          text="Sign In"
          loading={loading}
        />

      </form>

      <p className="text-center mt-6 text-gray-600">

        Don't have an account?

        <Link
          to="/register"
          className="text-blue-700 font-semibold ml-2 hover:underline"
        >

          Create Account

        </Link>

      </p>

    </AuthLayout>

  );

};

export default Login;