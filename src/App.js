import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import NotFoundPage from './pages/404'
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
