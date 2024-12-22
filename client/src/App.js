import React, { useState, useEffect } from 'react';
import './App.css';  

function App() {
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isBuilding, setIsBuilding] = useState(true);
  const [dotCount, setDotCount] = useState(0);

  const correctPassword = process.env.REACT_APP_PASSWORD; // Get password from .env

  // Dot animation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prevCount) => (prevCount + 1) % 4); // Cycle through 0, 1, 2, 3
    }, 500); // Update every 500ms

    return () => clearInterval(interval);
  }, []);

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
      <header className="bg-yellow-300 text-black p-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Puzzle One</h1>
        <p className="text-lg mb-4 font-serif">
          Building
          {isBuilding && <span>{'.'.repeat(dotCount)}</span>}
        </p>
      </header>

      {/* Footer Section */}
      <footer className="bg-yellow-300 fixed text-white py-4 w-full text-center bottom-0">
        <p className="text-sm">Powered by React</p>
      </footer>
    </div>
  );
}

export default App;
