import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");
  const [passerr, setPasserr] = useState(""); 
  const navigate = useNavigate();

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    if (password !== conPass) {
      setPasserr("Passwords do not match!");
      return;
    } else {
      setPasserr(""); 
    }

    // Sending data to the backend
    axios
      .post("http://localhost:8000/registration", {  
        username: user,
        email: email,
        password: password,
      })
      .then((res) => {
        toast.success("User registered successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        setTimeout(() => {
          navigate('/')
        }, 3000);
      })
      .catch((err) => {
        console.error(err);
        toast.error("An error occurred during registration.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 m-4 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        {/* Form Start */}
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              User Name
            </label>
            <input
              onChange={(e) => setUser(e.target.value)}
              value={user}
              type="text"
              id="name"
              placeholder="Enter your username"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-600">
              Confirm Password
            </label>
            <input
              onChange={(e) => setConPass(e.target.value)}
              value={conPass}
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
            {/* Password mismatch error */}
            {passerr && <p className="text-red-500 text-sm">{passerr}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Already have an account? */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account?
            <Link to="/" className="text-blue-600 hover:text-blue-700">
              Login
            </Link>
          </p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
