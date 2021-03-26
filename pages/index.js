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
                  <h1 className="title">Welcome {user.name}</h1><br />
                </div>
            </div>
            <div id="app" className="row columns is-multiline">
                <div className="column is-4">
                  <div className="card large">
                      <div className="card-image">
                        <figure className="image is-16by9"><img src="https://source.unsplash.com/h-ACUrBngrw/1280x720" alt="Image" /></figure>
                      </div>
                      <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                              <figure className="image is-48x48"><img src="https://avatars.dicebear.com/api/initials/john%20doe.svg" alt="Image" /></figure>
                            </div>
                            <div className="media-content">
                              <p className="title is-4 no-padding">Lead Developer</p>
                              <p><span className="title is-6"><a href="http://twitter.com/twitterid"> twitterid </a></span></p>
                              <p className="subtitle is-6">Lead Developer</p>
                            </div>
                        </div>
                        <div className="content">
                            The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.
                            <div className="background-icon"><span className="icon-twitter" /></div>
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
