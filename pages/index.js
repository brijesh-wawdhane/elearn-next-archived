import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import { useUser } from '@auth0/nextjs-auth0';
import React from "react";


export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <Navbar />
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <><Navbar /><a href="/api/auth/login">Login</a></>;
}
