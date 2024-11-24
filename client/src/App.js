import React from 'react';
import { IoMdClose } from "react-icons/io";
 // Importing close icon from react-icons

import './App.css';  // Assuming you have a CSS file for additional styling

function App() {
  return (
    <div className="h-screen w-full">
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to Our Website</h1>
        <p className="text-lg mb-4">Your solution for everything, all in one place!</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg transition duration-300">
          Learn More
        </button>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">We're Supreme!</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover how we can elevate your experience. We offer top-notch services and products.
        </p>
        <button className="bg-blue-600 text-white py-3 px-8 rounded-lg text-xl font-medium shadow-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </section>

      {/* Icon Section */}
      <section className="py-16 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Key Features</h3>
        <p className="text-lg text-gray-500 mb-6">
          Take a look at some of the features we offer.
        </p>
        <div className="flex justify-center space-x-8">
          <IoMdClose size={48} className="text-gray-500 hover:text-blue-600 transition duration-300" />
          <IoMdClose size={48} className="text-gray-500 hover:text-blue-600 transition duration-300" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 w-full text-center bottom-0 md:fixed">
        <p className="text-sm">&copy; 2024 Supreme Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
