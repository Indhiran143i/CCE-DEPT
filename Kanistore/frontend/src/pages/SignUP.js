import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    phoneNo: ""
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, name, phoneNo } = data;

    if (!email || !password || !confirmPassword || !name || !phoneNo) {
      toast.error("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const dataResponse = await fetch(SummaryApi.signUP.url, {
        method: SummaryApi.signUP.method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/login");
      } else {
        toast.error(dataApi.message);
      }
    } catch (error) {
      toast.error("Error occurred during signup.");
      console.error("Signup error:", error);
    }
  };

  return (
    <section id="signup" className="bg-gray-50 py-8">
      <div className="mx-auto container p-4">
        <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md mx-auto">
          <form className="pt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid">
              <label className="text-sm font-medium text-gray-700">Name:</label>
              <div className="bg-slate-100 p-2 rounded">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent text-gray-700"
                />
              </div>
            </div>

            <div className="grid">
              <label className="text-sm font-medium text-gray-700">Email:</label>
              <div className="bg-slate-100 p-2 rounded">
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent text-gray-700"
                />
              </div>
            </div>

            <div className="grid">
              <label className="text-sm font-medium text-gray-700">Phone Number:</label>
              <div className="bg-slate-100 p-2 rounded">
                <input
                  type="text"
                  placeholder="Enter phone number"
                  name="phoneNo"
                  value={data.phoneNo}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent text-gray-700"
                />
              </div>
            </div>

            <div className="grid">
              <label className="text-sm font-medium text-gray-700">Password:</label>
              <div className="bg-slate-100 p-2 flex items-center rounded">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={data.password}
                  name="password"
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent text-gray-700"
                />
                <div
                  className="cursor-pointer text-xl text-gray-600 ml-2"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <div className="grid">
              <label className="text-sm font-medium text-gray-700">Confirm Password:</label>
              <div className="bg-slate-100 p-2 flex items-center rounded">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={data.confirmPassword}
                  name="confirmPassword"
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent text-gray-700"
                />
                <div
                  className="cursor-pointer text-xl text-gray-600 ml-2"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded mt-4"
              type="submit"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-500 hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
