import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import './App.css';  // Assuming you have a CSS file for additional styling

function App() {
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const correctPassword = process.env.REACT_APP_PASSWORD;  // Get password from .env

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsPasswordCorrect(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect password! Please try again.');
    }
  };

  return (
    <div className="h-screen w-full">
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Namaste</h1>
        <p className="text-lg mb-4">Your solution for everything, all in one place</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg transition duration-300">
          Learn More
        </button>
      </header>

      {/* Password Input Section */}
      {!isPasswordCorrect && (
        <section className="bg-gray-100 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Enter Password</h2>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="border p-2 rounded-md"
              placeholder="Enter your password"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg ml-4"
            >
              Submit
            </button>
          </form>
          {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
        </section>
      )}

      {/* Video Section (Shows after correct password) */}
      {isPasswordCorrect && (
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Video</h2>
          <video
            src="/video.mp4"  // Place the video file in the public folder
            controls
            autoPlay
            className="mx-auto w-full  p-2 shadow-lg rounded-lg"
            width="80%"
          />
        </section>
      )}

      {/* Footer Section */}
      <footer className="bg-gray-800 fixed md:relative text-white py-4 w-full text-center bottom-0">
        <p className="text-sm">&copy; 2024 Supreme Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
