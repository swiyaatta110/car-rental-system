import React, { useState } from "react";
import { login } from "../services/getServices.js";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/userSlice.js";

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    let data = await login(form);
    if (data.suc) {
      toast.success(data.msg);
      dispatch(loginUser(data.user));
      navigate("/home");
    } else {
      toast.error(data.msg);
    }
  };

  return (
    <React.Fragment>
      <div className="min-h-screen flex">
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1585503418537-88331351ad99?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <ToastContainer />
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Login to your account
              </h2>
              <span className="inline-block mt-2 text-sm text-gray-600">
                <p className="font-medium text-indigo-600 hover:text-indigo-500">
                  Login to your account
                </p>
              </span>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={submitHandler} className="space-y-6">
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div>
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm((prev) => {
                            return { ...prev, email: e.target.value };
                          })
                        }
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={(e) =>
                          setForm((prev) => {
                            return { ...prev, password: e.target.value };
                          })
                        }
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Login
                    </button>
                  </div>
                  <Link
                    to="/signup"
                    className="inline-block w-full text-zinc-600 mt-2 text-center"
                  >
                    Don't have an account? Sign Up
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
