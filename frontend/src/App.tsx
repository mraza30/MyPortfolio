import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Homepage } from "./pages";

function App() {
  return (
    <div className="relative min-h-screen bg-zinc-900">
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
