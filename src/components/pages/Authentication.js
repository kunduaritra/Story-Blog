import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const username = useRef();
  const password = useRef();
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const enteredUsername = username.current.value;
    const enteredPassword = password.current.value;
    if (enteredPassword && enteredUsername) {
      try {
        const data = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFgSM4UBJB3FovIwXuCz7JFOGEqlzQKW4`,
          {
            method: "POST",
            body: JSON.stringify({
              email: username.current.value,
              password: password.current.value,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const res = await data.json();
        if (!data.ok) {
          throw new Error(res.error.message);
        } else {
          navigate("/admin");
          console.log(data);
        }
      } catch (err) {
        toast.error(err.message, {
          position: "bottom-center",
        });
      }
    }
  };

  const handleForgetPassword = () => {
    setShowForgetPassword(true);
  };

  const handleResetPassword = () => {
    // Call API to reset password
    console.log("Reset password button clicked");
  };

  return (
    <>
      <ToastContainer theme="colored" closeOnClick rtl={true} />
      <div className="flex items-start justify-center min-h-screen bg-gray-100 px-6">
        {/* card */}
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full mt-4">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Login
          </h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                ref={username}
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                ref={password}
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              <a
                className="text-sm text-gray-600 hover:text-gray-900"
                href="#"
                onClick={handleForgetPassword}
              >
                Forget Password?
              </a>
            </div>
          </form>

          {showForgetPassword && (
            <div className="bg-gray-100 p-4 rounded mt-4 shadow-inner">
              <h2 className="text-lg font-bold mb-2 text-gray-800">
                Reset Password
              </h2>
              <p className="text-gray-600 mb-4">
                Enter your email address to reset your password.
              </p>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                type="email"
                placeholder="Enter your email address"
              />
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleResetPassword}
              >
                Reset Password
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Authentication;
