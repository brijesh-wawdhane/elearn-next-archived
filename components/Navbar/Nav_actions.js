import React from 'react'
import { useUser } from '@auth0/nextjs-auth0';

export default function Nav_actions() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
  
    if (user) {
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
                <a className="navbar-item">
                {user.name}
                </a>
                <hr className="navbar-divider" />
                <a href="/api/auth/logout" className="navbar-item">
                Sign out
                </a>
            </div>
        </div>

        </div>
        </div>
      );
    }
  
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