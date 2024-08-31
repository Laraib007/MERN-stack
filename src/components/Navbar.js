import React from 'react'
import { Link, useLocation } from "react-router-dom";
const User = require('../modules/User');

const Navbar = async(props) => {
  const response = await fetch(`http://localhost:5000/api/auth/login`, async (req, res) => {
    try{
     const userId = req.user.id
      const user = await User.findById(userId).select("-password")
      res.json({user})
      } catch (error){
          console.error({error: error.message})
          res.status(500).send("Some internal error")
          
          }})
  const json = await response.json()
  const loginToken = localStorage.getItem("token")
  let location = useLocation();

React.useEffect(() => {
}, [location]);
const login = localStorage.getItem("token")
const logout=() => {
  localStorage.removeItem("token")
  props.showAlert('Logout Sucessfully', "success")}
  return (
    <div >
    <nav  className=" fixed-top navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to={loginToken? "/": "/Login"}>iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname=== "/"? "active":""} `} aria-current="page" to={loginToken? "/": "/Login"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname=== "/about"? "active":""} `} to="/about">About</Link>
        </li>
      </ul>
    </div>
    <Link  className={`btn btn-primary mx-1 ${login ? 'd-none': ''}`}  to={`${login ? "/" : "/Login"}`} role="button">Login</Link>
    <Link className={`btn btn-primary mx-1 ${login ? 'd-none': ''}`} to="/Signup" role="button">Signup</Link>
    <Link className={`btn btn-primary mx-1 ${!login ? 'd-none': ''}`} onClick={logout} to="/Login" role="button">Logout</Link>
  </div>
</nav>
</div>
  )
}

export default Navbar
