import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const sidebarItems = ["Home", "Lore", "Maps", "Enemies", "Characters"];

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="flex flex-1">
          {/* Sidebar fijo */}
          <Sidebar
            items={sidebarItems}
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />

          {/* Main ajustado */}
          <main
            className={`flex-1 p-6 transition-all duration-300`}
            style={{ marginLeft: isSidebarOpen ? "16rem" : "0" }} // 16rem = ancho sidebar
          >
            <AppRoutes />
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
