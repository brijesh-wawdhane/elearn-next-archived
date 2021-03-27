import '../styles/globals.css';
import React from 'react';
import '../configureAmplify'

export default function App({ Component, pageProps }) {
  return (
      <div className="">
        <Component {...pageProps} />
      </div>
  );
}