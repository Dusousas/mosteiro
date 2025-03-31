import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useRouter } from 'next/router';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string>('');
    const router = useRouter();

    const isActivePage = (path: string) => router.pathname === path;

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

    // Define a classe ativa para os links do menu
    const isActive = (section: string) => {
        return activeLink === section && !isActivePage('/Calendario') ? 'text-OrangeP' : 'text-BlueP';
    };

    // Função para rolar até a seção correta ou mudar de página
    const handleNavigation = (section: string, path: string = "/") => {
        if (router.pathname === path) {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push(path).then(() => {
                setTimeout(() => {
                    const element = document.getElementById(section);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 500);
            });
        }
    };

    return (
        <>
            <nav className="hidden lg:block">
                <ul className="flex gap-6 text-lg uppercase tracking-wider">
                    <li className={`cursor-pointer ${isActive('home')}`} onClick={() => handleNavigation('home')}>
                        Início
                    </li>
                    <li className={`cursor-pointer ${isActive('about')}`} onClick={() => handleNavigation('about')}>
                        Sobre
                    </li>
                    <li className={`cursor-pointer ${isActive('missas')}`} onClick={() => handleNavigation('missas')}>
                        Missas
                    </li>
                    <li className={`cursor-pointer ${isActive('tradicao')}`} onClick={() => handleNavigation('tradicao')}>
                        Tradições
                    </li>
                    <li className={`cursor-pointer ${isActivePage('/Calendario') ? 'text-OrangeP' : 'text-BlueP'}`} onClick={() => router.push('/Calendario')}>
                        Eventos
                    </li>
                </ul>
            </nav>

            <div className="lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-3xl text-BlueP focus:outline-none"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

                <nav className={`${isOpen ? "block" : "hidden"} absolute left-0 top-[96px] w-full bg-white shadow-md z-50 py-8 text-OrangeP`}>
                    <ul className="flex flex-col items-center gap-8 py-8 text-lg uppercase tracking-wider">
                        <li className={`cursor-pointer ${isActive('home')}`} onClick={() => handleNavigation('home')}>
                            Início
                        </li>
                        <li className={`cursor-pointer ${isActive('about')}`} onClick={() => handleNavigation('about')}>
                            Sobre
                        </li>
                        <li className={`cursor-pointer ${isActive('missas')}`} onClick={() => handleNavigation('missas')}>
                            Missas
                        </li>
                        <li className={`cursor-pointer ${isActive('tradicao')}`} onClick={() => handleNavigation('tradicao')}>
                            Tradições
                        </li>
                        <li className={`cursor-pointer ${isActivePage('/Calendario') ? 'text-OrangeP' : 'text-BlueP'}`} onClick={() => router.push('/Calendario')}>
                            Eventos
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
