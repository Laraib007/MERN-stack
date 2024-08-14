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

function App() {

  return (
    <NoteState>
      <Router>
        
          <div className="App">
            <Navbar />
            <head>
              <title>iNootebook</title>
            </head>
            <div className='container my-3'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
            </div>
          </div>
      </Router>
    </NoteState>
  );
}

export default App;
