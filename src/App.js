import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from "./contextApi/notes/noteState";
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';

 function App () {
  const login = localStorage.getItem("token")
  return (
    <NoteState>
      <Router>
        
          <div className="App">
            <Navbar />
            <div className='container my-3'>
            <Routes>
              <Route path="/" element={login ? <Home /> : <Login /> } />
              <Route path="/about" element={<About />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
            </div>
          </div>
      </Router>
    </NoteState>
  );
}

export default App;
