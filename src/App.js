import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import useNoteContext from './contextApi/notes/useNoteContext';


function App() {

  return (
    <useNoteContext>
    <Router>
      <>
      <div className="App">
        <Navbar />
        <head>
          <title>iNootebook</title>
        </head>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
      </>
    </Router>
    </useNoteContext>
  );
}

export default App;
