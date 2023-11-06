import React from "react";

const NavBar = () => {
  const navStyle = {
    backgroundColor: "black",
    color: "white",
    width: "100%", // Set the text color to white
  };

  return (
    <div className="container" style={{ backgroundColor: "black" }}>
      <nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
        <a className="navbar-brand" href="#" style={{ color: "white" }}>
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                Skills <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                Members
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                Plans
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                Job Board
              </a>
            </li>
            <li className="nav-item ml-2">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                Blog
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-primary my-2 my-sm-0"
              type="submit"
              style={{ boxShadow: "2px" }}
            >
              Sign In
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
