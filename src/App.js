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
import Alert from './components/Aleart';

 function App () {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  const login = localStorage.getItem("token")
  
  return (
    <NoteState>
      <Router>
        
          <div className="App">
            <Navbar />
            <Alert alert={alert}/>
            <div className='container my-3'>
            <Routes>
              <Route path="/" element={login ? <Home /> : <Login /> } />
              <Route path="/about" element={<About />} />
              <Route path="/Login" element={login ? <Home /> : <Login />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
            </div>
          </div>
      </Router>
    </NoteState>
  );
}

export default App;
