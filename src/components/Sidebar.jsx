import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Sidebar({ items, isOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-30
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="font-bold text-lg">Menú</h2>
        <button onClick={toggleSidebar} className="text-white text-2xl">
          <FaTimes />
        </button>
      </div>

      <ul className="p-4 space-y-4">
        {items &&
          items.map((item, index) => (
            <li
              key={index}
              className="py-2 px-3 rounded hover:bg-gray-700 cursor-pointer"
            >
              {item}
            </li>
          ))}
      </ul>
    </aside>
  );
}
