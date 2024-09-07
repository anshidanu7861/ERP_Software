import React, { useState } from "react";
import { axiosConfig } from "../../config/axiosConfig";
import { setAdminInitialData } from "../../redux/slices/admin.slices";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BtnLoader from "../commens/BtnLoader";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const res = await axiosConfig.post(`/auth/login`, data);
      dispatch(
        setAdminInitialData({
          token: res.data.data?.token,
          findAdmin: res.data.data?.findAdmin,
        })
      );
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(error.response.data.errors[0].message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(value);

    setData({
      ...data,
      [name]: value,
    });
  };

  console.log(data);

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 bg-darkCardColor shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-darkTextColor">
          Login
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2  text-darkTextColor">
              Email
            </label>
            <input
              type="email"
              value={data?.email || ""}
              name="email"
              onChange={handleChange}
              required
              placeholder="Enter Email"
              className="w-full px-3 py-2 border border-darkBorderColor rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block  mb-2 text-darkTextColor"
            >
              Password
            </label>
            <input
              type="password"
              value={data?.password || ""}
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-darkBorderColor rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isLoading ? <BtnLoader /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
