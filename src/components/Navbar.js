import React from 'react'
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {

  let location = useLocation();

React.useEffect(() => {
}, [location]);
console.log(location.pathname)
  return (
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">iNotebook</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className={`nav-link ${location.pathname=== "/"? "active":""} `} aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link className={`nav-link ${location.pathname=== "/about"? "active":""} `} to="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
