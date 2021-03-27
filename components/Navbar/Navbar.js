import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Nav_brand from "./Nav_brand";
import Nav_actions from "./Nav_actions";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar"
        style={{ backgroundColor: "#ced4da" }}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <Nav_brand />
          <Nav_actions />
        </div>
      </nav>
    </>
  );
}
