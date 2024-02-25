import React from 'react';
import LoginButton from '@/components/LoginButton';

import Link from 'next/link';

const Navbar = () => {
  return (


    <div className="ui  menu">
      <div className="ui container">
        <Link href="/" className="header item">
          Presentation Trainner
        </Link>
        <div className="right menu">
          
        <Link href="/session" className='item' >
            Presentations
          </Link>
          <Link href="/session" className='item' >
            Start a Session
          </Link>
          <Link href="/upload-record" className='item' >
            Upload Records*
          </Link>
          
          <Link href="/profile" className='item' >
            Profile
          </Link>
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
