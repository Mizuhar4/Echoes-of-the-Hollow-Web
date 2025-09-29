import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lore from "./pages/Lore";
import Maps from "./pages/Maps";
import Enemies from "./pages/Enemies";
import Character from "./pages/Character";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/lore" element={<Lore />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/enemies" element={<Enemies />} />
      <Route path="/characters" element={<Character />} />
    </Routes>
  );
}
