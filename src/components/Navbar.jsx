import React from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl lg:hidden"
        >
          <FaBars />
        </button>
        <h1 className="text-2xl font-bold">Echoes of the Hollow</h1>
      </div>
    </nav>
  );
}
