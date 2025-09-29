import React from "react";
import { Link, Links } from 'react-router';
import NavBar from "../../Components/Header/NavBar";

const ErrorPages = () => {
  return (
    
    <div>
      <NavBar></NavBar>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Oops! Page not found</h2>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPages;
