import React from 'react'

export default function Nav_actions() {
  
    return (
        <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
            <a className="navbar-item">
            Dashboard
            </a>
        </div>
        <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
                Account
            </a>
            <div className="navbar-dropdown">
                <a href="/api/auth/login" className="navbar-item">
                Log In
                </a>
                <a href="/api/auth/login" className="navbar-item">
                Sign Up
                </a>
            </div>
            </div>
        </div>
        </div>
        );
}