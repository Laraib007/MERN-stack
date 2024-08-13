import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Notestate from './contextApi/notes/Notestate';


function App() {

  return (
    <Notestate>
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
    </Notestate>
  );
}

export default App;
