import '../styles/globals.css';
import React from 'react';
import '../configureAmplify'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
      <div>
        <div className="container">
          <Component {...pageProps} />
        </div>
      </div>
  );
}