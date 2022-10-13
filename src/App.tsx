import React, { useState ,useEffect } from "react";

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Edit from "./Pages/Edit";
import Home from "./Pages/Home";

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
        <Route
            path="/"
            element={ <Home /> }
        />
       
        <Route
            path="/edit/:id"
            element={ <Edit /> }
        />
      
    </Routes>
</BrowserRouter>
  )
}

export default App;
