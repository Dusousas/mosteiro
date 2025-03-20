import React from 'react';
import Navbar from './subc/NavBar';

export default function Header() {
    return (
        <header className="absolute top-0 left-0 w-full py-2 bg-transparent z-50 border-b-[1px] border-gray-500">
            <div className="maxW flex items-center justify-between">

                <a href="/"><img className='w-[250px]' src="logo.png" alt="" /></a>

                <Navbar />
            </div>
        </header>
    );
}
