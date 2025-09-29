import React from "react";

export default function SearchBar() {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
      />
    </div>
  );
}
