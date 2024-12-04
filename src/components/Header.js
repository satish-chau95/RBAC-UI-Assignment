import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isLoggedIn, onLogout }) {
  return (
    <header className="bg-[#022b3a] shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            RBAC UI
          </Link>
          <ul className="flex space-x-4">
         {!isLoggedIn && (
            <li>
              <Link to="/" className="text-white hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            )}
            <li>
              <Link to="/about" className="text-white hover:text-blue-600 transition-colors">
                About
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/dashboard" className="text-white hover:text-blue-600 transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={onLogout}
                    className="text-white hover:text-blue-600 transition-colors"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="text-white hover:text-blue-600 transition-colors">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="text-white hover:text-blue-600 transition-colors">
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

