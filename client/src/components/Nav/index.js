import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

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
          </button>``
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

          <button className="btn success">
            <Link to="/main">
              Browse
            </Link>
          </button>
        </div>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1 className='mainHeader'>
        <Link to="/" >
        {/* refresh on clicking the nav bar to home page Cactus baby succulent tab */}
          Cactus Baby
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
