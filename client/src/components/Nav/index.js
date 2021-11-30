import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './nav.css';

function Nav() {
//reload function to the homepage
  function Refresh() {
    window.location.reload();
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="flex-row mainButton">
          <button className="btn success">
            <Link to="/orderHistory">
              Order History
            </Link>
          </button>
          <button className="btn success">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex-row mainButton" >

          <button className="btn success">
            <Link to="/signup">
              Signup
            </Link>
          </button>
          
          <button className="btn success">
            <Link to="/login">
              Login
            </Link>
          </button>
        </div>
      );
    }
  }

  return (
    <div className="total-container">
      <header className="px-1 lr-div-header">
        <div className="left-div">
          <h1 className='mainHeader'>
            <Link to="/" >
            {/* refresh on clicking the nav bar to home page Cactus baby succulent tab */}
            <a href="/" onClick={() => Refresh()}>
              Cactus Baby
              </a>
            </Link>
          </h1>
        </div>
        <div className="right-div">
          <nav>
            {showNavigation()}
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Nav;
