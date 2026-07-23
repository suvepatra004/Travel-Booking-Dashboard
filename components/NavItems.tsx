import React from "react";
import { Link } from "react-router";

const NavItems = () => {
  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size:30px" />
        <h2>TravelGo</h2>
      </Link>
    </section>
  );
};

export default NavItems;
