import { end } from "@popperjs/core";
import React from "react";

export default function Nav_actions() {
  return (
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">Create Post</a>
      </div>
      <div className="navbar-end">
        <a href="/profile" className="navbar-item">
          Account
        </a>
      </div>
    </div>
  );
}
