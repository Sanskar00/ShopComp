import React, { useContext, useState } from "react";
import { Navigate } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../actions/authAction";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const [state, dispatch] = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(dispatch, email, password);
  };

  const navigate = useNavigate();

  return (
    <div className="mt-20 w-screen h-screen  place-items-center relative">
      <div className="absolute top-12 w-full place-items-center grid">
        <h1 className="mb-12 text-2xl font-semibold  "> Welcome Back</h1>
        <div className="w-full ">
          <form
            className="w-full grid place-items-center gap-8"
            onSubmit={onSubmit}
          >
            <input
              className="w-2/3 h-12 pr-8 appearance-none  pl-2 rounded-lg border-gray-200 border leading-tight focus:outline-none focus:bg-white focus:border-new-blue"
              placeholder="Email"
              type="text"
              name="email"
              value={email}
              onChange={onChange}
            ></input>
            <input
              className="w-2/3 h-12 pr-8 appearance-none   pl-2 rounded-lg border-gray-200 border   leading-tight focus:outline-none focus:bg-white focus:border-new-blue"
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            ></input>
            <input
              type="submit"
              className="w-2/3 h-12  cursor-pointer bg-new-blue rounded-lg text-white"
              value="Login"
            ></input>
          </form>
        </div>
        <div className="flex gap-2 my-4">
          <h2 className="text-sm text-gray-500 "> Don't have account</h2>
          <div
            className="text-sm cursor-pointer text-new-blue"
            onClick={() => {
              navigate("/signUp");
            }}
          >
            Sign UP
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
