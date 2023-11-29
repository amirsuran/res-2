import React from 'react'
import Link from 'next/link'
import HamburgerMenu from '../hb-menu/hamburger-menu';

const Header = () => {

    return (
        <header className="flex items-center justify-between text-center fixed w-full left-0 top-5 z-20 selection:bg-fuchsia-300 selection:text-fuchsia-900">
            <div className=''>
                <HamburgerMenu />
            </div>
            <div className="flex gap-6 space-x-40 text-2xl">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#products">Products</a>
                <a href="#contact">Contact</a>
            </div>
            <div></div>
        </header>
    );
}

export default Header