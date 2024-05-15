import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photoURL = form.get("photo");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }

    try {
      const result = await createUser(email, password);
      await updateUserProfile({
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Registration successful!");
    } catch (error) {
      console.log(error);
      toast.error("Registration failed!");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
      <div className="sm:flex justify-center mt-4 sm:mt-0 w-full sm:w-auto">
        <div className="flex flex-col">
        <p className="text-blue-500 font-bold text-2xl mb-10">For better <span className="text-red-500">experience</span> please <span className="text-red-400">register</span> </p>
        <img src="https://i.ibb.co/SNrrg2q/reg-pic.jpg" alt="" className="w-full max-w-xs sm:max-w-none" />
        </div>
      </div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center mb-4">Register an account</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="photo" className="block text-sm">Photo URL</label>
              <input
                type="text"
                name="photo"
                id="photo"
                required
                placeholder="Enter photo URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-400">
                      <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4zM3 10a7 7 0 1114 0 7 7 0 01-14 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-400">
                      <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4zM6 10a4 4 0 118 0 4 4 0 01-8 0z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm2 0a8 8 0 1016 0A8 8 0 002 10z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 focus:outline-none focus:bg-violet-600"
            >
              Register
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
