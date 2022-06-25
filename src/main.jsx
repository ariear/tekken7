import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from './views/Home';
import Fighter from './views/Fighter';
import Navbar from './components/Navbar';
import About from './views/About';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fighters" element={<Fighter />} />
        <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
)
