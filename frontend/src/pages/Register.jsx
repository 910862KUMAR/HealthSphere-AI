import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import AuthLayout from "../layouts/AuthLayout";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";

import authService from "../services/authService";

const Register = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({

    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {

      toast.error("Passwords do not match");

      return;

    }

    try {

      setLoading(true);

      const request = {

        fullName: formData.fullName,
        email: formData.email,
        password: formData.password

      };

      await authService.register(request);

      toast.success("Registration Successful!");

      setTimeout(() => {

        navigate("/");

      }, 2000);

    } catch (error) {

      toast.error(

        error.response?.data?.message ||

        "Registration Failed"

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <AuthLayout>

      <h2 className="text-3xl font-bold text-center mb-2">

        Create Account

      </h2>

      <p className="text-center text-gray-500 mb-8">

        Register to HealthSphere AI

      </p>

      <form onSubmit={handleSubmit}>

        <AuthInput
          label="Full Name"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

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

        <AuthInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <AuthButton
          text="Create Account"
          loading={loading}
        />

      </form>

      <p className="text-center mt-6 text-gray-600">

        Already have an account?

        <Link
          to="/"
          className="text-blue-700 font-semibold ml-2 hover:underline"
        >

          Sign In

        </Link>

      </p>

    </AuthLayout>

  );

};

export default Register;