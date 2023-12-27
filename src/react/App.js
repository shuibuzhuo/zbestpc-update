import React from 'react';
import Home from './Home';
import Login from './Login';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Login />} path="/login"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
