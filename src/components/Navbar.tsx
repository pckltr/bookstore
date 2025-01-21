import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="hover:underline">
            Books
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
