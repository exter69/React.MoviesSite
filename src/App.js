import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Home from "./pages/Home"
import Like from "./pages/Like"


export default function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
          <Route path={"/"} element={<Home/>} />
        <Route path={"/home"} element={<Home/>} />
        <Route path={"/like"} element={<Like/>} />
        <Route path={"*"} element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}




