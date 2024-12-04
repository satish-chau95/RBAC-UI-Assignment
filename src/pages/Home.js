import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to RBAC UI</h1>
      <p className="text-xl mb-8">
        Manage your users, roles, and permissions with our intuitive dashboard.
      </p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition-colors"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home;

