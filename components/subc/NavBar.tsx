import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useRouter } from 'next/router';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string>('');

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    // Função para aplicar a classe de cor ativa
    const isActive = (section: string) => {
        return activeLink === section ? 'text-OrangeP' : 'text-BlueP';
    };

    return (
        <>
            {/* Navbar Desktop */}
            <nav className="hidden lg:block">
                <ul className="flex gap-6 text-lg uppercase tracking-wider">
                    <a href="#home">
                        <li className={isActive('home')}>Início</li>
                    </a>
                    <a href="#about">
                        <li className={isActive('about')}>Sobre</li>
                    </a>
                    <a href="#missas">
                        <li className={isActive('missas')}>Missas</li>
                    </a>
                    <a href="#tradicao">
                        <li className={isActive('tradicao')}>Tradições</li>
                    </a>
                    <a href="#contato">
                        <li className={isActive('contato')}>Contato</li>
                    </a>
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
                <nav className={`${isOpen ? "block" : "hidden"} absolute left-0 top-[96px] w-full bg-white shadow-md z-50 py-8 text-OrangeP`}>
                    <ul className="flex flex-col items-center gap-8 py-8 text-lg uppercase tracking-wider">
                        <a href="#home">
                            <li className={isActive('home')}>Início</li>
                        </a>
                        <a href="#about">
                            <li className={isActive('about')}>Sobre</li>
                        </a>
                        <a href="#missas">
                            <li className={isActive('missas')}>Missas</li>
                        </a>
                        <a href="#tradicao">
                            <li className={isActive('tradicao')}>Tradições</li>
                        </a>
                        <a href="#contato">
                            <li className={isActive('contato')}>Contato</li>
                        </a>
                    </ul>
                </nav>
            </div>
        </>
    );
}
