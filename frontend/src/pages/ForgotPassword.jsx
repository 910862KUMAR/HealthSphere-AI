import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import AuthLayout from "../layouts/AuthLayout";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";

import authService from "../services/authService";

const ForgotPassword = () => {

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await authService.forgotPassword({

        email

      });

      toast.success("Password reset link sent successfully.");

    } catch (error) {

      toast.error(

        error.response?.data?.message ||

        "Unable to send reset link."

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <AuthLayout>

      <h2 className="text-3xl font-bold text-center mb-2">

        Forgot Password

      </h2>

      <p className="text-center text-gray-500 mb-8">

        Enter your registered email address.

      </p>

      <form onSubmit={handleSubmit}>

        <AuthInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <AuthButton
          text="Send Reset Link"
          loading={loading}
        />

      </form>

      <p className="text-center mt-6">

        <Link
          to="/"
          className="text-blue-700 font-semibold hover:underline"
        >

          Back to Login

        </Link>

      </p>

    </AuthLayout>

  );

};

export default ForgotPassword;