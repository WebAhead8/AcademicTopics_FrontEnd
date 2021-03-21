import "./navBar.css";
import React from "react";
// import Popup from "reactjs-popup";

const Nav = (props) => {
  const handleChange = (event) => {
    props.setSearch(event.target.value);
  };
  const logOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("selectedItems");
    window.location.href = "/";
  };
  return (
    <nav>
      <h1 className="icon">e-Market</h1>
      <div className="container">
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a style={{ cursor: "pointter" }} onClick={logOut}>
              LogOut
            </a>
          </li>
          <li>
            <label>
              search:
              <input
                type="text"
                name="search"
                value={props.search}
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <a href="/conectUs">Conect US</a>
          </li>
          <li>
            <a href="/cart">Cart </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
