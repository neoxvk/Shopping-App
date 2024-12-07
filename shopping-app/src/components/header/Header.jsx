import React from 'react'
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import CartButton from './CartButton';
import BecomeASeller from './BecomeASeller';

const Header = () => {
  return (
    <div className="w-screen bg-blue-600 flex h-14 fixed top-0 left-0">
      <h2 className="font-bold text-2xl text-white ml-10 p-2 cursor-grab hover:translate-x-1">
        Shopping App
      </h2>
        <div className='flex  p-1 mx-12 max-w-full '><SearchBar/></div>
        <div className='mr-10 mx-10 ml-auto flex'>
            <LoginButton/>
            <CartButton/>
            <BecomeASeller/>
        </div>
    </div>
  );
}

export default Header