
import './App.css';
import Home from './pages/Home'
import Genre from './pages/Genre';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Browse from './pages/Browse';
import Movies from './pages/Movies';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/movie" element={<Movies />} />

      </Routes>
    </>
  )
}

export default App;
