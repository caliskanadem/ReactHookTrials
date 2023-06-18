import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="menu">
      <Link
        style={{ textDecoration: "none", fontSize: "30px", color: "black" }}
        to="/"
      >
        Menu
      </Link>
      <div className="container">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="users">
          Users
        </Link>
        <Link className="link" to="contact">
          Contact
        </Link>
        {/* <h4 style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
          Geri
        </h4> */}
      </div>
    </div>
  );
};

export default Menu;
