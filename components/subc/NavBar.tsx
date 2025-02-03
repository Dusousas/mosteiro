import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Navbar Desktop */}
            <nav className="hidden lg:block">
                <ul className="flex gap-6 text-lg uppercase font-semibold text-BlueP">
                    <a href=""><li>Início</li></a>
                    <a href=""><li>Sobre</li></a>
                    <a href=""><li>Serviços</li></a>
                    <a href=""><li>Contato</li></a>
                </ul>
            </nav>

            {/* Navbar Mobile */}
            <div className="lg:hidden">
                {/* Botão do menu */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="text-3xl text-BlueP focus:outline-none"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Menu Mobile */}
                <nav className={`${isOpen ? "block" : "hidden"} absolute left-0 top-[150px] w-full bg-white shadow-md z-50 py-8`}>
                    <ul className="flex flex-col items-center gap-8 py-8 text-lg uppercase font-semibold text-BlueP">
                        <a href=""><li>Início</li></a>
                        <a href=""><li>Sobre</li></a>
                        <a href=""><li>Serviços</li></a>
                        <a href=""><li>Contato</li></a>
                    </ul>
                </nav>
            </div>
        </>
    );
}
