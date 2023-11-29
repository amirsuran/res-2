'use client'
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';



const HamburgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<any>(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        if (menuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);



    return (
        <div className="relative" ref={menuRef}>
            <button onClick={toggleMenu} className="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </button>


            {menuOpen && (
                <div
                    className="fixed top-0 left-0 h-screen backdrop-blur-sm bg-opacity-75 w-96" >
                    <div className="p-4">
                        <p className="text-white">Menu Item 1</p>
                        <p className="text-white">Menu Item 2</p>
                        <p className="text-white">Menu Item 3</p>

                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;