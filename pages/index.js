import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import { useUser } from '@auth0/nextjs-auth0';
import React, { useState } from 'react';


export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    let userName = user.name.substring(0, user.name.indexOf("@"));
    return (
      <div className="bg-gray-1">

        <Navbar />
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>

        <div className="container">
          <div>
            <div className="columns">
                <div className="column has-text-centered">
                  <h1 className="title" style={{textTransform: 'capitalize'}}>Welcome {userName}</h1><br />
                </div>
            </div>
            <div id="app" className="row columns is-multiline">
                <div className="column is-4">

                  <div className="card large">
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4 no-padding">Lead Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                
                </div>
                
              </div>
          </div>
        </div>

      </div>
    );
  }

  return <><Navbar /><a href="/api/auth/login">Login</a></>;
}
