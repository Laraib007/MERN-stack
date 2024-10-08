import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from "./contextApi/notes/NoteState";
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Aleart';
import { useState } from 'react';
import Changeemail from './components/Changeemail';
import Changepassword from './components/ChangePassword';

 function App (props) {
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
            <Navbar showAlert={showAlert} />
            <Alert alert={alert}/>
            <div style={{marginTop:"rem"}} className='container my-3 '>
            <Routes>
              <Route path="/" element={login ? <Home showAlert={showAlert} /> : <Login showAlert={showAlert} /> } />
              <Route path="/about" element={<About showAlert={showAlert} />} />
              <Route path="/Login" element={login ? <Home showAlert={showAlert} /> : <Login showAlert={showAlert} />} />
              <Route path="/Signup" element={<Signup showAlert={showAlert} />} />
              <Route path="/Changemail" element={login ? <Changeemail showAlert={showAlert} /> : <Login showAlert={showAlert}/>} />
              <Route path="/Changepassword" element={login ? <Changepassword showAlert={showAlert} /> : <Login showAlert={showAlert}/>} />
            </Routes>
            </div>
          </div>
      </Router>
    </NoteState>
  );
}

export default App;