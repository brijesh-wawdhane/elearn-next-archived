import React from "react";

export default function Nav_brand() {
  return (
    <div className="navbar-brand">
      <a className="navbar-item" href="../">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width={112}
          height={28}
        />
      </a>
      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
  );
}
