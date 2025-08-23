import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";



function App() {
  return (
    <>
      <nav>
        <h1>Notes App</h1>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App
