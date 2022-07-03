import React from "react";
import logo from "../../assets/images/logo.webp"
import "../../assets/css/header.css"
import { useHistory } from "react-router-dom";
export default function Header() {
  let history = useHistory()
  
  const signout=()=>{
    history.push(`${process.env.PUBLIC_URL}/welcome`)
    localStorage.clear();
    localStorage.setItem('domain',window.location.hostname)
    window.location.reload();
  }

  return (
    <nav className="navbar navbar-expand-md">
    <div className="container">
      <a className="navbar-brand" href=""><img src={logo} alt=""  width={170}/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span className="navbar-toggler-icon">
        <i className="fa fa-bars toggler-icon"></i>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">My Articles</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">My Edutainment</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">My Challenges</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">My Journal</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Trending Today</a>
          </li>
        </ul>
      
       <div className="d-flex header-btns">
           <div className="sign-in"><button className="btn signin-properties" type="button" onClick={signout} >Sign Out</button></div>
       </div>
      
      </div>
    </div>
  </nav>
  );
}