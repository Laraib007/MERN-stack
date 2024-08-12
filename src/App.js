import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <head>
        <title>iNootebook</title>
        <link rel="icon" href="https://5.imimg.com/data5/SELLER/Default/2023/4/303063826/NL/IK/TA/108643945/school-nootbook-500x500.jpg" />
      </head>
      <Router>
      <Routes>
      <Route path="/"element={<Home/>}/>
          <Route path="/about"element={<About/>}/>
          
          </Routes>
        </Router>
     
    
    </div>
  );
}

export default App;
