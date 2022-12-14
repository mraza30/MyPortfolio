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
        <Route
          path="*"
          element={
            <div className="m-auto text-center text-white">
              work in progress
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
