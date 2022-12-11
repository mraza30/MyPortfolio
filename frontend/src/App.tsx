import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Contactpage, Homepage } from "./pages";

function App() {
  return (
    <div className="relative min-h-screen bg-zinc-900">
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/contactme" element={<Contactpage />} />
      </Routes>
    </div>
  );
}

export default App;
