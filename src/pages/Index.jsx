import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl">Welcome to My Bare-Bones App</h1>
      </header>
      <main className="flex-grow p-4">
        <p>This is a minimalistic web application. You can easily modify and build upon it.</p>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;