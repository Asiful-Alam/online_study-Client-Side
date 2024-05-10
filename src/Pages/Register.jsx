import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import { AuthContext } from "../Provider/AuthProvider";





const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photoURL = form.get("photo");

    // Password complexity regex
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
      console.log(result);
      toast.success("Registration successful!");
    } catch (error) {
      console.log(error);
      toast.error("Registration failed!");
    }
  };

  return (
    <div>

      <div  className="space-y-10">
       
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100 mx-auto">
          <h2 className="mb-3 text-3xl font-semibold text-center">
            Register an account
          </h2>
          <p className="text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link className="text-blue-700 font-bold" to="/login">
              Login
            </Link>
          </p>
          <div className="my-6 space-y-4"></div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full text-gray-400" />
            <p className="px-3 text-gray-400">or</p>
            <hr className="w-full text-gray-400" />
          </div>
          <form
            onSubmit={handleRegister}
            noValidate=""
            action=""
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="name"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="photo" className="block text-sm">
                  Photo Url
                </label>
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  required
                  placeholder="Photo url"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    required
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-6 h-6 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12a2 2 0 100-4 2 2 0 000 4zM3 10a7 7 0 1114 0 7 7 0 01-14 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a2 2 0 100-4 2 2 0 000 4zM6 10a4 4 0 118 0 4 4 0 01-8 0z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm2 0a8 8 0 1016 0A8 8 0 002 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  </button>
                </div>
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
            >
              Register
            </button>
          </form>
        </div>
       
      </div>
    </div>
  );
};

export default Register;

